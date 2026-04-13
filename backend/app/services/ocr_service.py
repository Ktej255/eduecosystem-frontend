"""
OCR Service for EduEcosystem
Uses Gemini Vision to extract handwritten text from UPSC answer sheets.
"""

import logging
from app.services.gemini_service import gemini_service

logger = logging.getLogger(__name__)

import os
import requests
import tempfile

def extract_text_from_image(image_path: str) -> str:
    """
    Extracts handwritten text from an image using Gemini Vision.
    Optimized for UPSC answer sheets.
    Supports both local file paths and remote URLs.
    """
    prompt = """You are an expert OCR engine specializing in handwritten UPSC answer sheets.
Extract all the text from the provided image accurately.
Preserve the structure of the answer (headings, bullet points, etc.) if possible.
Do not add any preamble or commentary. Return only the extracted text.
If no text is found, return an empty string.
"""
    tmp_file_path = None
    try:
        logger.info(f"Starting OCR for image: {image_path}")

        # If the image_path is a URL, download it to a temporary file
        if image_path.startswith("http://") or image_path.startswith("https://"):
            response = requests.get(image_path, stream=True, timeout=30)
            response.raise_for_status()

            # Create a temporary file preserving the extension if possible
            # We'll just use a generic temp file as gemini analyzes the bytes via PIL
            tmp_fd, tmp_file_path = tempfile.mkstemp(suffix=".jpg")
            with os.fdopen(tmp_fd, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)

            target_path = tmp_file_path
        else:
            # Handle local storage relative paths starting with "/"
            if image_path.startswith("/"):
                target_path = image_path.lstrip("/")
            else:
                target_path = image_path

        extracted_text = gemini_service.analyze_image(target_path, prompt)
        
        # Basic cleanup
        if extracted_text:
            extracted_text = extracted_text.strip()
            
        return extracted_text
    except Exception as e:
        logger.error(f"OCR Extraction failed for {image_path}: {e}")
        raise e
    finally:
        # Clean up the temporary file if one was created
        if tmp_file_path and os.path.exists(tmp_file_path):
            try:
                os.remove(tmp_file_path)
            except Exception as e:
                logger.warning(f"Failed to remove temporary image file {tmp_file_path}: {e}")
