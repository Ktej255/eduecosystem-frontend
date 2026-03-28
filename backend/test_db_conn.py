import os
from sqlalchemy import create_engine, text
from app.core.config import settings

def test_connection():
    # Try different URLs
    urls = [
        "postgresql+pg8000://postgres:Tej%401106@127.0.0.1:5432/eduecosystem_prod",
        "postgresql://postgres:Tej%401106@127.0.0.1:5432/eduecosystem_prod",
    ]
    
    for url in urls:
        if not url: continue
        print(f"Testing URL: {url.split('@')[-1]}")
        try:
            # Correct way to pass timeout to psycopg2
            engine = create_engine(url, connect_args={'connect_timeout': 5})
            with engine.connect() as conn:
                conn.execute(text("SELECT 1"))
                print("SUCCESS!")
                return url
        except Exception as e:
            print(f"FAILED: {e}")
    return None

if __name__ == "__main__":
    test_connection()
