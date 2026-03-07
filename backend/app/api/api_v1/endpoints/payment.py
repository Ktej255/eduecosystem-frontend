from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException, Request
from pydantic import BaseModel
from sqlalchemy.orm import Session
from app.api import deps
from app.services.cashfree_service import cashfree_service
import os
import json

router = APIRouter()

from app.models.user import User

# Product catalog — single source of truth for subject pricing
SUBJECT_PRODUCTS = {
    "geography": {"name": "Geography for UPSC 2026", "price": 499.0},
    "polity": {"name": "Polity (Laxmikanth 95 Chapters)", "price": 499.0},
    "history": {"name": "Modern History (Spectrum)", "price": 299.0},
    "economy": {"name": "Economy for UPSC 2026", "price": 499.0},
    "environment": {"name": "Environment & Ecology", "price": 399.0},
    "scitech": {"name": "Science & Technology", "price": 399.0},
    "full_upsc": {"name": "Full UPSC Bundle (All Subjects)", "price": 2499.0},
}


class OrderRequest(BaseModel):
    tier: str = None  # Legacy — kept for backward compatibility
    subject_id: str = None  # New: e.g. 'geography', 'polity', 'full_upsc'


class SubjectAccessResponse(BaseModel):
    user_id: int
    email: str
    purchased_subjects: List[str]


@router.get("/access", response_model=SubjectAccessResponse)
def get_user_access(
    db: Session = Depends(deps.get_db),
    current_user=Depends(deps.get_current_active_user),
) -> Any:
    """
    Returns the list of subjects the logged-in student has purchased.
    Used by frontend to gate subject pages.
    """
    purchased = current_user.purchased_subjects or []
    # If user has full UPSC or is premium/batch1 authorized, grant all subjects
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
    """
    Create a Cashfree Order for a subject or tier purchase.
    Supports both legacy 'tier' param and new 'subject_id' param.
    """
    subject_id = request.subject_id
    tier = request.tier

    # Determine amount and note
    if subject_id and subject_id in SUBJECT_PRODUCTS:
        product = SUBJECT_PRODUCTS[subject_id]
        amount = product["price"]
        note = f"SUBJECT:{subject_id}"
    elif tier == "premium":
        amount = 1500.0
        note = "TIER:premium"
    else:
        raise HTTPException(status_code=400, detail="Invalid product. Provide a valid subject_id or tier.")

    try:
        customer_details = {
            "customer_id": str(current_user.id),
            "customer_email": current_user.email,
            "customer_phone": getattr(current_user, "phone", "9999999999") or "9999999999",
            "customer_name": getattr(current_user, "full_name", current_user.email.split("@")[0]) or "User"
        }

        cashfree_order = cashfree_service.create_order(
            order_amount=amount,
            order_currency="INR",
            customer_details=customer_details,
            order_note=note,
        )

        return {
            "order_id": cashfree_order.get("order_id"),
            "payment_session_id": cashfree_order.get("payment_session_id"),
            "amount": amount,
            "subject_id": subject_id,
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.get("/verify/{order_id}")
def verify_order(
    order_id: str,
    db: Session = Depends(deps.get_db),
    current_user=Depends(deps.get_current_active_user),
) -> Any:
    """
    Verify a completed Cashfree order and unlock the subject if payment succeeded.
    Frontend calls this after Cashfree JS SDK reports success.
    """
    try:
        order_details = cashfree_service.fetch_order_details(order_id)
        status = order_details.get("order_status", "")

        if status == "PAID":
            note = order_details.get("order_note", "")
            _unlock_from_note(current_user, note, db)
            return {"status": "success", "order_status": "PAID"}
        else:
            return {"status": "pending", "order_status": status}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.post("/webhook")
async def cashfree_webhook(request: Request, db: Session = Depends(deps.get_db)):
    """
    Cashfree webhook handler — handles payment success for both legacy premium
    and new per-subject purchases.
    """
    try:
        raw_body = await request.body()
        signature = request.headers.get("x-webhook-signature")
        timestamp = request.headers.get("x-webhook-timestamp")

        if not signature or not timestamp:
            raise HTTPException(status_code=400, detail="Missing Cashfree headers")

        if not cashfree_service.verify_webhook_signature(signature, timestamp, raw_body.decode("utf-8")):
            raise HTTPException(status_code=400, detail="Invalid signature")

        event = json.loads(raw_body)

        if event.get("type") == "PAYMENT_SUCCESS_WEBHOOK":
            order = event.get("data", {}).get("order", {})
            order_id = order.get("order_id", "")
            order_note = order.get("order_note", "")

            # Extract customer_id from order_id: ORDER_{customer_id}_{timestamp}
            parts = order_id.split("_")
            if len(parts) >= 2 and parts[1].isdigit():
                user_id = int(parts[1])
                user = db.query(User).filter(User.id == user_id).first()
                if user:
                    _unlock_from_note(user, order_note, db)
                    print(f"WEBHOOK SUCCESS: Processed order {order_id} for User {user_id}")
                else:
                    print(f"WEBHOOK ERROR: User {user_id} not found.")

        return {"status": "success"}

    except Exception as e:
        print(f"Webhook processing error: {e}")
        raise HTTPException(status_code=400, detail=str(e))


def _unlock_from_note(user: User, note: str, db: Session):
    """
    Parses the order note and unlocks the appropriate subject or tier.
    Note format: 'SUBJECT:geography' or 'TIER:premium'
    """
    if note.startswith("SUBJECT:"):
        subject_id = note.replace("SUBJECT:", "").strip()
        existing = list(user.purchased_subjects or [])
        if subject_id not in existing:
            existing.append(subject_id)
            user.purchased_subjects = existing

        # Grant batch1 access if any UPSC subject is purchased
        user.is_batch1_authorized = True

        # Full unlock if full_upsc
        if subject_id == "full_upsc":
            user.is_premium = True
            user.subscription_status = "active"
            user.is_batch2_authorized = True

    elif note.startswith("TIER:premium"):
        user.is_premium = True
        user.subscription_status = "active"
        user.is_batch1_authorized = True
        user.is_batch2_authorized = True

    db.commit()


