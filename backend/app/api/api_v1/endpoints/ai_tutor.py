from typing import Any, List, Optional, Dict
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from app.services.rag_service import rag_service
from app.api import deps
from app.models.user import User
from sqlalchemy.orm import Session
from app.models.ai_portal import AIPortalConversation

router = APIRouter()

class ChatRequest(BaseModel):
    message: str
    context_context: Optional[str] = None # e.g., "lesson_id:123"
    history: Optional[List[Dict[str, str]]] = [] # e.g., [{"role": "user", "content": "hi"}]

class PortalChatRequest(BaseModel):
    message: str
    topic: str = "General"
    history: Optional[List[Dict[str, str]]] = []

class ChatResponse(BaseModel):
    answer: str
    sources: List[str]

class IngestRequest(BaseModel):
    text: str
    source: str

@router.post("/chat", response_model=ChatResponse)
def chat_with_guru(
    request: ChatRequest,
    current_user: User = Depends(deps.get_current_active_user)
) -> Any:
    """
    Chat with the AI Tutor (Guru) using RAG context.
    """
    try:
        response = rag_service.chat_with_guru(request.message, request.context_context, request.history)
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/ingest")
def ingest_content(
    request: IngestRequest,
    current_user: User = Depends(deps.get_current_active_superuser)
) -> Any:
    """
    Ingest content into the vector store (Admin only).
    """
    try:
        rag_service.ingest(request.text, request.source)
        return {"status": "success", "message": "Content ingested"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/portal-chat", response_model=ChatResponse)
def portal_chat(
    request: PortalChatRequest,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_active_user)
) -> Any:
    """
    Chat endpoint specifically for the Student AI Portal.
    Uses the specialized Socratic UPSC prompt and logs the conversation.
    """
    try:
        response = rag_service.chat_for_ai_portal(
            query=request.message, 
            student_name=current_user.full_name or "Student",
            topic=request.topic,
            history=request.history
        )
        
        # Save to database
        new_convo = AIPortalConversation(
            student_id=current_user.id,
            message=request.message,
            response=response["answer"],
            topic=request.topic
        )
        db.add(new_convo)
        db.commit()
        return response
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))

