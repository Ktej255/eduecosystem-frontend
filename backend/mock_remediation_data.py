import sqlite3
import os

DB_PATH = "d:/Development/EduEcosystem/backend/eduecosystem_v2.db"

def mock_data():
    if not os.path.exists(DB_PATH):
        print(f"Error: {DB_PATH} not found.")
        return

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    try:
        # 0. Ensure users table exists for mocking
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email VARCHAR NOT NULL UNIQUE,
                hashed_password VARCHAR NOT NULL,
                is_active BOOLEAN DEFAULT TRUE,
                is_superuser BOOLEAN DEFAULT FALSE
            )
        """)

        # 1. User
        cursor.execute("INSERT OR IGNORE INTO users (id, email, hashed_password, is_active, is_superuser) VALUES (1, 'test@example.com', '...', 1, 0)")

        # 2. Concept nodes
        nodes = [
            ('ENV_001', 'environment', 'Carbon Cycle', 'medium'),
            ('ENV_002', 'environment', 'Coral Bleaching', 'hard'),
            ('ENV_003', 'environment', 'Ozone Layer', 'foundation')
        ]
        
        for nid, sub, name, diff in nodes:
            cursor.execute("INSERT OR IGNORE INTO concept_nodes (node_id, subject_slug, node_name, difficulty_level) VALUES (?, ?, ?, ?)", (nid, sub, name, diff))

        # 3. Weak mastery
        cursor.execute("SELECT id, node_id FROM concept_nodes WHERE subject_slug = 'environment'")
        rows = cursor.fetchall()
        node_map = {row[1]: row[0] for row in rows}
        print(f"Node Map: {node_map}")

        mastery_data = [
            (1, node_map['ENV_001'], 45.0, 5),
            (1, node_map['ENV_002'], 30.5, 3),
            (1, node_map['ENV_003'], 85.0, 10)
        ]

        for sid, nid, score, count in mastery_data:
            cursor.execute("""
                INSERT OR REPLACE INTO student_concept_mastery (student_id, node_id, mastery_score, attempt_count, last_activity_date)
                VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)
            """, (sid, nid, score, count))

        conn.commit()
        print("Mock remediation data inserted successfully.")
        
    except sqlite3.Error as e:
        print(f"SQL Error: {e}")
    finally:
        conn.close()

if __name__ == "__main__":
    mock_data()
