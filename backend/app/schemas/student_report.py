from typing import Optional, Dict, Any, List
from pydantic import BaseModel
from datetime import datetime

class StudentReportBase(BaseModel):
    report_type: str
    report_key: str
    data: Optional[Dict[str, Any]] = None
    traits: Optional[Dict[str, Any]] = None
    dimensions: Optional[Dict[str, Any]] = None
    report_content: Optional[Dict[str, Any]] = None
    purchase_type: Optional[str] = None
    
    # Detailed Graphotherapy Fields
    features_json: Optional[Dict[str, Any]] = None
    traits_json: Optional[Dict[str, Any]] = None
    conflicts_json: Optional[List[Any]] = None
    personality_json: Optional[Dict[str, Any]] = None
    report_text: Optional[str] = None
    pdf_url: Optional[str] = None

class StudentReportCreate(StudentReportBase):
    user_id: Optional[int] = None

class StudentReportUpdate(BaseModel):
    data: Optional[Dict[str, Any]] = None
    traits: Optional[Dict[str, Any]] = None
    dimensions: Optional[Dict[str, Any]] = None
    report_content: Optional[Dict[str, Any]] = None
    purchase_type: Optional[str] = None
    features_json: Optional[Dict[str, Any]] = None
    traits_json: Optional[Dict[str, Any]] = None
    conflicts_json: Optional[List[Any]] = None
    personality_json: Optional[Dict[str, Any]] = None
    report_text: Optional[str] = None
    pdf_url: Optional[str] = None

class StudentReportInDBBase(StudentReportBase):
    id: int
    user_id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class StudentReport(StudentReportInDBBase):
    pass
