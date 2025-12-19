"""
Quick script to insert subscription plans using raw SQL
This avoids the SQLAlchemy mapper initialization issues
"""

import sqlite3
import os

# Path to database
db_path = os.path.join('backend', 'eduecosystem.db')

if not os.path.exists(db_path):
    print(f"❌ Database not found at: {db_path}")
    print("Please ensure the backend database exists.")
    exit(1)

# Connect to database
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

print("=" * 60)
print("INSERTING SUBSCRIPTION PLANS")
print("=" * 60)

try:
    # Check if plans already exist
    cursor.execute("SELECT COUNT(*) FROM subscription_plans")
    count = cursor.fetchone()[0]
    
    if count > 0:
        print(f"\n⚠️  {count} subscription plans already exist.")
        response = input("Do you want to delete existing plans and recreate? (y/N): ")
        if response.lower() == 'y':
            cursor.execute("DELETE FROM subscription_plans")
            print("✓ Existing plans deleted")
        else:
            print("Skipping insertion.")
            conn.close()
            exit(0)
    
    # Read and execute SQL file
    with open('insert_subscription_plans.sql', 'r') as f:
        sql_script = f.read()
    
    # Split by semicolon and execute each statement
    statements = [s.strip() for s in sql_script.split(';') if s.strip()]
    
    for statement in statements:
        if statement.upper().startswith('SELECT'):
            # Execute and display results
            cursor.execute(statement)
            results = cursor.fetchall()
            print("\n📊 SUBSCRIPTION PLANS:")
            print("-" * 60)
            for row in results:
                print(f"  {row[0]}: ${row[1]}/mo, ${row[2]}/yr ({row[3]} day trial)")
                print(f"    Active: {bool(row[4])}, Popular: {bool(row[5])}, Featured: {bool(row[6])}")
        else:
            # Execute insert
            cursor.execute(statement)
    
    # Commit changes
    conn.commit()
    print("\n✅ Successfully inserted subscription plans!")
    
    # Final count
    cursor.execute("SELECT COUNT(*) FROM subscription_plans")
    final_count = cursor.fetchone()[0]
    print(f"\n📈 Total plans in database: {final_count}")
    
except Exception as e:
    print(f"\n❌ Error: {e}")
    conn.rollback()
    raise
finally:
    conn.close()

print("\n" + "=" * 60)
print("NEXT STEPS:")
print("  1. Start backend: cd backend && uvicorn app.main:app --reload")
print("  2. Test API: curl http://localhost:8000/api/v1/subscriptions/plans")
print("  3. Open pricing page: http://localhost:3000/pricing")
print("=" * 60)
