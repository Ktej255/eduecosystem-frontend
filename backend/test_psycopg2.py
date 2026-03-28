import psycopg2
import os

def test_direct():
    try:
        # Try direct connection to proxy
        print("Connecting to 127.0.0.1:5432...")
        conn = psycopg2.connect(
            host="127.0.0.1",
            port=5432,
            user="postgres",
            password="Tej@1106",
            dbname="eduecosystem_prod",
            connect_timeout=5
        )
        print("SUCCESS (127.0.0.1)!")
        conn.close()
    except Exception as e:
        print(f"FAILED (127.0.0.1): {e}")

    try:
        # Try direct connection to proxy with eduecosystem_db
        print("Connecting to 127.0.0.1:5432 (eduecosystem_db)...")
        conn = psycopg2.connect(
            host="127.0.0.1",
            port=5432,
            user="postgres",
            password="Tej@1106",
            dbname="eduecosystem_db",
            connect_timeout=5
        )
        print("SUCCESS (eduecosystem_db)!")
        conn.close()
    except Exception as e:
        print(f"FAILED (eduecosystem_db): {e}")

if __name__ == "__main__":
    test_direct()
