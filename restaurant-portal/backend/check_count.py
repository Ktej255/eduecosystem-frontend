import os
from sqlalchemy import create_engine, text

def check_count():
    db_uri = "postgresql://pizza_blitz_user:PizzaBlitz123!@/pizza_blitz_db?host=/cloudsql/eduecosystem-prod:us-central1:eduecosystem-db"
    engine = create_engine(db_uri)
    with engine.connect() as conn:
        result = conn.execute(text("SELECT COUNT(*) FROM daily_sales;"))
        count = result.scalar()
        print(f"Total DailySales records: {count}")
        
if __name__ == "__main__":
    check_count()
