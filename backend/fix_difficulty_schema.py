import os
from sqlalchemy import create_engine, text

DATABASE_URL = os.environ.get("DATABASE_URL")
engine = create_engine(DATABASE_URL)

fix_sql = """
-- Fix 1: ADD topic_tag and chapter_number columns
ALTER TABLE bank_questions ADD COLUMN IF NOT EXISTS topic_tag VARCHAR(255);
ALTER TABLE bank_questions ADD COLUMN IF NOT EXISTS chapter_number INTEGER;
CREATE INDEX IF NOT EXISTS idx_bank_questions_topic ON bank_questions(topic_tag);
CREATE INDEX IF NOT EXISTS idx_bank_questions_subject ON bank_questions(subject);

-- Fix 2: NORMALIZE DIFFICULTY TAGS
UPDATE bank_questions SET difficulty = 'easy' WHERE difficulty IN ('level_1', 'level 1');
UPDATE bank_questions SET difficulty = 'medium' WHERE difficulty IN ('level_2', 'level 2');
UPDATE bank_questions SET difficulty = 'hard' WHERE difficulty IN ('level_3', 'level 3');
UPDATE bank_questions SET difficulty = 'hard' WHERE difficulty = 'tough';
"""

verify_sql = "SELECT difficulty, COUNT(*) FROM bank_questions GROUP BY difficulty ORDER BY COUNT(*) DESC;"

schema_sql = """
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'bank_questions'
ORDER BY ordinal_position;
"""

with engine.connect() as conn:
    print("=== EXECUTING TARGETED FIXES ===")
    conn.execute(text(fix_sql))
    conn.commit()
    
    print("\n=== VERIFICATION: DIFFICULTY COUNTS ===")
    result = conn.execute(text(verify_sql))
    for row in result:
        print(f"{row[0]}: {row[1]}")
        
    print("\n=== VERIFICATION: SCHEMA AUDIT ===")
    result = conn.execute(text(schema_sql))
    for row in result:
        print(f"{row[0]} | {row[1]}")
