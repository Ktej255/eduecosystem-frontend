import sys
import os
from sqlalchemy.orm import Session
from app.db.session import SessionLocal
from app.services.exam_intelligence import exam_intelligence_service

def verify_logic():
    print("🔬 Verifying Intelligence Layer Logic...")
    db = SessionLocal()
    try:
        # We seeded student_id=1 in the previous step
        user_id = 1
        subject = "environment"
        
        # 1. Test Readiness Score
        readiness = exam_intelligence_service.calculate_readiness_score(db, user_id, subject)
        print(f"✅ Readiness Score: {readiness.get('readiness_score')}%")
        print(f"✅ Total Nodes Scaled: {readiness.get('total_nodes')}")
        
        # 2. Test Weak Spots
        weak_spots = exam_intelligence_service.get_weak_node_spotlight(db, user_id, subject)
        print(f"✅ Weak Spotlights identified: {len(weak_spots)}")
        for spot in weak_spots:
            print(f"   - {spot['name']} (Mastery: {spot['mastery']}%, Risk: {spot['risk_score']})")

        # 3. Test PYQ Insights
        if weak_spots:
            node_id = weak_spots[0]['node_id']
            pyqs = exam_intelligence_service.get_pyq_insights(db, node_id)
            print(f"✅ PYQ Insights for {node_id}: {len(pyqs)} questions found.")

        print("🚀 Intelligence Layer Logic Verification COMPLETE!")

    except Exception as e:
        print(f"❌ Logic Verification FAILED: {e}")
        import traceback
        traceback.print_exc()
    finally:
        db.close()

if __name__ == "__main__":
    # Ensure app is importable
    sys.path.append(os.getcwd())
    verify_logic()
