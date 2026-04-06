import sys
import os
import random
import time
from sqlalchemy import text
from sqlalchemy.orm import Session

# Add paths
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from app.db.session import SessionLocal
from app.services.concept_tagging import concept_tagging

def run_simulation(iterations=1000):
    db = SessionLocal()
    try:
        print(f"Starting 1000-Node Stability Simulation (Stage-11 Logic)...")
        
        # Fetch persona users
        users = db.execute(text("SELECT id, email FROM users WHERE email LIKE '%@test.com'")).fetchall()
        if not users:
            print("Error: No test personas found. Run setup_stress_personas.py first.")
            return

        # Fetch all nodes
        nodes_rows = db.execute(text("SELECT node_id FROM concept_nodes")).fetchall()
        all_node_ids = [r[0] for r in nodes_rows]
        print(f"Simulation targets: {len(all_node_ids)} nodes")

        stats = {u[1]: {"total": 0, "correct": 0, "affected": 0} for u in users}
        start_time = time.time()

        for i in range(iterations):
            user = random.choice(users)
            user_id, user_name = user[0], user[1]
            
            # Simulate a multi-node question (1 to 4 nodes)
            num_nodes = random.randint(1, 4)
            target_nodes = random.sample(all_node_ids, min(num_nodes, len(all_node_ids)))
            
            # Simulate student performance based on iteration (progressive learning)
            # Higher i = higher probability of being correct (learning simulation)
            base_prob = 0.5 + (i / iterations) * 0.3 
            is_correct = random.random() < base_prob
            
            score = 100.0 if is_correct else 0.0
            
            # Process attempt using 1/N logic
            affected = concept_tagging.process_multi_node_attempt(
                db, 
                user_id, 
                target_nodes, 
                is_correct, 
                score, 
                time_taken_seconds=random.randint(30, 120)
            )
            
            stats[user_name]["total"] += 1
            if is_correct: stats[user_name]["correct"] += 1
            stats[user_name]["affected"] += len(affected)
            
            if i % 100 == 0:
                print(f"  Progress: {i}/{iterations} attempts processed...")

        db.commit()
        duration = time.time() - start_time
        
        print("\n" + "="*50)
        print("SIMULATION RESULTS")
        print("="*50)
        print(f"Total Iterations: {iterations}")
        print(f"Total Affected Mastery Records: {sum(s['affected'] for s in stats.values())}")
        print(f"Time Taken: {duration:.2f}s (Average: {duration/iterations*1000:.1f}ms/op)")
        
        for name, s in stats.items():
            acc = (s["correct"]/s["total"]*100) if s["total"] > 0 else 0
            print(f"Persona: {name:20} | Attempts: {s['total']:3} | Accuracy: {acc:4.1f}%")

        # Stability Check: Ensure no mastery > 100
        extreme_rows = db.execute(text("SELECT COUNT(*) FROM student_concept_mastery WHERE mastery_score > 100")).fetchone()[0]
        if extreme_rows == 0:
            print("\n[VERIFIED] Mathematical Stability: Passed (No inflation > 100%)")
        else:
            print(f"\n[CRITICAL] Stability Failure: {extreme_rows} nodes exceeded 100% mastery!")

    except Exception as e:
        print(f"Simulation Failed: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    run_simulation(1000)
