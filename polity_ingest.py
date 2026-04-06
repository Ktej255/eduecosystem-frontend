"""
Polity MCQ Ingestion Helper — Phase 2 (AI-Generated Questions)
Usage: python polity_ingest.py <questions_file.py>
"""
import psycopg2, hashlib, json, sys, importlib.util
from psycopg2.extras import execute_values

DB = dict(host='34.55.250.166', port=5432, dbname='eduecosystem_prod',
          user='postgres', password='Tej@1106', connect_timeout=30)

def make_source_id(subj, ch, text):
    raw = f"{subj}|{ch}|{text[:80]}"
    return hashlib.md5(raw.encode()).hexdigest()

def ingest(questions: list, dry_run=False):
    conn = psycopg2.connect(**DB)
    cur  = conn.cursor()

    rows = []
    for q in questions:
        sid = make_source_id("Polity", q["chapter_number"], q["text"])
        opts = json.dumps(q["options"])
        rows.append((
            1, q["text"], "multiple_choice", opts,
            str(q["correct_answer"]), q["explanation"],
            "Polity", q["chapter_number"], q["level"],
            ["easy","moderate","hard"][q["level"]-1],
            sid, 1, 0
        ))

    if dry_run:
        print(f"DRY RUN — would insert {len(rows)} rows")
        for r in rows[:3]:
            print(f"  Ch{r[7]} L{r[8]}: {r[1][:60]}...")
        return

    execute_values(cur, """
        INSERT INTO bank_questions
          (instructor_id, text, type, options, correct_answer, explanation,
           subject, chapter_number, level, difficulty, source_id, points, usage_count)
        VALUES %s
        ON CONFLICT (source_id) DO NOTHING
    """, rows, page_size=200)
    conn.commit()

    inserted = cur.rowcount
    cur.execute("SELECT COUNT(*) FROM bank_questions WHERE subject='Polity'")
    total = cur.fetchone()[0]
    conn.close()

    print(f"Inserted: {inserted} | Skipped (dupes): {len(rows)-inserted}")
    print(f"LIVE Polity total: {total}")

    # Chapter-level summary for this batch
    from collections import Counter
    by = Counter((q["chapter_number"], q["level"]) for q in questions)
    print("\nBatch breakdown:")
    for (ch, lv), cnt in sorted(by.items()):
        print(f"  Ch{ch:>2} L{lv}: {cnt} questions")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python polity_ingest.py <questions_module.py>")
        sys.exit(1)

    spec = importlib.util.spec_from_file_location("qmod", sys.argv[1])
    mod  = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    qs = mod.QUESTIONS

    dry = "--dry" in sys.argv
    print(f"Loaded {len(qs)} questions. dry_run={dry}")
    ingest(qs, dry_run=dry)
