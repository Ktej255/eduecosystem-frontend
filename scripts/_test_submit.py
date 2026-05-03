import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'backend')))
os.environ['TESTING'] = 'true'

from fastapi.testclient import TestClient
from main import app
from app.db.session import SessionLocal
from app.models.user import User
from app.api.deps import get_current_user

db = SessionLocal()
user = db.query(User).filter(User.email.like('%test_val%')).order_by(User.id.desc()).first()
if not user:
    user = db.query(User).filter(User.is_active == True).first()
db.close()

if not user:
    print('ERROR: No test user found')
    sys.exit(1)

print(f'Using user: {user.email} (id={user.id})')
app.dependency_overrides[get_current_user] = lambda: user

client = TestClient(app)

# Start test
r = client.get('/api/v1/focused/test/Polity/1')
print(f'START TEST: {r.status_code}')
if r.status_code != 200:
    print(r.text[:500])
    sys.exit(1)

data = r.json()
session_id = data.get('session_id')
questions = data.get('questions', [])
print(f'  session_id={session_id}, questions={len(questions)}')

answers = {str(q['id']): 'A' for q in questions[:5]}
submit_body = {
    'subject': 'Polity',
    'cluster_number': 1,
    'answers': answers,
    'confidence': ['Medium'] * len(answers),
    'time_per_question': [1000] * len(answers),
    'session_id': session_id,
    'answer_change_count': 0,
    'inactivity_gaps': 0
}

r2 = client.post('/api/v1/focused/test/submit', json=submit_body)
print(f'SUBMIT TEST: {r2.status_code}')
if r2.status_code != 200:
    print(r2.text[:1000])
    sys.exit(1)
else:
    report = r2.json()
    score = report.get('score')
    total = report.get('total')
    pct = report.get('percentage')
    print(f'  score={score}/{total} pct={pct}')
    print('ALL GOOD - SUBMIT TEST PASSED!')
