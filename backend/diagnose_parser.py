import os, re
import sys

# Set UTF-8 encoding for stdout
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

folder = r"D:\Development\EduEcosystem\frontend\src\components\batch1\history\data\modern"
zero_files = []
nonzero_files = []

for root, dirs, files in os.walk(folder):
    for f in files:
        if not f.endswith('.ts'):
            continue
        path = os.path.join(root, f)
        with open(path, 'r', encoding='utf-8') as fh:
            content = fh.read()
        
        # Count question occurrences
        count = len(re.findall(r'question\s*:', content))
        if count == 0:
            zero_files.append((f, len(content)))
        else:
            nonzero_files.append((f, count, len(content)))

print(f"Files with questions found: {len(nonzero_files)}")
print(f"Files with 0 questions: {len(zero_files)}")
print(f"\nFirst 3 files WITH questions:")
for f, count, size in nonzero_files[:3]:
    print(f"  {f}: {count} questions, {size} bytes")

print(f"\nFirst 3 files with 0 questions:")
for f, size in zero_files[:3]:
    print(f"  {f}: {size} bytes")
    # Show first 30 lines
    path = os.path.join(folder, f)
    try:
        with open(path, 'r', encoding='utf-8') as fh:
            lines = fh.readlines()[:30]
        print(f"  First 30 lines:")
        for i, line in enumerate(lines):
            print(f"    {i+1}: {line.rstrip()}")
    except Exception as e:
        print(f"    Error reading file: {e}")
    print()
