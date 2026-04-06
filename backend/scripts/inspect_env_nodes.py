import sys
import os
from sqlalchemy import create_engine, text
from app.db.session import engine

def inspect_nodes():
    print("🔬 Table: concept_nodes | Subject: environment")
    with engine.connect() as conn:
        results = conn.execute(text("SELECT node_id, node_name FROM concept_nodes WHERE subject_slug = 'environment' LIMIT 20")).fetchall()
        for r in results:
            print(f" - {r[0]} | {r[1]}")

if __name__ == "__main__":
    sys.path.append(os.getcwd())
    inspect_nodes()
