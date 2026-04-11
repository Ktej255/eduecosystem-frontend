"""
learning_engine_api.py — FastAPI endpoints for the Learning Engine
==================================================================
All routes are under /api/v1/engine/

GET  /engine/decision             → What should student do now?
GET  /engine/todays-dashboard     → Full dashboard (plan + state + readiness)
GET  /engine/exam-readiness       → Foundation exam readiness score
GET  /engine/efficiency-score     → Personal learning efficiency metric
GET  /engine/mastery-radar        → All node mastery scores for radar chart
POST /engine/activity-complete    → Trigger engine after any student activity
GET  /engine/analytics            → Teacher cohort analytics
"""
from typing import Any, Dict, List, Optional
from datetime import datetime

from fastapi import APIRouter, Depends, BackgroundTasks
from pydantic import BaseModel
from sqlalchemy.orm import Session
from sqlalchemy import text

from app.api import deps
from app.api.deps_permissions import require_instructor_role
from app.models.user import User
from app.services.learning_engine import (
    learning_engine, LearningState
)
from app.services.concept_tagging import concept_tagging
from app.services.cache_service import cache_service

router = APIRouter()


# ─── Schemas ──────────────────────────────────────────────────────────────────

class PlanItem(BaseModel):
    type: str
    node_id: Optional[str]
    node_name: str
    estimated_minutes: int
    description: str
    icon: str

class EngineDecisionOut(BaseModel):
    learning_state: str
    next_action: str
    priority_node_id: Optional[str]
    priority_node_name: Optional[str]
    reason: str
    confidence: float
    todays_plan: List[PlanItem]
    ai_intervention: bool
    ai_message: Optional[str]
    exam_readiness: float
    efficiency_score: float

class TodaysDashboard(BaseModel):
    student_name: str
    learning_state: str
    state_label: str
    next_action: str
    priority_node_id: Optional[str]
    priority_node_name: Optional[str]
    reason: str
    exam_readiness: float
    efficiency_score: float
    ai_intervention: bool
    ai_message: Optional[str]
    todays_plan: List[PlanItem]
    mastery_summary: Dict[str, int]
    quick_stats: Dict[str, Any]

class ActivityCompleteRequest(BaseModel):
    node_id: Optional[str] = None           # concept node string ID (e.g. ENV_N010)
    activity_type: str                       # video_watch | mcq | recall | conversation
    score: Optional[float] = None           # 0-100
    duration_seconds: Optional[int] = None
    metadata: Optional[Dict] = {}

class ActivityCompleteResponse(BaseModel):
    message: str
    mastery_updated: bool
    new_mastery_score: Optional[float]
    next_action: str
    next_node_name: Optional[str]


# ─── State Labels ──────────────────────────────────────────────────────────────

STATE_LABELS = {
    LearningState.LEARNING:       "📚 Learning New Concept",
    LearningState.RECALL:         "🔁 Recall Session Due",
    LearningState.REINFORCEMENT:  "⚠️ Concept Reinforcement",
    LearningState.EXAM_PRACTICE:  "🎯 Exam Practice Mode",
    LearningState.REVISION_CYCLE: "🔄 Revision Cycle",
}


# ─── Endpoints ────────────────────────────────────────────────────────────────

@router.get("/knowledge-graph")
def get_knowledge_graph(
    subject_slug: str = "environment",
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """Returns the concept map for the requested subject."""
    return concept_tagging.get_knowledge_graph(db, current_user.id, subject_slug)


@router.get("/remediation")
def get_remediation_plan(
    subject_slug: str = "environment",
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """Returns weak concepts and their custom recovery paths."""
    from app.services.concept_tagging import concept_tagging
    return concept_tagging.get_weak_nodes_with_content(db, current_user.id, subject_slug)


@router.get("/node/{node_id}/stats")
def get_node_stats(
    node_id: str,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """Returns detailed MCQ and content stats for a specific node."""
    from app.services.concept_tagging import concept_tagging
    return concept_tagging.get_node_concept_stats(db, node_id, current_user.id)


@router.get("/node/{node_id}/video-segments")
def get_node_videos(
    node_id: str,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """Returns associated video clips for a specific node."""
    from app.services.concept_tagging import concept_tagging
    return concept_tagging.get_video_segments_for_node(db, node_id)


@router.get("/decision", response_model=EngineDecisionOut)
def get_engine_decision(
    subject_slug: str = "environment",
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """Run the full learning engine and return the next recommended action."""
    decision = learning_engine.evaluate(db, current_user.id, subject_slug)
    return EngineDecisionOut(
        learning_state=decision.learning_state.value,
        next_action=decision.next_action.value,
        priority_node_id=decision.priority_node_id,
        priority_node_name=decision.priority_node_name,
        reason=decision.reason,
        confidence=decision.confidence,
        todays_plan=[PlanItem(**item) for item in decision.todays_plan],
        ai_intervention=decision.ai_intervention,
        ai_message=decision.ai_message,
        exam_readiness=decision.exam_readiness,
        efficiency_score=decision.efficiency_score,
    )


@router.get("/todays-dashboard", response_model=TodaysDashboard)
def get_todays_dashboard(
    subject_slug: str = "environment",
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Full student dashboard — combines engine decision with mastery summary
    and quick stats for the home screen.
    """
    decision = learning_engine.evaluate(db, current_user.id, subject_slug)

    # Mastery summary counts
    mastery_rows = db.execute(text("""
        SELECT
            SUM(CASE WHEN scm.mastery_score >= 80  THEN 1 ELSE 0 END) AS strong,
            SUM(CASE WHEN scm.mastery_score >= 60
                      AND scm.mastery_score < 80  THEN 1 ELSE 0 END) AS medium,
            SUM(CASE WHEN scm.mastery_score < 60
                      AND scm.mastery_score > 0   THEN 1 ELSE 0 END) AS weak,
            COUNT(*) AS total_attempted
        FROM student_concept_mastery scm
        JOIN concept_nodes cn ON cn.id = scm.node_id
        WHERE scm.student_id = :sid AND cn.subject_slug = :slug
    """), {"sid": current_user.id, "slug": subject_slug}).fetchone()

    mastery_summary = {
        "strong":  int(mastery_rows[0] or 0),
        "medium":  int(mastery_rows[1] or 0),
        "weak":    int(mastery_rows[2] or 0),
        "total_attempted": int(mastery_rows[3] or 0),
    }

    # Quick stats: streak, total study time, sessions today
    streak_row = db.execute(text("""
        SELECT COUNT(DISTINCT DATE(timestamp))
        FROM student_activity_log
        WHERE student_id = :sid
          AND timestamp >= NOW() - INTERVAL '30 days'
    """), {"sid": current_user.id}).scalar() or 0

    today_mins = db.execute(text("""
        SELECT COALESCE(SUM(duration_seconds), 0) / 60
        FROM student_activity_log
        WHERE student_id = :sid
          AND DATE(timestamp) = CURRENT_DATE
    """), {"sid": current_user.id}).scalar() or 0

    total_sessions = db.execute(text("""
        SELECT COUNT(*)
        FROM student_activity_log
        WHERE student_id = :sid
    """), {"sid": current_user.id}).scalar() or 0

    quick_stats = {
        "day_streak": int(streak_row),
        "today_minutes": int(today_mins),
        "total_sessions": int(total_sessions),
        "nodes_mastered": mastery_summary["strong"],
    }

    return TodaysDashboard(
        student_name=current_user.full_name or "Student",
        learning_state=decision.learning_state.value,
        state_label=STATE_LABELS.get(decision.learning_state, ""),
        next_action=decision.next_action.value,
        priority_node_id=decision.priority_node_id,
        priority_node_name=decision.priority_node_name,
        reason=decision.reason,
        exam_readiness=decision.exam_readiness,
        efficiency_score=decision.efficiency_score,
        ai_intervention=decision.ai_intervention,
        ai_message=decision.ai_message,
        todays_plan=[PlanItem(**item) for item in decision.todays_plan],
        mastery_summary=mastery_summary,
        quick_stats=quick_stats,
    )


@router.get("/exam-readiness")
def get_exam_readiness(
    subject_slug: str = "environment",
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """Exam readiness score + breakdown by module (Cached Phase 13)."""
    cache_key = f"student_dash:{current_user.id}:readiness:{subject_slug}"
    cached = cache_service.get(cache_key)
    if cached:
        return cached

    row = db.execute(text("""
        SELECT
            AVG(scm.mastery_score)                                    AS avg_mastery,
            COUNT(DISTINCT scm.node_id)                               AS attempted_nodes,
            (SELECT COUNT(*) FROM concept_nodes WHERE subject_slug = :slug) AS total_nodes
        FROM student_concept_mastery scm
        JOIN concept_nodes cn ON cn.id = scm.node_id
        WHERE scm.student_id = :sid AND cn.subject_slug = :slug
    """), {"sid": current_user.id, "slug": subject_slug}).fetchone()

    avg_mastery = float(row[0] or 0)
    attempted   = int(row[1] or 0)
    total       = int(row[2] or 0)
    coverage    = (attempted / total * 100) if total > 0 else 0
    readiness   = round(avg_mastery * (attempted / max(total, 1)), 1)

    stage = "not_started"
    if readiness >= 80:  stage = "exam_ready"
    elif readiness >= 70: stage = "almost_ready"
    elif readiness >= 50: stage = "foundational"
    elif readiness > 0:   stage = "building"

    result = {
        "exam_readiness_score": readiness,
        "stage": stage,
        "avg_mastery": round(avg_mastery, 1),
        "coverage_percent": round(coverage, 1),
        "attempted_nodes": attempted,
        "total_nodes": total,
        "message": _readiness_message(stage, readiness),
    }

    # Cache for 5 minutes (300s)
    cache_service.set(cache_key, result, 300)
    return result


@router.get("/efficiency-score")
def get_efficiency_score(
    subject_slug: str = "environment",
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """Learning efficiency score + trend analysis (Cached Phase 13)."""
    cache_key = f"student_dash:{current_user.id}:efficiency:{subject_slug}"
    cached = cache_service.get(cache_key)
    if cached:
        return cached

    signals = learning_engine._collect_signals(db, current_user.id, subject_slug)
    efficiency = learning_engine._compute_efficiency_score(signals)

    # Weekly trend
    this_week = db.execute(text("""
        SELECT AVG(score) FROM student_activity_log
        WHERE student_id = :sid
          AND timestamp >= NOW() - INTERVAL '7 days'
          AND score IS NOT NULL
    """), {"sid": current_user.id}).scalar() or 0

    last_week = db.execute(text("""
        SELECT AVG(score) FROM student_activity_log
        WHERE student_id = :sid
          AND timestamp BETWEEN NOW() - INTERVAL '14 days' AND NOW() - INTERVAL '7 days'
          AND score IS NOT NULL
    """), {"sid": current_user.id}).scalar() or 0

    trend = "stable"
    if float(this_week) > float(last_week) * 1.1: trend = "improving"
    elif float(this_week) < float(last_week) * 0.9: trend = "declining"

    result = {
        "efficiency_score": efficiency,
        "trend": trend,
        "this_week_avg_score": round(float(this_week), 1),
        "last_week_avg_score": round(float(last_week), 1),
        "interpretation": _efficiency_label(efficiency),
    }

    # Cache for 2 minutes (120s)
    cache_service.set(cache_key, result, 120)
    return result


@router.get("/mastery-radar")
def get_mastery_radar(
    subject_slug: str = "environment",
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """All node mastery scores for the radar/spider chart in the dashboard."""
    rows = db.execute(text("""
        SELECT cn.node_name, cn.difficulty_level,
               COALESCE(scm.mastery_score, 0) AS mastery,
               COALESCE(scm.attempt_count, 0) AS attempts
        FROM concept_nodes cn
        LEFT JOIN student_concept_mastery scm
            ON scm.node_id = cn.id AND scm.student_id = :sid
        WHERE cn.subject_slug = :slug
        ORDER BY cn.node_id
    """), {"sid": current_user.id, "slug": subject_slug}).fetchall()

    return {
        "nodes": [
            {
                "name": r[0], "difficulty": r[1],
                "mastery": round(float(r[2]), 1),
                "attempts": int(r[3]),
                "status": ("strong" if r[2] >= 80 else "medium" if r[2] >= 60
                           else "weak" if r[2] > 0 else "unstarted"),
            }
            for r in rows
        ]
    }


def activity_complete(
    req: ActivityCompleteRequest,
    background_tasks: BackgroundTasks,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Called after any student activity. Updates mastery and re-evaluates the engine.
    This is the main integration point — plug it in from video player, MCQ, recall, etc.
    """
    from app.models.student_activity_log import StudentActivityLog, ActivityType
    from app.models.student_concept_mastery import StudentConceptMastery
    from app.api.api_v1.sm2 import compute_sm2, score_to_quality

    node_db_id = None
    new_mastery = None

    # 1. Look up node
    if req.node_id:
        node_row = db.execute(text(
            "SELECT id FROM concept_nodes WHERE node_id = :nid LIMIT 1"
        ), {"nid": req.node_id}).fetchone()
        if node_row:
            node_db_id = node_row[0]

    # 2. Log the activity
    try:
        act_type = ActivityType(req.activity_type)
    except ValueError:
        act_type = ActivityType.CONVERSATION

    log_entry = StudentActivityLog(
        student_id=current_user.id,
        node_id=node_db_id,
        activity_type=act_type,
        score=req.score,
        duration_seconds=req.duration_seconds,
        metadata_=req.metadata or {},
        timestamp=datetime.utcnow(),
    )
    db.add(log_entry)

    # 3. Update mastery ASYNCHRONOUSLY if score provided (Phase 13)
    mastery_updated = False
    if req.score is not None and req.node_id:
        from app.services.background_tasks import process_learning_signal_task
        
        # Trigger async processing
        process_learning_signal_task.delay(
            student_id=current_user.id,
            node_id=req.node_id,
            is_correct=(req.score >= 60), # Basic threshold for 'correct'
            score=req.score,
            time_taken=req.duration_seconds
        )
        mastery_updated = True
        new_mastery = req.score

    db.commit()

    # 4. Quick engine re-evaluate for next action (in background to not block response)
    decision = learning_engine.evaluate(db, current_user.id)

    return ActivityCompleteResponse(
        message="Activity logged and mastery updated.",
        mastery_updated=mastery_updated,
        new_mastery_score=new_mastery,
        next_action=decision.next_action.value,
        next_node_name=decision.priority_node_name,
    )


@router.get("/analytics")
def get_teacher_analytics(
    subject_slug: str = "environment",
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(require_instructor_role),
) -> Any:
    """Teacher analytics dashboard — cohort-level insights."""
    return learning_engine.get_cohort_analytics(db, subject_slug)


# ─── Helpers ──────────────────────────────────────────────────────────────────

def _readiness_message(stage: str, score: float) -> str:
    messages = {
        "not_started":  "Start your first module to begin the learning journey.",
        "building":     f"You're at {score:.0f}% readiness. Keep building your foundation.",
        "foundational": f"Good progress at {score:.0f}%. Focus on weak concepts to accelerate.",
        "almost_ready": f"You're at {score:.0f}% — almost exam-ready! Polish the remaining gaps.",
        "exam_ready":   f"Excellent! At {score:.0f}%, you're ready for exam-style practice.",
    }
    return messages.get(stage, "Keep going!")


def _efficiency_label(score: float) -> str:
    if score >= 80: return "Outstanding learner 🌟"
    if score >= 65: return "High efficiency 🚀"
    if score >= 50: return "Consistent progress 📈"
    if score >= 30: return "Building momentum 🔧"
    return "Getting started — keep going! 💪"
