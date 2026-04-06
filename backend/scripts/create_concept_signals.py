
import sys
import os
from sqlalchemy import text

# Add current directory to path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.db.session import engine, Base
# Import all models to ensure they are registered with Base.metadata
import app.models

def create_table():
    print("🛠️  Initializing 'concept_signals' table from global metadata...")
    try:
        # Check if table exists physically in SQLite
        with engine.connect() as conn:
            result = conn.execute(text("SELECT name FROM sqlite_master WHERE type='table' AND name='concept_signals'")).fetchone()
            if result:
                print("✅ Table 'concept_signals' already exists physically.")
                return

        # Create only the missing table
        # We find the table object in the metadata and create it
        target_table = Base.metadata.tables.get('concept_signals')
        if target_table is not None:
            target_table.create(engine, checkfirst=True)
            print("✅ Table 'concept_signals' created successfully.")
        else:
            print("❌ Table 'concept_signals' not found in Metadata. Check app.models.__init__ registration.")
            
    except Exception as e:
        print(f"❌ Error creating table: {e}")

if __name__ == "__main__":
    create_table()
