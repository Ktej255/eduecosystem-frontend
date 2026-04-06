import json
import psycopg2
from psycopg2.extras import execute_values
import os

# Production DB Config (Expecting Env Vars)
DB_HOST = os.getenv("DB_HOST", "localhost")
DB_NAME = os.getenv("DB_NAME", "postgres")
DB_USER = os.getenv("DB_USER", "postgres")
DB_PASS = os.getenv("DB_PASS", "postgres")

def migrate():
    # Load Snapshot
    snapshot_path = 'backend/scripts/snapshot.json'
    if not os.path.exists(snapshot_path):
        print(f"Error: {snapshot_path} not found. Run create_prod_snapshot.py first.")
        return

    with open(snapshot_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    nodes = data.get("concept_nodes", [])
    relationships = data.get("concept_relationships", [])

    print(f"🚀 Starting Migration to {DB_HOST}/{DB_NAME}...")
    print(f"📊 Nodes to migrate: {len(nodes)}")

    try:
        conn = psycopg2.connect(
            host=DB_HOST, database=DB_NAME, user=DB_USER, password=DB_PASS
        )
        cur = conn.cursor()

        # 1. Create Tables if missing (Postgres Schema)
        cur.execute("""
            CREATE TABLE IF NOT EXISTS concept_nodes (
                id SERIAL PRIMARY KEY,
                node_id TEXT UNIQUE NOT NULL,
                node_name TEXT NOT NULL,
                subject_slug TEXT NOT NULL,
                difficulty_level TEXT,
                exam_relevance JSONB,
                module_id TEXT,
                context_nodes JSONB DEFAULT '[]',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        """)

        cur.execute("""
            CREATE TABLE IF NOT EXISTS concept_relationships (
                id SERIAL PRIMARY KEY,
                from_node_id INTEGER REFERENCES concept_nodes(id) ON DELETE CASCADE,
                to_node_id INTEGER REFERENCES concept_nodes(id) ON DELETE CASCADE,
                relationship_type TEXT DEFAULT 'prerequisite'
            );
        """)

        # 2. Upsert Nodes
        node_vals = []
        for n in nodes:
            node_vals.append((
                n["node_id"], n["node_name"], n["subject_slug"],
                n["difficulty_level"], json.dumps(n.get("exam_relevance", {})),
                n["module_id"], json.dumps(n.get("context_nodes", []))
            ))

        upsert_node_sql = """
            INSERT INTO concept_nodes (node_id, node_name, subject_slug, difficulty_level, exam_relevance, module_id, context_nodes)
            VALUES %s
            ON CONFLICT (node_id) DO UPDATE SET
                node_name = EXCLUDED.node_name,
                subject_slug = EXCLUDED.subject_slug,
                difficulty_level = EXCLUDED.difficulty_level,
                exam_relevance = EXCLUDED.exam_relevance,
                module_id = EXCLUDED.module_id,
                context_nodes = EXCLUDED.context_nodes;
        """
        execute_values(cur, upsert_node_sql, node_vals)
        print(f"✅ Nodes Upserted: {len(nodes)}")

        # 3. Handle Relationships
        # Build node_id -> internal_id map
        cur.execute("SELECT node_id, id FROM concept_nodes")
        id_map = dict(cur.fetchall())

        cur.execute("DELETE FROM concept_relationships")
        
        rel_vals = []
        for r in relationships:
            f_slug = r.get("from_slug")
            t_slug = r.get("to_slug")
            if f_slug in id_map and t_slug in id_map:
                rel_vals.append((id_map[f_slug], id_map[t_slug], r.get("relationship_type", "prerequisite")))

        if rel_vals:
            rel_sql = "INSERT INTO concept_relationships (from_node_id, to_node_id, relationship_type) VALUES %s"
            execute_values(cur, rel_sql, rel_vals)
            print(f"✅ Relationships Migrated: {len(rel_vals)}")

        conn.commit()
        print("🎉 Migration Complete!")
        cur.close()
        conn.close()

    except Exception as e:
        print(f"❌ Migration Failed: {str(e)}")

if __name__ == "__main__":
    migrate()
