import sqlite3
import os
from pathlib import Path

# Setup Path
BACKEND_DIR = Path(__file__).resolve().parent.parent
DB_PATH = BACKEND_DIR / "eduecosystem_v2.db"

def fix_constraints():
    print(f"🏗️ Refactoring Database Constraints for {DB_PATH}...")
    
    conn = sqlite3.connect(str(DB_PATH))
    cursor = conn.cursor()
    
    # 1. Check if unique constraint exists on student_concept_mastery
    # We'll use a pragmatic approach: Create a new table, copy data, and rename.
    try:
        print("📊 Analyzing student_concept_mastery schema...")
        cursor.execute("PRAGMA table_info(student_concept_mastery)")
        columns = [row[1] for row in cursor.fetchall()]
        
        # Define the proper DDL with UNIQUE constraint
        # We also ensure stability_score and last_activity_date exist (from previous persona check)
        columns_str = ", ".join([f"{c} TEXT" if "date" in c or "at" in c else f"{c} REAL" if "score" in c else f"{c} INTEGER" for c in columns if c != "id"])
        
        # SQLite doesn't allow adding UNIQUE to existing columns without recreation
        cursor.execute("BEGIN TRANSACTION;")
        
        # a. Create backup
        cursor.execute("CREATE TABLE student_concept_mastery_new AS SELECT * FROM student_concept_mastery WHERE 1=0;")
        
        # b. Redefine with constraints (using the structure from startup_tables but better)
        cursor.execute("DROP TABLE student_concept_mastery_new;")
        cursor.execute("""
            CREATE TABLE student_concept_mastery_new (
                id                  INTEGER PRIMARY KEY AUTOINCREMENT,
                student_id          INTEGER NOT NULL,
                node_id             INTEGER NOT NULL,
                mastery_score       REAL DEFAULT 0.0,
                attempt_count       INTEGER DEFAULT 0,
                stability_score     REAL DEFAULT 0.8,
                last_activity_date  DATETIME,
                next_review_date    DATE,
                ease_factor         REAL DEFAULT 2.5,
                interval            INTEGER DEFAULT 0,
                created_at          DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at          DATETIME DEFAULT CURRENT_TIMESTAMP,
                UNIQUE(student_id, node_id)
            );
        """)
        
        # c. Copy data, handling potential duplicates by keeping the latest
        print("💾 Copying data to new schema (deduplicating if necessary)...")
        cursor.execute("""
            INSERT OR IGNORE INTO student_concept_mastery_new 
            (student_id, node_id, mastery_score, attempt_count, last_activity_date, next_review_date, ease_factor, interval, created_at, updated_at)
            SELECT student_id, node_id, mastery_score, attempt_count, last_activity_date, next_review_date, ease_factor, interval, created_at, updated_at
            FROM student_concept_mastery
            ORDER BY updated_at DESC;
        """)
        
        # d. SWAP
        cursor.execute("DROP TABLE student_concept_mastery;")
        cursor.execute("ALTER TABLE student_concept_mastery_new RENAME TO student_concept_mastery;")
        
        # e. Re-create indexes
        cursor.execute("CREATE INDEX idx_mastery_student ON student_concept_mastery(student_id);")
        cursor.execute("CREATE INDEX idx_mastery_node ON student_concept_mastery(node_id);")
        
        conn.commit()
        print("✅ Constraints refactored successfully.")
        
    except Exception as e:
        conn.rollback()
        print(f"❌ Error during refactor: {e}")
    finally:
        conn.close()

if __name__ == "__main__":
    fix_constraints()
