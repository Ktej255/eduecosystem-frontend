import sqlite3
import os

db_path = 'backend/eduecosystem_v2.db'

def check_columns(table_name):
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    cursor.execute(f"PRAGMA table_info({table_name})")
    cols = [col[1] for col in cursor.fetchall()]
    print(f"Columns for {table_name}: {cols}")
    conn.close()

if __name__ == "__main__":
    check_columns("concept_nodes")
    check_columns("concept_relationships")
