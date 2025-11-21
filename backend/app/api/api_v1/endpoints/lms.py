from typing import Any, List
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.api import deps
from app.models.user import User

router = APIRouter()

@router.post("/quiz/generate")
def generate_quiz(
    topic: str,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Generate an AI quiz for a topic.
    """
    from app.models.quiz import Quiz, Question
    import json

    # Mock AI Generation Logic
    # In a real app, this would call OpenAI/Gemini API
    quiz = Quiz(title=f"Quiz on {topic}", topic=topic, user_id=current_user.id)
    db.add(quiz)
    db.commit()
    db.refresh(quiz)

    mock_questions = [
        {
            "text": f"What is a key event in {topic}?",
            "options": ["Event A", "Event B", "Event C", "Event D"],
            "correct": "Event A"
        },
        {
            "text": f"Who is a famous figure in {topic}?",
            "options": ["Person X", "Person Y", "Person Z"],
            "correct": "Person X"
        }
    ]

    for q in mock_questions:
        question = Question(
            quiz_id=quiz.id,
            text=q["text"],
            options=json.dumps(q["options"]),
            correct_answer=q["correct"]
        )
        db.add(question)
    
    db.commit()
    
    return {"quiz_id": quiz.id, "title": quiz.title, "questions": mock_questions}
