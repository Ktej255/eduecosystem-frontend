"""
Post-migration verification script.
Run after Alembic migration to confirm all KG tables exist in production.
"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from app.core.config import settings
from sqlalchemy import create_engine, text

engine = create_engine(str(settings.DATABASE_URL))

REQUIRED_TABLES = [
    'concept_nodes',
    'concept_relationships', 
    'student_concept_mastery',
    'guided_clips',
    'student_activity_log',
    'concepts',
    'student_mastery',
]

with engine.connect() as conn:
    result = conn.execute(text(
        "SELECT table_name FROM information_schema.tables "
        "WHERE table_schema='public' ORDER BY table_name"
    ))
    existing = [r[0] for r in result]

print("\n=== KG TABLE VERIFICATION ===")
all_good = True
for table in REQUIRED_TABLES:
    status = "✅ EXISTS" if table in existing else "❌ MISSING"
    if table not in existing:
        all_good = False
    print(f"{status} — {table}")

print(f"\n{'✅ ALL TABLES PRESENT' if all_good else '❌ MISSING TABLES — RUN MIGRATION FIRST'}")
print(f"\nAll tables in production ({len(existing)} total):")
for t in existing:
    print(f"  - {t}")