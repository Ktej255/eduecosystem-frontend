import os
from sqlalchemy import create_engine, text

def run_dedup():
    db_url = os.getenv("DATABASE_URL")
    if not db_url:
        print("DATABASE_URL not set")
        return
        
    engine = create_engine(db_url)
    with engine.connect() as conn:
        trans = conn.begin()
        try:
            # 1. Capture BEFORE counts
            print("--- BEFORE DEDUP ---")
            q_before = text("""
                SELECT subject, COUNT(*) as total, COUNT(DISTINCT text) as unique_questions
                FROM bank_questions
                WHERE subject IN ('Modern History', 'Medieval History', 'Ancient History', 'Polity')
                GROUP BY subject
                ORDER BY subject;
            """)
            res_before = conn.execute(q_before).fetchall()
            for row in res_before:
                print(list(row))
                
            print("\n--- RESOLVING FOREIGN KEY CONSTRAINTS (ROBUST) ---")
            
            # Step 1: Delete associations that would clash (more than one ID from a group in one bank)
            q_fix_associations_prune = text("""
                DELETE FROM question_bank_questions
                WHERE (question_bank_id, question_id) IN (
                    SELECT qbq.question_bank_id, qbq.question_id
                    FROM question_bank_questions qbq
                    JOIN bank_questions b ON qbq.question_id = b.id
                    JOIN (
                        SELECT MIN(id) as min_id, text, subject, difficulty
                        FROM bank_questions
                        GROUP BY text, subject, difficulty
                    ) sub ON b.text = sub.text AND b.subject = sub.subject AND b.difficulty = sub.difficulty
                    JOIN (
                        SELECT qbq2.question_bank_id, b2.text, b2.subject, b2.difficulty, MIN(qbq2.question_id) as survivor_id
                        FROM question_bank_questions qbq2
                        JOIN bank_questions b2 ON qbq2.question_id = b2.id
                        GROUP BY qbq2.question_bank_id, b2.text, b2.subject, b2.difficulty
                        HAVING COUNT(*) > 1
                    ) dups ON qbq.question_bank_id = dups.question_bank_id 
                        AND b.text = dups.text 
                        AND b.subject = dups.subject 
                        AND b.difficulty = dups.difficulty
                    WHERE qbq.question_id != dups.survivor_id
                );
            """)
            res_prune = conn.execute(q_fix_associations_prune)
            print(f"Redundant associations pruned: {res_prune.rowcount}")

            # Step 2: Re-target remaining associations
            q_fix_associations_upd = text("""
                UPDATE question_bank_questions qbq
                SET question_id = sub.min_id
                FROM (
                    SELECT MIN(id) as min_id, text, subject, difficulty
                    FROM bank_questions
                    GROUP BY text, subject, difficulty
                ) sub
                JOIN bank_questions b ON b.text = sub.text 
                    AND b.subject = sub.subject 
                    AND b.difficulty = sub.difficulty
                WHERE qbq.question_id = b.id
                AND qbq.question_id != sub.min_id;
            """)
            res_upd = conn.execute(q_fix_associations_upd)
            print(f"Associations re-targeted: {res_upd.rowcount}")

            # 2. Execute DEDUP
            print("\n--- EXECUTING DEDUP ---")
            q_dedup = text("""
                DELETE FROM bank_questions
                WHERE id NOT IN (
                    SELECT MIN(id)
                    FROM bank_questions
                    GROUP BY text, subject, difficulty
                );
            """)
            res_del = conn.execute(q_dedup)
            print(f"Deleted rows from bank_questions: {res_del.rowcount}")
            
            # 3. Capture AFTER counts
            print("\n--- AFTER DEDUP ---")
            q_after = text("""
                SELECT subject, COUNT(*) as total, COUNT(DISTINCT text) as unique_questions
                FROM bank_questions
                WHERE subject IN ('Modern History', 'Medieval History', 'Ancient History', 'Polity')
                GROUP BY subject
                ORDER BY subject;
            """)
            res_after = conn.execute(q_after).fetchall()
            for row in res_after:
                print(list(row))
            
            trans.commit()
        except Exception as e:
            trans.rollback()
            print(f"ERROR: {e}")
        finally:
            engine.dispose()

if __name__ == "__main__":
    run_dedup()
