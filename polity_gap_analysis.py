"""
Get COMPLETE Polity chapter/level breakdown and gap analysis.
Output: what exists, what's needed, per chapter.
"""
import psycopg2
from collections import defaultdict

DB = dict(host='34.55.250.166', port=5432, dbname='eduecosystem_prod',
          user='postgres', password='Tej@1106', connect_timeout=15)
conn = psycopg2.connect(**DB)
cur = conn.cursor()

# Get all chapters from bank_questions for Polity
cur.execute("""
    SELECT chapter_number, level, COUNT(*)
    FROM bank_questions
    WHERE subject='Polity' AND chapter_number IS NOT NULL
    GROUP BY chapter_number, level
    ORDER BY chapter_number, level
""")
rows = cur.fetchall()

bd = defaultdict(lambda: {1: 0, 2: 0, 3: 0})
for ch, lv, cnt in rows:
    if ch and lv:
        bd[int(ch)][int(lv)] = cnt

TARGET = 30  # 30 per level per chapter = 90 total

print("POLITY COMPLETE CHAPTER GAP ANALYSIS")
print("Target per level: 30 questions | Target per chapter: 90 questions")
print("")
print("Ch  | Have_L1|Need_L1| Have_L2|Need_L2| Have_L3|Need_L3| Total|Gap")
print("-" * 80)

total_have = 0
total_need = 0

for ch in sorted(bd):
    lc = bd[ch]
    h1, h2, h3 = lc[1], lc[2], lc[3]
    n1 = max(0, TARGET - h1)
    n2 = max(0, TARGET - h2)
    n3 = max(0, TARGET - h3)
    total = h1 + h2 + h3
    gap = n1 + n2 + n3
    total_have += total
    total_need += gap
    flag = "" if gap == 0 else " <NEED"
    print(str(ch).rjust(3) + " | " +
          str(h1).rjust(6) + "|" + str(n1).rjust(6) + " | " +
          str(h2).rjust(6) + "|" + str(n2).rjust(6) + " | " +
          str(h3).rjust(6) + "|" + str(n3).rjust(6) + " | " +
          str(total).rjust(5) + "|" + str(gap).rjust(3) + flag)

# Also find chapters in range 1-95 that have ZERO questions
print("\nCHAPTERS WITH ZERO QUESTIONS (need full 90):")
existing_chs = set(bd.keys())
for ch in range(1, 96):
    if ch not in existing_chs:
        print("  Chapter " + str(ch) + ": 0 questions - needs 90 (30+30+30)")
        total_need += 90

print("\nSUMMARY:")
print("  Currently have: " + str(total_have) + " questions")
print("  Still needed:   " + str(total_need) + " questions")
print("  Final target:   " + str(total_have + total_need) + " questions")

conn.close()
