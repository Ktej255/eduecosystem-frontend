"""
Graphotherapy Progress Tracking Backend
4-Level System with Sequential Day Completion and Image Uploads
"""
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Form, status, Body
from sqlalchemy.orm import Session
from typing import List, Optional
from datetime import datetime, timedelta, date
from pydantic import BaseModel
import os
import uuid
import shutil

from app.api import deps
from app.db.session import get_db
from app.models.user import User
from app.models.graphotherapy import (
    GraphotherapyProgress,
    GraphotherapyDayCompletion,
    GraphoBook,
    GraphoPage,
    GraphoSubmission,
    GraphoLead,
    GRAPHOTHERAPY_LEVELS,
    HandwritingSnapshot,
    WeeklyProgressReport
)
from app.core.graphotherapy_content import LEVEL_1_CONTENT
from app.schemas.graphotherapy import (
    GraphotherapyProgressResponse,
    LevelInfo,
    LevelDetailResponse,
    DayDetailResponse,
    DayCompleteRequest,
    DayCompleteResponse,
    DrillSubmitRequest,
    GraphoBookResponse,
    GraphoBookCreate,
    GraphoSubmissionResponse,
    OverviewResponse,
    SnapshotStatusResponse,
    WeeklyProgressResponse
)
from app.services.snapshot_worker import analyze_snapshot_task
from app.core.redis_client import redis_client

router = APIRouter()

# Upload directory for graphotherapy images
UPLOAD_DIR = "uploads/graphotherapy"
os.makedirs(UPLOAD_DIR, exist_ok=True)


def get_or_create_progress(db: Session, user_id: int) -> GraphotherapyProgress:
    """Get existing progress or create new one for user"""
    progress = db.query(GraphotherapyProgress).filter(
        GraphotherapyProgress.user_id == user_id
    ).first()
    
    if not progress:
        progress = GraphotherapyProgress(
            user_id=user_id,
            current_level=1,
            current_day=1,
            streak_count=0,
            total_streak=0
        )
        db.add(progress)
        db.commit()
        db.refresh(progress)
    
    return progress


def get_progress_percentage(db: Session, user_id: int, level_id: int) -> float:
    """Calculate percentage completion for a level"""
    level_config = GRAPHOTHERAPY_LEVELS.get(level_id)
    if not level_config:
        return 0.0
    
    completions = db.query(GraphotherapyDayCompletion).filter(
        GraphotherapyDayCompletion.user_id == user_id,
        GraphotherapyDayCompletion.level == level_id
    ).count()
    
    return min(100.0, round((completions / level_config["days"]) * 100.0, 1))


def calculate_streak(progress: GraphotherapyProgress) -> int:
    """
    Calculate current streak based on last active date.
    Rules:
    - +1 streak if completed daily task (handled in submit_drill)
    - Reset to 0 if > 48h inactive
    """
    if not progress.last_active_date:
        return 0
    
    now = datetime.utcnow()
    last_active = progress.last_active_date
    
    # If more than 48 hours have passed since last activity, reset streak
    if (now - last_active).total_seconds() > (48 * 3600):
        return 0
    
    return progress.streak_count


def is_day_unlocked_by_completion(completion, current_date: date = None) -> bool:
    """
    Check if a completion unlocks the next day.
    The next day is only unlocked if the completion was on a PREVIOUS calendar date.
    This ensures users must wait until midnight (12 AM) for the next day to unlock.
    """
    if completion is None:
        return False
    
    if current_date is None:
        current_date = date.today()
    
    # Get the completion date
    completion_date = completion.completed_at.date()
    
    # Next day is unlocked only if completion was before today (i.e., on a previous day)
    return completion_date < current_date


def check_level_access(db: Session, user: User, level_id: int) -> bool:
    """
    Check if user has access to a specific graphotherapy level.
    Rules:
    1. Legacy users (before Jan 15, 2026) get access to all levels.
    2. Superusers get access to all levels.
    3. Users who have paid for the specific level get access.
    4. Levels with price 0 are free for everyone.
    """
    # 1. Superuser override
    if user.is_superuser:
        return True

    # 2. Legacy User Clause
    cutoff_date = datetime(2026, 1, 15)
    if user.created_at and user.created_at.replace(tzinfo=None) < cutoff_date:
        return True

    # 3. Free Level check
    level_config = GRAPHOTHERAPY_LEVELS.get(level_id, {})
    if level_config.get("price", 0) == 0:
        return True

    # 4. Purchase Check
    from app.models.graphotherapy import GraphotherapyLevelPurchase
    purchase = db.query(GraphotherapyLevelPurchase).filter(
        GraphotherapyLevelPurchase.user_id == user.id,
        GraphotherapyLevelPurchase.level == level_id,
        GraphotherapyLevelPurchase.payment_status == "paid"
    ).first()
    
    if purchase:
        return True
    
    return False


@router.get("/overview", response_model=OverviewResponse)
def get_graphotherapy_overview(
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_user)
):
    """Get overview of graphotherapy progress including all levels"""
    progress = get_or_create_progress(db, current_user.id)
    
    # Get all completions
    completions = db.query(GraphotherapyDayCompletion).filter(
        GraphotherapyDayCompletion.user_id == current_user.id
    ).all()
    
    # Build completion map
    completion_map = {}
    for c in completions:
        if c.level not in completion_map:
            completion_map[c.level] = set()
        completion_map[c.level].add(c.day)
    
    # Build level info
    levels = []
    total_completed = 0
    total_remaining = 0
    
    for level_num in range(1, 5):
        level_config = GRAPHOTHERAPY_LEVELS[level_num]
        completed_days = len(completion_map.get(level_num, set()))
        total_days = level_config["days"]
        
        # Unlocked if:
        # - Previous level is completed
        # AND
        # - User has paid access (or legacy/free)
        prev_level_completed = level_num == 1 or (
            (level_num - 1) in completion_map and 
            len(completion_map[level_num - 1]) >= GRAPHOTHERAPY_LEVELS[level_num - 1]["days"]
        )
        
        has_access = check_level_access(db, current_user, level_num)
        
        is_unlocked = prev_level_completed and has_access
        is_current = level_num == progress.current_level
        is_completed = completed_days >= total_days
        
        levels.append(LevelInfo(
            level=level_num,
            name=level_config["name"],
            description=level_config.get("description", ""),
            total_days=total_days,
            completed_days=completed_days,
            is_unlocked=is_unlocked,
            is_current=is_current,
            is_completed=is_completed,
            price=level_config.get("price", 0)
        ))
        
        total_completed += completed_days
        total_remaining += total_days - completed_days
    
    # Calculate user state
    user_state = "NEW"
    if progress.streak_count > 3:
        user_state = "ENGAGED"
    
    now = datetime.utcnow()
    if progress.last_active_date and (now - progress.last_active_date).total_seconds() > (36 * 3600):
        user_state = "DROPPING"
        
    # Social proof (Mock logic for now)
    percentile = 90 - (progress.streak_count * 2)
    if percentile < 1: percentile = 1
    social_proof = f"You are ahead of {100 - percentile}% users"
    if progress.streak_count > 5:
        social_proof = f"You are in the top 5% of most consistent learners!"

    # Weekly report ready check (Task 5)
    week_number = (total_completed // 7) or 1
    weekly_report = db.query(WeeklyProgressReport).filter(
        WeeklyProgressReport.user_id == current_user.id,
        WeeklyProgressReport.week_number == week_number
    ).first()

    return OverviewResponse(
        current_level=progress.current_level,
        current_day=progress.current_day,
        streak_count=calculate_streak(progress),
        last_active_date=progress.last_active_date,
        total_streak=progress.total_streak, # Compatibility
        last_practice_date=progress.last_practice_date,
        levels=levels,
        total_days_completed=total_completed,
        total_days_remaining=total_remaining,
        user_state=user_state,
        social_proof=social_proof,
        coins_earned_today=10 if (progress.last_active_date and progress.last_active_date.date() == now.date()) else 0,
        weekly_bonus_status=f"{total_completed % 7}/7 days this week",
        weekly_report_ready=weekly_report is not None
    )


@router.get("/level/{level_id}", response_model=LevelDetailResponse)
def get_level_detail(
    level_id: int,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_user)
):
    """Get detailed view of a specific level with all days"""
    if level_id not in GRAPHOTHERAPY_LEVELS:
        raise HTTPException(status_code=404, detail="Level not found")
    
    # 1. Check Level Access (Payment/Legacy)
    if not check_level_access(db, current_user, level_id):
        raise HTTPException(
            status_code=403, 
            detail=f"Access Denied. Please purchase {GRAPHOTHERAPY_LEVELS[level_id]['name']} to continue."
        )

    progress = get_or_create_progress(db, current_user.id)
    level_config = GRAPHOTHERAPY_LEVELS[level_id]
    
    # 2. Check Prerequisites (Sequential Completion)
    if level_id > 1:
        prev_level_config = GRAPHOTHERAPY_LEVELS[level_id - 1]
        prev_completions = db.query(GraphotherapyDayCompletion).filter(
            GraphotherapyDayCompletion.user_id == current_user.id,
            GraphotherapyDayCompletion.level == level_id - 1
        ).count()
        
        if prev_completions < prev_level_config["days"]:
            raise HTTPException(status_code=403, detail="Complete previous level first")
    
    # Get completions for this level
    completions = db.query(GraphotherapyDayCompletion).filter(
        GraphotherapyDayCompletion.user_id == current_user.id,
        GraphotherapyDayCompletion.level == level_id
    ).all()
    
    completion_map = {c.day: c for c in completions}
    
    # Build days list
    days = []
    today = date.today()
    for day_num in range(1, level_config["days"] + 1):
        completion = completion_map.get(day_num)
        prev_completion = completion_map.get(day_num - 1) if day_num > 1 else None
        
        # Day is unlocked if:
        # - It's day 1, or
        # - Previous day is completed AND was completed on a PREVIOUS calendar date (not today)
        if day_num == 1:
            is_unlocked = True
        elif prev_completion:
            # Check if previous day was completed before today (unlocks after midnight)
            is_unlocked = is_day_unlocked_by_completion(prev_completion, today)
        else:
            is_unlocked = False
        
        # Calculate unlock date for display
        unlock_date = None
        if not is_unlocked and prev_completion:
            # Will unlock tomorrow (the day after completion)
            unlock_date = (prev_completion.completed_at.date() + timedelta(days=1)).isoformat()
        
        # Get focus area from content
        day_focus = None
        if level_id == 1:
            day_focus = LEVEL_1_CONTENT.get(day_num, {}).get("focus_area")

        days.append({
            "day_number": day_num,
            "is_unlocked": is_unlocked,
            "is_completed": completion is not None,
            "completed_at": completion.completed_at.isoformat() if completion else None,
            "upload_url": completion.image_url if completion else None,
            "unlock_date": unlock_date,
            "focus_area": day_focus
        })
    
    return LevelDetailResponse(
        level=level_id,
        name=level_config["name"],
        description=level_config["description"],
        total_days=level_config["days"],
        days=days
    )


@router.get("/level/{level_id}/day/{day_number}", response_model=DayDetailResponse)
def get_day_detail(
    level_id: int,
    day_number: int,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_user)
):
    """Get details for a specific day"""
    if level_id not in GRAPHOTHERAPY_LEVELS:
        raise HTTPException(status_code=404, detail="Level not found")
    
    level_config = GRAPHOTHERAPY_LEVELS[level_id]
    if day_number < 1 or day_number > level_config["days"]:
        raise HTTPException(status_code=404, detail="Day not found")
    
    progress = get_or_create_progress(db, current_user.id)
    today = date.today()
    
    # 1. Check Level Access (Payment/Legacy)
    if not check_level_access(db, current_user, level_id):
        raise HTTPException(
            status_code=403, 
            detail=f"Access Denied. Please purchase {GRAPHOTHERAPY_LEVELS[level_id]['name']} to continue."
        )
    
    # Check if day is unlocked
    # Day 1 is always unlocked
    # Other days are unlocked only if previous day was completed on a PREVIOUS calendar date
    is_unlocked = day_number == 1
    prev_completion = None
    if day_number > 1:
        prev_completion = db.query(GraphotherapyDayCompletion).filter(
            GraphotherapyDayCompletion.user_id == current_user.id,
            GraphotherapyDayCompletion.level == level_id,
            GraphotherapyDayCompletion.day == day_number - 1
        ).first()
        # Use time-based unlock check
        is_unlocked = is_day_unlocked_by_completion(prev_completion, today)
    
    # Also check if level is unlocked
    if level_id > 1:
        prev_level_config = GRAPHOTHERAPY_LEVELS[level_id - 1]
        prev_level_completions = db.query(GraphotherapyDayCompletion).filter(
            GraphotherapyDayCompletion.user_id == current_user.id,
            GraphotherapyDayCompletion.level == level_id - 1
        ).count()
        if prev_level_completions < prev_level_config["days"]:
            is_unlocked = False
    
    # Get completion info
    completion = db.query(GraphotherapyDayCompletion).filter(
        GraphotherapyDayCompletion.user_id == current_user.id,
        GraphotherapyDayCompletion.level == level_id,
        GraphotherapyDayCompletion.day == day_number
    ).first()
    
    # Can complete today if unlocked and not already completed
    can_complete = is_unlocked and completion is None
    
    # Get content for the day using the new mapping
    from app.core.graphotherapy_content import LEVEL_CONTENT_MAP
    
    level_content = LEVEL_CONTENT_MAP.get(level_id, {})
    day_content = level_content.get(day_number, {})
    
    return DayDetailResponse(
        level=level_id,
        day_number=day_number,
        is_unlocked=is_unlocked,
        is_completed=completion is not None,
        completed_at=completion.completed_at if completion else None,
        upload_url=completion.image_url if completion else None,
        can_complete_today=can_complete,
        
        # Content population
        focus_area=day_content.get("focus_area"),
        exercise=day_content.get("exercise"),
        instructions=day_content.get("instructions"),
        why_it_works=day_content.get("why_it_works"),
        expected_result=day_content.get("expected_result")
    )


@router.post("/level/{level_id}/day/{day_number}/complete", response_model=DayCompleteResponse)
async def complete_day(
    level_id: int,
    day_number: int,
    file: UploadFile = File(...),
    started_at: str = Form(None),
    duration_seconds: int = Form(None),
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_user)
):
    """Complete a day by uploading practice image"""
    if level_id not in GRAPHOTHERAPY_LEVELS:
        raise HTTPException(status_code=404, detail="Level not found")
    
    level_config = GRAPHOTHERAPY_LEVELS[level_id]
    if day_number < 1 or day_number > level_config["days"]:
        raise HTTPException(status_code=404, detail="Day not found")
    
    # Validate file type
    if not file.content_type or not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Only image files are allowed")
    
    progress = get_or_create_progress(db, current_user.id)
    
    # 1. Check Level Access (Payment/Legacy)
    if not check_level_access(db, current_user, level_id):
        raise HTTPException(
            status_code=403, 
            detail=f"Access Denied. Please purchase {GRAPHOTHERAPY_LEVELS[level_id]['name']} to continue."
        )
    
    # Check if already completed
    existing = db.query(GraphotherapyDayCompletion).filter(
        GraphotherapyDayCompletion.user_id == current_user.id,
        GraphotherapyDayCompletion.level == level_id,
        GraphotherapyDayCompletion.day == day_number
    ).first()
    
    if existing:
        raise HTTPException(status_code=400, detail="Day already completed")
    
    # Check if day is unlocked
    if day_number > 1:
        prev_completion = db.query(GraphotherapyDayCompletion).filter(
            GraphotherapyDayCompletion.user_id == current_user.id,
            GraphotherapyDayCompletion.level == level_id,
            GraphotherapyDayCompletion.day == day_number - 1
        ).first()
        if not prev_completion:
            raise HTTPException(status_code=403, detail="Complete previous day first")
    
    # Check if level is unlocked
    if level_id > 1:
        prev_level_config = GRAPHOTHERAPY_LEVELS[level_id - 1]
        prev_level_completions = db.query(GraphotherapyDayCompletion).filter(
            GraphotherapyDayCompletion.user_id == current_user.id,
            GraphotherapyDayCompletion.level == level_id - 1
        ).count()
        if prev_level_completions < prev_level_config["days"]:
            raise HTTPException(status_code=403, detail="Complete previous level first")
    
    # Save uploaded file
    file_ext = os.path.splitext(file.filename)[1] if file.filename else ".jpg"
    unique_filename = f"{current_user.id}_{level_id}_{day_number}_{uuid.uuid4().hex}{file_ext}"
    file_path = os.path.join(UPLOAD_DIR, unique_filename)
    
    contents = await file.read()
    with open(file_path, "wb") as f:
        f.write(contents)
    
    # Create upload URL (relative path for serving)
    upload_url = f"/uploads/graphotherapy/{unique_filename}"
    
    # --- V2 Logic: Create GraphoSubmission & Verify ---
    book = db.query(GraphoBook).filter(GraphoBook.level == level_id).first()
    
    started_at_dt = None
    if started_at:
        try:
            started_at_dt = datetime.fromisoformat(started_at.replace('Z', '+00:00'))
        except (ValueError, AttributeError):
            pass

    submission = GraphoSubmission(
        user_id=current_user.id,
        book_id=book.id if book else None,
        day=day_number,
        image_url=upload_url,
        started_at=started_at_dt,
        duration_seconds=duration_seconds,
        status="pending"
    )
    db.add(submission)
    # --------------------------------------------------

    # Create completion record
    completion = GraphotherapyDayCompletion(
        user_id=current_user.id,
        level=level_id,
        day=day_number,
        image_url=upload_url
    )
    db.add(completion)
    db.commit()
    
    return DayCompleteResponse(
        success=True,
        message="Page uploaded successfully!",
        upload_url=upload_url,
        new_streak=progress.total_streak,
        progress_percentage=get_progress_percentage(db, current_user.id, level_id)
    )


@router.post("/drill/submit", response_model=DayCompleteResponse)
async def submit_drill(
    request: DrillSubmitRequest,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_user)
):
    """
    Finalize a daily drill.
    Increments the current day, updates the streak, and checks for level completion.
    """
    level_id = request.level_id
    day_number = request.day_number
    
    if level_id not in GRAPHOTHERAPY_LEVELS:
        raise HTTPException(status_code=404, detail="Level not found")
    
    level_config = GRAPHOTHERAPY_LEVELS[level_id]
    progress = get_or_create_progress(db, current_user.id)
    
    # Verify completion exists
    completion = db.query(GraphotherapyDayCompletion).filter(
        GraphotherapyDayCompletion.user_id == current_user.id,
        GraphotherapyDayCompletion.level == level_id,
        GraphotherapyDayCompletion.day == day_number
    ).first()
    
    if not completion:
        raise HTTPException(status_code=400, detail="Please upload your practice page first.")
    
    # Update streak (Retention Engine Logic)
    now = datetime.utcnow()
    if progress.last_active_date:
        diff = (now - progress.last_active_date).total_seconds()
        if diff <= (48 * 3600):
            # If completed on a new day, increment streak
            if progress.last_active_date.date() < now.date():
                progress.streak_count += 1
                progress.total_streak += 1 # Compatibility
        else:
            # Reset streak if > 48h
            progress.streak_count = 1
            progress.total_streak = 1
    else:
        progress.streak_count = 1
        progress.total_streak = 1
    
    progress.last_active_date = now
    progress.last_practice_date = now # Compatibility
    
    # Progress Calculation
    level_completions = db.query(GraphotherapyDayCompletion).filter(
        GraphotherapyDayCompletion.user_id == current_user.id,
        GraphotherapyDayCompletion.level == level_id
    ).count()
    
    level_completed = level_completions >= level_config["days"]
    next_level_unlocked = False
    
    if level_completed and level_id < 4:
        cutoff_date = datetime(2026, 1, 15)
        is_legacy = current_user.created_at and current_user.created_at < cutoff_date
        next_level_price = GRAPHOTHERAPY_LEVELS[level_id + 1]["price"]
        
        if is_legacy or next_level_price == 0:
            progress.current_level = level_id + 1
            progress.current_day = 1
            next_level_unlocked = True
    elif not level_completed:
        # Increment day if it matches current progress
        if progress.current_level == level_id and progress.current_day <= day_number:
            progress.current_day = day_number + 1
            
    db.commit()
    
    # --- TASK 1, 2, 7: AI Snapshot Queue & Protection ---
    # Check if snapshot already exists for this day to avoid duplicate queueing
    existing_snapshot = db.query(HandwritingSnapshot).filter(
        HandwritingSnapshot.user_id == current_user.id,
        HandwritingSnapshot.day_number == day_number
    ).first()
    
    if not existing_snapshot:
        snapshot = HandwritingSnapshot(
            user_id=current_user.id,
            day_number=day_number,
            image_url=completion.image_url,
            status="queued"
        )
        db.add(snapshot)
        db.commit()
        db.refresh(snapshot)
        
        # Trigger async analysis (Task 1)
        analyze_snapshot_task.delay(snapshot.id)
        
        # Redis Real-time Signal (Task 2)
        redis_client.set(f"snapshot:{snapshot.id}:status", "queued", ex=3600)
    # ----------------------------------------------------
    
    # Award coins (Task 5, 6)
    coins_earned = 10
    current_user.coins += coins_earned
    redis_client.set(f"user:{current_user.id}:coins_updated", "true", ex=10)
    db.commit()

    return DayCompleteResponse(
        success=True,
        message="Drill completed! Neuro-pathways updated.",
        new_streak=progress.total_streak,
        level_completed=level_completed,
        next_level_unlocked=next_level_unlocked,
        progress_percentage=get_progress_percentage(db, current_user.id, level_id)
    )

@router.get("/snapshots/status", response_model=SnapshotStatusResponse)
def get_snapshot_status(
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_user)
):
    """
    Get the status of the latest handwriting analysis.
    Task 1, 3, 4: Returns status, progress timeline, and fallback message.
    """
    latest = db.query(HandwritingSnapshot).filter(
        HandwritingSnapshot.user_id == current_user.id
    ).order_by(HandwritingSnapshot.submitted_at.desc()).first()
    
    if not latest:
        raise HTTPException(status_code=404, detail="No snapshots found")
    
    # Logic for Task 4: Safe Fallback Message
    fallback_msg = None
    if latest.status in ["queued", "processing"]:
        now = datetime.utcnow()
        elapsed = (now - latest.submitted_at).total_seconds()
        if elapsed > 10:
            fallback_msg = "Your analysis is being processed. Results will appear shortly."
            
    # Human readable progress
    progress_map = {
        "queued": "In queue for analysis",
        "processing": "AI is analyzing your handwriting...",
        "complete": "Analysis complete",
        "failed": "Analysis failed, will retry"
    }

    return SnapshotStatusResponse(
        snapshot_id=latest.id,
        day_number=latest.day_number,
        status=latest.status,
        analysis_progress=progress_map.get(latest.status, "Unknown"),
        submitted_at=latest.submitted_at,
        analysis_started_at=latest.analysis_started_at,
        analysis_completed_at=latest.analysis_completed_at,
        fallback_message=fallback_msg
    )

@router.get("/weekly-report/{week_number}", response_model=WeeklyProgressResponse)
async def get_weekly_report(
    week_number: int,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_user)
):
    """
    Get or generate a weekly progress report.
    Task 3, 5: Narrative summary, improvement direction, etc.
    """
    report = db.query(WeeklyProgressReport).filter(
        WeeklyProgressReport.user_id == current_user.id,
        WeeklyProgressReport.week_number == week_number
    ).first()
    
    if not report:
        # Try to generate it if all 7 days are complete
        from app.services.progress_engine import progress_engine
        report = await progress_engine.generate_weekly_report(db, current_user.id, week_number)
        
    if not report:
        return WeeklyProgressResponse(
            week_number=week_number,
            narrative_summary="Your weekly report is being prepared. Keep up the consistency!",
            weekly_report_ready=False,
            regression_detected=False,
            created_at=datetime.utcnow()
        )
        
    return report


    return {
        "current_streak": calculate_streak(progress),
        "total_streak": progress.total_streak,
        "last_practice_date": progress.last_practice_date
    }


# --- V2 Admin Endpoints ---

@router.post("/admin/books/upload", response_model=GraphoBookResponse)
async def upload_reference_book(
    title: str = Form(...),
    level: int = Form(...),
    total_days: int = Form(30),
    file: UploadFile = File(...),
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_superuser)
):
    """
    Admin: Upload a PDF reference book for Graphotherapy.
    This stores the PDF and creates a GraphoBook record.
    """
    if not file.content_type == "application/pdf":
        raise HTTPException(status_code=400, detail="Only PDF files are allowed")

    # Directory for reference books
    BOOKS_DIR = "uploads/graphotherapy/books"
    os.makedirs(BOOKS_DIR, exist_ok=True)

    # Save File
    file_ext = ".pdf"
    unique_filename = f"level_{level}_{uuid.uuid4().hex}{file_ext}"
    file_path = os.path.join(BOOKS_DIR, unique_filename)
    
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
        
    # Relative URL
    pdf_url = f"/uploads/graphotherapy/books/{unique_filename}"
    
    # Create DB Record
    book = GraphoBook(
        title=title,
        level=level,
        total_days=total_days,
        pdf_url=pdf_url,
        is_published=False 
    )
    db.add(book)
    db.commit()
    db.refresh(book)
    
    return book

@router.get("/admin/books", response_model=List[GraphoBookResponse])
def get_all_books(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_superuser)
):
    """Admin: List all reference books"""
    books = db.query(GraphoBook).offset(skip).limit(limit).all()
    return books

@router.get("/admin/submissions", response_model=List[GraphoSubmissionResponse])
def get_all_submissions(
    skip: int = 0,
    limit: int = 100,
    status: str = None,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_superuser)
):
    """Admin: List student submissions"""
    query = db.query(GraphoSubmission)
    if status:
        query = query.filter(GraphoSubmission.status == status)
    
    submissions = query.order_by(GraphoSubmission.completed_at.desc()).offset(skip).limit(limit).all()
    return submissions


@router.post("/admin/submissions/{submission_id}/analyze", response_model=GraphoSubmissionResponse)
def analyze_submission(
    submission_id: int,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_superuser)
):
    """
    Admin: Trigger AI Analysis for a submission.
    Generates a personality report based on the handwriting.
    """
    submission = db.query(GraphoSubmission).filter(GraphoSubmission.id == submission_id).first()
    if not submission:
        raise HTTPException(status_code=404, detail="Submission not found")
    
    # --- Real AI Analysis Logic ---
    from app.services.gemini_service import gemini_service
    import os
    import json
    
    # 1. Resolve File Path
    # image_url is like "/uploads/graphotherapy/filename.jpg" -> "uploads/graphotherapy/filename.jpg"
    relative_path = submission.image_url.lstrip("/")
    # Ensure it works cross-platform or with how app is run (cwd is usually root)
    image_path = os.path.abspath(relative_path)
    
    if not os.path.exists(image_path):
        # Fallback to verify if it exists in UPLOAD_DIR directly
        filename = os.path.basename(submission.image_url)
        params_path = os.path.join("uploads", "graphotherapy", filename)
        if os.path.exists(params_path):
            image_path = os.path.abspath(params_path)
        else:
             raise HTTPException(status_code=404, detail=f"Submission image file not found at {image_path}")

    # 2. Define Prompt
    ANALYSIS_PROMPT = """
    You are an expert Graphotherapist and Handwriting Analyst. 
    Analyze the requested handwriting sample image from a student's daily practice. 
    Provide a structured psychological analysis focusing on progress and traits:

    1. Emotional Stability (Baseline, Slant Consistency)
    2. Willpower & Determination (t-bars crossing strength)
    3. Self-Image & Ego (Capital letters, signature size)
    4. Focus & Concentration (Dotting of i's)
    5. Success/Money Blocks (Lower loops of g, y, j)

    Return the response in strict JSON format:
    {
        "overall_score": 0-100 (integer),
        "traits": [
            {"trait": "Trait Name", "score": 0-100, "observation": "detailed observation"}
        ],
        "metrics": [
             {"name": "Slant", "baseline_value": "Variable", "current_value": "Right/Vertical", "status": "Improved/Same", "change_percentage": 10},
             {"name": "Pressure", "baseline_value": "Heavy/Light", "current_value": "Balanced", "status": "Improved", "change_percentage": 5}
        ],
        "areas_of_concern": [
            {"stroke": "Claw/Retrace/etc", "meaning": "meaning", "fix": "suggested fix"}
        ],
        "summary": "2-3 sentences summary of progress and current state.",
        "transformation_score": 0-100 (integer representing overall improvement vs baseline if evident, else generic quality score)
    }
    """

    try:
        # 3. Call Gemini
        response_text = gemini_service.analyze_image(
            image_path=image_path,
            prompt=ANALYSIS_PROMPT,
            temperature=0.2
        )
        
        # 4. Parse JSON
        cleaned_response = response_text.replace("```json", "").replace("```", "").strip()
        analysis_result = json.loads(cleaned_response)
        
        # Ensure timestamp
        analysis_result["generated_at"] = datetime.utcnow().isoformat()
        
    except Exception as e:
        print(f"AI Analysis Failed: {e}")
        # Fallback to avoid crashing the admin flow completely, but indicate error
        analysis_result = {
            "overall_score": 0,
            "traits": [],
            "summary": f"AI Analysis failed: {str(e)}",
            "error": str(e),
            "generated_at": datetime.utcnow().isoformat()
        }
    
    # Generate PDF Report
    from app.utils.report_generator import report_generator
    # Note: user_name should ideally come from user relationship, here using logic stub
    user_name = f"Student #{submission.user_id}" 
    pdf_url = report_generator.generate_report(submission.id, user_name, analysis_result)
    
    # Update Submission
    submission.analysis_result = analysis_result
    submission.status = "analyzed"
    submission.verification_score = analysis_result["overall_score"]
    # We might want to store pdf_url in analysis_result or a new column
    analysis_result['pdf_url'] = pdf_url
    submission.analysis_result = analysis_result # Update with PDF URL
    
    db.commit()
    db.refresh(submission)
    
    return submission


# --- Phase 4: Transformation & Prediction Endpoints ---

from app.schemas.graphotherapy import (
    TransformationComparisonRequest,
    TransformationComparisonResponse,
    ComparisonMetric,
    NextStepRecommendation,
    GrowthDomain
)

@router.post("/transform/compare", response_model=TransformationComparisonResponse)
def compare_transformation(
    request: TransformationComparisonRequest,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_user)
):
    """
    Compare Day 1 (Baseline) vs Day 21 (Current) handwriting.
    Generates AI-driven transformation report.
    """
    user_id = request.user_id if request.user_id and current_user.is_superuser else current_user.id
    progress = get_or_create_progress(db, user_id)

    # Helper to clean logic
    def get_image_for_day(day_num: int):
        # Check Day Completion
        completion = db.query(GraphotherapyDayCompletion).filter(
            GraphotherapyDayCompletion.user_id == user_id,
            GraphotherapyDayCompletion.day == day_num
        ).first()
        if completion and completion.image_url:
            return completion.image_url
        
        # Check Submission (legacy/admin flow)
        submission = db.query(GraphoSubmission).filter(
            GraphoSubmission.user_id == user_id,
            GraphoSubmission.day == day_num
        ).first()
        if submission and submission.image_url:
            return submission.image_url
            
        return None

    baseline_url = get_image_for_day(request.baseline_day)
    current_url = get_image_for_day(request.current_day)

    # --- Real AI Comparison Logic ---
    from app.services.gemini_service import gemini_service
    import json
    
    # Define Prompt
    COMPARISON_PROMPT = """
    Act as a Master Graphologist. Compare these two handwriting samples.
    Image 1 is the 'Baseline' (Day 1). Image 2 is the 'Current' (Day 21) progress.

    Analyze the neurological transformation based on:
    1. Slant Consistency (Is it more stable?)
    2. Letter Connectedness (Fluidity of thought)
    3. Baseline Adherence (Emotional stability)
    4. Pressure (Energy levels)

    Return ONLY a valid JSON object with this structure:
    {
        "transformation_score": <integer 0-100>,
        "qualitative_feedback": "<string, a short encouraging paragraph about the specific improvements>",
        "metrics": [
            {"name": "Slant Stability", "baseline_value": "Variable", "current_value": "Stable", "status": "Improved/Stable/Needs Work", "change_percentage": 20},
            {"name": "Letter Connectedness", "baseline_value": "Disconnected", "current_value": "Fluid", "status": "Improved/Stable/Needs Work", "change_percentage": 15},
            {"name": "Baseline Adherence", "baseline_value": "Wavy", "current_value": "Straight", "status": "Improved/Stable/Needs Work", "change_percentage": 10},
            {"name": "Pressure", "baseline_value": "Heavy", "current_value": "Balanced", "status": "Improved/Stable/Needs Work", "change_percentage": 5}
        ]
    }
    """

    try:
        # Resolve paths
        def resolve_path(url):
            if not url: return None
            rel = url.lstrip("/")
            # Check standard upload dir
            if os.path.exists(rel): return os.path.abspath(rel)
            # Check if it is a full path or absolute
            if os.path.exists(url): return url
            # Fallback
            return None

        path1 = resolve_path(baseline_url)
        path2 = resolve_path(current_url)

        if not path1 or not path2:
             # Fallback if images missing (e.g. legacy data)
             analysis_result = {
                 "transformation_score": 0,
                 "qualitative_feedback": "Images for comparison could not be located.",
                 "metrics": []
             }
        else:
             response_text = gemini_service.compare_images(path1, path2, COMPARISON_PROMPT)
             clean_json = response_text.replace("```json", "").replace("```", "").strip()
             analysis_result = json.loads(clean_json)

    except Exception as e:
        print(f"Comparison Failed: {e}")
        analysis_result = {
             "transformation_score": 0,
             "qualitative_feedback": f"AI Comparison failed: {str(e)}",
             "metrics": []
        }
    
    metrics = [
        ComparisonMetric(
            name=m["name"], 
            baseline_value=str(m["baseline_value"]), 
            current_value=str(m["current_value"]),
            change_percentage=m.get("change_percentage", 0),
            status=m["status"]
        ) for m in analysis_result.get("metrics", [])
    ]

    return TransformationComparisonResponse(
        baseline_image_url=baseline_url, # Corrected to use local variable
        current_image_url=current_url,    # Corrected to use local variable
        transformation_score=analysis_result.get("transformation_score", 0),
        qualitative_feedback=analysis_result.get("qualitative_feedback", "Analysis unavailable."),
        metrics=metrics,
        generated_at=datetime.utcnow() # Re-added generated_at
    )


@router.get("/predict/next-steps", response_model=NextStepRecommendation)
def predict_next_steps(
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_user)
):
    """
    Predict next growth domain based on user progress and performance.
    """
    progress = get_or_create_progress(db, current_user.id)
    
    # Logic Rules
    recommendation = None
    alternatives = []
    context = ""

    if progress.current_level == 1 and progress.current_day >= 21:
        # Completed Foundation
        recommendation = GrowthDomain(
            id="level_2",
            title="Intermediate Level: Letter Formations",
            description="Deep dive into 't' crossings, 'i' dots and loops.",
            icon="feather",
            is_locked=False,
            unlock_criteria="Unlocked"
        )
        context = "You have established a solid foundation. Now let's refine individual traits."
    elif progress.total_streak > 15:
         recommendation = GrowthDomain(
            id="speed_drill",
            title="Speed & Flow Challenge",
            description="Maintain quality while increasing writing speed.",
            icon="timer",
            is_locked=False,
            unlock_criteria="Unlocked"
        )
         context = f"Your {progress.total_streak}-day streak shows great discipline!"
    else:
        # Default
        recommendation = GrowthDomain(
            id="consistency_mastery",
            title="Consistency Builder",
            description="Focus on slant regularity for 7 more days.",
            icon="target",
            is_locked=False,
            unlock_criteria="Unlocked"
        )
        context = "Building consistency is your key lever right now."

    # Alternatives
    alternatives.append(GrowthDomain(
        id="signature_analysis",
        title="Signature Analysis",
        description="What your signature says about your public image.",
        icon="pen-tool",
        is_locked=True,
        unlock_criteria="Requires Level 2 Completion"
    ))

    return NextStepRecommendation(
        primary_recommendation=recommendation,
        alternatives=alternatives,
        user_context=context
    )


# --- Phase 5: Community Endpoints ---

from app.schemas.graphotherapy import LeaderboardEntry, ShareResponse, PurchaseRequest, PurchaseResponse, GRAPHOTHERAPY_LEVELS
from fastapi import HTTPException
import uuid

@router.get("/community/leaderboard", response_model=List[LeaderboardEntry])
def get_leaderboard(
    limit: int = 10,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_user)
):
    """
    Get top users by streak.
    """
    # Query top streaks
    top_progress = db.query(GraphotherapyProgress).order_by(
        GraphotherapyProgress.total_streak.desc()
    ).limit(limit).all()
    
    leaderboard = []
    for i, p in enumerate(top_progress):
        user = db.query(User).filter(User.id == p.user_id).first()
        user_name = user.full_name if user else f"User {p.user_id}"
        # Privacy: Mask name if not current user (optional, for now showing full name)
        
        leaderboard.append(LeaderboardEntry(
            rank=i + 1,
            user_name=user_name,
            streak=p.total_streak,
            avatar_url=None, # Add avatar to User model later
            is_current_user=(p.user_id == current_user.id)
        ))
        
    return leaderboard

@router.post("/share/transformation", response_model=ShareResponse)
def share_transformation(
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_user)
):
    """
    Generate a public share link for the user's transformation.
    """
    # In a real app, generate a unique token and store a 'SharedReport' record.
    # For now, return a constructed URL.
    share_id = uuid.uuid4().hex[:8]
    share_url = f"https://eduecosystem.com/share/grapho/{share_id}"
    
    return ShareResponse(
        share_url=share_url,
        message="Transformation report link generated successfully!"
    )

@router.post("/purchase", response_model=PurchaseResponse)
def purchase_level(
    request: PurchaseRequest,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_user)
):
    """
    Purchase a level, bundle, or gamification item.
    Logic:
    - Streak Freeze: Flat 500 Coins.
    - Levels: 10 Coins = 1 Rs discount. Max 1000 Rs discount.
    """
    transaction_id = f"txn_{uuid.uuid4().hex[:8]}"
    
    # --- STREAK FREEZE ---
    if request.item_type == "streak_freeze":
        cost = 500
        if current_user.coins < cost:
             raise HTTPException(status_code=400, detail="Insufficient coins for Streak Freeze")
        
        current_user.coins -= cost
        # Logic to 'activate' freeze would go here (e.g. set a flag on progress)
        # For prototype, we verify coin deduction.
        db.commit()
        
        return PurchaseResponse(
            success=True,
            transaction_id=transaction_id,
            final_price=0,
            coins_deducted=cost,
            message="Streak Freeze Activated! You are protected for 24 hours.",
            new_coin_balance=current_user.coins
        )

    # --- LEVEL UNLOCK ---
    base_price = 0
    discount_msg = ""
    
    # 1. Determine Base Price
    if request.is_bundle:
        # Calculate price of all remaining paid levels (2, 3, 4)
        base_price = sum(l["price"] for k, l in GRAPHOTHERAPY_LEVELS.items() if l["price"] > 0)
        discount_msg = "Bundle Discount (Lvl 2+3+4) Applied"
    else:
        req_level = GRAPHOTHERAPY_LEVELS.get(request.level_id)
        if not req_level:
            raise HTTPException(status_code=404, detail="Level not found")
        base_price = req_level["price"]
        discount_msg = "Standard Purchase"

    final_price = base_price
    coins_deducted = 0

    # 2. Apply Bundle Discount (Flat 5000 off)
    if request.is_bundle:
        final_price -= 5000
        if final_price < 0: final_price = 0

    # 3. Apply Coin Discount
    if request.use_coins and current_user.coins > 0:
        # Logic: 10 Coins = 1 Rs
        max_discount_rupees = 1000 
        max_discount_coins = max_discount_rupees * 10
        
        potential_discount_coins = min(current_user.coins, max_discount_coins)
        discount_amount = potential_discount_coins / 10
        
        if discount_amount > final_price:
            discount_amount = final_price
            potential_discount_coins = discount_amount * 10
            
        final_price -= discount_amount
        coins_deducted = int(potential_discount_coins)
        
        current_user.coins -= coins_deducted
        discount_msg += f" + Coin Discount ({coins_deducted} coins)"

    # 4. Process "Payment" (Mock)
    
    # 5. Unlock Logic
    progress = db.query(GraphotherapyProgress).filter(GraphotherapyProgress.user_id == current_user.id).first()
    if progress:
        if request.is_bundle:
            progress.current_level = 4 # Unlock all
            progress.current_day = 1
        elif request.level_id > progress.current_level:
             # Unlock specific level
             progress.current_level = request.level_id
             progress.current_day = 1 
    
    db.commit()

    return PurchaseResponse(
        success=True,
        transaction_id=transaction_id,
        final_price=int(final_price),
        coins_deducted=coins_deducted,
        message=f"Purchase successful! ({discount_msg})",
        new_coin_balance=current_user.coins
    )
# --- Free Analysis Funnel Endpoints ---

class FreeAnalysisRequest(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    image_path: Optional[str] = None
    analysis_json: Optional[dict] = None
    recommended_level: Optional[int] = None
    utm_source: Optional[str] = None
    utm_medium: Optional[str] = None
    utm_campaign: Optional[str] = None


class FreeAnalysisResponse(BaseModel):
    id: int
    name: str
    email: str
    phone: Optional[str]
    analysis_status: str
    recommended_level: Optional[int]
    converted: bool
    created_at: datetime


@router.post("/free-analysis/submit", response_model=FreeAnalysisResponse)
def submit_free_analysis(
    request: FreeAnalysisRequest,
    db: Session = Depends(get_db)
):
    """
    Submit a free graphotherapy analysis lead.
    Called after the user uploads their handwriting image and receives AI analysis.
    """
    # Check if email already exists
    existing = db.query(GraphoLead).filter(GraphoLead.email == request.email).first()
    if existing:
        # Update existing lead
        existing.name = request.name
        if request.phone:
            existing.phone = request.phone
        if request.analysis_json:
            existing.analysis_json = request.analysis_json
            existing.analysis_status = "completed"
        if request.recommended_level:
            existing.recommended_level = request.recommended_level
        existing.updated_at = datetime.utcnow()
        db.commit()
        db.refresh(existing)
        return existing

    # Create new lead
    lead = GraphoLead(
        name=request.name,
        email=request.email,
        phone=request.phone,
        image_path=request.image_path,
        analysis_json=request.analysis_json,
        analysis_status="completed" if request.analysis_json else "pending",
        recommended_level=request.recommended_level,
        utm_source=request.utm_source,
        utm_medium=request.utm_medium,
        utm_campaign=request.utm_campaign,
    )
    db.add(lead)
    db.commit()
    db.refresh(lead)
    return lead


@router.get("/free-analysis/leads", response_model=List[FreeAnalysisResponse])
def list_free_analysis_leads(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_active_user)
):
    """
    List all free analysis leads.
    Requires authentication.
    """
    # Only admins/instructors can view leads
    if current_user.role not in ["admin", "instructor", "teacher", "coach"]:
        raise HTTPException(status_code=403, detail="Not authorized to view leads")
    
    leads = db.query(GraphoLead).order_by(GraphoLead.created_at.desc()).offset(skip).limit(limit).all()
    return leads


@router.get("/free-analysis/leads/{lead_id}", response_model=FreeAnalysisResponse)
def get_free_analysis_lead(
    lead_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_active_user)
):
    """
    Get a specific lead by ID.
    Requires authentication.
    """
    if current_user.role not in ["admin", "instructor", "teacher", "coach"]:
        raise HTTPException(status_code=403, detail="Not authorized to view leads")
    
    lead = db.query(GraphoLead).filter(GraphoLead.id == lead_id).first()
    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")
    return lead


@router.patch("/free-analysis/leads/{lead_id}/convert")
def mark_lead_converted(
    lead_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_active_user)
):
    """
    Mark a lead as converted (purchased a level).
    """
    if current_user.role not in ["admin", "instructor", "teacher", "coach"]:
        raise HTTPException(status_code=403, detail="Not authorized")
    
    lead = db.query(GraphoLead).filter(GraphoLead.id == lead_id).first()
    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")
    
    lead.converted = True
    lead.updated_at = datetime.utcnow()
    db.commit()
    return {"success": True, "lead_id": lead_id, "converted": True}

