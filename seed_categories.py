import sys
import os
from sqlalchemy.orm import Session

# Add the parent directory to sys.path to allow imports from app
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.db.session import SessionLocal
from app.db.base import Base
from app.crud.category import category as crud_category
from app.crud.category import tag as crud_tag

def seed_data():
    db = SessionLocal()
    try:
        print("Seeding categories...")
        categories = [
            {"name": "Programming", "slug": "programming", "icon": "Code", "description": "Learn to code with Python, JavaScript, C++, and more."},
            {"name": "Data Science", "slug": "data-science", "icon": "Database", "description": "Master data analysis, machine learning, and AI."},
            {"name": "Design", "slug": "design", "icon": "Palette", "description": "Graphic design, UI/UX, and web design courses."},
            {"name": "Business", "slug": "business", "icon": "Briefcase", "description": "Entrepreneurship, management, and business strategy."},
            {"name": "Marketing", "slug": "marketing", "icon": "Megaphone", "description": "Digital marketing, SEO, and social media strategies."},
            {"name": "Personal Development", "slug": "personal-development", "icon": "User", "description": "Improve your productivity, leadership, and soft skills."},
            {"name": "Health & Fitness", "slug": "health-fitness", "icon": "Activity", "description": "Yoga, nutrition, and fitness training."},
            {"name": "Language", "slug": "language", "icon": "Globe", "description": "Learn new languages like Spanish, French, and German."},
            {"name": "Music", "slug": "music", "icon": "Music", "description": "Learn to play instruments and music theory."},
            {"name": "Photography", "slug": "photography", "icon": "Camera", "description": "Master the art of photography and photo editing."}
        ]

        for cat_data in categories:
            existing = crud_category.get_by_slug(db, slug=cat_data["slug"])
            if not existing:
                crud_category.create(db, obj_in=cat_data)
                print(f"Created category: {cat_data['name']}")
            else:
                print(f"Category already exists: {cat_data['name']}")

        print("\nSeeding tags...")
        tags = [
            {"name": "Python", "slug": "python"},
            {"name": "JavaScript", "slug": "javascript"},
            {"name": "React", "slug": "react"},
            {"name": "Machine Learning", "slug": "machine-learning"},
            {"name": "Web Development", "slug": "web-development"},
            {"name": "UI/UX", "slug": "ui-ux"},
            {"name": "Digital Marketing", "slug": "digital-marketing"},
            {"name": "Leadership", "slug": "leadership"},
            {"name": "Yoga", "slug": "yoga"},
            {"name": "Guitar", "slug": "guitar"}
        ]

        for tag_data in tags:
            # Check if tag exists (assuming get_by_slug exists or we implement it, but for now let's just try create and handle error if unique constraint fails or check manually)
            # Since CRUDTag doesn't have get_by_slug in the previous step, let's add it or just check by name if we can't. 
            # Actually I added get_multi, let's just try to create and catch exception or check if we can add get_by_slug to CRUDTag.
            # I'll just add a simple check by iterating or just try/except.
            # Better: I'll add get_by_slug to CRUDTag in the file first if needed, but for now let's just rely on the fact that I can query directly.
            from app.models.category import Tag
            existing = db.query(Tag).filter(Tag.slug == tag_data["slug"]).first()
            if not existing:
                crud_tag.create(db, obj_in=tag_data)
                print(f"Created tag: {tag_data['name']}")
            else:
                print(f"Tag already exists: {tag_data['name']}")

        print("Seeding completed successfully!")
    except Exception as e:
        print(f"Error seeding data: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    seed_data()
