import json
import logging
import os
import re
import argparse
from datetime import datetime
from sqlalchemy.orm import Session
from app.db.session import SessionLocal
import app.db.base  # This registers all models with SQLAlchemy
from app.models.user import User
from app.models.course import Course
from app.models.question_bank import QuestionBank, BankQuestion
import app.models.student_report

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def extract_mcqs_from_ts(content):
    """Simple regex based extractor for TS question arrays"""
    # Find the array content [ ... ]
    match = re.search(r'=\s*(\[.*\]);', content, re.DOTALL)
    if not match:
        # Try without the semicolon
        match = re.search(r'=\s*(\[.*\])', content, re.DOTALL)
    
    if not match:
        return []
    
    array_str = match.group(1)
    
    # Attempt to convert to valid JSON (rough approach)
    # 1. Quote keys
    json_str = re.sub(r'(\s+)(\w+):', r'\1"\2":', array_str)
    # 2. Fix single quotes to double quotes for strings
    # This is risky but often works for these files
    # Only replace quotes that are not inside quotes? Hard.
    # Let's try replacing quotes around property values
    json_str = re.sub(r':\s*\'(.*)\'', r': "\1"', json_str)
    
    try:
        # Remove trailing commas that break JSON
        json_str = re.sub(r',\s*\]', r']', json_str)
        json_str = re.sub(r',\s*\}', r'}', json_str)
        return json.loads(json_str)
    except Exception as e:
        logger.warning(f"Failed to parse TS content via JSON: {e}. Trying secondary regex approach.")
        # Secondary approach: Find individual objects
        # This is more robust for malformed JSON
        objects = []
        # Find all { ... } blocks
        obj_matches = re.finditer(r'\{[^{}]*\}', array_str, re.DOTALL)
        for obj_match in obj_matches:
            obj_text = obj_match.group(0)
            obj = {}
            # Extract simple fields: id, question, correctAnswer, difficulty, explanation
            # id
            id_m = re.search(r'id:\s*[\'"]?([^\'"]+)[\'"]?', obj_text)
            if id_m: obj['id'] = id_m.group(1)
            # question
            q_m = re.search(r'question:\s*[\'"]?(.*?)[\'"]?,?$', obj_text, re.MULTILINE)
            if q_m: obj['question'] = q_m.group(1).rstrip('", ')
            # difficulty
            d_m = re.search(r'difficulty:\s*[\'"]?([^\'"]+)[\'"]?', obj_text)
            if d_m: obj['difficulty'] = d_m.group(1)
            # explanation
            ext_m = re.search(r'explanation:\s*[\'"]?(.*?)[\'"]?,?$', obj_text, re.MULTILINE)
            if ext_m: obj['explanation'] = ext_m.group(1).rstrip('", ')
            # correctAnswer
            ca_m = re.search(r'correctAnswer:\s*(\d+)', obj_text)
            if ca_m: obj['correctAnswer'] = int(ca_m.group(1))
            # options
            opt_m = re.search(r'options:\s*\[(.*?)\]', obj_text, re.DOTALL)
            if opt_m:
                opts_text = opt_m.group(1)
                opts = re.findall(r'[\'"](.*?)[\'"]', opts_text)
                obj['options'] = opts
            
            if obj.get('question'):
                objects.append(obj)
        return objects

def ingest_mcqs(source=None, subject_override=None):
    db = SessionLocal()
    try:
        # Get or create admin user
        instructor = db.query(User).filter(User.email == "instructor@eduecosystem.com").first()
        if not instructor:
            instructor = db.query(User).first()
            if not instructor:
                instructor = User(
                    email="instructor@eduecosystem.com",
                    hashed_password="dummy",
                    full_name="System Admin",
                    is_active=True,
                    role="admin",
                )
                db.add(instructor)
                db.commit()
                db.refresh(instructor)
        
        # Get or create a base Course for UPSC
        course = db.query(Course).filter(Course.title == "UPSC Master Question Bank Repository").first()
        if not course:
            course = Course(
                title="UPSC Master Question Bank Repository",
                slug="upsc-master-question-bank-repository",
                description="Centralized repository containing 45,000+ unified MCQs for all subjects.",
                instructor_id=instructor.id,
                price=0,
                is_published=False,
                total_duration_minutes=0
            ) 
            db.add(course)
            db.commit()
            db.refresh(course)
        
        logger.info(f"Using Instructor ID: {instructor.id}, Course ID: {course.id}")

        mcqs = []
        if source and os.path.isdir(source):
            logger.info(f"Scanning directory: {source} for subjects like {subject_override}")
            # Recursively find all .ts files
            for root, _, files in os.walk(source):
                for file in files:
                    if file.endswith('.ts') and 'content' not in file:
                        full_path = os.path.join(root, file)
                        logger.info(f"Processing TS file: {file}")
                        with open(full_path, 'r', encoding='utf-8') as f:
                            content = f.read()
                            extracted = extract_mcqs_from_ts(content)
                            for q in extracted:
                                q['_sourceFile'] = file
                            mcqs.extend(extracted)
        else:
            filepath = source if source else os.path.join(os.path.dirname(os.path.dirname(__file__)), 'frontend', 'all_mcqs_extracted.json')
            if not os.path.exists(filepath):
                filepath = os.path.join(os.path.dirname(__file__), 'all_mcqs_extracted.json')
                
            if not os.path.exists(filepath):
                logger.error(f"MCQ data file not found at {filepath}")
                return

            logger.info(f"Loading JSON from {filepath}")
            with open(filepath, 'r', encoding='utf-8') as f:
                mcqs = json.load(f)
            
        logger.info(f"Loaded {len(mcqs)} questions. Processing...")
        
        grouped_data = {}
        for q in mcqs:
            source_file = q.get('_sourceFile', '').lower()
            
            # SMART FILTERING FOR CLOUD RUN / AGGREGATE JSON
            if subject_override:
                # If we are using the aggregate JSON (fell back because source dir not found)
                # we must filter by the intended source path or subject keywords
                is_json_fallback = not (source and os.path.isdir(source))
                if is_json_fallback:
                    # Filter by subject keywords in source path
                    sub_lower = subject_override.lower()
                    if 'modern history' in sub_lower and 'modern' not in source_file: continue
                    if 'medieval history' in sub_lower and 'medieval' not in source_file: continue
                    if 'ancient history' in sub_lower and 'ancient' not in source_file: continue
                    if 'history' in sub_lower and 'history' not in source_file: continue
                    if 'polity' in sub_lower and 'polity' not in source_file: continue
                
                subject = subject_override
            else:
                subject = "General"
                if 'polity' in source_file: subject = "Polity"
                elif 'history' in source_file: subject = "History"
                elif 'geography' in source_file: subject = "Geography"
                elif 'science-tech' in source_file: subject = "Science & Tech"
                elif 'environment' in source_file: subject = "Environment"
                elif 'economy' in source_file: subject = "Economy"
                
                # Default legacy behavior: skip non-polity
                if subject != "Polity": continue 

            bank_name = q.get('_sourceFile', 'Unnamed Bank')
            # If we have a subject override, prefix it to bank name for clarity
            if subject_override:
                bank_name = f"{subject_override} - {bank_name}"
                
            if bank_name not in grouped_data:
                grouped_data[bank_name] = []
            grouped_data[bank_name].append((q, subject))
            
        logger.info(f"Found {len(grouped_data)} distinct Question Banks.")
        
        total_inserted = 0
        
        for bank_name, items in grouped_data.items():
            # Check if Bank exists
            bank = db.query(QuestionBank).filter(QuestionBank.title == bank_name).first()
            if not bank:
                bank = QuestionBank(
                    course_id=course.id,
                    instructor_id=instructor.id,
                    title=bank_name,
                    description=f"Auto-imported bank from {bank_name}.",
                    category="UPSC",
                    difficulty_level="medium",
                    is_active=True
                )
                db.add(bank)
                db.flush() 
            
            db_questions = []
            for q, subj in items:
                # Map difficulty
                raw_diff = str(q.get('difficulty', 'medium')).lower()
                diff = 'medium'
                if 'easy' in raw_diff: diff = 'easy'
                elif 'hard' in raw_diff or 'advanced' in raw_diff: diff = 'hard'
                
                options = q.get('options', [])
                correct_ans = str(q.get('correctAnswer', ''))
                
                try:
                    ans_idx = int(float(correct_ans))
                    if 0 <= ans_idx < len(options):
                        correct_ans = options[ans_idx]
                except (ValueError, TypeError):
                    pass 
                
                question_text = q.get('question', '') or q.get('statement', '') or "Unknown Question"
                    
                db_q = BankQuestion(
                    instructor_id=instructor.id,
                    text=question_text,
                    type="multiple_choice",
                    points=1,
                    difficulty=diff,
                    options=json.dumps(options),
                    correct_answer=correct_ans,
                    explanation=q.get('explanation', ''),
                    subject=subj,
                    tags=q.get('topic', '') or "UPSC"
                )
                db_questions.append(db_q)
            
            db.add_all(db_questions)
            db.flush()
            
            for db_q in db_questions:
                bank.questions.append(db_q)
                
            db.commit()
            total_inserted += len(items)
            logger.info(f"Saved Question Bank: {bank_name} with {len(items)} questions.")

        logger.info(f"✅ Successfully ingested {total_inserted} total MCQs into to PostgreSQL database!")

    except Exception as e:
        logger.error(f"Error ingesting MCQs: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Ingest MCQs from JSON or TS files')
    parser.add_argument('--source', help='Path to JSON file or directory containing TS files')
    parser.add_argument('--subject', help='Subject override for the ingested questions')
    args = parser.parse_args()
    
    ingest_mcqs(source=args.source, subject_override=args.subject)
