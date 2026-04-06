import sys
import os
from sqlalchemy import text
from sqlalchemy.orm import Session

# Add the parent directory to the path so we can import app
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.db.session import SessionLocal
from app.models.question_bank import BankQuestion, bank_question_node_association

def migrate():
    db = SessionLocal()
    try:
        print("Starting BankQuestion M2M Migration...")
        
        # 1. Fetch all questions that have a node_id but no entry in association table
        questions = db.query(BankQuestion).filter(BankQuestion.node_id.isnot(None)).all()
        print(f"Found {len(questions)} questions with legacy node_id.")
        
        migrated = 0
        skipped = 0
        
        for q in questions:
            # Check if association already exists
            # node_id in BankQuestion is a string (GUID), but we need to find the integer ID of ConceptNode
            node_row = db.execute(text(
                "SELECT id FROM concept_nodes WHERE node_id = :nid LIMIT 1"
            ), {"nid": str(q.node_id)}).fetchone()
            
            if not node_row:
                # print(f"  [SKIP] Node {q.node_id} not found in concept_nodes for Question {q.id}")
                skipped += 1
                continue
                
            node_internal_id = node_row[0]
            
            # Check if relationship already exists
            exists = db.execute(text(
                "SELECT 1 FROM bank_question_node_association WHERE bank_question_id = :qid AND concept_node_id = :nid"
            ), {"qid": q.id, "nid": node_internal_id}).fetchone()
            
            if not exists:
                db.execute(bank_question_node_association.insert().values(
                    bank_question_id=q.id,
                    concept_node_id=node_internal_id
                ))
                migrated += 1
            else:
                skipped += 1
        
        db.commit()
        print(f"Migration Complete!")
        print(f"  Total Migrated: {migrated}")
        print(f"  Total Skipped/Existing: {skipped}")
        
    except Exception as e:
        print(f"Migration Failed: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    migrate()
