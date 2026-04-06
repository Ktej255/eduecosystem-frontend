import sqlite3
import os

db_path = "eduecosystem_v2.db"
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Get tables
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = [t[0] for t in cursor.fetchall()]

for table in ['users', 'concept_nodes', 'concept_signals', 'concept_relationships', 'student_concept_mastery', 'guided_clips']:
    if table in tables:
        cursor.execute(f"PRAGMA table_info({table});")
        columns = [f"{c[1]} ({c[2]})" for c in cursor.fetchall()]
        print(f"--- Table '{table}' ---")
        for col in columns:
            print(f"  {col}")
    else:
        print(f"--- Table '{table}' MISSING ---")

conn.close()
