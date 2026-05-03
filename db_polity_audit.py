import psycopg2
from psycopg2 import extras
import sys

# Database connection parameters
DB_HOST = "34.55.250.166"
DB_NAME = "eduecosystem_prod"
DB_USER = "postgres"
DB_PASS = "Tej@1106"

def run_query(cursor, query, title):
    print(f"\n--- {title} ---")
    try:
        cursor.execute(query)
        if cursor.description:
            colnames = [desc[0] for desc in cursor.description]
            rows = cursor.fetchall()
            
            # Print header
            header = " | ".join(colnames)
            print(header)
            print("-" * len(header))
            
            # Print rows
            for row in rows:
                print(" | ".join(str(val) for val in row))
        else:
            print("Query executed successfully, no results returned.")
    except Exception as e:
        print(f"Error executing {title}: {e}")

def main():
    try:
        conn = psycopg2.connect(
            host=DB_HOST,
            database=DB_NAME,
            user=DB_USER,
            password=DB_PASS,
            connect_timeout=10
        )
        cursor = conn.cursor()
        
        # Query 1
        query1 = """
        SELECT COUNT(*) as total
        FROM bank_questions
        WHERE subject ILIKE '%polity%';
        """
        run_query(cursor, query1, "Query 1 — How many Polity questions exist")
        
        # Query 2
        query2 = """
        SELECT level, COUNT(*) as count
        FROM bank_questions
        WHERE subject ILIKE '%polity%'
        GROUP BY level
        ORDER BY level;
        """
        run_query(cursor, query2, "Query 2 — Polity questions by level")
        
        # Query 3
        query3 = """
        SELECT chapter_number, level, COUNT(*) as count
        FROM bank_questions
        WHERE subject ILIKE '%polity%'
        GROUP BY chapter_number, level
        ORDER BY chapter_number, level;
        """
        run_query(cursor, query3, "Query 3 — Per chapter, per level breakdown")
        
        # Query 4
        query4 = """
        SELECT DISTINCT subject, COUNT(*) as count
        FROM bank_questions
        GROUP BY subject
        ORDER BY count DESC;
        """
        run_query(cursor, query4, "Query 4 — Show distinct values in subject column")
        
        cursor.close()
        conn.close()
    except Exception as e:
        print(f"Connection failed: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
