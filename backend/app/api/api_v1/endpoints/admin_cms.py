from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from sqlalchemy import text
from typing import List, Optional
from pydantic import BaseModel

from app.db.session import get_db
from app.api.deps import get_current_user

router = APIRouter()

class FocusedQuestionUpdate(BaseModel):
    question_text: Optional[str] = None
    option_a: Optional[str] = None
    option_b: Optional[str] = None
    option_c: Optional[str] = None
    option_d: Optional[str] = None
    correct_answer: Optional[str] = None
    explanation: Optional[str] = None
    topic_tag: Optional[str] = None

class FocusedQuestionCreate(BaseModel):
    subject: str
    cluster_number: int
    cluster_name: str
    question_number: int
    question_text: str
    option_a: str
    option_b: str
    option_c: str
    option_d: str
    correct_answer: str
    explanation: str
    topic_tag: Optional[str] = None

class FlashcardUpdate(BaseModel):
    question: Optional[str] = None
    answer: Optional[str] = None
    explanation: Optional[str] = None
    difficulty: Optional[float] = None

class FlashcardCreate(BaseModel):
    lesson_id: Optional[int] = None
    batch1_segment_key: Optional[str] = None
    question: str
    answer: str
    explanation: Optional[str] = None
    difficulty: float = 0.5
    source_type: str = "manual"

@router.get("/focused-questions")
def list_focused_questions(
    subject: Optional[str] = None,
    cluster_number: Optional[int] = None,
    skip: int = 0,
    limit: int = 50,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    if not current_user.is_superuser:
        raise HTTPException(status_code=403, detail="Not authorized")
    
    query = "SELECT * FROM focused_questions WHERE 1=1"
    params = {}
    
    if subject:
        query += " AND subject = :subj"
        params["subj"] = subject
    if cluster_number:
        query += " AND cluster_number = :cl_num"
        params["cl_num"] = cluster_number
        
    query += " ORDER BY subject, cluster_number, question_number LIMIT :limit OFFSET :skip"
    params["limit"] = limit
    params["skip"] = skip
    
    rows = db.execute(text(query), params).fetchall()
    
    # Count total for pagination
    count_query = "SELECT COUNT(*) FROM focused_questions WHERE 1=1"
    count_params = {}
    if subject:
        count_query += " AND subject = :subj"
        count_params["subj"] = subject
    if cluster_number:
        count_query += " AND cluster_number = :cl_num"
        count_params["cl_num"] = cluster_number
        
    total = db.execute(text(count_query), count_params).scalar()
    
    return {
        "total": total,
        "items": [dict(r._mapping) for r in rows]
    }

@router.get("/focused-questions/{qid}")
def get_focused_question(
    qid: int,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    if not current_user.is_superuser:
        raise HTTPException(status_code=403, detail="Not authorized")
        
    row = db.execute(text("SELECT * FROM focused_questions WHERE id = :id"), {"id": qid}).fetchone()
    if not row:
        raise HTTPException(status_code=404, detail="Question not found")
        
    return dict(row._mapping)

@router.patch("/focused-questions/{qid}")
def update_focused_question(
    qid: int,
    body: FocusedQuestionUpdate,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    if not current_user.is_superuser:
        raise HTTPException(status_code=403, detail="Not authorized")
        
    update_data = body.model_dump(exclude_unset=True)
    if not update_data:
        return {"message": "No changes requested"}
        
    set_clause = ", ".join([f"{k} = :{k}" for k in update_data.keys()])
    params = {**update_data, "id": qid}
    
    db.execute(text(f"UPDATE focused_questions SET {set_clause} WHERE id = :id"), params)
    db.commit()
    
    return {"message": "Updated successfully"}

@router.delete("/focused-questions/{qid}")
def delete_focused_question(
    qid: int,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    if not current_user.is_superuser:
        raise HTTPException(status_code=403, detail="Not authorized")
        
    db.execute(text("DELETE FROM focused_questions WHERE id = :id"), {"id": qid})
    db.commit()
    
    return {"message": "Deleted successfully"}

@router.post("/focused-questions")
def create_focused_question(
    body: FocusedQuestionCreate,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    if not current_user.is_superuser:
        raise HTTPException(status_code=403, detail="Not authorized")
        
    data = body.model_dump()
    columns = ", ".join(data.keys())
    values = ", ".join([f":{k}" for k in data.keys()])
    
    db.execute(text(f"INSERT INTO focused_questions ({columns}) VALUES ({values})"), data)
    db.commit()
    
    return {"message": "Created successfully"}

# --- Flashcards CMS ---

@router.get("/flashcards")
def list_flashcards(
    skip: int = 0,
    limit: int = 50,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    if not current_user.is_superuser:
        raise HTTPException(status_code=403, detail="Not authorized")
        
    rows = db.execute(text("SELECT * FROM flashcards ORDER BY created_at DESC LIMIT :limit OFFSET :skip"), {"limit": limit, "skip": skip}).fetchall()
    total = db.execute(text("SELECT COUNT(*) FROM flashcards")).scalar()
    
    return {
        "total": total,
        "items": [dict(r._mapping) for r in rows]
    }

@router.patch("/flashcards/{fid}")
def update_flashcard(
    fid: int,
    body: FlashcardUpdate,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    if not current_user.is_superuser:
        raise HTTPException(status_code=403, detail="Not authorized")
        
    update_data = body.model_dump(exclude_unset=True)
    if not update_data:
        return {"message": "No changes requested"}
        
    set_clause = ", ".join([f"{k} = :{k}" for k in update_data.keys()])
    params = {**update_data, "id": fid}
    
    db.execute(text(f"UPDATE flashcards SET {set_clause} WHERE id = :id"), params)
    db.commit()
    
    return {"message": "Updated successfully"}

@router.delete("/flashcards/{fid}")
def delete_flashcard(
    fid: int,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    if not current_user.is_superuser:
        raise HTTPException(status_code=403, detail="Not authorized")
        
    db.execute(text("DELETE FROM flashcards WHERE id = :id"), {"id": fid})
    db.commit()
    
    return {"message": "Deleted successfully"}

@router.post("/flashcards")
def create_flashcard(
    body: FlashcardCreate,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    if not current_user.is_superuser:
        raise HTTPException(status_code=403, detail="Not authorized")
        
    data = body.model_dump()
    columns = ", ".join(data.keys())
    values = ", ".join([f":{k}" for k in data.keys()])
    
    db.execute(text(f"INSERT INTO flashcards ({columns}) VALUES ({values})"), data)
    db.commit()
    
    return {"message": "Created successfully"}

