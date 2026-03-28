import os
import re
import json

base_path = r"D:\Development\EduEcosystem\frontend\src\components"
raw_dir = os.path.join(base_path, "batch1", "polity", "data", "raw_mcqs")
integrated_dir = os.path.join(base_path, "batch1-1", "polity", "data", "chapters")

report = []

for i in range(1, 96):
    row = {"chapter": i, "int_l1": 0, "int_l2": 0, "int_l3": 0, "raw_l1": 0, "raw_l2": 0, "raw_l3": 0, "ca_qs": 0}
    
    # Check Integrated
    int_file = os.path.join(integrated_dir, f"chapter-{i}.ts")
    if os.path.exists(int_file):
        with open(int_file, 'r', encoding='utf-8') as f:
            content = f.read()
            row["int_l1"] = len(re.findall(r"id: \"ch\d+-l1-q", content))
            row["int_l2"] = len(re.findall(r"id: \"ch\d+-l2-q", content))
            row["int_l3"] = len(re.findall(r"id: \"ch\d+-l3-q", content))
            row["ca_qs"] += len(re.findall(r"(?:2023|2024|2025|Act|Recent|Current|Amendment)", content, re.IGNORECASE))

    # Check Raw
    for level in [1, 2, 3]:
        raw_file = os.path.join(raw_dir, f"l{level}-ch{i}.ts")
        if os.path.exists(raw_file):
            with open(raw_file, 'r', encoding='utf-8') as f:
                content = f.read()
                count = len(re.findall(r"question:", content))
                row[f"raw_l{level}"] = count
                if level == 3:
                    row["ca_qs"] += len(re.findall(r"(?:2023|2024|2025|Act|Recent|Current|Amendment)", content, re.IGNORECASE))
        
        # Check split files
        if level == 3:
            for part in ["p1", "p2"]:
                split_file = os.path.join(raw_dir, f"l3-ch{i}-{part}.ts")
                if os.path.exists(split_file):
                    with open(split_file, 'r', encoding='utf-8') as f:
                        content = f.read()
                        row["raw_l3"] += len(re.findall(r"question:", content))
                        row["ca_qs"] += len(re.findall(r"(?:2023|2024|2025|Act|Recent|Current|Amendment)", content, re.IGNORECASE))

    report.append(row)

with open("audit_report.json", "w") as f:
    json.dump(report, f, indent=4)
