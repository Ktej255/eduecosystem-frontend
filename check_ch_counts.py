import os
import psycopg2

os.environ['DATABASE_URL'] = 'postgresql://postgres:Tej%401106@34.55.250.166:5432/eduecosystem_prod'
conn = psycopg2.connect(os.environ['DATABASE_URL'])
cur = conn.cursor()

print(f"{'Ch':>4} | {'L1':>5} {'L2':>5} {'L3':>5} | {'TOTAL':>6} | {'STATUS'}")
print("-" * 50)
for ch in range(21, 35):
    cur.execute("""
        SELECT level, COUNT(*) FROM bank_questions
        WHERE subject='Polity' AND chapter_number=%s
        GROUP BY level ORDER BY level
    """, (ch,))
    rows = cur.fetchall()
    total = sum(r[1] for r in rows)
    breakdown = {r[0]: r[1] for r in rows}
    l1 = breakdown.get(1, 0)
    l2 = breakdown.get(2, 0)
    l3 = breakdown.get(3, 0)
    status = "✅ 90+" if total >= 90 else f"⚠️  NEED +{90 - total}"
    print(f"  {ch:2d} | {l1:5d} {l2:5d} {l3:5d} | {total:6d} | {status}")

conn.close()
