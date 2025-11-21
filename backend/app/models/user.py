from sqlalchemy import Boolean, Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.db.session import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)
    is_superuser = Column(Boolean, default=False)
    full_name = Column(String, index=True)
    coins = Column(Integer, default=0)
    streak_days = Column(Integer, default=0)
    token_version = Column(Integer, default=1)
    group_id = Column(Integer, ForeignKey("groups.id"), nullable=True, index=True)

    tasks = relationship("Task", back_populates="owner")
    submissions = relationship("HandwritingSubmission", back_populates="owner")
    meditation_sessions = relationship("MeditationSession", back_populates="owner")
    activity_logs = relationship("ActivityLog", back_populates="user")
    group = relationship("Group", back_populates="members")
    rewards = relationship("UserReward", back_populates="user")
    mood_entries = relationship("MoodEntry", back_populates="user")
    exam_sessions = relationship("ExamSession", back_populates="user")
    shadow_sessions = relationship("ShadowModeSession", back_populates="user")
