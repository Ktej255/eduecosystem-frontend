import sqlite3
import os

db_path = r'd:\Development\EduEcosystem\backend\eduecosystem_v2.db'
if not os.path.exists(db_path):
    print(f"Error: {db_path} not found")
    exit(1)

conn = sqlite3.connect(db_path)
cursor = conn.cursor()

print("--- [PERFORMANCE AUDIT] Generating Neural Sharding Indexes ---")

# 1. Composite Index for Activity Logs (Student-Node-Activity-Time)
# This powers the correlated subqueries in _collect_signals
try:
    print("Adding composite index: idx_student_activity_composite...")
    cursor.execute("""
        CREATE INDEX IF NOT EXISTS idx_student_activity_composite 
        ON student_activity_log (student_id, node_id, activity_type, timestamp DESC)
    """)
    print("✅ Index created successfully.")
except Exception as e:
    print(f"Error creating composite index: {e}")

# 2. Composite Index for Mastery (Student-Node-Subject)
# Though we have idx_mastery_student/node, a combined index on concept_nodes might help
try:
    print("Adding composite index: idx_concept_nodes_subject...")
    cursor.execute("""
        CREATE INDEX IF NOT EXISTS idx_concept_nodes_subject 
        ON concept_nodes (subject_slug, module_id, node_id)
    """)
    print("✅ Index created successfully.")
except Exception as e:
    print(f"Error creating concept nodes index: {e}")

conn.commit()
conn.close()
print("--- [AUDIT COMPLETE] Performance Hardened ---")
