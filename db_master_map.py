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
        colnames = [desc[0] for desc in cursor.description]
        rows = cursor.fetchall()
        
        # Print header
        header = " | ".join(colnames)
        print(header)
        print("-" * len(header))
        
        # Print rows
        for row in rows:
            print(" | ".join(str(val) for val in row))
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
        SELECT 
          table_name,
          (SELECT COUNT(*) FROM information_schema.columns 
           WHERE table_name = t.table_name) as column_count,
          pg_size_pretty(pg_total_relation_size(quote_ident(table_name))) as size
        FROM information_schema.tables t
        WHERE table_schema = 'public'
        ORDER BY pg_total_relation_size(quote_ident(table_name)) DESC;
        """
        run_query(cursor, query1, "Query 1 — List every table and its row count")
        
        # Query 2
        query2 = """
        SELECT 
          relname as table_name,
          n_live_tup as row_count
        FROM pg_stat_user_tables
        ORDER BY n_live_tup DESC;
        """
        run_query(cursor, query2, "Query 2 — Row count for every table")
        
        # Query 3
        query3 = """
        SELECT table_name, column_name, data_type
        FROM information_schema.columns
        WHERE table_schema = 'public'
          AND table_name ILIKE '%question%'
        ORDER BY table_name, ordinal_position;
        """
        run_query(cursor, query3, "Query 3 — Column names of question-related tables")
        
        cursor.close()
        conn.close()
    except Exception as e:
        print(f"Connection failed: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
