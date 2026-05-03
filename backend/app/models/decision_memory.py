from sqlalchemy import Column, Integer, String, DateTime, JSON, Text
from datetime import datetime
from app.db.base_class import Base

class DecisionMemory(Base):
    __tablename__ = "decision_memory"

    id = Column(Integer, primary_key=True, index=True)
    timestamp = Column(DateTime, default=datetime.utcnow, index=True)
    action_type = Column(String(100), index=True) # e.g., "WEIGHT_ADJUSTMENT", "PRICING_CHANGE"
    
    # State snapshots
    before_state = Column(JSON, nullable=False)
    after_state = Column(JSON, nullable=False)
    
    # Reasoning
    reason = Column(Text, nullable=False)
    impact_score = Column(Integer, default=0) # Optional score of success/impact
    
    # Targeted entities
    target_entity = Column(String(100), nullable=True) # e.g., "OTO_FUNNEL_V1"
