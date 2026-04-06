import sqlite3
import os

db_path = 'backend/eduecosystem_v2.db'
if not os.path.exists(db_path):
    print(f"ERROR: {db_path} not found")
    exit(1)

conn = sqlite3.connect(db_path)
cursor = conn.cursor()

cursor.execute("SELECT name FROM sqlite_master WHERE type='table'")
tables = [row[0] for row in cursor.fetchall()]

print("Existing tables in SQLite:")
for table in sorted(tables):
    print(f" - {table}")

node_table_exists = "concept_nodes" in tables
print(f"\nTarget table 'concept_nodes' exists: {node_table_exists}")

conn.close()
