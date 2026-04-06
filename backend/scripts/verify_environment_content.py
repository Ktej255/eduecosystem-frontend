
import sys
import os
from sqlalchemy import text

# Add backend to sys.path
sys.path.append(os.path.join(os.getcwd(), "backend"))

from app.db.session import SessionLocal

def verify():
    db = SessionLocal()
    print("🔍 Verifying Phase 14: Environment Subject Deployment...")

    # 1. Total Nodes
    nodes = db.execute(text("SELECT node_id, module_id FROM concept_nodes WHERE subject_slug = 'environment'")).fetchall()
    print(f"📊 Total Environment Nodes: {len(nodes)}")

    # 2. Signals Coverage
    signals = db.execute(text("""
        SELECT signal_type, COUNT(*) 
        FROM concept_signals 
        WHERE node_id LIKE 'ENV_%' 
        GROUP BY signal_type
    """)).fetchall()
    print(f"📡 Signals Coverage: {dict(signals)}")

    # 3. Decision Logic (First Node)
    from app.services.learning_engine import learning_engine
    # Use a dummy student ID (e.g. 1)
    decision = learning_engine.evaluate(db, 1, "environment")
    print(f"🎯 Engine Decision: {decision.next_action.value} for node '{decision.priority_node_name}' ({decision.priority_node_id})")
    print(f"📝 Reason: {decision.reason}")

    db.close()

if __name__ == "__main__":
    verify()
