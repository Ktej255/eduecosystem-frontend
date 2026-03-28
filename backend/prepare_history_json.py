import json
import os
import re

def split_objects(array_str):
    """Stack-based splitter for top-level objects in a TS array string"""
    objects = []
    stack = 0
    start = -1
    for i, char in enumerate(array_str):
        if char == '{':
            if stack == 0:
                start = i
            stack += 1
        elif char == '}':
            stack -= 1
            if stack == 0 and start != -1:
                objects.append(array_str[start:i+1])
                start = -1
    return objects

def extract_mcqs_universal(filepath, subject):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the array of objects [ { ... }, { ... } ]
    match = re.search(r'_MCQS.*?\s*=\s*(\[.*\]);?', content, re.DOTALL)
    if not match:
        match = re.search(r'_mcqs.*?\s*=\s*(\[.*\]);?', content, re.DOTALL)
    if not match:
        match = re.search(r'=\s*(\[.*\]);?', content, re.DOTALL)
        
    if not match:
        return []
    
    array_str = match.group(1)
    
    # Split into individual objects { ... } using brace matching
    obj_texts = split_objects(array_str)
    
    extracted = []
    for obj_text in obj_texts:
        # 1. Extract Question
        q_m = re.search(r'question:\s*["\'`](.*?)["\'`],?$', obj_text, re.MULTILINE)
        if not q_m:
            q_m = re.search(r'question:\s*["\'`](.*?)["\'`]', obj_text)
            
        if not q_m: continue
        question = q_m.group(1).strip()
        
        # 2. Extract Options
        opt_m = re.search(r'options:\s*\[(.*?)\]', obj_text, re.DOTALL)
        options = []
        if opt_m:
            opts_text = opt_m.group(1)
            # Check if it's an array of objects [{"id":"a", "text":"..."}, ...]
            if '{' in opts_text:
                text_matches = re.findall(r'["\']text["\']:\s*["\'`](.*?)["\'`]', opts_text)
                options = [t.strip() for t in text_matches]
            else:
                # Simple array of strings
                options = re.findall(r'["\'`](.*?)["\'`]', opts_text)
        
        # 3. Extract Correct Answer
        ca_m = re.search(r'correctAnswer:\s*["\']?([^"\',]+)["\']?', obj_text)
        correct_idx = 0
        if ca_m:
            val = ca_m.group(1).strip().strip('"\'')
            if val.isdigit():
                correct_idx = int(val)
            else:
                val = val.lower()
                if val in 'abcd':
                    correct_idx = ord(val) - ord('a')
                else:
                    correct_idx = 0
                    
        # 4. Difficulty
        diff_m = re.search(r'difficulty:\s*["\']?([^"\',]+)["\']?', obj_text)
        difficulty = diff_m.group(1).strip().lower() if diff_m else "medium"
        
        extracted.append({
            "question": question,
            "options": options,
            "correct_answer": correct_idx,
            "difficulty": difficulty,
            "subject": subject,
            "category": "UPSC"
        })
        
    return extracted

all_questions = []

history_map = {
    "Modern History": r"D:\Development\EduEcosystem\frontend\src\components\batch1\history\data\modern",
    "Medieval History": r"D:\Development\EduEcosystem\frontend\src\components\batch1\history\data\medieval",
    "Ancient History": r"D:\Development\EduEcosystem\frontend\src\components\batch1\history\data\ancient"
}

for subject, folder in history_map.items():
    if not os.path.exists(folder):
        print(f"WARNING: {folder} not found")
        continue
    file_count = 0
    q_count = 0
    for root, dirs, files in os.walk(folder):
        for f in files:
            if f.endswith('.ts') and f not in ['content-registry.ts', 'history-chapters.ts', 'index.ts', 'content.ts']:
                path = os.path.join(root, f)
                qs = extract_mcqs_universal(path, subject)
                all_questions.extend(qs)
                file_count += 1
                q_count += len(qs)
    print(f"{subject}: {file_count} files -> {q_count} questions")

output_path = r"D:\Development\EduEcosystem\backend\history_mcqs_extracted.json"
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(all_questions, f, ensure_ascii=False, indent=2)

print(f"\nTOTAL EXTRACTED: {len(all_questions)}")

# Show breakdown by subject
from collections import Counter
counts = Counter(q['subject'] for q in all_questions)
for subject, count in sorted(counts.items()):
    print(f"{subject}: {count}")
