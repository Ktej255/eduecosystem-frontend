import sqlite3
import math
import json

def inspect_history():
    conn = sqlite3.connect('backend/eduecosystem_v2.db')
    cursor = conn.cursor()
    
    print("--- Inspecting History Nodes for NaN ---")
    cursor.execute("SELECT node_id, module_id, difficulty_level, exam_relevance FROM concept_nodes WHERE subject_slug = 'history'")
    rows = cursor.fetchall()
    for row in rows:
        node_id, module_id, diff, relevance = row
        # Check module_id for NaN
        if isinstance(module_id, float) and math.isnan(module_id):
            print(f"Node {node_id} has NaN module_id")
        
        # Check exam_relevance for NaN or Inf in the parsed dict
        try:
            rel_dict = json.loads(relevance) if relevance else {}
            if isinstance(rel_dict, dict):
                for k, v in rel_dict.items():
                    if isinstance(v, float) and (math.isnan(v) or math.isinf(v)):
                        print(f"Node {node_id} has NaN/Inf in relevance: {k}={v}")
        except:
            pass

    print("Inspection complete.")
    conn.close()

if __name__ == "__main__":
    inspect_history()
