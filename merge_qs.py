
import json

main_file = r"d:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch1\geography\data\mcqs\ncert-mcqs.json"
injection_file = "injection_qs.json"

try:
    with open(main_file, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    with open(injection_file, "r", encoding="utf-8") as f:
        new_qs = json.load(f)
    
    # Check for duplicates or existing count
    print(f"Original count: {len(data)}")
    data.extend(new_qs)
    print(f"New count: {len(data)}")
    
    with open(main_file, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4)
    
    print("Merge successful!")
except Exception as e:
    print(f"Error: {e}")
