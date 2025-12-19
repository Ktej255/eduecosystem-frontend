import sys
import os
from sqlalchemy import text, inspect

# Add the parent directory to sys.path to allow imports from app
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.db.session import engine, Base
from app.models.category import Category, Tag, course_tags

def init_db():
    print("Creating database tables for Categories and Tags...")
    try:
        # Create tables
        Category.__table__.create(bind=engine, checkfirst=True)
        Tag.__table__.create(bind=engine, checkfirst=True)
        course_tags.create(bind=engine, checkfirst=True)
        
        # Add columns to courses table if they don't exist
        inspector = inspect(engine)
        columns = [c['name'] for c in inspector.get_columns('courses')]
        
        with engine.connect() as conn:
            if 'category_id' not in columns:
                print("Adding category_id column to courses table...")
                # SQLite doesn't support ADD COLUMN with REFERENCES in the same statement easily in some versions, 
                # but usually it works. If not, we might need a more complex migration.
                # However, for simple ADD COLUMN it should be fine.
                conn.execute(text("ALTER TABLE courses ADD COLUMN category_id INTEGER REFERENCES categories(id)"))
                conn.commit()
            else:
                print("category_id column already exists.")
            
        print("Tables created successfully!")
    except Exception as e:
        print(f"Error creating tables: {e}")

if __name__ == "__main__":
    init_db()
