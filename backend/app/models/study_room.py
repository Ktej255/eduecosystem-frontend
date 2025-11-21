from sqlalchemy import Column, Integer, String
from app.db.session import Base

class StudyRoom(Base):
    __tablename__ = "study_rooms"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    topic = Column(String)
    participants_count = Column(Integer, default=0)
    thumbnail_url = Column(String, nullable=True)
