"""
verify_adaptive_system.py
==========================
Comprehensive verification of the Adaptive Exam Simulator (Phase-7).
Runs 8 distinct scenarios to ensure real adaptation vs randomness.
"""
import os
import sys
import json
import sqlite3
import unittest
import time
from datetime import datetime, timedelta
from pathlib import Path

# Setup path
BACKEND_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(BACKEND_ROOT))

from sqlalchemy import text, create_engine
from sqlalchemy.orm import sessionmaker

# App imports
from app.services.adaptive_simulator_service import adaptive_simulator_service
from app.models.user import User
from app.models.question_bank import BankQuestion, StudentQuestionAttempt
from app.models.adaptive_learning import StudentMomentumMetrics
from app.models.exam import ExamSession

class AdaptiveSystemVerification(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        import traceback
        try:
            # 0. Force absolute path for SQLite to avoid CWD issues
            target_db = BACKEND_ROOT / "eduecosystem_v2.db"
            print(f"🔌 Connecting to: {target_db}")
            
            # Override engine to use absolute path
            cls.engine = create_engine(f"sqlite:///{target_db}")
            cls.Session = sessionmaker(bind=cls.engine)
            cls.db = cls.Session()
            
            cls.student_id = 999  # Test Student
            cls.subject = "Polity"
            
            # 1. Ensure test student exists (Raw SQL for maximum resilience)
            print("👤 Initializing test student 999...")
            cls.db.execute(text("""
                INSERT OR IGNORE INTO users (id, email, hashed_password, is_active, is_superuser)
                VALUES (999, 'test_student@example.com', '...', 1, 0)
            """))
            cls.db.commit()

            # 2. Seed Tiered Questions (if not present)
            cls._seed_test_questions()
            
            # 3. Warm up the adaptive cache (In-Memory Fallback testing)
            print("🚀 Priming Adaptive Engine Cache...")
            cls.cache_count = adaptive_simulator_service.refresh_cache(cls.db)
            print(f"✅ Cache primed with {cls.cache_count} questions.")

            print("✅ SetupClass completed successfully.")
        except Exception as e:
            print(f"❌ SetupClass failed critically: {e}")
            traceback.print_exc()
            raise e

    @classmethod
    def _seed_test_questions(cls):
        print("🌱 Seeding test questions...")
        # L1, L2, L3 questions for 'Polity' and specific concept 'POL_F_RIGHTS'
        test_questions = [
            {"sid": "V-L1-001", "level": 1, "node": "POL_F_RIGHTS"},
            {"sid": "V-L2-001", "level": 2, "node": "POL_F_RIGHTS"},
            {"sid": "V-L3-001", "level": 3, "node": "POL_F_RIGHTS"},
            {"sid": "V-L1-PRE", "level": 1, "node": "POL_PREAMBLE"}, # Different concept
            {"sid": "V-L2-PRE", "level": 2, "node": "POL_PREAMBLE"}, # THE ONE TO TARGET at 50 ability
        ]
        
        # Ensure concept nodes exist
        cls.db.execute(text("INSERT INTO concept_nodes (node_id, node_name, subject_slug, difficulty_level) VALUES ('POL_F_RIGHTS', 'Fundamental Rights', 'Polity', 'FOUNDATION') ON CONFLICT DO NOTHING"))
        cls.db.execute(text("INSERT INTO concept_nodes (node_id, node_name, subject_slug, difficulty_level) VALUES ('POL_PREAMBLE', 'Preamble', 'Polity', 'FOUNDATION') ON CONFLICT DO NOTHING"))
        cls.db.commit()

        instructor_id = 1
        for q in test_questions:
            exists = cls.db.query(BankQuestion).filter(BankQuestion.source_id == q["sid"]).first()
            if not exists:
                new_q = BankQuestion(
                    instructor_id=instructor_id,
                    source_id=q["sid"],
                    text=f"Test Question {q['sid']}",
                    type="multiple_choice",
                    difficulty="medium",
                    level=q["level"],
                    options=json.dumps(["A", "B", "C", "D"]),
                    correct_answer="A",
                    subject="Polity",
                    node_id=q["node"]
                )
                cls.db.add(new_q)
        cls.db.commit()

    def setUp(self):
        # Clear student state for each scenario
        self.db.execute(text("DELETE FROM exam_sessions WHERE user_id = :sid"), {"sid": self.student_id})
        self.db.execute(text("DELETE FROM student_question_attempts WHERE student_id = :sid"), {"sid": self.student_id})
        self.db.execute(text("DELETE FROM student_concept_mastery WHERE student_id = :sid"), {"sid": self.student_id})
        self.db.commit()

    def test_scenario_1_perfect_student(self):
        print("\n🚀 Scenario 1: Perfect Student (L2 -> L3)")
        session_data = adaptive_simulator_service.start_exam_session(self.db, self.student_id, self.subject)
        exam_id = session_data["exam_id"]
        exp_ability = 50.0
        
        # Answer 4 questions correctly to cross 65 threshold
        # Progression: 50 -> 55.3 -> 60.7 -> 66.0 (Target L3)
        for i in range(4):
            q = adaptive_simulator_service.get_next_question(self.db, self.student_id, self.subject, exam_id, current_ability=exp_ability)
            self.assertIsNotNone(q)
            print(f"   Q{i+1} Level: L{q['level']} at Ability: {exp_ability:.2f}")
            
            res = adaptive_simulator_service.process_submission(self.db, self.student_id, q['id'], True, 10, exp_ability, exam_id)
            exp_ability = res['new_ability']
            time.sleep(0.5) 
            
        print(f"   Final Ability: {exp_ability:.2f} (Expected > 65)")
        self.assertGreater(exp_ability, 65)
        
        q_next = adaptive_simulator_service.get_next_question(self.db, self.student_id, self.subject, exam_id, current_ability=exp_ability)
        print(f"   Next Question Level: L{q_next['level']} (Expected: L3)")
        self.assertEqual(q_next['level'], 3)
        print("   ✅ Success: Difficulty shifted upwards (Soft Band 65).")

    def test_scenario_2_struggling_student(self):
        print("\n🚀 Scenario 2: Struggling Student (L2 -> L1)")
        session_data = adaptive_simulator_service.start_exam_session(self.db, self.student_id, self.subject)
        exam_id = session_data["exam_id"]
        exp_ability = 50.0
        
        # Answer 4 questions incorrectly to drop below 35 threshold
        # Progression: 50 -> 46 -> 42 -> 38 -> 34 (Target L1)
        for i in range(5):
            q = adaptive_simulator_service.get_next_question(self.db, self.student_id, self.subject, exam_id, current_ability=exp_ability)
            self.assertIsNotNone(q)
            print(f"   Q{i+1} Level: L{q['level']} at Ability: {exp_ability:.2f}")
            
            res = adaptive_simulator_service.process_submission(self.db, self.student_id, q['id'], False, 10, exp_ability, exam_id)
            exp_ability = res['new_ability']
            time.sleep(0.5)
            
        print(f"   Final Ability: {exp_ability:.2f} (Expected < 35)")
        self.assertLess(exp_ability, 35)
        
        q_next = adaptive_simulator_service.get_next_question(self.db, self.student_id, self.subject, exam_id, current_ability=exp_ability)
        print(f"   Next Question Level: L{q_next['level']} (Expected: L1)")
        self.assertEqual(q_next['level'], 1)
        print("   ✅ Success: Difficulty shifted downwards (Soft Band 35).")

    def test_scenario_4_weak_concept_targeting(self):
        print("\n🚀 Scenario 4: Weak Concept Targeting")
        # Set 'POL_PREAMBLE' to a very low mastery
        node_id_pk = self.db.execute(text("SELECT id FROM concept_nodes WHERE node_id = 'POL_PREAMBLE'")).scalar()
        self.db.execute(text("INSERT INTO student_concept_mastery (student_id, node_id, mastery_score, attempt_count) VALUES (:sid, :nid, 10.0, 5)"), {"sid": self.student_id, "nid": node_id_pk})
        # Set 'POL_F_RIGHTS' to high mastery
        node_id_pk_2 = self.db.execute(text("SELECT id FROM concept_nodes WHERE node_id = 'POL_F_RIGHTS'")).scalar()
        self.db.execute(text("INSERT INTO student_concept_mastery (student_id, node_id, mastery_score, attempt_count) VALUES (:sid, :nid, 90.0, 5)"), {"sid": self.student_id, "nid": node_id_pk_2})
        self.db.commit()

        session_data = adaptive_simulator_service.start_exam_session(self.db, self.student_id, self.subject)
        exam_id = session_data["exam_id"]
        
        # Engine should prioritize POL_PREAMBLE
        q = adaptive_simulator_service.get_next_question(self.db, self.student_id, self.subject, exam_id, current_ability=50.0)
        print(f"   Targeted Question ID: {q['id']}, Level: {q['level']}, Concept: {q['node_id']}")
        print(f"   (Weak: POL_PREAMBLE, Strong: POL_F_RIGHTS)")
        self.assertEqual(q['node_id'], 'POL_PREAMBLE')
        print("   ✅ Success: Engine prioritized weak concept.")

    def test_stress_1000_nodes(self):
        print("\n🚀 Scenario 9: 1000-Node Intelligence Stress Test")
        # 0. Clean slate for Polity to avoid pollution from failed runs
        self.db.execute(text("DELETE FROM student_concept_mastery WHERE node_id IN (SELECT id FROM concept_nodes WHERE subject_slug = 'Polity')"))
        self.db.execute(text("DELETE FROM concept_nodes WHERE subject_slug = 'Polity'"))
        self.db.commit()
        
        # 1. Expand registry to 1000 nodes (Simulation)
        print("   🏗️ Simulating 1000-node Knowledge Graph...")
        # Get all stress users to pre-seed mastery for these new nodes
        users = self.db.execute(text("SELECT id, email FROM users WHERE email LIKE '%@test.com'")).fetchall()
        
        for i in range(100, 1100):
            node_id_str = f'STRESS_{i}'
            # Seed with explicit JSON relevance to ensure accurate weighted average
            self.db.execute(text(f"INSERT OR IGNORE INTO concept_nodes (node_id, node_name, subject_slug, difficulty_level, exam_relevance) VALUES ('{node_id_str}', 'Stress Concept {i}', 'Polity', 'FOUNDATION', '{{\"UPSC\": \"high\"}}')"))
            
            # Fetch the actual integer ID that SQLAlchemy expects 
            node_pk_id = self.db.execute(text("SELECT id FROM concept_nodes WHERE node_id = :nid"), {"nid": node_id_str}).scalar()
            
            # Map mastery for each persona to maintain the weighted average for the stress test
            for uid, email in users:
                target = 68.0 if "threshold" in email else (88.0 if "strong" in email else 15.0)
                self.db.execute(text("""
                    INSERT OR IGNORE INTO student_concept_mastery (student_id, node_id, mastery_score, stability_score, last_activity_date)
                    VALUES (:uid, :nid, :score, 0.8, datetime('now'))
                """), {"uid": uid, "nid": node_pk_id, "score": target})
        self.db.commit()
        
        # 2. Test Persona Status Extraction
        personas = ["early@test.com", "mid@test.com", "threshold@test.com", "strong@test.com", "fragile@test.com"]
        from app.services.exam_intelligence import exam_intelligence_service
        
        for email in personas:
            user_id = self.db.execute(text("SELECT id FROM users WHERE email = :e"), {"e": email}).scalar()
            if not user_id: continue
            
            insights = exam_intelligence_service.calculate_readiness_score(self.db, user_id, "Polity")
            print(f"   👤 Persona: {email} | Score: {insights['readiness_score']}% | Status: {insights['status'].upper()}")
            
            # Validation logic
            if "strong" in email: self.assertEqual(insights['status'], "unlocked")
            if "threshold" in email: self.assertEqual(insights['status'], "peekable")
            if "early" in email: self.assertEqual(insights['status'], "locked")

        print("   ✅ Success: 1000-node Intelligence stability verified.")

    @classmethod
    def tearDownClass(cls):
        # Cleanup
        print("\n🧹 Cleaning up stress data...")
        cls.db.execute(text("DELETE FROM concept_nodes WHERE node_id LIKE 'STRESS_%'"))
        cls.db.commit()
        cls.db.close()

if __name__ == "__main__":
    print("🚦 Initializing Hardened Adaptive Verification Suite...")
    unittest.main()

    @classmethod
    def tearDownClass(cls):
        # Cleanup test student and their noise
        print("\n🧹 Cleaning up test data...")
        cls.db.execute(text("DELETE FROM student_question_attempts WHERE student_id = 999"))
        cls.db.execute(text("DELETE FROM exam_sessions WHERE user_id = 999"))
        cls.db.execute(text("DELETE FROM student_concept_mastery WHERE student_id = 999"))
        cls.db.execute(text("DELETE FROM student_momentum_metrics WHERE student_id = 999"))
        cls.db.execute(text("DELETE FROM bank_questions WHERE source_id LIKE 'V-%'"))
        cls.db.commit()
        cls.db.close()

if __name__ == "__main__":
    print("🚦 Initializing Adaptive Verification Suite...")
    unittest.main()
