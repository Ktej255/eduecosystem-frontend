
import os
import re
import json

CHAPTERS_DIR = r'D:\Graphology\Master Software\Eduecosystem\frontend\src\components\batch1-1\polity\data\chapters'

results = {}
total = 0
full_chapters = 0
empty_chapters = 0
under_chapters = 0

for tid in range(1, 96):
    fpath = os.path.join(CHAPTERS_DIR, f'chapter-{tid}.ts')
    if not os.path.exists(fpath):
        results[tid] = {"total": 0, "l1": 0, "l2": 0, "l3": 0}
        empty_chapters += 1
        continue

    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Count questions per level
    l1_match = re.search(r'const LEVEL_1_QUESTIONS = \[(.*?)\];', content, re.DOTALL)
    l2_match = re.search(r'const LEVEL_2_QUESTIONS = \[(.*?)\];', content, re.DOTALL)
    l3_match = re.search(r'const LEVEL_3_QUESTIONS = \[(.*?)\];', content, re.DOTALL)

    l1 = len(re.findall(r'"question":', l1_match.group(1))) if l1_match else 0
    l2 = len(re.findall(r'"question":', l2_match.group(1))) if l2_match else 0
    l3 = len(re.findall(r'"question":', l3_match.group(1))) if l3_match else 0

    ch_total = l1 + l2 + l3
    total += ch_total
    results[tid] = {"total": ch_total, "l1": l1, "l2": l2, "l3": l3}

    if ch_total >= 90:
        full_chapters += 1
    elif ch_total == 0:
        empty_chapters += 1
    else:
        under_chapters += 1

print(f"\n{'='*70}")
print(f" FINAL AUDIT RESULTS")
print(f"{'='*70}")
print(f" Total Questions: {total} / 8550 expected")
print(f" Gap: {8550 - total} questions missing")
print(f"{'='*70}")
print(f" Full chapters (>=90 Qs): {full_chapters}")
print(f" Under-populated (<90 Qs): {under_chapters}")
print(f" Empty chapters (0 Qs): {empty_chapters}")
print(f"{'='*70}")

print(f"\n--- CHAPTERS WITH <90 QUESTIONS ---")
for tid in range(1, 96):
    r = results[tid]
    if r['total'] < 90:
        print(f"  Topic {tid:2d}: L1={r['l1']:2d}  L2={r['l2']:2d}  L3={r['l3']:2d}  TOTAL={r['total']:3d}")

print(f"\n--- ALL CHAPTERS SUMMARY ---")
for tid in range(1, 96):
    r = results[tid]
    status = "✓" if r['total'] >= 90 else ("EMPTY" if r['total'] == 0 else f"LOW({r['total']})")
    print(f"  T{tid:2d}: {r['total']:3d} Qs  [L1:{r['l1']:2d} L2:{r['l2']:2d} L3:{r['l3']:2d}]  {status}")

with open('final_audit_v2.json', 'w', encoding='utf-8') as f:
    json.dump({"total": total, "gap": 8550 - total, "chapters": results}, f, indent=2)
