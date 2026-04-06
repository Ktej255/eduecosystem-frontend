"""
Analyze the 4 master MCQ source files. Output to file to avoid encoding issues.
"""
import re, sys, io
from pathlib import Path
from collections import defaultdict

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

FILES = {
    "Medieval History": Path(r"D:\Graphology\Paid Students\Mians ready Dec 2025\Morning Batch\prelims\History\Medieval History\Master Mcq Medieval History.txt"),
    "Ancient History":  Path(r"D:\Graphology\Paid Students\Mians ready Dec 2025\Morning Batch\prelims\History\Ancient History\Ancient History MCQ Master Sheet.txt"),
    "Polity":           Path(r"D:\Graphology\Paid Students\Mians ready Dec 2025\Morning Batch\prelims\Polity\MCQ\Polity MCQ Master Sheet Chapter 1 to 80.txt"),
    "Modern History":   Path(r"D:\Graphology\Paid Students\Mians ready Dec 2025\Morning Batch\prelims\History\History_MCQs.docx\History_MCQs.docx.txt"),
}

CHAPTER_PAT = re.compile(r'^Chapter\s+(\d+)', re.IGNORECASE | re.MULTILINE)
LEVEL_PAT   = re.compile(r'LEVEL\s*(\d)|Level\s+(\d)', re.IGNORECASE)
Q_PAT       = re.compile(r'^\s*(?:Q\s*(\d+)[\.)]|(\d{1,3})[\.)])\s+\S')
OPTION_PAT  = re.compile(r'^\s*[(\[]*\s*[a-dA-D][)\]\.]\s+\S')
ANSWER_PAT  = re.compile(r'(?:Answer|Ans)\s*[:\-]', re.IGNORECASE)

print("=" * 70)
for subject, fpath in FILES.items():
    if not fpath.exists():
        print(f"\nNOT FOUND: {fpath}")
        continue

    text = fpath.read_text(encoding="utf-8", errors="replace")
    # Remove BOM and non-printable chars
    text = text.replace('\ufeff', '').replace('\u200b', '')
    lines = text.splitlines()

    chapters_found = sorted(set(int(m.group(1)) for m in CHAPTER_PAT.finditer(text)))
    levels_found   = sorted(set(int(m.group(1) or m.group(2)) for m in LEVEL_PAT.finditer(text)))

    chapter_q_count = defaultdict(int)
    chapter_level_count = defaultdict(lambda: defaultdict(int))
    current_ch = 0
    current_level = 0

    for line in lines:
        cm = CHAPTER_PAT.match(line.strip())
        lm = LEVEL_PAT.search(line)
        if cm:
            current_ch = int(cm.group(1))
        if lm:
            current_level = int(lm.group(1) or lm.group(2))
        if Q_PAT.match(line):
            chapter_q_count[current_ch] += 1
            chapter_level_count[current_ch][current_level] += 1

    total_q = sum(chapter_q_count.values())

    print(f"\n{'='*70}")
    print(f"SUBJECT: {subject}")
    print(f"File:    {fpath.name}")
    print(f"Size:    {len(text)//1024} KB | Lines: {len(lines)}")
    print(f"Chapters: {chapters_found[:20]}")
    print(f"Levels detected: {levels_found}")
    print(f"Total questions parsed: {total_q}")
    print(f"\nPer-chapter breakdown:")
    print(f"  {'Ch':>4} | {'Total':>6} | {'L1':>5} | {'L2':>5} | {'L3':>5}")
    print(f"  {'-'*35}")
    for ch in sorted(chapter_q_count.keys()):
        lc = chapter_level_count[ch]
        total = chapter_q_count[ch]
        l1 = lc.get(1,0)
        l2 = lc.get(2,0)
        l3 = lc.get(3,0)
        flag = " <-- INCOMPLETE" if total < 90 else ""
        print(f"  {ch:>4} | {total:>6} | {l1:>5} | {l2:>5} | {l3:>5}{flag}")

    # Sample lines (ASCII-safe only)
    print(f"\nFormat sample (first 15 non-empty lines, ASCII-safe):")
    shown = 0
    for line in lines:
        stripped = line.strip()
        if stripped and shown < 15:
            safe = stripped.encode('ascii', errors='replace').decode('ascii')
            print(f"  {safe[:110]}")
            shown += 1

print(f"\n{'='*70}")
print("DONE")
