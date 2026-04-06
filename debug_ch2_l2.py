"""Show lines around Ch2 L2 Q1 to find opts."""
from pathlib import Path
import re

m = Path(r"D:\Graphology\Paid Students\Mians ready Dec 2025\Morning Batch\prelims\History\History_MCQs.docx\History_MCQs.docx.txt")
lines = [l.strip() for l in m.read_text(encoding="utf-8-sig", errors="replace").splitlines() if l.strip()]

# Find first "LEVEL 2" marker after "Chapter 2 History"
ch2_idx = next(i for i, l in enumerate(lines) if l.startswith("Chapter 2 History"))
print(f"Ch2 at index {ch2_idx}: {lines[ch2_idx]}")

# Find LEVEL 2 after ch2
lv2_idx = None
for i in range(ch2_idx, ch2_idx + 200):
    if 'LEVEL 2' in lines[i].upper():
        lv2_idx = i
        print(f"LEVEL 2 at index {i}: {lines[i][:70]}")
        break

if lv2_idx:
    print("\nLines around LEVEL 2 (idx lv2_idx to lv2_idx+10):")
    for i in range(lv2_idx, lv2_idx + 12):
        print(f"  [{i:04d}]: {lines[i][:90]}")
