import os
import sys
from sqlalchemy import create_engine, inspect
from sqlalchemy.orm import sessionmaker

# Add the backend directory to sys.path
backend_dir = r"d:\Graphology\Master Software\Eduecosystem\backend"
sys.path.append(backend_dir)

from app.models.user import User

PROD_DB_URL = "postgresql://postgres:Edueco123!@eduecosystem-prod.cw5ei40o4bwd.us-east-1.rds.amazonaws.com:5432/eduecosystem_prod"

def inspect_prod():
    print(f"Connecting directly to PROD RDS...")
    try:
        engine = create_engine(PROD_DB_URL)
        inspector = inspect(engine)
        tables = inspector.get_table_names()
        print(f"Tables found: {tables}")
        
        if "users" in tables:
            SessionLocal = sessionmaker(bind=engine)
            db = SessionLocal()
            count = db.query(User).count()
            print(f"User count in PROD 'users' table: {count}")
            if count > 0:
                user = db.query(User).filter(User.email == "hitvar040@gmail.com").first()
                if user:
                    print(f"User hitvar040@gmail.com FOUND in PROD! ID={user.id}")
                else:
                    print(f"User hitvar040@gmail.com NOT FOUND in PROD among {count} users.")
                    # Let's see some sample emails
                    samples = db.query(User.email).limit(5).all()
                    print(f"Sample emails: {[s[0] for s in samples]}")
            db.close()
        else:
            print("'users' table NOT FOUND in PROD database.")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    inspect_prod()
