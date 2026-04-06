from pathlib import Path
lines = [l.strip() for l in Path(r'D:\Graphology\Paid Students\Mians ready Dec 2025\Morning Batch\prelims\History\History_MCQs.docx\History_MCQs.docx.txt').read_text(encoding='utf-8-sig', errors='replace').splitlines() if l.strip()]
for i in range(368, 400):
    print(f'[{i}]: {lines[i]}')
