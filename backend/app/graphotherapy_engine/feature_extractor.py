import json
import logging
from typing import Dict, Any
from app.services.gemini_service import gemini_service

logger = logging.getLogger(__name__)

class FeatureExtractor:
    """
    PHASE 1: Feature Extraction Layer
    Extracts strict visual features from handwriting using Gemini Vision.
    """

    REQUIRED_KEYS = ["slant", "pressure", "spacing", "size", "baseline"]

    def _generate_prompt(self) -> str:
        return """
        You are a Graphotherapy Feature Extractor. 
        Analyze the handwriting in the image and extract the following 5 features.
        
        STRICT OPTIONS:
        - slant: left | right | straight
        - pressure: light | medium | heavy
        - spacing: tight | normal | wide
        - size: small | medium | large
        - baseline: rising | falling | straight
        
        OUTPUT FORMAT (Strict JSON ONLY):
        {
            "slant": "...",
            "pressure": "...",
            "spacing": "...",
            "size": "...",
            "baseline": "..."
        }
        
        STRICT RULES:
        1. ONLY use the provided options for each field.
        2. DO NOT provide any reasoning or extra text.
        3. If unsure, pick the most prominent characteristic.
        4. Every key in the JSON must be present.
        """

    def extract(self, image_path: str, max_retries: int = 2) -> Dict[str, str]:
        """
        Extract structured features from handwriting image with retry logic.
        """
        attempts = 0
        while attempts < max_retries:
            try:
                prompt = self._generate_prompt()
                # Use temperature 0.1 for strict adherence to options
                response_text = gemini_service.analyze_image(
                    image_path=image_path,
                    prompt=prompt,
                    temperature=0.1
                )
                print(f"DEBUG: RAW AI RESPONSE: {response_text}")
                
                # Clean and parse JSON
                cleaned_response = response_text.replace("```json", "").replace("```", "").strip()
                data = json.loads(cleaned_response)
                
                # Validation Layer
                if not all(key in data for key in self.REQUIRED_KEYS):
                    missing = [k for k in self.REQUIRED_KEYS if k not in data]
                    raise ValueError(f"Missing required keys in response: {missing}")

                # Strict Options Validation
                valid_options = {
                    "slant": ["left", "right", "straight"],
                    "pressure": ["light", "medium", "heavy"],
                    "spacing": ["tight", "normal", "wide"],
                    "size": ["small", "medium", "large"],
                    "baseline": ["rising", "falling", "straight"]
                }
                
                features = {}
                for key, options in valid_options.items():
                    val = str(data.get(key, "")).lower().strip()
                    if val in options:
                        features[key] = val
                    else:
                        raise ValueError(f"Invalid value for {key}: {val}")
                
                return features

            except Exception as e:
                attempts += 1
                logger.warning(f"Feature Extraction Attempt {attempts} failed: {e}")
                if attempts >= max_retries:
                    logger.error(f"Feature Extraction CRITICAL FAILURE after {max_retries} attempts.")
                    return {"error": f"Failed to extract features: {e}"}
        
        return {} # Should not reach here

feature_extractor = FeatureExtractor()
