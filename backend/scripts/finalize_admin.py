import sqlite3
import os

db_path = 'backend/eduecosystem_v2.db'
email = 'ktej2525@gmail.com'

if not os.path.exists(db_path):
    print(f"ERROR: {db_path} not found")
    exit(1)

conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Set all necessary flags for a fully working admin
cursor.execute("""
    UPDATE users 
    SET is_active = 1, 
        is_superuser = 1, 
        is_verified = 1, 
        is_approved = 1 
    WHERE email = ?
""", (email,))

conn.commit()
print(f"SUCCESS: Admin user {email} is now fully active, elevated, and approved.")

conn.close()
