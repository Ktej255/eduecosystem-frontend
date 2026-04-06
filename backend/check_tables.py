import sqlite3
import os

db_path = 'eduecosystem_v2.db'
if not os.path.exists(db_path):
    print(f"ERROR: {db_path} not found in {os.getcwd()}")
else:
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table'")
    tables = [r[0] for r in cursor.fetchall()]
    print(f"Tables found: {len(tables)}")
    print(f"Contains 'users': {'users' in tables}")
    print(f"Contains 'bank_questions': {'bank_questions' in tables}")
    if 'bank_questions' in tables:
        cursor.execute("SELECT COUNT(*) FROM bank_questions")
        print(f"Row count in 'bank_questions': {cursor.fetchone()[0]}")
    conn.close()
