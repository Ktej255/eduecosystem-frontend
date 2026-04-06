import os
from sqlalchemy import create_engine, text

DB_PATH = "d:/Development/EduEcosystem/backend/eduecosystem_v2.db"
engine = create_engine(f"sqlite:///{DB_PATH}")

def run_audit():
    with engine.connect() as conn:
        print("🔍 STARTING GLOBAL KNOWLEDGE AUDIT (Phase 25)\n" + "="*50)
        
        # 1. Saturation Check
        node_count = conn.execute(text("SELECT COUNT(*) FROM concept_nodes")).scalar()
        print(f"📊 TOTAL REGISTERED NODES: {node_count}")
        
        counts = conn.execute(text("SELECT subject_slug, COUNT(*) FROM concept_nodes GROUP BY subject_slug")).fetchall()
        for subj, count in counts:
            print(f"   - {subj:12}: {count} nodes")

        # 2. Relationship Density
        rel_count = conn.execute(text("SELECT COUNT(*) FROM concept_relationships")).scalar()
        print(f"\n🔗 TOTAL RELATIONSHIPS: {rel_count}")

        # 3. Orphan Detection (Strict Disconnected Nodes)
        # A node is disconnected if it is neither a source nor a target of any relationship
        orphans = conn.execute(text("""
            SELECT node_id, node_name, subject_slug FROM concept_nodes 
            WHERE id NOT IN (SELECT from_node_id FROM concept_relationships)
            AND id NOT IN (SELECT to_node_id FROM concept_relationships)
        """)).fetchall()
        
        print(f"\n🛑 DISCONNECTED NODES (No In/Out Edges): {len(orphans)}")
        for row in orphans[:5]:
            print(f"   [!] {row[0]}: {row[1]} ({row[2]})")
        if len(orphans) > 5: print("   ... (truncated)")

        # 4. Root Analysis (Entrance Points)
        roots = conn.execute(text("""
            SELECT subject_slug, COUNT(*) FROM concept_nodes
            WHERE id NOT IN (SELECT to_node_id FROM concept_relationships)
            AND id IN (SELECT from_node_id FROM concept_relationships)
            GROUP BY subject_slug
        """)).fetchall()
        print("\n🌱 ROOT NODES (Prerequisite Entry Points) BY SUBJECT:")
        for subj, count in roots:
            print(f"   - {subj:12}: {count}")

        # 5. Synapse Check (Cross-Subject Contexts)
        # This checks the JSON field in concept_nodes
        synapse_nodes = conn.execute(text("SELECT COUNT(*) FROM concept_nodes WHERE context_nodes != '[]'")).scalar()
        print(f"\n🧠 CROSS-SUBJECT SYNAPSES: {synapse_nodes} nodes bridged")

if __name__ == "__main__":
    run_audit()
