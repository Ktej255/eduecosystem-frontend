from typing import Any, Optional
from fastapi import APIRouter, Depends, HTTPException, Body
from sqlalchemy.orm import Session
from app.api import deps
from app.models.user import User
from app.graphotherapy_engine.funnel_analytics import funnel_analytics

router = APIRouter()

@router.post("/track")
def track_funnel_event(
    stage: str = Body(..., embed=True),
    metadata: Optional[dict] = Body(None, embed=True),
    db: Session = Depends(deps.get_db),
    current_user: Optional[User] = Depends(deps.get_current_user_optional),
) -> Any:
    """
    Public endpoint for tracking funnel stages from the frontend.
    Events are persisted to DB (AnalyticsEvent) via funnel_analytics.
    """
    user_id = str(current_user.id) if current_user else "anonymous"
    success = funnel_analytics.track_event(stage, user_id, db=db, metadata=metadata)
    if not success:
        raise HTTPException(status_code=400, detail=f"Invalid or untrackable funnel stage: '{stage}'")
    return {"status": "success"}

@router.get("/metrics")
def get_funnel_metrics(
    db: Session = Depends(deps.get_db),
    current_admin: User = Depends(deps.get_admin_user),
) -> Any:
    """
    Get aggregated funnel metrics for the admin dashboard.
    Sources: Redis cache (60s TTL) → live DB query.
    """
    try:
        metrics = funnel_analytics.get_aggregated_metrics(db=db)
        
        from app.models.lead import Lead
        from sqlalchemy import func
        
        lead_stats = db.query(
            Lead.status, 
            func.count(Lead.id)
        ).group_by(Lead.status).all()
        
        metrics["lead_distribution"] = {status: count for status, count in lead_stats}
        
        return metrics
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
