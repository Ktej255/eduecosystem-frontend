"""
Concept Relationship model — directed edges between concept nodes.
"""
from sqlalchemy import Column, Integer, String, ForeignKey, Enum as SQLEnum
from sqlalchemy.orm import relationship
from app.db.session import Base
import enum


class RelationshipType(str, enum.Enum):
    INFLUENCES = "influences"
    PART_OF = "part_of"
    PREREQUISITE_OF = "prerequisite_of"
    DISRUPTS = "disrupts"
    REGULATES = "regulates"


class ConceptRelationship(Base):
    __tablename__ = "concept_relationships"

    id = Column(Integer, primary_key=True, index=True)
    from_node_id = Column(Integer, ForeignKey("concept_nodes.id"), nullable=False, index=True)
    to_node_id = Column(Integer, ForeignKey("concept_nodes.id"), nullable=False, index=True)

    relationship_type = Column(
        SQLEnum(RelationshipType),
        nullable=False,
        default=RelationshipType.INFLUENCES,
    )
    # 1 = weak, 2 = moderate, 3 = strong
    strength = Column(Integer, default=2)

    from_node = relationship(
        "ConceptNode",
        foreign_keys=[from_node_id],
        back_populates="from_relationships",
    )
    to_node = relationship(
        "ConceptNode",
        foreign_keys=[to_node_id],
        back_populates="to_relationships",
    )
