import os
import re

base_path = r"D:\Graphology\Master Software\Eduecosystem\frontend\src\components"
# Double check the directory names
raw_dir = os.path.join(base_path, "batch1", "polity", "data", "raw_mcqs")
integrated_dir = os.path.join(base_path, "batch1-1", "polity", "data", "chapters")

print(f"Checking Raw Dir: {raw_dir}")
print(f"Exists: {os.path.exists(raw_dir)}")

if os.path.exists(raw_dir):
    files = os.listdir(raw_dir)
    print(f"Files found in raw_dir: {len(files)}")
    # Print some examples
    print(f"Sample files: {files[:10]}")

report = []

for i in range(1, 96):
    row = {"chapter": i, "int_l1": 0, "int_l2": 0, "int_l3": 0, "raw_l1": 0, "raw_l2": 0, "raw_l3": 0}
    
    # Check Integrated
    int_file = os.path.join(integrated_dir, f"chapter-{i}.ts")
    if os.path.exists(int_file):
        with open(int_file, 'r', encoding='utf-8') as f:
            content = f.read()
            row["int_l1"] = len(re.findall(r"question:", content)) # Simple count for now
    
    # Check Raw
    for level in [1, 2, 3]:
        raw_file = os.path.join(raw_dir, f"l{level}-ch{i}.ts")
        if os.path.exists(raw_file):
            with open(raw_file, 'r', encoding='utf-8') as f:
                content = f.read()
                row[f"raw_l{level}"] = len(re.findall(r"question:", content))
        
        # Check split files
        if level == 3:
            for part in ["p1", "p2"]:
                split_file = os.path.join(raw_dir, f"l3-ch{i}-{part}.ts")
                if os.path.exists(split_file):
                    with open(split_file, 'r', encoding='utf-8') as f:
                        row["raw_l3"] += len(re.findall(r"question:", f.read()))

    # Print if found
    grand = row["int_l1"] + row["raw_l1"] + row["raw_l2"] + row["raw_l3"]
    if grand > 0:
         print(f"Ch {i}: {row}")
