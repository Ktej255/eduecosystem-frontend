from typing import Any, List, Dict, Optional
from fastapi import APIRouter, Depends, UploadFile, File, HTTPException
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session
from pydantic import BaseModel
from app.api import deps
from app.crud import submission as crud_submission
from app.schemas.submission import Submission, SubmissionCreate
from app.schemas.handwriting import HandwritingAnalysisResponse, HandwritingFeatures # Updated imports
from app.services.ocr import analyze_handwriting
from app.graphotherapy_engine.orchestrator import orchestrator
from app.schemas.handwriting import HandwritingAnalysisResponse, HandwritingFeatures, GraphoAnalyzeResponse
from app.crud.crud_student_report import student_report as crud_student_report
from app.schemas.student_report import StudentReportCreate
from app.models.user import User
import shutil
import os
import json
import time

router = APIRouter()

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


# --- Response Schemas are now in app/schemas/handwriting.py ---


@router.get("/", response_model=List[Submission])
def read_submissions(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Retrieve handwriting submissions.
    """
    submissions = crud_submission.get_multi_by_owner(
        db=db, user_id=current_user.id, skip=skip, limit=limit
    )
    return jsonable_encoder(submissions)


@router.post("/upload", response_model=HandwritingAnalysisResponse)
async def upload_handwriting(
    *,
    db: Session = Depends(deps.get_db),
    file: UploadFile = File(...),
    current_user: User = Depends(deps.get_current_active_user),
) -> HandwritingAnalysisResponse:
    """
    Upload handwriting sample and get AI analysis.
    """
    # Validate file type
    if file.content_type not in ["image/jpeg", "image/png"]:
        raise HTTPException(
            status_code=400, detail="Invalid file type. Only JPEG and PNG are allowed."
        )

    # Validate file size (10MB limit)
    MAX_FILE_SIZE = 10 * 1024 * 1024
    file.file.seek(0, 2)
    file_size = file.file.tell()
    file.file.seek(0)

    if file_size > MAX_FILE_SIZE:
        raise HTTPException(
            status_code=400, detail="File too large. Maximum size is 10MB."
        )

    # Save file locally
    file_location = f"{UPLOAD_DIR}/{current_user.id}_{file.filename}"
    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Run OCR / Analysis
    ocr_result = analyze_handwriting(file_location, user=current_user)

    # Check for AI Service Errors in features dictionary
    features_dict = ocr_result.get("features", {})
    if features_dict.get("error"):
        error_msg = features_dict["error"]
        
        # Specific handling for API Key issues
        if "API_ERROR" in error_msg:
             if "leaked" in error_msg or "not valid" in error_msg:
                 raise HTTPException(status_code=400, detail="AI Service configuration error. Please contact support.")
             raise HTTPException(status_code=400, detail=f"AI Service Error: {error_msg}")
             
        # General analysis error
        raise HTTPException(status_code=400, detail=error_msg)

    # Create Submission Record
    submission_in = SubmissionCreate(
        image_url=file_location,
        quiz_data="{}",  # No quiz needed for now
        report_content=json.dumps(ocr_result),
        report_level=1,
    )
    submission = crud_submission.create_with_owner(
        db=db, obj_in=submission_in, owner_id=current_user.id
    )

    # Award coins for submission
    current_user.coins += 50
    db.commit()

    return HandwritingAnalysisResponse(
        submission_id=submission.id,
        extracted_text=ocr_result.get("extracted_text", ""),
        features=HandwritingFeatures(**features_dict),
        analysis=ocr_result.get("analysis", ""),
        coins_earned=50,
        message="Handwriting analyzed successfully!",
    )


@router.post("/analyze", response_model=GraphoAnalyzeResponse)
async def analyze_handwriting_engine(
    *,
    db: Session = Depends(deps.get_db),
    file: UploadFile = File(...),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    CORE Intelligence Engine: Upload handwriting and get a deterministic, high-fidelity report.
    """
    # 1. Validation
    if file.content_type not in ["image/jpeg", "image/png"]:
        raise HTTPException(
            status_code=400, detail="Invalid file type. Only JPEG and PNG are allowed."
        )

    # 2. Save file locally for processing
    file_location = f"{UPLOAD_DIR}/core_{current_user.id}_{int(time.time())}_{file.filename}"
    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # 3. Run Orchestrator Pipeline
    session_id = f"sess_{current_user.id}_{int(time.time())}"
    result = orchestrator.run_pipeline({
        "user_id": current_user.id,
        "image": file_location,
        "session_id": session_id
    })

    if result["status"] == "error":
        # Clean up file on failure
        if os.path.exists(file_location):
            os.remove(file_location)
        raise HTTPException(status_code=400, detail=result["message"])

    # 4. Create Submission Record for legacy tracking
    submission_in = SubmissionCreate(
        image_url=file_location,
        quiz_data="{}",
        report_content=json.dumps(result["report"]),
        report_level=2, # Level 2 = Intelligence Engine
    )
    submission = crud_submission.create_with_owner(
        db=db, obj_in=submission_in, owner_id=current_user.id
    )

    # 5. Persist to Detailed StudentReport (Premium Storage)
    report_in = StudentReportCreate(
        user_id=current_user.id,
        report_type="graphotherapy",
        report_key=result["report"]["signature"],
        features_json=result["report"]["features"],
        traits_json=result["report"]["trait_scores"],
        conflicts_json=result["report"]["conflicts"],
        personality_json=result["report"]["personality"],
        report_text=result["report"]["narrative"],
        pdf_url=result["pdf_url"],
        data={"uniqueness_hash": result["meta"]["hash"], "session_id": session_id}
    )
    crud_student_report.create(db, obj_in=report_in)

    # 6. Award Premium Coins
    current_user.coins += 100
    db.commit()

    return {
        "status": "success",
        "submission_id": submission.id,
        "report": result["report"],
        "pdf_url": result["pdf_url"],
        "message": "Deep intelligence analysis complete.",
        "meta": result["meta"]
    }
