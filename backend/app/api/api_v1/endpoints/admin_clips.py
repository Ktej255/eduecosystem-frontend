"""
Admin Clip Management API — manage YouTube clips and pause points.
"""
from typing import Any, List, Optional
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session

from app.api import deps
from app.models.user import User
from app.models.guided_clip import GuidedClip

router = APIRouter()


class PausePointIn(BaseModel):
    timestamp: int   # seconds into video
    prompt: str      # the AI conversation starter for this pause


class ClipCreateRequest(BaseModel):
    module_id: int
    title: str
    description: Optional[str] = None
    youtube_id: Optional[str] = None
    order_index: int = 0
    notes_markdown: Optional[str] = None
    pause_points: Optional[List[PausePointIn]] = []
    node_ids: Optional[List[str]] = []


class ClipUpdateRequest(BaseModel):
    title: Optional[str] = None
    youtube_id: Optional[str] = None
    notes_markdown: Optional[str] = None
    order_index: Optional[int] = None
    pause_points: Optional[List[PausePointIn]] = None
    node_ids: Optional[List[str]] = None
    is_published: Optional[bool] = None


class ClipOut(BaseModel):
    id: int
    module_id: int
    title: str
    youtube_id: Optional[str]
    order_index: int
    notes_markdown: Optional[str]
    pause_points: List[PausePointIn]
    node_ids: List[str]
    is_published: bool


class ModuleOut(BaseModel):
    id: int
    title: str
    order_index: int
    course_id: int


def _is_admin(user: User) -> bool:
    return getattr(user, "is_superuser", False) or getattr(user, "is_staff", False)


@router.get("/modules", response_model=List[ModuleOut])
def list_modules(
    subject_slug: str = "environment",
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    if not _is_admin(current_user):
        raise HTTPException(status_code=403, detail="Admin access required")
    from app.models.module import Module
    from app.models.course import Course
    course = db.query(Course).filter(Course.slug == subject_slug).first()
    if not course:
        return []
    return db.query(Module).filter(Module.course_id == course.id).order_by(Module.order_index).all()


@router.get("/clips", response_model=List[ClipOut])
def list_clips(
    module_id: Optional[int] = None,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    if not _is_admin(current_user):
        raise HTTPException(status_code=403, detail="Admin access required")
    q = db.query(GuidedClip)
    if module_id:
        q = q.filter(GuidedClip.module_id == module_id)
    clips = q.order_by(GuidedClip.module_id, GuidedClip.order_index).all()
    return [_out(c) for c in clips]


@router.post("/clips", response_model=ClipOut)
def create_clip(
    req: ClipCreateRequest,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    if not _is_admin(current_user):
        raise HTTPException(status_code=403, detail="Admin access required")
    clip = GuidedClip(
        module_id=req.module_id,
        title=req.title,
        description=req.description,
        youtube_id=req.youtube_id,
        order_index=req.order_index,
        notes_markdown=req.notes_markdown,
        pause_points=[p.dict() for p in (req.pause_points or [])],
        node_ids=req.node_ids or [],
        is_published=False,
    )
    db.add(clip)
    db.commit()
    db.refresh(clip)
    return _out(clip)


@router.patch("/clips/{clip_id}", response_model=ClipOut)
def update_clip(
    clip_id: int,
    req: ClipUpdateRequest,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    if not _is_admin(current_user):
        raise HTTPException(status_code=403, detail="Admin access required")
    clip = db.query(GuidedClip).filter(GuidedClip.id == clip_id).first()
    if not clip:
        raise HTTPException(status_code=404, detail="Clip not found")

    if req.title is not None:
        clip.title = req.title
    if req.youtube_id is not None:
        clip.youtube_id = req.youtube_id
    if req.notes_markdown is not None:
        clip.notes_markdown = req.notes_markdown
    if req.order_index is not None:
        clip.order_index = req.order_index
    if req.pause_points is not None:
        clip.pause_points = [p.dict() for p in req.pause_points]
    if req.node_ids is not None:
        clip.node_ids = req.node_ids
    if req.is_published is not None:
        clip.is_published = req.is_published

    db.commit()
    db.refresh(clip)
    return _out(clip)


@router.delete("/clips/{clip_id}")
def delete_clip(
    clip_id: int,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    if not _is_admin(current_user):
        raise HTTPException(status_code=403, detail="Admin access required")
    clip = db.query(GuidedClip).filter(GuidedClip.id == clip_id).first()
    if not clip:
        raise HTTPException(status_code=404, detail="Clip not found")
    db.delete(clip)
    db.commit()
    return {"status": "deleted"}


def _out(c: GuidedClip) -> ClipOut:
    return ClipOut(
        id=c.id,
        module_id=c.module_id,
        title=c.title,
        youtube_id=c.youtube_id,
        order_index=c.order_index,
        notes_markdown=c.notes_markdown,
        pause_points=[PausePointIn(**p) for p in (c.pause_points or [])],
        node_ids=c.node_ids or [],
        is_published=c.is_published,
    )
