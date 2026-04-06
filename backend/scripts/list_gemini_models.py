import os
import google.generativeai as genai
from dotenv import load_dotenv
from pathlib import Path

# Setup path
BACKEND_ROOT = Path(__file__).resolve().parent.parent
load_dotenv(BACKEND_ROOT / ".env")
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

print("🔍 Listing Gemini Models...")
try:
    for m in genai.list_models():
        if 'embedContent' in m.supported_generation_methods:
            print(f"- Model: {m.name} | Display Name: {m.display_name}")
except Exception as e:
    print(f"❌ Failed to list models: {e}")
