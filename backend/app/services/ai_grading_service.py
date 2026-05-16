"""
AI Grading Service (Refactored 2025)
Uses GeminiService with tiered Pro/Flash logic for grading.
"""

import logging
from typing import Dict, Optional, Any
from decimal import Decimal
from sqlalchemy.orm import Session
from datetime import datetime
from app.services.gemini_service import gemini_service
from app.models.ai_features import AIUsageLog
from app.models.quiz import AIGradingResult

logger = logging.getLogger(__name__)

class AIGradingService:
    @staticmethod
    async def grade_essay(
        db: Session,
        submission_id: int,
        essay_text: str,
        rubric: Dict,
        max_score: int = 100,
        current_user: Any = None,
    ) -> AIGradingResult:
        """Grade using tiered Gemini AI"""
        
        prompt = f"""Expert Essay Grader. Max Score: {max_score}. 
Rubric: {rubric}
Essay: {essay_text}

Return JSON with: score, feedback, strengths (list), improvements (list)."""

        try:
            # Call tiered AI (Auto-selects Pro for Premium users)
            response_text = gemini_service.generate_text(
                prompt=prompt,
                user=current_user,
                is_complex=True, # Grading requires high reasoning
                temperature=0.3
            )

            import json
            import re
            json_match = re.search(r"\{.*\}", response_text, re.DOTALL)
            data = json.loads(json_match.group()) if json_match else {}

            # Construct feedback combining feedback, strengths, and improvements
            feedback_parts = []
            if "feedback" in data:
                feedback_parts.append(data["feedback"])
            if "strengths" in data and isinstance(data["strengths"], list) and data["strengths"]:
                feedback_parts.append("Strengths:\n- " + "\n- ".join(data["strengths"]))
            if "improvements" in data and isinstance(data["improvements"], list) and data["improvements"]:
                feedback_parts.append("Areas for Improvement:\n- " + "\n- ".join(data["improvements"]))

            ai_feedback = "\n\n".join(feedback_parts) if feedback_parts else "No feedback generated"

            grading_result = AIGradingResult(
                student_answer_id=submission_id,
                ai_score=float(data.get("score", 0)),
                ai_feedback=ai_feedback,
                model_used="Gemini 3.0",
                rubric_scores=json.dumps({"overall": float(data.get("score", 0))}) if data.get("score") is not None else None,
            )
            db.add(grading_result)
            db.commit()
            return grading_result

        except Exception as e:
            logger.error(f"Grading failed: {e}")
            raise e
