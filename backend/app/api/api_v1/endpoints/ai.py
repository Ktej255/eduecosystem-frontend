from typing import Any
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.api import deps
from app.models.user import User
from pydantic import BaseModel

router = APIRouter()

class ChatRequest(BaseModel):
    message: str

@router.post("/chat")
def chat_with_ai(
    request: ChatRequest,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Chat with the Global AI Assistant.
    """
    user_message = request.message.lower()
    
    # Mock AI Logic based on context
    response = "I'm here to help you navigate your holistic learning journey."
    
    if "focus" in user_message or "distracted" in user_message:
        response = "I noticed your focus score was a bit low yesterday. Try a 5-minute breathing exercise in the Wellness module before your next study session."
    elif "exam" in user_message or "test" in user_message:
        response = "You have a Physics Midterm coming up. I recommend using the Exam Mode in the Monitoring module to practice in a secure environment."
    elif "tired" in user_message or "stress" in user_message:
        response = "It's important to rest. Check your mood trends in the Wellness tracker. Maybe it's time for a break?"
    elif "group" in user_message or "friend" in user_message:
        response = "Studying together can be boosting! Your Wolf Pack 'Alpha Squad' has been active. Why not join them in a Study Room?"
    elif "graphology" in user_message or "handwriting" in user_message:
        response = "Your last handwriting analysis showed high 'Analytical Thinking'. Keep it up! Try writing faster to improve your 'Fluidity' score."
        
    return {"response": response}
