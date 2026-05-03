"""
Funnel Analysis Endpoint
Analyzes handwriting samples using Gemini Vision
"""

import shutil
import os
import uuid
import json
from pathlib import Path
from typing import List, Optional
from fastapi import APIRouter, UploadFile, File, HTTPException, Depends, Form
from sqlalchemy.orm import Session
from app.services.gemini_service import gemini_service
from app.api import deps
from app import crud, models, schemas
import asyncio
import random
from starlette.concurrency import run_in_threadpool

router = APIRouter()

TEMP_UPLOAD_DIR = Path("temp_uploads")
TEMP_UPLOAD_DIR.mkdir(exist_ok=True)

ANALYSIS_PROMPT = """
You are an expert Graphologist & Sales Psychologist.

1. CORE INSTRUCTIONS
Objective: Analyze the handwriting sample to generate a "Free Preliminary Personality Snapshot" (Teaser Report).
The Rules:
- The "Tip of the Iceberg": Provide value but do not connect all dots. Leave the "why" for the paid report.
- The 95% Consistency: Analysis must be accurate to the traits, but vary metaphors (Architect, Ocean, Mountain Climber) to feel human.
- The Curiosity Gap: End sections with open loops/questions.
- Tone: Professional, encouraging, intriguing, mysterious.

2. DATA INPUT (Scan for these Gateway Traits)
- Slant (Emotional Expressiveness)
- Size (Concentration/Extroversion)
- Baseline (Mood Stability)
- T-Bars (Goals/Self-Esteem)
*Select ONLY 3 of these to discuss.*

3. OUTPUT FORMAT (Strict JSON)
Return the analysis in this JSON structure:
{
    "hook": "Dynamic opening sentence (e.g. 'Your handwriting is a whisper from your subconscious...')",
    "insights": [
        {
            "title": "Insight 1: The Mind (or Heart/Drive)",
            "analysis": "Analysis using a metaphor (Laser focus vs Floodlight).",
            "shadow_hint": "Shadow Hint regarding a potential leak or barrier..."
        },
        {
            "title": "Insight 2: The Heart",
            "analysis": "Analysis of slant/connection. Heart-led vs Head-led.",
            "shadow_hint": "Hint about protecting this sensitivity..."
        },
        {
            "title": "Insight 3: The Drive",
            "analysis": "Analysis of T-bars/pressure.",
            "shadow_hint": "Hint about sustained energy vs burnout..."
        }
    ],
    "blind_spot": {
        "title": "The Blind Spot",
        "description": "Identify one contradictory/hidden trait (The Unfinished Symphony)."
    },
    "verdict": {
        "title": "The Verdict",
        "description": "Based on this snapshot, you are a [Adjective 1], [Adjective 2], and [Adjective 3] individual with untapped potential."
    },
    "upsell": {
        "problem": "However, this scratches the surface. We haven't analyzed your Success Barriers or Defense Mechanisms.",
        "solution": "Your full 45-Page 'Blueprint of You' is ready to be unlocked."
    },
    "overall_score": 85,  // Generate a 'Potential Score' (0-100) based on positive indicators
    "metrics": [
        { "label": "Slant", "value": "Right (Eager)", "status": "good" },
        { "label": "Pressure", "value": "Heavy (Intense)", "status": "warning" },
        { "label": "Baseline", "value": "Ascending (Optimist)", "status": "good" },
        { "label": "Spacing", "value": "Balanced", "status": "neutral" }
    ]
}
"""

@router.post("/analyze")
async def analyze_handwriting(
    files: List[UploadFile] = File(...),
    email: Optional[str] = Form(None),
    name: Optional[str] = Form(None),
    purchase_type: str = Form("free"),
    db: Session = Depends(deps.get_db),
    current_user: Optional[models.User] = Depends(deps.get_current_user_optional)
):
    """
    Analyze uploaded handwriting samples using the unified Graphotherapy Orchestrator.
    """
    if not files:
        raise HTTPException(status_code=400, detail="No files uploaded")

    file = files[0]
    file_ext = file.filename.split(".")[-1]
    temp_filename = f"{uuid.uuid4()}.{file_ext}"
    temp_path = TEMP_UPLOAD_DIR / temp_filename

    try:
        with temp_path.open("wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # Prepare Payload
        user_id = str(current_user.id) if current_user else "anonymous_" + str(uuid.uuid4())[:8]
        
        payload = {
            "user_id": user_id,
            "image": str(temp_path),
            "purchase_type": purchase_type,
            "session_data": {
                "purchase_history": [], 
                "current_state": "new_upload"
            }
        }

        # Execute Unified Pipeline
        from app.graphotherapy_engine.orchestrator import orchestrator
        
        analysis_data = await run_in_threadpool(
            orchestrator.run_pipeline,
            payload=payload
        )

        if not analysis_data or analysis_data.get("status") == "error":
            raise HTTPException(status_code=500, detail=analysis_data.get("message", "Analysis failed"))

        # Persist for Funnel Retrieval
        if email or current_user:
            target_email = email or current_user.email
            # Use the UI-ready report data for persistence
            report_data = analysis_data.get("report")
            
            lead_data = {
                "email": target_email,
                "name": name or (current_user.full_name if current_user else target_email.split("@")[0]),
                "analysis_json": report_data,
                "analysis_status": "ready",
                "image_path": str(temp_path),
                "purchase_type": purchase_type
            }
            
            existing_lead = db.query(models.graphotherapy.GraphoLead).filter(
                models.graphotherapy.GraphoLead.email == target_email
            ).first()
            
            if existing_lead:
                for key, value in lead_data.items():
                    setattr(existing_lead, key, value)
            else:
                new_lead = models.graphotherapy.GraphoLead(**lead_data)
                db.add(new_lead)
            
            db.commit()
            
        return analysis_data

    except HTTPException:
        raise
    except Exception as e:
        print(f"Analysis Pipeline Error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if temp_path.exists():
            temp_path.unlink()

@router.get("/report/latest")
def get_latest_report(
    email: Optional[str] = None,
    session_id: Optional[str] = None,
    db: Session = Depends(deps.get_db)
):
    """
    Retrieves the latest analysis report for a lead or session.
    Used by the frontend polling mechanism.
    """
    if not email and not session_id:
        raise HTTPException(status_code=400, detail="Email or Session ID required")
    
    lead = None
    if email:
        lead = db.query(models.graphotherapy.GraphoLead).filter(
            models.graphotherapy.GraphoLead.email == email
        ).order_by(models.graphotherapy.GraphoLead.created_at.desc()).first()
    
    if not lead:
        # Fallback to checking student reports if user exists
        from app.models.student_report import StudentReport
        from app.models.user import User
        user = db.query(User).filter(User.email == email).first()
        if user:
            report = db.query(StudentReport).filter(
                StudentReport.user_id == user.id,
                StudentReport.report_type == "graphotherapy"
            ).order_by(StudentReport.created_at.desc()).first()
            if report:
                 return {
                    "status": "success",
                    "report_data": report.report_content,
                    "purchase_type": report.purchase_type or "free",
                    "analysis_status": "ready"
                }
        raise HTTPException(status_code=404, detail="No recent report found")
    
    return {
        "status": "success",
        "report_data": lead.analysis_json,
        "purchase_type": "full" if lead.converted else "free",
        "analysis_status": lead.analysis_status
    }
