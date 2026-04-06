from typing import Any, Dict
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.api import deps
from app.models.user import User
from app.models.guided_clip import GuidedClip
from app.models.student_activity_log import StudentActivityLog, ActivityType
from app.models.student_concept_mastery import StudentConceptMastery
from app.models.concept_node import ConceptNode
from app.models.module import Module
from app.models.course import Course

router = APIRouter()

@router.get("/status")
def get_journey_status(
    subject_slug: str = "environment",
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Calculates the student's current step in the Guided Journey.
    Steps: 'intro' | 'studying' | 'selecting' | 'transported'
    """
    # 1. Check if the user is already 'Transported' (has selected an exam)
    if current_user.revision_exam_id:
        return {
            "step": "transported",
            "exam_id": current_user.revision_exam_id,
            "completion_percent": 100.0
        }

    # 2. Check for 'Intro' state (Any activity in this subject?)
    # Find the course first
    course = db.query(Course).filter(Course.slug == subject_slug).first()
    if not course:
        return {"step": "intro", "completion_percent": 0.0}

    # Check for any video watch log in any module of this course
    any_activity = db.query(StudentActivityLog).filter(
        StudentActivityLog.student_id == current_user.id,
        StudentActivityLog.activity_type == ActivityType.VIDEO_WATCH,
    ).first()

    if not any_activity:
        return {"step": "intro", "completion_percent": 0.0}

    # 3. Calculate Foundation Mastery (Performance-Driven Gate)
    # Average mastery across all nodes for the given subject
    # This ensures the student actually knows 70% of the material before moving to UPSC dimension
    stats = db.query(
        func.count(ConceptNode.id).label("total_nodes"),
        func.sum(StudentConceptMastery.mastery_score).label("total_mastery")
    ).outerjoin(
        StudentConceptMastery, 
        (StudentConceptMastery.node_id == ConceptNode.id) & (StudentConceptMastery.student_id == current_user.id)
    ).filter(
        ConceptNode.subject_slug == subject_slug
    ).first()

    total_nodes = stats.total_nodes if stats and stats.total_nodes else 0
    total_mastery = stats.total_mastery if stats and stats.total_mastery else 0.0

    # Average mastery (un-mastered nodes count as 0.0)
    avg_mastery = (total_mastery / total_nodes) if total_nodes > 0 else 0.0
    completion_percent = round(avg_mastery, 2)

    # 4. Determine 'Selecting' vs 'Studying'
    # Threshold for completion is 70% average mastery
    if completion_percent >= 70.0:
        return {
            "step": "selecting",
            "completion_percent": 100.0,
            "actual_mastery": completion_percent
        }

    return {
        "step": "studying",
        "completion_percent": completion_percent,
        "nodes_tracked": total_nodes,
        "mastery_threshold": 70.0
    }

@router.post("/select-exam")
def select_specialization(
    exam_id: str,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Saves the student's chosen exam specialization (e.g., 'upsc').
    This 'transports' them to the new dimension.
    """
    if exam_id not in ["upsc", "spsc", "research"]:
        raise HTTPException(status_code=400, detail="Invalid exam specialization")

    current_user.revision_exam_id = exam_id
    db.add(current_user)
    db.commit()

    return {
        "message": f"Specialization {exam_id} activated. Dimensional transport triggered.",
        "exam_id": exam_id
    }
