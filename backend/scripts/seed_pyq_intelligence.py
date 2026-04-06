from sqlalchemy.orm import Session
from app.db.session import SessionLocal
from app.models.concept_node import ConceptNode
from app.models.upsc_pyq import UPSCPYQ
from app.models.student_concept_mastery import StudentConceptMastery

def seed_intelligence_layer():
    db = SessionLocal()
    try:
        # 1. Fetch some environment nodes
        nodes = db.query(ConceptNode).filter(ConceptNode.subject_slug == "environment").all()
        if not nodes:
            print("No environment nodes found. Please seed nodes first.")
            return

        # 2. Seed PYQs (UPSC 2011-2024)
        pyq_data = [
            {"year": 2023, "text": "Which of the following is/are the reasons for the high abundance of coal-based thermal power plants in India?", "node": "ENV_M1_T1", "type": "Prelims"},
            {"year": 2022, "text": "With reference to the 'G-20 Common Framework', consider the following statements...", "node": "ENV_M2_T4", "type": "Prelims"},
            {"year": 2021, "text": "In the context of India's preparation for Climate Change, consider 'Common but Differentiated Responsibilities'...", "node": "ENV_M3_T2", "type": "Prelims"},
            {"year": 2020, "text": "Which one of the following protected areas is well-known for the conservation of a sub-species of the Indian swamp deer (Barasingha)?", "node": "ENV_M5_T1", "type": "Prelims"},
        ]

        for item in pyq_data:
            pyq = UPSCPYQ(
                year=item["year"],
                paper_type=item["type"],
                question_text=item["text"],
                node_id=item["node"],
                difficulty_level="medium"
            )
            db.add(pyq)

        # 3. Simulate Mastery for a test student (ID: 1)
        # Give them ~75% mastery for some nodes to test the "Unlocked" state
        for node in nodes:
            mastery = StudentConceptMastery(
                student_id=1,
                node_id=node.id,
                mastery_score=72.5 if node.node_id in ["ENV_M1_T1", "ENV_M2_T4"] else 30.0
            )
            db.merge(mastery) # Merge to update if exists

        db.commit()
        print("Intelligence Layer Seeded Successfully! 🏆✨")

    except Exception as e:
        print(f"Seeding failed: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    seed_intelligence_layer()
