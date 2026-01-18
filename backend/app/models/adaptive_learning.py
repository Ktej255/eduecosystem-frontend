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
)
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID

from app.db.session import Base
from app.models.user import User

class GranularityType(str, Enum):
    SUBJECT = "Subject"
    TOPIC = "Topic"
    NANO_POINT = "Nano-Point"

class MasteryStatus(str, Enum):
    RED = "Red"
    YELLOW = "Yellow"
    GREEN = "Green"

class Concept(Base):
    __tablename__ = "concepts"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    title = Column(String(255), nullable=False)
    subject = Column(String(50), nullable=False)
    difficulty_level = Column(Integer, default=1)  # 1-10
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

    parent_concept_id = Column(UUID(as_uuid=True), ForeignKey("concepts.id"), primary_key=True)
    child_concept_id = Column(UUID(as_uuid=True), ForeignKey("concepts.id"), primary_key=True)
    strength = Column(Float, default=1.0)

    parent_concept = relationship("Concept", foreign_keys=[parent_concept_id], back_populates="child_dependencies")
    child_concept = relationship("Concept", foreign_keys=[child_concept_id], back_populates="parent_dependencies")


class StudentMastery(Base):
    """
    Tracks the 'Red/Green' state for each student node.
    """
    __tablename__ = "student_mastery"

    user_id = Column(Integer, ForeignKey("users.id"), primary_key=True)
    concept_id = Column(UUID(as_uuid=True), ForeignKey("concepts.id"), primary_key=True)
    
    mastery_probability = Column(Float, default=0.0) # 0.0 to 1.0 (BKT Score)
    status = Column(SqlEnum(MasteryStatus), default=MasteryStatus.RED)
    
    confidence_score = Column(Float, default=0.0)
    last_assessed_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User")
    concept = relationship("Concept", back_populates="student_states")


class InteractionLog(Base):
    """
    Raw event stream to feed the BKT algorithm.
    """
    __tablename__ = "interaction_logs"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False, index=True)
    question_id = Column(String, nullable=True) # ID from Question Bank or generated ID
    associated_concept_id = Column(UUID(as_uuid=True), ForeignKey("concepts.id"), nullable=True)
    
    is_correct = Column(Boolean, default=False)
    time_taken_ms = Column(Integer, default=0)
    hesitation_detected = Column(Boolean, default=False)
    backspaces_count = Column(Integer, default=0)
    
    created_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User")
    concept = relationship("Concept", back_populates="interactions")
