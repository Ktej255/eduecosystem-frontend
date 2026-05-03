import json
import threading
from datetime import datetime, timedelta
from typing import Any, Dict, List, Optional
from sqlalchemy.orm import Session
from sqlalchemy import text

class AIWorkflowService:
    # Anti-Gravity Validation Marker
    # Anti-Gravity Validation Marker
    # Anti-Gravity Validation Marker
    # Anti-Gravity Validation Marker
    # Anti-Gravity Validation Marker
    # Anti-Gravity Validation Marker
    # Anti-Gravity Validation Marker
    # Anti-Gravity Validation Marker
    """
    Orchestrates complex AI workflows in EduEcosystem.
    Handles tiered access, fallbacks, and multi-step reasoning.
    """
    
    def __init__(self):
        self.lock = threading.Lock()
        self.active_workflows = {}

    def start_workflow(self, workflow_id: str, context: Dict[str, Any]):
        with self.lock:
            self.active_workflows[workflow_id] = {
                "start_time": datetime.utcnow(),
                "context": context,
                "status": "running"
            }
        print(f"Workflow {workflow_id} started.")

    def get_status(self, workflow_id: str) -> Optional[Dict[str, Any]]:
        return self.active_workflows.get(workflow_id)

    def evaluate_performance(self, student_id: int, subject: str, db: Session):
        """
        Calculates performance based on test reports and suggests next steps.
        """
        reports = db.execute(
            text("SELECT score, total_questions, submitted_at FROM focused_test_reports WHERE user_id = :uid AND subject = :subj ORDER BY submitted_at DESC LIMIT 5"),
            {"uid": student_id, "subj": subject}
        ).fetchall()
        
        if not reports:
            return {"score": 0, "status": "not_started", "recommendation": "Start with Cluster 1"}
            
        avg_score = sum([r.score for r in reports]) / len(reports)
        
        # Simple adaptive logic
        if avg_score >= 8:
            rec = "Ready for Gate Exam"
        elif avg_score >= 5:
            rec = "Continue with next Cluster"
        else:
            rec = "Re-study previous Cluster"
            
        return {
            "average_score": avg_score,
            "reports_analyzed": len(reports),
            "recommendation": rec
        }

    def get_focused_questions(self, db: Session, subject: str, cluster_number: int, limit: int = 25):
        """
        Retrieves questions from the Knowledge Graph (focused_questions table).
        No hardcoded datasets.
        """
        query = text("""
            SELECT id, question_text, option_a, option_b, option_c, option_d, correct_answer, explanation, topic_tag
            FROM focused_questions
            WHERE subject LIKE :subj
              AND cluster_number = :cl_num
            ORDER BY RANDOM()
            LIMIT :limit
        """)

        
        rows = db.execute(query, {"subj": subject, "cl_num": cluster_number, "limit": limit}).fetchall()
        
        questions = []
        for r in rows:
            questions.append({
                "id": r.id,
                "question_text": r.question_text,
                "options": {
                    "A": r.option_a,
                    "B": r.option_b,
                    "C": r.option_c,
                    "D": r.option_d
                },
                "correct_answer": r.correct_answer,
                "explanation": r.explanation,
                "topic_tag": r.topic_tag,
            })
            
        return questions

    async def generate_flashcards_from_questions(self, questions: List[Dict[str, Any]], cluster_id: str):
        """
        Uses AI to transform MCQ clusters into high-retention flashcards.
        """
        from app.services.ai_router import ai_router
        if not questions:
            return []
            
        # Prepare context for AI
        context = json.dumps(questions[:10], indent=2) # Limit to 10 for tokens
        
        prompt = f"""
        TRANSFORM the following UPSC MCQs into high-quality active recall Flashcards.
        
        RULES:
        1. Create one card per question.
        2. Front: Conceptual question or 'Fill in the blank'.
        3. Back: Clear, concise answer.
        4. Include a brief explanation in the 'explanation' field.
        
        DATA:
        {context}
        
        OUTPUT FORMAT (JSON):
        [
          {{
            "question": "Front text",
            "answer": "Back text",
            "explanation": "Why?"
          }}
        ]
        """
        
        try:
            result = await ai_router.route(
                prompt=prompt,
                system_message="You are a Flashcard Architect for UPSC.",
                max_tokens=1500
            )
            content = result["content"]
            
            # Robust JSON extraction
            start = content.find("[")
            end = content.rfind("]") + 1
            if start != -1 and end != -1:
                content = content[start:end]
            
            cards = json.loads(content)
            return cards
        except Exception as e:
            print(f"Flashcard generation failed: {e}")
            print(f"Content was: {content[:200]}...") # Log start of content for debug
            return []


# Global instance
ai_workflow_service = AIWorkflowService()

