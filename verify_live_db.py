"""
Live DB verification - all subjects, chapter breakdown, sample question format check.
"""
import psycopg2, json, sys
from collections import defaultdict

DB = dict(host='34.55.250.166', port=5432, dbname='eduecosystem_prod',
          user='postgres', password='Tej@1106', connect_timeout=15)

try:
    conn = psycopg2.connect(**DB)
    cur = conn.cursor()
    print("Connected to production DB successfully.\n")
except Exception as e:
    print(f"DB CONNECTION FAILED: {e}")
    sys.exit(1)

# 1. Total live counts by subject
cur.execute("SELECT subject, COUNT(*) FROM bank_questions GROUP BY subject ORDER BY subject")
print("=" * 60)
print("LIVE QUESTION COUNTS IN DATABASE")
print("=" * 60)
grand = 0
for subj, cnt in cur.fetchall():
    print(f"  {str(subj):<25}  {cnt:>6} questions")
    grand += cnt
print(f"  GRAND TOTAL: {grand} questions")

# 2. Legacy check
cur.execute("SELECT COUNT(*) FROM bank_questions WHERE source_id IS NULL OR source_id = ''")
old_cnt = cur.fetchone()[0]
print(f"\n  Legacy records (no source_id): {old_cnt}")

# 3. Polity specific - how many unique chapters exist
cur.execute("SELECT COUNT(DISTINCT chapter_number) FROM bank_questions WHERE subject='Polity'")
pol_chs = cur.fetchone()[0]
cur.execute("SELECT COUNT(*) FROM bank_questions WHERE subject='Polity'")
pol_total = cur.fetchone()[0]
print(f"\n  Polity: {pol_total} questions across {pol_chs} chapters")
print(f"  NOTE: Source file has 80 chapters. If questions exist per your calculation:")
print(f"  80 chapters x 90 questions = 7,200 expected. Actual: {pol_total}")
print(f"  Gap = {7200 - pol_total} questions MISSING from source file")

# 4. Full breakdown per subject
SUBJECTS = ["Ancient History", "Medieval History", "Modern History", "Polity"]
for subj in SUBJECTS:
    cur.execute("""
        SELECT chapter_number, level, COUNT(*)
        FROM bank_questions WHERE subject=%s AND chapter_number IS NOT NULL
        GROUP BY chapter_number, level ORDER BY chapter_number, level
    """, (subj,))
    rows = cur.fetchall()
    bd = defaultdict(lambda: {1: 0, 2: 0, 3: 0})
    for ch, lv, cnt in rows:
        if ch is not None and lv is not None:
            bd[int(ch)][int(lv)] = cnt

    print(f"\n{'='*60}")
    print(f"{subj.upper()} - CHAPTER BREAKDOWN (LIVE DB)")
    print(f"{'='*60}")
    print(f"  Ch   |   L1  |   L2  |   L3  |  Total")
    print(f"  {'-'*40}")
    total_subj = 0
    for ch in sorted(bd):
        lc = bd[ch]
        t = sum(lc.values())
        total_subj += t
        flag = " LOW" if t < 85 else " OK"
        print(f"  {ch:>4} | {lc[1]:>5} | {lc[2]:>5} | {lc[3]:>5} | {t:>6}{flag}")
    print(f"  {'-'*40}")
    print(f"  Chapters: {len(bd)} | Total: {total_subj}")

# 5. Sample format check
print("\n" + "="*60)
print("SAMPLE QUESTION FORMAT (spot check)")
print("="*60)

samples = [
    ("Polity", 65, 1),
    ("Polity", 70, 2),
    ("Modern History", 2, 2),
    ("Medieval History", 3, 1),
]

for subj, ch, lv in samples:
    cur.execute("""
        SELECT text, options, correct_answer
        FROM bank_questions WHERE subject=%s AND chapter_number=%s AND level=%s
        LIMIT 1
    """, (subj, ch, lv))
    row = cur.fetchone()
    print(f"\n  [{subj} | Ch{ch} | L{lv}]")
    if not row:
        print("  NO QUESTION FOUND IN DB")
        continue
    q_text = str(row[0]) if row[0] else ""
    opts = json.loads(row[1]) if row[1] else []
    correct = row[2]
    has_newlines = "\n" in q_text or "\r" in q_text
    print(f"  Q: {q_text[:140]}")
    for i, o in enumerate(opts[:4]):
        c = " <-- CORRECT" if str(i) == str(correct) else ""
        print(f"     {chr(65+i)}. {str(o)[:80]}{c}")
    print(f"  Options: {len(opts)} | Has-newlines: {has_newlines} | Correct-idx: {correct}")
    status = "CLEAN" if len(opts) >= 2 and not has_newlines else "HAS ISSUES"
    print(f"  Status: {status}")

conn.close()
print("\nVerification complete.")
