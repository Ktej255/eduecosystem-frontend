"""
Google Gemini AI Service
Centralized service for all Gemini API interactions
"""

import os
from typing import Optional, List, Dict
import google.generativeai as genai

# Initialize Gemini
try:
    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")
    if GEMINI_API_KEY:
        genai.configure(api_key=GEMINI_API_KEY)
    else:
        print("WARNING: GEMINI_API_KEY not found in environment variables")
except Exception as e:
    print(f"WARNING: Failed to initialize Gemini: {e}")


class GeminiService:
    """Service for Google Gemini AI operations"""

    def __init__(self, model_name: str = "gemini-1.5-flash"):
        """
        Initialize Gemini service

        Args:
            model_name: Name of the Gemini model to use
        """
        self.model_name = os.getenv("GEMINI_MODEL", model_name)
        self.model = None
        self.vision_model = None

        try:
            self.model = genai.GenerativeModel(self.model_name)
            self.vision_model = genai.GenerativeModel("gemini-1.5-flash")
        except Exception as e:
            print(f"WARNING: Failed to create Gemini model: {e}")

    def generate_text(
        self, prompt: str, temperature: float = 0.7, max_tokens: int = 1000
    ) -> str:
        """
        Generate text using Gemini

        Args:
            prompt: Input prompt
            temperature: Sampling temperature (0.0-1.0)
            max_tokens: Maximum tokens to generate

        Returns:
            Generated text response
        """
        if not self.model:
            return "Gemini is not configured. Please set GEMINI_API_KEY."

        try:
            generation_config = {
                "temperature": temperature,
                "max_output_tokens": max_tokens,
            }

            response = self.model.generate_content(
                prompt, generation_config=generation_config
            )

            return response.text
        except Exception as e:
            print(f"Error generating text: {e}")
            return f"Error: {str(e)}"

    def analyze_image(
        self, image_path: str, prompt: str, temperature: float = 0.4
    ) -> str:
        """
        Analyze image using Gemini Vision

        Args:
            image_path: Path to image file
            prompt: Analysis prompt/question
            temperature: Sampling temperature

        Returns:
            Analysis result
        """
        if not self.vision_model:
            return "Gemini Vision is not configured. Please set GEMINI_API_KEY."

        try:
            import PIL.Image

            # Open and prepare image
            img = PIL.Image.open(image_path)

            generation_config = {
                "temperature": temperature,
            }

            response = self.vision_model.generate_content(
                [prompt, img], generation_config=generation_config
            )

            return response.text
        except Exception as e:
            print(f"Error analyzing image: {e}")
            return f"Error: {str(e)}"

    def chat(
        self,
        messages: List[Dict[str, str]],
        system_prompt: Optional[str] = None,
        temperature: float = 0.7,
    ) -> str:
        """
        Multi-turn chat conversation

        Args:
            messages: List of message dicts with 'role' and 'content'
            system_prompt: Optional system instruction
            temperature: Sampling temperature

        Returns:
            AI response
        """
        if not self.model:
            return "Gemini is not configured. Please set GEMINI_API_KEY."

        try:
            # Build conversation history
            chat = self.model.start_chat(history=[])

            # Add system prompt if provided
            full_prompt = ""
            if system_prompt:
                full_prompt = f"{system_prompt}\n\n"

            # Add user messages
            for msg in messages:
                full_prompt += f"{msg['role']}: {msg['content']}\n"

            generation_config = {
                "temperature": temperature,
            }

            response = chat.send_message(
                full_prompt, generation_config=generation_config
            )

            return response.text
        except Exception as e:
            print(f"Error in chat: {e}")
            return f"Error: {str(e)}"


# Global instance
gemini_service = GeminiService()
