import sqlite3
from pathlib import Path

DB_PATH = Path('backend/eduecosystem_v2.db')

def diagnose():
    if not DB_PATH.exists():
        print("❌ DB not found.")
        return
        
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # 1. Get all tables
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table'")
    tables = [t[0] for t in cursor.fetchall()]
    
    print("🔍 Searching for 'CURRENT_DATETIME' anomaly...")
    for table in tables:
        cursor.execute(f"PRAGMA table_info({table})")
        columns = [c[1] for c in cursor.fetchall()]
        
        for col in columns:
            try:
                cursor.execute(f"SELECT count(*) FROM {table} WHERE {col} = 'CURRENT_DATETIME'")
                count = cursor.fetchone()[0]
                if count > 0:
                    print(f"🚩 FOUND IN {table}.{col}: {count} rows")
            except:
                pass
                
    conn.close()
    print("✅ Search complete.")

if __name__ == "__main__":
    diagnose()
