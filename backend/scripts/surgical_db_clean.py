import sqlite3
from pathlib import Path
from datetime import datetime

DB_PATH = Path('backend/eduecosystem_v2.db')

def surgical_clean():
    if not DB_PATH.exists():
        return
        
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    current_iso = datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')
    
    print(f"🔬 Performing Surgical DB Clean (Current ISO: {current_iso})...")
    
    # 1. Get all tables
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table'")
    tables = [t[0] for t in cursor.fetchall()]
    
    total_fixed = 0
    
    for table in tables:
        # Get all columns for this table
        cursor.execute(f"PRAGMA table_info({table})")
        columns = [c[1] for c in cursor.fetchall()]
        
        for col in columns:
            try:
                # Update any column where the value is exactly our rogue string
                cursor.execute(f"UPDATE {table} SET {col} = ? WHERE {col} = 'CURRENT_DATETIME'", (current_iso,))
                if cursor.rowcount > 0:
                    print(f"   💊 Fixed {table}.{col}: {cursor.rowcount} rows")
                    total_fixed += cursor.rowcount
            except Exception as e:
                # Skip numeric columns or other types that might fail the comparison
                pass
                
    conn.commit()
    conn.close()
    print(f"✅ Global Surgical Clean Complete. Total Fixes: {total_fixed}")

if __name__ == "__main__":
    surgical_clean()
