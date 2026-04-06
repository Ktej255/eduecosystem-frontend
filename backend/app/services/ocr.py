import random
import os
import json
import re
from typing import Any, Optional
from app.services.gemini_service import gemini_service
from app.schemas.handwriting import HandwritingAnalysis, HandwritingFeatures

# Initialize reader lazily
reader = None

def get_reader():
    """
    Reader neutralized to reduce container size. 
    Functionality shifted to Gemini Vision.
    """
    return None

def parse_ai_json(text: str) -> dict:
    """
    Robustly extract and parse JSON from AI response, 
    handling markdown blocks and potential surrounding text.
    """
    try:
         # Find the first occurrences of { and last }
         start_index = text.find('{')
         end_index = text.rfind('}')
         
         if start_index != -1 and end_index != -1 and end_index > start_index:
             json_str = text[start_index:end_index+1]
             return json.loads(json_str)
         
         # Fallback: clean markdown
         clean = text.replace("```json", "").replace("```", "").strip()
         return json.loads(clean)
    except Exception as e:
        # If standard parsing fails, try to find any JSON-like block
        print(f"JSON Parsing Error: {e}")
        return {}

def analyze_handwriting(image_path: str, user: Any = None) -> dict:
    """
    Analyze handwriting using EasyOCR for text extraction
    and Gemini AI for personality analysis. Returns a dictionary 
    compatible with HandwritingAnalysis schema.
    """
    if not os.path.exists(image_path):
        return {"extracted_text": "", "features": {"error": "File not found"}, "analysis": "Error"}

    # Initial placeholder for extracted text
    extracted_text = "[Processing image with Gemini Vision...]"

    # Use Gemini Vision API for personality analysis with structured JSON output
    analysis_prompt = """Analyze this handwriting sample image for graphology/personality insights.
You are an expert Graphologist. Please return strictly JSON in the following format:

{
    "extracted_text": "The full transcription of the handwritten text",
    "features": {
        "baseline": "straight/ascending/descending/wavy",
        "slant": "vertical/right/left/variable",
        "pressure": "heavy/light/medium",
        "size": "large/small/medium",
        "spacing": "wide/narrow/balanced",
        "confidence_score": 0.0 to 1.0,
        "personality_traits": ["trait1", "trait2", "trait3"]
    },
    "analysis_paragraph": "A detailed 4-5 sentence personality analysis based on the specific traits seen above"
}

Be accurate to the visible strokes. If certain features are hard to see, use 'variable' and a lower confidence score.
"""

    try:
        # Use Gemini Vision to analyze the handwriting
        gemini_response = gemini_service.analyze_image(
            image_path, analysis_prompt, user=user, temperature=0.3
        )

        # Check for API-level errors
        if "API_ERROR:" in gemini_response:
            return {
                "extracted_text": extracted_text,
                "features": {"error": gemini_response, "confidence_score": 0.0},
                "analysis": gemini_response
            }

        # Parse JSON output
        parsed_data = parse_ai_json(gemini_response)
        
        if not parsed_data:
            # Re-attempt parsing or return failure
            return {
                "extracted_text": extracted_text,
                "features": {"error": "Could not parse AI response as JSON", "confidence_score": 0.0},
                "analysis": f"AI raw response: {gemini_response[:200]}"
            }

        # Map to HandwritingAnalysis structure
        features_data = parsed_data.get("features", {})
        
        # Ensure we return a flat dict that matches the caller's expectations
        return {
            "extracted_text": parsed_data.get("extracted_text", extracted_text),
            "features": {
                "baseline": features_data.get("baseline"),
                "slant": features_data.get("slant"),
                "pressure": features_data.get("pressure"),
                "size": features_data.get("size"),
                "spacing": features_data.get("spacing"),
                "confidence_score": features_data.get("confidence_score", 0.0),
                "personality_traits": features_data.get("personality_traits", []),
            },
            "analysis": parsed_data.get("analysis_paragraph", "Analysis summary unavailable.")
        }

    except Exception as e:
        print(f"Gemini Analysis Error: {e}")
        return {
            "extracted_text": extracted_text,
            "features": {"error": str(e), "confidence_score": 0.0},
            "analysis": "AI Analysis unavailable due to technical error."
        }
