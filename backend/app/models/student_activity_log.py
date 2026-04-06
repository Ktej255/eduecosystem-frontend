"""
Student Activity Log — every learning action logged for mastery computation.
"""
from sqlalchemy import Column, Integer, Float, String, JSON, DateTime, ForeignKey, Enum as SQLEnum
from sqlalchemy.orm import relationship
from app.db.session import Base
from datetime import datetime
import enum


class ActivityType(str, enum.Enum):
    VIDEO_WATCH = "video_watch"
    VIDEO_COMPLETE = "video_complete"
    MCQ = "mcq"
    MCQ_ATTEMPT = "mcq_attempt"
    CONVERSATION = "conversation"
    RECALL = "recall"
    RECALL_COMPLETE = "recall_complete"
    REVISION = "revision"


class StudentActivityLog(Base):
    __tablename__ = "student_activity_log"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("users.id"), nullable=False, index=True)
    node_id = Column(Integer, ForeignKey("concept_nodes.id"), nullable=True, index=True)
    content_id = Column(String, nullable=True, index=True)

    activity_type = Column(SQLEnum(ActivityType), nullable=False, index=True)

    # Null for video_watch, 0-100 for scored activities
    score = Column(Float, nullable=True)
    duration = Column(Integer, nullable=True)

    # Which sub-concepts the student got wrong
    error_nodes = Column(JSON, default=list)

    # Extra context: clip_id, youtube_id, ai_prompt, conversation_turn etc.
    metadata_ = Column("metadata", JSON, default=dict)

    timestamp = Column(DateTime, default=datetime.utcnow, index=True)
