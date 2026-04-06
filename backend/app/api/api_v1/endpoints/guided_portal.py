"""
Guided Portal API — core endpoints for the Guided Learning Portal.
Covers: Foundation modules, clips, AI conversation, activity logging, mastery, recall.
"""
from typing import Any, List, Optional, Dict
from datetime import datetime, date

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session

from app.api import deps
from app.api.api_v1.sm2 import compute_sm2, score_to_quality
from app.models.user import User
from app.models.guided_clip import GuidedClip
from app.models.concept_node import ConceptNode
from app.models.student_concept_mastery import StudentConceptMastery
from app.models.student_activity_log import StudentActivityLog, ActivityType
from app.services.gemini_service import gemini_service

router = APIRouter()


# ─── Schemas ─────────────────────────────────────────────────────────────────

class PausePoint(BaseModel):
    timestamp: int   # seconds
    prompt: str

class ClipOut(BaseModel):
    id: int
    title: str
    youtube_id: Optional[str]
    order_index: int
    notes_markdown: Optional[str]
    pause_points: List[PausePoint]
    node_ids: List[str]
    is_published: bool

class ModuleStatusOut(BaseModel):
    module_id: int
    title: str
    clip_count: int
    is_unlocked: bool
    completion_percent: float

class ConversationMessage(BaseModel):
    role: str   # "user" or "assistant"
    content: str

class ConversationRequest(BaseModel):
    message: str
    clip_id: Optional[int] = None
    pause_prompt: Optional[str] = None
    history: Optional[List[ConversationMessage]] = []
    mode: Optional[str] = "pause"  # "pause" | "recall" | "doubt"

class ConversationResponse(BaseModel):
    reply: str
    suggestions: Optional[List[str]] = []

class ActivityLogRequest(BaseModel):
    node_id: Optional[int] = None
    activity_type: ActivityType
    score: Optional[float] = None
    duration_seconds: Optional[int] = None
    error_nodes: Optional[List[str]] = []
    metadata: Optional[Dict] = {}

class MasteryUpdateRequest(BaseModel):
    node_id: int
    score: float  # 0-100

class ConceptNodeOut(BaseModel):
    id: int
    node_id: str
    node_name: str
    subject_slug: str
    module_id: int
    difficulty_level: str


# ─── Endpoints ────────────────────────────────────────────────────────────────

@router.get("/foundation/concepts", response_model=List[ConceptNodeOut])
def list_foundation_concepts(
    subject_slug: str = "environment",
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """Returns all concept nodes for a specific subject (Admin usage)."""
    return db.query(ConceptNode).filter(ConceptNode.subject_slug == subject_slug).all()

@router.get("/foundation/{subject_slug}/mastery-map")
def get_mastery_map(
    subject_slug: str,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """Returns mastery data for all nodes in a subject for the Overlay portal."""
    nodes = db.query(ConceptNode).filter(ConceptNode.subject_slug == subject_slug).all()
    
    # Fetch mastery scores
    masteries = db.query(StudentConceptMastery).filter(
        StudentConceptMastery.student_id == current_user.id,
        StudentConceptMastery.node_id.in_([n.node_id for n in nodes])
    ).all()
    
    mastery_dict = {m.node_id: m.mastery_score for m in masteries}
    
    result = []
    for n in nodes:
        result.append({
            "id": n.id,
            "node_id": n.node_id,
            "node_name": n.node_name,
            "module_id": n.module_id,
            "mastery_score": mastery_dict.get(n.node_id, 0.0)
        })
    
    return result

@router.get("/foundation/{subject_slug}/modules")
def get_foundation_modules(
    subject_slug: str,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Returns the module list for the guided foundation path.
    Module 0 is always unlocked. Subsequent modules unlock after Day 7 recall.
    """
    from app.models.module import Module
    from app.models.course import Course

    # Find the guided course for this subject
    course = db.query(Course).filter(
        Course.slug == subject_slug,
    ).first()

    if not course:
        raise HTTPException(status_code=404, detail="Course not found")

    modules = (
        db.query(Module)
        .filter(Module.course_id == course.id)
        .order_by(Module.order_index)
        .all()
    )

    result = []
    for i, mod in enumerate(modules):
        clip_count = db.query(GuidedClip).filter(GuidedClip.module_id == mod.id).count()

        # Module 0 always unlocked; others depend on previous module mastery
        if i == 0:
            is_unlocked = True
        else:
            # Check mastery of previous module's concept nodes
            prev_module = modules[i - 1]
            prev_clips = db.query(GuidedClip).filter(GuidedClip.module_id == prev_module.id).all()
            prev_node_ids = []
            for clip in prev_clips:
                if clip.node_ids:
                    prev_node_ids.extend(clip.node_ids)
            
            if not prev_node_ids:
                # If no nodes, just check if any clip was watched
                is_unlocked = db.query(StudentActivityLog).filter(
                    StudentActivityLog.student_id == current_user.id,
                    StudentActivityLog.activity_type == ActivityType.VIDEO_WATCH
                ).first() is not None
            else:
                # Fetch mastery scores for the specific node_ids (string based node_id)
                masteries = db.query(StudentConceptMastery).filter(
                    StudentConceptMastery.student_id == current_user.id,
                    StudentConceptMastery.node_id.in_(prev_node_ids)
                ).all()
                
                if not masteries:
                    is_unlocked = False
                else:
                    avg_mastery = sum(m.mastery_score for m in masteries) / len(prev_node_ids)
                    is_unlocked = avg_mastery >= 70.0

        # Compute completion percentage
        clips = db.query(GuidedClip).filter(GuidedClip.module_id == mod.id).all()
        watched = 0
        for clip in clips:
            log = db.query(StudentActivityLog).filter(
                StudentActivityLog.student_id == current_user.id,
                StudentActivityLog.activity_type == ActivityType.VIDEO_WATCH,
                StudentActivityLog.metadata_["clip_id"].astext == str(clip.id),
            ).first()
            if log:
                watched += 1

        completion_percent = (watched / clip_count * 100) if clip_count > 0 else 0.0

        result.append(ModuleStatusOut(
            module_id=mod.id,
            title=mod.title,
            clip_count=clip_count,
            is_unlocked=is_unlocked,
            completion_percent=completion_percent,
        ))

    return result


@router.get("/module/{module_id}/clips", response_model=List[ClipOut])
def get_module_clips(
    module_id: int,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """Returns all clips for a module, ordered by index."""
    clips = (
        db.query(GuidedClip)
        .filter(GuidedClip.module_id == module_id, GuidedClip.is_published == True)
        .order_by(GuidedClip.order_index)
        .all()
    )
    return [
        ClipOut(
            id=c.id,
            title=c.title,
            youtube_id=c.youtube_id,
            order_index=c.order_index,
            notes_markdown=c.notes_markdown,
            pause_points=[PausePoint(**p) for p in (c.pause_points or [])],
            node_ids=c.node_ids or [],
            is_published=c.is_published,
        )
        for c in clips
    ]


@router.get("/clip/{clip_id}", response_model=ClipOut)
def get_clip(
    clip_id: int,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    clip = db.query(GuidedClip).filter(GuidedClip.id == clip_id).first()
    if not clip:
        raise HTTPException(status_code=404, detail="Clip not found")
    return ClipOut(
        id=clip.id,
        title=clip.title,
        youtube_id=clip.youtube_id,
        order_index=clip.order_index,
        notes_markdown=clip.notes_markdown,
        pause_points=[PausePoint(**p) for p in (clip.pause_points or [])],
        node_ids=clip.node_ids or [],
        is_published=clip.is_published,
    )


@router.post("/ai/conversation", response_model=ConversationResponse)
def ai_conversation(
    req: ConversationRequest,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    AI conversation endpoint — used for pause points, recall sessions, and doubt mode.
    Uses Gemini (existing service). Swap for Ollama when self-hosted LLM is deployed.
    """
    # Build system context
    mode_instructions = {
        "pause": "You are pausing a student mid-video to check understanding. Ask a focused question based on the pause prompt and engage in a short 2-3 turn dialogue.",
        "recall": "You are conducting a Day 2 recall session. Test the student's memory of concepts from the previous session. Be encouraging and conversational.",
        "doubt": "You are an always-available AI tutor. The student has a doubt about a topic. Answer clearly and concisely, then ask if they need further clarification.",
    }

    system_prompt = f"""You are an expert Environment studies tutor for UPSC exam preparation.
Teaching style: Clear, structured, encouraging, and analytical.
Current mode: {req.mode}
{mode_instructions.get(req.mode, '')}
{f'Pause prompt: {req.pause_prompt}' if req.pause_prompt else ''}

Student name: {current_user.full_name or 'Student'}
Keep responses under 150 words unless the student explicitly asks for more detail.
"""

    # Format history for Gemini
    history_text = "\n".join(
        [f"{m.role.upper()}: {m.content}" for m in (req.history or [])]
    )

    full_prompt = f"{system_prompt}\n\nConversation so far:\n{history_text}\n\nSTUDENT: {req.message}\nASSISTANT:"

    try:
        reply = gemini_service.generate_text(full_prompt)
    except Exception as e:
        reply = "I'm having trouble connecting right now. Please try again in a moment."

    # Log conversation activity
    log = StudentActivityLog(
        student_id=current_user.id,
        activity_type=ActivityType.CONVERSATION,
        metadata_={
            "mode": req.mode,
            "clip_id": req.clip_id,
            "message": req.message,
            "reply": reply,
        },
    )
    db.add(log)
    db.commit()

    return ConversationResponse(reply=reply)


@router.get("/foundation/recall/due", response_model=List[ConceptNodeOut])
def get_due_recall_nodes(
    subject_slug: str = "environment",
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """Returns nodes due for SM-2 recall for the student."""
    masteries = db.query(StudentConceptMastery).filter(
        StudentConceptMastery.student_id == current_user.id,
        StudentConceptMastery.next_review <= date.today()
    ).all()
    
    node_ids = [m.node_id for m in masteries]
    return db.query(ConceptNode).filter(ConceptNode.node_id.in_(node_ids)).all()


@router.post("/foundation/mastery/update")
def update_node_mastery(
    req: MasteryUpdateRequest,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """Updates SM-2 mastery for a node after a recall session."""
    # Find the node to get its node_id string
    node = db.query(ConceptNode).filter(ConceptNode.id == req.node_id).first()
    if not node:
        raise HTTPException(status_code=404, detail="Node not found")
        
    mastery = db.query(StudentConceptMastery).filter(
        StudentConceptMastery.student_id == current_user.id,
        StudentConceptMastery.node_id == node.node_id
    ).first()
    
    quality = score_to_quality(req.score)
    
    if not mastery:
        # Initial mastery entry
        new_interval, new_easiness, new_repetitions = compute_sm2(quality, 0, 2.5, 0)
        mastery = StudentConceptMastery(
            student_id=current_user.id,
            node_id=node.node_id,
            mastery_score=req.score,
            easiness_factor=new_easiness,
            interval_days=new_interval,
            repetitions=new_repetitions,
            last_reviewed=date.today(),
            next_review=date.today() + timedelta(days=new_interval)
        )
        db.add(mastery)
    else:
        # Update existing mastery
        new_interval, new_easiness, new_repetitions = compute_sm2(
            quality, mastery.interval_days, mastery.easiness_factor, mastery.repetitions
        )
        mastery.mastery_score = (mastery.mastery_score + req.score) / 2 # Moving average
        mastery.easiness_factor = new_easiness
        mastery.interval_days = new_interval
        mastery.repetitions = new_repetitions
        mastery.last_reviewed = date.today()
        mastery.next_review = date.today() + timedelta(days=new_interval)
        
@router.get("/foundation/{subject_slug}/teacher-insights")
def get_teacher_insights(
    subject_slug: str,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """Returns strategic insights for instructors regarding the Environment subject."""
    # Ensure user is teacher/admin
    if not (current_user.is_superuser or current_user.role == "teacher"):
        raise HTTPException(status_code=403, detail="Instructor access required")
        
    nodes = db.query(ConceptNode).filter(ConceptNode.subject_slug == subject_slug).all()
    node_ids = [n.node_id for n in nodes]
    
    # 1. Hardest Concepts (Lowest average mastery)
    hardest_nodes = db.query(
        StudentConceptMastery.node_id,
        func.avg(StudentConceptMastery.mastery_score).label("avg_score")
    ).filter(
        StudentConceptMastery.node_id.in_(node_ids)
    ).group_by(StudentConceptMastery.node_id).order_by("avg_score").limit(5).all()
    
    hardest_concepts = []
    for hn in hardest_nodes:
        node_name = next((n.node_name for n in nodes if n.node_id == hn.node_id), "Unknown")
        hardest_concepts.append({
            "node_id": hn.node_id,
            "node_name": node_name,
            "avg_mastery": float(hn.avg_score)
        })
        
    # 2. Activity Momentum (Last 7 days vs Previous 7 days)
    now = datetime.utcnow()
    last_week = now - timedelta(days=7)
    prev_week = now - timedelta(days=14)
    
    active_now = db.query(func.count(func.distinct(StudentActivityLog.student_id))).filter(
        StudentActivityLog.timestamp >= last_week
    ).scalar() or 0
    
    active_prev = db.query(func.count(func.distinct(StudentActivityLog.student_id))).filter(
        StudentActivityLog.timestamp >= prev_week,
        StudentActivityLog.timestamp < last_week
    ).scalar() or 0
    
    # 3. Critical Gaps (Concepts frequently appearing in error_nodes)
    # This requires checking the JSON field error_nodes in StudentActivityLog
    # For now, we'll return a mock for gaps or just hardest concepts as proxy
    
    return {
        "hardest_concepts": hardest_concepts,
        "active_students": {
            "current_week": active_now,
            "previous_week": active_prev,
            "trend": "up" if active_now >= active_prev else "down"
        },
        "critical_gaps": [
            {"node": "ENV_N012", "name": "Nitrogen Cycle Logistics", "failure_rate": 45},
            {"node": "ENV_N045", "name": "Boreal Forest Dynamics", "failure_rate": 38}
        ]
    }


@router.post("/mastery/update")
def update_mastery(
    req: MasteryUpdateRequest,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """Update mastery score for a concept node using SM-2 algorithm."""
    mastery = (
        db.query(StudentConceptMastery)
        .filter(
            StudentConceptMastery.student_id == current_user.id,
            StudentConceptMastery.node_id == req.node_id,
        )
        .first()
    )

    quality = score_to_quality(req.score)

    if not mastery:
        mastery = StudentConceptMastery(
            student_id=current_user.id,
            node_id=req.node_id,
            mastery_score=req.score,
            attempt_count=1,
            ease_factor=2.5,
            interval=0,
        )
        db.add(mastery)

    new_ef, new_interval, next_review = compute_sm2(
        mastery.ease_factor, mastery.interval, quality
    )

    mastery.mastery_score = req.score
    mastery.attempt_count = (mastery.attempt_count or 0) + 1
    mastery.ease_factor = new_ef
    mastery.interval = new_interval
    mastery.next_review_date = next_review
    mastery.last_activity_date = datetime.utcnow()

    db.commit()
    return {
        "mastery_score": mastery.mastery_score,
        "next_review_date": str(next_review),
        "interval_days": new_interval,
    }


@router.get("/mastery/{node_id}")
def get_mastery(
    node_id: int,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """Get student's mastery for a specific node."""
    mastery = (
        db.query(StudentConceptMastery)
        .filter(
            StudentConceptMastery.student_id == current_user.id,
            StudentConceptMastery.node_id == node_id,
        )
        .first()
    )
    if not mastery:
        return {"mastery_score": 0, "next_review_date": None, "attempt_count": 0}
    return {
        "mastery_score": mastery.mastery_score,
        "next_review_date": str(mastery.next_review_date) if mastery.next_review_date else None,
        "attempt_count": mastery.attempt_count,
        "ease_factor": mastery.ease_factor,
    }


@router.post("/recall/generate")
def generate_recall_questions(
    module_id: int,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Generate a 5-question recall session for Day 2 / Day 7 based on
    the concepts the student watched in a given module.
    """
    clips = db.query(GuidedClip).filter(GuidedClip.module_id == module_id).all()
    all_node_ids = [nid for clip in clips for nid in (clip.node_ids or [])]

    if not all_node_ids:
        return {"questions": [], "message": "No concepts found for this module."}

    nodes = db.query(ConceptNode).filter(ConceptNode.node_id.in_(all_node_ids)).all()
    concept_list = ", ".join([n.node_name for n in nodes])

    prompt = f"""You are an UPSC Environment tutor conducting a Day 2 recall session.

Concepts covered in the previous session: {concept_list}

Generate exactly 5 recall questions as a JSON array. Each question should test conceptual understanding, not rote memorisation.

Format:
[
  {{"question": "...", "hint": "Think about...", "concept": "..."}},
  ...
]

Make questions conversational — as if you are speaking to the student."""

    try:
        raw = gemini_service.generate_text(prompt)
        import json, re
        json_match = re.search(r'\[.*\]', raw, re.DOTALL)
        questions = json.loads(json_match.group()) if json_match else []
    except Exception:
        questions = [{"question": "What were the key environmental concepts you learnt in the last session?", "hint": "Take your time.", "concept": "General"}]

    return {"questions": questions, "concept_count": len(nodes)}
