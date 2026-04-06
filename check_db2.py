"""
Quick status only — no advanced formatting.
"""
import psycopg2, json, sys
from collections import defaultdict

DB = dict(host='34.55.250.166', port=5432, dbname='eduecosystem_prod',
          user='postgres', password='Tej@1106', connect_timeout=15)
conn = psycopg2.connect(**DB)
cur = conn.cursor()

# Polity breakdown
cur.execute("""
    SELECT chapter_number, level, COUNT(*)
    FROM bank_questions WHERE subject='Polity' AND chapter_number IS NOT NULL
    GROUP BY chapter_number, level ORDER BY chapter_number, level
""")
rows = cur.fetchall()
bd = defaultdict(lambda: {1: 0, 2: 0, 3: 0})
for ch, lv, cnt in rows:
    if ch is not None and lv is not None:
        bd[int(ch)][int(lv)] = cnt

print("POLITY - CHAPTER BREAKDOWN")
print("Ch   | L1  | L2  | L3  | Total")
for ch in sorted(bd):
    lc = bd[ch]
    t = sum(lc.values())
    flag = "LOW" if t < 85 else "OK"
    print(str(ch).rjust(4) + " | " + str(lc[1]).rjust(4) + " | " + str(lc[2]).rjust(4) + " | " + str(lc[3]).rjust(4) + " | " + str(t).rjust(5) + "  " + flag)
print("Chapters:", len(bd))

# Modern history breakdown
cur.execute("""
    SELECT chapter_number, level, COUNT(*)
    FROM bank_questions WHERE subject='Modern History' AND chapter_number IS NOT NULL
    GROUP BY chapter_number, level ORDER BY chapter_number, level
""")
rows = cur.fetchall()
bd2 = defaultdict(lambda: {1: 0, 2: 0, 3: 0})
for ch, lv, cnt in rows:
    if ch is not None and lv is not None:
        bd2[int(ch)][int(lv)] = cnt

print("\nMODERN HISTORY - CHAPTER BREAKDOWN")
print("Ch   | L1  | L2  | L3  | Total")
for ch in sorted(bd2):
    lc = bd2[ch]
    t = sum(lc.values())
    flag = "LOW" if t < 85 else "OK"
    print(str(ch).rjust(4) + " | " + str(lc[1]).rjust(4) + " | " + str(lc[2]).rjust(4) + " | " + str(lc[3]).rjust(4) + " | " + str(t).rjust(5) + "  " + flag)
print("Chapters:", len(bd2))

# Sample question - Polity ch 65 L1
cur.execute("SELECT text, options, correct_answer FROM bank_questions WHERE subject='Polity' AND chapter_number=65 AND level=1 LIMIT 1")
row = cur.fetchone()
print("\nSAMPLE: Polity Ch65 L1")
if row:
    opts = json.loads(row[1]) if row[1] else []
    print("Q: " + str(row[0])[:200])
    for i, o in enumerate(opts[:4]):
        c = " <CORRECT" if str(i) == str(row[2]) else ""
        print("  " + chr(65+i) + ". " + str(o)[:80] + c)
    print("Options count:", len(opts))
else:
    print("NO RECORD FOUND")

conn.close()
print("\nDone.")
