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
        id              INTEGER PRIMARY KEY AUTOINCREMENT,
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
        id                  INTEGER PRIMARY KEY AUTOINCREMENT,
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
        id                  INTEGER PRIMARY KEY AUTOINCREMENT,
        from_node_id        INTEGER NOT NULL,
        to_node_id          INTEGER NOT NULL,
        relationship_type   VARCHAR NOT NULL DEFAULT 'influences',
        strength            INTEGER DEFAULT 2
    );
    """,
    """
    CREATE TABLE IF NOT EXISTS student_concept_mastery (
        id                  INTEGER PRIMARY KEY AUTOINCREMENT,
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
        id                INTEGER PRIMARY KEY AUTOINCREMENT,
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
        decision_id      INTEGER PRIMARY KEY AUTOINCREMENT,
        student_id       INTEGER NOT NULL,
        activity_id      INTEGER,
        next_action      VARCHAR NOT NULL,
        target_concept   VARCHAR,
        timestamp        TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """,
    """
    CREATE TABLE IF NOT EXISTS content_concept_tags (
        id              INTEGER PRIMARY KEY AUTOINCREMENT,
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
        id              INTEGER PRIMARY KEY AUTOINCREMENT,
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
        id              INTEGER PRIMARY KEY AUTOINCREMENT,
        node_id         VARCHAR NOT NULL,
        signal_type     VARCHAR NOT NULL,
        content_url     TEXT NOT NULL,
        metadata        TEXT DEFAULT '{}',
        FOREIGN KEY (node_id) REFERENCES concept_nodes (node_id),
        UNIQUE (node_id, signal_type)
    );
    """,
    """
    CREATE TABLE IF NOT EXISTS focused_portal_enrollments (
        id              INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id         INTEGER,
        full_name       VARCHAR(150),
        email           VARCHAR(150),
        whatsapp        VARCHAR(20),
        amount_paid     REAL,
        payment_id      VARCHAR(100),
        enrolled_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """,
    """
    CREATE TABLE IF NOT EXISTS focused_subject_gates (
        id                      INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id                 INTEGER,
        subject                 VARCHAR(100),
        gate_score              REAL DEFAULT 0,
        total_questions         INTEGER DEFAULT 10,
        passed                  BOOLEAN DEFAULT false,
        is_unlocked             BOOLEAN DEFAULT false,
        flagged_for_revision    BOOLEAN DEFAULT false,
        completed_at            TIMESTAMP,
        updated_at              TIMESTAMP,
        created_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """,
    """
    CREATE TABLE IF NOT EXISTS focused_study_sessions (
        id                  INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id             INTEGER,
        date                VARCHAR(20),
        subject             VARCHAR(100),
        cluster_number      INTEGER,
        cluster_name        VARCHAR(200),
        pomodoro_number     INTEGER,
        confidence_pulse    VARCHAR(10),
        duration_minutes    INTEGER
    );
    """,
    """
    CREATE TABLE IF NOT EXISTS focused_test_reports (
        id                          INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id                     INTEGER,
        date                        VARCHAR(20),
        subject                     VARCHAR(100),
        cluster_number              INTEGER,
        score                       REAL,
        total_questions             INTEGER,
        percentage                  REAL,
        weak_topics                 TEXT,
        trap_questions_missed       TEXT,
        correct_answers             TEXT,
        wrong_answers               TEXT,
        time_taken_seconds          INTEGER,
        confidence_before_test      TEXT,
        improvement_vs_yesterday    REAL,
        bkt_updates                 TEXT,
        submitted_at                TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """,
    """
    CREATE TABLE IF NOT EXISTS focused_questions (
        id                  INTEGER PRIMARY KEY AUTOINCREMENT,
        subject             VARCHAR(100),
        cluster_number      INTEGER,
        cluster_name        VARCHAR(200),
        question_number     INTEGER,
        question_text       TEXT,
        option_a            TEXT,
        option_b            TEXT,
        option_c            TEXT,
        option_d            TEXT,
        correct_answer      VARCHAR(10),
        explanation         TEXT,
        topic_tag           VARCHAR(200),
        created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """,
    """
    CREATE TABLE IF NOT EXISTS focused_cluster_progress (
        id                  INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id             INTEGER,
        subject             VARCHAR(100),
        cluster_number      INTEGER,
        status              VARCHAR(50),
        last_accessed_at    TIMESTAMP
    );
    """,
    """
    CREATE TABLE IF NOT EXISTS focused_active_sessions (
        id                  INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id             INTEGER,
        session_id          VARCHAR(100) UNIQUE,
        test_id             INTEGER,
        subject             VARCHAR(100),
        cluster_number      INTEGER,
        status              VARCHAR(50) DEFAULT 'ACTIVE',
        start_time          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        submission_time     TIMESTAMP,
        expires_at          TIMESTAMP,
        session_metadata    TEXT, -- JSON stored as text in SQLite
        created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """,
    """
    CREATE TABLE IF NOT EXISTS graphotherapy_level_purchases (
        id                  INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id             INTEGER NOT NULL,
        tenant_id           INTEGER DEFAULT 1,
        level               INTEGER NOT NULL,
        amount_paid         REAL NOT NULL,
        currency            VARCHAR(10) DEFAULT 'INR',
        payment_gateway     VARCHAR(50) DEFAULT 'cashfree',
        payment_id          VARCHAR(255) UNIQUE NOT NULL,
        order_id            VARCHAR(255),
        payment_status      VARCHAR(50) DEFAULT 'paid',
        payment_method      VARCHAR(100),
        notes               TEXT,
        created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """,
    """
    CREATE TABLE IF NOT EXISTS student_reports (
        id                  INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id             INTEGER NOT NULL,
        report_type         VARCHAR(50) NOT NULL,
        report_key          VARCHAR(255) NOT NULL,
        data                TEXT,
        traits              TEXT,
        dimensions          TEXT,
        report_content      TEXT,
        purchase_type       VARCHAR(50),
        features_json       TEXT,
        traits_json         TEXT,
        conflicts_json      TEXT,
        personality_json    TEXT,
        report_text         TEXT,
        pdf_url             TEXT,
        created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at          TIMESTAMP
    );
    """,
]

def run():
    log.info("🚀 Starting Stage-11 DB Bootstrap (Standardized SQLite)...")
    print("DEBUG: Creating engine...")
    db_url = str(settings.DATABASE_URL)
    print(f"DEBUG: DB URL is {db_url}")
    
    # Check if file exists if it's sqlite
    if "sqlite" in db_url:
        path = db_url.replace("sqlite:///", "")
        if os.path.isabs(path):
            abs_path = path
        else:
            abs_path = os.path.join(os.getcwd(), "backend", path)
        print(f"DEBUG: SQLite absolute path: {abs_path}")
        print(f"DEBUG: File exists? {os.path.exists(abs_path)}")

    try:
        print("DEBUG: Connecting to engine...")
        with engine.connect() as conn:
            print("DEBUG: Connected successfully.")
            for i, sql_block in enumerate(TABLES, 1):
                print(f"DEBUG: Executing block {i}...")
                for statement in [s.strip() for s in sql_block.split(';') if s.strip()]:
                    # Dialect translation for Postgres compatibility
                    processed_statement = statement
                    if "postgresql" in db_url:
                        processed_statement = processed_statement.replace("INTEGER PRIMARY KEY AUTOINCREMENT", "SERIAL PRIMARY KEY")
                        processed_statement = processed_statement.replace("DATETIME", "TIMESTAMP")
                    
                    try:
                        conn.execute(text(processed_statement + ';'))
                        conn.commit()
                        log.info(f"  ✓ Statement ready")
                    except Exception as e:
                        if "already exists" in str(e).lower():
                            continue
                        log.error(f"  ✗ Error in block {i}: {e}")
    except Exception as e:
        print(f"DEBUG: Connection error: {e}")

    log.info("✅ Database structural bootstrap complete.")


if __name__ == '__main__':
    run()
