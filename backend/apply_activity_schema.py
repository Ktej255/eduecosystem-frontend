import sqlite3
import os

db_path = os.path.join(os.path.dirname(__file__), "eduecosystem_v2.db")

conn = sqlite3.connect(db_path)
c = conn.cursor()

try:
    c.execute("ALTER TABLE student_activity_log ADD COLUMN content_id VARCHAR;")
    print("Added content_id to student_activity_log")
except Exception as e:
    print(f"Skipping content_id: {e}")

try:
    c.execute("ALTER TABLE student_activity_log RENAME COLUMN duration_seconds TO duration;")
    print("Renamed duration_seconds to duration")
except Exception as e:
    print(f"Skipping duration_seconds rename: {e}")
    try:
        c.execute("ALTER TABLE student_activity_log ADD COLUMN duration INTEGER;")
        print("Added duration to student_activity_log")
    except Exception as e2:
        pass

c.execute("""
    CREATE TABLE IF NOT EXISTS student_engine_decisions (
        decision_id      INTEGER PRIMARY KEY AUTOINCREMENT,
        student_id       INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        activity_id      INTEGER REFERENCES student_activity_log(id) ON DELETE SET NULL,
        next_action      VARCHAR NOT NULL,
        target_concept   VARCHAR,
        timestamp        TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
""")
print("Created student_engine_decisions table")

conn.commit()
conn.close()
print("Schema updates successfully applied to local SQLite database.")
