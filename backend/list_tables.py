import sqlite3
import os

db_path = r'd:\Development\EduEcosystem\backend\eduecosystem_v2.db'
if not os.path.exists(db_path):
    print(f"Error: {db_path} not found")
    exit(1)

conn = sqlite3.connect(db_path)
cursor = conn.cursor()
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = cursor.fetchall()
for t in tables:
    print(t[0])
conn.close()
