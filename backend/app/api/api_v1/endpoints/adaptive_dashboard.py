from typing import Any, List, Dict
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import logging

from app import models, schemas
from app.api import deps
from app.services.recommendation_service import recommendation_service
from app.models.adaptive_learning import LearningMission, StudentMastery, Concept
from app.models.user import User

# Configure logging
logger = logging.getLogger(__name__)

router = APIRouter()

@router.get("/daily-plan", response_model=List[Dict[str, Any]])
def get_daily_study_plan(
    subject: str = "Geography",
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Fetch the AI-generated 'Today's Study Plan' for the student.
    Returns the top 3-5 missions (Watch/Practice/Recall).
    """
    try:
        plan = recommendation_service.get_daily_plan(db, current_user.id, subject)
        return plan
    except Exception as e:
        logger.error(f"[DASHBOARD] Failed to generate daily plan: {e}")
        raise HTTPException(status_code=500, detail="Could not generate study plan")

@router.get("/status", response_model=Dict[str, Any])
def get_adaptive_status(
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Get global motivation status: Streaks, XP, and Mastery count.
    """
    # Count mastered concepts (Green status)
    mastered_count = db.query(StudentMastery).filter(
        StudentMastery.user_id == current_user.id,
        StudentMastery.mastery_probability >= 0.8
    ).count()

    return {
        "streak_days": current_user.streak_days,
        "xp": current_user.xp,
        "coins": current_user.coins,
        "mastered_concepts": mastered_count,
        "total_concepts": db.query(Concept).count()
    }

@router.post("/mission/{mission_id}/complete")
def complete_mission_manually(
    mission_id: str,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Explicitly mark a mission as complete (e.g., from a button click).
    Useful for 'Recall' missions or manual checkpoints.
    """
    mission = db.query(LearningMission).filter(
        LearningMission.id == mission_id,
        LearningMission.user_id == current_user.id
    ).first()

    if not mission:
        raise HTTPException(status_code=404, detail="Mission not found")

    if not mission.is_completed:
        from app.services.motivation_service import motivation_service
        motivation_service.process_study_event(
            db, 
            current_user.id, 
            f"{mission.task_type}_COMPLETE", 
            str(mission.concept_id)
        )
        return {"success": True, "message": "Mission completed! XP awarded."}
    
    return {"success": True, "message": "Mission already completed."}
