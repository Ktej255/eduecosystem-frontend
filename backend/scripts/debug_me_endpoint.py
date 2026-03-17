import sys
from pathlib import Path
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from jose import jwt

# Add backend to path
sys.path.append(str(Path(__file__).resolve().parent.parent))

from app.core.config import settings
from app.core import security
from app.crud import user as crud_user
from app.schemas.user import TokenPayload

PROD_DB_URL = "postgresql://postgres:Edueco123!@eduecosystem-prod.cw5ei40o4bwd.us-east-1.rds.amazonaws.com:5432/eduecosystem_prod"
PROD_SECRET_KEY = "eduecosystem-super-secret-key-2025"
TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NzQyNzA1NDUsInN1YiI6IjI5IiwidiI6bnVsbH0.sDH4xfOZ_g9CSEDUHuhHIgoBoZhmLnw8oIpNmmBALT8"

def debug_me():
    engine = create_engine(PROD_DB_URL)
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    db = SessionLocal()
    
    print("Decoding JWT...")
    try:
        payload = jwt.decode(
            TOKEN, PROD_SECRET_KEY, algorithms=[security.ALGORITHM]
        )
        print(f"Payload: {payload}")
        token_data = TokenPayload(**payload)
        print(f"Token Data: {token_data}")
    except Exception as e:
        print(f"FAILED to decode JWT: {e}")
        return

    print(f"Fetching user with ID {token_data.sub}...")
    try:
        user = crud_user.get(db, id=token_data.sub)
        if not user:
            print("USER NOT FOUND")
            return
        print(f"User Found: {user.email}")
        print(f"Is Active: {user.is_active}")
        
        # Test serialization (this is often where 500 happens)
        from app.schemas.user import User as UserSchema
        print("Testing Serialization to User schema...")
        user_schema = UserSchema.model_validate(user)
        print(f"Serialized User: {user_schema.model_dump()}")
        
    except Exception as e:
        print(f"CRASH during debug: {e}")
        import traceback
        traceback.print_exc()
    finally:
        db.close()

if __name__ == "__main__":
    debug_me()
