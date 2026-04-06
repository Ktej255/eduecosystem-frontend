import sqlite3
from pathlib import Path

DB_PATH = Path('backend/eduecosystem_v2.db')

def wipe():
    if not DB_PATH.exists():
        return
        
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    print("🧨 Nuclear Intelligence Reset Initiated...")
    
    # 1. Clear mastery
    cursor.execute("DELETE FROM student_concept_mastery")
    print(f"   - Wiped student_concept_mastery: {cursor.rowcount} rows")
    
    # 2. Clear logs
    cursor.execute("DELETE FROM student_activity_log")
    print(f"   - Wiped student_activity_log: {cursor.rowcount} rows")
    
    # 3. Final normalization check on metadata
    cursor.execute("UPDATE concept_nodes SET difficulty_level = 'FOUNDATION' WHERE difficulty_level IS NULL")
    
    conn.commit()
    conn.close()
    print("✅ System Purged. Ready for Stress Test.")

if __name__ == "__main__":
    wipe()
