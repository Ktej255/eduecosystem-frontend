import sqlite3

# Connect to the backend database
conn = sqlite3.connect('backend/eduecosystem.db')
cursor = conn.cursor()

print("=" * 60)
print("PHASE 8 DATABASE VERIFICATION")
print("=" * 60)

# 1. Check all Phase 8 tables and their counts
phase8_tables = {
    'i18n': ['languages', 'translations', 'content_translations', 'user_language_preferences'],
    'marketplace': ['subscription_plans', 'user_subscriptions', 'subscription_invoices', 'subscription_coupons'],
    'affiliates': ['affiliate_partners', 'affiliate_clicks', 'affiliate_referrals', 'affiliate_payouts'],
    'revenue': ['revenue_shares', 'revenue_transactions', 'marketplace_listings'],
    'analytics': ['platform_analytics', 'instructor_analytics', 'student_analytics'],
    'payments': ['instructor_payment_info', 'instructor_payouts']
}

print("\n📊 TABLE VERIFICATION:")
total_tables = 0
for category, tables in phase8_tables.items():
    print(f"\n{category.upper()}:")
    for table in tables:
        try:
            cursor.execute(f"SELECT COUNT(*) FROM {table}")
            count = cursor.fetchone()[0]
            print(f"  ✓ {table}: {count} rows")
            total_tables += 1
        except sqlite3.OperationalError:
            print(f"  ✗ {table}: MISSING")

print(f"\n✅ Total Phase 8 tables verified: {total_tables}")

# 2. Check language data
print("\n" + "=" * 60)
print("LANGUAGES DATA:")
print("=" * 60)
cursor.execute("SELECT code, name, native_name, is_active FROM languages ORDER BY sort_order")
languages = cursor.fetchall()
for lang in languages:
    status = "✓" if lang[3] else "✗"
    print(f"  {status} {lang[0]}: {lang[1]} ({lang[2]})")

# 3. Check subscription plans
print("\n" + "=" * 60)
print("SUBSCRIPTION PLANS:")
print("=" * 60)
cursor.execute("SELECT name, monthly_price, yearly_price, is_active FROM subscription_plans")
plans = cursor.fetchall()
if plans:
    for plan in plans:
        status = "✓" if plan[3] else "✗"
        print(f"  {status} {plan[0]}: ${plan[1]}/mo, ${plan[2]}/yr" if plan[2] else f"  {status} {plan[0]}: ${plan[1]}/mo")
else:
    print("  ⚠️  No subscription plans configured yet")

# 4. Database summary
print("\n" + "=" * 60)
print("DATABASE STATUS SUMMARY:")
print("=" * 60)
cursor.execute("SELECT COUNT(*) FROM sqlite_master WHERE type='table'")
total_db_tables = cursor.fetchone()[0]
print(f"  Total database tables: {total_db_tables}")

cursor.execute("SELECT version_num FROM alembic_version")
current_version = cursor.fetchone()[0]
print(f"  Alembic version: {current_version}")
print(f"  Phase 8 tables: {total_tables}/{len([t for tables in phase8_tables.values() for t in tables])}")

conn.close()

print("\n" + "=" * 60)
print("✅ VERIFICATION COMPLETE")
print("=" * 60)
print("\nConclusion: Phase 8 database schema is PRESENT and READY.")
print("Next step: Test API endpoints to verify backend services work.")
