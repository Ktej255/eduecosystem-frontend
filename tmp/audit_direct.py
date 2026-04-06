"""
Direct production DB audit using public IP TCP connection.
Run: D:\DevTools\Python\python.exe tmp\audit_direct.py
"""
import sys
sys.path.insert(0, 'backend')

# Use direct TCP to Cloud SQL public IP (no proxy needed if IP is whitelisted)
DB_URL = "postgresql://postgres:Tej%401106@34.55.250.166:5432/eduecosystem_prod"

from sqlalchemy import create_engine, text

engine = create_engine(DB_URL, connect_args={"connect_timeout": 10, "sslmode": "require"})

print("=" * 70)
print("  PRODUCTION DATABASE: QUESTION QUALITY AUDIT")
print("=" * 70)

try:
    with engine.connect() as conn:

        print("\n--- 1. TOTAL QUESTIONS BY SUBJECT ---")
        rows = conn.execute(text(
            "SELECT subject, COUNT(*) as total FROM bank_questions GROUP BY subject ORDER BY total DESC"
        )).fetchall()
        total_all = 0
        for r in rows:
            print(f"  {str(r[0] or 'NULL'):<30} {r[1]:>8,}")
            total_all += r[1]
        print(f"\n  GRAND TOTAL: {total_all:,}")

        print("\n--- 2. TRUNCATED (contain ...) BY SUBJECT ---")
        rows = conn.execute(text(
            "SELECT subject, COUNT(*) as c FROM bank_questions "
            "WHERE text LIKE '%...%' OR text LIKE '%\u2026%' "
            "GROUP BY subject ORDER BY c DESC"
        )).fetchall()
        trunc_total = sum(r[1] for r in rows)
        for r in rows:
            print(f"  {str(r[0] or 'NULL'):<30} {r[1]:>8,}")
        print(f"  TOTAL TRUNCATED: {trunc_total:,}")

        print("\n--- 3. SHORT QUESTIONS (< 30 chars) BY SUBJECT ---")
        rows = conn.execute(text(
            "SELECT subject, COUNT(*) as c FROM bank_questions "
            "WHERE LENGTH(text) < 30 GROUP BY subject ORDER BY c DESC"
        )).fetchall()
        for r in rows:
            print(f"  {str(r[0] or 'NULL'):<30} {r[1]:>8,}")

        print("\n--- 4. MISSING CORRECT ANSWER ---")
        rows = conn.execute(text(
            "SELECT subject, COUNT(*) as c FROM bank_questions "
            "WHERE correct_answer IS NULL OR TRIM(correct_answer)='' "
            "GROUP BY subject ORDER BY c DESC"
        )).fetchall()
        for r in rows:
            print(f"  {str(r[0] or 'NULL'):<30} {r[1]:>8,}")

        print("\n--- 5. EXACT DUPLICATES ---")
        dup_groups = conn.execute(text(
            "SELECT COUNT(*) FROM (SELECT text, COUNT(*) FROM bank_questions GROUP BY text HAVING COUNT(*) > 1) d"
        )).scalar()
        dup_rows = conn.execute(text(
            "SELECT COALESCE(SUM(cnt-1),0) FROM (SELECT COUNT(*) as cnt FROM bank_questions GROUP BY text HAVING COUNT(*) > 1) d"
        )).scalar()
        print(f"  Duplicate groups: {dup_groups:,}")
        print(f"  Excess rows to remove: {dup_rows:,}")

        print("\n--- 6. SAMPLE TRUNCATED POLITY QUESTIONS (top 5) ---")
        rows = conn.execute(text(
            "SELECT id, LEFT(text,150), LENGTH(text) FROM bank_questions "
            "WHERE subject='Polity' AND (text LIKE '%...%' OR text LIKE '%\u2026%') LIMIT 5"
        )).fetchall()
        if rows:
            for r in rows:
                print(f"\n  [ID:{r[0]} len={r[2]}]\n  {r[1]}")
        else:
            print("  No truncated Polity questions found in DB.")

        print("\n--- 7. HISTORY KEYWORDS MISLABELED AS POLITY ---")
        count = conn.execute(text(
            "SELECT COUNT(*) FROM bank_questions WHERE subject='Polity' "
            "AND (LOWER(text) LIKE '%mughal%' OR LOWER(text) LIKE '%maurya%' "
            "OR LOWER(text) LIKE '%british%' OR LOWER(text) LIKE '%1857%')"
        )).scalar()
        print(f"  History-content tagged as Polity: {count:,}")

        print("\n--- 8. QUESTIONS ADDED BY DATE (last 30 days) ---")
        rows = conn.execute(text(
            "SELECT DATE(created_at), COUNT(*) FROM bank_questions "
            "WHERE created_at >= NOW() - INTERVAL '30 days' "
            "GROUP BY DATE(created_at) ORDER BY 1 DESC LIMIT 10"
        )).fetchall()
        for r in rows:
            print(f"  {r[0]}: {r[1]:,} questions added")

    print("\n" + "=" * 70)
    print("  AUDIT COMPLETE")
    print("=" * 70)

except Exception as e:
    print(f"\nERROR: {e}")
    print("\nPossible causes:")
    print("  1. IP not whitelisted yet (Cloud SQL patch still running)")
    print("  2. SSL required but not configured")
    print("  3. Wrong password/credentials")
