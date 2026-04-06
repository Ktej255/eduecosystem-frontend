"""
STANDALONE MCQ INGESTION — connects directly to production DB.
No app imports needed. Uses psycopg2 directly for speed.

Usage:
    python ingest_mcqs_prod.py [--subject "Modern History"] [--dry-run]
"""
import re, os, sys, json, argparse, logging
from pathlib import Path

logging.basicConfig(level=logging.INFO, format="%(levelname)s | %(message)s")
log = logging.getLogger(__name__)

# ─── Production DB Credentials ────────────────────────────────────────────────
DB_HOST = "34.55.250.166"
DB_PORT = 5432
DB_NAME = "eduecosystem_prod"
DB_USER = "postgres"
DB_PASS = "Tej@1106"

ROOT = Path(__file__).parent
FE = ROOT / "frontend" / "src" / "components" / "upsc" / "subjects"

SUBJECTS = {
    "Modern History":   (FE / "history/data/mcqs/modern",   r"chapter(\d+)\.ts"),
    "Medieval History": (FE / "history/data/mcqs/medieval", r"chapter(\d+)\.ts"),
    "Ancient History":  (FE / "history/data/mcqs/ancient",  r"chapter(\d+)"),
    "Geography":        (FE / "geography/data/mcqs",         r"(.+)\.ts"),
    "Polity":           (FE / "polity/data",                 r"chapter(\d+)"),
}

LETTER_TO_IDX = {"a": 0, "b": 1, "c": 2, "d": 3, "e": 4}
DIFF_FROM_LVL = {1: "easy", 2: "medium", 3: "hard"}
LVL_FROM_DIFF = {"easy": 1, "medium": 2, "hard": 3}
BAD_EXPL = {"explanation pending.", "explanation pending", "coming soon", "", "none"}

# ─── TS Parser ─────────────────────────────────────────────────────────────────
def _strip(raw):
    raw = re.sub(r"//[^\n]*", "", raw)
    raw = re.sub(r"^\s*import\s+.*?;\s*$", "", raw, flags=re.MULTILINE)
    raw = re.sub(r"export\s+const\s+\w+\s*(?::\s*[\w$][\w$.<>\[\]|,\s()?]*?)?\s*=\s*", "", raw)
    return raw.strip().rstrip(";").strip()

def _quote_keys(s):
    s = re.sub(r'(?<!["\w])([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:', r'"\1":', s)
    return re.sub(r'"("[\w$]+")":', r'\1:', s)

def _fix_commas(s):
    return re.sub(r",(\s*[}\]])", r"\1", s)

def _parse(raw):
    cleaned = _strip(raw)
    if not cleaned.startswith("["):
        return []
    for fn in [lambda s: s, _fix_commas, lambda s: _quote_keys(_fix_commas(s))]:
        try:
            return json.loads(fn(cleaned))
        except Exception:
            pass
    # Per-object fallback
    out = []
    for m in re.compile(r'\{(?:[^{}]|\{[^{}]*\})*\}', re.DOTALL).finditer(cleaned):
        blk = m.group(0)
        if not any(k in blk for k in ('"question"', 'question:', '"text"', 'text:')):
            continue
        for t in [blk, _quote_keys(blk)]:
            t = _fix_commas(t)
            try:
                o = json.loads(t)
                if isinstance(o, dict):
                    out.append(o)
                    break
            except Exception:
                pass
    return out

def _opts(raw):
    if not isinstance(raw, list):
        return []
    return [str(o.get("text", o.get("value", str(o))) if isinstance(o, dict) else o) for o in raw]

def _correct(raw):
    if isinstance(raw, int): return str(raw)
    if isinstance(raw, str):
        v = raw.strip().lower()
        if v in LETTER_TO_IDX: return str(LETTER_TO_IDX[v])
        if v.isdigit(): return v
    return "0"

BAD_OPT = re.compile(r"(\*\s*$|[A-D]\.\s+[A-D]\.)", re.I)

def _valid(q, opts, corr):
    if not q or len(q) < 10 or q.rstrip().endswith(","):
        return False
    if len(opts) < 2 or any(len(o) > 350 or BAD_OPT.search(o) for o in opts):
        return False
    return corr is not None

def extract(ts_path, subject, ch):
    try:
        raw = ts_path.read_text(encoding="utf-8")
    except Exception as e:
        return [], 0
    items = _parse(raw)
    out = []
    for pos, item in enumerate(items, 1):
        if not isinstance(item, dict): continue
        q = str(item.get("question", item.get("text", ""))).strip()
        opts_raw = item.get("options", [])
        corr_raw = item.get("correctAnswer", item.get("correct_answer", item.get("answer")))
        expl = str(item.get("explanation", "")).strip()
        src_id = str(item.get("id", f"{subject[:3].replace(' ','')}-{ch}-{pos}"))
        opts = _opts(opts_raw)
        corr = _correct(corr_raw)
        if not _valid(q, opts, corr_raw): continue
        if expl.lower() in BAD_EXPL: expl = ""
        lvl = item.get("level")
        diff = str(item.get("difficulty", "")).lower().strip()
        if isinstance(lvl, int) and lvl in (1,2,3):
            diff = DIFF_FROM_LVL[lvl]
        elif diff in LVL_FROM_DIFF:
            lvl = LVL_FROM_DIFF[diff]
        else:
            lvl, diff = (1,"easy") if pos<=30 else (2,"medium") if pos<=60 else (3,"hard")
        out.append((src_id, q, json.dumps(opts, ensure_ascii=False), corr, expl,
                    subject, ch, lvl, diff))
    return out, len(items) - len(out)


# ─── DB Operations (direct psycopg2 — fast batch inserts) ────────────────────
def get_conn():
    import psycopg2
    return psycopg2.connect(
        host=DB_HOST, port=DB_PORT, dbname=DB_NAME,
        user=DB_USER, password=DB_PASS, connect_timeout=15
    )

def apply_schema(conn):
    log.info("Ensuring schema columns exist...")
    cur = conn.cursor()
    for stmt in [
        "ALTER TABLE bank_questions ADD COLUMN IF NOT EXISTS level INTEGER",
        "ALTER TABLE bank_questions ADD COLUMN IF NOT EXISTS source_id VARCHAR(150)",
        "CREATE INDEX IF NOT EXISTS ix_bq_level ON bank_questions(level)",
        "CREATE INDEX IF NOT EXISTS ix_bq_chapter ON bank_questions(chapter_number)",
        "CREATE UNIQUE INDEX IF NOT EXISTS ix_bq_source_id ON bank_questions(source_id) WHERE source_id IS NOT NULL",
    ]:
        try:
            cur.execute(stmt)
            log.info(f"  ✅ {stmt[:65]}...")
        except Exception as e:
            log.warning(f"  ⚠ {str(e)[:80]}")
            conn.rollback()
            cur = conn.cursor()
    conn.commit()
    cur.close()

def batch_insert(conn, rows, dry_run):
    """Bulk insert with ON CONFLICT DO NOTHING for deduplication."""
    if not rows or dry_run:
        return len(rows)
    cur = conn.cursor()
    INSERT_SQL = """
        INSERT INTO bank_questions
            (instructor_id, text, type, options, correct_answer, explanation,
             subject, chapter_number, level, difficulty, source_id, points, usage_count)
        VALUES
            (1, %s, 'multiple_choice', %s, %s, %s, %s, %s, %s, %s, %s, 1, 0)
        ON CONFLICT (source_id) DO NOTHING
    """
    # (text, options, correct_answer, explanation, subject, ch, lvl, diff, src_id)
    params = [(r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[0]) for r in rows]
    try:
        cur.executemany(INSERT_SQL, params)
        conn.commit()
        inserted = cur.rowcount
    except Exception as e:
        conn.rollback()
        log.error(f"  Batch insert error: {e}")
        inserted = 0
    cur.close()
    return inserted


# ─── Main ─────────────────────────────────────────────────────────────────────
def run(subject_filter="all", dry_run=False):
    subjects = list(SUBJECTS) if subject_filter == "all" else [subject_filter]

    conn = None
    if not dry_run:
        try:
            conn = get_conn()
            log.info(f"✅ Connected to {DB_NAME}@{DB_HOST}")
            apply_schema(conn)
        except Exception as e:
            log.error(f"❌ DB connection failed: {e}")
            return

    report = []
    grand = 0

    for subj in subjects:
        if subj not in SUBJECTS:
            log.error(f"Unknown subject: {subj}")
            continue
        d, pat = SUBJECTS[subj]
        if not d.exists():
            log.warning(f"Not found: {d}")
            continue

        log.info(f"\n{'='*50}\n  {subj}\n{'='*50}")
        all_rows, total_inv = [], 0

        for f in sorted(d.glob("*.ts")):
            m = re.search(pat, f.name)
            if not m: continue
            try: ch = int(m.group(1))
            except: ch = 0

            rows, inv = extract(f, subj, ch)
            all_rows.extend(rows)
            total_inv += inv
            tag = "[DRY] " if dry_run else ""
            log.info(f"  {tag}Ch{ch:02d} {f.name}: valid={len(rows)} invalid={inv}")

        inserted = batch_insert(conn, all_rows, dry_run)
        skipped = len(all_rows) - (inserted if inserted > 0 else 0)
        log.info(f"\n  ✅ {subj}: valid={len(all_rows)} inserted={inserted} invalid={total_inv}")
        grand += len(all_rows) if dry_run else inserted
        report.append({"subject": subj, "valid": len(all_rows),
                       "inserted": len(all_rows) if dry_run else inserted,
                       "invalid": total_inv})

    if conn:
        conn.close()

    log.info(f"\n{'='*50}\n  GRAND TOTAL: {grand}\n{'='*50}")
    print(f"\n{'Subject':<22}{'Valid':>7}{'Inserted':>9}{'Invalid':>9}")
    print("-"*49)
    for r in report:
        print(f"{r['subject']:<22}{r['valid']:>7}{r['inserted']:>9}{r['invalid']:>9}")


if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument("--subject", default="all",
                   help="'all' or specific subject name")
    p.add_argument("--dry-run", action="store_true")
    args = p.parse_args()
    run(args.subject, args.dry_run)
