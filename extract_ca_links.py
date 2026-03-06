import os
import re
import json

base_path = r"D:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch1-1\polity\data\chapters"
chapters = [65, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95]

ca_map = []

keywords = [
    "2023", "2024", "2025", "2026", 
    "Amendment", "Case", "Verdict", "Supreme Court", "Recent", 
    "Bill", "Act", "Committee", "Report", "Commission"
]

for ch in chapters:
    path = os.path.join(base_path, f"chapter-{ch}.ts")
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
            # Find Level 3 section
            l3_match = re.search(r"LEVEL_3_QUESTIONS = \[(.*?)\];", content, re.DOTALL)
            if l3_match:
                l3_text = l3_match.group(1)
                # Split by questions
                q_blocks = re.findall(r'\{(?:[^{}]|\{[^{}]*\})*\}', l3_text, re.DOTALL)
                for q in q_blocks:
                    has_kw = any(kw.lower() in q.lower() for kw in keywords)
                    if has_kw:
                        # Extract question text
                        q_text_m = re.search(r'"question": "(.*?)"', q, re.DOTALL)
                        if q_text_m:
                            ca_map.append({
                                "chapter": ch,
                                "question": q_text_m.group(1)
                            })

with open("ca_links_to_update.json", "w") as f:
    json.dump(ca_map, f, indent=4)
print(f"Found {len(ca_map)} potential CA-linked questions.")
