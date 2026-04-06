import sqlite3
import os

DB_PATH = "eduecosystem_v2.db"

def fix_concept_nodes_schema():
    if not os.path.exists(DB_PATH):
        print(f"Error: {DB_PATH} not found.")
        return

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # Get current columns
    cursor.execute("PRAGMA table_info(concept_nodes)")
    columns = [row[1] for row in cursor.fetchall()]
    print(f"Current columns in concept_nodes: {columns}")

    # Columns missing in the current database vs the model 
    # (Especially 'context_nodes' added in Phase 21)
    missing_columns = []
    
    if "context_nodes" not in columns:
        missing_columns.append(("context_nodes", "TEXT DEFAULT '[]'"))

    if not missing_columns:
        print("No missing columns found in concept_nodes.")
    else:
        for col_name, col_def in missing_columns:
            print(f"Adding column {col_name} to concept_nodes...")
            try:
                cursor.execute(f"ALTER TABLE concept_nodes ADD COLUMN {col_name} {col_def}")
                print(f"Successfully added {col_name}.")
            except Exception as e:
                print(f"Failed to add {col_name}: {e}")

    conn.commit()
    conn.close()
    print("Schema fix completed.")

if __name__ == "__main__":
    fix_concept_nodes_schema()
