import sqlite3

# Connect to the backend database
conn = sqlite3.connect('backend/eduecosystem.db')
cursor = conn.cursor()

try:
    # Get the current applied migration
    cursor.execute("SELECT version_num FROM alembic_version")
    versions = cursor.fetchall()

    print("Currently applied migrations:")
    for v in versions:
        print(f"  - {v[0]}")

    # Get all tables
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table' ORDER BY name")
    tables = cursor.fetchall()

    print(f"\nTotal tables in database: {len(tables)}")

    # Check for Phase 8 tables
    phase8_tables = ['languages', 'translations', 'content_translations', 'user_language_preferences',
                     'subscription_plans', 'affiliate_partners', 'marketplace_listings', 'revenue_shares']

    print("\nPhase 8 tables status:")
    existing_tables = [t[0] for t in tables]
    for table in phase8_tables:
        status = "✓ EXISTS" if table in existing_tables else "✗ MISSING"
        print(f"  {status}: {table}")

except sqlite3.OperationalError as e:
    print(f"Error: {e}")
finally:
    conn.close()
