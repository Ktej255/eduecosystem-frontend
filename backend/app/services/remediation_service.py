from typing import List, Dict, Optional
from datetime import datetime
from sqlalchemy.orm import Session
from sqlalchemy import text
from app.services.concept_tagging import concept_tagging

class RemediationService:
    """
    Sequenced Healing Paths (Phase 12).
    Transforms concept gaps into structured recovery journeys.
    """

    def build_healing_path(
        self, 
        db: Session,
        student_id: int,
        node_id: str,
        subject_slug: str
    ) -> List[Dict]:
        """
        Assembles a 4-step sequence: Context -> Dialogue -> Drill -> Proof.
        Healing is considered successful only when stability_score > 0.8.
        """
        # 1. Fetch node metadata and content inventory
        node_meta = db.execute(text("""
            SELECT cn.node_name, cn.difficulty_level,
                   scm.mastery_score, scm.attempt_count,
                   scm.is_at_risk, scm.mastery_velocity,
                   scm.stability_score, scm.consecutive_correct
            FROM concept_nodes cn
            JOIN student_concept_mastery scm
                ON scm.node_id = cn.id AND scm.student_id = :sid
            WHERE cn.node_id = :nid AND cn.subject_slug = :slug
        """), {"sid": student_id, "nid": node_id, "slug": subject_slug}).fetchone()

        if not node_meta:
            return []

        meta = {
            "node_name": node_meta[0],
            "difficulty": node_meta[1],
            "mastery": float(node_meta[2] or 0),
            "is_at_risk": bool(node_meta[4]),
            "velocity": float(node_meta[5] or 0),
            "stability": float(node_meta[6] or 0),
            "wrong_streak": 3 if bool(node_meta[4]) and float(node_meta[5] or 0) < -5.0 else 0
        }

        content = concept_tagging.get_content_for_node(db, node_id)
        
        path = []
        
        # --- STEP 1: CONTEXT (Video Foundation) ---
        # Triggered for heavy relapse or low mastery
        if content.get("video") and (meta["mastery"] < 50 or meta["is_at_risk"]):
            vid = content["video"][0]
            path.append({
                "step": 1, "type": "video",
                "label": "Conceptual Foundation",
                "content_id": vid["content_id"],
                "action": "Watch the core video segment focusing on the logic of this concept.",
                "icon": "📺",
                "is_mandatory": True
            })

        # --- STEP 2: DIALOGUE (AI Tutor) ---
        # Mandatory AI Discussion to bridge the gap
        path.append({
            "step": len(path) + 1, "type": "ai_chat",
            "label": "Diagnostic Dialogue",
            "action": f"Discuss '{meta['node_name']}' with your AI Tutor to identify the specific misunderstanding.",
            "prompt_hint": self._generate_ai_prompt(meta),
            "icon": "💬",
            "is_mandatory": True
        })

        # --- STEP 3: DRILL (Targeted MCQs) ---
        mcqs = content.get("mcq", [])[:3]
        if mcqs:
            for i, mcq in enumerate(mcqs):
                path.append({
                    "step": len(path) + 1, "type": "mcq",
                    "label": f"Precision Drill {i+1}",
                    "content_id": mcq["content_id"],
                    "action": "Solve this high-yield MCQ to test your understanding.",
                    "icon": "🎯",
                    "is_mandatory": (i == 0) # At least first MCQ is mandatory
                })

        # --- STEP 4: PROOF (Stability Lock) ---
        # Record a voice summary or do a final retention check
        path.append({
            "step": len(path) + 1, "type": "recall",
            "label": "Stability Proof",
            "action": "Record a 60-second summary explaining this concept in your own words.",
            "goal": "Reach Stability > 0.8",
            "icon": "🧠",
            "is_mandatory": True
        })

        return path

    def _generate_ai_prompt(self, meta: Dict) -> str:
        """Dynamic prompt generation based on student state."""
        if meta["is_at_risk"]:
            return f"The student is experiencing a 'Conceptual Relapse' in {meta['node_name']}. Start by asking if they recall the relationship between the primary components of this topic."
        if meta["mastery"] < 40:
            return f"The student is a beginner in {meta['node_name']}. Use the 'Socratic Method' to build the foundation from scratch."
        return f"Focus on high-level nuances of {meta['node_name']} to push mastery towards 100%."

    def is_concept_healed(self, stability_score: float) -> bool:
        """Phase 12 criteria: Healing is permanent only at 0.8 stability."""
        return stability_score >= 0.8

remediation_service = RemediationService()
