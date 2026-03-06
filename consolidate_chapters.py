import os
import re

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
    
    # Very crude extraction - find blocks between { and }
    # A better way is to find the array and parse it, but for a script, 
    # we can try to find the objects.
    matches = re.findall(r'\{(?:[^{}]|\{[^{}]*\})*\}', content, re.DOTALL)
    
    questions = []
    for m in matches:
        # Extract fields
        id_m = re.search(r'["\']?id["\']?:\s*["\']?([^"\',]+)["\']?', m)
        q_m = re.search(r'["\']?(?:question|text)["\']?:\s*["\']?(.*?)["\']?,\s*["\']?options', m, re.DOTALL)
        opt_m = re.search(r'["\']?options["\']?:\s*\[(.*?)\]', m, re.DOTALL)
        ans_m = re.search(r'["\']?(?:correctAnswerIndex|correctAnswer)["\']?:\s*(\d+)', m)
        exp_m = re.search(r'["\']?explanation["\']?:\s*["\']?(.*?)["\']?(?:,|\n|\})', m, re.DOTALL)

        if id_m and q_m and opt_m and ans_m:
            q_text = q_m.group(1).replace('\\"', '"').strip()
            # Clean up trailing quotes if captured by regex quirk
            if q_text.endswith('"') and not q_text.startswith('"'): q_text = q_text[:-1]
            
            opts = re.findall(r'["\'](.*?)["\']', opt_m.group(1))
            ans_idx = int(ans_m.group(1))
            exp = exp_m.group(1).replace('\\"', '"').strip() if exp_m else ""
            if exp.endswith('"') and not exp.startswith('"'): exp = exp[:-1]

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
    print(f"Integrated Chapter {ch}")

# Update Index
with open(index_file, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_imports = []
new_entries = []
for ch in sorted(chapters_to_integrate):
    new_imports.append(f'import {{ CHAPTER_{ch}_LEVELS }} from "./chapters/chapter-{ch}";\n')
    new_entries.append(f'    {ch}: CHAPTER_{ch}_LEVELS,\n')

# Find where to insert
# (This part is tricky, let's just rewrite the file based on the template)
print("Index update needs manual care or a solid rewrite.")
