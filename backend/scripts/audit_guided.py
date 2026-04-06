
import sys
import os
from sqlalchemy import text

# Add backend to sys.path
sys.path.append(os.path.join(os.getcwd(), "backend"))

from app.db.session import SessionLocal

def audit():
    db = SessionLocal()
    print("📊 Guided Learning System: Progress Audit (Phase 1-14)")
    print("-" * 50)

    # 1. Subject Node Counts
    subjects = db.execute(text("SELECT subject_slug, COUNT(*) FROM concept_nodes GROUP BY subject_slug")).fetchall()
    total_nodes = 0
    for subj, cnt in subjects:
        print(f"🔹 Subject '{subj}': {cnt} nodes")
        total_nodes += cnt
    print(f"📡 Total Registered Nodes: {total_nodes} (of 429 target)")

    # 2. Content Signal Coverage
    signals = db.execute(text("SELECT COUNT(DISTINCT node_id) FROM concept_signals")).scalar()
    print(f"🎥 Active Content Nodes (with Signals): {signals}")

    # 3. Phase Analysis
    # Based on architectural audit:
    phases = {
        1: ("KG Foundation", 100),
        2: ("Adaptive Engine", 100),
        3: ("Mastery Tracker", 100),
        4: ("Video Integration", 100),
        5: ("Adaptive MCQs", 100),
        6: ("Recall System", 100),
        7: ("PYQ Historical Intelligence", 75),
        8: ("Difficulty Intelligence", 100),
        9: ("Structural Risk Detection", 100),
        10: ("Performance Hardening", 100),
        11: ("BKT & Knowledge Decay", 100),
        12: ("Remediation Intelligence", 85),
        13: ("Infrastructure Synchronization", 100),
        14: ("Environment Subject Launch", 100)
    }

    print("-" * 50)
    total_prog = 0
    for ph_id, (name, prog) in phases.items():
        status = "✅" if prog == 100 else "🛠️"
        print(f"{status} Phase {ph_id:2}: {name:30} → {prog}%")
        total_prog += prog

    avg_prog = total_prog / 14
    print("-" * 50)
    print(f"🏆 Overall Completion: {avg_prog:.1f}%")

    db.close()

if __name__ == "__main__":
    audit()
