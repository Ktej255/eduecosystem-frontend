"""
SAFE PRODUCTION DEDUPLICATION (Fixed Encoding)
==============================================
"""
from sqlalchemy import create_engine, text
import sys

# Set encoding for Windows stdout
if sys.platform == 'win32':
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

DB_URL = "postgresql://postgres:Tej%401106@34.55.250.166:5432/eduecosystem_prod"
engine = create_engine(DB_URL, connect_args={"connect_timeout": 15, "sslmode": "require"})

print("=" * 60)
print("  PRODUCTION DATABASE CLEANUP: DEDUPLICATION")
print("=" * 60)

try:
    with engine.begin() as conn:
        # 1. Count total rows before
        total_before = conn.execute(text("SELECT COUNT(*) FROM bank_questions")).scalar()
        print(f"Total rows before cleanup: {total_before:,}")

        # 2. Count unique questions
        unique_count = conn.execute(text("SELECT COUNT(DISTINCT text) FROM bank_questions")).scalar()
        print(f"Unique question texts:     {unique_count:,}")
        
        expected_to_delete = total_before - unique_count
        print(f"Expected to delete:        {expected_to_delete:,}")
        
        if expected_to_delete <= 0:
            print("\n[OK] No duplicates found. Skipping.")
        else:
            # 3. Execute deletion
            print(f"\n[INFO] Executing DELETE of {expected_to_delete:,} duplicate rows...")
            
            delete_sql = text("""
                DELETE FROM bank_questions
                WHERE id NOT IN (
                    SELECT MIN(id)
                    FROM bank_questions
                    GROUP BY text
                )
            """)
            
            result = conn.execute(delete_sql)
            print(f"[SUCCESS] Deleted {result.rowcount:,} rows.")

        # 4. Final verification
        total_after = conn.execute(text("SELECT COUNT(*) FROM bank_questions")).scalar()
        print(f"Total rows after cleanup:  {total_after:,}")
        
        if total_after == unique_count:
            print("\n[VERIFIED] Database is now 100% unique.")
        else:
            print(f"\n[WARNING] Final count ({total_after:,}) vs expected ({unique_count:,}).")

    print("\n" + "=" * 60)
    print("  DEDUPLICATION COMPLETE")
    print("=" * 60)

except Exception as e:
    print(f"\n[ERROR] FATAL: {e}")
