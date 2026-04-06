import sys
import os
from sqlalchemy.orm import Session
from sqlalchemy import text
from app.db.session import SessionLocal, engine
from app.models.upsc_pyq import UPSCPYQ, upsc_pyq_node_association
from app.models.concept_node import ConceptNode

def seed_m2m_intelligence():
    print("🚀 Seeding Many-to-Many Intelligence Registry...")
    db = SessionLocal()
    try:
        # 1. Fetch Environment Nodes
        from sqlalchemy import text
        sql = text("SELECT id, node_id FROM concept_nodes WHERE subject_slug = 'environment'")
        node_results = db.execute(sql).fetchall()
        
        # Use column names to be safe
        node_map = {}
        for row in node_results:
            mapping = row._mapping
            print(f"DEBUG: Found Node: {mapping['node_id']} (ID: {mapping['id']})")
            node_map[mapping["node_id"]] = mapping["id"]
        
        if not node_map:
            print("❌ No environment nodes found. Please seed nodes first.")
            return

        # 2. Seed PYQs with Multi-Node associations
        pyq_data = [
            {
                "year": 2023, 
                "text": "Which of the following is/are the reasons for the high abundance of coal-based thermal power plants in India?", 
                "nodes": ["ENV_M1_T1", "ENV_M2_T5"] # Earth Systems + Air Pollution
            },
            {
                "year": 2022, 
                "text": "The increase in the amount of carbon dioxide in the air slowly raises the temperature of the atmosphere...", 
                "nodes": ["ENV_M1_T2", "ENV_M2_T3"] # Carbon Cycle + Ozone/Atmosphere
            },
            {
                "year": 2021, 
                "text": "In the context of India's preparation for Climate Change, consider 'Common but Differentiated Responsibilities'...", 
                "nodes": ["ENV_M1_T2", "ENV_M3_T1"] # Carbon Cycle + Weather vs Climate
            },
            {
                "year": 2020, 
                "text": "Which one of the following protected areas is well-known for the conservation of a sub-species of the Indian swamp deer (Barasingha)?", 
                "nodes": ["ENV_M1_T1", "ENV_M0_T4"] # Earth Systems + Environmental Issues (Mapping to available nodes)
            },
        ]

        for item in pyq_data:
            # Create PYQ
            pyq = UPSCPYQ(
                year=item["year"],
                paper_type="Prelims",
                question_text=item["text"],
                difficulty_level="medium"
            )
            db.add(pyq)
            db.flush() # Get the ID
            
            # Associate with multiple nodes
            for target_node_id in item["nodes"]:
                if target_node_id in node_map:
                    target_pk_id = node_map[target_node_id]
                    if target_pk_id is not None:
                        db.execute(
                            upsc_pyq_node_association.insert().values(
                                upsc_pyq_id=pyq.id,
                                concept_node_id=target_pk_id
                            )
                        )
                        print(f"✅ Linked PYQ {pyq.id} -> {target_node_id} (ID: {target_pk_id})")
                    else:
                        print(f"⚠️ PK_ID is None for {target_node_id}")
                else:
                    print(f"⚠️ Node {target_node_id} not found in map.")

        db.commit()
        print("🏆 Intelligence Registry Seeded Successfully! (Many-to-Many active)")

    except Exception as e:
        print(f"❌ Seeding failed: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    sys.path.append(os.getcwd())
    seed_m2m_intelligence()
