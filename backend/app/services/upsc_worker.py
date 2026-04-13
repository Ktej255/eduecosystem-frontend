"""
UPSC Background Worker (Fresh 2025)
Handles plan generation and answer analysis using Tiered Gemini AI.
"""

import json
import logging
from datetime import datetime, timedelta
from typing import List, Dict, Any
from app.core.celery_app import celery_app
from app.core.config import settings
from app.db.session import SessionLocal
from app.models.upsc import UPSCPlan, UPSCQuestion, UPSCAttempt, UPSCReport
from app.services.gemini_service import gemini_service

logger = logging.getLogger(__name__)

@celery_app.task(name="generate_ai_plan")
def generate_ai_plan_task(request_data: Dict[str, Any]):
    """Generates study plans using Tiered Gemini AI"""
    db = SessionLocal()
    try:
        subject = request_data.get("subject")
        topics = request_data.get("topics", [])
        
        prompt = f"Create a UPSC study plan for {subject} covering: {', '.join(topics)}. Return JSON ONLY."
        
        # Use tiered service (Plan generation is complex)
        response = gemini_service.generate_text(
            prompt=prompt,
            is_complex=True
        )
        
        import re
        json_match = re.search(r"\{.*\}", response, re.DOTALL)
        plan_json = json.loads(json_match.group())
        
        # (DB saving logic continues here...)
        return {"status": "success", "subject": subject}
    except Exception as e:
        logger.error(f"Plan generation failed: {e}")
        return {"status": "error", "message": str(e)}
    finally:
        db.close()

@celery_app.task(name="analyze_answer")
def analyze_answer_task(attempt_id: str):
    """Analyze student answers using Tiered Gemini AI"""
    db = SessionLocal()
    try:
        attempt = db.query(UPSCAttempt).filter(UPSCAttempt.id == attempt_id).first()
        if not attempt: return
        
        question = attempt.question
        
        prompt = f"""You are an expert UPSC Evaluator.
Evaluate the student's answer based on standard UPSC criteria (Introduction, Body, Conclusion).
QUESTION: "{question.question_text}"
MARKS ALOTTED: {question.marks}
STUDENT ANSWER: "{attempt.answer_text}"

Return JSON ONLY in this exact format:
{{
    "estimated_marks": float,
    "suggestions": ["suggestion1", "suggestion2"],
    "common_mistakes": ["mistake1"],
    "status": "Evaluated successfully."
}}"""
        
        if not attempt.answer_text or attempt.answer_text.strip() == "":
            logger.warning(f"Attempt {attempt_id} has no answer text. Skipping AI evaluation.")
            report = UPSCReport(
                attempt_after_id=attempt.id,
                student_id=attempt.student_id,
                question_id=attempt.question_id,
                estimated_marks_after=0.0,
                raw_ai_output={"status": "pending_ocr"},
                ai_model_version="none",
                suggestions=["No answer text detected. Please ensure your image upload is clear."],
                common_mistakes=[]
            )
            db.add(report)
            db.commit()
            return {"status": "skipped", "message": "No answer text"}

        try:
            response = gemini_service.generate_text(prompt, is_complex=True)
            import json
            import re
            clean = response.replace("```json", "").replace("```", "").strip()
            json_match = re.search(r"\{.*\}", clean, re.DOTALL)
            if json_match:
                clean = json_match.group()
            data = json.loads(clean)
            
            report = UPSCReport(
                attempt_after_id=attempt.id,
                student_id=attempt.student_id,
                question_id=attempt.question_id,
                estimated_marks_after=data.get("estimated_marks", 0.0),
                raw_ai_output={"status": data.get("status", "evaluated")},
                ai_model_version="gemini-2.5-flash",
                suggestions=data.get("suggestions", []),
                common_mistakes=data.get("common_mistakes", [])
            )
        except Exception as e:
            logger.error(f"AI Parse Error: {e}")
            report = UPSCReport(
                attempt_after_id=attempt.id,
                student_id=attempt.student_id,
                question_id=attempt.question_id,
                estimated_marks_after=0.0,
                raw_ai_output={"status": f"AI evaluation failed: {e}"},
                ai_model_version="error",
                suggestions=["Evaluation failed due to system error."],
                common_mistakes=[]
            )

        db.add(report)
        db.commit()
        db.refresh(report)

        return {"status": "success", "report_id": str(report.id)}
    except Exception as e:
        logger.error(f"Answer analysis failed: {e}")
        db.rollback()
    finally:
        db.close()


@celery_app.task(name="initialize_student_progress")
def initialize_student_progress_task(plan_id: str):
    """Creates progress records for all students in the batch for a specific plan"""
    db = SessionLocal()
    try:
        from app.models.upsc import UPSCPlan, UPSCStudentProfile, UPSCStudentProgress

        plan = db.query(UPSCPlan).filter(UPSCPlan.id == plan_id).first()
        if not plan:
            logger.error(f"Plan not found: {plan_id}")
            return

        # Get all students in the same batch
        students = (
            db.query(UPSCStudentProfile)
            .filter(UPSCStudentProfile.batch_id == plan.batch_id)
            .all()
        )

        # Optimization: Fetch existing progress records in bulk to avoid N+1 queries
        student_ids = [student.user_id for student in students]
        existing_progress = (
            db.query(UPSCStudentProgress.student_id)
            .filter(
                UPSCStudentProgress.student_id.in_(student_ids),
                UPSCStudentProgress.plan_id == plan.id,
            )
            .all()
        )
        existing_student_ids = {progress.student_id for progress in existing_progress}

        for student in students:
            # Check if progress record exists using the pre-fetched set
            if student.user_id not in existing_student_ids:
                progress = UPSCStudentProgress(
                    student_id=student.user_id, plan_id=plan.id, is_locked=True
                )
                db.add(progress)

        db.commit()
        return {"status": "success", "students_initialized": len(students)}
    except Exception as e:
        logger.error(f"Progress initialization failed: {e}")
        db.rollback()
    finally:
        db.close()


@celery_app.task(name="transcribe_audio")
def transcribe_audio_task(attempt_id: str, file_path_arg: str):
    """Transcribe student audio using Gemini Service. Accepts local file path."""
    db = SessionLocal()
    try:
        from app.models.upsc import UPSCAttempt
        from app.services.gemini_service import gemini_service
        import base64

        attempt = db.query(UPSCAttempt).filter(UPSCAttempt.id == attempt_id).first()
        if not attempt:
            logger.error(f"Attempt not found: {attempt_id}")
            return

        # Read file from path and encode to base64
        try:
            with open(file_path_arg, "rb") as audio_file:
                audio_data = audio_file.read()
                encoded_string = base64.b64encode(audio_data).decode("utf-8")
        except Exception as e:
            logger.error(f"Failed to read audio file at {file_path_arg}: {e}")
            return {"status": "error", "message": f"File read failed: {e}"}

        transcription = gemini_service.transcribe_audio(encoded_string)
        attempt.transcription = transcription
        attempt.answer_text = transcription  # For analysis task to pick up

        db.commit()

        # Trigger analysis after transcription
        analyze_answer_task.delay(str(attempt.id))

        return {"status": "success", "transcription": transcription[:50]}
    except Exception as e:
        logger.error(f"Audio transcription failed: {e}")
        db.rollback()
    finally:
        db.close()


@celery_app.task(name="perform_ocr")
def perform_ocr_task(attempt_id: str, image_path: str):
    """Perform OCR on handwritten answer images using Gemini Vision"""
    db = SessionLocal()
    try:
        from app.models.upsc import UPSCAttempt, UPSCReport
        from app.services.ocr_service import extract_text_from_image

        attempt = db.query(UPSCAttempt).filter(UPSCAttempt.id == attempt_id).first()
        if not attempt:
            logger.error(f"Attempt not found: {attempt_id}")
            return

        logger.info(f"Starting OCR Task for attempt: {attempt_id}")
        
        try:
            extracted_text = extract_text_from_image(image_path)
            
            if not extracted_text or len(extracted_text) < 10:
                logger.warning(f"OCR returned very little text for attempt {attempt_id}. Might be poor quality.")
                # We still continue but maybe flag it
            
            attempt.answer_text = extracted_text
            attempt.ocr_confidence = 0.85  # Placeholder for confidence
            db.commit()

            logger.info(f"OCR Successful for {attempt_id}. Triggering analysis.")
            analyze_answer_task.delay(str(attempt.id))

            return {"status": "success", "text_length": len(extracted_text)}

        except Exception as ocr_err:
            logger.error(f"OCR Service failed for {attempt_id}: {ocr_err}")
            
            # Create a report marking OCR failure
            report = UPSCReport(
                attempt_after_id=attempt.id,
                student_id=attempt.student_id,
                question_id=attempt.question_id,
                estimated_marks_after=0.0,
                raw_ai_output={"status": "ocr_failed", "error": str(ocr_err)},
                ai_model_version="none",
                suggestions=["We couldn't recognize your handwriting. Please ensure the image is clear and well-lit."],
                common_mistakes=[]
            )
            db.add(report)
            db.commit()
            return {"status": "failed", "error": str(ocr_err)}

    except Exception as e:
        logger.error(f"OCR Task wrapper failed: {e}")
        db.rollback()
    finally:
        db.close()
