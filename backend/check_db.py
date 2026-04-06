import sqlite3
import os

db_path = "eduecosystem_v2.db"
if not os.path.exists(db_path):
    print(f"Error: {db_path} not found")
    exit(1)

conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Get tables
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = [t[0] for t in cursor.fetchall()]
print(f"Tables: {tables}")

# Get columns for users
if 'users' in tables:
    cursor.execute("PRAGMA table_info(users);")
    columns = [c[1] for c in cursor.fetchall()]
    print(f"Users columns: {columns}")
else:
    print("Users table missing")

# Check alembic_version
if 'alembic_version' in tables:
    cursor.execute("SELECT version_num FROM alembic_version;")
    version = cursor.fetchone()
    print(f"Alembic version: {version[0] if version else 'Empty'}")
else:
    print("Alembic version table missing")

conn.close()
