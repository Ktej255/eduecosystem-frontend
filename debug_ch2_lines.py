"""Show exact lines 367-395 with full content."""
from pathlib import Path
import re, json

m = Path(r"D:\Graphology\Paid Students\Mians ready Dec 2025\Morning Batch\prelims\History\History_MCQs.docx\History_MCQs.docx.txt")
lines = [l.strip() for l in m.read_text(encoding="utf-8-sig", errors="replace").splitlines() if l.strip()]

result = []
for i in range(367, 400):
    if i < len(lines):
        result.append(f"[{i:04d}]: {lines[i]}")

Path('ch2_l2_lines.txt').write_text('\n'.join(result), encoding='utf-8')
for line in result:
    print(line)
