import asyncio
import sys
import os

# Add backend to path
sys.path.append(os.path.join(os.getcwd(), "backend"))

from app.core.ai_service import ai_service

async def test_ai():
    print("Testing Gemini AI Integration...")
    
    # Use standard placeholder images for testing
    img1 = "https://via.placeholder.com/500x500.png?text=Handwriting+Sample+1"
    img2 = "https://via.placeholder.com/500x500.png?text=Handwriting+Sample+2"
    
    try:
        result = await ai_service.analyze_handwriting_comparison(img1, img2)
        print("\n--- AI Response ---")
        print(f"Score: {result.get('transformation_score')}")
        print(f"Feedback: {result.get('qualitative_feedback')[:100]}...")
        print("Metrics:")
        for m in result.get('metrics', []):
            print(f" - {m['name']}: {m['status']} ({m['baseline_value']} -> {m['current_value']})")
            
        if "simulated" in result.get("qualitative_feedback", "").lower():
            print("\nWARNING: Result appears to be MOCK data. Check API Key.")
        else:
            print("\nSUCCESS: Real AI response received.")
            
    except Exception as e:
        print(f"\nERROR: {e}")

if __name__ == "__main__":
    asyncio.run(test_ai())
