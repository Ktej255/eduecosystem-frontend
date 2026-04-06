import sqlite3
import os

db_path = 'eduecosystem_v2.db'
if not os.path.exists(db_path):
    print(f"ERROR: Database not found at {db_path}")
    exit(1)

conn = sqlite3.connect(db_path)
cursor = conn.cursor()

def run_query(title, query):
    print(f"\n--- {title} ---")
    try:
        cursor.execute(query)
        rows = cursor.fetchall()
        if not rows:
            print("No data found.")
        else:
            for row in rows:
                print(row)
    except Exception as e:
        print(f"ERROR running query: {e}")

# Query 1: Activity Log
run_query("Latest Student Activity (student_activity_log)", 
          "SELECT id, student_id, node_id, content_id, activity_type, score, timestamp FROM student_activity_log ORDER BY timestamp DESC LIMIT 5;")

# Query 2: MCQ Attempt Concepts
run_query("Latest MCQ Attempt Concepts", 
          "SELECT id, mcq_id, node_id, is_correct, timestamp FROM mcq_attempt_concepts ORDER BY timestamp DESC LIMIT 5;")

# Query 3: Mastery Scores
run_query("Latest Concept Mastery Updates", 
          "SELECT id, student_id, node_id, mastery_score, last_activity_date FROM student_concept_mastery ORDER BY updated_at DESC LIMIT 5;")

# Verify Tables Exist
run_query("Table List", "SELECT name FROM sqlite_master WHERE type='table';")

conn.close()
