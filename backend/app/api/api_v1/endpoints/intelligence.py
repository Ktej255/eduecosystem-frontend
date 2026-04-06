from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import Any, List, Dict

from app.api import deps
from app.models.user import User
from app.services.exam_intelligence import exam_intelligence_service

router = APIRouter()

@router.get("/readiness", response_model=Dict[str, Any])
def get_readiness_score(
    subject: str = "environment",
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Get the student's predictive readiness score for a subject.
    Weighted by UPSC relevance and internal mastery scores.
    """
    return exam_intelligence_service.calculate_readiness_score(db, current_user.id, subject)

@router.get("/weak-spots", response_model=List[Dict[str, Any]])
def get_weak_spots(
    subject: str = "environment",
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Identify the top 3 high-relevance nodes with the lowest mastery.
    Critical for targeted revision before the UPSC dimension.
    """
    return exam_intelligence_service.get_weak_node_spotlight(db, current_user.id, subject)

@router.get("/pyq-insights/{node_id}", response_model=List[Dict[str, Any]])
def get_pyq_insights(
    node_id: str,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Fetch historical UPSC PYQ data for a specific knowledge node.
    """
    return exam_intelligence_service.get_pyq_insights(db, node_id)
