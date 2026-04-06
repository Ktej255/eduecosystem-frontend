"""Debug script to find why Modern History parse is stuck at 119."""
from pathlib import Path
import re
from collections import defaultdict

m = Path(r"D:\Graphology\Paid Students\Mians ready Dec 2025\Morning Batch\prelims\History\History_MCQs.docx\History_MCQs.docx.txt")
text = m.read_text(encoding="utf-8-sig", errors="replace")
for old, new in [('\u2019',"'"), ('\u2013','-'), ('\u2018',"'"), ('\u2014','-')]:
    text = text.replace(old, new)
raw = text.splitlines()
lines = [(i, l.strip()) for i, l in enumerate(raw) if l.strip()]

CH_PAT = re.compile(r'^Chapter\s+(\d+)\b', re.I)
LV_PAT = re.compile(r'(?:LEVEL|Level)\s*(\d)', re.I)
Q_PAT  = re.compile(r'^(?:Q\s*)?(\d{1,3})[.)] (.+)', re.I)
ANS_MOD= re.compile(r'(?:\*\s*)?Answer\s*[:\-]?\s*\(?([a-d])\)?', re.I)
# FIXED: greedy non-capturing, no literal \$
POPT   = re.compile(r'\(([abcd])\)\s+([^(]+)', re.I)
IS_Q   = re.compile(r'^(?:Q\s*)?\d{1,3}[.)]', re.I)
IS_ANS = re.compile(r'(?:\*\s*)?Answer\s*[:\-]', re.I)

recs_all = []
recs_valid = []
recs_no_opts = []
ch, lvl = 0, 1

for i, (ri, s) in enumerate(lines):
    cm = CH_PAT.match(s)
    if cm: ch = int(cm.group(1)); continue
    lm = LV_PAT.search(s)
    if lm and not IS_Q.match(s) and not IS_ANS.match(s) and not s.startswith('*'):
        lvl = int(lm.group(1)); continue
    qm = Q_PAT.match(s)
    if not qm or not ch: continue
    body = qm.group(2).strip()
    opt_start = -1
    for mo in re.finditer(r'\([abcd]\)', body, re.I):
        if mo.group(0).lower() == '(a)':
            opt_start = mo.start(); break
    if opt_start > 0:
        qtext = body[:opt_start].strip()
        opts = [o[1].strip().rstrip('(').strip()
                for o in POPT.findall(body[opt_start:]) if o[0].lower() in 'abcd']
    else:
        qtext = body; opts = []
    ans = None
    for j in range(i+1, min(i+5, len(lines))):
        _, nxt = lines[j]
        am = ANS_MOD.match(nxt)
        if am: ans = am.group(1); break
        if IS_Q.match(nxt): break
    recs_all.append((ch, lvl, len(qtext), len(opts), qtext[:40]))
    if len(qtext) >= 10 and ch:
        if len(opts) >= 2:
            recs_valid.append((ch, lvl, qtext[:40]))
        else:
            recs_no_opts.append((ch, lvl, qtext[:40]))

print(f"All matched lines: {len(recs_all)}")
print(f"Valid (opts>=2): {len(recs_valid)}")
print(f"No opts: {len(recs_no_opts)}")

# Per-chapter valid
bd = defaultdict(lambda: defaultdict(int))
for (c, l, _) in recs_valid:
    bd[c][l] += 1
print(f"\nPer-chapter (first 10):")
print(f"  {'Ch':>4} | {'L1':>5} | {'L2':>5} | {'L3':>5} | {'Tot':>5}")
for c in sorted(bd)[:10]:
    lc = bd[c]
    print(f"  {c:>4} | {lc[1]:>5} | {lc[2]:>5} | {lc[3]:>5} | {sum(lc.values()):>5}")
print(f"\nSample no-opts (first 5):")
for x in recs_no_opts[:5]:
    print(f"  ch={x[0]} lvl={x[1]}: {x[2]}")
