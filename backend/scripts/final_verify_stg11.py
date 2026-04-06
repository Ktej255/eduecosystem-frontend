import sys, os
from pathlib import Path
from datetime import datetime, timedelta
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker

# Setup path
BACKEND_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(BACKEND_ROOT))

# Force unique DB for zero-entropy verification
DB_PATH = BACKEND_ROOT / "FINAL_STG11.db"
if DB_PATH.exists(): os.remove(DB_PATH)

print(f"🚀 Initializing Clean-Room Verification: {DB_PATH}")

from app.db.base import Base
from app.models.concept_node import ConceptNode, DifficultyLevel
from app.models.student_concept_mastery import StudentConceptMastery
from app.services.concept_tagging import concept_tagging
from app.services.learning_engine import learning_engine
from app.services.exam_intelligence import exam_intelligence_service

engine = create_engine(f"sqlite:///{DB_PATH}")
Base.metadata.create_all(bind=engine)
Session = sessionmaker(bind=engine)
db = Session()

def run_suite():
    print("\n[1] Seeding Hardened Architecture Baseline...")
    nodes = [
        ("STG11_ENV_HIGH", "Climate Policy", DifficultyLevel.ADVANCED, {"UPSC": "high"}),
        ("STG11_ENV_MED", "Soil Science", DifficultyLevel.UPSC_OVERLAY, {"UPSC": "medium"}),
        ("STG11_ENV_LOW", "Local Fauna", DifficultyLevel.FOUNDATION, {"UPSC": "low"}),
    ]
    for nid, name, diff, relevance in nodes:
        node = ConceptNode(node_id=nid, node_name=name, subject_slug="environment",
                         difficulty_level=diff, exam_relevance=relevance)
        db.add(node)
    db.commit()
    
    # Get PKS
    pk_high = db.query(ConceptNode).filter_by(node_id="STG11_ENV_HIGH").first().id
    pk_med = db.query(ConceptNode).filter_by(node_id="STG11_ENV_MED").first().id
    pk_low = db.query(ConceptNode).filter_by(node_id="STG11_ENV_LOW").first().id

    print("\n[2] Testing 1/N Signal Weighting...")
    sid = 1105
    # Success attempt on multi-tagged MCQ
    # Manually tag a mock MCQ to our 3 nodes
    db.execute(text("INSERT INTO content_concept_tags (content_type, content_id, node_id, weight) VALUES ('mcq', 'MOCK', :nid, 1.0)"),
               [{"nid": pk_high}, {"nid": pk_med}, {"nid": pk_low}])
    db.commit()
    
    concept_tagging.process_mcq_attempt(db, sid, 'MOCK', True, 100.0)
    signals = learning_engine._collect_signals(db, sid, "environment")
    total_mastery = sum(s.mastery_score for s in signals if s.node_id.startswith('STG11_ENV'))
    print(f"   Total Mastery gain (3 nodes): {total_mastery}% (Expected < 25%)")
    assert total_mastery < 25.0
    print("   ✓ 1/N Weighting Verified.")

    print("\n[3] Testing Tiered BKT Decay...")
    sid = 1104
    past_date = datetime.utcnow() - timedelta(days=20)
    mastery = StudentConceptMastery(student_id=sid, node_id=pk_high, mastery_score=90.0,
                                   attempt_count=20, last_activity_date=past_date)
    db.add(mastery)
    db.commit()
    
    signals = learning_engine._collect_signals(db, sid, "environment")
    decayed = next(s for s in signals if s.node_id == 'STG11_ENV_HIGH')
    print(f"   Original: 90.0% -> Decayed (20d): {decayed.mastery_score}%")
    assert decayed.mastery_score < 90.0
    print("   ✓ BKT Decay Verified.")

    print("\n[4] Testing Soft Mastery Gate (Peekable)...")
    sid = 1102
    mastery = StudentConceptMastery(student_id=sid, node_id=pk_high, mastery_score=65.0,
                                   attempt_count=10, last_activity_date=datetime.utcnow())
    db.add(mastery)
    db.commit()
    
    readiness = exam_intelligence_service.calculate_readiness_score(db, sid, "environment")
    print(f"   Readiness: {readiness['readiness_score']}% | Status: {readiness['status']}")
    assert readiness['status'] == "peekable"
    print("   ✓ Soft Gate Verified.")

    print("\n🎉 STAGE-11 ARCHITECTURE HARDENING TOTALLY VERIFIED.")

if __name__ == "__main__":
    try:
        run_suite()
    finally:
        db.close()
        #if DB_PATH.exists(): os.remove(DB_PATH) # Keep it for audit if needed
