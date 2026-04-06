from sqlalchemy import Column, Integer, String, Text, ForeignKey, JSON, Enum as SQLEnum, UniqueConstraint, Index
from sqlalchemy.orm import relationship
from app.db.session import Base
import enum

class SignalType(str, enum.Enum):
    VIDEO = "video"
    MCQ = "mcq"
    PYQ = "pyq"
    RECALL = "recall"
    NOTE = "note"
    PDF = "pdf"

class ConceptSignal(Base):
    """
    Stores content signals (Video, MCQ, PYQ, Recall) for a specific ConceptNode.
    This enables the Adaptive Engine to retrieve the 'Next Action' content.
    """
    __tablename__ = "concept_signals"

    id = Column(Integer, primary_key=True, index=True)
    node_id = Column(String, ForeignKey("concept_nodes.node_id"), nullable=False, index=True)
    
    signal_type = Column(SQLEnum(SignalType), nullable=False, index=True)
    content_url = Column(Text, nullable=False)  # API path, YouTube URL, or internal ID
    
    # Optional metadata (e.g. duration, question_count, pyq_year)
    metadata_ = Column("metadata", JSON, default=dict)

    # Phase 21: Personalized Remediation Scaling
    student_id = Column(Integer, ForeignKey("users.id"), nullable=True, index=True)

    # Composite Index for remediation performance
    __table_args__ = (
        UniqueConstraint('node_id', 'signal_type', 'student_id', name='_node_signal_student_uc'),
        Index("ix_signal_student_node", "student_id", "node_id"),
    )

    # Relationships
    node = relationship("ConceptNode", backref="signals")
