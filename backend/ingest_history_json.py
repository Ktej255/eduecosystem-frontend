import json
import logging
import os
from sqlalchemy.orm import Session
from app.db.session import SessionLocal
from app.models.question_bank import BankQuestion

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

DIFFICULTY_MAP = {
    "easy": "easy", "Easy": "easy",
    "medium": "medium", "Medium": "medium",
    "hard": "hard", "Hard": "hard",
}

def ingest_history_json(json_path: str, wipe_subject: bool = False):
    """
    Ingest history MCQs from a pre-extracted JSON file into bank_questions.
    Fixed version: correct field names, deduplication via source_id,
    proper level/difficulty/chapter_number mapping.
    """
    if not os.path.exists(json_path):
        logger.error(f"File not found: {json_path}")
        return

    with open(json_path, 'r', encoding='utf-8') as f:
        questions_data = json.load(f)

    db: Session = SessionLocal()
    try:
        if wipe_subject:
            subjects = set(q.get('subject', '') for q in questions_data if q.get('subject'))
            for subj in subjects:
                deleted = db.query(BankQuestion).filter(
                    BankQuestion.subject.ilike(subj)
                ).delete(synchronize_session=False)
                logger.info(f"Wiped {deleted} existing rows for subject: {subj}")
            db.commit()

        logger.info(f"Starting ingestion of {len(questions_data)} questions from {json_path}...")

        count = 0
        skipped_truncated = 0
        skipped_duplicate = 0
        batch_size = 500

        for i in range(0, len(questions_data), batch_size):
            batch = questions_data[i:i + batch_size]
            for item in batch:
                question_text = item.get('question', '').strip()

                # --- VALIDATION: skip broken/truncated questions ---
                if not question_text or len(question_text) < 10:
                    skipped_truncated += 1
                    continue
                # Question ends with comma = truncated mid-sentence
                if question_text.endswith(','):
                    skipped_truncated += 1
                    continue
                options = item.get('options', [])
                if not isinstance(options, list) or len(options) < 2:
                    skipped_truncated += 1
                    continue
                # Any option is suspiciously long (corruption sign: options containing A/B/C/D text)
                if any(len(str(o)) > 300 for o in options):
                    skipped_truncated += 1
                    continue

                # --- DEDUPLICATION via source_id ---
                source_id = str(item.get('id', ''))
                if source_id:
                    existing = db.query(BankQuestion).filter(
                        BankQuestion.source_id == source_id
                    ).first()
                    if existing:
                        skipped_duplicate += 1
                        continue

                # --- DIFFICULTY & LEVEL MAPPING ---
                raw_diff = item.get('difficulty', item.get('level_name', 'medium'))
                difficulty = DIFFICULTY_MAP.get(str(raw_diff), 'medium')

                # Level: use explicit field if present, else infer from difficulty
                level = item.get('level')
                if level not in (1, 2, 3):
                    level = {'easy': 1, 'medium': 2, 'hard': 3}.get(difficulty, 2)

                # --- CHAPTER NUMBER ---
                chapter_number = item.get('chapter_number') or item.get('chapterId')
                if chapter_number:
                    try:
                        chapter_number = int(chapter_number)
                    except (ValueError, TypeError):
                        chapter_number = None

                # --- BUILD RECORD using CORRECT field names ---
                q = BankQuestion(
                    instructor_id=1,  # Superuser / system account
                    text=question_text,                            # ✅ correct field: text (not question_text)
                    type="multiple_choice",
                    options=json.dumps(options, ensure_ascii=False),
                    correct_answer=str(item.get('correctAnswer', item.get('correct_answer', 0))),
                    explanation=item.get('explanation', ''),
                    difficulty=difficulty,
                    level=level,
                    subject=item.get('subject', ''),
                    chapter_number=chapter_number,
                    source_id=source_id if source_id else None,
                    topic_tag=item.get('topic_tag', item.get('topic', '')),
                )
                db.add(q)
                count += 1

            db.commit()
            logger.info(f"  Progress: {min(i + batch_size, len(questions_data))}/{len(questions_data)} processed | Inserted: {count} | Skipped truncated: {skipped_truncated} | Skipped duplicate: {skipped_duplicate}")

        logger.info(f"✅ Ingestion complete. Inserted: {count} | Skipped truncated: {skipped_truncated} | Skipped duplicate: {skipped_duplicate}")

    except Exception as e:
        db.rollback()
        logger.error(f"❌ Error during ingestion: {e}", exc_info=True)
    finally:
        db.close()


if __name__ == "__main__":
    path = os.environ.get("HISTORY_JSON_PATH", "/app/history_mcqs_extracted.json")
    if not os.path.exists(path):
        path = "history_mcqs_extracted.json"
    wipe = os.environ.get("WIPE_EXISTING", "false").lower() == "true"
    ingest_history_json(path, wipe_subject=wipe)
