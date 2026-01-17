"""
Development History API Endpoints
Provides CRUD operations for development logs, daily reports, and AI planning sessions.
"""

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import Optional, List
from datetime import date, timedelta
from pydantic import BaseModel

from app.api.deps import get_current_user, get_db
from app.models.user import User
from app.models.development_history import DevelopmentLog, DailyDevReport, AIPlanningSession

router = APIRouter()


# ==================== SCHEMAS ====================

class DevelopmentLogCreate(BaseModel):
    date: date
    title: str
    description: Optional[str] = None
    batch: Optional[str] = None
    features: List[str] = []
    challenges: List[str] = []


class DevelopmentLogResponse(BaseModel):
    id: int
    date: date
    title: str
    description: Optional[str]
    batch: Optional[str]
    features: List[str]
    challenges: List[str]
    
    class Config:
        from_attributes = True


class DailyReportCreate(BaseModel):
    date: date
    batch: Optional[str] = None
    summary: Optional[str] = None
    actions: List[dict] = []
    files_changed: int = 0
    lines_added: int = 0
    lines_removed: int = 0
    tests_run: int = 0
    tests_passed: int = 0


class AIPlanRequest(BaseModel):
    days_to_analyze: int = 15


# ==================== HELPER ====================

def check_admin(current_user: User):
    """Verify user is admin"""
    if current_user.role not in ["admin", "superadmin"]:
        raise HTTPException(status_code=403, detail="Admin access required")
    return current_user


# ==================== DEVELOPMENT LOGS ====================

@router.get("/development-logs")
def get_development_logs(
    skip: int = Query(0, ge=0),
    limit: int = Query(50, le=200),
    batch: Optional[str] = Query(None),
    start_date: Optional[date] = Query(None),
    end_date: Optional[date] = Query(None),
    db: Session = Depends(get_db),
    current_user: User = Depends(check_admin)
):
    """
    Get development history logs with optional filters.
    """
    query = db.query(DevelopmentLog).order_by(DevelopmentLog.date.desc())
    
    if batch:
        query = query.filter(DevelopmentLog.batch == batch)
    if start_date:
        query = query.filter(DevelopmentLog.date >= start_date)
    if end_date:
        query = query.filter(DevelopmentLog.date <= end_date)
    
    total = query.count()
    logs = query.offset(skip).limit(limit).all()
    
    return {
        "total": total,
        "logs": [
            {
                "id": log.id,
                "date": str(log.date),
                "title": log.title,
                "description": log.description,
                "batch": log.batch,
                "features": log.features or [],
                "challenges": log.challenges or []
            }
            for log in logs
        ]
    }


@router.post("/development-logs")
def create_development_log(
    log_data: DevelopmentLogCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(check_admin)
):
    """
    Create a new development history entry.
    """
    log = DevelopmentLog(
        date=log_data.date,
        title=log_data.title,
        description=log_data.description,
        batch=log_data.batch,
        features=log_data.features,
        challenges=log_data.challenges,
        created_by=current_user.id
    )
    db.add(log)
    db.commit()
    db.refresh(log)
    
    return {
        "message": "Development log created successfully",
        "log": {
            "id": log.id,
            "date": str(log.date),
            "title": log.title
        }
    }


@router.get("/development-logs/{log_id}")
def get_development_log(
    log_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(check_admin)
):
    """
    Get a specific development log by ID.
    """
    log = db.query(DevelopmentLog).filter(DevelopmentLog.id == log_id).first()
    if not log:
        raise HTTPException(status_code=404, detail="Development log not found")
    
    return {
        "id": log.id,
        "date": str(log.date),
        "title": log.title,
        "description": log.description,
        "batch": log.batch,
        "features": log.features or [],
        "challenges": log.challenges or []
    }


@router.put("/development-logs/{log_id}")
def update_development_log(
    log_id: int,
    log_data: DevelopmentLogCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(check_admin)
):
    """
    Update an existing development log.
    """
    log = db.query(DevelopmentLog).filter(DevelopmentLog.id == log_id).first()
    if not log:
        raise HTTPException(status_code=404, detail="Development log not found")
    
    log.date = log_data.date
    log.title = log_data.title
    log.description = log_data.description
    log.batch = log_data.batch
    log.features = log_data.features
    log.challenges = log_data.challenges
    
    db.commit()
    db.refresh(log)
    
    return {"message": "Development log updated successfully"}


@router.delete("/development-logs/{log_id}")
def delete_development_log(
    log_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(check_admin)
):
    """
    Delete a development log.
    """
    log = db.query(DevelopmentLog).filter(DevelopmentLog.id == log_id).first()
    if not log:
        raise HTTPException(status_code=404, detail="Development log not found")
    
    db.delete(log)
    db.commit()
    
    return {"message": "Development log deleted successfully"}


# ==================== DAILY REPORTS ====================

@router.get("/daily-reports")
def get_daily_reports(
    skip: int = Query(0, ge=0),
    limit: int = Query(30, le=100),
    batch: Optional[str] = Query(None),
    db: Session = Depends(get_db),
    current_user: User = Depends(check_admin)
):
    """
    Get daily development reports.
    """
    query = db.query(DailyDevReport).order_by(DailyDevReport.date.desc())
    
    if batch:
        query = query.filter(DailyDevReport.batch == batch)
    
    total = query.count()
    reports = query.offset(skip).limit(limit).all()
    
    return {
        "total": total,
        "reports": [
            {
                "id": r.id,
                "date": str(r.date),
                "batch": r.batch,
                "summary": r.summary,
                "actions": r.actions or [],
                "metrics": {
                    "files_changed": r.files_changed,
                    "lines_added": r.lines_added,
                    "lines_removed": r.lines_removed,
                    "tests_run": r.tests_run,
                    "tests_passed": r.tests_passed
                }
            }
            for r in reports
        ]
    }


@router.post("/daily-reports")
def create_daily_report(
    report_data: DailyReportCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(check_admin)
):
    """
    Create a new daily report.
    """
    # Check if report for this date already exists
    existing = db.query(DailyDevReport).filter(DailyDevReport.date == report_data.date).first()
    if existing:
        raise HTTPException(status_code=400, detail="Report for this date already exists")
    
    report = DailyDevReport(
        date=report_data.date,
        batch=report_data.batch,
        summary=report_data.summary,
        actions=report_data.actions,
        files_changed=report_data.files_changed,
        lines_added=report_data.lines_added,
        lines_removed=report_data.lines_removed,
        tests_run=report_data.tests_run,
        tests_passed=report_data.tests_passed
    )
    db.add(report)
    db.commit()
    db.refresh(report)
    
    return {"message": "Daily report created successfully", "id": report.id}


# ==================== AI PLANNING ====================

@router.post("/ai-planning/generate")
def generate_ai_plan(
    request: AIPlanRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(check_admin)
):
    """
    Generate an AI-powered 7-day development plan based on recent history.
    For now, returns mock data. Will integrate with Gemini API.
    """
    days = request.days_to_analyze
    
    # Get recent development logs
    start_date = date.today() - timedelta(days=days)
    recent_logs = db.query(DevelopmentLog).filter(
        DevelopmentLog.date >= start_date
    ).order_by(DevelopmentLog.date.desc()).all()
    
    # Mock AI-generated plan (to be replaced with actual Gemini call)
    plan_items = [
        {
            "day": i + 1,
            "date": str(date.today() + timedelta(days=i)),
            "portal": ["Admin Portal", "Student Portal", "Teacher Portal", "CRM", "Backend", "All Portals"][i % 6],
            "tasks": [
                f"Task {j+1} based on recent activity analysis"
                for j in range(4)
            ],
            "priority": ["high", "medium", "low"][i % 3],
            "estimated_hours": 6 + (i % 3)
        }
        for i in range(7)
    ]
    
    insights = [
        {
            "type": "priority",
            "message": "Based on recent activity, Admin Portal enhancements should continue",
            "portal": "Admin Portal"
        },
        {
            "type": "enhancement",
            "message": "Consider adding more real-time features to Student Activity tracking",
            "portal": "Admin Portal"
        },
        {
            "type": "recommendation",
            "message": "Backend tests pass rate is good, maintain coverage",
            "portal": "Backend"
        }
    ]
    
    # Save the planning session
    session = AIPlanningSession(
        days_analyzed=days,
        plan_items=plan_items,
        insights=insights,
        request_params={"days": days},
        generated_by=current_user.id
    )
    db.add(session)
    db.commit()
    db.refresh(session)
    
    return {
        "session_id": session.id,
        "days_analyzed": days,
        "plan_items": plan_items,
        "insights": insights,
        "generated_at": str(session.created_at)
    }


@router.get("/ai-planning/latest")
def get_latest_ai_plan(
    db: Session = Depends(get_db),
    current_user: User = Depends(check_admin)
):
    """
    Get the most recent AI planning session.
    """
    session = db.query(AIPlanningSession).order_by(
        AIPlanningSession.created_at.desc()
    ).first()
    
    if not session:
        raise HTTPException(status_code=404, detail="No AI planning sessions found")
    
    return {
        "session_id": session.id,
        "days_analyzed": session.days_analyzed,
        "plan_items": session.plan_items or [],
        "insights": session.insights or [],
        "generated_at": str(session.created_at)
    }


@router.get("/batches")
def get_available_batches(
    db: Session = Depends(get_db),
    current_user: User = Depends(check_admin)
):
    """
    Get list of all unique batch names for filtering.
    """
    batches = db.query(DevelopmentLog.batch).distinct().filter(
        DevelopmentLog.batch.isnot(None)
    ).all()
    
    return {"batches": [b[0] for b in batches if b[0]]}
