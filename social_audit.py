import sqlalchemy
from sqlalchemy import text
import json
try:
    e = sqlalchemy.create_engine('postgresql://postgres:EduEco2026DB@34.55.250.166:5432/eduecosystem_prod')
    with e.connect() as c:
        tables = ['learning_groups','group_memberships','messages','friend_requests','friends','community_posts','community_comments']
        results = {}
        for t in tables:
            try:
                count = c.execute(text(f'SELECT COUNT(*) FROM {t}')).scalar()
                cols = c.execute(text(f"SELECT column_name FROM information_schema.columns WHERE table_name='{t}' AND table_schema='public'")).fetchall()
                results[t] = {"rows": count, "columns": [r[0] for r in cols]}
            except Exception as ex:
                results[t] = f"error: {ex}"
        print(json.dumps(results, indent=2))
except Exception as global_ex:
    print(f"Global Error: {global_ex}")
