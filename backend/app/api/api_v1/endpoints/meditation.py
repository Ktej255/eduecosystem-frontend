from typing import Any
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.api import deps
from app.crud import meditation as crud_meditation
from app.schemas.meditation import MeditationSession, MeditationSessionCreate
from app.models.user import User

router = APIRouter()

@router.post("/log", response_model=MeditationSession)
def log_session(
    *,
    db: Session = Depends(deps.get_db),
    session_in: MeditationSessionCreate,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Log a meditation session.
    """
    session = crud_meditation.create_with_owner(
        db=db, obj_in=session_in, user_id=current_user.id
    )
    return session

@router.get("/stats", response_model=int)
def get_stats(
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Get total minutes listened.
    """
    return crud_meditation.get_total_minutes(db=db, user_id=current_user.id)

@router.post("/mood")
def log_mood(
    mood: str,
    note: str = "",
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Log user mood.
    """
    from app.models.mood import MoodEntry
    
    mood_entry = MoodEntry(user_id=current_user.id, mood=mood, note=note)
    db.add(mood_entry)
    db.commit()
    
    return {"msg": "Mood logged", "mood": mood}
