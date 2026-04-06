import psycopg2
import sys

def run_migrations():
    conn_str = "postgresql://pizza_blitz_user:PizzaBlitz123!@34.55.250.166/pizza_blitz_db"
    try:
        conn = psycopg2.connect(conn_str)
        conn.autocommit = True
        cursor = conn.cursor()
        
        with open(r"D:\Development\EduEcosystem\restaurant-portal\MIGRATIONS.sql", "r", encoding="utf-8") as f:
            sql = f.read()
            
        print("Executing MIGRATIONS.sql...")
        cursor.execute(sql)
        print("Migrations COMPLETED.")
        
        cursor.close()
        conn.close()
    except Exception as e:
        print(f"ERROR: {e}")
        sys.exit(1)

if __name__ == "__main__":
    run_migrations()
