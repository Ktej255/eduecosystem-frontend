from typing import Optional
from datetime import datetime
from pydantic import BaseModel

class SubmissionBase(BaseModel):
    quiz_data: Optional[str] = None

class SubmissionCreate(SubmissionBase):
    pass

class SubmissionUpdate(SubmissionBase):
    report_content: Optional[str] = None
    report_level: Optional[int] = None

class SubmissionInDBBase(SubmissionBase):
    id: int
    user_id: int
    image_url: str
    report_content: Optional[str] = None
    report_level: int
    created_at: datetime

    class Config:
        from_attributes = True

class Submission(SubmissionInDBBase):
    pass
