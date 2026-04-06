"""Trace exactly what happens at Ch2 processing in parse_modern."""
from pathlib import Path
import re

m = Path(r"D:\Graphology\Paid Students\Mians ready Dec 2025\Morning Batch\prelims\History\History_MCQs.docx\History_MCQs.docx.txt")
text = m.read_text(encoding="utf-8-sig", errors="replace")
for old, new in [('\u2019',"'"), ('\u2013','-'), ('\u2018',"'"), ('\u2014','-')]:
    text = text.replace(old, new)
raw = text.splitlines()
lines = [(i, l.strip()) for i, l in enumerate(raw) if l.strip()]

CH_PAT  = re.compile(r'^Chapter\s+(\d+)\b', re.I)
LV_PAT  = re.compile(r'(?:LEVEL|Level)\s*(\d)', re.I)
Q_PAT   = re.compile(r'^(?:Q\s*)?(\d{1,3})[.)] (.+)', re.I)
REAL_Q  = re.compile(r'^Q\s*\d{1,3}[.)]', re.I)
IS_ANS  = re.compile(r'(?:\*\s*)?Answer\s*[:\-]', re.I)

ch, lvl = 0, 1
q_count_per_ch = {}
ch_events = []

for i, (ri, s) in enumerate(lines):
    cm = CH_PAT.match(s)
    if cm:
        ch = int(cm.group(1))
        ch_events.append((i, f"CH={ch}", s[:60]))
        continue
    lm = LV_PAT.search(s)
    if lm and not Q_PAT.match(s) and not IS_ANS.match(s) and not s.startswith('*'):
        lvl = int(lm.group(1))
        ch_events.append((i, f"LV={lvl}", s[:60]))
        continue
    if REAL_Q.match(s) and ch:  # Only actual Q-prefixed questions
        q_count_per_ch[(ch, lvl)] = q_count_per_ch.get((ch, lvl), 0) + 1

print("Chapter/Level events (first 25):")
for ev in ch_events[:25]:
    print(f"  line={ev[0]:04d} [{ev[1]}]: {ev[2]}")

print("\nPer-chapter Q counts (Q-prefixed only):")
from collections import defaultdict
bd = defaultdict(lambda: defaultdict(int))
for (c, l), cnt in q_count_per_ch.items():
    bd[c][l] += cnt
for c in sorted(bd)[:10]:
    lc = bd[c]
    total = sum(lc.values())
    print(f"  Ch{c:>2}: L1={lc[1]:>4} L2={lc[2]:>4} L3={lc[3]:>4} Total={total:>5}")
print(f"Grand total Q-prefixed: {sum(q_count_per_ch.values())}")
