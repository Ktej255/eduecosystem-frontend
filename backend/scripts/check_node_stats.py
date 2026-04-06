import sqlite3

db_path = 'backend/eduecosystem_v2.db'

def get_stats():
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    print("--- Subject Node Counts ---")
    cursor.execute("SELECT subject_slug, COUNT(*) FROM concept_nodes GROUP BY subject_slug")
    for row in cursor.fetchall():
        print(f"Subject: {row[0]}, Count: {row[1]}")
        
    print("\n--- Difficulty Distribution per Subject ---")
    cursor.execute("SELECT subject_slug, difficulty_level, COUNT(*) FROM concept_nodes GROUP BY subject_slug, difficulty_level")
    for row in cursor.fetchall():
        print(f"Subject: {row[0]}, Difficulty: {row[1]}, Count: {row[2]}")
        
    conn.close()

if __name__ == "__main__":
    get_stats()
