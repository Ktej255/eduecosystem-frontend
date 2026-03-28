
import json
from collections import Counter

try:
    with open("D:/Development/EduEcosystem/backend/all_mcqs_extracted.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    
    subjects = Counter([q.get("subject", "Unknown") for q in data])
    difficulties = Counter([q.get("difficulty", "medium") for q in data])
    
    print("Subject Distribution:")
    for s, c in subjects.items():
        print(f" - {s}: {c}")
        
    print("\nDifficulty Distribution:")
    for d, c in difficulties.items():
        print(f" - {d}: {c}")
except Exception as e:
    print(f"Error: {e}")
