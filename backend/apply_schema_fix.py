import sys
import os
from sqlalchemy import create_engine, text

# Try common connection strings
conn_strings = [
    "postgresql://postgres:postgres@localhost:5432/eduecosystem",
    "postgresql://postgres:Tej%401106@localhost:5432/eduecosystem_prod",
    "sqlite:///eduecosystem_v2.db"
]

success = False
for url in conn_strings:
    try:
        engine = create_engine(url)
        with engine.connect() as conn:
            print(f"Testing {url}...")
            
            table_exists = False
            if "sqlite" in url:
                res = conn.execute(text("SELECT name FROM sqlite_master WHERE type='table' AND name='bank_questions'"))
                if res.fetchone():
                    table_exists = True
            else:
                res = conn.execute(text("SELECT 1 FROM information_schema.tables WHERE table_name = 'bank_questions'"))
                if res.fetchone():
                    table_exists = True

            if table_exists:
                print(f"Found bank_questions table in {url}!")
                
                # Apply fix
                try:
                    conn.execute(text("ALTER TABLE bank_questions ADD COLUMN subject VARCHAR(50)"))
                    print("Added column 'subject'.")
                except Exception as e:
                    if "already exists" in str(e).lower():
                        print("Column 'subject' already exists.")
                    else:
                        print(f"Error adding column: {e}")
                
                try:
                    if "sqlite" in url:
                        conn.execute(text("CREATE INDEX IF NOT EXISTS ix_bank_questions_subject ON bank_questions (subject)"))
                    else:
                        conn.execute(text("CREATE INDEX ix_bank_questions_subject ON bank_questions (subject)"))
                    print("Created index.")
                except Exception as e:
                    if "already exists" in str(e).lower():
                        print("Index already exists.")
                        
                conn.commit()
                print("Schema update completed successfully!")
                success = True
                break
            else:
                print(f"bank_questions table NOT found in {url}.")
    except Exception as e:
        print(f"Could not connect to {url}: {e}")

if not success:
    print("Could not find bank_questions table in any known database location.")
    sys.exit(1)
