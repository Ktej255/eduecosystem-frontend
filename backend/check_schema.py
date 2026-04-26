from app.db.session import engine
from sqlalchemy import text
import json

def check_schema():
    with engine.connect() as conn:
        res = conn.execute(text("SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'focused_test_reports' ORDER BY ordinal_position"))
        columns = [dict(row._mapping) for row in res]
        print("COLUMNS in focused_test_reports:")
        print(json.dumps(columns, indent=2))
        
        res = conn.execute(text("SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'focused_subject_gates' ORDER BY ordinal_position"))
        columns = [dict(row._mapping) for row in res]
        print("\nCOLUMNS in focused_subject_gates:")
        print(json.dumps(columns, indent=2))

if __name__ == "__main__":
    check_schema()
