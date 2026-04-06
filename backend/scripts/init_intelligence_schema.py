import sys
import os
from sqlalchemy import create_engine
from app.db.session import engine, Base
from app.models.upsc_pyq import UPSCPYQ, upsc_pyq_node_association
from app.models.concept_node import ConceptNode

def init_schema():
    print("🏗️ Initializing Intelligence Layer Schema...")
    try:
        # Create all tables defined in Base (including upsc_pyqs and the M2M table)
        Base.metadata.create_all(bind=engine)
        print("✅ Tables 'upsc_pyqs' and 'upsc_pyq_node_association' created successfully!")
    except Exception as e:
        print(f"❌ Table creation failed: {e}")

if __name__ == "__main__":
    sys.path.append(os.getcwd())
    init_schema()
