import sqlite3
import os

db_path = 'backend/eduecosystem_v2.db'
if not os.path.exists(db_path):
    print(f"Error: {db_path} not found.")
    exit(1)

conn = sqlite3.connect(db_path)
cursor = conn.cursor()

def audit():
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table'")
    tables = [t[0] for t in cursor.fetchall()]
    
    found_poison = False
    for table in tables:
        try:
            cursor.execute(f"PRAGMA table_info('{table}')")
            columns = cursor.fetchall()
            
            # Check DDL defaults
            for col in columns:
                if col[4] and 'CURRENT_DATETIME' in str(col[4]):
                    print(f"[POISON DDL] Table '{table}', Column '{col[1]}' has default: {col[4]}")
                    found_poison = True
            
            # Check actual data
            cursor.execute(f"SELECT * FROM \"{table}\"")
            rows = cursor.fetchall()
            col_names = [c[1] for c in columns]
            
            for row_idx, row in enumerate(rows):
                for col_idx, val in enumerate(row):
                    if str(val) == 'CURRENT_DATETIME':
                        print(f"[POISON DATA] Table '{table}', Row {row_idx}, Column '{col_names[col_idx]}' is literal 'CURRENT_DATETIME'")
                        found_poison = True
        except Exception as e:
            print(f"Error auditing table {table}: {e}")

    if not found_poison:
        print("No 'CURRENT_DATETIME' poison found in DDL or DATA.")

if __name__ == "__main__":
    audit()
    conn.close()
