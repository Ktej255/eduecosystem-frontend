import sqlite3

try:
    conn = sqlite3.connect('backend/eduecosystem_v2.db')
    cursor = conn.cursor()
    cursor.execute("SELECT email, is_active FROM users WHERE email='student@example.com' OR email='teacher@example.com' OR email='admin@example.com'")
    users = cursor.fetchall()
    print("Test Users in DB:", users)
    conn.close()
except Exception as e:
    print("Error:", e)
