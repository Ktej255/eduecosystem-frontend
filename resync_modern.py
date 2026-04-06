"""
Sync ONLY Modern History to production DB.
"""
import json, psycopg2
from sync_master_mcqs import parse_source, validate, SRC

DB = dict(host='34.55.250.166', port=5432, dbname='eduecosystem_prod',
          user='postgres', password='Tej@1106', connect_timeout=30)

subj = "Modern History"
fpath = SRC[subj]

print(f"Parsing {subj}...")
recs  = parse_source(fpath, subj)
valid = validate(recs, subj)
print(f"\nTotal valid: {len(valid)}")

print("\nConnecting to DB...")
conn = psycopg2.connect(**DB)
cur = conn.cursor()

# Delete old
cur.execute("DELETE FROM bank_questions WHERE subject=%s", (subj,))
print(f"Cleared {cur.rowcount} old rows")

# Bulk INSERT using execute_values (MUCH faster than executemany)
from psycopg2.extras import execute_values

rows = [(r["text"], r["options"], r["correct_answer"], r["explanation"],
         r["subject"], r["chapter_number"], r["level"], r["difficulty"], r["source_id"])
        for r in valid]

execute_values(cur, """
    INSERT INTO bank_questions
      (instructor_id, text, type, options, correct_answer, explanation,
       subject, chapter_number, level, difficulty, source_id, points, usage_count)
    VALUES %s
    ON CONFLICT (source_id) DO NOTHING
""", [(1, t, 'multiple_choice', o, ca, ex, s, ch, lv, d, sid, 1, 0)
      for t, o, ca, ex, s, ch, lv, d, sid in rows], page_size=500)

conn.commit()
cur.execute("SELECT COUNT(*) FROM bank_questions WHERE subject=%s", (subj,))
final_count = cur.fetchone()[0]
print(f"Inserted. Live count for {subj}: {final_count}")

conn.close()
print("Done.")
