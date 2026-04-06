"""
Apply schema changes and run MCQ ingestion directly.
Adds level + source_id columns to bank_questions, then ingests all MCQs.
Run: python apply_and_ingest.py [--dry-run]
"""
import sys, os, re, json, argparse, logging
from pathlib import Path

logging.basicConfig(level=logging.INFO, format="%(levelname)s | %(message)s")
log = logging.getLogger(__name__)

ROOT = Path(__file__).parent
sys.path.insert(0, str(ROOT / "backend"))

# Force production DB — must happen BEFORE sqlalchemy session is imported
os.environ.setdefault(
    "DATABASE_URL",
    "postgresql://postgres:Tej%401106@34.55.250.166:5432/eduecosystem_prod"
)

from sqlalchemy import text
from app.db.session import SessionLocal, engine
from app.models.question_bank import BankQuestion


# ─── Step 1: Apply DB schema ───────────────────────────────────────────────────
def apply_schema():
    log.info("Applying schema changes to bank_questions...")
    stmts = [
        "ALTER TABLE bank_questions ADD COLUMN IF NOT EXISTS level INTEGER",
        "ALTER TABLE bank_questions ADD COLUMN IF NOT EXISTS source_id VARCHAR(150)",
        "CREATE INDEX IF NOT EXISTS ix_bank_questions_level ON bank_questions(level)",
        "CREATE INDEX IF NOT EXISTS ix_bank_questions_chapter_number ON bank_questions(chapter_number)",
        "CREATE UNIQUE INDEX IF NOT EXISTS ix_bank_questions_source_id ON bank_questions(source_id)",
    ]
    with engine.connect() as conn:
        for stmt in stmts:
            try:
                conn.execute(text(stmt))
                log.info(f"  ✅ {stmt[:60]}...")
            except Exception as e:
                log.warning(f"  ⚠ {stmt[:60]}... → {e}")
        conn.commit()
    log.info("Schema ready.\n")


# ─── TS Parser ────────────────────────────────────────────────────────────────-
LETTER_TO_IDX = {"a": 0, "b": 1, "c": 2, "d": 3, "e": 4}

def _strip_ts(raw: str) -> str:
    raw = re.sub(r"//[^\n]*", "", raw)
    raw = re.sub(r"^\s*import\s+.*?;\s*$", "", raw, flags=re.MULTILINE)
    raw = re.sub(r"export\s+const\s+\w+\s*(?::\s*[\w$][\w$.<>\[\]|,\s()?]*?)?\s*=\s*", "", raw)
    return raw.strip().rstrip(";").strip()

def _quote_keys(s: str) -> str:
    s = re.sub(r'(?<!["\w])([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:', r'"\1":', s)
    s = re.sub(r'"("[\w$]+")":', r'\1:', s)
    return s

def _parse_ts(raw: str) -> list:
    cleaned = _strip_ts(raw)
    if not cleaned.startswith("["):
        return []
    for transform in [
        lambda s: s,
        lambda s: re.sub(r",(\s*[}\]])", r"\1", s),
        lambda s: _quote_keys(re.sub(r",(\s*[}\]])", r"\1", s)),
    ]:
        try:
            return json.loads(transform(cleaned))
        except Exception:
            pass
    # Per-object fallback
    results = []
    for m in re.compile(r'\{(?:[^{}]|\{[^{}]*\})*\}', re.DOTALL).finditer(cleaned):
        block = m.group(0)
        if not any(k in block for k in ('"question"', 'question:', '"text"', 'text:')):
            continue
        for t in [block, _quote_keys(block)]:
            t = re.sub(r",(\s*[}\]])", r"\1", t)
            try:
                obj = json.loads(t)
                if isinstance(obj, dict):
                    results.append(obj)
                    break
            except Exception:
                pass
    return results

def _opts(raw) -> list:
    if not isinstance(raw, list):
        return []
    return [str(o.get("text", o.get("value", str(o))) if isinstance(o, dict) else o) for o in raw]

def _correct(raw, opts) -> str:
    if isinstance(raw, int):
        return str(raw)
    if isinstance(raw, str):
        v = raw.strip().lower()
        if v in LETTER_TO_IDX:
            return str(LETTER_TO_IDX[v])
        if v.isdigit():
            return v
    return "0"

BAD_EXPL = {"explanation pending.", "explanation pending", "coming soon", "", "none"}
BAD_OPT = re.compile(r"(\*\s*$|[A-D]\.\s+[A-D]\.)", re.I)

def _valid(q, opts, corr) -> bool:
    if not q or len(q) < 10 or q.rstrip().endswith(","):
        return False
    if len(opts) < 2 or any(len(o) > 350 or BAD_OPT.search(o) for o in opts):
        return False
    return corr is not None

DIFF_FROM_LVL = {1: "easy", 2: "medium", 3: "hard"}
LVL_FROM_DIFF = {"easy": 1, "medium": 2, "hard": 3}

def extract(ts_path: Path, subject: str, ch: int) -> list:
    try:
        raw = ts_path.read_text(encoding="utf-8")
    except Exception as e:
        log.error(f"  Read error {ts_path.name}: {e}")
        return []
    items = _parse_ts(raw)
    out = []
    for pos, item in enumerate(items, 1):
        if not isinstance(item, dict):
            continue
        q = str(item.get("question", item.get("text", ""))).strip()
        opts_raw = item.get("options", [])
        corr_raw = item.get("correctAnswer", item.get("correct_answer", item.get("answer")))
        expl = str(item.get("explanation", "")).strip()
        src_id = str(item.get("id", f"{subject[:3].replace(' ','')}-{ch}-{pos}"))
        opts = _opts(opts_raw)
        corr = _correct(corr_raw, opts)
        if not _valid(q, opts, corr_raw):
            continue
        if expl.lower() in BAD_EXPL:
            expl = ""
        lvl = item.get("level")
        diff = str(item.get("difficulty", "")).lower().strip()
        if isinstance(lvl, int) and lvl in (1, 2, 3):
            diff = DIFF_FROM_LVL[lvl]
        elif diff in LVL_FROM_DIFF:
            lvl = LVL_FROM_DIFF[diff]
        else:
            lvl, diff = (1, "easy") if pos <= 30 else (2, "medium") if pos <= 60 else (3, "hard")
        out.append({
            "source_id": src_id, "text": q,
            "options": json.dumps(opts, ensure_ascii=False),
            "correct_answer": corr, "explanation": expl,
            "subject": subject, "chapter_number": ch,
            "level": lvl, "difficulty": diff,
            "type": "multiple_choice", "instructor_id": 1,
        })
    return out


# ─── Subject Configs ───────────────────────────────────────────────────────────
FE = ROOT / "frontend" / "src" / "components" / "upsc" / "subjects"

SUBJECTS = {
    "Modern History":   (FE / "history/data/mcqs/modern",   r"chapter(\d+)\.ts"),
    "Medieval History": (FE / "history/data/mcqs/medieval", r"chapter(\d+)\.ts"),
    "Ancient History":  (FE / "history/data/mcqs/ancient",  r"chapter(\d+)"),
    "Polity":           (FE / "polity/data",                 r"chapter(\d+)"),
    "Geography":        (FE / "geography/data/mcqs",         r"(.+)\.ts"),
}


# ─── Ingest ────────────────────────────────────────────────────────────────────
def ingest(subject_filter="all", dry_run=False):
    subjects = list(SUBJECTS) if subject_filter == "all" else [subject_filter]
    grand = 0
    report = []

    for subj in subjects:
        if subj not in SUBJECTS:
            log.error(f"Unknown: {subj}")
            continue
        d, pat = SUBJECTS[subj]
        if not d.exists():
            log.warning(f"Dir not found: {d}")
            continue

        log.info(f"\n{'='*50}\n  {subj}\n{'='*50}")
        ins_total = skip_total = inv_total = 0

        for f in sorted(d.glob("*.ts")):
            m = re.search(pat, f.name)
            if not m:
                continue
            try:
                ch = int(m.group(1))
            except Exception:
                ch = 0

            qs = extract(f, subj, ch)
            raw_count = len(_parse_ts(f.read_text(encoding="utf-8")))
            inv = raw_count - len(qs)
            ins_total += len(qs)
            inv_total += inv

            if not dry_run and qs:
                db = SessionLocal()
                inserted = 0
                try:
                    for q in qs:
                        src = q.get("source_id")
                        if src:
                            exists = db.query(BankQuestion.id).filter(
                                BankQuestion.source_id == src
                            ).first()
                            if exists:
                                skip_total += 1
                                ins_total -= 1
                                continue
                        db.add(BankQuestion(**q))
                        inserted += 1
                    db.commit()
                except Exception as e:
                    db.rollback()
                    log.error(f"  DB error Ch{ch}: {e}")
                finally:
                    db.close()

            tag = "[DRY] " if dry_run else ""
            log.info(f"  {tag}Ch{ch:02d} {f.name}: valid={len(qs)} invalid={inv}")

        log.info(f"\n  ✅ {subj}: to_insert={ins_total} skipped_dup={skip_total} invalid={inv_total}")
        grand += ins_total
        report.append({"subject": subj, "inserted": ins_total, "skipped": skip_total, "invalid": inv_total})

    log.info(f"\n{'='*50}\n  GRAND TOTAL: {grand}\n{'='*50}")
    print(f"\n{'Subject':<22}{'Inserted':>9}{'Skipped':>9}{'Invalid':>9}")
    print("-" * 51)
    for r in report:
        print(f"{r['subject']:<22}{r['inserted']:>9}{r['skipped']:>9}{r['invalid']:>9}")


if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument("--subject", default="all")
    p.add_argument("--dry-run", action="store_true")
    p.add_argument("--skip-schema", action="store_true")
    args = p.parse_args()
    if not args.skip_schema and not args.dry_run:
        apply_schema()
    ingest(args.subject, args.dry_run)
