import sqlite3
import json

def inspect_subject(subject_name):
    conn = sqlite3.connect('backend/eduecosystem_v2.db')
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    print(f"--- Inspecting {subject_name} nodes ---")
    cursor.execute("SELECT * FROM concept_nodes WHERE subject_slug = ?", (subject_name,))
    nodes = cursor.fetchall()
    print(f"Total nodes: {len(nodes)}")
    
    for i, node in enumerate(nodes):
        d = dict(node)
        # Check node_id
        if d['node_id'] is None:
            print(f"Node {i} (ID: {d['id']}): node_id is None")
        
        # Check exam_relevance
        try:
            rel = json.loads(d['exam_relevance']) if d['exam_relevance'] else {}
        except:
            print(f"Node {i} (ID: {d['id']}): exam_relevance parsing failed: {d['exam_relevance']}")
            
        # Check context_nodes
        try:
            ctx = json.loads(d['context_nodes']) if d['context_nodes'] else []
        except:
            print(f"Node {i} (ID: {d['id']}): context_nodes parsing failed: {d['context_nodes']}")

    conn.close()

if __name__ == "__main__":
    inspect_subject('history')
