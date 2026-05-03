import logging
from sqlalchemy.orm import Session
from app.models.lead import Lead
from app.models.user import User
from app.graphotherapy_engine.funnel_analytics import funnel_analytics

logger = logging.getLogger(__name__)

def on_report_generated(user_id: str, report_data: dict, db: Session):
    """
    Called when a free analysis report is generated.
    Tags the lead with detected dimensions for re-marketing.
    """
    try:
        user = db.query(User).filter(User.id == int(user_id)).first() if user_id.isdigit() else None
        email = user.email if user else None
        
        if email:
            lead = db.query(Lead).filter(Lead.email == email).first()
            if lead:
                dimensions = report_data.get("dimensions", [])
                lead.dimension_tags = [d["name"] for d in dimensions]
                lead.funnel_stage = "report_generated"
                lead.intent_score = min((lead.intent_score or 0) + 0.3, 1.0)
                db.commit()
                logger.info(f"[CRM] Lead updated for {email} with dimensions.")
        
        funnel_analytics.track_event("report_generated", user_id, db=db)
        
    except Exception as e:
        logger.error(f"[CRM] Error in on_report_generated: {e}")

def on_offer_clicked(user_id: str, offer_id: str, db: Session):
    """
    Called when a user clicks a CTA/Offer.
    Increases intent score and updates funnel stage.
    """
    try:
        user = db.query(User).filter(User.id == int(user_id)).first() if user_id.isdigit() else None
        if user:
            lead = db.query(Lead).filter(Lead.email == user.email).first()
            if lead:
                lead.funnel_stage = "offer_clicked"
                lead.intent_score = min((lead.intent_score or 0) + 0.2, 1.0)
                db.commit()
        
        funnel_analytics.track_event("offer_clicked", user_id, db=db, metadata={"offer_id": offer_id})
    except Exception as e:
        logger.error(f"[CRM] Error in on_offer_clicked: {e}")

def on_payment_success(user: User, product_note: str, db: Session, **kwargs):
    """
    Called when a payment is verified.
    Converts lead to customer and updates purchase status.
    """
    try:
        lead = db.query(Lead).filter(Lead.email == user.email).first()
        if lead:
            lead.status = "CONVERTED"
            lead.purchase_status = "success"
            lead.funnel_stage = "payment_success"
            lead.intent_score = 1.0
            db.commit()
            logger.info(f"[CRM] Lead CONVERTED for {user.email}")
        
        funnel_analytics.track_event("payment_success", str(user.id), db=db, metadata={"product": product_note})
    except Exception as e:
        logger.error(f"[CRM] Error in on_payment_success: {e}")
