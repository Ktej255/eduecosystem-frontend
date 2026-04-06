"""Trace exactly what parse_modern does at Ch2."""
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
Q_PAT   = re.compile(r'^Q\s*(\d{1,3})[.)] (.+)', re.I)
IS_Q    = re.compile(r'^Q\s*\d{1,3}[.)]', re.I)
IS_ANS  = re.compile(r'(?:\*\s*)?Answer\s*[:\-]', re.I)
POPT    = re.compile(r'\(([abcd])\)\s+([^(]+)', re.I)
ANS_MOD = re.compile(r'(?:\*\s*)?Answer\s*[:\-]?\s*\(?([a-d])\)?', re.I)

ch, lvl = 0, 1
recs_debug = []

for i, (ri, s) in enumerate(lines):
    cm = CH_PAT.match(s)
    if cm:
        old_ch = ch
        ch = int(cm.group(1))
        if ch >= 2:
            print(f"[i={i}] ch {old_ch}->{ch}: {s[:60]}")
        continue
    lm = LV_PAT.search(s)
    if lm and not IS_Q.match(s) and not IS_ANS.match(s) and not s.startswith('*'):
        old_lvl = lvl
        lvl = int(lm.group(1))
        if ch == 2:
            print(f"[i={i}] ch=2 lvl {old_lvl}->{lvl}: {s[:60]}")
        continue
    qm = Q_PAT.match(s)
    if not qm or not ch: continue
    body = qm.group(2).strip()
    opt_start = -1
    for mo in re.finditer(r'\([abcd]\)', body, re.I):
        if mo.group(0).lower() == '(a)':
            opt_start = mo.start(); break
    if opt_start > 0:
        opts = [o[1].strip() for o in POPT.findall(body[opt_start:]) if o[0].lower() in 'abcd']
    else:
        opts = []
        combined = body
        REAL_Q = re.compile(r'^Q\s*\d{1,3}[.)]', re.I)
        for j in range(i+1, min(i+6, len(lines))):
            _, nxt = lines[j]
            if IS_ANS.match(nxt) or REAL_Q.match(nxt): break
            combined += ' ' + nxt
            opt_start2 = -1
            for mo in re.finditer(r'\([abcd]\)', combined, re.I):
                if mo.group(0).lower() == '(a)': opt_start2 = mo.start(); break
            if opt_start2 >= 0:
                opts = [o[1].strip() for o in POPT.findall(combined[opt_start2:]) if o[0].lower() in 'abcd']
                if len(opts) >= 2: break

    if ch == 2 and lvl == 2:
        ans = None
        for j in range(i+1, min(i+8, len(lines))):
            _, nxt = lines[j]
            am = ANS_MOD.match(nxt)
            if am: ans = am.group(1); break
            if IS_Q.match(nxt): break
        valid = len(body) >= 10 and len(opts) >= 2
        recs_debug.append((i, lvl, valid, len(opts), body[:50]))

print(f"\nCh2 L2 records found: {len(recs_debug)}")
print(f"Ch2 L2 valid (opts>=2): {sum(1 for r in recs_debug if r[2])}")
print(f"Ch2 L2 no opts: {sum(1 for r in recs_debug if not r[2])}")
print("\nFirst 5 Ch2 L2 entries:")
for r in recs_debug[:5]:
    print(f"  i={r[0]} valid={r[2]} opts_count={r[3]}: {r[4]}")
