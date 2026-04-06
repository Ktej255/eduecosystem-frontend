# -*- coding: utf-8 -*-
from sqlalchemy import create_engine, text
from pathlib import Path
import sys, os

# Setup Path
BACKEND_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(BACKEND_DIR))

# Explicitly load .env from backend directory before importing settings
import dotenv
dotenv.load_dotenv(str(BACKEND_DIR / ".env"))

from app.core.config import settings

engine = create_engine(str(settings.DATABASE_URL))

SUBJECTS = [
    ('geography', 'Geography (GS1)', 'Comprehensive Physical and Indian Geography'),
    ('history', 'History (GS1)', 'Ancient, Medieval, Modern History and Art & Culture'),
    ('economy', 'Economy (GS3)', 'Indian Economy, Budget 2026, and Economic Survey'),
    ('polity', 'Polity (GS2)', 'Indian Constitution and Governance'),
    ('science-tech', 'Science & Tech (GS3)', 'Space, Defense, Biotech and IT'),
    ('agriculture', 'Agriculture (GS3)', 'Farm Management and Agri-Economics'),
    ('disaster-mgmt', 'Disaster Management (GS3)', 'Lifecycle and Institutional Framework'),
    ('ir', 'International Relations (GS2)', 'Bilateral and Global Affairs'),
    ('security', 'Internal Security (GS3)', 'Cyber Security and Extremism'),
    ('ethics', 'Ethics (GS4)', 'Integrity, Aptitude and Case Studies'),
    ('social-issues', 'Social Issues (GS1)', 'Society and Empowerment')
]

def check_course():
    with engine.begin() as conn:
        for slug, title, desc in SUBJECTS:
            res = conn.execute(text("SELECT id FROM courses WHERE slug = :s"), {"s": slug}).fetchone()
            if not res:
                print(f"🌍 Creating {title} course...")
                conn.execute(text("""
                    INSERT INTO courses (title, description, slug, instructor_id, is_published, price, level)
                    VALUES (:t, :d, :s, 1, 1, 0.0, 'intermediate')
                """), {"t": title, "d": desc, "s": slug})
                print(f"✅ {title} course created.")
            else:
                print(f"✅ {title} course already exists.")

if __name__ == "__main__":
    check_course()
