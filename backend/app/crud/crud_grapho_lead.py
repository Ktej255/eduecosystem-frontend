from typing import Optional, List
from sqlalchemy.orm import Session
from app.crud.base import CRUDBase
from app.models.graphotherapy import GraphoLead
from app.schemas.graphotherapy import GraphoLeadCreate, GraphoLeadUpdate

class CRUDGraphoLead(CRUDBase[GraphoLead, GraphoLeadCreate, GraphoLeadUpdate]):
    def get_by_email(self, db: Session, *, email: str) -> Optional[GraphoLead]:
        return db.query(GraphoLead).filter(GraphoLead.email == email).order_by(GraphoLead.created_at.desc()).first()

    def get_by_session_id(self, db: Session, *, session_id: str) -> Optional[GraphoLead]:
        # Since GraphoLead doesn't have session_id explicitly in the model I saw earlier, 
        # I might need to check the model again or use image_path/created_at as a proxy.
        # Wait, the frontend sends session_id. Let's see if we should add it to the model.
        pass

grapho_lead = CRUDGraphoLead(GraphoLead)
