"""Save complete Polity gap analysis to file."""
import psycopg2
from collections import defaultdict
from pathlib import Path

DB = dict(host='34.55.250.166', port=5432, dbname='eduecosystem_prod',
          user='postgres', password='Tej@1106', connect_timeout=15)
conn = psycopg2.connect(**DB)
cur = conn.cursor()

cur.execute("""
    SELECT chapter_number, level, COUNT(*)
    FROM bank_questions
    WHERE subject='Polity' AND chapter_number IS NOT NULL
    GROUP BY chapter_number, level ORDER BY chapter_number, level
""")
rows = cur.fetchall()
bd = defaultdict(lambda: {1: 0, 2: 0, 3: 0})
for ch, lv, cnt in rows:
    if ch and lv:
        bd[int(ch)][int(lv)] = cnt

TARGET = 30
lines = []
lines.append("Ch  | Have_L1 | Need_L1 | Have_L2 | Need_L2 | Have_L3 | Need_L3 | Total | Gap")
lines.append("-" * 90)

total_have = 0
total_need = 0

for ch in range(1, 96):
    lc = bd.get(ch, {1: 0, 2: 0, 3: 0})
    h1, h2, h3 = lc[1], lc[2], lc[3]
    n1 = max(0, TARGET - h1)
    n2 = max(0, TARGET - h2)
    n3 = max(0, TARGET - h3)
    total = h1 + h2 + h3
    gap = n1 + n2 + n3
    total_have += total
    total_need += gap
    flag = "" if gap == 0 else " NEED"
    lines.append(
        str(ch).rjust(3) + "  | " +
        str(h1).rjust(7) + " | " + str(n1).rjust(7) + " | " +
        str(h2).rjust(7) + " | " + str(n2).rjust(7) + " | " +
        str(h3).rjust(7) + " | " + str(n3).rjust(7) + " | " +
        str(total).rjust(5) + " | " + str(gap).rjust(3) + flag
    )

lines.append("")
lines.append("TOTAL HAVE: " + str(total_have))
lines.append("TOTAL NEED: " + str(total_need))
lines.append("FINAL TARGET: " + str(total_have + total_need))

out = "\n".join(lines)
Path("polity_gap_full.txt").write_text(out, encoding="utf-8")
print(out)
conn.close()
