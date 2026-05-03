import sqlite3
import os

db_path = "eduecosystem_v2.db"
if not os.path.exists(db_path):
    print(f"Error: {db_path} not found")
else:
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
    tables = cursor.fetchall()
    print("Tables in eduecosystem_v2.db:")
    for t in tables:
        print(f" - {t[0]}")
    conn.close()
