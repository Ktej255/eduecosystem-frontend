import os
from sqlalchemy import create_engine, text
from app.core.config import settings

def main():
    db_url = settings.DATABASE_URL
    if not db_url:
        print("DATABASE_URL not set.")
        return

    engine = create_engine(db_url)
    is_sqlite = db_url.startswith("sqlite")
    
    print(f"Connecting to {db_url}...")
    
    with engine.connect() as conn:
        # PostgreSQL uses SERIAL, SQLite uses AUTOINCREMENT (but INTEGER PRIMARY KEY is enough)
        id_type = "SERIAL" if not is_sqlite else "INTEGER"
        
        # 1. Create table
        conn.execute(text(f"""
            CREATE TABLE IF NOT EXISTS focused_active_sessions (
                id {id_type} PRIMARY KEY,
                user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
                session_id VARCHAR(100) UNIQUE NOT NULL,
                subject VARCHAR(100),
                cluster_number INTEGER,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                expires_at TIMESTAMP
            )
        """))
        
        # 2. Create indices
        conn.execute(text("CREATE INDEX IF NOT EXISTS idx_fas_session_id ON focused_active_sessions(session_id)"))
        conn.execute(text("CREATE INDEX IF NOT EXISTS idx_fas_user_id ON focused_active_sessions(user_id)"))
        
        conn.commit()
        print("Table 'focused_active_sessions' and indices verified/created.")

if __name__ == "__main__":
    main()
