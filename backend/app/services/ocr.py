import random
import easyocr
import os

# Initialize reader once (global) to avoid reloading model on every request
# GPU=False to be safe on standard environments, or True if we are sure.
# Let's try to detect or default to False for stability.
reader = easyocr.Reader(['en'], gpu=False)

def analyze_handwriting(image_path: str) -> dict:
    """
    Analyze handwriting using EasyOCR for text extraction
    and mock logic for personality traits (until we have a trained model).
    """
    if not os.path.exists(image_path):
        return {"error": "File not found"}

    try:
        # Extract text
        result = reader.readtext(image_path, detail=0)
        extracted_text = " ".join(result)
        
        if not extracted_text:
            extracted_text = "[No text detected. Please try a clearer image.]"

    except Exception as e:
        print(f"OCR Error: {e}")
        extracted_text = "[Error processing image]"

    # Mock features (Randomized but seeded by text length to be semi-deterministic)
    random.seed(len(extracted_text))
    
    features = {
        "baseline": random.choice(["Straight", "Ascending", "Descending", "Wavy"]),
        "slant": random.choice(["Vertical", "Right", "Left", "Variable"]),
        "pressure": random.choice(["Heavy", "Light", "Medium"]),
        "size": random.choice(["Large", "Small", "Medium"]),
        "spacing": random.choice(["Wide", "Narrow", "Balanced"]),
        "confidence_score": round(random.uniform(0.7, 0.99), 2)
    }
    
    # Simple keyword matching for "AI" analysis
    traits = []
    if "I" in extracted_text:
        traits.append("strong ego")
    if "t" in extracted_text:
        traits.append("high goals")
    if not traits:
        traits = ["determination", "sensitivity", "logic", "creativity"]

    analysis_text = (
        f"Extracted Text: \"{extracted_text}\"\n\n"
        f"Analysis:\n"
        f"Based on the {features['slant']} slant and {features['pressure']} pressure, "
        f"the writer shows traits of {', '.join(traits)}."
    )

    return {
        "extracted_text": extracted_text,
        "features": features,
        "analysis": analysis_text
    }
