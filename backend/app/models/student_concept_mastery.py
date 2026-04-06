"""
Student Concept Mastery model — SM-2 spaced repetition state per student per node.
"""
from sqlalchemy import Column, Integer, Float, Date, ForeignKey, DateTime, String, Boolean, Index
from sqlalchemy.orm import relationship
from app.db.session import Base
from datetime import datetime


class StudentConceptMastery(Base):
    __tablename__ = "student_concept_mastery"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("users.id"), nullable=False, index=True)
    node_id = Column(Integer, ForeignKey("concept_nodes.id"), nullable=False, index=True)

    # Phase 13 Composite Index for Join Performance
    __table_args__ = (
        Index("ix_student_node_mastery", "student_id", "node_id"),
    )

    mastery_score = Column(Float, default=0.0)   # 0 to 100
    attempt_count = Column(Integer, default=0)

    last_activity_date = Column(DateTime, nullable=True)
    next_review_date = Column(Date, nullable=True)  # SM-2 scheduled date

    # SM-2 parameters
    ease_factor = Column(Float, default=2.5)  # Starts at 2.5 per SM-2 spec
    interval = Column(Integer, default=0)     # Days until next review

    # Phase 12 Momentum & Remediation Intelligence
    consecutive_correct = Column(Integer, default=0)
    stability_score = Column(Float, default=0.0)   # 0.0 to 1.0 based on streak
    mastery_velocity = Column(Float, default=0.0)  # delta per time unit
    status = Column(String(20), default="Red")     # Red, Yellow, Green
    is_at_risk = Column(Boolean, default=False)

    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    node = relationship("ConceptNode", back_populates="mastery_records")
