import sqlite3
import os

db_path = "d:/Development/EduEcosystem/backend/eduecosystem_v2.db"

if not os.path.exists(db_path):
    print(f"Error: Database not found at {db_path}")
    exit(1)

conn = sqlite3.connect(db_path)
cursor = conn.cursor()

try:
    print("Renaming 'metadata' to 'session_metadata' in focused_active_sessions...")
    # SQLite 3.25.0+ supports RENAME COLUMN
    cursor.execute("ALTER TABLE focused_active_sessions RENAME COLUMN metadata TO session_metadata;")
    conn.commit()
    print("Column renamed successfully.")
except Exception as e:
    print(f"Error during rename: {e}")
    # If it fails, maybe it was already renamed?
    try:
        cursor.execute("SELECT session_metadata FROM focused_active_sessions LIMIT 1;")
        print("Confirmed: session_metadata already exists.")
    except:
        conn.rollback()
finally:
    conn.close()
