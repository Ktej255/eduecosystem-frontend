import sqlite3
import os

db_path = "eduecosystem_v2.db"
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Get existing columns
cursor.execute("PRAGMA table_info(users);")
existing_columns = [c[1] for c in cursor.fetchall()]

# Define ALL missing columns identified from User model
final_columns = [
    ("totp_secret", "VARCHAR"),
    ("push_subscription", "JSON"),
]

for col_name, col_type in final_columns:
    if col_name not in existing_columns:
        print(f"Adding column {col_name}...")
        try:
            cursor.execute(f"ALTER TABLE users ADD COLUMN {col_name} {col_type};")
        except Exception as e:
            print(f"Error adding {col_name}: {e}")

conn.commit()
conn.close()
print("Database schema final adjustment done.")
