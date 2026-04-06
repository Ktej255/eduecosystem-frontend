"""Find the REAL reason opts=[] for 4272 questions."""
from pathlib import Path
import re

m = Path(r"D:\Graphology\Paid Students\Mians ready Dec 2025\Morning Batch\prelims\History\History_MCQs.docx\History_MCQs.docx.txt")
text = m.read_text(encoding="utf-8-sig", errors="replace")
for old, new in [('\u2019',"'"), ('\u2013','-'), ('\u2018',"'"), ('\u2014','-')]:
    text = text.replace(old, new)
raw = text.splitlines()
lines = [(i, l.strip()) for i, l in enumerate(raw) if l.strip()]

CH_PAT = re.compile(r'^Chapter\s+(\d+)\b', re.I)
LV_PAT = re.compile(r'(?:LEVEL|Level)\s*(\d)', re.I)
Q_PAT  = re.compile(r'^(?:Q\s*)?(\d{1,3})[.)] (.+)', re.I)
POPT   = re.compile(r'\(([abcd])\)\s+([^(]+)', re.I)
IS_Q   = re.compile(r'^(?:Q\s*)?\d{1,3}[.)]', re.I)
IS_ANS = re.compile(r'(?:\*\s*)?Answer\s*[:\-]', re.I)

ch, lvl = 0, 1
no_opts_samples = []
has_opts_at_a = []

for i, (ri, s) in enumerate(lines):
    cm = CH_PAT.match(s)
    if cm: ch = int(cm.group(1)); continue
    lm = LV_PAT.search(s)
    if lm and not IS_Q.match(s) and not IS_ANS.match(s) and not s.startswith('*'):
        lvl = int(lm.group(1)); continue
    qm = Q_PAT.match(s)
    if not qm or not ch: continue
    body = qm.group(2).strip()

    # Count lines with (a) pattern
    has_a = bool(re.search(r'\(a\)', body, re.I))
    has_A_upper = bool(re.search(r'\(A\)', body))

    opt_start = -1
    for mo in re.finditer(r'\([abcd]\)', body, re.I):
        if mo.group(0).lower() == '(a)':
            opt_start = mo.start(); break

    if opt_start > 0:
        opts = [o[1].strip() for o in POPT.findall(body[opt_start:]) if o[0].lower() in 'abcd']
        if len(opts) >= 2:
            pass  # valid
        else:
            no_opts_samples.append((ch, lvl, f"has_opts@{opt_start} but POPT={opts}", body[:80]))
    else:
        if has_a or has_A_upper:
            has_opts_at_a.append((ch, lvl, body[:80]))
        else:
            no_opts_samples.append((ch, lvl, "no (a) found", body[:80]))

print(f"Samples with (a) but opt_start==-1 (first 5):")
for x in has_opts_at_a[:5]:
    print(f"  ch={x[0]} l={x[1]}: {x[2]}")

print(f"\nSamples with bad opts (first 5):")
for x in no_opts_samples[:5]:
    print(f"  ch={x[0]} l={x[1]} [{x[2]}]: {x[3]}")

print(f"\nTotal has (a) but opt_start==-1: {len(has_opts_at_a)}")
print(f"Total no opts samples: {len(no_opts_samples)}")

# Show distribution of opt_start=-1 reasons
no_a_count = sum(1 for x in no_opts_samples if 'no (a)' in x[2])
bad_popt = sum(1 for x in no_opts_samples if 'POPT' in x[2])
print(f"  No (a) at all: {no_a_count}")
print(f"  Has (a) but POPT failed: {bad_popt}")
