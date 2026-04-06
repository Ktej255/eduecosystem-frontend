from sqlalchemy import Column, Integer, String, Text, ForeignKey, Table
from sqlalchemy.orm import relationship
from app.db.session import Base

# Association table for Many-to-Many mapping between PYQs and Concept Nodes
upsc_pyq_node_association = Table(
    "upsc_pyq_node_association",
    Base.metadata,
    Column("upsc_pyq_id", Integer, ForeignKey("upsc_pyqs.id"), primary_key=True),
    Column("concept_node_id", Integer, ForeignKey("concept_nodes.id"), primary_key=True)
)

class UPSCPYQ(Base):
    """
    Model for Previous Year Questions (PYQs) linked to the Knowledge Graph.
    This enables the 'Exam Intelligence Layer' to map historical importance.
    """
    __tablename__ = "upsc_pyqs"

    id = Column(Integer, primary_key=True, index=True)
    year = Column(Integer, nullable=False)
    paper_type = Column(String) # e.g. "Prelims", "Mains"
    question_text = Column(Text, nullable=False)
    official_explanation = Column(Text)
    
    # Metadata
    difficulty_level = Column(String) # easy, medium, hard
    occurrence_count = Column(Integer, default=1) # Times this concept appeared in this year

    # Many-to-Many relationship with Concept Nodes
    nodes = relationship(
        "ConceptNode",
        secondary=upsc_pyq_node_association,
        back_populates="pyqs"
    )
