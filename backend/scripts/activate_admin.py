import sqlite3
import os

db_path = 'backend/eduecosystem_v2.db'
email = 'ktej2525@gmail.com'

if not os.path.exists(db_path):
    print(f"ERROR: {db_path} not found")
    exit(1)

conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# First, check column names to be sure
cursor.execute("PRAGMA table_info(users)")
columns = [col[1] for col in cursor.fetchall()]
print(f"User columns: {columns}")

update_parts = []
if "is_active" in columns: update_parts.append("is_active = 1")
if "is_superuser" in columns: update_parts.append("is_superuser = 1")
if "is_verified" in columns: update_parts.append("is_verified = 1")

if update_parts:
    query = f"UPDATE users SET {', '.join(update_parts)} WHERE email = ?"
    cursor.execute(query, (email,))
    conn.commit()
    print(f"SUCCESS: Admin user {email} activated and elevated.")
else:
    print("FAILED: No activation columns found in users table.")

conn.close()
