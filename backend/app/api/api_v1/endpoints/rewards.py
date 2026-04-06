from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List, Dict, Any

from app.api import deps
from app.models.user import User
from app.models.adaptive_learning import Badge, StudentBadge
from app.core.config import settings

router = APIRouter()

@router.get("/rewards")
def get_student_rewards(
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user)
):
    """
    Fetches the student gamification profile: XP, Level, Coins, Streak, and Badges.
    """
    # 1. Level Calculation (Simple linear: 1000 XP per level)
    level = (current_user.xp // 1000) + 1
    
    # 2. Fetch Badges
    badges = db.query(StudentBadge).filter(StudentBadge.user_id == current_user.id).all()
    
    badge_list = []
    for sb in badges:
        badge_list.append({
            "id": str(sb.badge_id),
            "name": sb.badge.name,
            "icon_url": sb.badge.icon_url,
            "earned_at": sb.earned_at.isoformat()
        })

    return {
        "xp": current_user.xp,
        "level": level,
        "streak": current_user.streak_days,
        "coins": current_user.coins,
        "badges": badge_list
    }
