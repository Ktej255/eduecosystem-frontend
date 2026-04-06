import sqlite3
import json
import os

def create_snapshot():
    db_path = 'backend/eduecosystem_v2.db'
    if not os.path.exists(db_path):
        print(f"Error: {db_path} not found.")
        return

    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

    snapshot = {
        "concept_nodes": [],
        "concept_relationships": [],
        "metadata": {
            "version": "1.0",
            "subject_count": 12,
            "total_nodes": 0
        }
    }

    # Fetch nodes
    cursor.execute("SELECT * FROM concept_nodes")
    nodes = [dict(row) for row in cursor.fetchall()]
    snapshot["concept_nodes"] = nodes
    snapshot["metadata"]["total_nodes"] = len(nodes)

    # Fetch relationships with slugs for cross-platform stability
    cursor.execute("""
        SELECT cn_from.node_id as from_slug, cn_to.node_id as to_slug, cr.relationship_type
        FROM concept_relationships cr
        JOIN concept_nodes cn_from ON cn_from.id = cr.from_node_id
        JOIN concept_nodes cn_to ON cn_to.id = cr.to_node_id
    """)
    relationships = [dict(row) for row in cursor.fetchall()]
    snapshot["concept_relationships"] = relationships

    # Output
    output_path = 'backend/scripts/snapshot.json'
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(snapshot, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Success! Snapshot created at {output_path}")
    print(f"📊 Nodes: {len(nodes)} | Relationships: {len(relationships)}")

if __name__ == "__main__":
    create_snapshot()
