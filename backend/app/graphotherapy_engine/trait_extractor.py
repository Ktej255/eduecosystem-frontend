import json
import logging
from typing import List, Dict, Any
from app.services.gemini_service import gemini_service
from .constants import TRAITS_CONFIG

logger = logging.getLogger(__name__)

class TraitExtractor:
    def __init__(self):
        self.allowed_traits = [t["name"] for t in TRAITS_CONFIG]

    def _generate_prompt(self) -> str:
        traits_list = "\n".join([f"- {t}" for t in self.allowed_traits])
        return f"""
        You are a strict Graphology Trait Extractor.
        Analyze the handwriting in the image and identify which of the following traits are present.
        
        ALLOWED TRAITS:
        {traits_list}
        
        STRICT RULES:
        1. ONLY return traits from the ALLOWED TRAITS list.
        2. DO NOT generate any narrative or explanation.
        3. DO NOT introduce new traits.
        4. Provide a confidence score (0.0 to 1.0) for each detected trait.
        5. Identify the frequency of the trait (how many times it appears or its consistency).
        
        OUTPUT FORMAT (Strict JSON):
        {{
            "detected_traits": [
                {{"name": "Trait Name", "confidence": 0.85, "frequency": 1}}
            ]
        }}
        """

    def extract(self, image_path: str) -> Dict[str, Any]:
        """
        Extract structured traits from handwriting image using Gemini Vision.
        """
        try:
            prompt = self._generate_prompt()
            response_text = gemini_service.analyze_image(
                image_path=image_path,
                prompt=prompt,
                temperature=0.1 # Low temperature for strict adherence
            )
            
            # Clean and parse JSON
            cleaned_response = response_text.replace("```json", "").replace("```", "").strip()
            data = json.loads(cleaned_response)
            
            # Filter to ensure only allowed traits
            valid_traits = []
            for t in data.get("detected_traits", []):
                if t["name"] in self.allowed_traits:
                    valid_traits.append({
                        "name": t["name"],
                        "confidence": t.get("confidence", 0.5),
                        "frequency": t.get("frequency", 1)
                    })
            
            return {"traits": valid_traits}

        except Exception as e:
            logger.error(f"Trait Extraction Failed: {e}")
            return {"traits": [], "error": str(e)}

trait_extractor = TraitExtractor()
