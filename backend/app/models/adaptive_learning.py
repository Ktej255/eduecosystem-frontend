import uuid
from datetime import datetime
from enum import Enum
from typing import List, Optional

from sqlalchemy import (
    Column,
    Integer,
    String,
    Boolean,
    ForeignKey,
    DateTime,
    Enum as SqlEnum,
    Float,
    Table,
    TypeDecorator,
    CHAR
)
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID as PGUUID

from app.db.session import Base
from app.models.user import User

class GUID(TypeDecorator):
    """Platform-independent GUID type.
    Uses PostgreSQL's UUID type for PostgreSQL,
    CHAR(36) for others (SQLite, etc.)
    """
    impl = CHAR
    cache_ok = True

    def load_dialect_impl(self, dialect):
        if dialect.name == 'postgresql':
            return dialect.type_descriptor(PGUUID())
        else:
            return dialect.type_descriptor(CHAR(36))

    def process_bind_param(self, value, dialect):
        if value is None:
            return value
        return str(value)

    def process_result_value(self, value, dialect):
        if value is None:
            return value
        if not isinstance(value, uuid.UUID):
            try:
                return uuid.UUID(value)
            except ValueError:
                return value
        return value

class GranularityType(str, Enum):
    SUBJECT = "Subject"
    TOPIC = "Topic"
    NANO_POINT = "Nano-Point"

class MasteryStatus(str, Enum):
    RED = "Red"
    YELLOW = "Yellow"
    GREEN = "Green"

class StudentMomentumMetrics(Base):
    __tablename__ = "student_momentum_metrics"

    id = Column(String, primary_key=True, index=True)
    student_id = Column(String, ForeignKey("users.id"), index=True)
    momentum_score = Column(Float, default=70.0) # 0-100
    burnout_risk = Column(Boolean, default=False)
    dropout_risk = Column(Boolean, default=False)
    activity_streak = Column(Integer, default=0)
    last_activity_date = Column(DateTime, default=datetime.utcnow)
    momentum_trend = Column(String, default="stable") # "up", "down", "stable"
    recalculated_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User")

class Concept(Base):
    __tablename__ = "concepts"

    id = Column(GUID(), primary_key=True, default=uuid.uuid4)
    title = Column(String(255), nullable=False)

    subject = Column(String(50), nullable=False)
    difficulty_level = Column(Integer, default=1)  # 1-10
    exam_importance = Column(Float, default=0.5) # 0.0 to 1.0 (Priority Weight)
    granularity_type = Column(SqlEnum(GranularityType), default=GranularityType.NANO_POINT)
    
    # Relationships
    # Child dependencies (where this concept is the parent)
    child_dependencies = relationship("ConceptDependency", 
                                    foreign_keys="[ConceptDependency.parent_concept_id]",
                                    back_populates="parent_concept",
                                    cascade="all, delete-orphan")
    
    # Parent dependencies (where this concept is the child)
    parent_dependencies = relationship("ConceptDependency", 
                                     foreign_keys="[ConceptDependency.child_concept_id]",
                                     back_populates="child_concept",
                                     cascade="all, delete-orphan")
                                     
    student_states = relationship("StudentMastery", back_populates="concept", cascade="all, delete-orphan")
    interactions = relationship("InteractionLog", back_populates="concept", cascade="all, delete-orphan")

class ConceptDependency(Base):
    """
    Represents the edges in the Knowledge Graph.
    parent_concept -> child_concept
    """
    __tablename__ = "concept_dependencies"

    parent_concept_id = Column(GUID(), ForeignKey("concepts.id"), primary_key=True)
    child_concept_id = Column(GUID(), ForeignKey("concepts.id"), primary_key=True)
    strength = Column(Float, default=1.0)

    parent_concept = relationship("Concept", foreign_keys=[parent_concept_id], back_populates="child_dependencies")
    child_concept = relationship("Concept", foreign_keys=[child_concept_id], back_populates="parent_dependencies")


class StudentMastery(Base):
    """
    Tracks the 'Red/Green' state for each student node.
    """
    __tablename__ = "student_mastery"

    user_id = Column(Integer, ForeignKey("users.id"), primary_key=True)
    concept_id = Column(GUID(), ForeignKey("concepts.id"), primary_key=True)
    
    mastery_probability = Column(Float, default=0.0) # 0.0 to 1.0 (BKT Score)
    status = Column(SqlEnum(MasteryStatus), default=MasteryStatus.RED)
    
    confidence_score = Column(Float, default=0.0)
    consecutive_correct = Column(Integer, default=0)
    stability_score = Column(Float, default=0.0) # 0.0 to 1.0 (Consistency measure)
    last_assessed_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User")
    concept = relationship("Concept", back_populates="student_states")


class InteractionLog(Base):
    """
    Raw event stream to feed the BKT algorithm.
    """
    __tablename__ = "interaction_logs"

    id = Column(GUID(), primary_key=True, default=uuid.uuid4)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False, index=True)
    question_id = Column(String, nullable=True) # ID from Question Bank or generated ID
    associated_concept_id = Column(GUID(), ForeignKey("concepts.id"), nullable=True)
    
    is_correct = Column(Boolean, default=False)
    time_taken_ms = Column(Integer, default=0)
    hesitation_detected = Column(Boolean, default=False)
    backspaces_count = Column(Integer, default=0)
    
    created_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User")
    concept = relationship("Concept", back_populates="interactions")

class StudentLearningProfile(Base):
    """
    Tracks the 'Learning DNA' of a student based on hidden behavioral signals.
    Used by the NBA Engine to tailor mission difficulty and duration.
    """
    __tablename__ = "student_learning_profiles"

    user_id = Column(Integer, ForeignKey("users.id"), primary_key=True)
    
    avg_video_completion_rate = Column(Float, default=0.0) # 0.0 to 1.0
    avg_mcq_accuracy = Column(Float, default=0.0)
    median_attention_span_mins = Column(Integer, default=10) # 1-60
    
    preferred_learning_style = Column(String, default="practice") # "visual", "practice", "theoretical"
    last_updated = Column(DateTime, default=datetime.utcnow)

    user = relationship("User")

class LearningMission(Base):
    """
    The 'Daily Task' container for the AI Learning Navigator.
    Generated by the RecommendationEngine.
    """
    __tablename__ = "learning_missions"

    id = Column(GUID(), primary_key=True, default=uuid.uuid4)
    user_id = Column(Integer, ForeignKey("users.id"), index=True)
    concept_id = Column(GUID(), ForeignKey("concepts.id"), index=True)
    
    task_type = Column(String, default="PRACTICE") # WATCH, PRACTICE, RECALL, TEST
    priority_score = Column(Float, default=0.0)
    
    is_completed = Column(Boolean, default=False)
    xp_reward = Column(Integer, default=20)
    
    created_at = Column(DateTime, default=datetime.utcnow)
    expires_at = Column(DateTime, nullable=True) # Usually end of day

    user = relationship("User")
    concept = relationship("Concept")

class Badge(Base):
    """
    Available trophies for the Gamification Layer.
    Examples: 'Lithosphere Legend', 'Recall Master', 'Streak King'.
    """
    __tablename__ = "badges"

    id = Column(GUID(), primary_key=True, default=uuid.uuid4)
    name = Column(String(100), nullable=False)
    description = Column(String(255))
    icon_url = Column(String(255)) 
    criteria_type = Column(String(50)) 
    criteria_value = Column(Float) 

class StudentBadge(Base):
    """
    Association table for student earned badges.
    """
    __tablename__ = "student_badges"

    id = Column(GUID(), primary_key=True, default=uuid.uuid4)
    user_id = Column(Integer, ForeignKey("users.id"), index=True)
    badge_id = Column(GUID(), ForeignKey("badges.id"), index=True)
    earned_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User")
    badge = relationship("Badge")
