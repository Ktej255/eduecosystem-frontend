from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from app.db.session import Base
from datetime import datetime

class StudentEngineDecision(Base):
    __tablename__ = "student_engine_decisions"

    decision_id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True)
    activity_id = Column(Integer, ForeignKey("student_activity_log.id", ondelete="SET NULL"), nullable=True)
    
    next_action = Column(String, nullable=False)
    target_concept = Column(String, nullable=True)
    timestamp = Column(DateTime, default=datetime.utcnow, index=True)
