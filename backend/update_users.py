import sqlalchemy

# Connection string using Public IP for Windows compatibility
DB_URL = "postgresql://postgres:Tej%401106@34.55.250.166/eduecosystem_prod"

def main():
    try:
        engine = sqlalchemy.create_engine(DB_URL)
        with engine.connect() as conn:
            query = sqlalchemy.text("UPDATE users SET is_batch1_authorized = true WHERE role = 'student'")
            result = conn.execute(query)
            conn.commit()
            print(f"Successfully updated {result.rowcount} students.")
    except Exception as e:
        print(f"Error updating database: {e}")

if __name__ == "__main__":
    main()
