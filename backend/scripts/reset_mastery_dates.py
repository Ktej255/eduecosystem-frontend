import sqlite3
from pathlib import Path
from datetime import datetime

DB_PATH = Path('backend/eduecosystem_v2.db')

def cleanup():
    if not DB_PATH.exists():
        return
        
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    current_iso = datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')
    
    print(f"🧹 Cleaning up invalid date strings (Current: {current_iso})...")
    
    # 1. Fix student_concept_mastery
    cursor.execute("UPDATE student_concept_mastery SET last_activity_date = ? WHERE last_activity_date IS NULL OR last_activity_date NOT LIKE '20%'", (current_iso,))
    print(f"   - Fixed student_concept_mastery.last_activity_date: {cursor.rowcount} rows")
    
    cursor.execute("UPDATE student_concept_mastery SET created_at = ? WHERE created_at NOT LIKE '20%'", (current_iso,))
    cursor.execute("UPDATE student_concept_mastery SET updated_at = ? WHERE updated_at NOT LIKE '20%'", (current_iso,))
    
    # 2. Fix student_activity_log
    cursor.execute("UPDATE student_activity_log SET timestamp = ? WHERE timestamp NOT LIKE '20%'", (current_iso,))
    print(f"   - Fixed student_activity_log.timestamp: {cursor.rowcount} rows")
    
    conn.commit()
    conn.close()
    print("✅ Cleanup Complete.")

if __name__ == "__main__":
    cleanup()
