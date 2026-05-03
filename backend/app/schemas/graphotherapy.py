from pydantic import BaseModel
from datetime import datetime
from typing import Optional, List


from app.models.graphotherapy import GRAPHOTHERAPY_LEVELS


class DayCompletionBase(BaseModel):
    level: int
    day_number: int
    notes: Optional[str] = None


class DayCompletionCreate(DayCompletionBase):
    pass


class DayCompletionResponse(DayCompletionBase):
    id: int
    progress_id: int
    completed_at: datetime
    upload_url: Optional[str] = None
    upload_filename: Optional[str] = None

    class Config:
        from_attributes = True


class GraphotherapyProgressBase(BaseModel):
    current_level: int = 1
    current_day: int = 1
    total_streak: int = 0


class GraphotherapyProgressCreate(GraphotherapyProgressBase):
    user_id: int


class GraphotherapyProgressResponse(GraphotherapyProgressBase):
    id: int
    user_id: int
    streak_count: int = 0
    last_active_date: Optional[datetime] = None
    last_practice_date: Optional[datetime] = None
    created_at: datetime
    updated_at: Optional[datetime] = None
    day_completions: List[DayCompletionResponse] = []

    class Config:
        from_attributes = True


class LevelInfo(BaseModel):
    level: int
    name: str
    description: str
    total_days: int
    completed_days: int
    is_unlocked: bool
    is_current: bool
    is_completed: bool
    price: int = 0


class LevelDetailResponse(BaseModel):
    level: int
    name: str
    description: str
    total_days: int
    days: List[dict]  # List of day status objects


class DayDetailResponse(BaseModel):
    level: int
    day_number: int
    is_unlocked: bool
    is_completed: bool
    completed_at: Optional[datetime] = None
    upload_url: Optional[str] = None
    can_complete_today: bool
    
    # Program Content
    focus_area: Optional[str] = None
    exercise: Optional[str] = None
    instructions: Optional[str] = None
    why_it_works: Optional[str] = None
    expected_result: Optional[str] = None


class DayCompleteRequest(BaseModel):
    notes: Optional[str] = None


class DayCompleteResponse(BaseModel):
    success: bool
    message: str
    upload_url: Optional[str] = None
    new_streak: int
    level_completed: bool = False
    next_level_unlocked: bool = False
    progress_percentage: float = 0.0


class DrillSubmitRequest(BaseModel):
    level_id: int
    day_number: int


class OverviewResponse(BaseModel):
    current_level: int
    current_day: int
    streak_count: int
    last_active_date: Optional[datetime] = None
    total_streak: int # Keep for UI compatibility if needed
    last_practice_date: Optional[datetime] = None
    levels: List[LevelInfo]
    total_days_completed: int = 0
    total_days_remaining: int = 0
    
    # Retention Engine Fields
    user_state: str = "NEW" # NEW, ENGAGED, DROPPING
    social_proof: str = "You are in the top 10% of learners!"
    
    # Progress Intelligence (Task 5)
    coins_earned_today: int = 0
    weekly_bonus_status: str = "In Progress" # e.g. "4/7 days complete"
    weekly_report_ready: bool = False

# --- V2 Schemas for Admin Portal ---

class GraphoBookBase(BaseModel):
    title: str
    level: int
    total_days: int = 30
    is_published: bool = False

class GraphoBookCreate(GraphoBookBase):
    pass

class GraphoBookResponse(GraphoBookBase):
    id: int
    pdf_url: Optional[str] = None
    cover_image_url: Optional[str] = None
    created_at: datetime
    
    class Config:
        from_attributes = True

class GraphoPageBase(BaseModel):
    day: int
    page_number: int
    
class GraphoPageCreate(GraphoPageBase):
    pass

class GraphoPageResponse(GraphoPageBase):
    id: int
    book_id: int
    reference_image_url: Optional[str] = None
    
    class Config:
        from_attributes = True

class GraphoSubmissionResponse(BaseModel):
    id: int
    user_id: int
    day: int
    image_url: str
    status: str
    verification_score: Optional[int] = None
    started_at: Optional[datetime] = None
    duration_seconds: Optional[int] = None
    completed_at: datetime
    
    class Config:
        from_attributes = True


# --- Phase 4: Transformation & Prediction Schemas ---

class TransformationComparisonRequest(BaseModel):
    user_id: Optional[int] = None
    baseline_day: int = 1
    current_day: int = 21

class ComparisonMetric(BaseModel):
    name: str # e.g. "Slant Stability"
    baseline_value: float # 0-100
    current_value: float # 0-100
    change_percentage: float
    status: str # "Improved", "Stable", "Needs Focus"

class ShareResponse(BaseModel):
    share_url: str
    message: str

class TransformationComparisonResponse(BaseModel):
    baseline_image_url: Optional[str] = None
    current_image_url: Optional[str] = None
    transformation_score: int # 0-100
    qualitative_feedback: str
    metrics: List[ComparisonMetric]
    generated_at: datetime

class GrowthDomain(BaseModel):
    id: str
    title: str # e.g. "Mastery Challenge"
    description: str
    icon: str # key for frontend icon
    is_locked: bool
    unlock_criteria: str

class NextStepRecommendation(BaseModel):
    primary_recommendation: GrowthDomain
    alternatives: List[GrowthDomain]
    user_context: str # e.g. "Based on your 22-day streak..."


# --- Phase 5: Community Schemas ---

class LeaderboardEntry(BaseModel):
    rank: int
    user_name: str
    streak: int
    avatar_url: Optional[str] = None
    is_current_user: bool = False

# --- Phase 5C: Monetization Schemas ---

class PurchaseRequest(BaseModel):
    level_id: int
    item_type: str = "level" # "level" or "streak_freeze"
    use_coins: bool = False
    is_bundle: bool = False

class PurchaseResponse(BaseModel):
    success: bool
    transaction_id: str
    final_price: int
    coins_deducted: int
    message: str
    new_coin_balance: int

# --- Funnel & Lead Schemas ---

class GraphoLeadBase(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    utm_source: Optional[str] = None
    utm_medium: Optional[str] = None
    utm_campaign: Optional[str] = None

class GraphoLeadCreate(GraphoLeadBase):
    pass

class GraphoLeadUpdate(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None
    phone: Optional[str] = None
    analysis_json: Optional[dict] = None
    analysis_status: Optional[str] = None
    recommended_level: Optional[int] = None
    converted: Optional[bool] = None
    image_path: Optional[str] = None

class GraphoLeadResponse(GraphoLeadBase):
    id: int
    analysis_json: Optional[dict] = None
    analysis_status: str
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


# --- Real-time Visibility Schemas ---

class SnapshotStatusResponse(BaseModel):
    snapshot_id: int
    day_number: int
    status: str # "queued", "processing", "complete", "failed"
    analysis_progress: str # Human readable version of status
    submitted_at: datetime
    analysis_started_at: Optional[datetime] = None
    analysis_completed_at: Optional[datetime] = None
    fallback_message: Optional[str] = None
    
    class Config:
        from_attributes = True


class WeeklyProgressResponse(BaseModel):
    week_number: int
    narrative_summary: str
    improvement_direction: Optional[str] = None
    behavioral_insight: Optional[str] = None
    improvement_metrics: Optional[dict] = None
    regression_detected: bool
    corrective_suggestions: Optional[str] = None
    weekly_report_ready: bool = True
    created_at: datetime
    
    class Config:
        from_attributes = True
