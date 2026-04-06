import sqlite3
import os

DB_PATH = "d:/Development/EduEcosystem/backend/eduecosystem_v2.db"

def patch_mastery_schema():
    if not os.path.exists(DB_PATH):
        print(f"Database not found at {DB_PATH}")
        return

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # List of columns to check/add
    columns_to_add = [
        ("consecutive_correct", "INTEGER DEFAULT 0"),
        ("stability_score", "FLOAT DEFAULT 0.0"),
        ("mastery_velocity", "FLOAT DEFAULT 0.0"),
        ("status", "VARCHAR(20) DEFAULT 'Red'"),
        ("is_at_risk", "BOOLEAN DEFAULT 0")
    ]

    # Get existing columns
    try:
        cursor.execute("PRAGMA table_info(student_concept_mastery)")
        existing_columns = [row[1] for row in cursor.fetchall()]
    except Exception as e:
        print(f"Error checking table info: {e}")
        return

    for col_name, col_type in columns_to_add:
        if col_name not in existing_columns:
            print(f"Adding column {col_name} to student_concept_mastery...")
            try:
                cursor.execute(f"ALTER TABLE student_concept_mastery ADD COLUMN {col_name} {col_type}")
            except Exception as e:
                print(f"Error adding {col_name}: {e}")
        else:
            print(f"Column {col_name} already exists.")

    conn.commit()
    conn.close()
    print("Schema patch complete.")

if __name__ == "__main__":
    patch_mastery_schema()
