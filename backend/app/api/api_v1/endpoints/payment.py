from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException, Request
from pydantic import BaseModel
from sqlalchemy.orm import Session
from sqlalchemy import text
from app.api import deps
from app.services.cashfree_service import cashfree_service
from app.models.user import User
from app.models.meditation import MeditationProgress, MEDITATION_LEVELS
from app.models.graphotherapy import GraphotherapyProgress, GRAPHOTHERAPY_LEVELS
import os
import json
from app.core.config import settings

FRONTEND_URL = os.getenv("FRONTEND_URL", "https://eduecosystem-frontend.vercel.app")

router = APIRouter()

# Product catalog — single source of truth for subject pricing
SUBJECT_PRODUCTS = {
    "geography": {"name": "Geography for UPSC 2026", "price": 499.0},
    "polity": {"name": "Polity (Laxmikanth 95 Chapters)", "price": 299.0},
    "history": {"name": "Modern History (Spectrum)", "price": 299.0},
    "history_ancient": {"name": "Ancient History (R.S. Sharma)", "price": 299.0},
    "economy": {"name": "Economy for UPSC 2026", "price": 499.0},
    "environment": {"name": "Environment & Ecology", "price": 299.0},
    "scitech": {"name": "Science & Technology", "price": 399.0},
    "full_upsc": {"name": "Full UPSC Bundle (All Subjects)", "price": 2499.0},
    "geography_polity": {"name": "Geography + Polity Bundle", "price": 449.0},
    "geography_history": {"name": "Geography + History Bundle", "price": 748.0},
    "focused_portal_test": {"name": "30-Day UPSC Focused Portal (Test)", "price": 1.0},
    "focused_portal_299": {"name": "30-Day UPSC Focused Portal", "price": 299.0},
    "focused_portal_2500": {"name": "30-Day UPSC Focused Portal", "price": 2500.0},
    "webinar_reg_99": {"name": "UPSC Focused Portal Webinar — Registration", "price": 99.0},
    # Meditation
    "meditation_l2": {"name": "Meditation Level 2", "price": 1499.0},
    "meditation_l3": {"name": "Meditation Level 3", "price": 1999.0},
    "meditation_l4": {"name": "Meditation Level 4", "price": 2499.0},
    "meditation_bundle": {"name": "Complete Meditation Journey", "price": 5999.0},
    "vsl_funnel_99": {"name": "30-Day UPSC Diagnosis Session", "price": 99.0},
    # Graphotherapy
    "grapho_l1": {"name": "Graphotherapy Level 1", "price": float(GRAPHOTHERAPY_LEVELS[1]["price"])},
    "grapho_l2": {"name": "Graphotherapy Level 2", "price": float(GRAPHOTHERAPY_LEVELS[2]["price"])},
    "grapho_l3": {"name": "Graphotherapy Level 3", "price": float(GRAPHOTHERAPY_LEVELS[3]["price"])},
    "grapho_l4": {"name": "Graphotherapy Level 4", "price": float(GRAPHOTHERAPY_LEVELS[4]["price"])},
}


class OrderRequest(BaseModel):
    tier: str = None  # Legacy
    subject_id: str = None  # Generic product ID


class GuestOrderRequest(BaseModel):
    full_name: str
    email: str
    whatsapp: str
    subject_id: str


class SubjectAccessResponse(BaseModel):
    user_id: int
    email: str
    purchased_subjects: List[str]


@router.get("/access", response_model=SubjectAccessResponse)
def get_user_access(
    db: Session = Depends(deps.get_db),
    current_user=Depends(deps.get_current_active_user),
) -> Any:
    purchased = current_user.purchased_subjects or []
    if current_user.is_premium or current_user.is_batch1_authorized or "full_upsc" in purchased:
        purchased = list(SUBJECT_PRODUCTS.keys())
    return {
        "user_id": current_user.id,
        "email": current_user.email,
        "purchased_subjects": purchased,
    }


@router.post("/create-order")
def create_order(
    request: OrderRequest,
    db: Session = Depends(deps.get_db),
    current_user=Depends(deps.get_current_active_user),
) -> Any:
    subject_id = request.subject_id
    tier = request.tier

    if subject_id and subject_id in SUBJECT_PRODUCTS:
        product = SUBJECT_PRODUCTS[subject_id]
        amount = product["price"]
        
        # Determine prefix for webhook handling
        if "meditation" in subject_id:
            note = f"MEDITATION:{subject_id}"
        elif "grapho" in subject_id:
            note = f"GRAPHO:{subject_id}"
        else:
            note = f"SUBJECT:{subject_id}"
            
    elif tier == "premium":
        amount = 1500.0
        note = "TIER:premium"
    else:
        raise HTTPException(status_code=400, detail="Invalid product.")

    try:
        customer_details = {
            "customer_id": str(current_user.id),
            "customer_email": current_user.email,
            "customer_phone": getattr(current_user, "phone", "9999999999") or "9999999999",
            "customer_name": getattr(current_user, "full_name", "User") or "User"
        }

        # Redirect URL for Cashfree
        return_url = f"{FRONTEND_URL}/student/payment/status?order_id={{order_id}}"

        cashfree_order = cashfree_service.create_order(
            order_amount=amount,
            order_currency="INR",
            customer_details=customer_details,
            order_note=note,
            order_meta={
                "return_url": return_url,
                "notify_url": f"{settings.BASE_URL}/api/v1/payment/webhook"
            }
        )
        return cashfree_order
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/create-guest-order")
def create_guest_order(
    request: GuestOrderRequest,
    db: Session = Depends(deps.get_db),
) -> Any:
    subject_id = request.subject_id

    if subject_id and subject_id in SUBJECT_PRODUCTS:
        product = SUBJECT_PRODUCTS[subject_id]
        amount = product["price"]
        
        # Determine prefix for webhook handling
        if "meditation" in subject_id:
            note = f"MEDITATION:{subject_id}"
        elif "grapho" in subject_id:
            note = f"GRAPHO:{subject_id}"
        else:
            note = f"SUBJECT:{subject_id}"
    else:
        raise HTTPException(status_code=400, detail="Invalid product.")

    try:
        customer_details = {
            "customer_id": f"guest_{request.whatsapp}",
            "customer_email": request.email,
            "customer_phone": request.whatsapp,
            "customer_name": request.full_name
        }

        # Redirect URL for Cashfree - use graphotherapy success page for grapho products
        if "grapho" in subject_id:
            return_url = f"{FRONTEND_URL}/graphotherapy/payment/success?order_id={{order_id}}"
        else:
            return_url = f"{FRONTEND_URL}/student/payment/status?order_id={{order_id}}"

        cashfree_order = cashfree_service.create_order(
            order_amount=amount,
            order_currency="INR",
            customer_details=customer_details,
            order_note=note,
            order_meta={
                "return_url": return_url,
                "notify_url": f"{settings.BASE_URL}/api/v1/payment/webhook"
            },
            order_tags={
                "name": request.full_name,
                "email": request.email,
                "whatsapp": request.whatsapp
            }
        )
        return cashfree_order
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/recover-special-5389420739")
async def recover_special(db: Session = Depends(deps.get_db)):
    """
    Surgical recovery for ktej255@gmail.com after the Stage-11 DB fix.
    """
    from app.crud.user import get_by_email, create
    from app.schemas.user import UserCreate
    from app.core.email import send_focused_portal_welcome
    from sqlalchemy import text
    import secrets
    import string
    
    email = "ktej255@gmail.com"
    name = "Tej"
    
    try:
        # 1. Definitive Database Migration Surgery
        # Users Table (Alter only)
        db.execute(text("ALTER TABLE users ADD COLUMN IF NOT EXISTS is_focused_portal_user BOOLEAN DEFAULT FALSE"))
        db.execute(text("ALTER TABLE users ADD COLUMN IF NOT EXISTS is_ras_authorized BOOLEAN DEFAULT FALSE"))
        db.execute(text("ALTER TABLE users ADD COLUMN IF NOT EXISTS purchased_subjects JSONB DEFAULT '[]'"))
        db.execute(text("ALTER TABLE users ADD COLUMN IF NOT EXISTS is_onboarded BOOLEAN DEFAULT FALSE"))
        db.commit()

        # DROP and RECREATE focused tables to ensure schema parity (safe because they are currently empty/failing)
        db.execute(text("DROP TABLE IF EXISTS focused_subject_gates"))
        db.execute(text("""
            CREATE TABLE focused_subject_gates (
                id          SERIAL PRIMARY KEY,
                user_id     INTEGER NOT NULL,
                subject_id  VARCHAR(50) NOT NULL,
                is_unlocked BOOLEAN DEFAULT false,
                passed      BOOLEAN DEFAULT false,
                created_at  TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            )
        """))
        
        db.execute(text("DROP TABLE IF EXISTS focused_portal_enrollments"))
        db.execute(text("""
            CREATE TABLE focused_portal_enrollments (
                id          SERIAL PRIMARY KEY,
                full_name   VARCHAR(255),
                email       VARCHAR(255),
                whatsapp    VARCHAR(50),
                amount_paid REAL,
                payment_id  VARCHAR(100),
                created_at  TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            )
        """))
        db.commit()
        
        # 2. Fresh session query to avoid metadata caching
        user = db.execute(
            text("SELECT id, email, full_name, is_focused_portal_user FROM users WHERE lower(email) = :email"),
            {"email": email.lower()}
        ).fetchone()
        
        password = None
        user_id = None
        
        if not user:
            # Create if missing using SQLAlchemy (Riskier if metadata still stale, but should be okay after commit)
            alphabet = string.ascii_letters + string.digits
            password = ''.join(secrets.choice(alphabet) for i in range(8))
            user_in = UserCreate(email=email, password=password, full_name=name)
            new_user = create(db, obj_in=user_in)
            user_id = new_user.id
        else:
            user_id = user.id
        
        # 3. Finalize permission and gates
        db.execute(
            text("UPDATE users SET is_focused_portal_user = true WHERE id = :uid"),
            {"uid": user_id}
        )
        
        # Insert subject gates (Polity)
        db.execute(
            text("INSERT INTO focused_subject_gates (user_id, subject_id, is_unlocked, passed) "
                 "VALUES (:uid, :sid, :unlocked, :passed) ON CONFLICT DO NOTHING"),
            {"uid": user_id, "sid": "Polity", "unlocked": True, "passed": False}
        )
        
        # Log enrollment
        db.execute(
            text("INSERT INTO focused_portal_enrollments (full_name, email, whatsapp, amount_paid, payment_id) "
                 "VALUES (:name, :email, :whatsapp, :amount, :pid)"),
            {
                "name": name,
                "email": email,
                "whatsapp": "9999999999",
                "amount": 1.0,
                "pid": "AUTO_RECOVERY_5389420739"
            }
        )
        db.commit()
        
        # Trigger Email
        if password:
            await send_focused_portal_welcome(email, name, password)
        else:
            await send_focused_portal_welcome(email, name, None)
            
        return {"status": "success", "recovered": email, "user_id": user_id}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/verify/{order_id}")
def verify_payment(
    order_id: str,
    db: Session = Depends(deps.get_db),
    current_user=Depends(deps.get_current_active_user),
) -> Any:
    """
    Proactively verify payment status with Cashfree.
    Used by the frontend status page to confirm unlock.
    """
    try:
        cf_order = cashfree_service.fetch_order_details(order_id)
        order_status = cf_order.get("order_status")
        order_note = cf_order.get("order_note", "")

        if order_status == "PAID":
            # Proactively unlock even if webhook is delayed
            _unlock_from_note(current_user, order_note, db, order_id=order_id, payment_event=cf_order)
            return {"status": "success", "order_status": order_status}
        
        return {"status": "pending", "order_status": order_status}
    except Exception as e:
        print(f"Verification Error: {e}")
        return {"status": "failed", "error": str(e)}


@router.post("/webhook")
async def cashfree_webhook(request: Request, db: Session = Depends(deps.get_db)):
    try:
        raw_body = await request.body()
        signature = request.headers.get("x-webhook-signature")
        timestamp = request.headers.get("x-webhook-timestamp")
        
        import logging
        logger = logging.getLogger("webhook_debug")
        logger.info(f"Webhook secret length: {len(settings.CASHFREE_WEBHOOK_SECRET)}")
        logger.info(f"Webhook secret starts with: {settings.CASHFREE_WEBHOOK_SECRET[:3]}")
        logger.info(f"Incoming Webhook: sig_header={signature[:10]}..., ts_header={timestamp}, body_len={len(raw_body)}")

        if not cashfree_service.verify_webhook_signature(signature, timestamp, raw_body.decode("utf-8")):
            logger.warning(f"Signature verification failed for order in webhook headers.")
            raise HTTPException(status_code=400, detail="Invalid signature")

        event = json.loads(raw_body)
        if event.get("type") == "PAYMENT_SUCCESS_WEBHOOK":
            data = event.get("data", {})
            order = data.get("order", {})
            order_id = order.get("order_id", "")
            order_note = order.get("order_note", "")

            parts = order_id.split("_")
            if len(parts) >= 2 and parts[1].isdigit():
                user_id = int(parts[1])
                user = db.query(User).filter(User.id == user_id).first()
                if user:
                    _unlock_from_note(user, order_note, db, order_id=order_id, payment_event=data)
                    
            if order_note in ["SUBJECT:focused_portal_test", "SUBJECT:polity_focused", "SUBJECT:focused_portal_2500", "SUBJECT:focused_portal_299", "SUBJECT:vsl_funnel_99"]:
                try:
                    from app.crud.user import get_by_email, create
                    from app.schemas.user import UserCreate
                    from app.core.email import send_focused_portal_welcome
                    import secrets
                    import string
                    
                    tags = order.get("order_tags", {})
                    stu_email = tags.get("email", "").strip().lower()
                    stu_name = tags.get("name", "Student")
                    stu_phone = tags.get("whatsapp", "")
                    
                    user = get_by_email(db, email=stu_email)
                    student_password = ""
                    is_new_user = False
                    
                    if not user:
                        alphabet = string.ascii_letters + string.digits
                        student_password = ''.join(secrets.choice(alphabet) for i in range(8))
                        
                        user_in = UserCreate(
                            email=stu_email,
                            password=student_password,
                            full_name=stu_name
                        )
                        user = create(db, obj_in=user_in)
                        user.role = "student"
                        user.is_active = True
                        user.is_approved = True
                        user.is_focused_portal_user = True
                        user.cashfree_customer_id = data.get("payment", {}).get("cf_payment_id", "Unknown")
                        db.commit()
                        db.refresh(user)
                        is_new_user = True
                    else:
                        user.is_focused_portal_user = True
                        db.commit()
                        db.refresh(user)
                        
                    # Insert full subject sequence gates (43-Day Sprint)
                    # Note: Sequence derived from focused_portal.py
                    FOCUSED_SEQUENCE = [
                        "Polity", "Environment", "Science & Technology", "Economy", 
                        "Agriculture", "Geography", "Ancient History", "Medieval History", 
                        "Modern History", "Art and Culture", "International Relations", "Indian Society"
                    ]
                    for subj in FOCUSED_SEQUENCE:
                        gate_exists = db.execute(
                            text("SELECT 1 FROM focused_subject_gates WHERE user_id = :uid AND subject = :sid"),
                            {"uid": user.id, "sid": subj}
                        ).fetchone()
                        
                        if not gate_exists:
                            db.execute(
                                text("INSERT INTO focused_subject_gates (user_id, subject, is_unlocked, passed) "
                                     "VALUES (:uid, :sid, :unlocked, :passed)"),
                                {"uid": user.id, "sid": subj, "unlocked": True, "passed": False}
                            )
                    
                    # Log enrollment
                    db.execute(
                        text("INSERT INTO focused_portal_enrollments (full_name, email, whatsapp, amount_paid, payment_id) "
                             "VALUES (:name, :email, :whatsapp, :amount, :pid)"),
                        {
                            "name": stu_name,
                            "email": stu_email,
                            "whatsapp": stu_phone,
                            "amount": data.get("payment", {}).get("payment_amount", 0.0),
                            "pid": data.get("payment", {}).get("cf_payment_id", "Unknown")
                        }
                    )
                    db.commit()
                    
                    # Resilience: Wrap email in its own try block
                    try:
                        if is_new_user:
                            await send_focused_portal_welcome(stu_email, stu_name, student_password)
                        else:
                            await send_focused_portal_welcome(stu_email, stu_name, None)
                    except Exception as email_err:
                        print(f"[WEBHOOK] Post-payment email failed for {stu_email}: {email_err}")
                except Exception as enrollment_err:
                    print(f"[WEBHOOK] Enrollment failed: {enrollment_err}")
                    # We still return 200 to Cashfree to stop retries, but we logged the error for manual recovery.
                    
            elif order_note == "SUBJECT:webinar_reg_99":
                from app.core.email import send_webinar_confirmation
                from app.crud.user import get_by_email, create
                from app.schemas.user import UserCreate
                import secrets
                import string

                tags = order.get("order_tags", {})
                stu_email = tags.get("email", "").strip().lower()
                stu_name = tags.get("name", "Student")
                stu_phone = tags.get("whatsapp", "")

                # Log registration
                db.execute(text(
                    "INSERT INTO webinar_registrations (full_name, email, whatsapp, amount_paid, payment_id) "
                    "VALUES (:name, :email, :whatsapp, :amount, :pid)"
                ), {
                    "name": stu_name,
                    "email": stu_email,
                    "whatsapp": stu_phone,
                    "amount": data.get("payment", {}).get("payment_amount", 0.0),
                    "pid": data.get("payment", {}).get("cf_payment_id", "Unknown")
                })
                db.commit()

                # FIX 2: Auto-create user account
                user = get_by_email(db, email=stu_email)
                student_password = None
                
                if not user:
                    # Generate specific password EDU<3UPPER><4DIGITS>
                    letters = "".join(secrets.choice(string.ascii_uppercase) for _ in range(3))
                    digits = "".join(secrets.choice(string.digits) for _ in range(4))
                    student_password = f"EDU{letters}{digits}"
                    
                    user_in = UserCreate(
                        email=stu_email,
                        password=student_password,
                        full_name=stu_name
                    )
                    user = create(db, obj_in=user_in)
                    user.role = "student"
                    user.is_active = True
                    user.is_focused_portal_user = True
                    db.commit()
                else:
                    user.is_focused_portal_user = True
                    db.commit()

                # FIX 4: Grant Polity Access
                db.execute(
                    text("INSERT INTO focused_subject_gates (user_id, subject, is_unlocked, passed) "
                         "VALUES (:uid, 'Polity', true, false) ON CONFLICT DO NOTHING"),
                    {"uid": user.id}
                )
                db.commit()

                # FIX 3: Send confirmation email with credentials
                await send_webinar_confirmation(stu_email, stu_name, student_password)
                
                
        return {"status": "success"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


def _record_graphotherapy_purchase(
    user: User,
    prod_id: str,
    db: Session,
    *,
    order_id: str = None,
    payment_event: dict = None,
) -> None:
    payment_event = payment_event or {}
    order_payload = payment_event.get("order") or {}
    payment_payload = payment_event.get("payment") or {}
    level_token = prod_id.rsplit("_l", 1)[-1]
    if not level_token.isdigit():
        return

    level = int(level_token)
    payment_id = (
        payment_event.get("cf_payment_id")
        or payment_event.get("payment_id")
        or payment_payload.get("cf_payment_id")
        or payment_payload.get("payment_id")
        or payment_event.get("order_id")
        or order_payload.get("order_id")
        or order_id
        or f"{prod_id}_{user.id}"
    )
    existing = (
        db.query(GraphotherapyLevelPurchase)
        .filter(GraphotherapyLevelPurchase.payment_id == str(payment_id))
        .first()
    )
    if existing:
        return

    amount_paid = (
        payment_event.get("order_amount")
        or payment_event.get("payment_amount")
        or order_payload.get("order_amount")
        or payment_payload.get("payment_amount")
        or SUBJECT_PRODUCTS.get(prod_id, {}).get("price")
        or GRAPHOTHERAPY_LEVELS.get(level, {}).get("price")
        or 0
    )
    # Disabling GraphotherapyLevelPurchase recording as the model is missing
    # To restore, ensure GraphotherapyLevelPurchase exists in app.models.graphotherapy
    pass
    """
    db.add(
        GraphotherapyLevelPurchase(
            user_id=user.id,
            tenant_id=getattr(user, "tenant_id", None) or 1,
            level=level,
            amount_paid=float(amount_paid),
            currency=(
                payment_event.get("order_currency")
                or payment_event.get("payment_currency")
                or order_payload.get("order_currency")
                or payment_payload.get("payment_currency")
                or "INR"
            ),
            payment_gateway="cashfree",
            payment_id=str(payment_id),
            order_id=order_id or payment_event.get("order_id") or order_payload.get("order_id"),
            payment_status=(
                payment_event.get("order_status")
                or payment_event.get("payment_status")
                or order_payload.get("order_status")
                or payment_payload.get("payment_status")
                or "paid"
            ).lower(),
            payment_method=(
                payment_event.get("payment_group")
                or payment_event.get("payment_method")
                or payment_payload.get("payment_group")
                or payment_payload.get("payment_method")
            ),
            notes=f"Unlocked from product {prod_id}",
        )
    )
    """


def _unlock_from_note(user: User, note: str, db: Session, *, order_id: str = None, payment_event: dict = None):
    if note.startswith("SUBJECT:"):
        subject_id = note.replace("SUBJECT:", "").strip()
        existing = list(user.purchased_subjects or [])
        if subject_id not in existing:
            existing.append(subject_id)
            user.purchased_subjects = existing
        
        # Focused Portal products do NOT grant main batch access
        if "focused_portal" not in subject_id:
            user.is_batch1_authorized = True
            if subject_id == "full_upsc":
                user.is_premium = True

    elif note.startswith("MEDITATION:"):
        prod_id = note.replace("MEDITATION:", "").strip()
        progress = db.query(MeditationProgress).filter(MeditationProgress.user_id == user.id).first()
        if not progress:
            progress = MeditationProgress(user_id=user.id, unlocked_levels=1)
            db.add(progress)
        
        if prod_id == "meditation_l2": progress.unlocked_levels = max(progress.unlocked_levels, 2)
        elif prod_id == "meditation_l3": progress.unlocked_levels = max(progress.unlocked_levels, 3)
        elif prod_id == "meditation_l4": progress.unlocked_levels = max(progress.unlocked_levels, 4)
        elif "bundle" in prod_id: progress.unlocked_levels = 4

    elif note.startswith("GRAPHO:"):
        prod_id = note.replace("GRAPHO:", "").strip()
        progress = db.query(GraphotherapyProgress).filter(GraphotherapyProgress.user_id == user.id).first()
        if not progress:
            progress = GraphotherapyProgress(user_id=user.id, current_level=1)
            db.add(progress)
            
        if "l1" in prod_id: progress.current_level = max(progress.current_level, 1)
        elif "l2" in prod_id: progress.current_level = max(progress.current_level, 2)
        elif "l3" in prod_id: progress.current_level = max(progress.current_level, 3)
        elif "l4" in prod_id: progress.current_level = max(progress.current_level, 4)
        _record_graphotherapy_purchase(user, prod_id, db, order_id=order_id, payment_event=payment_event)

    elif note == "TIER:premium":
        user.is_premium = True

    db.commit()

    # ── CRM Automation Bridge: Auto-log payment & convert lead ──
    try:
        from app.services.crm_events import on_payment_success
        on_payment_success(
            user, note, db,
            order_id=order_id,
            payment_event=payment_event,
        )
    except Exception as e:
        print(f"[CRM] Failed to log payment event: {e}")
