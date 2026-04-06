"""
concept_tagging.py — Concept Tagging Service
============================================
The intelligence layer that connects every learning object to concept nodes.

Responsibilities:
  - Tag any content item (MCQ, video, PYQ, note, PDF) to concept nodes
  - Auto-tag MCQ attempts → update per-concept mastery signals
  - Auto-tag video clips using guided_clips.node_ids (already stored)
  - Provide concept-based content retrieval for the Remediation Engine
  - Auto-tag new content using fuzzy matching against concept node names

Integration points:
  - Called by learning_engine when evaluating mastery signals
  - Called by MCQ submission endpoints after any answer
  - Called by Admin panel for bulk/manual tagging
"""
from __future__ import annotations

import logging
import re
from datetime import datetime
from typing import Any, Dict, List, Optional, Tuple

from sqlalchemy import text
from sqlalchemy.orm import Session

from app.api.api_v1.sm2 import compute_sm2, score_to_quality

log = logging.getLogger(__name__)

# Weight definitions for each activity type's contribution to mastery
ACTIVITY_MASTERY_WEIGHTS = {
    "video_watch":   0.10,   # Watching adds 10%
    "conversation":  0.20,   # AI conversation adds 20%
    "mcq":           0.40,   # MCQ is the strongest signal
    "recall":        0.30,   # Recall is second strongest
    "pyq":           0.35,   # PYQ slightly less than MCQ
    "note_read":     0.05,
    "pdf_read":      0.05,
}

# If an MCQ is answered wrongly, penalise mastery by this factor
WRONG_ANSWER_PENALTY = 0.6   # wrong answer contributes 60% * weight as negative signal


class ConceptTaggingService:
    """Stateless concept tagging engine."""

    # ─── Tagging ──────────────────────────────────────────────────────────────

    def tag_content(
        self,
        db: Session,
        content_type: str,
        content_id: str,
        node_ids: List[str],
        weights: Optional[Dict[str, float]] = None,
        primary_node_id: Optional[str] = None,
        tagged_by: str = "manual",
    ) -> int:
        """
        Link a content item to one or more concept nodes.

        Args:
            content_type: 'video' | 'mcq' | 'pyq' | 'note' | 'pdf'
            content_id:   External ID of the content (e.g. 'MCQ_105', 'M3C2')
            node_ids:     List of concept node string IDs (e.g. ['ENV_N010'])
            weights:      Optional per-node weight override {node_id: weight}
            primary_node_id: Which node is the primary concept tested
            tagged_by:    'manual' | 'auto' | 'ai'

        Returns:
            Number of tags inserted
        """
        inserted = 0
        wmap = weights or {}

        for node_id in node_ids:
            weight = wmap.get(node_id, 1.0)
            is_primary = (node_id == primary_node_id) if primary_node_id else True

            try:
                db.execute(text("""
                    INSERT INTO content_concept_tags
                        (content_type, content_id, node_id, weight, is_primary, tagged_by)
                    VALUES (:ct, :cid, :nid, :w, :pri, :by)
                    ON CONFLICT (content_type, content_id, node_id) DO UPDATE
                        SET weight = EXCLUDED.weight,
                            is_primary = EXCLUDED.is_primary,
                            tagged_by = EXCLUDED.tagged_by
                """), {
                    "ct": content_type, "cid": content_id, "nid": node_id,
                    "w": weight, "pri": is_primary, "by": tagged_by,
                })
                inserted += 1
            except Exception as e:
                log.warning(f"Tag insert failed for {content_type}/{content_id}/{node_id}: {e}")

        db.commit()
        return inserted

    def tag_video_segment(
        self,
        db: Session,
        clip_id: str,
        node_id: str,
        timestamp_start: int,
        timestamp_end: int,
        label: Optional[str] = None,
    ) -> bool:
        """Map a concept node to a specific timestamp range in a video."""
        try:
            db.execute(text("""
                INSERT INTO video_concept_map
                    (clip_id, node_id, timestamp_start, timestamp_end, label)
                VALUES (:clip, :nid, :ts, :te, :lbl)
                ON CONFLICT (clip_id, node_id, timestamp_start) DO UPDATE
                    SET timestamp_end = EXCLUDED.timestamp_end,
                        label = EXCLUDED.label
            """), {
                "clip": str(clip_id), "nid": node_id,
                "ts": timestamp_start, "te": timestamp_end, "lbl": label,
            })
            db.commit()
            return True
        except Exception as e:
            log.error(f"Video segment tag failed: {e}")
            return False

    # ─── MCQ Attempt Processing ───────────────────────────────────────────────

    def process_mcq_attempt(
        self,
        db: Session,
        student_id: int,
        mcq_id: str,
        is_correct: bool,
        score: float,  # 0-100
        time_taken_seconds: Optional[int] = None,
    ) -> List[Dict[str, Any]]:
        """
        Legacy single-concept entry point. Resolves tags and calls multi-node processor.
        """
        tags = db.execute(text("""
            SELECT node_id, weight, is_primary
            FROM content_concept_tags
            WHERE content_type = 'mcq' AND content_id = :mcq_id
        """), {"mcq_id": mcq_id}).fetchall()

        if not tags:
            log.info(f"No concept tags found for MCQ {mcq_id}. Skipping mastery update.")
            return []

        node_ids = [t[0] for t in tags]
        return self.process_multi_node_attempt(
            db, student_id, node_ids, is_correct, score, time_taken_seconds
        )

    def process_multi_node_attempt(
        self,
        db: Session,
        student_id: int,
        node_ids: List[str],
        is_correct: bool,
        score: float,
        time_taken_seconds: Optional[int] = None,
    ) -> List[Dict[str, Any]]:
        """
        Stage-11 Architecture: Update student mastery for multiple nodes simultaneously.
        Applies the 1/N Split Weighting rule to ensure mathematical stability.
        """
        num_tags = len(node_ids)
        if num_tags == 0:
            return []

        affected = []
        # Split signal across all linked nodes (1/N Rule)
        # This prevents 'Double Weighting' inflation.
        split_factor = 1.0 / num_tags
        activity_weight = ACTIVITY_MASTERY_WEIGHTS["mcq"]

        for node_id in node_ids:
            # ── Compute effective score contribution ────────────────────────
            if is_correct:
                delta_score = score * activity_weight * split_factor
            else:
                # Wrong answer decays mastery proportionally
                delta_score = score * activity_weight * WRONG_ANSWER_PENALTY * split_factor

            # ── Update mastery with SM-2 ────────────────────────────────────
            new_mastery = self._update_node_mastery(db, student_id, node_id, delta_score, score)

            affected.append({
                "node_id": node_id,
                "is_correct": is_correct,
                "new_mastery": new_mastery,
            })

            # ── Record the attempt in concept-mapping table ────────────────
            try:
                db.execute(text("""
                    INSERT INTO mcq_attempt_concepts
                        (student_id, mcq_id, node_id, is_correct, weight, timestamp)
                    VALUES (:sid, 'MULTI', :nid, :correct, :w, CURRENT_TIMESTAMP)
                """), {
                    "sid": student_id, "nid": node_id, "correct": is_correct, "w": split_factor,
                })
            except Exception as e:
                log.warning(f"Failed to record multi-node attempt for {node_id}: {e}")

        db.commit()
        return affected

    # ─── Auto-tagging ─────────────────────────────────────────────────────────

    def auto_tag_clips_from_node_ids(self, db: Session) -> int:
        """
        One-time seeder: reads guided_clips.node_ids (already stored JSONB)
        and creates content_concept_tags entries automatically.

        Run once after clips are uploaded. Safe to re-run (uses ON CONFLICT).
        """
        clips = db.execute(text("""
            SELECT id, node_ids FROM guided_clips
            WHERE node_ids IS NOT NULL AND node_ids != '[]'::jsonb
        """)).fetchall()

        total = 0
        for clip in clips:
            clip_id = str(clip[0])
            node_ids = clip[1] if isinstance(clip[1], list) else []
            for i, node_id in enumerate(node_ids):
                weight = 1.0 if i == 0 else 0.8  # first node = primary
                try:
                    db.execute(text("""
                        INSERT INTO content_concept_tags
                            (content_type, content_id, node_id, weight, is_primary, tagged_by)
                        VALUES ('video', :cid, :nid, :w, :pri, 'auto')
                        ON CONFLICT (content_type, content_id, node_id) DO NOTHING
                    """), {"cid": clip_id, "nid": node_id, "w": weight, "pri": (i == 0)})
                    total += 1
                except Exception as e:
                    log.warning(f"Auto-tag clip {clip_id}/{node_id}: {e}")

        db.commit()
        log.info(f"Auto-tagged {total} clip→node relationships")
        return total

    def auto_tag_by_name_match(
        self, db: Session, content_type: str, content_id: str, text_body: str,
        subject_slug: str = "environment"
    ) -> int:
        """
        AI-free fuzzy auto-tagger: scans text for concept node names and tags them.
        Used for MCQ questions, PYQ text, notes etc.

        Returns number of tags created.
        """
        nodes = db.execute(text("""
            SELECT node_id, node_name FROM concept_nodes
            WHERE subject_slug = :slug
        """), {"slug": subject_slug}).fetchall()

        matches = []
        text_lower = text_body.lower()

        for node in nodes:
            node_name_lower = node[1].lower()
            # Simple presence check — can be upgraded to fuzzy/embedding later
            if node_name_lower in text_lower:
                # Score by name length (longer = more specific = higher weight)
                weight = min(1.0, len(node_name_lower) / 20.0 + 0.5)
                matches.append((node[0], weight))

        if not matches:
            return 0

        # Primary = highest weight match
        matches.sort(key=lambda x: x[1], reverse=True)
        primary_node = matches[0][0]

        inserted = self.tag_content(
            db, content_type, content_id,
            node_ids=[m[0] for m in matches],
            weights={m[0]: m[1] for m in matches},
            primary_node_id=primary_node,
            tagged_by="auto",
        )
        return inserted

    # ─── Retrieval ────────────────────────────────────────────────────────────

    def get_content_for_node(
        self, db: Session, node_id: str
    ) -> Dict[str, List[Dict]]:
        """
        Returns all content linked to a concept node, grouped by type.
        This is what the Remediation Engine uses to generate a recovery plan.
        """
        tags = db.execute(text("""
            SELECT content_type, content_id, weight, is_primary
            FROM content_concept_tags
            WHERE node_id = :nid
            ORDER BY is_primary DESC, weight DESC
        """), {"nid": node_id}).fetchall()

        result: Dict[str, List] = {
            "video": [], "mcq": [], "pyq": [], "note": [], "pdf": []
        }

        for tag in tags:
            ctype = tag[0]
            if ctype in result:
                result[ctype].append({
                    "content_id": tag[1],
                    "weight": float(tag[2] or 1.0),
                    "is_primary": bool(tag[3]),
                })

        # Enrich videos with timestamp segments
        for video in result["video"]:
            segments = db.execute(text("""
                SELECT timestamp_start, timestamp_end, label
                FROM video_concept_map
                WHERE clip_id = :cid AND node_id = :nid
                ORDER BY timestamp_start
            """), {"cid": video["content_id"], "nid": node_id}).fetchall()

            video["segments"] = [
                {"start": s[0], "end": s[1], "label": s[2]}
                for s in segments
            ]

        return result

    def get_weak_nodes_with_content(
        self,
        db: Session,
        student_id: int,
        subject_slug: str = "environment",
        threshold: float = 60.0,
        limit: int = 10,
    ) -> List[Dict[str, Any]]:
        """
        Weak nodes for a student, each enriched with remediation content.
        Used by the Learning Engine and the front-end Remediation Panel.
        """
        # Phase 12: Centralized remediation logic extraction
        from app.services.remediation_service import remediation_service

        weak = db.execute(text("""
            SELECT cn.node_id, cn.node_name, cn.difficulty_level,
                   scm.mastery_score, scm.attempt_count,
                   -- recent MCQ accuracy for this node
                   (SELECT AVG(CAST(mac.is_correct AS INTEGER)) * 100
                    FROM mcq_attempt_concepts mac
                    WHERE mac.student_id = :sid AND mac.node_id = cn.node_id
                    ORDER BY mac.timestamp DESC LIMIT 5)  AS recent_mcq_accuracy,
                   -- consecutive wrong answers
                   (SELECT COUNT(*) FROM mcq_attempt_concepts mac
                    WHERE mac.student_id = :sid AND mac.node_id = cn.node_id
                      AND mac.is_correct = 0
                    ORDER BY mac.timestamp DESC LIMIT 3)  AS recent_wrong_streak,
                   scm.is_at_risk, scm.mastery_velocity,
                   scm.stability_score
            FROM concept_nodes cn
            JOIN student_concept_mastery scm
                ON scm.node_id = cn.id AND scm.student_id = :sid
            WHERE cn.subject_slug = :slug
              AND scm.mastery_score < :threshold
            ORDER BY scm.is_at_risk DESC, scm.mastery_score ASC
            LIMIT :lim
        """), {
            "sid": student_id, "slug": subject_slug,
            "threshold": threshold, "lim": limit,
        }).fetchall()

        result = []
        for row in weak:
            node_id = row[0]
            content = self.get_content_for_node(db, node_id)
            
            # Step-by-Step Sequenced Path (Context -> Dialogue -> Drill -> Proof)
            remediation = remediation_service.build_healing_path(
                db, student_id, node_id, subject_slug
            )

            result.append({
                "node_id":             node_id,
                "node_name":           row[1],
                "difficulty":          row[2],
                "mastery_score":       round(float(row[3] or 0), 1),
                "attempt_count":       int(row[4] or 0),
                "recent_mcq_accuracy": round(float(row[5] or 0), 1) if row[5] else None,
                "recent_wrong_streak": int(row[6] or 0),
                "is_at_risk":          bool(row[7]),
                "mastery_velocity":    round(float(row[8] or 0.0), 2),
                "stability_score":     round(float(row[9] or 0.0), 2),
                "content":             content,
                "remediation_plan":    remediation,
            })

        return result

    def get_node_concept_stats(
        self, db: Session, node_id: str, student_id: int
    ) -> Dict[str, Any]:
        """Detailed stats for a single node — used in the graph click side panel."""
        # MCQ performance for this node
        mcq_stats = db.execute(text("""
            SELECT
                COUNT(*)                              AS total_attempts,
                SUM(CASE WHEN is_correct THEN 1 ELSE 0 END) AS correct,
                AVG(CAST(is_correct AS INTEGER)) * 100            AS accuracy_pct,
                MAX(timestamp)                        AS last_attempt
            FROM mcq_attempt_concepts
            WHERE student_id = :sid AND node_id = :nid
        """), {"sid": student_id, "nid": node_id}).fetchone()

        # Content inventory
        content_counts = db.execute(text("""
            SELECT content_type, COUNT(*) FROM content_concept_tags
            WHERE node_id = :nid
            GROUP BY content_type
        """), {"nid": node_id}).fetchall()

        return {
            "node_id": node_id,
            "mcq_attempts":   int(mcq_stats[0] or 0),
            "mcq_correct":    int(mcq_stats[1] or 0),
            "mcq_accuracy":   round(float(mcq_stats[2] or 0), 1),
            "last_mcq_attempt": str(mcq_stats[3]) if mcq_stats[3] else None,
            "content_inventory": {row[0]: row[1] for row in content_counts},
        }

    # ─── Admin Bulk Operations ────────────────────────────────────────────────

    def get_all_tags(
        self, db: Session, content_type: Optional[str] = None, limit: int = 200
    ) -> List[Dict]:
        q = "SELECT id, content_type, content_id, node_id, weight, is_primary, tagged_by FROM content_concept_tags"
        params: Dict = {"lim": limit}
        if content_type:
            q += " WHERE content_type = :ct"
            params["ct"] = content_type
        q += " ORDER BY created_at DESC LIMIT :lim"

        rows = db.execute(text(q), params).fetchall()
        return [
            {"id": r[0], "content_type": r[1], "content_id": r[2], "node_id": r[3],
             "weight": r[4], "is_primary": r[5], "tagged_by": r[6]}
            for r in rows
        ]

    def delete_tag(self, db: Session, tag_id: int) -> bool:
        result = db.execute(text(
            "DELETE FROM content_concept_tags WHERE id = :tid"
        ), {"tid": tag_id})
        db.commit()
        return result.rowcount > 0

    # ─── Private Helpers ──────────────────────────────────────────────────────

    def _update_node_mastery(
        self,
        db: Session,
        student_id: int,
        node_id: str,
        delta_score: float,
        raw_score: float,
    ) -> float:
        """
        Update student_concept_mastery for a concept node string ID.
        Uses SM-2 for spaced repetition scheduling + Mastery Velocity logic.
        Returns new mastery score.
        """
        from app.api.api_v1.sm2 import compute_sm2, score_to_quality

        # Resolve string node_id → integer PK
        node_row = db.execute(text(
            "SELECT id FROM concept_nodes WHERE node_id = :nid LIMIT 1"
        ), {"nid": node_id}).fetchone()

        if not node_row:
            return 0.0

        node_pk = node_row[0]
        now = datetime.utcnow()

        mastery_row = db.execute(text("""
            SELECT id, mastery_score, attempt_count, ease_factor, interval, consecutive_correct, stability_score, last_activity_date
            FROM student_concept_mastery
            WHERE student_id = :sid AND node_id = :nid
        """), {"sid": student_id, "nid": node_pk}).fetchone()

        # Resolve raw_score to consistency parameters
        is_correct = raw_score >= 70.0 # Standard threshold
        
        if mastery_row:
            existing_id = mastery_row[0]
            old_mastery = float(mastery_row[1] or 0.0)
            old_streak = int(mastery_row[5] or 0)
            last_activity = mastery_row[7]
            
            # 1. Update Streak & Stability
            new_streak = (old_streak + 1) if is_correct else 0
            new_stability = min(new_streak / 3.0, 1.0) # Reach full stability after 3 correct in a row

            # 2. Clumsy Mistake Protection (Sensitivity Guard)
            effective_score = raw_score
            if not is_correct and old_mastery > 90.0 and old_streak >= 5:
                effective_score = 40.0 # "Warning" score instead of 0
                log.info(f"[CONSISTENCY] Clumsy mistake detected for User:{student_id} Node:{node_id}")

            # 3. SM-2 calculation
            quality = score_to_quality(effective_score)
            new_ef, new_interval, next_review = compute_sm2(
                float(mastery_row[3] or 2.5), int(mastery_row[4] or 0), quality
            )
            
            # Mastery Velocity calculation (Phase 12)
            # Weighted Blend: 70% existing + 30% new signal
            new_mastery = round(old_mastery * 0.7 + effective_score * 0.3, 1)
            
            # Parse last_activity if it's a string
            if isinstance(last_activity, str):
                try:
                    last_activity = datetime.fromisoformat(last_activity.replace('Z', '+00:00'))
                except ValueError:
                    last_activity = now # Fallback

            days_diff = (now - last_activity).total_seconds() / 86400.0 if last_activity else 1.0
            days_diff = max(days_diff, 0.01) # Avoid div by zero
            new_velocity = (new_mastery - old_mastery) / days_diff
            
            # 5. Relapse Detection
            is_at_risk = (new_mastery < 60.0) and (new_velocity < -5.0)

            # 6. Status Determination
            status = "Red"
            if new_mastery >= 85 and new_stability >= 1.0: status = "Green"
            elif new_mastery >= 60: status = "Yellow"

            db.execute(text("""
                UPDATE student_concept_mastery
                SET mastery_score = :ms,
                    attempt_count = attempt_count + 1,
                    ease_factor = :ef,
                    interval = :iv,
                    next_review_date = :nr,
                    consecutive_correct = :streak,
                    stability_score = :stab,
                    mastery_velocity = :velocity,
                    status = :status,
                    is_at_risk = :risk,
                    last_activity_date = :now,
                    updated_at = :now
                WHERE id = :mid
            """), {
                "ms": new_mastery, "ef": new_ef, "iv": new_interval,
                "nr": next_review, "streak": new_streak, "stab": new_stability,
                "velocity": new_velocity, "status": status, "risk": is_at_risk,
                "now": now, "mid": existing_id,
            })
        else:
            # First attempt
            new_streak = 1 if is_correct else 0
            new_stability = 0.0
            quality = score_to_quality(raw_score)
            new_ef, new_interval, next_review = compute_sm2(2.5, 0, quality)
            new_mastery = round(raw_score, 1)

            db.execute(text("""
                INSERT INTO student_concept_mastery
                    (student_id, node_id, mastery_score, attempt_count,
                     ease_factor, interval, next_review_date, last_activity_date,
                     consecutive_correct, stability_score, mastery_velocity, status, is_at_risk)
                VALUES (:sid, :nid, :ms, 1, :ef, :iv, :nr, :now, :streak, :stab, 0.0, 'Red', 0)
            """), {
                "sid": student_id, "nid": node_pk, "ms": new_mastery,
                "ef": new_ef, "iv": new_interval, "nr": next_review, "now": now,
                "streak": new_streak, "stab": new_stability,
            })

        db.commit()
        return float(new_mastery)

    def _detect_relapse(self, node_id: str, student_id: int, current_score: float, previous_score: float) -> bool:
        """
        Formal Relapse Detection (Phase 12).
        Triggers if score drops > 15% in a short window or velocity is sharply negative.
        """
        drop = previous_score - current_score
        return drop > 15.0 or current_score < 30.0

# ─── Singleton ────────────────────────────────────────────────────────────────
concept_tagging = ConceptTaggingService()


# ─── Singleton ────────────────────────────────────────────────────────────────
concept_tagging = ConceptTaggingService()
