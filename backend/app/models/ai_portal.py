from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from datetime import datetime, timezone
from app.db.session import Base
from sqlalchemy.orm import relationship

class AIPortalConversation(Base):
    __tablename__ = "ai_portal_conversations"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("users.id"), index=True)
    message = Column(String, nullable=False)
    response = Column(String, nullable=False)
    topic = Column(String, nullable=True)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

    student = relationship("User", backref="ai_portal_interactions")
