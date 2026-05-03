from pydantic import BaseModel
from typing import Optional, List, Dict, Any

class HandwritingFeatures(BaseModel):
    baseline: Optional[str] = None
    slant: Optional[str] = None
    pressure: Optional[str] = None
    size: Optional[str] = None
    spacing: Optional[str] = None
    confidence_score: float = 0.0
    personality_traits: List[str] = []
    error: Optional[str] = None

class HandwritingAnalysis(BaseModel):
    extracted_text: str
    features: HandwritingFeatures
    analysis: str

class HandwritingAnalysisResponse(BaseModel):
    submission_id: int
    extracted_text: str
    features: HandwritingFeatures
    analysis: str
    coins_earned: int
    message: str

# NEW: Graphotherapy Intelligence Engine Schemas
class GraphoTraitScore(BaseModel):
    score: float
    contributors: List[Dict[str, Any]]

class GraphoConflict(BaseModel):
    type: str
    severity: str
    insight: str # Changed from description to match engine

class GraphoPersonality(BaseModel):
    archetype: Dict[str, Any] # Changed from str to match engine
    core_motivation: str
    strengths: List[str]
    weaknesses: List[str]

class GraphoReportData(BaseModel):
    features: Dict[str, str]
    trait_scores: Dict[str, GraphoTraitScore]
    personality: GraphoPersonality
    conflicts: List[GraphoConflict]
    narrative: str # Changed from Dict to str
    signature: str
    session_id: str
    uniqueness_hash: Optional[str] = None

class GraphoAnalyzeResponse(BaseModel):
    status: str
    submission_id: Optional[int] = None
    report: Optional[GraphoReportData] = None
    pdf_url: Optional[str] = None
    message: Optional[str] = None
    meta: Optional[Dict[str, Any]] = None
