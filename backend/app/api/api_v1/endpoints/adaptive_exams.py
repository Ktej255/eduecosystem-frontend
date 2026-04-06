from typing import Any, List, Optional
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session

from app.api import deps
from app.models import User
from app.schemas.adaptive_exam import ExamStartRequest, ExamSession, NextQuestionResponse, AnswerSubmission, SubmissionResult, FinalReport
from app.services.adaptive_simulator_service import adaptive_simulator_service
from app.models.question_bank import BankQuestion

router = APIRouter()

@router.post("/start", response_model=ExamSession)
def start_exam(
    *,
    db: Session = Depends(deps.get_db),
    request: ExamStartRequest,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Initialize a new adaptive exam session.
    """
    session = adaptive_simulator_service.start_exam_session(
        db=db,
        student_id=current_user.id,
        subject=request.subject,
        num_questions=request.num_questions
    )
    return session

@router.get("/next-question", response_model=Optional[NextQuestionResponse])
def get_next_question(
    *,
    db: Session = Depends(deps.get_db),
    exam_id: str,
    subject: str,
    current_ability: float = 50.0,
    excluded_ids: List[int] = Query([]),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Get the next question based on current performance and difficulty matching.
    """
    question = adaptive_simulator_service.get_next_question(
        db=db,
        student_id=current_user.id,
        subject=subject,
        exam_id=exam_id,
        current_ability=current_ability,
        excluded_ids=excluded_ids
    )
    if not question:
        return None
    return question

@router.post("/submit-answer", response_model=SubmissionResult)
def submit_answer(
    *,
    db: Session = Depends(deps.get_db),
    submission: AnswerSubmission,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Submit an answer, recalibrate ability score, and update knowledge graph.
    """
    # 1. Fetch Question for validation
    question = db.query(BankQuestion).filter(BankQuestion.id == submission.question_id).first()
    if not question:
        raise HTTPException(status_code=404, detail="Question not found")

    # 2. Check correctness
    is_correct = submission.selected_option.upper() == question.correct_answer.upper()

    # 3. Process result
    result = adaptive_simulator_service.process_submission(
        db=db,
        student_id=current_user.id,
        question_id=submission.question_id,
        is_correct=is_correct,
        time_taken=submission.time_taken_seconds,
        current_ability=submission.current_ability,
        exam_id=submission.exam_id
    )

    return {
        **result,
        "correct_option": question.correct_answer,
        "explanation": question.explanation
    }

@router.get("/report", response_model=FinalReport)
def get_exam_report(
    *,
    db: Session = Depends(deps.get_db),
    exam_id: str,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Get the final diagnostic report for an exam session.
    """
    report = adaptive_simulator_service.generate_final_report(db, exam_id)
    return report
