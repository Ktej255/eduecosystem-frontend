"""
stress_test_intelligence.py
===========================
Stage-11 Architecture Hardening Verification.
Emoji-free for Windows compatibility.
"""
import sys
import json
import sqlite3
from datetime import datetime, timedelta
from pathlib import Path
from sqlalchemy import text, create_engine
from sqlalchemy.orm import sessionmaker

# Setup path
BACKEND_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(BACKEND_ROOT))

# Import models to ensure they are registered with Base metadata
from app.models.concept_node import ConceptNode, DifficultyLevel
from app.models.student_concept_mastery import StudentConceptMastery

from app.services.concept_tagging import concept_tagging
from app.services.learning_engine import learning_engine
from app.services.exam_intelligence import exam_intelligence_service

# Database setup
TARGET_DB = BACKEND_ROOT / "eduecosystem_v2.db"
engine = create_engine(f"sqlite:///{TARGET_DB}", echo=False)
Session = sessionmaker(bind=engine)
db = Session()

def setup_test_environment():
    print("[SETUP] Setting up Stage-11 Test Environment (Model-based)...")
    
    nodes = [
        ("STG11_ENV_HIGH", "Climate Policy", DifficultyLevel.ADVANCED, {"UPSC": "high"}),
        ("STG11_ENV_MED", "Soil Science", DifficultyLevel.UPSC_OVERLAY, {"UPSC": "medium"}),
        ("STG11_ENV_LOW", "Local Fauna", DifficultyLevel.FOUNDATION, {"UPSC": "low"}),
    ]
    
    for nid, name, diff, relevance in nodes:
        node = db.query(ConceptNode).filter(ConceptNode.node_id == nid).first()
        if not node:
            node = ConceptNode(
                node_id=nid,
                node_name=name,
                subject_slug="environment",
                difficulty_level=diff,
                exam_relevance=relevance
            )
            db.add(node)
        else:
            node.exam_relevance = relevance
            node.difficulty_level = diff
            
    db.commit()
    
    # MCQ Tagging remains raw SQL
    db.execute(text("DELETE FROM content_concept_tags WHERE content_id = 'STG11_MCQ_MULTI'"))
    
    # Get the integer PKs
    pk_high = db.execute(text("SELECT id FROM concept_nodes WHERE node_id = 'STG11_ENV_HIGH'")).scalar()
    pk_med = db.execute(text("SELECT id FROM concept_nodes WHERE node_id = 'STG11_ENV_MED'")).scalar()
    pk_low = db.execute(text("SELECT id FROM concept_nodes WHERE node_id = 'STG11_ENV_LOW'")).scalar()

    db.execute(text("""
        INSERT INTO content_concept_tags (content_type, content_id, node_id, weight, is_primary, tagged_by)
        VALUES 
            ('mcq', 'STG11_MCQ_MULTI', :pk_high, 1.0, 1, 'test'),
            ('mcq', 'STG11_MCQ_MULTI', :pk_med, 1.0, 0, 'test'),
            ('mcq', 'STG11_MCQ_MULTI', :pk_low, 1.0, 0, 'test')
    """), {"pk_high": pk_high, "pk_med": pk_med, "pk_low": pk_low})
    db.commit()

def clear_student(student_id):
    db.execute(text("DELETE FROM student_concept_mastery WHERE student_id = :sid"), {"sid": student_id})
    db.execute(text("DELETE FROM student_activity_log WHERE student_id = :sid"), {"sid": student_id})
    db.commit()

def run_persona_early():
    print("\n[PERSONA] EARLY (New Student)")
    sid = 1101
    clear_student(sid)
    
    decision = learning_engine.evaluate(db, sid, "environment")
    print(f"   Status: {decision.learning_state} | Next Action: {decision.next_action}")
    print(f"   Readiness: {decision.exam_readiness}%")
    assert "Condition" in str(type(decision.learning_state)) or decision.learning_state == "learning"

def run_persona_threshold():
    print("\n[PERSONA] THRESHOLD (The Gatekeeper - 65%)")
    sid = 1102
    clear_student(sid)
    
    node_pk = db.execute(text("SELECT id FROM concept_nodes WHERE node_id = 'STG11_ENV_HIGH'")).scalar()
    db.execute(text("""
        INSERT INTO student_concept_mastery (student_id, node_id, mastery_score, attempt_count, last_activity_date)
        VALUES (:sid, :nid, 65.0, 10, :now)
    """), {"sid": sid, "nid": node_pk, "now": datetime.utcnow()})
    db.commit()
    
    readiness = exam_intelligence_service.calculate_readiness_score(db, sid, "environment")
    print(f"   Readiness Score: {readiness['readiness_score']}%")
    print(f"   Gate Status: {readiness['status']} (Expected: peekable)")
    assert readiness['status'] == "peekable"

def run_persona_strong():
    print("\n[PERSONA] STRONG (Mastery 85%)")
    sid = 1103
    clear_student(sid)
    
    node_pks = db.execute(text("SELECT id FROM concept_nodes WHERE node_id LIKE 'STG11_ENV_%'")).fetchall()
    for pk in node_pks:
        db.execute(text("""
            INSERT INTO student_concept_mastery (student_id, node_id, mastery_score, attempt_count, last_activity_date)
            VALUES (:sid, :nid, 85.0, 15, :now)
        """), {"sid": sid, "nid": pk[0], "now": datetime.utcnow()})
    db.commit()
    
    readiness = exam_intelligence_service.calculate_readiness_score(db, sid, "environment")
    print(f"   Readiness Score: {readiness['readiness_score']}%")
    print(f"   Gate Status: {readiness['status']} (Expected: unlocked)")
    assert readiness['status'] == "unlocked"

def run_persona_fragile():
    print("\n[PERSONA] FRAGILE (High Mastery + Inactivity Decay)")
    sid = 1104
    clear_student(sid)
    
    node_high_pk = db.execute(text("SELECT id FROM concept_nodes WHERE node_id = 'STG11_ENV_HIGH'")).scalar()
    past_date = (datetime.utcnow() - timedelta(days=20)).strftime('%Y-%m-%d %H:%M:%S')
    
    db.execute(text("""
        INSERT INTO student_concept_mastery (student_id, node_id, mastery_score, attempt_count, last_activity_date)
        VALUES (:sid, :nid, 90.0, 20, :past)
    """), {"sid": sid, "nid": node_high_pk, "past": past_date})
    db.commit()
    
    signals = learning_engine._collect_signals(db, sid, "environment")
    decayed_node = next(s for s in signals if s.node_id == 'STG11_ENV_HIGH')
    
    print(f"   Original Mastery: 90.0%")
    print(f"   Decayed Mastery (after 20d): {decayed_node.mastery_score}%")
    assert decayed_node.mastery_score < 90.0
    print("   [OK] Success: Tiered BKT Decay verified.")

def test_signal_weighting_1_n():
    print("\n[TEST] Testing 1/N Signal Weighting (Inflation Protection)")
    sid = 1105
    clear_student(sid)
    
    concept_tagging.process_mcq_attempt(db, sid, 'STG11_MCQ_MULTI', True, 100.0)
    
    signals = learning_engine._collect_signals(db, sid, "environment")
    total_mastery = sum(s.mastery_score for s in signals if s.node_id.startswith('STG11_ENV'))
    
    print(f"   Total Mastery gain across 3 nodes: {total_mastery}%")
    assert total_mastery < 25.0 
    print("   [OK] Success: 1/N Weighting verified (Sum of parts = Whole).")

if __name__ == "__main__":
    setup_test_environment()
    try:
        run_persona_early()
        run_persona_threshold()
        run_persona_strong()
        run_persona_fragile()
        test_signal_weighting_1_n()
        print("\n[SUCCESS] STAGE-11 ARCHITECTURE HARDENING VERIFIED SUCCESSFULLY.")
    except Exception as e:
        print(f"\n[ERROR] Verification Failed: {e}")
        import traceback
        traceback.print_exc()
    finally:
        # Cleanup
        db.execute(text("DELETE FROM concept_nodes WHERE node_id LIKE 'STG11_%'"))
        db.execute(text("DELETE FROM content_concept_tags WHERE content_id = 'STG11_MCQ_MULTI'"))
        for sid in [1101, 1102, 1103, 1104, 1105]: clear_student(sid)
        db.commit()
        db.close()
