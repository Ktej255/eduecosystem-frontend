"""
OCR Service for EduEcosystem
Uses Gemini Vision to extract handwritten text from UPSC answer sheets.
"""

import logging
from app.services.gemini_service import gemini_service

logger = logging.getLogger(__name__)

def extract_text_from_image(image_path: str) -> str:
    """
    Extracts handwritten text from an image using Gemini Vision.
    Optimized for UPSC answer sheets.
    """
    prompt = """You are an expert OCR engine specializing in handwritten UPSC answer sheets.
Extract all the text from the provided image accurately.
Preserve the structure of the answer (headings, bullet points, etc.) if possible.
Do not add any preamble or commentary. Return only the extracted text.
If no text is found, return an empty string.
"""
    try:
        logger.info(f"Starting OCR for image: {image_path}")
        extracted_text = gemini_service.analyze_image(image_path, prompt)
        
        # Basic cleanup
        if extracted_text:
            extracted_text = extracted_text.strip()
            
        return extracted_text
    except Exception as e:
        logger.error(f"OCR Extraction failed for {image_path}: {e}")
        raise e
