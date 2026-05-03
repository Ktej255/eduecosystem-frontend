"""
End-to-end webhook test for focused portal enrollment.
Generates a correctly signed Cashfree webhook payload and fires it at production.
Then queries the DB to confirm all 3 records were created automatically.
"""
import hmac
import hashlib
import base64
import json
import time
import requests
import psycopg2

# ── Config ────────────────────────────────────────────────────────────────────
WEBHOOK_URL  = "https://eduecosystem-backend-503001969959.us-central1.run.app/api/v1/payment/webhook"
SECRET_KEY   = "442795ecbc296f8daec9c50616b32ee186f85100"  # CASHFREE_WEBHOOK_SECRET

TEST_EMAIL   = "webtest@saritclasses.com"
TEST_NAME    = "WebTest User"
TEST_PHONE   = "9000000001"
TEST_PAYMENT = "CF_SIM_999999"

DB_HOST = "34.55.250.166"
DB_NAME = "eduecosystem_prod"
DB_USER = "postgres"
DB_PASS = "Tej@1106"

# ── Step 2: Build payload (exact format Cashfree sends) ───────────────────────
payload = {
    "type": "PAYMENT_SUCCESS_WEBHOOK",
    "data": {
        "order": {
            "order_id": "WEBTEST_SIM_006",
            "order_status": "PAID",
            "order_note": "SUBJECT:focused_portal_test",
            "order_amount": 99.00,
            "order_currency": "INR",
            "order_tags": {
                "email": TEST_EMAIL,
                "name": TEST_NAME,
                "whatsapp": TEST_PHONE
            }
        },
        "payment": {
            "cf_payment_id": TEST_PAYMENT,
            "payment_status": "SUCCESS",
            "payment_amount": 99.00,
            "payment_currency": "INR",
            "payment_group": "upi"
        }
    }
}

# Serialize with NO extra spaces — matches what verify_webhook_signature receives
raw_body = json.dumps(payload, separators=(',', ':'))
timestamp = str(int(time.time() * 1000))

# ── Compute signature: base64(HMAC-SHA256(SECRET_KEY, timestamp + raw_body)) ──
signed_string = timestamp + raw_body
signature = base64.b64encode(
    hmac.new(
        SECRET_KEY.encode('utf-8'),
        signed_string.encode('utf-8'),
        digestmod=hashlib.sha256
    ).digest()
).decode('utf-8')

# ── Step 3a: Fire the webhook ─────────────────────────────────────────────────
print("=" * 60)
print("STEP 3 — Firing signed webhook to production")
print(f"  URL       : {WEBHOOK_URL}")
print(f"  Timestamp : {timestamp}")
print(f"  Signature : {signature[:30]}...")
print(f"  Payload   : order_note=SUBJECT:focused_portal_test, email={TEST_EMAIL}")
print()

headers = {
    "Content-Type": "application/json",
    "x-webhook-timestamp": timestamp,
    "x-webhook-signature": signature
}

resp = requests.post(WEBHOOK_URL, data=raw_body, headers=headers, timeout=20)
print(f"  HTTP Status  : {resp.status_code}")
print(f"  Response Body: {resp.text}")
print()

if resp.status_code != 200:
    print("ERROR: Webhook did not return 200. Aborting DB verification.")
    exit(1)

# Give the backend 2 seconds to complete async DB writes
import time as t
print("Waiting 3 seconds for backend to commit DB writes...")
t.sleep(3)

# ── Step 3b: Query DB for all 3 records ──────────────────────────────────────
print("=" * 60)
print("STEP 3 — SQL Verification")

conn = psycopg2.connect(
    host=DB_HOST, dbname=DB_NAME, user=DB_USER,
    password=DB_PASS, port=5432, connect_timeout=10, sslmode="require"
)
cur = conn.cursor()

print(f"\n--- users WHERE email='{TEST_EMAIL}' ---")
cur.execute("SELECT id, email, full_name, is_active, is_focused_portal_user, created_at FROM users WHERE email=%s", (TEST_EMAIL,))
rows = cur.fetchall()
cols = [d[0] for d in cur.description]
print("  " + " | ".join(cols))
for row in rows:
    print("  " + " | ".join(str(v) for v in row))
if not rows:
    print("  *** NO ROWS — user was NOT created ***")

print(f"\n--- focused_portal_enrollments WHERE email='{TEST_EMAIL}' ---")
cur.execute("SELECT * FROM focused_portal_enrollments WHERE email=%s", (TEST_EMAIL,))
rows = cur.fetchall()
cols = [d[0] for d in cur.description]
print("  " + " | ".join(cols))
for row in rows:
    print("  " + " | ".join(str(v) for v in row))
if not rows:
    print("  *** NO ROWS — enrollment was NOT recorded ***")

print(f"\n--- focused_subject_gates for '{TEST_EMAIL}' ---")
cur.execute("""
    SELECT g.id, g.user_id, g.subject_id, g.is_unlocked, g.passed, g.created_at
    FROM focused_subject_gates g
    JOIN users u ON u.id = g.user_id
    WHERE u.email = %s
""", (TEST_EMAIL,))
rows = cur.fetchall()
cols = [d[0] for d in cur.description]
print("  " + " | ".join(cols))
for row in rows:
    print("  " + " | ".join(str(v) for v in row))
if not rows:
    print("  *** NO ROWS — Polity gate was NOT created ***")

cur.close()
conn.close()

print()
print("=" * 60)
print("DONE")
