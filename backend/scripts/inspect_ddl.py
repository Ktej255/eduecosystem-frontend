import sqlite3
from pathlib import Path

DB_PATH = Path('backend/eduecosystem_v2.db')

def inspect():
    if not DB_PATH.exists():
        return
        
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    print("🔍 Inspecting SQLite DDL for 'CURRENT_DATETIME' anomaly...")
    
    cursor.execute("SELECT name, sql FROM sqlite_master WHERE type='table'")
    tables = cursor.fetchall()
    
    found = False
    for name, sql in tables:
        if sql and 'CURRENT_DATETIME' in sql:
            print(f"🚩 FOUND in table '{name}' DDL!")
            print(f"   DDL: {sql}")
            found = True
            
    if not found:
        print("✅ No 'CURRENT_DATETIME' found in any table DDL.")
        
    conn.close()

if __name__ == "__main__":
    inspect()
