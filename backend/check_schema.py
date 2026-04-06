import sqlite3

conn = sqlite3.connect("d:/Development/EduEcosystem/backend/eduecosystem_v2.db")
cursor = conn.cursor()
cursor.execute("PRAGMA table_info(concept_nodes)")
for row in cursor.fetchall():
    print(row)
conn.close()
