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
from app.services.gemini_service import gemini_service
from app.api import deps

router = APIRouter()

TEMP_UPLOAD_DIR = Path("temp_uploads")
TEMP_UPLOAD_DIR.mkdir(exist_ok=True)

ANALYSIS_PROMPT = """
You are an expert Graphotherapist and Handwriting Analyst. 
Analyze the requested handwriting sample image. 
Provide a structured psychological analysis focusing on:

1. Emotional Stability (Baseline, Slant)
2. Willpower & Determination (t-bars)
3. Self-Image & Ego (Capital I, Signature)
4. Social Behavior (Letter spacing, Connection)
5. Success/Money Blocks (Lower loops of g, y, j)

Return the response in strict JSON format:
{
    "emotional_stability": {
        "score": 0-100,
        "status": "High/Moderate/Low",
        "observation": "detailed observation"
    },
    "key_traits": [
        {"trait": "Trait Name", "impact": "Positive/Negative", "description": "desc"}
    ],
    "areas_of_concern": [
        {"stroke": "Claw/Retrace/etc", "meaning": "meaning", "fix": "suggested fix"}
    ],
    "summary": "2-3 sentences summary"
}
"""

@router.post("/analyze")
async def analyze_handwriting(
    files: List[UploadFile] = File(...)
):
    """
    Analyze uploaded handwriting samples using Gemini Vision.
    Returns structured JSON analysis.
    """
    if not files:
        raise HTTPException(status_code=400, detail="No files uploaded")

    # Save first file temporarily (Gemini Vision usually needs one good sample or we can collage them)
    # For now, analyze the first image
    file = files[0]
    file_ext = file.filename.split(".")[-1]
    temp_filename = f"{uuid.uuid4()}.{file_ext}"
    temp_path = TEMP_UPLOAD_DIR / temp_filename

    try:
        with temp_path.open("wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # Call Gemini Service
        # Note: analyze_image in gemini_service expects a path string
        # We need to parse the JSON response
        
        response_text = await gemini_service.analyze_image(
            image_path=str(temp_path),
            prompt=ANALYSIS_PROMPT,
            temperature=0.2
        )
        
        # Cleanup json markdown if present
        cleaned_response = response_text.replace("```json", "").replace("```", "").strip()
        analysis_data = json.loads(cleaned_response)
        
        return analysis_data

    except json.JSONDecodeError:
        # Fallback if JSON parsing fails
        return {
            "error": "Failed to parse AI response",
            "raw_response": response_text
        }
    except Exception as e:
        print(f"Analysis Error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        # Cleanup
        if temp_path.exists():
            temp_path.unlink()
