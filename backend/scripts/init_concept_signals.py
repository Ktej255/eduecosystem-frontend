
import sys
import os
from sqlalchemy import text

# Add backend to sys.path
sys.path.append(os.path.join(os.getcwd(), "backend"))

from app.db.session import engine

def main():
    print("🛠️  Initializing 'concept_signals' table...")
    sql = """
    CREATE TABLE IF NOT EXISTS concept_signals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        node_id VARCHAR NOT NULL,
        signal_type VARCHAR NOT NULL,
        content_url TEXT NOT NULL,
        metadata JSON,
        UNIQUE (node_id, signal_type),
        FOREIGN KEY(node_id) REFERENCES concept_nodes (node_id)
    );
    """
    try:
        with engine.connect() as conn:
            conn.execute(text(sql))
            conn.commit()
            print("✅ Table 'concept_signals' ensured.")
    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    main()
