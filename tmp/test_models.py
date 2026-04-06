import sys
sys.path.insert(0, 'backend')

errors = []
step = "import"
try:
    step = "import User"
    from app.models.user import User
    step = "import SessionLocal"
    from app.db.session import SessionLocal
    step = "create session"
    db = SessionLocal()
    step = "query"
    u = db.query(User).first()
    db.close()
    print("SUCCESS:", u.email if u else "no users")
except Exception as e:
    msg = str(e)
    # Extract the key part
    if "failed to locate a name" in msg:
        start = msg.find("'")
        end = msg.rfind("'")
        missing = msg[start:end+1]
        print(f"MISSING MODEL at step [{step}]: {missing}")
    else:
        print(f"ERROR at step [{step}]: {msg[:500]}")
