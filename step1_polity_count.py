import psycopg2
import urllib.parse

password = "Tej@1106"
encoded_password = urllib.parse.quote(password)
conn_string = f"postgresql://postgres:{encoded_password}@34.55.250.166/eduecosystem_prod"

conn = psycopg2.connect(conn_string)
cur = conn.cursor()

# Step 1 - Count Polity questions
cur.execute("SELECT subject, COUNT(*) as total FROM bank_questions WHERE subject = 'Polity' GROUP BY subject;")
polity = cur.fetchall()
print("--- POLITY QUESTION COUNT ---")
print(polity)

# Check all subjects in the bank
cur.execute("SELECT subject, COUNT(*) as total FROM bank_questions GROUP BY subject ORDER BY total DESC;")
all_subjects = cur.fetchall()
print("\n--- ALL SUBJECTS IN BANK ---")
for row in all_subjects:
    print(f"  {row[0]}: {row[1]}")

# Check a sample question structure
cur.execute("SELECT id, subject, type, topic_tag, tags FROM bank_questions LIMIT 3;")
sample = cur.fetchall()
print("\n--- SAMPLE QUESTION STRUCTURE ---")
for row in sample:
    print(f"  ID={row[0]} | Subject={row[1]} | Type={row[2]} | TopicTag={row[3]} | Tags={str(row[4])[:60]}")

cur.close()
conn.close()
