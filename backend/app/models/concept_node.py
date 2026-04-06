"""
Concept Node model for the Guided Learning Portal.
Represents atomic knowledge units tied to video clips.
"""
from sqlalchemy import Column, Integer, String, Text, ForeignKey, JSON, Enum as SQLEnum
from sqlalchemy.orm import relationship
from app.db.session import Base
import enum


class DifficultyLevel(str, enum.Enum):
    FOUNDATION = "FOUNDATION"
    UPSC_OVERLAY = "UPSC_OVERLAY"
    ADVANCED = "ADVANCED"


class ConceptNode(Base):
    __tablename__ = "concept_nodes"

    id = Column(Integer, primary_key=True, index=True)
    node_id = Column(String, unique=True, nullable=False, index=True)  # e.g. ENV_N001

    subject_slug = Column(String, nullable=False, index=True)  # e.g. "environment"
    module_id = Column(Integer, nullable=True, index=True)
    clip_id = Column(Integer, ForeignKey("guided_clips.id"), nullable=True, index=True)

    node_name = Column(String, nullable=False)
    node_description = Column(Text, nullable=True)

    # Array of node_ids this node depends on
    prerequisite_nodes = Column(JSON, default=list)

    # e.g. {"UPSC": "high", "CDS": "medium", "NDA": "low"}
    exam_relevance = Column(JSON, default=dict)

    # Phase 21: Cross-Subject Context Links (Not Prerequisites)
    context_nodes = Column(JSON, default=list)

    difficulty_level = Column(
        SQLEnum(DifficultyLevel),
        default=DifficultyLevel.FOUNDATION,
        index=True,
    )

    # Relationships
    mastery_records = relationship("StudentConceptMastery", back_populates="node", lazy="dynamic")
    
    # Many-to-Many relationship with UPSC PYQs
    from app.models.upsc_pyq import upsc_pyq_node_association
    pyqs = relationship(
        "UPSCPYQ",
        secondary=upsc_pyq_node_association,
        back_populates="nodes"
    )
    
    from_relationships = relationship(
        "ConceptRelationship",
        foreign_keys="ConceptRelationship.from_node_id",
        back_populates="from_node",
    )
    to_relationships = relationship(
        "ConceptRelationship",
        foreign_keys="ConceptRelationship.to_node_id",
        back_populates="to_node",
    )

