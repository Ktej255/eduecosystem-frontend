import sys
from pathlib import Path
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# Setup path
BACKEND_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(BACKEND_ROOT))

from app.db.base import Base
from app.db.session import engine
from app.models.concept_node import ConceptNode, DifficultyLevel

def total_reset():
    print("💣 NUCLEAR RESET STARTING...")
    
    # 1. Drop All (Disable FKs for clean drop in SQLite)
    db = sessionmaker(bind=engine)()
    db.execute(text("PRAGMA foreign_keys=OFF"))
    db.commit()
    Base.metadata.drop_all(bind=engine)
    print("   🗑️ All tables dropped.")
    
    # 2. Create All (with modern defaults)
    Base.metadata.create_all(bind=engine)
    db.execute(text("PRAGMA foreign_keys=ON"))
    db.commit()
    print("   🏗️ All tables recreated from current models.")
    
    # 3. Seed minimal syllabus for Stress Test
    db = sessionmaker(bind=engine)()
    nodes = [
        ("STG11_ENV_HIGH", "Climate Policy", DifficultyLevel.ADVANCED, {"UPSC": "high"}),
        ("STG11_ENV_MED", "Soil Science", DifficultyLevel.UPSC_OVERLAY, {"UPSC": "medium"}),
        ("STG11_ENV_LOW", "Local Fauna", DifficultyLevel.FOUNDATION, {"UPSC": "low"}),
    ]
    for nid, name, diff, relevance in nodes:
        node = ConceptNode(
            node_id=nid,
            node_name=name,
            subject_slug="environment",
            difficulty_level=diff,
            exam_relevance=relevance
        )
        db.add(node)
    db.commit()
    print("   🧠 Minimal syllabus seeded.")
    db.close()
    print("✅ Total Reset Complete.")

if __name__ == "__main__":
    total_reset()
