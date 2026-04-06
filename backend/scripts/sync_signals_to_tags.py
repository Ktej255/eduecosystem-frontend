import sqlite3
import os

db_path = r'd:\Development\EduEcosystem\backend\eduecosystem_v2.db'
if not os.path.exists(db_path):
    print(f"Error: {db_path} not found")
    exit(1)

conn = sqlite3.connect(db_path)
cursor = conn.cursor()

print("--- [MIGRATION START] Syncing Signals to Production Tags ---")

# 1. Fetch from concept_signals
# columns: node_id, signal_type, content_url
try:
    cursor.execute("SELECT node_id, signal_type, content_url FROM concept_signals")
    signals = cursor.fetchall()
    print(f"Detected {len(signals)} global signals in concept_signals.")
except Exception as e:
    print(f"Error reading concept_signals: {e}")
    conn.close()
    exit(1)

# 2. Bulk Insert into content_concept_tags
# columns: content_type, content_id, node_id, weight, is_primary, tagged_by
# Note: we use content_url as the content_id for the video player
inserted = 0
for node_id, signal_type, content_url in signals:
    try:
        # Check if already exists to avoid duplication
        cursor.execute("""
            INSERT INTO content_concept_tags 
                (content_type, content_id, node_id, weight, is_primary, tagged_by)
            VALUES (?, ?, ?, 1.0, 1, 'auto')
        """, (signal_type, content_url, node_id))
        inserted += 1
    except sqlite3.IntegrityError:
        # Already exists, skip
        pass
    except Exception as e:
        print(f"Error inserting tag for {node_id}: {e}")

conn.commit()
print(f"Successfully migrated {inserted} new tags into content_concept_tags.")

# 3. Handle Video Concept Map (for deep segments if any, though we only have root URLs)
# For now, we ensure 'video' types are represented correctly.
print("--- [MIGRATION COMPLETE] ---")

conn.close()
