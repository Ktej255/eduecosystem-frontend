from typing import Any
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from datetime import datetime, timedelta
from app.api import deps
from app.models.user import User

router = APIRouter()

@router.get("/dashboard")
def get_dashboard_analytics(
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Get comprehensive analytics for dashboard.
    """
    from app.models.shadow_mode import ShadowModeSession
    from app.models.activity_log import ActivityLog
    from app.models.submission import HandwritingSubmission
    
    # Shadow Mode Stats
    seven_days_ago = datetime.utcnow() - timedelta(days=7)
    shadow_sessions = db.query(ShadowModeSession).filter(
        ShadowModeSession.user_id == current_user.id,
        ShadowModeSession.start_time >= seven_days_ago
    ).all()
    
    completed_shadow_days = len([s for s in shadow_sessions if not s.is_active])
    total_shadow_minutes = sum(s.duration_minutes for s in shadow_sessions if s.duration_minutes)
    avg_shadow_focus = sum(s.focus_score for s in shadow_sessions if s.focus_score) / len(shadow_sessions) if shadow_sessions else 0
    
    # Attention Stats
    attention_logs = db.query(ActivityLog).filter(
        ActivityLog.user_id == current_user.id,
        ActivityLog.action == "attention_check"
    ).order_by(ActivityLog.timestamp.desc()).limit(100).all()
    
    attention_scores = [float(log.details) for log in attention_logs if log.details]
    avg_attention = sum(attention_scores) / len(attention_scores) if attention_scores else 0
    
    # Handwriting Submissions
    submissions_count = db.query(HandwritingSubmission).filter(
        HandwritingSubmission.user_id == current_user.id
    ).count()
    
    # Weekly Activity (mock data for now)
    weekly_activity = {
        "Mon": 45,
        "Tue": 60,
        "Wed": 30,
        "Thu": 75,
        "Fri": 50,
        "Sat": 90,
        "Sun": 40
    }
    
    return {
        "user": {
            "coins": current_user.coins,
            "streak_days": current_user.streak_days,
            "full_name": current_user.full_name,
        },
        "shadow_mode": {
            "completed_days": completed_shadow_days,
            "total_days": 7,
            "total_minutes": total_shadow_minutes,
            "avg_focus_score": round(avg_shadow_focus, 2)
        },
        "attention": {
            "total_checks": len(attention_logs),
            "average_focus": round(avg_attention, 2),
            "recent_scores": attention_scores[:10]
        },
        "handwriting": {
            "total_submissions": submissions_count
        },
        "weekly_activity": weekly_activity,
        "insights": [
            {
                "title": "Peak Performance Time",
                "description": "Your focus is highest between 9-11 AM. Schedule important tasks during this window.",
                "type": "info"
            },
            {
                "title": "Consistency Trend",
                "description": f"You're on a {current_user.streak_days}-day streak! Keep it going.",
                "type": "success"
            },
            {
                "title": "Next Milestone",
                "description": f"{1000 - (current_user.coins % 1000)} more coins to your next reward tier.",
                "type": "goal"
            }
        ]
    }
