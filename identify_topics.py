import psycopg2

conn = psycopg2.connect('postgresql://postgres:Tej%401106@34.55.250.166:5432/eduecosystem_prod')
cur = conn.cursor()

# Sample 1 question per chapter to identify topics
chapters = list(range(35, 71)) + [39, 59, 69, 71, 74, 75, 76, 77, 78, 79]
for ch in sorted(set(chapters)):
    cur.execute("""
        SELECT text FROM bank_questions 
        WHERE subject='Polity' AND chapter_number=%s 
        ORDER BY id LIMIT 1
    """, (ch,))
    row = cur.fetchone()
    if row:
        sample = row[0][:90].replace('\n', ' ')
        print(f"Ch{ch:02d}: {sample}...")
    else:
        print(f"Ch{ch:02d}: [NO DATA]")

conn.close()
