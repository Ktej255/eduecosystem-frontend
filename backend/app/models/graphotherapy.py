from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, JSON, Boolean, Enum, Float, Text, BigInteger
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
    
    # Retention Engine Fields
    streak_count = Column(Integer, default=0)
    last_active_date = Column(DateTime, nullable=True)
    
    # Legacy fields (optional: keep for migration or remove if clean)
    total_streak = Column(Integer, default=0)
    last_practice_date = Column(DateTime, nullable=True)
    
    # Simple JSON to store completions
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


class GraphotherapyLevelPurchase(Base):
    """Model to track official level purchases and payment identifiers."""
    __tablename__ = "graphotherapy_level_purchases"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    tenant_id = Column(Integer, default=1)
    level = Column(Integer, nullable=False)
    amount_paid = Column(Float, nullable=False)
    currency = Column(String(10), default="INR")
    payment_gateway = Column(String(50), default="cashfree")
    payment_id = Column(String(255), unique=True, nullable=False)
    order_id = Column(String(255), nullable=True)
    payment_status = Column(String(50), default="paid")
    payment_method = Column(String(100), nullable=True)
    notes = Column(String(500), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User")


class HandwritingSnapshot(Base):
    """Daily handwriting samples for 7-day/21-day transformation tracking."""
    __tablename__ = "handwriting_snapshots"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False, index=True)
    day_number = Column(Integer, nullable=False)
    image_url = Column(String(500), nullable=False)
    
    # AI Analysis Data
    extracted_features = Column(JSON, nullable=True) # slant, pressure, size, etc.
    trait_scores = Column(JSON, nullable=True) # Psychological scores
    
    # Status Tracking
    status = Column(String(50), default="pending_analysis") # queued, processing, complete, failed
    error_message = Column(Text, nullable=True)
    retry_count = Column(Integer, default=0)
    
    # Timeline
    submitted_at = Column(DateTime, default=datetime.utcnow)
    analysis_started_at = Column(DateTime, nullable=True)
    analysis_completed_at = Column(DateTime, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User")


class WeeklyProgressReport(Base):
    """Aggregated progress reports generated every 7 days."""
    __tablename__ = "weekly_progress_reports"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False, index=True)
    week_number = Column(Integer, nullable=False)
    
    # Narrative Analysis
    narrative_summary = Column(Text, nullable=False)
    improvement_direction = Column(String(500), nullable=True)
    behavioral_insight = Column(Text, nullable=True)
    
    # Comparison Data
    start_snapshot_id = Column(Integer, ForeignKey("handwriting_snapshots.id"))
    end_snapshot_id = Column(Integer, ForeignKey("handwriting_snapshots.id"))
    
    # Metrics
    improvement_metrics = Column(JSON, nullable=True) # Delta in trait scores
    regression_detected = Column(Boolean, default=False)
    corrective_suggestions = Column(Text, nullable=True)
    
    created_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User")
