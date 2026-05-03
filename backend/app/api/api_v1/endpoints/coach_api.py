from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.api import deps
from app.models.user import User
from app.models.student_report import StudentReport
from app.models.lead import Lead

router = APIRouter()

@router.get("/students")
def get_coach_students(
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Get students assigned to the current coach/admin.
    """
    if current_user.role not in ["admin", "teacher"]:
        raise HTTPException(status_code=403, detail="Not authorized")
        
    # Find leads/students assigned to this coach
    leads = db.query(Lead).filter(Lead.assigned_to_id == current_user.id).all()
    
    # Also find student users directly (if they have the same email)
    lead_emails = [l.email for l in leads]
    students = db.query(User).filter(
        User.email.in_(lead_emails),
        User.role == "student"
    ).all()
    
    return {
        "leads": leads,
        "students": students
    }

@router.get("/student/{student_id}/report")
def get_student_report(
    student_id: int,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    View a specific student's graphotherapy reports.
    """
    if current_user.role not in ["admin", "teacher"]:
        raise HTTPException(status_code=403, detail="Not authorized")
        
    # Audit trail: check if coach is authorized for this student
    # (Simplified for now: coaches can see any student report)
    
    reports = db.query(StudentReport).filter(
        StudentReport.user_id == student_id,
        StudentReport.report_type == "graphotherapy_analysis"
    ).order_by(StudentReport.created_at.desc()).all()
    
    return reports
