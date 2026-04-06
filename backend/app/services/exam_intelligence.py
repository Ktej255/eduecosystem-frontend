from sqlalchemy.orm import Session
from sqlalchemy import func, text
from typing import List, Dict, Any
from app.models.concept_node import ConceptNode
from app.models.student_concept_mastery import StudentConceptMastery
from app.models.upsc_pyq import UPSCPYQ

class ExamIntelligenceService:
    """
    Predictive engine for the 'Exam Intelligence Layer'.
    Calculates Readiness Scores and identifies high-risk knowledge gaps.
    """

    RELEVANCE_WEIGHTS = {
        "high": 1.0,
        "medium": 0.6,
        "low": 0.3
    }

    BUFFER_THRESHOLD = 60.0
    TARGET_THRESHOLD = 70.0

    def calculate_readiness_score(self, db: Session, user_id: int, subject_slug: str = "environment") -> Dict[str, Any]:
        """
        Calculates a weighted readiness score for a specific subject based on UPSC relevance.
        Formula: Sum(Mastery * Relevance Weight) / Sum(Relevance Weight)
        """
        # 1. Fetch all concepts and their mastery for the user
        concepts = db.query(ConceptNode).filter(ConceptNode.subject_slug == subject_slug).all()
        if not concepts:
            return {"readiness_score": 0.0, "status": "no_data"}

        mastery_map = {
            m.node_id: m.mastery_score 
            for m in db.query(StudentConceptMastery).filter(StudentConceptMastery.student_id == user_id).all()
        }

        total_weighted_score = 0.0
        total_weight = 0.0

        for concept in concepts:
            # Get weight based on UPSC relevance (defensive against None)
            relevance_dict = concept.exam_relevance or {}
            relevance = relevance_dict.get("UPSC", "low").lower()
            weight = self.RELEVANCE_WEIGHTS.get(relevance, 0.3)
            
            # Get student mastery (default 0.0)
            mastery = mastery_map.get(concept.id, 0.0)

            total_weighted_score += (mastery * weight)
            total_weight += weight

        readiness_score = (total_weighted_score / total_weight) if total_weight > 0 else 0.0
        
        # Stage-11 Hardware Hardening: Status Calibration
        status = "locked"
        if readiness_score >= self.TARGET_THRESHOLD:
            status = "unlocked"
        elif readiness_score >= self.BUFFER_THRESHOLD:
            status = "peekable"

        return {
            "readiness_score": round(readiness_score, 2),
            "total_nodes": len(concepts),
            "status": status,
            "thresholds": {
                "buffer": self.BUFFER_THRESHOLD,
                "target": self.TARGET_THRESHOLD
            }
        }

    def get_weak_node_spotlight(self, db: Session, user_id: int, subject_slug: str = "environment", limit: int = 3) -> List[Dict[str, Any]]:
        """
        Identifies high-relevance nodes with low mastery.
        """
        # Join ConceptNode with StudentConceptMastery
        query = db.query(
            ConceptNode.node_id,
            ConceptNode.node_name,
            StudentConceptMastery.mastery_score,
            ConceptNode.exam_relevance
        ).outerjoin(
            StudentConceptMastery,
            (StudentConceptMastery.node_id == ConceptNode.id) & (StudentConceptMastery.student_id == user_id)
        ).filter(
            ConceptNode.subject_slug == subject_slug
        )

        results = query.all()
        
        # Sort by (Relevance Weight * (100 - Mastery)) - seeking high importance + low score
        scored_nodes = []
        for r in results:
            node_id, name, mastery, relevance_dict = r
            mastery = mastery or 0.0
            relevance = relevance_dict.get("UPSC", "low").lower()
            weight = self.RELEVANCE_WEIGHTS.get(relevance, 0.3)
            
            # Risk score: High weight + Low mastery = High risk
            risk_score = weight * (100 - mastery)
            
            scored_nodes.append({
                "node_id": node_id,
                "name": name,
                "mastery": mastery,
                "relevance": relevance,
                "risk_score": risk_score
            })

        # Return top N highest risk nodes
        return sorted(scored_nodes, key=lambda x: x["risk_score"], reverse=True)[:limit]

    def get_pyq_insights(self, db: Session, node_id: str) -> List[Dict[str, Any]]:
        """
        Fetches historical PYQ data across the Many-to-Many relationship.
        A single node can now be linked to multiple PYQs, and a PYQ can belong to multiple nodes.
        """
        from app.models.concept_node import ConceptNode
        node = db.query(ConceptNode).filter(ConceptNode.node_id == node_id).first()
        if not node:
            return []
            
        pyqs = node.pyqs
        return [
            {
                "year": p.year,
                "question": p.question_text[:100] + "...",
                "explanation": (p.official_explanation or "")[:100] + "..."
            } for p in sorted(pyqs, key=lambda x: x.year, reverse=True)
        ]

exam_intelligence_service = ExamIntelligenceService()
