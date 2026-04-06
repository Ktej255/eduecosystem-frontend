import sqlite3
from pathlib import Path

DB_PATH = Path('backend/eduecosystem_v2.db')

def fix_schema():
    if not DB_PATH.exists():
        return
        
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # Tables found with rogue defaults
    # student_engine_decisions, content_concept_tags, mcq_attempt_concepts, video_concept_map
    
    print("🛠️  Repairing Rogue Schema Defaults...")
    
    tables_to_rebuild = [
        ('content_concept_tags', """
            CREATE TABLE content_concept_tags_new (
                id              INTEGER PRIMARY KEY AUTOINCREMENT,
                content_type    VARCHAR NOT NULL,
                content_id      VARCHAR NOT NULL,
                node_id         VARCHAR NOT NULL,
                weight          REAL DEFAULT 1.0,
                is_primary      BOOLEAN DEFAULT true,
                tagged_by       VARCHAR DEFAULT 'manual',
                created_at      DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        """),
        ('video_concept_map', """
            CREATE TABLE video_concept_map_new (
                id               INTEGER PRIMARY KEY AUTOINCREMENT,
                clip_id          VARCHAR NOT NULL,
                node_id          VARCHAR NOT NULL,
                timestamp_start  INTEGER NOT NULL,
                timestamp_end    INTEGER NOT NULL,
                label            VARCHAR,
                created_at       DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        """),
        ('mcq_attempt_concepts', """
            CREATE TABLE mcq_attempt_concepts_new (
                id              INTEGER PRIMARY KEY AUTOINCREMENT,
                student_id      INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
                mcq_id          VARCHAR NOT NULL,
                node_id         VARCHAR NOT NULL,
                is_correct      BOOLEAN NOT NULL,
                weight          REAL DEFAULT 1.0,
                timestamp       DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        """),
        ('student_concept_mastery', """
            CREATE TABLE student_concept_mastery_new (
                id                  INTEGER PRIMARY KEY AUTOINCREMENT,
                student_id          INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
                node_id             INTEGER NOT NULL REFERENCES concept_nodes(id) ON DELETE CASCADE,
                mastery_score       REAL DEFAULT 0.0,
                attempt_count       INTEGER DEFAULT 0,
                last_activity_date  DATETIME,
                next_review_date    DATE,
                ease_factor         REAL DEFAULT 2.5,
                interval            INTEGER DEFAULT 0,
                stability_score     REAL DEFAULT 0.8,
                created_at          DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at          DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        """)
    ]
    
    for old_name, new_ddl in tables_to_rebuild:
        print(f"   🏗️  Rebuilding {old_name}...")
        try:
            cursor.execute(new_ddl)
            
            # Map columns for student_concept_mastery specifically if needed
            if old_name == 'student_concept_mastery':
                cursor.execute(f"INSERT INTO {old_name}_new (id, student_id, node_id, mastery_score, attempt_count, last_activity_date, next_review_date, ease_factor, interval, stability_score) SELECT id, student_id, node_id, mastery_score, attempt_count, last_activity_date, next_review_date, ease_factor, interval, stability_score FROM {old_name} WHERE id IS NOT NULL")
            else:
                # Use SELECT * then fix created_at if needed, or but since we create NEW table with CURRENT_TIMESTAMP, the NULLs will become timestamps on insert if we omit them
                # But SELECT * including corrupted strings will copy them. 
                # Better: SELECT all BUT created_at
                columns = [c[1] for c in cursor.execute(f"PRAGMA table_info({old_name})").fetchall() if c[1] not in ['created_at', 'updated_at', 'timestamp']]
                cols_str = ", ".join(columns)
                cursor.execute(f"INSERT INTO {old_name}_new ({cols_str}) SELECT {cols_str} FROM {old_name}")
            
            cursor.execute(f"DROP TABLE {old_name}")
            cursor.execute(f"ALTER TABLE {old_name}_new RENAME TO {old_name}")
            print(f"      ✅ {old_name} hardened.")
        except Exception as e:
            print(f"      ⚠️ Failed to rebuild {old_name}: {e}")
            
    conn.commit()
    conn.close()
    print("🚀 All Rogue Schemas Standardized for Stage-11.")

if __name__ == "__main__":
    fix_schema()
