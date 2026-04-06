import sys
import os
from sqlalchemy import text
from app.db.session import SessionLocal, engine
from app.models.concept_node import ConceptNode
from app.models.question_bank import BankQuestion, StudentQuestionAttempt
from app.models.exam import ExamSession

def init_db():
    print("Initializing Phase 7 Schema...")
    db = SessionLocal()
    try:
        # 1. Create tables if they don't exist
        print("Ensuring tables exist...")
        # We'll use Base.metadata.create_all but only for the missing ones to be safe
        # Or better, just check if they exist first.
        
        from app.db.session import Base
        Base.metadata.create_all(bind=engine, tables=[
            ConceptNode.__table__,
            StudentQuestionAttempt.__table__,
            ExamSession.__table__
        ])
        print("Tables checked/created.")

        # 2. Sync bank_questions columns (node_id, quality_score)
        # Using raw SQL for column additions since create_all doesn't add columns to existing tables
        print("Syncing bank_questions columns...")
        
        # We'll use a try-except block for each column to avoid errors if they already exist
        cols_to_add = [
            ("node_id", "UUID"),
            ("quality_score", "FLOAT DEFAULT 1.0")
        ]
        
        for col_name, col_type in cols_to_add:
            try:
                db.execute(text(f"ALTER TABLE bank_questions ADD COLUMN {col_name} {col_type}"))
                print(f"Added column {col_name} to bank_questions.")
            except Exception as e:
                print(f"Column {col_name} might already exist or skipped: {e}")

        # 3. Add FK to bank_questions for node_id if missing
        try:
            db.execute(text("ALTER TABLE bank_questions ADD CONSTRAINT fk_bank_questions_node_id FOREIGN KEY (node_id) REFERENCES concept_nodes(node_id)"))
            print("Added FK constraint to bank_questions.")
        except Exception as e:
            print(f"FK constraint might already exist or skipped: {e}")

        db.commit()
        print("Schema Sync Complete.")
        
    except Exception as e:
        print(f"Error during initialization: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    init_db()
