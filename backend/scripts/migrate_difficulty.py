import sqlite3
from pathlib import Path

DB_PATH = Path('backend/eduecosystem_v2.db')

def migrate():
    if not DB_PATH.exists():
        print(f"❌ DB not found at {DB_PATH}")
        return
        
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    print("🚦 Starting Global Difficulty Normalization...")
    
    # 1. 'medium' and 'upsc_overlay' -> 'UPSC_OVERLAY'
    cursor.execute("UPDATE concept_nodes SET difficulty_level = 'UPSC_OVERLAY' WHERE difficulty_level IN ('medium', 'upsc_overlay')")
    print(f"   - Fixed UPSC_OVERLAY: {cursor.rowcount} rows")
    
    # 2. 'hard' and 'advanced' -> 'ADVANCED'
    cursor.execute("UPDATE concept_nodes SET difficulty_level = 'ADVANCED' WHERE difficulty_level IN ('hard', 'advanced')")
    print(f"   - Fixed ADVANCED: {cursor.rowcount} rows")
    
    # 3. '1', 'easy', 'foundation' -> 'FOUNDATION'
    cursor.execute("UPDATE concept_nodes SET difficulty_level = 'FOUNDATION' WHERE difficulty_level IN ('1', 'easy', 'foundation')")
    print(f"   - Fixed FOUNDATION: {cursor.rowcount} rows")
    
    conn.commit()
    conn.close()
    print("✅ Normalization Complete.")

if __name__ == "__main__":
    migrate()
