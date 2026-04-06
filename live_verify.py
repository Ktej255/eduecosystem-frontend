import psycopg2
import requests

# 1. DB verification
print("=" * 55)
print("STEP 1: DATABASE VERIFICATION")
print("=" * 55)
conn = psycopg2.connect('postgresql://postgres:Tej%401106@34.55.250.166:5432/eduecosystem_prod')
cur = conn.cursor()

cur.execute("SELECT COUNT(*) FROM bank_questions WHERE subject='Polity'")
total = cur.fetchone()[0]
print(f"Total Polity questions in DB: {total}")

cur.execute("""
    SELECT chapter_number, level, COUNT(*)
    FROM bank_questions WHERE subject='Polity'
    GROUP BY chapter_number, level ORDER BY chapter_number, level
""")
rows = cur.fetchall()

# Build map
data = {}
for ch, lv, cnt in rows:
    if ch not in data:
        data[ch] = {}
    data[ch][lv] = cnt

print("\nAll chapters with Polity questions:")
print("Ch |  L1   L2   L3 | TOTAL | STATUS")
print("-" * 50)
fails = []
for ch in sorted(data.keys()):
    l1 = data[ch].get(1, 0)
    l2 = data[ch].get(2, 0)
    l3 = data[ch].get(3, 0)
    t = l1 + l2 + l3
    ok = l1 >= 30 and l2 >= 30 and l3 >= 30
    st = "PASS" if ok else f"FAIL(L1={l1},L2={l2},L3={l3})"
    if not ok:
        fails.append(ch)
    print(f"{ch:2d} | {l1:4d} {l2:4d} {l3:4d} | {t:5d} | {st}")

print()
if fails:
    print(f"CHAPTERS NEEDING WORK: {fails}")
else:
    print("ALL present chapters have 30+ per level")

# 2. Check API endpoint
print()
print("=" * 55)
print("STEP 2: LIVE API VERIFICATION")
print("=" * 55)
try:
    r = requests.get(
        "http://34.55.250.166:8000/api/polity/questions",
        params={"chapter": 32, "level": 1, "limit": 3},
        timeout=10
    )
    print(f"API Status: {r.status_code}")
    if r.status_code == 200:
        d = r.json()
        count = len(d) if isinstance(d, list) else d.get("count", "?")
        print(f"Sample response (Ch32 L1): returned {count} questions")
        print("API is LIVE and serving questions")
    else:
        print(f"Response: {r.text[:200]}")
except Exception as e:
    print(f"API check: {e}")
    # Try alternate endpoint
    try:
        r2 = requests.get("http://34.55.250.166:8000/health", timeout=5)
        print(f"Backend health: {r2.status_code} - {r2.text[:100]}")
    except Exception as e2:
        print(f"Backend unreachable: {e2}")

conn.close()
