"""
Universal MCQ Ingestion Script
Reads TypeScript MCQ files directly from the frontend source,
extracts and validates questions, then inserts into bank_questions DB.

Usage:
    python scripts/ingest_from_ts.py --subject "Modern History" [--chapter 1] [--wipe] [--dry-run]
    python scripts/ingest_from_ts.py --subject all [--wipe] [--dry-run]

Level Assignment (if not tagged in source):
    Position 1-30  → Level 1 (Easy)
    Position 31-60 → Level 2 (Medium/UPSC Prelims)
    Position 61-90 → Level 3 (Hard/UPSC Standard)
"""

import os
import sys
import re
import json
import argparse
import logging
from pathlib import Path

# Add backend to path for imports
BACKEND_DIR = Path(__file__).parent.parent
sys.path.insert(0, str(BACKEND_DIR))

from sqlalchemy.orm import Session
from app.db.session import SessionLocal
from app.models.question_bank import BankQuestion

logging.basicConfig(level=logging.INFO, format='%(asctime)s %(levelname)s %(message)s')
logger = logging.getLogger(__name__)

# ─── Path configuration ────────────────────────────────────────────────────────
FRONTEND_ROOT = BACKEND_DIR.parent / "frontend" / "src" / "components" / "upsc" / "subjects"

SUBJECT_CONFIG = {
    "Modern History": {
        "path": FRONTEND_ROOT / "history" / "data" / "mcqs" / "modern",
        "pattern": r"chapter(\d+)\.ts$",
        "chapters": 39,
    },
    "Ancient History": {
        "path": FRONTEND_ROOT / "history" / "data" / "mcqs" / "ancient",
        "pattern": r"chapter(\d+)-data\.ts$",
        "chapters": 27,
    },
    "Medieval History": {
        "path": FRONTEND_ROOT / "history" / "data" / "mcqs" / "medieval",
        "pattern": r"chapter(\d+)\.ts$",
        "chapters": 20,
    },
    "Polity": {
        "path": FRONTEND_ROOT / "polity" / "data",
        "pattern": r"chapter(\d+)-mcqs\.ts$",
        "chapters": 95,
    },
    "Geography": {
        "path": FRONTEND_ROOT / "geography" / "data" / "mcqs",
        "pattern": r"ncert-(.+)\.ts$",
        "chapters": None,  # Geography is not chapter-based
    },
}

DIFFICULTY_FROM_LEVEL = {1: "easy", 2: "medium", 3: "hard"}
LEVEL_FROM_DIFFICULTY = {"easy": 1, "Easy": 1, "medium": 2, "Medium": 2, "hard": 3, "Hard": 3}


# ─── TypeScript Parser ─────────────────────────────────────────────────────────

def _options_to_str_list(options_raw) -> list[str]:
    """Normalize options to a list of plain strings."""
    if not isinstance(options_raw, list):
        return []
    result = []
    for o in options_raw:
        if isinstance(o, dict):
            # {id: "a", text: "..."} format (Medieval History)
            result.append(str(o.get("text", o.get("value", str(o)))))
        else:
            result.append(str(o))
    return result


def _normalize_correct_answer(correct_raw, options: list[str]) -> str:
    """
    Normalize correctAnswer to a 0-based integer string.
    Handles: integer 0-3, letter "a"/"b"/"c"/"d", string "0"-"3"
    """
    if isinstance(correct_raw, int):
        return str(correct_raw)
    if isinstance(correct_raw, str):
        c = correct_raw.strip().lower()
        letter_map = {"a": "0", "b": "1", "c": "2", "d": "3"}
        if c in letter_map:
            return letter_map[c]
        if c.isdigit():
            return c
    return "0"


def _parse_ts_array(raw: str) -> list | None:
    """
    Try multiple strategies to parse a TypeScript array into a Python list.
    Returns None if all strategies fail.
    """
    # Remove import lines and TypeScript type annotations
    cleaned = re.sub(r'^import\s+.*?;\s*$', '', raw, flags=re.MULTILINE)
    cleaned = re.sub(r'^//.*$', '', cleaned, flags=re.MULTILINE)
    # Remove: export const NAME: Type[] = | export const NAME =
    cleaned = re.sub(r'export\s+const\s+\w+\s*(?::\s*[\w<>\[\]|,\s]+)?\s*=\s*', '', cleaned)
    cleaned = cleaned.strip().rstrip(';').strip()

    if not cleaned or not cleaned.startswith('['):
        return None

    # Strategy 1: Direct JSON parse (works for files with quoted keys)
    try:
        return json.loads(cleaned)
    except json.JSONDecodeError:
        pass

    # Strategy 2: Fix trailing commas
    fixed = re.sub(r',\s*([}\]])', r'\1', cleaned)
    try:
        return json.loads(fixed)
    except json.JSONDecodeError:
        pass

    # Strategy 3: Quote unquoted JS object keys
    # Matches: key: "value" or key: [...] or key: {...}
    # and converts to "key": ...
    quoted = re.sub(r'(?<!["\w])(\b[a-zA-Z_]\w*\b)\s*:', r'"\1":', fixed)
    # But don't double-quote already quoted keys: "key": → restore
    quoted = re.sub(r'"("[\w]+")":', r'\1:', quoted)
    quoted = re.sub(r',\s*([}\]])', r'\1', quoted)
    try:
        return json.loads(quoted)
    except json.JSONDecodeError:
        pass

    # Strategy 4: Extract individual objects via regex (most robust fallback)
    objects = []
    for match in re.finditer(r'\{[^{}]*(?:\{[^{}]*\}[^{}]*)?\}', cleaned, re.DOTALL):
        try:
            obj_str = match.group(0)
            # Quote unquoted keys
            obj_str = re.sub(r'(?<!["\w])(\b[a-zA-Z_]\w*\b)\s*:', r'"\1":', obj_str)
            obj_str = re.sub(r'"("[\w]+")":', r'\1:', obj_str)
            obj_str = re.sub(r',\s*([}\]])', r'\1', obj_str)
            obj = json.loads(obj_str)
            if isinstance(obj, dict) and ('question' in obj or 'text' in obj):
                objects.append(obj)
        except json.JSONDecodeError:
            continue

    return objects if objects else None


def extract_questions_from_ts(ts_path: Path, subject: str, chapter_number: int) -> list[dict]:
    """
    Parse a TypeScript MCQ file and extract question objects.
    Returns a list of clean dicts ready for DB insertion.
    Handles both formats:
      - Format A: options = ["string", ...], correctAnswer = 0 (integer-indexed)
      - Format B: options = [{id:"a", text:"..."}, ...], correctAnswer = "b" (letter)
    """
    try:
        raw = ts_path.read_text(encoding='utf-8')
    except Exception as e:
        logger.error(f"Cannot read {ts_path}: {e}")
        return []

    data = _parse_ts_array(raw)
    if not data:
        logger.warning(f"JSON parse failed for {ts_path.name}: could not extract array")
        return []

    if not isinstance(data, list):
        logger.warning(f"{ts_path.name}: expected array, got {type(data)}")
        return []

    questions = []
    for pos, item in enumerate(data, start=1):
        if not isinstance(item, dict):
            continue

        question_text = str(item.get('question', item.get('text', ''))).strip()
        options_raw = item.get('options', [])
        correct_raw = item.get('correctAnswer', item.get('correct_answer', item.get('answer', 0)))
        explanation = str(item.get('explanation', '')).strip()
        source_id = str(item.get('id', f"{subject[:3].replace(' ', '')}-{chapter_number}-{pos}"))

        # Normalize to plain strings
        options = _options_to_str_list(options_raw)
        correct_answer = _normalize_correct_answer(correct_raw, options)

        # ── Validation ─────────────────────────────────────────────
        if not question_text or len(question_text) < 10:
            continue
        if question_text.endswith(','):
            continue
        if len(options) < 2:
            continue
        if any(len(o) > 300 for o in options):
            continue
        if correct_raw is None:
            continue

        # Sanitize placeholder explanations
        if explanation in ('Explanation pending.', 'Explanation pending'):
            explanation = ''

        # ── Level & Difficulty ──────────────────────────────────────
        level = item.get('level')
        difficulty = str(item.get('difficulty', '')).lower()

        if isinstance(level, int) and level in (1, 2, 3):
            difficulty = DIFFICULTY_FROM_LEVEL[level]
        elif difficulty in LEVEL_FROM_DIFFICULTY:
            level = LEVEL_FROM_DIFFICULTY[difficulty]
        else:
            if pos <= 30:
                level, difficulty = 1, "easy"
            elif pos <= 60:
                level, difficulty = 2, "medium"
            else:
                level, difficulty = 3, "hard"

        questions.append({
            "source_id": source_id,
            "text": question_text,
            "options": json.dumps(options, ensure_ascii=False),
            "correct_answer": correct_answer,
            "explanation": explanation,
            "subject": subject,
            "chapter_number": chapter_number,
            "level": level,
            "difficulty": difficulty,
            "type": "multiple_choice",
            "instructor_id": 1,
        })

    return questions


# ─── Database Writer ───────────────────────────────────────────────────────────

def write_to_db(questions: list[dict], db: Session, dry_run: bool = False) -> dict:
    inserted = 0
    skipped_dup = 0

    for q in questions:
        src = q.get('source_id')
        if src:
            exists = db.query(BankQuestion.id).filter(
                BankQuestion.source_id == src
            ).first()
            if exists:
                skipped_dup += 1
                continue

        if not dry_run:
            record = BankQuestion(**q)
            db.add(record)
        inserted += 1

    if not dry_run:
        db.commit()

    return {"inserted": inserted, "skipped_dup": skipped_dup}


# ─── Main Orchestrator ─────────────────────────────────────────────────────────

def run_ingestion(subject: str = "all", chapter_filter: int = None,
                  wipe: bool = False, dry_run: bool = False):

    subjects = list(SUBJECT_CONFIG.keys()) if subject == "all" else [subject]

    for subj in subjects:
        config = SUBJECT_CONFIG.get(subj)
        if not config:
            logger.error(f"Unknown subject: {subj}")
            continue

        mcq_dir = config["path"]
        if not mcq_dir.exists():
            logger.warning(f"Directory not found: {mcq_dir}")
            continue

        logger.info(f"\n{'='*60}")
        logger.info(f"Processing: {subj}")
        logger.info(f"Directory:  {mcq_dir}")
        logger.info(f"{'='*60}")

        db = SessionLocal()
        try:
            if wipe and not dry_run:
                deleted = db.query(BankQuestion).filter(
                    BankQuestion.subject == subj
                ).delete(synchronize_session=False)
                db.commit()
                logger.info(f"🗑️  Wiped {deleted} existing rows for {subj}")

            total_inserted = 0
            total_skipped = 0
            chapters_processed = 0

            pattern = re.compile(config["pattern"])
            ts_files = sorted(mcq_dir.glob("*.ts"))

            for ts_file in ts_files:
                m = pattern.search(ts_file.name)
                if not m:
                    continue

                chapter_num = int(m.group(1)) if m.lastindex else 0
                if chapter_filter and chapter_num != chapter_filter:
                    continue

                questions = extract_questions_from_ts(ts_file, subj, chapter_num)
                if not questions:
                    logger.warning(f"  Ch{chapter_num}: 0 valid questions extracted from {ts_file.name}")
                    continue

                stats = write_to_db(questions, db, dry_run=dry_run)
                total_inserted += stats["inserted"]
                total_skipped += stats["skipped_dup"]
                chapters_processed += 1

                prefix = "[DRY-RUN] " if dry_run else ""
                logger.info(
                    f"  {prefix}Ch{chapter_num:02d}: "
                    f"{stats['inserted']} inserted | "
                    f"{stats['skipped_dup']} duplicate | "
                    f"{len(questions)} valid from {ts_file.name}"
                )

            logger.info(f"\n✅ {subj} COMPLETE: {chapters_processed} chapters | "
                        f"{total_inserted} inserted | {total_skipped} duplicates skipped")

        except Exception as e:
            db.rollback()
            logger.error(f"❌ Error for {subj}: {e}", exc_info=True)
        finally:
            db.close()


# ─── Verification Report ───────────────────────────────────────────────────────

def print_verification_report():
    """Print a summary of what's currently in the DB by subject/chapter/level."""
    db = SessionLocal()
    try:
        from sqlalchemy import text
        result = db.execute(text("""
            SELECT subject, chapter_number, level, difficulty, COUNT(*) as count
            FROM bank_questions
            WHERE subject IS NOT NULL
            GROUP BY subject, chapter_number, level, difficulty
            ORDER BY subject, chapter_number, level
        """)).fetchall()

        current_subject = None
        print("\n" + "="*70)
        print("  DB VERIFICATION REPORT — bank_questions")
        print("="*70)
        for row in result:
            subject, ch, lvl, diff, cnt = row
            if subject != current_subject:
                print(f"\n📚 {subject}")
                current_subject = subject
            ch_str = f"Ch{ch:02d}" if ch else "No Ch"
            lvl_str = f"L{lvl}" if lvl else "No Lvl"
            print(f"   {ch_str} | {lvl_str} | {diff:6s} | {cnt:4d} questions")
        print("="*70)
    finally:
        db.close()


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Universal MCQ TS → DB Ingestion")
    parser.add_argument("--subject", default="all",
                        help="Subject name or 'all'. Options: 'Modern History', 'Ancient History', 'Medieval History', 'Polity', 'Geography'")
    parser.add_argument("--chapter", type=int, default=None,
                        help="Only process this chapter number")
    parser.add_argument("--wipe", action="store_true",
                        help="Delete existing rows for the subject before inserting")
    parser.add_argument("--dry-run", action="store_true",
                        help="Validate and count without writing to DB")
    parser.add_argument("--report", action="store_true",
                        help="Show verification report of current DB state")
    args = parser.parse_args()

    if args.report:
        print_verification_report()
    else:
        run_ingestion(
            subject=args.subject,
            chapter_filter=args.chapter,
            wipe=args.wipe,
            dry_run=args.dry_run,
        )
        if not args.dry_run:
            print_verification_report()
