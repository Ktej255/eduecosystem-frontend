import sys
import os
import time

# Add backend to path
sys.path.append(r'd:\Development\EduEcosystem\backend')

# Mock environment variables if needed
os.environ["DATABASE_URL"] = "sqlite:///d:/Development/EduEcosystem/backend/eduecosystem_v2.db"

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.services.learning_engine import LearningEngine

engine = create_engine(os.environ["DATABASE_URL"])
SessionLocal = sessionmaker(bind=engine)
db = SessionLocal()

le = LearningEngine()
student_id = 111 # Dummy student

subjects = ["environment", "history", "geography"]

print("--- [NEURAL STRESS TEST] START ---")

for sub in subjects:
    start_time = time.time()
    try:
        signals = le._collect_signals(db, student_id, sub)
        end_time = time.time()
        
        latency = (end_time - start_time) * 1000
        print(f"Subject: {sub.upper()}")
        print(f"  Nodes Detected: {len(signals)}")
        print(f"  Retrieval Latency: {latency:.2f}ms")
        
        if signals:
            print(f"  Sample Node: {signals[0].node_id} ({signals[0].node_name[:30]}...)")
    except Exception as e:
        print(f"  Error for {sub}: {e}")

db.close()
print("--- [NEURAL STRESS TEST] COMPLETE ---")
