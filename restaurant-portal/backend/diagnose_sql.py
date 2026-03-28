import os
import psycopg2
from sqlalchemy import create_engine, text

def diagnose():
    db_uri = "postgresql://pizza_blitz_user:PizzaBlitz123!@/pizza_blitz_db?host=/cloudsql/eduecosystem-prod:us-central1:eduecosystem-db"
    
    # Use SQLAlchemy for easy execution
    engine = create_engine(db_uri)
    
    with engine.connect() as conn:
        # Step 2: Check row count on the connected database
        print("--- DIAGNOSTICS START ---")
        
        # Daily Sales
        res_sales = conn.execute(text("SELECT COUNT(*), MIN(date), MAX(date) FROM daily_sales")).fetchone()
        print(f"daily_sales: COUNT={res_sales[0]}, MIN_DATE={res_sales[1]}, MAX_DATE={res_sales[2]}")
        
        # Expenses
        res_expenses = conn.execute(text("SELECT COUNT(*) FROM expenses")).fetchone()
        print(f"expenses: COUNT={res_expenses[0]}")
        
        print("--- DIAGNOSTICS END ---")

if __name__ == "__main__":
    diagnose()
