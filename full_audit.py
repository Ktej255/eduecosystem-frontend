import psycopg2

conn = psycopg2.connect('postgresql://postgres:Tej%401106@34.55.250.166:5432/eduecosystem_prod')
cur = conn.cursor()

cur.execute("SELECT COUNT(*) FROM bank_questions WHERE subject='Polity'")
total = cur.fetchone()[0]
print(f"Total Polity questions in DB: {total}")
print()

cur.execute("""
    SELECT chapter_number, level, COUNT(*)
    FROM bank_questions WHERE subject='Polity'
    GROUP BY chapter_number, level ORDER BY chapter_number, level
""")
rows = cur.fetchall()

data = {}
for ch, lv, cnt in rows:
    if ch not in data:
        data[ch] = {}
    data[ch][lv] = cnt

all_chapters = sorted(data.keys())
print(f"Chapters with data: {all_chapters}")
print()

fails = []
passes = []
print("Ch |  L1   L2   L3 | TOTAL | STATUS")
print("-" * 52)
for ch in all_chapters:
    l1 = data[ch].get(1, 0)
    l2 = data[ch].get(2, 0)
    l3 = data[ch].get(3, 0)
    t = l1 + l2 + l3
    ok = l1 >= 30 and l2 >= 30 and l3 >= 30
    if ok:
        passes.append(ch)
        st = "PASS"
    else:
        fails.append(ch)
        st = "FAIL"
    print(f"{ch:2d} | {l1:4d} {l2:4d} {l3:4d} | {t:5d} | {st}")

print()
print(f"PASS: {len(passes)} chapters -> {passes}")
print()
print(f"FAIL/GAP: {len(fails)} chapters -> {fails}")
print()

# Chapters with ZERO questions (need full build)
all_polity_chapters = list(range(1, 100))  # 1-99
zero_chapters = [ch for ch in all_polity_chapters if ch not in all_chapters]
print(f"Chapters with ZERO questions (not in DB at all): {zero_chapters[:40]}")

conn.close()
