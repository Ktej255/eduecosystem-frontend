"""
learning_engine.py — Core Intelligence Layer for Guided Learning Portal
=======================================================================
This service is the central brain that decides what a student should do next.

Five signals evaluated:
  1. Concept mastery score (weighted composite)
  2. Recall performance (SM-2 intervals)
  3. MCQ accuracy (recent activity log)
  4. Time since last revision
  5. Concept dependencies (knowledge graph prerequisite chain)

Five learning states:
  STATE_1 → LEARNING          (studying new concept)
  STATE_2 → RECALL            (due for spaced repetition)
  STATE_3 → REINFORCEMENT     (mastery < 60 after attempts)
  STATE_4 → EXAM_PRACTICE     (foundation mastery >= 70%)
  STATE_5 → REVISION_CYCLE    (scheduled SM-2 review)
"""
from __future__ import annotations

import logging
from dataclasses import dataclass, field
from datetime import date, datetime, timedelta
from enum import Enum
from typing import Any, Dict, List, Optional, Tuple
from .momentum_service import MomentumService

from sqlalchemy import text
from sqlalchemy.orm import Session

log = logging.getLogger(__name__)


# ─── Enums ────────────────────────────────────────────────────────────────────

class LearningState(str, Enum):
    LEARNING       = "learning"
    RECALL         = "recall"
    REINFORCEMENT  = "reinforcement"
    EXAM_PRACTICE  = "exam_practice"
    REVISION_CYCLE = "revision_cycle"
    HEALING        = "healing"


class NextAction(str, Enum):
    WATCH_VIDEO      = "watch_video"
    AI_CONVERSATION  = "ai_conversation"
    RECALL_SESSION   = "recall_session"
    PRACTICE_MCQ     = "practice_mcq"
    EXAM_DRILL       = "exam_drill"
    REINFORCE_PREREQ = "reinforce_prereq"
    REVIEW_WEAK      = "review_weak"
    FREE_EXPLORE     = "free_explore"
    HEALING_SESSION  = "healing_session"


# ─── Score weights (sum to 100) ───────────────────────────────────────────────

MASTERY_WEIGHTS = {
    "video_watch":    10,
    "conversation":   20,
    "mcq":            40,
    "recall":         30,
}

# Thresholds
WEAK_THRESHOLD        = 60.0
STRONG_THRESHOLD      = 80.0
EXAM_READY_THRESHOLD  = 70.0   # average foundation mastery to enter exam mode
AI_INTERVENTION_FAILS = 3      # consecutive fails before AI nudge


# ─── Data classes ─────────────────────────────────────────────────────────────

@dataclass
class NodeSignals:
    """All signals for a single concept node."""
    node_id: str
    node_name: str
    mastery_score: float          # composite 0-100
    raw_mastery: float            # SM-2 score from DB
    attempt_count: int
    last_activity: Optional[datetime]
    next_review_date: Optional[date]
    recent_mcq_accuracy: float    # 0-100, -1 if no MCQs
    recall_performance: float     # 0-100, -1 if no recalls
    video_watched: bool
    prereq_ids: List[str]
    difficulty: str

    @property
    def is_weak(self) -> bool:
        return self.mastery_score < WEAK_THRESHOLD

    @property
    def is_strong(self) -> bool:
        return self.mastery_score >= STRONG_THRESHOLD

    @property
    def recall_due(self) -> bool:
        if not self.next_review_date:
            return False
        return self.next_review_date <= date.today()

    @property
    def days_since_last_activity(self) -> int:
        if not self.last_activity:
            return 9999
        delta = datetime.utcnow() - self.last_activity
        return delta.days


@dataclass
class EngineDecision:
    """Output from the learning engine for a student + subject."""
    learning_state: LearningState
    next_action: NextAction
    priority_node_id: Optional[str]
    priority_node_name: Optional[str]
    reason: str
    confidence: float             # 0-1
    todays_plan: List[Dict[str, Any]] = field(default_factory=list)
    ai_intervention: bool = False
    ai_message: Optional[str] = None
    exam_readiness: float = 0.0   # 0-100
    efficiency_score: float = 0.0


# ─── Engine ───────────────────────────────────────────────────────────────────

class LearningEngine:
    """
    Core decision engine. Stateless — takes a DB session and evaluates signals.
    """

    def evaluate(
        self,
        db: Session,
        student_id: int,
        subject_slug: str = "environment",
    ) -> EngineDecision:
        """
        Main entry point. Runs the full evaluation pipeline and returns a decision.
        """
        signals = self._collect_signals(db, student_id, subject_slug)

        if not signals:
            return EngineDecision(
                learning_state=LearningState.LEARNING,
                next_action=NextAction.WATCH_VIDEO,
                priority_node_id=None,
                priority_node_name=None,
                reason="No concept data found. Start your first module.",
                confidence=1.0,
            )

        exam_readiness = self._compute_exam_readiness(signals)
        efficiency     = self._compute_efficiency_score(signals)

        # Priority 0: Soft Lock (Phase 15 Remediation)
        # Force healing if 3+ concepts are failing simultaneously
        relapsed = [s for s in signals if s.mastery_score < 40 and s.attempt_count >= 3]
        if len(relapsed) >= 3:
            from .remediation_service import remediation_service
            target = sorted(relapsed, key=lambda s: s.mastery_score)[0]
            healing_path = remediation_service.build_healing_path(db, student_id, target.node_id, subject_slug)
            return EngineDecision(
                learning_state=LearningState.HEALING,
                next_action=NextAction.HEALING_SESSION,
                priority_node_id=target.node_id,
                priority_node_name=target.node_name,
                reason=f"System Lock: You have {len(relapsed)} critical concept relapses. Let's fix '{target.node_name}' first.",
                confidence=1.0,
                todays_plan=healing_path,
                exam_readiness=exam_readiness,
                efficiency_score=efficiency,
            )

        # Priority 1: Recalls overdue
        due_recalls = [s for s in signals if s.recall_due and s.attempt_count > 0]
        if due_recalls:
            target = sorted(due_recalls, key=lambda s: s.mastery_score)[0]
            plan = self._build_plan(signals, "recall")
            ai_intervene, ai_msg = self._check_intervention(db, student_id, target)
            return EngineDecision(
                learning_state=LearningState.RECALL,
                next_action=NextAction.RECALL_SESSION,
                priority_node_id=target.node_id,
                priority_node_name=target.node_name,
                reason=f"Your recall for '{target.node_name}' is due today.",
                confidence=0.95,
                todays_plan=plan,
                ai_intervention=ai_intervene,
                ai_message=ai_msg,
                exam_readiness=exam_readiness,
                efficiency_score=efficiency,
            )

        # Priority 2: Weak concepts that were attempted (reinforcement)
        weak_attempted = [s for s in signals if s.is_weak and s.attempt_count >= 2]
        if weak_attempted:
            target = sorted(weak_attempted, key=lambda s: s.mastery_score)[0]
            # Check prerequisite chain
            weak_prereqs = self._find_weak_prerequisites(signals, target)
            if weak_prereqs:
                prereq = weak_prereqs[0]
                plan = self._build_plan(signals, "reinforcement")
                return EngineDecision(
                    learning_state=LearningState.REINFORCEMENT,
                    next_action=NextAction.REINFORCE_PREREQ,
                    priority_node_id=prereq.node_id,
                    priority_node_name=prereq.node_name,
                    reason=f"Your understanding of '{target.node_name}' is weak because '{prereq.node_name}' needs reinforcement first.",
                    confidence=0.9,
                    todays_plan=plan,
                    exam_readiness=exam_readiness,
                    efficiency_score=efficiency,
                )
            # No weak prereqs — reinforce the concept directly
            ai_intervene, ai_msg = self._check_intervention(db, student_id, target)
            plan = self._build_plan(signals, "reinforcement")
            return EngineDecision(
                learning_state=LearningState.REINFORCEMENT,
                next_action=NextAction.REVIEW_WEAK,
                priority_node_id=target.node_id,
                priority_node_name=target.node_name,
                reason=f"'{target.node_name}' is at {target.mastery_score:.0f}% mastery. Let's strengthen it.",
                confidence=0.88,
                todays_plan=plan,
                ai_intervention=ai_intervene,
                ai_message=ai_msg,
                exam_readiness=exam_readiness,
                efficiency_score=efficiency,
            )

        # Priority 3: Exam practice (sufficient mastery)
        if exam_readiness >= EXAM_READY_THRESHOLD:
            plan = self._build_plan(signals, "exam")
            return EngineDecision(
                learning_state=LearningState.EXAM_PRACTICE,
                next_action=NextAction.EXAM_DRILL,
                priority_node_id=None,
                priority_node_name=None,
                reason=f"Your foundation mastery is {exam_readiness:.0f}%. Time to practice exam-style questions.",
                confidence=0.92,
                todays_plan=plan,
                exam_readiness=exam_readiness,
                efficiency_score=efficiency,
            )

        # Priority 4: Learn next unstarted concept
        unstarted = [s for s in signals if s.attempt_count == 0]
        if unstarted:
            # Pick the one whose prerequisites are all satisfied
            ready = [s for s in unstarted if self._prereqs_satisfied(signals, s)]
            target = ready[0] if ready else unstarted[0]
            plan = self._build_plan(signals, "learning")
            return EngineDecision(
                learning_state=LearningState.LEARNING,
                next_action=NextAction.WATCH_VIDEO if not target.video_watched else NextAction.AI_CONVERSATION,
                priority_node_id=target.node_id,
                priority_node_name=target.node_name,
                reason=f"Start learning '{target.node_name}' — your next concept.",
                confidence=0.85,
                todays_plan=plan,
                exam_readiness=exam_readiness,
                efficiency_score=efficiency,
            )

        # Default: revision cycle (SM-2 maintenance)
        plan = self._build_plan(signals, "revision")
        return EngineDecision(
            learning_state=LearningState.REVISION_CYCLE,
            next_action=NextAction.PRACTICE_MCQ,
            priority_node_id=None,
            priority_node_name=None,
            reason="Great progress! Keep your knowledge fresh with targeted practice.",
            confidence=0.75,
            todays_plan=plan,
            exam_readiness=exam_readiness,
            efficiency_score=efficiency,
        )

    # ─── Signal Collection ────────────────────────────────────────────────────

    def _collect_signals(
        self, db: Session, student_id: int, subject_slug: str
    ) -> List[NodeSignals]:
        """
        Pulls all concept signals for the student from the DB.
        Uses raw SQL for performance at 10k+ concurrent students.
        """
        rows = db.execute(text("""
            WITH McqSummary AS (
                SELECT node_id, AVG(score) as avg_score
                FROM student_activity_log
                WHERE student_id = :sid AND activity_type = 'MCQ'
                GROUP BY node_id
            ),
            RecallSummary AS (
                SELECT node_id, score, 
                       ROW_NUMBER() OVER(PARTITION BY node_id ORDER BY timestamp DESC) as rn
                FROM student_activity_log
                WHERE student_id = :sid AND activity_type = 'RECALL'
            ),
            VideoMetrics AS (
                SELECT node_id, COUNT(*) > 0 as watched
                FROM student_activity_log
                WHERE student_id = :sid AND activity_type = 'VIDEO_WATCH'
                GROUP BY node_id
            )
            SELECT
                cn.node_id,
                cn.node_name,
                cn.difficulty_level,
                cn.prerequisite_nodes,
                COALESCE(scm.mastery_score, 0) AS raw_mastery,
                COALESCE(scm.attempt_count, 0) AS attempt_count,
                scm.last_activity_date,
                scm.next_review_date,
                ms.avg_score                  AS recent_mcq_accuracy,
                rs.score                      AS recall_performance,
                COALESCE(vm.watched, false)     AS video_watched,
                cn.exam_relevance
            FROM concept_nodes cn
            LEFT JOIN student_concept_mastery scm ON scm.node_id = cn.id AND scm.student_id = :sid
            LEFT JOIN McqSummary ms ON ms.node_id = cn.id
            LEFT JOIN RecallSummary rs ON rs.node_id = cn.id AND rs.rn = 1
            LEFT JOIN VideoMetrics vm ON vm.node_id = cn.id
            WHERE cn.subject_slug = :slug
            ORDER BY cn.module_id ASC, cn.node_id ASC
        """), {"sid": student_id, "slug": subject_slug}).fetchall()


        signals = []
        for r in rows:
            raw_mastery = float(r[4] or 0)
            mcq_acc = float(r[8]) if r[8] is not None else -1.0
            recall_perf = float(r[9]) if r[9] is not None else -1.0
            last_activity = r[6]
            relevance_data = r[11] or {}

            # Composite mastery score (weighted)
            composite = self._compute_composite_mastery(
                raw_mastery=raw_mastery,
                video_watched=bool(r[10]),
                mcq_accuracy=mcq_acc,
                recall_performance=recall_perf,
                attempt_count=int(r[5] or 0),
            )

            # Stage-11 Hardware Hardening: Apply BKT Knowledge Decay
            if last_activity and composite > 0:
                relevance = "medium"
                if isinstance(relevance_data, dict):
                    relevance = relevance_data.get("UPSC", "medium").lower()
                
                composite = self._apply_knowledge_decay(composite, last_activity, relevance)

            prereqs = r[3] if isinstance(r[3], list) else []

            signals.append(NodeSignals(
                node_id=r[0],
                node_name=r[1],
                difficulty=r[2] or "foundation",
                prereq_ids=prereqs,
                raw_mastery=raw_mastery,
                mastery_score=composite,
                attempt_count=int(r[5] or 0),
                last_activity=last_activity,
                next_review_date=r[7],
                recent_mcq_accuracy=mcq_acc,
                recall_performance=recall_perf,
                video_watched=bool(r[10]),
            ))

        return signals

    def _apply_knowledge_decay(
        self, mastery: float, last_activity: datetime, relevance: str
    ) -> float:
        """
        Applies linear decay to mastery score based on inactivity and relevance.
        High relevance: 14 days thresh
        Medium relevance: 28 days thresh
        Low relevance: 45 days thresh
        """
        now = datetime.utcnow()
        days_passed = (now - last_activity).days
        
        # Determine threshold
        if relevance == "high":
            threshold = 14
        elif relevance == "low":
            threshold = 45
        else:
            threshold = 28
            
        if days_passed <= threshold:
            return mastery
            
        # Decay logic: lose 2% of mastery for every 'threshold' block passed beyond the first
        # Faster decay for high relevance
        decay_rate = 0.05 if relevance == "high" else (0.03 if relevance == "medium" else 0.02)
        epochs_over = days_passed // threshold
        
        decayed_mastery = mastery * ( (1 - decay_rate) ** epochs_over )
        return round(max(0.0, decayed_mastery), 1)

    # ─── Composite Mastery ────────────────────────────────────────────────────

    def _compute_composite_mastery(
        self,
        raw_mastery: float,
        video_watched: bool,
        mcq_accuracy: float,
        recall_performance: float,
        attempt_count: int,
    ) -> float:
        """
        Weighted composite mastery score (0-100).

        Weights:
          Video watch      → 10 pts (binary)
          AI conversation  → 20 pts (from raw SM-2 score, proxy)
          MCQ accuracy     → 40 pts
          Recall perf      → 30 pts
        """
        if attempt_count == 0:
            return 0.0

        score = 0.0

        # Video (10 pts)
        score += 10.0 if video_watched else 0.0

        # AI/conversation proxy — use SM-2 raw score as proxy (20 pts)
        # SM-2 mastery already incorporates conversation quality indirectly
        score += (raw_mastery / 100.0) * 20.0

        # MCQ accuracy (40 pts)
        if mcq_accuracy >= 0:
            score += (mcq_accuracy / 100.0) * 40.0
        else:
            # No MCQs yet — use raw mastery as partial proxy
            score += (raw_mastery / 100.0) * 20.0

        # Recall performance (30 pts)
        if recall_performance >= 0:
            score += (recall_performance / 100.0) * 30.0
        else:
            # No recall yet — give benefit of doubt from raw mastery
            score += (raw_mastery / 100.0) * 10.0

        return round(min(100.0, score), 1)

    # ─── Prerequisite Logic ───────────────────────────────────────────────────

    def _find_weak_prerequisites(
        self, signals: List[NodeSignals], target: NodeSignals
    ) -> List[NodeSignals]:
        """
        Traverse the prerequisite chain of target node.
        Return any prerequisites that are weak.
        """
        node_map = {s.node_id: s for s in signals}
        weak_prereqs = []

        for prereq_id in target.prereq_ids:
            prereq = node_map.get(prereq_id)
            if prereq and prereq.is_weak:
                weak_prereqs.append(prereq)

        return sorted(weak_prereqs, key=lambda s: s.mastery_score)

    def _prereqs_satisfied(self, signals: List[NodeSignals], node: NodeSignals) -> bool:
        """All prerequisites for this node have mastery >= WEAK_THRESHOLD."""
        node_map = {s.node_id: s for s in signals}
        for prereq_id in node.prereq_ids:
            prereq = node_map.get(prereq_id)
            if prereq and prereq.mastery_score < WEAK_THRESHOLD:
                return False
        return True

    # ─── Exam Readiness ───────────────────────────────────────────────────────

    def _compute_exam_readiness(self, signals: List[NodeSignals]) -> float:
        """
        Average composite mastery across all foundation nodes.
        Only counts nodes that have been attempted.
        """
        attempted = [s for s in signals if s.attempt_count > 0]
        if not attempted:
            return 0.0
        avg = sum(s.mastery_score for s in attempted) / len(attempted)
        # Scale by coverage: if only 10% of nodes attempted, penalise
        coverage = len(attempted) / max(len(signals), 1)
        return round(avg * coverage, 1)

    # ─── Efficiency Score ─────────────────────────────────────────────────────

    def _compute_efficiency_score(self, signals: List[NodeSignals]) -> float:
        """
        Learning efficiency = mastery gain / study consistency.
        Proxy: average mastery of studied nodes, weighted by recency.
        """
        active = [s for s in signals if s.attempt_count > 0 and s.last_activity]
        if not active:
            return 0.0

        now = datetime.utcnow()
        weighted_sum = 0.0
        weight_total = 0.0

        for s in active:
            # Recency weight: decay over 30 days
            days_ago = (now - s.last_activity).days if s.last_activity else 30
            recency_weight = max(0.1, 1.0 - (days_ago / 30.0))
            weighted_sum += s.mastery_score * recency_weight
            weight_total += recency_weight

        if weight_total == 0:
            return 0.0

        return round(weighted_sum / weight_total, 1)

    # ─── AI Intervention ──────────────────────────────────────────────────────

    def _check_intervention(
        self, db: Session, student_id: int, node: NodeSignals
    ) -> Tuple[bool, Optional[str]]:
        """
        Check if the AI tutor should intervene for this student+node.
        Triggers if:
          - ≥3 consecutive low scores on this node
          - Student skipped recall ≥2 times
          - MCQ accuracy dropped below 50% in last week
        """
        # Check consecutive low MCQ scores
        recent_scores = db.execute(text("""
            SELECT score FROM student_activity_log
            WHERE student_id = :sid
              AND node_id = (SELECT id FROM concept_nodes WHERE node_id = :nid LIMIT 1)
              AND activity_type = 'MCQ'
            ORDER BY timestamp DESC LIMIT 5
        """), {"sid": student_id, "nid": node.node_id}).fetchall()

        low_streak = 0
        for row in recent_scores:
            if (row[0] or 0) < 50:
                low_streak += 1
            else:
                break

        if low_streak >= AI_INTERVENTION_FAILS:
            msg = (
                f"You've attempted '{node.node_name}' {low_streak} times with low scores. "
                f"Let me explain the key mechanism step by step."
            )
            return True, msg

        # Check MCQ accuracy drop
        if node.recent_mcq_accuracy >= 0 and node.recent_mcq_accuracy < 50:
            msg = (
                f"Your accuracy on '{node.node_name}' has dropped to "
                f"{node.recent_mcq_accuracy:.0f}%. "
                f"Let's go back to basics together."
            )
            return True, msg

        return False, None

    # ─── Today's Plan Builder ────────────────────────────────────────────────

    def _build_plan(
        self, signals: List[NodeSignals], mode: str
    ) -> List[Dict[str, Any]]:
        """
        Build a concise, prioritised today's plan (max 5 items).
        """
        plan = []

        if mode == "recall":
            due = [s for s in signals if s.recall_due][:3]
            for s in due:
                plan.append({
                    "type": "recall", "node_id": s.node_id,
                    "node_name": s.node_name,
                    "estimated_minutes": 5,
                    "description": f"Day recall: {s.node_name}",
                    "icon": "🔁",
                })

        if mode == "reinforcement":
            weak = sorted([s for s in signals if s.is_weak and s.attempt_count > 0],
                          key=lambda s: s.mastery_score)[:2]
            for s in weak:
                plan.append({
                    "type": "reinforce", "node_id": s.node_id,
                    "node_name": s.node_name,
                    "estimated_minutes": 8,
                    "description": f"Reinforce: {s.node_name} ({s.mastery_score:.0f}%)",
                    "icon": "⚠️",
                })

        if mode == "learning":
            unstarted = [s for s in signals if s.attempt_count == 0][:2]
            for s in unstarted:
                plan.append({
                    "type": "learn", "node_id": s.node_id,
                    "node_name": s.node_name,
                    "estimated_minutes": 12,
                    "description": f"New concept: {s.node_name}",
                    "icon": "📚",
                })

        if mode == "exam":
            strong = sorted([s for s in signals if s.is_strong],
                            key=lambda s: s.mastery_score, reverse=True)[:3]
            for s in strong:
                plan.append({
                    "type": "exam_drill", "node_id": s.node_id,
                    "node_name": s.node_name,
                    "estimated_minutes": 6,
                    "description": f"Exam MCQ: {s.node_name}",
                    "icon": "🎯",
                })

        if mode == "revision":
            medium = sorted(
                [s for s in signals if WEAK_THRESHOLD <= s.mastery_score < STRONG_THRESHOLD
                 and s.attempt_count > 0],
                key=lambda s: s.mastery_score
            )[:3]
            for s in medium:
                plan.append({
                    "type": "review", "node_id": s.node_id,
                    "node_name": s.node_name,
                    "estimated_minutes": 5,
                    "description": f"Review: {s.node_name}",
                    "icon": "🔄",
                })

        # Always suggest at least one AI conversation item
        if len(plan) < 5:
            weak_nodes = sorted([s for s in signals if s.is_weak and s.attempt_count > 0],
                                 key=lambda s: s.mastery_score)
            if weak_nodes:
                plan.append({
                    "type": "ai_chat", "node_id": weak_nodes[0].node_id,
                    "node_name": weak_nodes[0].node_name,
                    "estimated_minutes": 7,
                    "description": f"AI conversation: {weak_nodes[0].node_name}",
                    "icon": "🤖",
                })

        return plan[:5]

    # ─── Activity Processing ──────────────────────────────────────────────────

    def process_activity(
        self,
        db: Session,
        student_id: int,
        activity_type: str,
        content_id: str,
        score: float = 0.0,
        duration: int = 0,
        subject_slug: str = "environment"
    ) -> Dict[str, Any]:
        """
        Generic wrapper to process any learning activity.
        1. Map content_id to concept nodes.
        2. Log the activity.
        3. Update mastery for mapped nodes.
        4. Run the learning engine to generate next decision.
        5. Log and return decision.
        """
        # Map content to nodes
        tags = db.execute(text("""
            SELECT cn.id, cn.node_id, cct.weight, cct.is_primary
            FROM content_concept_tags cct
            JOIN concept_nodes cn ON cn.node_id = cct.node_id
            WHERE cct.content_id = :cid
        """), {"cid": content_id}).fetchall()
        
        primary_node_pk = None
        for tag in tags:
            if tag[3]:  # is_primary
                primary_node_pk = tag[0]
                break
        if not primary_node_pk and tags:
            primary_node_pk = tags[0][0]

        # 1. Log Activity
        activity_id = None
        try:
            res = db.execute(text("""
                INSERT INTO student_activity_log 
                    (student_id, activity_type, node_id, content_id, score, duration, timestamp)
                VALUES (:sid, :type, :nid, :cid, :score, :dur, NOW())
                RETURNING id
            """), {
                "sid": student_id, "type": activity_type, "nid": primary_node_pk,
                "cid": content_id, "score": score, "dur": duration
            })
            activity_id = res.scalar()
        except Exception as e:
            log.error(f"Error logging activity: {e}")

        # 2. Update Mastery (if there are tags)
        if tags:
            from app.services.concept_tagging import concept_tagging, ACTIVITY_MASTERY_WEIGHTS
            
            is_mcq = activity_type in ["mcq", "mcq_attempt"]
            if is_mcq:
                concept_tagging.process_mcq_attempt(db, student_id, content_id, score > 0, score, duration)
            else:
                is_video = activity_type in ["video_watch", "video_complete"]
                act_weight = ACTIVITY_MASTERY_WEIGHTS.get(
                    "video_watch" if is_video else "recall", 0.1
                )
                for tag in tags:
                    str_node_id = tag[1]
                    tag_weight = float(tag[2] or 1.0)
                    is_primary = bool(tag[3])
                    primary_factor = 1.0 if is_primary else 0.6
                    delta_score = score * tag_weight * primary_factor * act_weight
                    
                    concept_tagging._update_node_mastery(db, student_id, str_node_id, delta_score, score)

        # 3. Get next decision
        decision = self.evaluate(db, student_id, subject_slug)

        # 4. Log Decision
        if activity_id:
            try:
                db.execute(text("""
                    INSERT INTO student_engine_decisions
                        (student_id, activity_id, next_action, target_concept, timestamp)
                    VALUES (:sid, :aid, :act, :targ, NOW())
                """), {
                    "sid": student_id, "aid": activity_id, 
                    "act": decision.next_action.value if decision.next_action else None,
                    "targ": decision.priority_node_id
                })
            except Exception as e:
                log.error(f"Error logging engine decision: {e}")

        db.commit()

        return {
            "status": "success",
            "decision": {
                "learning_state": decision.learning_state.value if decision.learning_state else None,
                "next_action": decision.next_action.value if decision.next_action else None,
                "priority_node_id": decision.priority_node_id,
                "priority_node_name": decision.priority_node_name,
                "reason": decision.reason,
                "ai_intervention": decision.ai_intervention,
                "ai_message": decision.ai_message,
                "todays_plan": decision.todays_plan
            }
        }

    # ─── Analytics (Teacher Dashboard) ───────────────────────────────────────

    def get_cohort_analytics(
        self, db: Session, subject_slug: str
    ) -> Dict[str, Any]:
        """
        Aggregate analytics for teacher dashboard.
        """
        rows = db.execute(text("""
            SELECT
                cn.node_id,
                cn.node_name,
                cn.difficulty_level,
                COUNT(scm.student_id)               AS student_count,
                AVG(scm.mastery_score)               AS avg_mastery,
                MIN(scm.mastery_score)               AS min_mastery,
                MAX(scm.mastery_score)               AS max_mastery,
                SUM(CASE WHEN scm.mastery_score < 60 THEN 1 ELSE 0 END) AS weak_count
            FROM concept_nodes cn
            LEFT JOIN student_concept_mastery scm ON scm.node_id = cn.id
            WHERE cn.subject_slug = :slug
            GROUP BY cn.node_id, cn.node_name, cn.difficulty_level
            ORDER BY AVG(scm.mastery_score) ASC NULLS LAST
        """), {"slug": subject_slug}).fetchall()

        nodes = [
            {
                "node_id": r[0], "node_name": r[1], "difficulty": r[2],
                "student_count": r[3] or 0,
                "avg_mastery": round(float(r[4] or 0), 1),
                "min_mastery": round(float(r[5] or 0), 1),
                "max_mastery": round(float(r[6] or 0), 1),
                "weak_student_count": r[7] or 0,
            }
            for r in rows
        ]

        # Top 5 most difficult concepts (lowest avg mastery with > 1 student)
        top_difficult = [n for n in nodes if n["student_count"] > 0][:5]

        # Activity breakdown
        activity_counts = db.execute(text("""
            SELECT activity_type, COUNT(*) AS cnt, AVG(score) AS avg_score
            FROM student_activity_log sal
            JOIN concept_nodes cn ON cn.id = sal.node_id
            WHERE cn.subject_slug = :slug
            GROUP BY activity_type
        """), {"slug": subject_slug}).fetchall()

        activity_stats = [
            {"type": r[0], "count": int(r[1]), "avg_score": round(float(r[2] or 0), 1)}
            for r in activity_counts
        ]

        total_students = db.execute(text("""
            SELECT COUNT(DISTINCT scm.student_id)
            FROM student_concept_mastery scm
            JOIN concept_nodes cn ON cn.id = scm.node_id
            WHERE cn.subject_slug = :slug
        """), {"slug": subject_slug}).scalar() or 0

        return {
            "total_students": total_students,
            "total_nodes": len(nodes),
            "nodes_with_data": len(top_difficult),
            "most_difficult_concepts": top_difficult,
            "all_concepts": nodes,
            "activity_breakdown": activity_stats,
        }


# ─── Singleton instance ───────────────────────────────────────────────────────
learning_engine = LearningEngine()
