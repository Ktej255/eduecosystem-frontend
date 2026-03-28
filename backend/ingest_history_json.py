import json
import logging
import os
from sqlalchemy.orm import Session
from app.db.session import SessionLocal
from app.models.question_bank import BankQuestion

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def ingest_history_json(json_path):
    if not os.path.exists(json_path):
        logger.error(f"File not found: {json_path}")
        return

    with open(json_path, 'r', encoding='utf-8') as f:
        questions_data = json.load(f)

    db = SessionLocal()
    try:
        logger.info(f"Starting ingestion of {len(questions_data)} history questions...")
        
        count = 0
        batch_size = 500
        
        for i in range(0, len(questions_data), batch_size):
            batch = questions_data[i:i + batch_size]
            for item in batch:
                # Map difficulty to standardized labels if needed
                diff = item.get('difficulty', 'medium').capitalize()
                if diff not in ['Easy', 'Medium', 'Hard']:
                    diff = 'Medium'
                
                q = BankQuestion(
                    question_text=item['question'],
                    options=item['options'],
                    correct_answer=item['correct_answer'],
                    explanation=item.get('explanation', ''),
                    subject=item['subject'],
                    difficulty=diff,
                    category=item.get('category', 'UPSC'),
                    metadata_info={
                        "source": "frontend_extracted",
                        "chapter": item.get('chapter', 'general')
                    }
                )
                db.add(q)
                count += 1
            
            db.commit()
            logger.info(f"Ingested {count}/{len(questions_data)} questions...")
            
        logger.info("Ingestion completed successfully.")
        
    except Exception as e:
        db.rollback()
        logger.error(f"Error during ingestion: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    # Default path when bundled in image
    path = os.environ.get("HISTORY_JSON_PATH", "/app/history_mcqs_extracted.json")
    if not os.path.exists(path):
        # Fallback for local testing
        path = "history_mcqs_extracted.json"
    
    ingest_history_json(path)
