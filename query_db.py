import psycopg2
import json

DB_URL = 'postgresql://postgres:Tej%401106@34.55.250.166:5432/eduecosystem_prod'

def main():
    conn = psycopg2.connect(DB_URL)
    cur = conn.cursor()
    cur.execute("SELECT instructor_id FROM bank_questions LIMIT 1")
    row = cur.fetchone()
    print("Instructor ID:", row[0])
    
    cur.execute("SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'bank_questions'")
    cols = cur.fetchall()
    print("Columns:", cols)

    conn.close()

if __name__ == '__main__':
    main()
