import os
import re

base_path = r"D:\Development\EduEcosystem\frontend\src\components"
raw_dir = os.path.join(base_path, "batch1", "polity", "data", "raw_mcqs")
integrated_dir = os.path.join(base_path, "batch1-1", "polity", "data", "chapters")

report = []

for i in range(1, 96):
    row = {"chapter": i, "int_l1": 0, "int_l2": 0, "int_l3": 0, "raw_l1": 0, "raw_l2": 0, "raw_l3": 0, "ca_q": []}
    
    # 1. Check Integrated
    int_file = os.path.join(integrated_dir, f"chapter-{i}.ts")
    if os.path.exists(int_file):
        with open(int_file, 'r', encoding='utf-8') as f:
            content = f.read()
            # Count per level section
            l1_match = re.search(r"const LEVEL_1_QUESTIONS = \[(.*?)\];", content, re.DOTALL)
            l2_match = re.search(r"const LEVEL_2_QUESTIONS = \[(.*?)\];", content, re.DOTALL)
            l3_match = re.search(r"const LEVEL_3_QUESTIONS = \[(.*?)\];", content, re.DOTALL)
            
            if l1_match: row["int_l1"] = len(re.findall(r"question:", l1_match.group(1)))
            if l2_match: row["int_l2"] = len(re.findall(r"question:", l2_match.group(1)))
            if l3_match: 
                l3_text = l3_match.group(1)
                row["int_l3"] = len(re.findall(r"question:", l3_text))
                # Search for CA keywords in L3
                ca_matches = re.findall(r'question: "(.*?(?:2023|2024|2025|Act|Recent|Current|Amendment).*?)"', l3_text , re.IGNORECASE)
                row["ca_q"].extend(ca_matches)

    # 2. Check Raw
    for level in [1, 2, 3]:
        raw_file = os.path.join(raw_dir, f"l{level}-ch{i}.ts")
        if os.path.exists(raw_file):
            with open(raw_file, 'r', encoding='utf-8') as f:
                content = f.read()
                count = len(re.findall(r"question:", content))
                row[f"raw_l{level}"] = count
                if level == 3:
                     ca_matches = re.findall(r'question: "(.*?(?:2023|2024|2025|Act|Recent|Current|Amendment).*?)"', content, re.IGNORECASE)
                     row["ca_q"].extend(ca_matches)
        
        # Some L3 files are split into p1, p2
        if level == 3:
            for part in [1, 2]:
                split_file = os.path.join(raw_dir, f"l3-ch{i}-p{part}.ts")
                if os.path.exists(split_file):
                    with open(split_file, 'r', encoding='utf-8') as f:
                        content = f.read()
                        count = len(re.findall(r"question:", content))
                        row[f"raw_l3"] += count
                        ca_matches = re.findall(r'question: "(.*?(?:2023|2024|2025|Act|Recent|Current|Amendment).*?)"', content, re.IGNORECASE)
                        row["ca_q"].extend(ca_matches)

    report.append(row)

# Generate Final Report Table
print("| Ch | Int L1 | Int L2 | Int L3 | Raw L1 | Raw L2 | Raw L3 | Total | Status | CA Qs |")
print("|----|--------|--------|--------|--------|--------|--------|-------|--------|-------|")
for r in report:
    total_l1 = max(r["int_l1"], r["raw_l1"])
    total_l2 = max(r["int_l2"], r["raw_l2"])
    total_l3 = max(r["int_l3"], r["raw_l3"])
    grand_total = total_l1 + total_l2 + total_l3
    
    status = "✅" if total_l1 >= 30 and total_l2 >= 30 and total_l3 >= 30 else "❌"
    if grand_total == 0: status = "EMPTY"
    
    ca_status = len(r["ca_q"])
    
    print(f"| {r['chapter']} | {r['int_l1']} | {r['int_l2']} | {r['int_l3']} | {r['raw_l1']} | {r['raw_l2']} | {r['raw_l3']} | {grand_total} | {status} | {ca_status} |")
