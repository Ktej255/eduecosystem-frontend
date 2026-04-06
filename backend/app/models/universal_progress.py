from sqlalchemy import Column, Integer, ForeignKey, DateTime, func, JSON
from sqlalchemy.orm import relationship
from app.db.session import Base

class UniversalProgress(Base):
    __tablename__ = "universal_progress"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), unique=True, index=True)
    state_blob = Column(JSON, nullable=False)
    last_synced_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    user = relationship("User", backref="universal_state")
