import sqlite3
from pathlib import Path
from datetime import datetime

DB_PATH = Path('backend/eduecosystem_v2.db')

def nuclear_fix():
    if not DB_PATH.exists():
        return
        
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    current_iso = datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')
    
    print(f"☢️  Nuclear Date Fix Starting (Current ISO: {current_iso})...")
    
    # 1. Clear rogue strings from all possibly relevant tables
    tables_to_fix = [
        ('concept_nodes', ['created_at', 'updated_at']),
        ('student_concept_mastery', ['last_activity_date', 'next_review_date', 'created_at', 'updated_at']),
        ('student_activity_log', ['timestamp']),
        ('bank_questions', ['created_at', 'updated_at']),
        ('users', ['created_at', 'updated_at'])
    ]
    
    for table, cols in tables_to_fix:
        for col in cols:
            try:
                # Update any non-standard date string or NULL
                cursor.execute(f"UPDATE {table} SET {col} = ? WHERE {col} NOT LIKE '20%' OR {col} IS NULL", (current_iso,))
                if cursor.rowcount > 0:
                    print(f"   🔧 Repaired {table}.{col}: {cursor.rowcount} rows")
            except Exception as e:
                # print(f"   ⚠️ Could not fix {table}.{col}: {e}")
                pass
                
    conn.commit()
    conn.close()
    print("🚀 Global Database Date Normalization Complete.")

if __name__ == "__main__":
    nuclear_fix()
