import sys
import os
from sqlalchemy import create_engine, text, Table, MetaData, Column, Integer, String, Text, ForeignKey
from sqlalchemy.orm import Session
from app.db.session import engine, SessionLocal, Base
from app.models.upsc_pyq import UPSCPYQ, upsc_pyq_node_association
from app.models.concept_node import ConceptNode

def finalize_registry():
    print("🧠 Finalizing Intelligence Layer Registry (M2M Hardening)...")
    db = SessionLocal()
    try:
        # 1. Drop and Recreate tables to ensure schema matches M2M model
        print("🏗️ Syncing Database Schema...")
        
        # RECOVERY: If concept_nodes has NULL IDs, fix them using rowid
        print("🩹 Recovering orphaned Knowledge Graph nodes...")
        db.execute(text("UPDATE concept_nodes SET id = rowid WHERE id IS NULL"))
        db.commit()
        
        upsc_pyq_node_association.drop(engine, checkfirst=True)
        UPSCPYQ.__table__.drop(engine, checkfirst=True)
        Base.metadata.create_all(bind=engine)
        print("✅ Schema synced.")

        # 2. Map Concept Node IDs (Integer PK) to Node_ID (String)
        print("🔬 Mapping Concept Nodes...")
        # Use simple mapping to avoid any Enum decoding issues in this diagnostic phase
        node_results = db.execute(text("SELECT id, node_id FROM concept_nodes")).fetchall()
        node_map = {}
        for row in node_results:
            # SQLAlchemy 2.0 Row objects mapping access
            m = row._mapping
            node_map[m["node_id"]] = m["id"]
            print(f"DEBUG: Map {m['node_id']} -> {m['id']}")
        
        if not node_map:
            print("❌ No knowledge nodes found in 'concept_nodes'. Please seed the syllabus first.")
            return

        # 3. Seed Multi-Node PYQs
        print("🚀 Seeding Many-to-Many PYQ Archive (Environment)...")
        pyq_data = [
            {
                "year": 2023, 
                "text": "Which of the following is/are the reasons for the high abundance of coal-based thermal power plants in India?", 
                "nodes": ["ENV_M1_T1", "ENV_M2_T5"] # Earth Systems + Air Pollution
            },
            {
                "year": 2022, 
                "text": "The increase in the amount of carbon dioxide in the air slowly raises the temperature of the atmosphere...", 
                "nodes": ["ENV_M1_T2", "ENV_M2_T3"] # Carbon Cycle + Atmosphere
            },
            {
                "year": 2021, 
                "text": "In the context of India's preparation for Climate Change, consider 'Common but Differentiated Responsibilities'...", 
                "nodes": ["ENV_M1_T2", "ENV_M3_T1"] # Carbon Cycle + Weather vs Climate
            },
            {
                "year": 2020, 
                "text": "Which one of the following protected areas is well-known for the conservation of a sub-species of the Indian swamp deer (Barasingha)?", 
                "nodes": ["ENV_M5_T1", "ENV_M5_T4"] # Biodiversity + Protected Areas
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
            for node_id in item["nodes"]:
                if node_id in node_map:
                    pk_id = node_map[node_id]
                    # Direct insert for maximum stability
                    db.execute(
                        upsc_pyq_node_association.insert().values(
                            upsc_pyq_id=pyq.id,
                            concept_node_id=pk_id
                        )
                    )
                    print(f"✅ Linked PYQ {pyq.id} -> {node_id} (Internal ID: {pk_id})")
                else:
                    print(f"⚠️ Node {node_id} not found in map.")

        db.commit()
        print("🏆 PHASE 10.5 REGISTRY HARDENING COMPLETE!")

    except Exception as e:
        print(f"❌ Hardening failed: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    sys.path.append(os.getcwd())
    finalize_registry()
