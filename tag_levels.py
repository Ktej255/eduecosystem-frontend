"""
Direct SQL UPDATE to tag all bank_questions with level + difficulty.
Runs ONE UPDATE statement — no loops, no N+1 queries.
Fast even over WAN connection.
"""
import psycopg2

DB = dict(host="34.55.250.166", port=5432, dbname="eduecosystem_prod",
          user="postgres", password="Tej@1106", connect_timeout=30)

UPDATE_SQL = """
UPDATE bank_questions
SET
    level = sub.new_level,
    difficulty = CASE sub.new_level WHEN 1 THEN 'easy' WHEN 2 THEN 'medium' ELSE 'hard' END
FROM (
    SELECT
        id,
        CASE
            WHEN ROW_NUMBER() OVER (PARTITION BY subject, chapter_number ORDER BY id) <= 30 THEN 1
            WHEN ROW_NUMBER() OVER (PARTITION BY subject, chapter_number ORDER BY id) <= 60 THEN 2
            ELSE 3
        END AS new_level
    FROM bank_questions
    WHERE level IS NULL
) sub
WHERE bank_questions.id = sub.id;
"""

SOURCE_ID_SQL = """
UPDATE bank_questions
SET source_id = subject || '-' || COALESCE(chapter_number::text, '0') || '-' || id::text
WHERE source_id IS NULL;
"""

print("Connecting to production DB...")
conn = psycopg2.connect(**DB)
conn.autocommit = False
cur = conn.cursor()

print("Running level UPDATE...")
cur.execute(UPDATE_SQL)
print(f"  Rows tagged with level: {cur.rowcount}")

print("Running source_id UPDATE...")
cur.execute(SOURCE_ID_SQL)
print(f"  Rows tagged with source_id: {cur.rowcount}")

conn.commit()
cur.close()
conn.close()
print("DONE.")

# Verify
conn2 = psycopg2.connect(**DB)
cur2 = conn2.cursor()
cur2.execute("""
    SELECT subject, level, COUNT(*) 
    FROM bank_questions 
    GROUP BY subject, level 
    ORDER BY subject, level
""")
rows = cur2.fetchall()
cur2.close(); conn2.close()

print(f"\n{'Subject':<28}{'Level':>6}{'Count':>8}")
print("-"*44)
for r in rows:
    lvl = str(r[1]) if r[1] else "NULL"
    print(f"{str(r[0]):<28}{lvl:>6}{r[2]:>8}")
