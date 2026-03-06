import os
import re
import json

base_path = r"D:\Graphology\Master Software\Eduecosystem\frontend\src\components"
raw_dir = os.path.join(base_path, "batch1", "polity", "data", "raw_mcqs")
integrated_dir = os.path.join(base_path, "batch1-1", "polity", "data", "chapters")

report = []

def count_questions(content):
    # Match "question": or question: or "text": or text: or { id:
    # A reliable way is to count instances of "id": or id: inside the array
    # But some files might have metadata with IDs.
    # Let's use a combination of pattern matching for the question text.
    q_count = len(re.findall(r'"question"|\"text\"|question:|text:', content))
    return q_count

for i in range(1, 96):
    row = {"chapter": i, "int_l1": 0, "int_l2": 0, "int_l3": 0, "raw_l1": 0, "raw_l2": 0, "raw_l3": 0, "ca_qs": 0}
    
    # Check Integrated
    int_file = os.path.join(integrated_dir, f"chapter-{i}.ts")
    if os.path.exists(int_file):
        with open(int_file, 'r', encoding='utf-8') as f:
            content = f.read()
            # Split by LEVEL_X_QUESTIONS
            for level in [1, 2, 3]:
                pattern = rf"const LEVEL_{level}_QUESTIONS = \[(.*?)\];"
                match = re.search(pattern, content, re.DOTALL)
                if match:
                    row[f"int_l1" if level==1 else f"int_l2" if level==2 else f"int_l3"] = count_questions(match.group(1))

            row["ca_qs"] += len(re.findall(r"(?:2023|2024|2025|Act 20|Current Affairs|Amendment)", content, re.IGNORECASE))

    # Check Raw
    for level in [1, 2, 3]:
        raw_file = os.path.join(raw_dir, f"l{level}-ch{i}.ts")
        if os.path.exists(raw_file):
            with open(raw_file, 'r', encoding='utf-8') as f:
                content = f.read()
                row[f"raw_l{level}"] = count_questions(content)
        
        # Check split files
        if level == 3:
            for part in ["p1", "p2"]:
                split_file = os.path.join(raw_dir, f"l3-ch{i}-{part}.ts")
                if os.path.exists(split_file):
                    with open(split_file, 'r', encoding='utf-8') as f:
                        content = f.read()
                        row["raw_l3"] += count_questions(content)

    report.append(row)

with open("audit_report_v2.json", "w") as f:
    json.dump(report, f, indent=4)

# Print a summary table to stdout too
print("| Ch | L1 | L2 | L3 | Total | Status |")
print("|----|----|----|----|-------|--------|")
for r in report:
    l1 = max(r["int_l1"], r["raw_l1"])
    l2 = max(r["int_l2"], r["raw_l2"])
    l3 = max(r["int_l3"], r["raw_l3"])
    total = l1 + l2 + l3
    status = "✅" if l1 >= 30 and l2 >= 30 and l3 >= 30 else "❌"
    if total == 0: status = "EMPTY"
    print(f"| {r['chapter']} | {l1} | {l2} | {l3} | {total} | {status} |")
