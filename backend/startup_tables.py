"""
startup_tables.py — Safe Table Bootstrap Script (SQLite Standardized)
====================================================================
Emoji-free for Windows compatibility.
"""
import os, sys, logging, re
from sqlalchemy import create_engine, text

logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")
log = logging.getLogger(__name__)

# Add backend to path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from app.core.config import settings

engine = create_engine(str(settings.DATABASE_URL))

TABLES = [
    """
    CREATE TABLE IF NOT EXISTS guided_clips (
        id              SERIAL PRIMARY KEY,
        module_id       INTEGER NOT NULL,
        title           VARCHAR NOT NULL,
        description     TEXT,
        youtube_id      VARCHAR,
        order_index     INTEGER DEFAULT 0,
        notes_markdown  TEXT,
        pause_points    TEXT DEFAULT '[]',
        node_ids        TEXT DEFAULT '[]',
        is_published    BOOLEAN DEFAULT false
    );
    """,
    """
    CREATE TABLE IF NOT EXISTS concept_nodes (
        id                  SERIAL PRIMARY KEY,
        node_id             VARCHAR UNIQUE NOT NULL,
        subject_slug        VARCHAR NOT NULL,
        module_id           INTEGER,
        clip_id             INTEGER,
        node_name           VARCHAR NOT NULL,
        node_description    TEXT,
        prerequisite_nodes  TEXT DEFAULT '[]',
        exam_relevance      TEXT DEFAULT '{}',
        difficulty_level    VARCHAR DEFAULT 'foundation'
    );
    """,
    """
    CREATE TABLE IF NOT EXISTS concept_relationships (
        id                  SERIAL PRIMARY KEY,
        from_node_id        INTEGER NOT NULL,
        to_node_id          INTEGER NOT NULL,
        relationship_type   VARCHAR NOT NULL DEFAULT 'influences',
        strength            INTEGER DEFAULT 2
    );
    """,
    """
    CREATE TABLE IF NOT EXISTS student_concept_mastery (
        id                  SERIAL PRIMARY KEY,
        student_id          INTEGER NOT NULL,
        node_id             INTEGER NOT NULL,
        mastery_score       REAL DEFAULT 0.0,
        attempt_count       INTEGER DEFAULT 0,
        last_activity_date  TIMESTAMP,
        next_review_date    DATE,
        ease_factor         REAL DEFAULT 2.5,
        interval            INTEGER DEFAULT 0,
        created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """,
    """
    CREATE TABLE IF NOT EXISTS student_activity_log (
        id                SERIAL PRIMARY KEY,
        student_id        INTEGER NOT NULL,
        node_id           INTEGER,
        content_id        VARCHAR,
        activity_type     VARCHAR NOT NULL,
        score             REAL,
        duration          INTEGER,
        error_nodes       TEXT DEFAULT '[]',
        metadata          TEXT DEFAULT '{}',
        timestamp         TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """,
    """
    CREATE TABLE IF NOT EXISTS student_engine_decisions (
        decision_id      SERIAL PRIMARY KEY,
        student_id       INTEGER NOT NULL,
        activity_id      INTEGER,
        next_action      VARCHAR NOT NULL,
        target_concept   VARCHAR,
        timestamp        TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """,
    """
    CREATE TABLE IF NOT EXISTS content_concept_tags (
        id              SERIAL PRIMARY KEY,
        content_type    VARCHAR NOT NULL,
        content_id      VARCHAR NOT NULL,
        node_id         VARCHAR NOT NULL,
        weight          REAL DEFAULT 1.0,
        is_primary      BOOLEAN DEFAULT true,
        tagged_by       VARCHAR DEFAULT 'manual',
        created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """,
    """
    CREATE TABLE IF NOT EXISTS mcq_attempt_concepts (
        id              SERIAL PRIMARY KEY,
        student_id      INTEGER NOT NULL,
        mcq_id          VARCHAR NOT NULL,
        node_id         VARCHAR NOT NULL,
        is_correct      BOOLEAN NOT NULL,
        weight          REAL DEFAULT 1.0,
        timestamp       TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """,
    """
    CREATE TABLE IF NOT EXISTS concept_signals (
        id              SERIAL PRIMARY KEY,
        node_id         VARCHAR NOT NULL,
        signal_type     VARCHAR NOT NULL,
        content_url     TEXT NOT NULL,
        metadata        TEXT DEFAULT '{}',
        FOREIGN KEY (node_id) REFERENCES concept_nodes (node_id),
        UNIQUE (node_id, signal_type)
    );
    """,
]

def run():
    log.info("🚀 Starting Stage-11 DB Bootstrap (Standardized SQLite)...")
    with engine.begin() as conn:
        for i, sql_block in enumerate(TABLES, 1):
            for statement in [s.strip() for s in sql_block.split(';') if s.strip()]:
                try:
                    conn.execute(text(statement + ';'))
                    log.info(f"  ✓ Statement {i} ready")
                except Exception as e:
                    log.error(f"  ✗ Error in block {i}: {e}")

    log.info("✅ Database structural bootstrap complete.")

if __name__ == '__main__':
    run()
