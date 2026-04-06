from typing import List, Dict, Any, Optional
from pydantic import BaseModel
from uuid import UUID

class ExamStartRequest(BaseModel):
    subject: str
    num_questions: int = 20

class ExamSession(BaseModel):
    exam_id: str
    status: str
    student_id: Optional[int] = None
    subject: Optional[str] = None
    total_questions: int
    current_ability: float

class NextQuestionResponse(BaseModel):
    id: int
    text: str
    options: Dict[str, str]
    level: int
    node_id: Optional[str] = None
    points: float = 2.0

class AnswerSubmission(BaseModel):
    exam_id: str
    question_id: int
    selected_option: str
    time_taken_seconds: int
    current_ability: float

class SubmissionResult(BaseModel):
    is_correct: bool
    score_delta: float
    new_ability: float
    correct_option: Optional[str] = None
    explanation: Optional[str] = None

class ConceptPerformance(BaseModel):
    total: int
    correct: int

class FinalReport(BaseModel):
    total_questions: int
    correct_answers: int
    wrong_answers: int
    final_score: float
    accuracy: float
    concept_performance: Dict[str, ConceptPerformance]
    recommendation: str
