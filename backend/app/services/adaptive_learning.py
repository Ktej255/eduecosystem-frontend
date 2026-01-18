from sqlalchemy.orm import Session
from sqlalchemy import desc
from app.models.adaptive_learning import (
    Concept,
    ConceptDependency,
    StudentMastery,
    InteractionLog,
    MasteryStatus,
)
from uuid import UUID
from datetime import datetime
from typing import Optional, Dict, Any

class AdaptiveLearningService:
    def __init__(self, db: Session):
        self.db = db

    def get_user_mastery(self, user_id: int, concept_id: UUID) -> Optional[StudentMastery]:
        return (
            self.db.query(StudentMastery)
            .filter(
                StudentMastery.user_id == user_id, 
                StudentMastery.concept_id == concept_id
            )
            .first()
        )

    def log_interaction(self, user_id: int, interaction_data: Dict[str, Any]) -> InteractionLog:
        """
        Logs an interaction and triggers the BKT update.
        interaction_data should contain:
        - question_id
        - associated_concept_id
        - is_correct
        - time_taken_ms
        - hesitation_detected
        - backspaces_count
        """
        db_log = InteractionLog(
            user_id=user_id,
            question_id=interaction_data.get("question_id"),
            associated_concept_id=interaction_data.get("associated_concept_id"),
            is_correct=interaction_data.get("is_correct"),
            time_taken_ms=interaction_data.get("time_taken_ms"),
            hesitation_detected=interaction_data.get("hesitation_detected"),
            backspaces_count=interaction_data.get("backspaces_count"),
        )
        self.db.add(db_log)
        self.db.commit()
        self.db.refresh(db_log)

        # Trigger BKT Update
        if db_log.associated_concept_id:
            self.update_mastery(user_id, db_log.associated_concept_id, db_log)

        return db_log

    def update_mastery(
        self, user_id: int, concept_id: UUID, interaction: InteractionLog
    ) -> StudentMastery:
        """
        Bayesian Knowledge Tracing (BKT) Update Logic.
        """
        mastery = self.get_user_mastery(user_id, concept_id)
        if not mastery:
            # Initialize with default prior (e.g. 0.3 for new concept)
            mastery = StudentMastery(
                user_id=user_id,
                concept_id=concept_id,
                mastery_probability=0.3,
                status=MasteryStatus.RED,
                confidence_score=0.5
            )
            self.db.add(mastery)

        # BKT Parameters (Simplified)
        # P(L) = Probability already learned
        # P(G) = Probability of Guessing (0.2)
        # P(S) = Probability of Slipping (0.1)
        # P(T) = Probability of Transition (Learning during step) (0.1)

        p_known = mastery.mastery_probability
        p_guess = 0.2
        p_slip = 0.1
        p_transit = 0.1

        # Adjust parameters based on Hesitation behavior (The "Perception Layer")
        if interaction.hesitation_detected:
            # If hesitated, likelihood of guessing increases if correct,
            # or likelihood of reliable knowledge decreases.
            p_guess = 0.4  # Higher chance they guessed
            
        if interaction.is_correct:
            # Bayes update for Correct Answer
            # P(L|Correct) = P(L) * (1 - P(S)) / (P(L) * (1 - P(S)) + (1 - P(L)) * P(G))
            numerator = p_known * (1 - p_slip)
            denominator = numerator + (1 - p_known) * p_guess
            p_known_given_obs = numerator / denominator
        else:
            # Bayes update for Incorrect Answer
            # P(L|Incorrect) = P(L) * P(S) / (P(L) * P(S) + (1 - P(L)) * (1 - P(G)))
            numerator = p_known * p_slip
            denominator = numerator + (1 - p_known) * (1 - p_guess)
            p_known_given_obs = numerator / denominator

        # Update with Transition (Learning occurred during this step)
        # P(L_new) = P(L|Obs) + (1 - P(L|Obs)) * P(T)
        p_new = p_known_given_obs + (1 - p_known_given_obs) * p_transit

        # Apply limits
        p_new = max(0.0, min(1.0, p_new))

        # Update State
        mastery.mastery_probability = p_new
        mastery.last_assessed_at = datetime.utcnow()
        
        # Update Red/Green Status
        if p_new < 0.5:
            mastery.status = MasteryStatus.RED
        elif p_new < 0.8:
            mastery.status = MasteryStatus.YELLOW
        else:
            mastery.status = MasteryStatus.GREEN

        self.db.commit()
        self.db.refresh(mastery)
        
        return mastery

    def get_knowledge_map(self, user_id: int):
        """
        Returns the graph structure overlayed with user mastery.
        """
        concepts = self.db.query(Concept).all()
        dependencies = self.db.query(ConceptDependency).all()
        masteries = self.db.query(StudentMastery).filter(StudentMastery.user_id == user_id).all()
        
        mastery_map = {m.concept_id: m for m in masteries}
        
        nodes = []
        for c in concepts:
            m = mastery_map.get(c.id)
            nodes.append({
                "id": c.id,
                "label": c.title,
                "status": m.status if m else MasteryStatus.RED, # Default to Red if unknown
                "mastery_probability": m.mastery_probability if m else 0.0
            })
            
        edges = []
        for d in dependencies:
            edges.append({
                "source": d.parent_concept_id,
                "target": d.child_concept_id,
                "strength": d.strength
            })
            
        return {"nodes": nodes, "edges": edges}
