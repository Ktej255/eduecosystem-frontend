import sqlite3

conn = sqlite3.connect("d:/Development/EduEcosystem/backend/eduecosystem_v2.db")
cursor = conn.cursor()

for table in ["concept_nodes", "student_concept_mastery", "student_activity_log"]:
    print(f"--- {table} ---")
    cursor.execute(f"PRAGMA table_info({table})")
    for row in cursor.fetchall():
        print(row)

conn.close()
