"""
migrate_concept_tagging.py — Concept Tagging Tables Bootstrap
==============================================================
Safe to run multiple times (CREATE TABLE IF NOT EXISTS).
Emoji-free for Windows compatibility.
"""
import os, sys, logging, re
from sqlalchemy import create_engine, text

logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")
log = logging.getLogger(__name__)

# Add backend to path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
try:
    from app.core.config import settings
except ImportError:
    # Fallback for direct execution
    class Settings:
        DATABASE_URL = "sqlite:///backend/eduecosystem_v2.db"
    settings = Settings()

engine = create_engine(str(settings.DATABASE_URL))
is_sqlite = "sqlite" in str(settings.DATABASE_URL)

TABLES = [
    """
    CREATE TABLE IF NOT EXISTS content_concept_tags (
        id              SERIAL PRIMARY KEY,
        content_type    VARCHAR NOT NULL,
        content_id      VARCHAR NOT NULL,
        node_id         VARCHAR NOT NULL,
        weight          FLOAT DEFAULT 1.0,
        is_primary      BOOLEAN DEFAULT true,
        tagged_by       VARCHAR DEFAULT 'manual',
        created_at      TIMESTAMP DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS ix_cct_node_id       ON content_concept_tags(node_id);
    CREATE INDEX IF NOT EXISTS ix_cct_content_type  ON content_concept_tags(content_type);
    CREATE INDEX IF NOT EXISTS ix_cct_content_id    ON content_concept_tags(content_id);
    CREATE UNIQUE INDEX IF NOT EXISTS ix_cct_unique
        ON content_concept_tags(content_type, content_id, node_id);
    """,
    """
    CREATE TABLE IF NOT EXISTS mcq_attempt_concepts (
        id              SERIAL PRIMARY KEY,
        student_id      INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        mcq_id          VARCHAR NOT NULL,
        node_id         VARCHAR NOT NULL,
        is_correct      BOOLEAN NOT NULL,
        weight          FLOAT DEFAULT 1.0,
        timestamp       TIMESTAMP DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS ix_mac_student   ON mcq_attempt_concepts(student_id);
    CREATE INDEX IF NOT EXISTS ix_mac_node_id   ON mcq_attempt_concepts(node_id);
    CREATE INDEX IF NOT EXISTS ix_mac_mcq_id    ON mcq_attempt_concepts(mcq_id);
    CREATE INDEX IF NOT EXISTS ix_mac_timestamp ON mcq_attempt_concepts(timestamp);
    """,
    """
    CREATE TABLE IF NOT EXISTS video_concept_map (
        id               SERIAL PRIMARY KEY,
        clip_id          VARCHAR NOT NULL,
        node_id          VARCHAR NOT NULL,
        timestamp_start  INTEGER NOT NULL,
        timestamp_end    INTEGER NOT NULL,
        label            VARCHAR,
        created_at       TIMESTAMP DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS ix_vcm_clip_id  ON video_concept_map(clip_id);
    CREATE INDEX IF NOT EXISTS ix_vcm_node_id  ON video_concept_map(node_id);
    CREATE UNIQUE INDEX IF NOT EXISTS ix_vcm_unique
        ON video_concept_map(clip_id, node_id, timestamp_start);
    """,
]

def run():
    log.info("Deploying Concept Tagging tables (SQLite Mode: %s)", is_sqlite)
    with engine.begin() as conn:
        for i, sql_block in enumerate(TABLES, 1):
            if is_sqlite:
                sql_block = re.sub(r"SERIAL\s+PRIMARY\s+KEY", "INTEGER PRIMARY KEY AUTOINCREMENT", sql_block, flags=re.IGNORECASE)
                sql_block = sql_block.replace("JSONB", "TEXT")
                sql_block = sql_block.replace("TIMESTAMP", "DATETIME") # Replace TIMESTAMP first
                sql_block = sql_block.replace("NOW()", "CURRENT_TIMESTAMP") # Then NOW()
                sql_block = sql_block.replace("FLOAT", "REAL")
            
            for statement in [s.strip() for s in sql_block.split(';') if s.strip()]:
                try:
                    conn.execute(text(statement + ';'))
                except Exception as e:
                    if 'already exists' not in str(e).lower():
                        log.error("  Error in block %s: %s", i, e)
                        if not is_sqlite: raise

    log.info("Success: Concept Tagging tables ready.")

if __name__ == '__main__':
    run()
