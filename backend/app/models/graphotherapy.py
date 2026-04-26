from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, JSON, Boolean, Enum
from sqlalchemy.orm import relationship
from datetime import datetime
import enum
from app.db.session import Base

# Level configuration constants
GRAPHOTHERAPY_LEVELS = {
    1: {"days": 21, "name": "The Awakening", "price": 2599}, # 21 Days
    2: {"days": 30, "name": "The Scholar", "price": 5999}, # 30 Days
    3: {"days": 40, "name": "The Architect", "price": 9999}, # 40 Days
    4: {"days": 90, "name": "The Healer", "price": 15999} # 90 Days
}

class VerificationStatus(str, enum.Enum):
    PENDING = "pending"
    VERIFIED = "verified"
    REJECTED = "rejected"

# --- New V2 Models ---

class GraphoBook(Base):
    __tablename__ = "grapho_books"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    level = Column(Integer)
    total_days = Column(Integer, default=30)
    pdf_url = Column(String, nullable=True)
    cover_image_url = Column(String, nullable=True)
    is_published = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    # Relationships
    pages = relationship("GraphoPage", back_populates="book", cascade="all, delete-orphan")
    submissions = relationship("GraphoSubmission", back_populates="book")

class GraphoPage(Base):
    __tablename__ = "grapho_pages"

    id = Column(Integer, primary_key=True, index=True)
    book_id = Column(Integer, ForeignKey("grapho_books.id"))
    day = Column(Integer)
    page_number = Column(Integer) # Page number in the PDF
    reference_image_url = Column(String, nullable=True) # Screenshot/Extraction of the page
    focus_points = Column(JSON, nullable=True) # {"traits": ["slant", "pressure"]}

    book = relationship("GraphoBook", back_populates="pages")

class GraphoSubmission(Base):
    __tablename__ = "grapho_submissions"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id")) 
    book_id = Column(Integer, ForeignKey("grapho_books.id"))
    day = Column(Integer)
    image_url = Column(String, nullable=False)
    
    status = Column(String, default=VerificationStatus.PENDING)
    verification_score = Column(Integer, nullable=True) 
    analysis_result = Column(JSON, nullable=True)
    
    started_at = Column(DateTime, nullable=True)
    completed_at = Column(DateTime, default=datetime.utcnow)
    duration_seconds = Column(Integer, nullable=True)

    book = relationship("GraphoBook", back_populates="submissions")
    user = relationship("User")

# --- Restored Models (Preserving Existing Logic) ---

class GraphotherapyProgress(Base):
    __tablename__ = "graphotherapy_progress"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), unique=True)
    current_level = Column(Integer, default=1)
    current_day = Column(Integer, default=1)
    total_streak = Column(Integer, default=0)
    last_practice_date = Column(DateTime, nullable=True)
    
    # Simple JSON to store completions if not using relational table before
    completed_days = Column(JSON, default={}) 

    user = relationship("User", back_populates="graphotherapy_progress")

class GraphotherapyDayCompletion(Base):
 __tablename__ = "graphotherapy_day_completions"

 id = Column(Integer, primary_key=True, index=True)
 user_id = Column(Integer, ForeignKey("users.id"))
 level = Column(Integer)
 day = Column(Integer)
 completed_at = Column(DateTime, default=datetime.utcnow)
 image_url = Column(String, nullable=True)


class GraphoLead(Base):
 """Model for capturing leads from the free graphotherapy analysis funnel."""
 __tablename__ = "grapho_leads"

 id = Column(Integer, primary_key=True, index=True)
 name = Column(String(255), nullable=False)
 email = Column(String(255), nullable=False, index=True)
 phone = Column(String(20), nullable=True)
 image_path = Column(String(500), nullable=True)
 analysis_json = Column(JSON, nullable=True)
 analysis_status = Column(String(50), default="pending")
 recommended_level = Column(Integer, nullable=True)
 converted = Column(Boolean, default=False)
 utm_source = Column(String(100), nullable=True)
 utm_medium = Column(String(100), nullable=True)
 utm_campaign = Column(String(100), nullable=True)
 created_at = Column(DateTime, default=datetime.utcnow)
 updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
