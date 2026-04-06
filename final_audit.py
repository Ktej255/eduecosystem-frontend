import psycopg2
conn = psycopg2.connect('postgresql://postgres:Tej%401106@34.55.250.166:5432/eduecosystem_prod')
cur = conn.cursor()
all_ok = True
for ch in range(21, 35):
    cur.execute('SELECT level, COUNT(*) FROM bank_questions WHERE subject=%s AND chapter_number=%s GROUP BY level', ('Polity', ch))
    d = {r[0]: r[1] for r in cur.fetchall()}
    l1, l2, l3 = d.get(1,0), d.get(2,0), d.get(3,0)
    t = l1 + l2 + l3
    ok = t >= 90 and l1 >= 30 and l2 >= 30 and l3 >= 30
    if not ok:
        all_ok = False
    status = "PASS" if ok else "FAIL"
    print(f"Ch{ch}: L1={l1} L2={l2} L3={l3} TOTAL={t} [{status}]")
print()
print("ALL CHAPTERS 21-34 COMPLETE" if all_ok else "SOME CHAPTERS NEED WORK")
conn.close()
