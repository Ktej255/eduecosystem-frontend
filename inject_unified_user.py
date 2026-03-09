import sqlite3
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
hashed_password = pwd_context.hash("Tej@1106")
target_db = 'backend/eduecosystem_v2.db'

try:
    conn = sqlite3.connect(target_db)
    cursor = conn.cursor()
    
    # Check if user exists
    cursor.execute("SELECT id FROM users WHERE email='ktej255@gmail.com'")
    user = cursor.fetchone()
    
    if user:
        cursor.execute("UPDATE users SET hashed_password=?, role='admin', is_active=1, is_superuser=1, is_approved=1, is_verified=1 WHERE email='ktej255@gmail.com'", (hashed_password,))
        print("Updated existing user to Admin with correct password.")
    else:
        cursor.execute(
            """INSERT INTO users (email, hashed_password, full_name, role, is_active, is_superuser, xp, is_approved, is_verified) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)""",
            ('ktej255@gmail.com', hashed_password, 'K Tej', 'admin', 1, 1, 0, 1, 1)
        )
        print("Inserted new unified admin/teacher/student test user.")

    conn.commit()
    conn.close()
    print("User creation successful. Ready for testing.")
except Exception as e:
    print("Database modification error:", e)
