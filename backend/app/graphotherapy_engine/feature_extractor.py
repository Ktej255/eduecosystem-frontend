import json
import logging
import os
import base64
from typing import Dict, Any
from openai import OpenAI

logger = logging.getLogger(__name__)

# NVIDIA NIM Client Initialization
client = OpenAI(
    base_url="https://integrate.api.nvidia.com/v1",
    api_key=os.getenv("NVIDIA_API_KEY")
)

class FeatureExtractor:
    """
    PHASE 1: Feature Extraction Layer
    Extracts strict visual features from handwriting using NVIDIA NIM Vision (Nemotron-Nano-VL).
    """

    REQUIRED_KEYS = ["slant", "pressure", "spacing", "size", "baseline"]
    MODEL_ID = "nvidia/nemotron-nano-vl-8b-v1"

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

    def _encode_image(self, image_path: str) -> str:
        with open(image_path, "rb") as image_file:
            return base64.b64encode(image_file.read()).decode('utf-8')

    def extract(self, image_path: str) -> Dict[str, str]:
        """
        PHASE 1: Feature Extraction
        Analyzes image using NVIDIA NIM Vision to extract raw handwriting features.
        """
        print(f"[STRICT_VERIFICATION] feature_extractor.extract triggered for {image_path}")
        try:
            base64_image = self._encode_image(image_path)
            prompt = self._generate_prompt()
            
            response = client.chat.completions.create(
                model=self.MODEL_ID,
                messages=[
                    {
                        "role": "user",
                        "content": [
                            {"type": "text", "text": prompt},
                            {
                                "type": "image_url",
                                "image_url": {"url": f"data:image/png;base64,{base64_image}"}
                            }
                        ]
                    }
                ],
                temperature=0.1,
                top_p=0.7,
                max_tokens=1024,
            )
            
            response_text = response.choices[0].message.content
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
            logger.error(f"Feature Extraction CRITICAL FAILURE: {e}")
            raise RuntimeError(f"Failed to extract features: {e}")
        
        return {}

feature_extractor = FeatureExtractor()
