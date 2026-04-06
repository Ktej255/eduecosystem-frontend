"""
Guided Clip model — video clip with YouTube ID, admin-defined pause points.
"""
from sqlalchemy import Column, Integer, String, Text, JSON, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from app.db.session import Base


class GuidedClip(Base):
    __tablename__ = "guided_clips"

    id = Column(Integer, primary_key=True, index=True)

    # Link to module
    module_id = Column(Integer, ForeignKey("modules.id"), nullable=False, index=True)

    title = Column(String, nullable=False)
    description = Column(Text, nullable=True)

    # YouTube unlisted video ID (e.g. "dQw4w9WgXcQ")
    youtube_id = Column(String, nullable=True)

    # Order within the module
    order_index = Column(Integer, default=0)

    # Written notes in markdown format
    notes_markdown = Column(Text, nullable=True)

    # Pause points: [{timestamp: 300, prompt: "What causes the greenhouse effect?"}]
    pause_points = Column(JSON, default=list)

    # Concept nodes this clip covers
    node_ids = Column(JSON, default=list)  # Array of ConceptNode.node_id strings

    is_published = Column(Boolean, default=False)

