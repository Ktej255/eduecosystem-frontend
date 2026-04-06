import os
import psycopg2

DB_URL = 'postgresql://postgres:Tej%401106@34.55.250.166:5432/eduecosystem_prod'

def main():
    conn = psycopg2.connect(DB_URL)
    cur = conn.cursor()
    
    print(f"{'Ch':>4} | {'L1':>5} {'L2':>5} {'L3':>5} | {'TOTAL':>6} | STATUS")
    print("-" * 50)
    for ch in range(71, 96):
        cur.execute("SELECT level, COUNT(*) FROM bank_questions WHERE subject='Polity' AND chapter_number=%s GROUP BY level", (ch,))
        rows = cur.fetchall()
        counts = {1: 0, 2: 0, 3: 0}
        for r in rows:
            counts[r[0]] = r[1]
        
        total = sum(counts.values())
        status = "✅ 90+" if total >= 90 and counts[1]>=30 and counts[2]>=30 and counts[3]>=30 else "❌ BELOW"
        
        print(f"{ch:4} | {counts[1]:5} {counts[2]:5} {counts[3]:5} | {total:6} | {status}")
        
    conn.close()

if __name__ == '__main__':
    main()
