import sqlite3
import os

db_path = 'backend/eduecosystem_v2.db'
email = 'ktej2525@gmail.com'

if not os.path.exists(db_path):
    print(f"ERROR: {db_path} not found")
    exit(1)

conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Get column names
cursor.execute("PRAGMA table_info(users)")
cols = [col[1] for col in cursor.fetchall()]

# Get user data
cursor.execute("SELECT * FROM users WHERE email = ?", (email,))
user = cursor.fetchone()

if user:
    data = dict(zip(cols, user))
    # Exclude hashed_password and sensitive stuff for print
    safe_data = {k: v for k, v in data.items() if k not in ['hashed_password', 'totp_secret']}
    print(f"User Data for {email}:")
    for k, v in safe_data.items():
        print(f" - {k}: {v}")
else:
    print(f"FAILED: User {email} not found.")

conn.close()
