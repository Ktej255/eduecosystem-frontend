import sys
from pathlib import Path

# Add backend to path
sys.path.append(str(Path(__file__).resolve().parent.parent))

from app.core.security import verify_password, get_password_hash

STORED_HASH = "$2b$12$fC4PQV6L3pSV1ZvcVUkhbO7/U5IGDt9rhr/XMVrxoYpDkDsa6K22e"
PLAIN_PASSWORD = "Edueco@2026"

def verify():
    print(f"Verifying password: {PLAIN_PASSWORD}")
    print(f"Against hash: {STORED_HASH}")
    
    result = verify_password(PLAIN_PASSWORD, STORED_HASH)
    print(f"Result: {'SUCCESS' if result else 'FAILURE'}")
    
    # Also generate a new hash to see how it looks
    new_hash = get_password_hash(PLAIN_PASSWORD)
    print(f"New Hash generated: {new_hash}")
    
    test_new_verify = verify_password(PLAIN_PASSWORD, new_hash)
    print(f"New Hash verification: {'SUCCESS' if test_new_verify else 'FAILURE'}")

if __name__ == "__main__":
    verify()
