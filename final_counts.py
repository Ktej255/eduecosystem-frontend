"""Get complete breakdown of all subjects."""
import psycopg2, json
from collections import defaultdict

DB = dict(host='34.55.250.166', port=5432, dbname='eduecosystem_prod',
          user='postgres', password='Tej@1106', connect_timeout=15)
conn = psycopg2.connect(**DB)
cur = conn.cursor()

cur.execute("SELECT subject, COUNT(*) FROM bank_questions GROUP BY subject ORDER BY subject")
print("LIVE COUNTS:")
for r in cur.fetchall():
    print(str(r[0]) + ": " + str(r[1]))

for subj in ["Ancient History","Medieval History","Modern History","Polity"]:
    cur.execute("""
        SELECT chapter_number, level, COUNT(*)
        FROM bank_questions WHERE subject=%s AND chapter_number IS NOT NULL
        GROUP BY chapter_number, level ORDER BY chapter_number, level
    """, (subj,))
    rows = cur.fetchall()
    bd = defaultdict(lambda:{1:0,2:0,3:0})
    for ch,lv,cnt in rows:
        if ch and lv:
            bd[int(ch)][int(lv)] = cnt
    print("\n" + subj.upper())
    total = 0
    for ch in sorted(bd):
        lc = bd[ch]
        t = sum(lc.values())
        total += t
        print(str(ch).rjust(3)+"|"+str(lc[1]).rjust(4)+"|"+str(lc[2]).rjust(4)+"|"+str(lc[3]).rjust(4)+"|"+str(t).rjust(5))
    print("TOTAL: " + str(total) + " in " + str(len(bd)) + " chapters")

conn.close()
