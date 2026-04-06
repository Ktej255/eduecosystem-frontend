import sqlite3
import json

def get_schema():
    conn = sqlite3.connect('backend/eduecosystem_v2.db')
    cursor = conn.cursor()
    
    print("--- concept_nodes schema ---")
    cursor.execute("PRAGMA table_info(concept_nodes)")
    for col in cursor.fetchall():
        print(col)
        
    print("\n--- concept_relationships schema ---")
    cursor.execute("PRAGMA table_info(concept_relationships)")
    for col in cursor.fetchall():
        print(col)
        
    print("\n--- Sample History Node ---")
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM concept_nodes WHERE subject_slug = 'history' LIMIT 1")
    row = cursor.fetchone()
    if row:
        print(dict(row))
    else:
        print("No history nodes found")
        
    print("\n--- Sample History Edge ---")
    cursor.execute("""
        SELECT cr.* FROM concept_relationships cr
        JOIN concept_nodes cn ON cn.id = cr.from_node_id
        WHERE cn.subject_slug = 'history' LIMIT 1
    """)
    row = cursor.fetchone()
    if row:
        print(dict(row))
    else:
        print("No history edges found")
        
    conn.close()

if __name__ == "__main__":
    get_schema()
