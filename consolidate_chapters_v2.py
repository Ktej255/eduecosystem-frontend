import os
import re
import json

base_path = r"D:\Graphology\Master Software\Eduecosystem\frontend\src\components"
raw_dir = os.path.join(base_path, "batch1", "polity", "data", "raw_mcqs")
integrated_dir = os.path.join(base_path, "batch1-1", "polity", "data", "chapters")
index_file = os.path.join(base_path, "batch1-1", "polity", "data", "chapter-level-index.ts")

# Chapters that are confirmed to have 30/30/30
chapters_to_integrate = [65, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95]

def extract_questions(file_path, level_id, ch_num):
    if not os.path.exists(file_path):
        return []
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Matches individual MCQ blocks
    matches = re.findall(r'\{(?:[^{}]|\{[^{}]*\})*\}', content, re.DOTALL)
    
    questions = []
    for m in matches:
        # Improved regex for JSON/TS object properties
        id_m = re.search(r'["\']?id["\']?:\s*["\']?([^"\',]+)["\']?', m)
        
        # Capture question text (either "question" or "text")
        q_m = re.search(r'["\']?(?:question|text)["\']?:\s*["\'](.*?)(?<!\\)["\']', m, re.DOTALL)
        
        opt_m = re.search(r'["\']?options["\']?:\s*\[(.*?)\]', m, re.DOTALL)
        
        # Capture answer (either correctAnswerIndex or correctAnswer)
        ans_m = re.search(r'["\']?(?:correctAnswerIndex|correctAnswer)["\']?:\s*(\d+)', m)
        
        exp_m = re.search(r'["\']?explanation["\']?:\s*["\'](.*?)(?<!\\)["\']', m, re.DOTALL)

        if id_m and q_m and opt_m and ans_m:
            q_text = q_m.group(1).replace('\\"', '"').replace('\\n', '\n').strip()
            
            # Options extraction
            opts_raw = opt_m.group(1)
            opts = re.findall(r'["\'](.*?)(?<!\\)["\']', opts_raw, re.DOTALL)
            
            ans_idx = int(ans_m.group(1))
            exp = exp_m.group(1).replace('\\"', '"').replace('\\n', '\n').strip() if exp_m else ""

            questions.append({
                "id": f"ch{ch_num}-l{level_id}-q{len(questions)+1}",
                "question": q_text,
                "options": opts,
                "correctAnswerIndex": ans_idx,
                "explanation": exp
            })
    return questions

for ch in chapters_to_integrate:
    l1 = extract_questions(os.path.join(raw_dir, f"l1-ch{ch}.ts"), 1, ch)
    l2 = extract_questions(os.path.join(raw_dir, f"l2-ch{ch}.ts"), 2, ch)
    l3 = extract_questions(os.path.join(raw_dir, f"l3-ch{ch}.ts"), 3, ch)
    
    # Check for split files for L3
    if len(l3) < 30:
        for p in ["p1", "p2"]:
            split_file = os.path.join(raw_dir, f"l3-ch{ch}-p{part}.ts" if 'l3-ch' in raw_dir else f"l3-ch{ch}-{p}.ts")
            # Wait, the naming is l3-ch39-p1.ts in my list_dir
            split_file = os.path.join(raw_dir, f"l3-ch{ch}-{p}.ts")
            if os.path.exists(split_file):
                l3.extend(extract_questions(split_file, 3, ch))

    output_content = f"""import {{ ChapterLevelData }} from "../level-types";

const LEVEL_1_QUESTIONS = {json.dumps(l1, indent=4)};

const LEVEL_2_QUESTIONS = {json.dumps(l2, indent=4)};

const LEVEL_3_QUESTIONS = {json.dumps(l3, indent=4)};

export const CHAPTER_{ch}_LEVELS: ChapterLevelData = {{
    topicId: {ch},
    levels: [
        {{
            levelId: 1,
            title: "Text-Book Stickler",
            description: "Direct Recall - Strictly Chapter {ch}",
            questions: LEVEL_1_QUESTIONS
        }},
        {{
            levelId: 2,
            title: "Conceptual Bridge",
            description: "Applied Knowledge & Comparative Analysis",
            questions: LEVEL_2_QUESTIONS
        }},
        {{
            levelId: 3,
            title: "UPSC Simulation 2026",
            description: "Integrated Context & Current Affairs",
            questions: LEVEL_3_QUESTIONS
        }}
    ]
}};
"""
    dest_path = os.path.join(integrated_dir, f"chapter-{ch}.ts")
    with open(dest_path, 'w', encoding='utf-8') as f:
        f.write(output_content)
    print(f"Integrated Chapter {ch}: L1={len(l1)}, L2={len(l2)}, L3={len(l3)}")

# Handle Index Update separately to avoid accidental deletion
print("DATA CONSOLIDATION FINISHED.")
