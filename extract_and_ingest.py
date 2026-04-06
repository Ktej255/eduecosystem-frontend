"""
COMPLETE MCQ EXTRACTION & INGESTION SCRIPT
Handles ALL TypeScript MCQ formats found in EduEcosystem frontend.
Run: python extract_and_ingest.py [--dry-run] [--subject all|"Modern History"|etc]
"""
import re
import os
import sys
import json
import argparse
import logging
from pathlib import Path

logging.basicConfig(level=logging.INFO, format="%(levelname)s | %(message)s")
log = logging.getLogger(__name__)

# ─── Paths ─────────────────────────────────────────────────────────────────────
ROOT = Path(__file__).parent
FRONTEND_MCQ_ROOT = ROOT / "frontend" / "src" / "components" / "upsc" / "subjects"

SUBJECTS = {
    "Modern History": {
        "dir": FRONTEND_MCQ_ROOT / "history" / "data" / "mcqs" / "modern",
        "pattern": r"chapter(\d+)\.ts",
    },
    "Ancient History": {
        "dir": FRONTEND_MCQ_ROOT / "history" / "data" / "mcqs" / "ancient",
        "pattern": r"chapter(\d+).*\.ts",
    },
    "Medieval History": {
        "dir": FRONTEND_MCQ_ROOT / "history" / "data" / "mcqs" / "medieval",
        "pattern": r"chapter(\d+)\.ts",
    },
    "Polity": {
        "dir": FRONTEND_MCQ_ROOT / "polity" / "data",
        "pattern": r"chapter(\d+).*\.ts",
    },
    "Geography": {
        "dir": FRONTEND_MCQ_ROOT / "geography" / "data" / "mcqs",
        "pattern": r"(.+)\.ts",
    },
}

LEVEL_FROM_DIFF = {"easy": 1, "medium": 2, "hard": 3}
DIFF_FROM_LEVEL = {1: "easy", 2: "medium", 3: "hard"}
LETTER_TO_IDX = {"a": 0, "b": 1, "c": 2, "d": 3, "e": 4}


# ─── Robust TS Parser ──────────────────────────────────────────────────────────

def _strip_ts_wrapper(raw: str) -> str:
    """Remove TypeScript boilerplate to expose the raw JS array."""
    # Remove single-line comments
    raw = re.sub(r"//[^\n]*", "", raw)
    # Remove import lines (including @/types/... imports)
    raw = re.sub(r"^\s*import\s+.*?;\s*$", "", raw, flags=re.MULTILINE)
    # Remove: export const NAME: SomeType[] = (handles MCQ[], Question[], string[], etc.)
    # Also handles: export const NAME =  (no type annotation)
    raw = re.sub(
        r"export\s+const\s+\w+\s*(?::\s*[\w$][\w$.<>\[\]|,\s()?]*?)?\s*=\s*",
        "",
        raw,
    )
    return raw.strip().rstrip(";").strip()


def _quote_js_keys(text: str) -> str:
    """
    Convert unquoted JS object keys to JSON-compatible quoted keys.
    e.g.  id: "q1"  →  "id": "q1"
    Careful not to affect string contents or already-quoted keys.
    """
    # This regex matches bareword keys at start of line / after { or ,
    # Negative lookbehind ensures we don't re-quote already quoted keys
    result = re.sub(
        r'(?<!["\w])([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:(?!\s*//)',
        r'"\1":',
        text,
    )
    return result


def _parse_ts_file(raw: str) -> list:
    """
    Multi-strategy parser for TypeScript MCQ array files.
    Returns list of dicts or empty list.
    """
    cleaned = _strip_ts_wrapper(raw)
    if not cleaned.startswith("["):
        return []

    # Strategy 1: pure JSON (Modern History new files)
    try:
        return json.loads(cleaned)
    except json.JSONDecodeError:
        pass

    # Strategy 2: fix trailing commas, then JSON
    s2 = re.sub(r",(\s*[}\]])", r"\1", cleaned)
    try:
        return json.loads(s2)
    except json.JSONDecodeError:
        pass

    # Strategy 3: quote unquoted keys (Medieval History format)
    s3 = _quote_js_keys(s2)
    # Fix any double-quoted keys like ""id":" → "id":
    s3 = re.sub(r'"("[\w$]+")":', r"\1:", s3)
    try:
        return json.loads(s3)
    except json.JSONDecodeError:
        pass

    # Strategy 4: Extract question objects one-by-one with regex
    # Find all objects that have a question/text key
    log.warning("  Falling back to per-object extraction...")
    results = []
    # Match outermost { ... } blocks (handles one level of nesting for options)
    pattern = re.compile(r'\{(?:[^{}]|\{[^{}]*\})*\}', re.DOTALL)
    for m in pattern.finditer(cleaned):
        block = m.group(0)
        # Only process blocks that look like questions (not option dicts)
        if '"question"' not in block and 'question:' not in block and \
           '"text"' not in block and 'text:' not in block:
            continue
        # Try to parse as-is, then with fixes
        for candidate in [block, _quote_js_keys(block)]:
            candidate = re.sub(r",(\s*[}\]])", r"\1", candidate)
            try:
                obj = json.loads(candidate)
                if isinstance(obj, dict):
                    results.append(obj)
                    break
            except json.JSONDecodeError:
                continue

    return results


# ─── Option Normalizer ─────────────────────────────────────────────────────────

def _normalize_options(raw_opts) -> list:
    """Convert any options format to list of plain strings."""
    if not isinstance(raw_opts, list):
        return []
    out = []
    for o in raw_opts:
        if isinstance(o, dict):
            out.append(str(o.get("text", o.get("value", o.get("label", str(o))))))
        else:
            out.append(str(o))
    return out


def _normalize_correct(raw, opts: list) -> str:
    """Normalize correctAnswer to 0-based int string."""
    if isinstance(raw, int):
        return str(raw)
    if isinstance(raw, str):
        v = raw.strip().lower()
        if v in LETTER_TO_IDX:
            return str(LETTER_TO_IDX[v])
        if v.isdigit():
            return v
    return "0"


# ─── Question Validator ────────────────────────────────────────────────────────

PLACEHOLDER_EXPLANATIONS = {
    "explanation pending.", "explanation pending", "coming soon",
    "to be added", "", "none",
}

CORRUPT_PATTERNS = re.compile(
    r"(\*\s*$|^[A-D]\.\s+[A-D]\.|option [abcd]:\s+[A-D]\.)", re.IGNORECASE
)


def _is_valid(q_text: str, opts: list, correct_raw) -> bool:
    if not q_text or len(q_text) < 10:
        return False
    if q_text.rstrip().endswith(","):
        return False
    if len(opts) < 2:
        return False
    # Corrupt option: too long or contains lettered sub-options like "A. ... B. ..."
    for o in opts:
        if len(o) > 350:
            return False
        if CORRUPT_PATTERNS.search(o):
            return False
    if correct_raw is None:
        return False
    return True


# ─── Extract from one chapter file ────────────────────────────────────────────

def extract_chapter(ts_path: Path, subject: str, chapter_num: int) -> list:
    try:
        raw = ts_path.read_text(encoding="utf-8")
    except Exception as e:
        log.error(f"  Cannot read {ts_path.name}: {e}")
        return []

    items = _parse_ts_file(raw)
    if not items:
        log.warning(f"  Ch{chapter_num:02d}: Could not parse {ts_path.name}")
        return []

    questions = []
    for pos, item in enumerate(items, 1):
        if not isinstance(item, dict):
            continue

        q_text = str(item.get("question", item.get("text", ""))).strip()
        opts_raw = item.get("options", [])
        correct_raw = item.get(
            "correctAnswer",
            item.get("correct_answer", item.get("answer", None)),
        )
        explanation = str(item.get("explanation", "")).strip()
        src_id = str(
            item.get("id", f"{subject[:3].replace(' ','')}-{chapter_num}-{pos}")
        )

        opts = _normalize_options(opts_raw)
        correct = _normalize_correct(correct_raw, opts)

        if not _is_valid(q_text, opts, correct_raw):
            continue

        # Sanitize placeholder explanation
        if explanation.lower() in PLACEHOLDER_EXPLANATIONS:
            explanation = ""

        # Level / Difficulty
        level = item.get("level")
        diff = str(item.get("difficulty", "")).lower().strip()

        if isinstance(level, int) and level in (1, 2, 3):
            diff = DIFF_FROM_LEVEL[level]
        elif diff in LEVEL_FROM_DIFF:
            level = LEVEL_FROM_DIFF[diff]
        else:
            # Assign by position within chapter (30-30-30 target)
            if pos <= 30:
                level, diff = 1, "easy"
            elif pos <= 60:
                level, diff = 2, "medium"
            else:
                level, diff = 3, "hard"

        questions.append({
            "source_id": src_id,
            "text": q_text,
            "options": json.dumps(opts, ensure_ascii=False),
            "correct_answer": correct,
            "explanation": explanation,
            "subject": subject,
            "chapter_number": chapter_num,
            "level": level,
            "difficulty": diff,
            "type": "multiple_choice",
            "instructor_id": 1,
        })

    return questions


# ─── DB Writer ─────────────────────────────────────────────────────────────────

def write_to_db(questions: list, dry_run: bool) -> tuple:
    """Insert questions, skip duplicates. Returns (inserted, skipped)."""
    inserted, skipped = 0, 0
    if dry_run:
        return len(questions), 0

    # Import inside function so the script can be used standalone for dry-run
    sys.path.insert(0, str(ROOT / "backend"))
    from app.db.session import SessionLocal
    from app.models.question_bank import BankQuestion

    db = SessionLocal()
    try:
        for q in questions:
            src = q.get("source_id")
            if src:
                exists = db.query(BankQuestion.id).filter(
                    BankQuestion.source_id == src
                ).first()
                if exists:
                    skipped += 1
                    continue
            db.add(BankQuestion(**q))
            inserted += 1
        db.commit()
    except Exception as e:
        db.rollback()
        log.error(f"  DB write error: {e}")
    finally:
        db.close()

    return inserted, skipped


# ─── Main ──────────────────────────────────────────────────────────────────────

def run(subject_filter: str = "all", dry_run: bool = False, wipe: bool = False):
    subjects = (
        list(SUBJECTS.keys()) if subject_filter == "all"
        else [subject_filter]
    )

    grand_total = 0
    report = []

    for subj in subjects:
        cfg = SUBJECTS.get(subj)
        if not cfg:
            log.error(f"Unknown subject: {subj}")
            continue

        mcq_dir = cfg["dir"]
        if not mcq_dir.exists():
            log.warning(f"Directory not found: {mcq_dir}")
            continue

        if wipe and not dry_run:
            sys.path.insert(0, str(ROOT / "backend"))
            from app.db.session import SessionLocal
            from app.models.question_bank import BankQuestion
            db = SessionLocal()
            n = db.query(BankQuestion).filter(
                BankQuestion.subject == subj
            ).delete(synchronize_session=False)
            db.commit()
            db.close()
            log.info(f"  🗑  Wiped {n} existing rows for {subj}")

        log.info(f"\n{'='*55}")
        log.info(f"  {subj}")
        log.info(f"{'='*55}")

        pat = re.compile(cfg["pattern"])
        subj_inserted = subj_skipped = subj_invalid = 0

        for ts_file in sorted(mcq_dir.glob("*.ts")):
            m = pat.search(ts_file.name)
            if not m:
                continue

            try:
                ch_num = int(m.group(1))
            except (IndexError, ValueError):
                ch_num = 0

            qs = extract_chapter(ts_file, subj, ch_num)
            invalid_in_file = 0

            # Count invalids (total parsed - passed validation)
            raw_count = len(_parse_ts_file(ts_file.read_text(encoding="utf-8")))
            invalid_in_file = raw_count - len(qs)

            ins, skip = write_to_db(qs, dry_run)
            subj_inserted += ins
            subj_skipped += skip
            subj_invalid += invalid_in_file

            prefix = "[DRY] " if dry_run else ""
            log.info(
                f"  {prefix}Ch{ch_num:02d} {ts_file.name}: "
                f"valid={len(qs)} invalid={invalid_in_file} "
                f"ins={ins} dup={skip}"
            )

        log.info(
            f"\n  ✅ {subj}: inserted={subj_inserted} skipped_dup={subj_skipped} "
            f"invalid/broken={subj_invalid}"
        )
        grand_total += subj_inserted
        report.append({
            "subject": subj,
            "inserted": subj_inserted,
            "skipped": subj_skipped,
            "invalid": subj_invalid,
        })

    log.info(f"\n{'='*55}")
    log.info(f"  GRAND TOTAL INSERTED: {grand_total}")
    log.info(f"{'='*55}\n")

    # Print table
    print("\n{:<22} {:>8} {:>8} {:>8}".format("Subject", "Inserted", "Skipped", "Invalid"))
    print("-" * 52)
    for r in report:
        print("{:<22} {:>8} {:>8} {:>8}".format(
            r["subject"], r["inserted"], r["skipped"], r["invalid"]
        ))


if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument(
        "--subject", default="all",
        help="Subject to process: 'all', 'Modern History', 'Medieval History', etc."
    )
    p.add_argument("--dry-run", action="store_true", help="Validate only, don't write to DB")
    p.add_argument("--wipe", action="store_true", help="Delete existing rows first")
    args = p.parse_args()
    run(args.subject, args.dry_run, args.wipe)
