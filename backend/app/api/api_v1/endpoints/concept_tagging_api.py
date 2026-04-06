"""
concept_tagging_api.py — Concept Tagging API
============================================
All routes mounted at /api/v1/tagging/

Student endpoints:
  GET  /tagging/weak-concepts         → weak nodes + remediation plans
  GET  /tagging/node/{node_id}        → all content for a node
  GET  /tagging/node/{node_id}/stats  → MCQ accuracy + content inventory
  GET  /tagging/node/{node_id}/video-segments → timestamp ranges for remediation
  POST /tagging/mcq-attempt           → process MCQ answer → update mastery

Admin endpoints:
  POST   /tagging/tag                 → manually tag content
  POST   /tagging/tag-video-segment   → tag a timestamp range
  POST   /tagging/auto-tag-clips      → seed from guided_clips.node_ids
  POST   /tagging/auto-tag-text       → fuzzy-match text body
  GET    /tagging/admin/all-tags      → list all tags (paginated)
  DELETE /tagging/admin/{tag_id}      → remove a tag
"""
from typing import Any, Dict, List, Optional

from fastapi import APIRouter, Depends, HTTPException, Query
from pydantic import BaseModel, Field
from sqlalchemy.orm import Session

from app.api import deps
from app.api.deps import get_current_active_user
from app.models.user import User
from app.services.concept_tagging import concept_tagging

router = APIRouter()


# ─── Schemas ──────────────────────────────────────────────────────────────────

class TagContentRequest(BaseModel):
    content_type: str                  # video | mcq | pyq | note | pdf
    content_id:   str                  # external ID e.g. "MCQ_105", "M3C2"
    node_ids:     List[str]            # concept node IDs e.g. ["ENV_N010"]
    weights:      Optional[Dict[str, float]] = None
    primary_node_id: Optional[str] = None
    tagged_by:    Optional[str] = "manual"

class TagVideoSegmentRequest(BaseModel):
    clip_id:         str
    node_id:         str
    timestamp_start: int
    timestamp_end:   int
    label:           Optional[str] = None

class MCQAttemptRequest(BaseModel):
    mcq_id:              str
    is_correct:          bool
    score:               float = Field(ge=0, le=100)
    time_taken_seconds:  Optional[int] = None

class AutoTagTextRequest(BaseModel):
    content_type: str
    content_id:   str
    text_body:    str
    subject_slug: Optional[str] = "environment"

class MCQAttemptResponse(BaseModel):
    affected_nodes: List[Dict]
    mastery_updates: int
    message: str


# ─── Student Endpoints ────────────────────────────────────────────────────────

@router.get("/weak-concepts")
def get_weak_concepts(
    subject_slug: str = "environment",
    threshold: float = Query(60.0, ge=0, le=100),
    limit: int = Query(10, ge=1, le=50),
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Returns weak concept nodes for the current student, each enriched with:
    - MCQ accuracy stats
    - Remediation plan (video segment → AI chat → MCQs → recall)
    - Available content inventory
    """
    result = concept_tagging.get_weak_nodes_with_content(
        db, current_user.id, subject_slug, threshold, limit
    )
    return {
        "student_id": current_user.id,
        "weak_concept_count": len(result),
        "threshold": threshold,
        "weak_concepts": result,
    }


@router.get("/node/{node_id}")
def get_node_content(
    node_id: str,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """All content tagged to a specific concept node (grouped by type)."""
    content = concept_tagging.get_content_for_node(db, node_id)
    total = sum(len(v) for v in content.values())
    return {
        "node_id": node_id,
        "total_content_items": total,
        "content": content,
    }


@router.get("/node/{node_id}/stats")
def get_node_stats(
    node_id: str,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """MCQ accuracy, content inventory, and attempt history for one node."""
    return concept_tagging.get_node_concept_stats(db, node_id, current_user.id)


@router.get("/node/{node_id}/video-segments")
def get_video_segments(
    node_id: str,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Returns all video clip segments where this concept is explained.
    Used in the remediation panel to jump directly to the right video minute.
    """
    from sqlalchemy import text
    rows = db.execute(text("""
        SELECT v.clip_id, v.timestamp_start, v.timestamp_end, v.label,
               gc.title AS clip_title, gc.youtube_id
        FROM video_concept_map v
        LEFT JOIN guided_clips gc
            ON gc.id = v.clip_id::integer
        WHERE v.node_id = :nid
        ORDER BY v.timestamp_start
    """), {"nid": node_id}).fetchall()

    return {
        "node_id": node_id,
        "segments": [
            {
                "clip_id": r[0],
                "timestamp_start": r[1],
                "timestamp_end": r[2],
                "label": r[3],
                "clip_title": r[4],
                "youtube_id": r[5],
                "youtube_url": f"https://www.youtube.com/watch?v={r[5]}&t={r[1]}s" if r[5] else None,
            }
            for r in rows
        ],
    }


@router.post("/mcq-attempt", response_model=MCQAttemptResponse)
def submit_mcq_attempt(
    req: MCQAttemptRequest,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Process an MCQ answer — the core signal update for the learning engine.

    This endpoint should be called from every MCQ component in the platform.

    Returns which concept nodes were affected and their new mastery scores.
    """
    affected = concept_tagging.process_mcq_attempt(
        db=db,
        student_id=current_user.id,
        mcq_id=req.mcq_id,
        is_correct=req.is_correct,
        score=req.score,
        time_taken_seconds=req.time_taken_seconds,
    )

    status = "correct ✅" if req.is_correct else "incorrect ❌"
    return MCQAttemptResponse(
        affected_nodes=affected,
        mastery_updates=len(affected),
        message=f"MCQ {req.mcq_id} recorded ({status}). {len(affected)} concept(s) updated.",
    )


# ─── Admin Endpoints ──────────────────────────────────────────────────────────

@router.post("/tag")
def tag_content(
    req: TagContentRequest,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """Manually tag a content item to one or more concept nodes."""
    count = concept_tagging.tag_content(
        db=db,
        content_type=req.content_type,
        content_id=req.content_id,
        node_ids=req.node_ids,
        weights=req.weights,
        primary_node_id=req.primary_node_id,
        tagged_by=req.tagged_by or "manual",
    )
    return {"tags_created": count, "content_id": req.content_id, "nodes": req.node_ids}


@router.post("/tag-video-segment")
def tag_video_segment(
    req: TagVideoSegmentRequest,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """Map a concept node to a specific timestamp range in a video clip."""
    ok = concept_tagging.tag_video_segment(
        db, req.clip_id, req.node_id,
        req.timestamp_start, req.timestamp_end, req.label
    )
    if not ok:
        raise HTTPException(status_code=500, detail="Failed to save video segment tag.")
    return {
        "status": "tagged",
        "clip_id": req.clip_id, "node_id": req.node_id,
        "range": f"{req.timestamp_start}s–{req.timestamp_end}s",
    }


@router.post("/auto-tag-clips")
def auto_tag_clips(
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    One-shot: reads all guided_clips.node_ids and creates content_concept_tags.
    Safe to run multiple times — uses ON CONFLICT DO NOTHING.
    """
    count = concept_tagging.auto_tag_clips_from_node_ids(db)
    return {"tags_created": count, "message": f"Auto-tagged {count} clip→node relationships."}


@router.post("/auto-tag-text")
def auto_tag_text(
    req: AutoTagTextRequest,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Fuzzy-match text body against concept node names and create tags.
    Use for MCQ question text, PYQ text, PDF sections.
    """
    count = concept_tagging.auto_tag_by_name_match(
        db, req.content_type, req.content_id,
        req.text_body, req.subject_slug or "environment"
    )
    return {
        "tags_created": count,
        "message": f"Fuzzy-matched {count} concept(s) in provided text.",
    }


@router.get("/admin/all-tags")
def list_all_tags(
    content_type: Optional[str] = None,
    limit: int = Query(200, ge=1, le=1000),
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """Admin: list all concept tags, optionally filtered by content type."""
    tags = concept_tagging.get_all_tags(db, content_type, limit)
    return {"total": len(tags), "tags": tags}


@router.delete("/admin/{tag_id}")
def delete_tag(
    tag_id: int,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """Admin: remove a specific concept tag by ID."""
    ok = concept_tagging.delete_tag(db, tag_id)
    if not ok:
        raise HTTPException(status_code=404, detail="Tag not found.")
    return {"deleted": tag_id}
