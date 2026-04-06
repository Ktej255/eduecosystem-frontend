from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import Any, Dict, Optional
from pydantic import BaseModel

from app.api import deps
from app.models.user import User
from app.services.learning_engine import learning_engine

router = APIRouter()

class ActivityLogCreate(BaseModel):
    activity_type: str
    content_id: str
    score: Optional[float] = 0.0
    duration: Optional[int] = 0
    subject_slug: Optional[str] = "environment"

@router.post("/log", response_model=Dict[str, Any])
def log_activity(
    *,
    db: Session = Depends(deps.get_db),
    activity_in: ActivityLogCreate,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Log a learning activity and trigger the learning engine.
    The response contains the next decision the engine recommends.
    """
    try:
        result = learning_engine.process_activity(
            db=db,
            student_id=current_user.id,
            activity_type=activity_in.activity_type,
            content_id=activity_in.content_id,
            score=activity_in.score or 0.0,
            duration=activity_in.duration or 0,
            subject_slug=activity_in.subject_slug or "environment"
        )
        return result
    except Exception as e:
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Failed to log activity: {str(e)}")
