"""
Activity Tracking Service
Tracks all student interactions with the drill system
"""

from sqlalchemy.orm import Session
from typing import Dict, Any, Optional
from uuid import UUID
from datetime import datetime, timezone
from starlette.concurrency import run_in_threadpool

from app.models.drill import StudentActivity
from app.models.user import User


def _sync_track_activity(
    db: Session,
    student_id: UUID,
    activity_type: str,
    activity_data: Dict[str, Any],
    session_id: Optional[UUID]
) -> StudentActivity:
    activity = StudentActivity(
        student_id=student_id,
        session_id=session_id,
        activity_type=activity_type,
        activity_data=activity_data,
        timestamp=datetime.now(timezone.utc)
    )
    db.add(activity)
    db.commit()
    db.refresh(activity)
    return activity


def _sync_get_student_activities(
    db: Session,
    student_id: UUID,
    activity_type: Optional[str],
    limit: int
):
    query = db.query(StudentActivity).filter(
        StudentActivity.student_id == student_id
    )

    if activity_type:
        query = query.filter(StudentActivity.activity_type == activity_type)

    return query.order_by(StudentActivity.timestamp.desc()).limit(limit).all()


def _sync_get_session_activities(
    db: Session,
    session_id: UUID
):
    return db.query(StudentActivity).filter(
        StudentActivity.session_id == session_id
    ).order_by(StudentActivity.timestamp.asc()).all()


class ActivityTrackingService:
    """Service for tracking student activities"""
    
    @staticmethod
    async def track_activity(
        db: Session,
        student_id: UUID,
        activity_type: str,
        activity_data: Optional[Dict[str, Any]] = None,
        session_id: Optional[UUID] = None
    ) -> StudentActivity:
        """
        Track a student activity
        
        Activity Types:
        - session_started: Student started a drill session
        - step_started: Student started a specific step
        - step_completed: Student completed a step
        - timer_started: Timer started for a step
        - timer_expired: Timer expired
        - timer_skipped: Student skipped timer
        - answer_uploaded: Student uploaded an answer
        - content_read: Student read content
        - report_viewed: Student viewed their report
        - break_taken: Student took a break
        - break_skipped: Student skipped break
        - session_completed: Student completed entire session
        - daily_summary_viewed: Student viewed daily summary
        """
        
        return await run_in_threadpool(
            _sync_track_activity,
            db,
            student_id,
            activity_type,
            activity_data or {},
            session_id
        )
    
    @staticmethod
    async def get_student_activities(
        db: Session,
        student_id: UUID,
        activity_type: Optional[str] = None,
        limit: int = 100
    ):
        """Get student activities with optional filtering"""
        return await run_in_threadpool(
            _sync_get_student_activities,
            db,
            student_id,
            activity_type,
            limit
        )
    
    @staticmethod
    async def get_session_activities(
        db: Session,
        session_id: UUID
    ):
        """Get all activities for a specific session"""
        return await run_in_threadpool(
            _sync_get_session_activities,
            db,
            session_id
        )


# Global instance
activity_tracking_service = ActivityTrackingService()
