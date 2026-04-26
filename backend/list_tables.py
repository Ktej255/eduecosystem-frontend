import psycopg2
conn = psycopg2.connect(dbname='eduecosystem_prod', user='postgres', password='EduEco2026DB', host='34.55.250.166', port=5432)
cur = conn.cursor()
cur.execute("SELECT table_name FROM information_schema.tables WHERE table_schema='public' ORDER BY table_name;")
for row in cur.fetchall():
    print(row[0])
cur.close()
conn.close()
