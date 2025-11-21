from datetime import datetime
from pydantic import BaseModel

class MeditationSessionBase(BaseModel):
    minutes_listened: int

class MeditationSessionCreate(MeditationSessionBase):
    pass

class MeditationSession(MeditationSessionBase):
    id: int
    user_id: int
    created_at: datetime

    class Config:
        from_attributes = True
