import sqlite3
import os

db_path = 'backend/eduecosystem_v2.db'
email = 'ktej2525@gmail.com'
new_hash = '$2b$12$R9pkFvoxnHpXSn19sqSpI.jayE3Gie4N0L9QSfz8zYVv91d4LCcJa'

if not os.path.exists(db_path):
    print(f"ERROR: {db_path} not found")
    exit(1)

conn = sqlite3.connect(db_path)
cursor = conn.cursor()

cursor.execute("SELECT email FROM users WHERE email = ?", (email,))
user = cursor.fetchone()

if user:
    cursor.execute("UPDATE users SET hashed_password = ? WHERE email = ?", (new_hash, email))
    conn.commit()
    print(f"SUCCESS: Password updated for {email}")
else:
    print(f"FAILED: User {email} not found in SQLite")
    cursor.execute("SELECT email FROM users LIMIT 10")
    print("Sample users in DB:", [row[0] for row in cursor.fetchall()])

conn.close()
