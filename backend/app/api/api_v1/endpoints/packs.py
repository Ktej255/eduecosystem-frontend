from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import List, Optional, Dict, Any
from app.api import deps
from app.db.session import get_db
from app.models.user import User
from app.models.learning_group import LearningGroup, HouseType
from app.services.pack_service import pack_service
import json

router = APIRouter()

@router.get("/leaderboard")
def get_pack_leaderboard(
    weekly: bool = False,
    limit: int = 10,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_active_user)
):
    """
    Get the top packs. Bulletproof — handles missing columns gracefully.
    """
    try:
        if weekly:
            packs = pack_service.get_weekly_leaderboard(db, limit)
        else:
            packs = pack_service.get_leaderboard(db, limit)

        if not packs:
            return {"leaderboard": [], "message": "No packs created yet. Packs will appear here once the admin sets them up."}

        result = []
        for p in packs:
            try:
                metadata = json.loads(p.pack_metadata) if p.pack_metadata and isinstance(p.pack_metadata, str) else (p.pack_metadata or {})
            except Exception:
                metadata = {}

            try:
                is_my_pack = any(m.user_id == current_user.id for m in getattr(p, 'members', []))
            except Exception:
                is_my_pack = False

            result.append({
                "id": getattr(p, 'id', None),
                "name": getattr(p, 'name', 'Unknown Pack'),
                "house_type": getattr(p, 'house_type', None),
                "points": getattr(p, 'weekly_points', 0) if weekly else getattr(p, 'pack_points', 0),
                "metadata": metadata,
                "is_my_pack": is_my_pack
            })

        return result

    except Exception as e:
        import logging
        logging.getLogger(__name__).warning(f"Leaderboard ORM error (likely missing columns — run migration): {e}")
        # Raw SQL fallback — only uses columns guaranteed to exist from the original migration
        try:
            raw = db.execute(
                __import__('sqlalchemy').text(
                    "SELECT id, name FROM learning_groups ORDER BY id DESC LIMIT :lim"
                ),
                {"lim": limit}
            ).fetchall()
            return [{"id": r[0], "name": r[1], "house_type": None, "points": 0, "metadata": {}, "is_my_pack": False} for r in raw]
        except Exception:
            return {"leaderboard": [], "message": "Leaderboard loading soon. Run: alembic upgrade add_wolfpack_and_ai_portal"}


@router.get("/my-pack")
def get_my_pack(
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_active_user)
):
    """
    Get the current user's primary pack stats.
    """
    # Assuming the first learning group they joined is their primary "Pack"
    # In a more advanced version, we'd have a specific "Pack" designation.
    from app.models.learning_group import GroupMembership
    membership = db.query(GroupMembership).filter(GroupMembership.user_id == current_user.id).first()
    
    if not membership:
        return {
            "detail": "User not assigned to a pack",
            "is_assigned": False
        }
    
    pack = db.query(LearningGroup).filter(LearningGroup.id == membership.group_id).first()
    if not pack:
        return {
            "detail": "User not assigned to a pack",
            "is_assigned": False
        }

    try:
        metadata = json.loads(pack.pack_metadata) if pack.pack_metadata and isinstance(pack.pack_metadata, str) else (pack.pack_metadata if pack.pack_metadata else {})
    except Exception:
        metadata = {}
    
    return {
        "id": pack.id,
        "name": pack.name,
        "description": pack.description,
        "house_type": pack.house_type,
        "points": pack.pack_points,
        "weekly_points": pack.weekly_points,
        "metadata": metadata,
        "member_count": len(pack.members)
    }

@router.post("/{group_id}/setup")
def setup_pack(
    group_id: int,
    house_type: HouseType,
    motto: str,
    color: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_active_user)
):
    """
    Admin/Creator tool to set up a group as a Wolf Pack.
    """
    metadata = {
        "motto": motto,
        "color": color,
        "emblem": house_type.upper()[0] # Simple initials for now
    }
    pack = pack_service.set_pack_house_details(db, group_id, house_type, metadata)
    return {"message": "Pack details updated", "pack_id": pack.id}
