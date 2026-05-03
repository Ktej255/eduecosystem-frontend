import sys
import os
import asyncio
import json
from dotenv import load_dotenv

# Load env from backend/.env
load_dotenv(os.path.join(os.getcwd(), 'backend', '.env'))

# Add backend to path
sys.path.append(os.path.join(os.getcwd(), 'backend'))


from app.db.session import SessionLocal
from app.services.ai_workflow_service import ai_workflow_service
from sqlalchemy import text

async def process_cluster(db, subject, cluster_num):
    print(f"--- Processing {subject} Cluster {cluster_num} ---")
    
    # 1. Fetch questions
    questions = ai_workflow_service.get_focused_questions(db, subject, cluster_num, limit=10)
    if not questions:
        print(f"No questions found for {subject} {cluster_num}")
        return
        
    # 2. Generate flashcards
    print(f"Generating flashcards for {len(questions)} questions...")
    cards = await ai_workflow_service.generate_flashcards_from_questions(questions, f"{subject}_{cluster_num}")
    
    if not cards:
        print("Failed to generate flashcards.")
        return
        
    # 3. Store flashcards
    # We'll use a tag in the explanation or difficulty field to link them for now, 
    # as there is no 'cluster_id' in flashcards table.
    # Actually, we can use the 'explanation' field to store source info if needed.
    
    print(f"Storing {len(cards)} flashcards...")
    for card in cards:
        db.execute(
            text("""
                INSERT INTO flashcards (question, answer, explanation, source_type, created_at)
                VALUES (:q, :a, :e, :st, datetime('now'))
            """),
            {
                "q": card["question"],
                "a": card["answer"],
                "e": f"{card.get('explanation', '')} [Source: {subject} Cluster {cluster_num}]",
                "st": "ai_generated"
            }
        )
    db.commit()
    print(f"Done with {subject} Cluster {cluster_num}.")

async def main():
    db = SessionLocal()
    try:
        # Process first 2 clusters of each for demonstration/test
        # (AI calls are expensive/slow, so we won't do all 18 in one go unless asked)
        for subject in ["Economy", "Modern History"]:
            for i in range(1, 3):
                await process_cluster(db, subject, i)
                
    finally:
        db.close()

if __name__ == "__main__":
    asyncio.run(main())
