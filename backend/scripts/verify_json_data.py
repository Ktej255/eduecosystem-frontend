import sqlite3
import os
import json

db_path = 'backend/eduecosystem_v2.db'
if not os.path.exists(db_path):
    print(f"ERROR: {db_path} not found")
    exit(1)

conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Get a sample row from concept_nodes
cursor.execute("SELECT node_id, exam_relevance, context_nodes FROM concept_nodes LIMIT 1")
row = cursor.fetchone()

if row:
    print(f"Node ID: {row[0]}")
    print(f"Exam Relevance: {row[1]} (Type: {type(row[1])})")
    print(f"Context Nodes: {row[2]} (Type: {type(row[2])})")
    
    # Try parsing
    try:
        rel = json.loads(row[1]) if isinstance(row[1], str) else row[1]
        ctx = json.loads(row[2]) if isinstance(row[2], str) else row[2]
        print(f"Parsed Relevance: {rel} (Type: {type(rel)})")
        print(f"Parsed Context: {ctx} (Type: {type(ctx)})")
    except Exception as e:
        print(f"Parsing ERROR: {str(e)}")
else:
    print("No nodes found in concept_nodes.")

conn.close()
