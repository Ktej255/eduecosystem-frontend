
from app.db.session import SessionLocal
from app.models.upsc import UPSCAttempt, UPSCReport
from app.models.user import User

def check_db():
    db = SessionLocal()
    try:
        user = db.query(User).filter(User.email == "ktej255@gmail.com").first()
        if not user:
            print("User not found")
            return

        attempts = db.query(UPSCAttempt).filter(UPSCAttempt.student_id == user.id).all()
        print(f"Total attempts for {user.email}: {len(attempts)}")
        for a in attempts:
            print(f"Attempt ID: {a.id}, Type: {a.attempt_type}, Question: {a.question_id}")

        reports = db.query(UPSCReport).filter(UPSCReport.student_id == user.id).all()
        print(f"Total reports for {user.email}: {len(reports)}")
        for r in reports:
            print(f"Report ID: {r.id}, Question: {r.question_id}, Marks Before: {r.estimated_marks_before}")

    finally:
        db.close()

if __name__ == "__main__":
    check_db()
