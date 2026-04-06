import json
import uuid
from sqlalchemy import text
from app.db.session import SessionLocal
from app.models.concept_node import ConceptNode
from app.models.question_bank import BankQuestion

def ingest_data():
    print("Ingesting Adaptive Test Data...")
    db = SessionLocal()
    try:
        # 1. Seed Concept Nodes for testing
        print("Seeding Concept Nodes...")
        nodes = [
            {"node_id": "POL_EQ", "node_name": "Right to Equality", "subject_slug": "Polity"},
            {"node_id": "POL_IM", "node_name": "Presidential Impeachment", "subject_slug": "Polity"},
            {"node_id": "EC_REPO", "node_name": "Repo Rate & Monetary Policy", "subject_slug": "Economy"},
            {"node_id": "EC_GST", "node_name": "GST & Indirect Taxes", "subject_slug": "Economy"},
            {"node_id": "ENV_BH", "node_name": "Biodiversity Hotspots", "subject_slug": "Environment"},
            {"node_id": "ENV_RA", "node_name": "Ramsar Sites & Wetlands", "subject_slug": "Environment"},
            {"node_id": "GEO_WG", "node_name": "Western Ghats Geography", "subject_slug": "Geography"},
            {"node_id": "GEO_SOIL", "node_name": "Soil Types in India", "subject_slug": "Geography"},
            {"node_id": "HIS_INC", "node_name": "Indian National Congress", "subject_slug": "History"},
            {"node_id": "HIS_1857", "node_name": "Revolt of 1857", "subject_slug": "History"}
        ]
        
        for n in nodes:
            # Check if exists
            existing = db.query(ConceptNode).filter(ConceptNode.node_id == n["node_id"]).first()
            if not existing:
                node = ConceptNode(
                    node_id=n["node_id"],
                    node_name=n["node_name"],
                    subject_slug=n["subject_slug"]
                )
                db.add(node)
        
        db.flush() # Populate IDs for linking

        # 2. Seed Adaptive Questions (Levels L1, L2, L3)
        # We'll map the SAMPLE_MCQS from the frontend and add some artificial complexity
        print("Seeding Adaptive Questions...")
        
        # Mapping frontend questions to nodes
        sample_questions = [
            {
                "subject": "Polity",
                "text": "Which Article of the Constitution deals with the Right to Equality?",
                "options": json.dumps(["Article 12", "Article 14", "Article 19", "Article 21"]),
                "correct": "Article 14",
                "level": 1, # L1 - Basic Recall
                "node_id": "POL_EQ",
                "explanation": "Article 14 provides for equality before law and equal protection of laws."
            },
            {
                "subject": "Polity",
                "text": "The Presidential impeachment process in India is:",
                "options": json.dumps(["Judicial", "Quasi-judicial", "Legislative", "Administrative"]),
                "correct": "Quasi-judicial",
                "level": 2, # L2 - UPSC Standard Standard
                "node_id": "POL_IM",
                "explanation": "The impeachment process for the President is a quasi-judicial procedure in Parliament."
            },
            {
                "subject": "Economy",
                "text": "The repo rate is set by:",
                "options": json.dumps(["Finance Ministry", "SEBI", "RBI", "NITI Aayog"]),
                "correct": "RBI",
                "level": 1,
                "node_id": "EC_REPO",
                "explanation": "The RBI sets the repo rate as part of monetary policy."
            },
            {
                 "subject": "Geography",
                 "text": " Sahyadri is the local name for which of the following mountain ranges?",
                 "options": json.dumps(["Western Ghats", "Eastern Ghats", "Aravallis", "Himalayas"]),
                 "correct": "Western Ghats",
                 "level": 1,
                 "node_id": "GEO_WG",
                 "explanation": "Western Ghats are also known as Sahyadri."
            }
        ]

        instructor_id = 1 # Assuming admin user is 1
        
        for q_data in sample_questions:
            # Look up node
            node = db.query(ConceptNode).filter(ConceptNode.node_id == q_data["node_id"]).first()
            
            # Check if question exists by text
            existing_q = db.query(BankQuestion).filter(BankQuestion.text == q_data["text"]).first()
            if not existing_q:
                q = BankQuestion(
                    instructor_id=instructor_id,
                    subject=q_data["subject"],
                    text=q_data["text"],
                    options=q_data["options"],
                    correct_answer=q_data["correct"],
                    level=q_data["level"],
                    node_id=node.node_id if node else None, # We use the string node_id as column node_id is CHAR(36)
                    explanation=q_data["explanation"],
                    quality_score=1.0
                )
                db.add(q)
        
        db.commit()
        print("Ingestion Complete.")
        
    except Exception as e:
        print(f"Error during ingestion: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    ingest_data()
