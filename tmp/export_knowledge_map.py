import json
import os
from sqlalchemy import create_engine, text

DB_PATH = "d:/Development/EduEcosystem/backend/eduecosystem_v2.db"
engine = create_engine(f"sqlite:///{DB_PATH}")

def export_map():
    with engine.connect() as conn:
        print("📦 GENERATING PRODUCTION KNOWLEDGE SNAPSHOT...")
        
        # 1. Fetch Nodes
        nodes = []
        node_rows = conn.execute(text("SELECT node_id, node_name, subject_slug, difficulty_level, context_nodes FROM concept_nodes")).fetchall()
        for row in node_rows:
            nodes.append({
                "id": row[0],
                "name": row[1],
                "subject": row[2],
                "difficulty": row[3],
                "synapses": json.loads(row[4]) if row[4] else []
            })
            
        # 2. Fetch Relationships
        edges = []
        edge_rows = conn.execute(text("""
            SELECT cn1.node_id, cn2.node_id, cr.relationship_type 
            FROM concept_relationships cr
            JOIN concept_nodes cn1 ON cr.from_node_id = cn1.id
            JOIN concept_nodes cn2 ON cr.to_node_id = cn2.id
        """)).fetchall()
        for row in edge_rows:
            edges.append({
                "source": row[0],
                "target": row[1],
                "type": row[2]
            })

        # 3. Save Artifact
        snapshot = {
            "metadata": {
                "version": "v25.0",
                "total_nodes": len(nodes),
                "total_edges": len(edges),
                "timestamp": "2026-04-04"
            },
            "nodes": nodes,
            "edges": edges
        }
        
        output_path = "d:/Development/EduEcosystem/artifacts/upsc_knowledge_v25_snapshot.json"
        with open(output_path, "w") as f:
            json.dump(snapshot, f, indent=2)
        
        print(f"✅ SUCCESS: Snapshot saved to {output_path}")

if __name__ == "__main__":
    export_map()
