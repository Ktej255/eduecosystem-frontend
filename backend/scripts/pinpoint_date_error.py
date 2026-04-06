import sqlite3
from pathlib import Path
from datetime import datetime

DB_PATH = Path('backend/eduecosystem_v2.db')

def pinpoint():
    if not DB_PATH.exists():
        return
        
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    tables_to_check = ['concept_nodes', 'student_concept_mastery', 'student_activity_log']
    
    print("🎯 Pinpointing rogue date values...")
    
    for table in tables_to_check:
        cursor.execute(f"PRAGMA table_info({table})")
        cols = [c[1] for c in cursor.fetchall()]
        
        date_cols = [c for c in cols if 'date' in c.lower() or 'time' in c.lower() or 'created_at' in c or 'updated_at' in c]
        
        for col in date_cols:
            cursor.execute(f"SELECT id, {col} FROM {table}")
            rows = cursor.fetchall()
            for row_id, val in rows:
                if val:
                    try:
                        # Emulate what str_to_datetime might do
                        if isinstance(val, str) and not val.startswith('202'):
                             print(f"🚩 Rogue Candidate in {table}.{col} (ID {row_id}): {val}")
                    except:
                        pass
                else:
                    pass
                    
    conn.close()
    print("✅ Pinpoint search complete.")

if __name__ == "__main__":
    pinpoint()
