import os
from sqlalchemy import create_engine, text

DATABASE_URL = os.environ.get("DATABASE_URL")
engine = create_engine(DATABASE_URL)

fix_sql = """
-- Fix level_1 and level 1 -> easy
UPDATE bank_questions SET difficulty = 'easy' WHERE difficulty IN ('level_1', 'level 1');

-- Fix level_2 and level 2 -> medium
UPDATE bank_questions SET difficulty = 'medium' WHERE difficulty IN ('level_2', 'level 2');

-- Fix level_3 and level 3 -> hard
UPDATE bank_questions SET difficulty = 'hard' WHERE difficulty IN ('level_3', 'level 3');

-- Fix tough -> hard
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
    print("=== FIX 2: NORMALIZE DIFFICULTY TAGS ===")
    conn.execute(text(fix_sql))
    conn.commit()
    
    print("\n=== VERIFICATION AFTER FIX ===")
    result = conn.execute(text(verify_sql))
    for row in result:
        print(f"{row[0]}: {row[1]}")
        
    print("\n=== FIX 3: SCHEMA AUDIT ===")
    result = conn.execute(text(schema_sql))
    for row in result:
        print(f"{row[0]} | {row[1]}")
