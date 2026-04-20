"""
Lead Interaction Model — Multi-Tenant CRM

Unified interaction log for all touchpoints with a lead.
Replaces scattered logging across CallLog, FieldActivity, EmailLog.
Every row is scoped to a tenant_id for absolute data isolation.
"""

from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey, JSON, Enum
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import enum
from app.db.session import Base


class InteractionType(str, enum.Enum):
    CALL = "call"
    EMAIL = "email"
    WHATSAPP = "whatsapp"
    SMS = "sms"
    MEETING = "meeting"
    FORM_SUBMIT = "form_submit"
    PAGE_VIEW = "page_view"
    PAYMENT = "payment"
    NOTE = "note"
    SYSTEM = "system"
    VOICE_NOTE = "voice_note"


class InteractionChannel(str, enum.Enum):
    PHONE = "phone"
    EMAIL = "email"
    WHATSAPP = "whatsapp"
    WEBSITE = "website"
    IN_PERSON = "in_person"
    API = "api"


class InteractionDirection(str, enum.Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"


class LeadInteraction(Base):
    """
    Unified interaction log — every touchpoint with a lead in one table.
    tenant_id ensures multi-tenant data isolation.
    """
    __tablename__ = "lead_interactions"

    id = Column(Integer, primary_key=True, index=True)

    # ── Multi-Tenant Isolation ──
    tenant_id = Column(
        Integer, ForeignKey("crm_tenants.id", ondelete="CASCADE"),
        nullable=True, index=True
    )

    # Lead reference
    lead_id = Column(
        Integer, ForeignKey("leads.id", ondelete="CASCADE"),
        nullable=False, index=True
    )

    # Interaction classification
    interaction_type = Column(
        Enum(InteractionType), nullable=False, index=True
    )
    channel = Column(Enum(InteractionChannel), nullable=True)
    direction = Column(Enum(InteractionDirection), default=InteractionDirection.OUTBOUND)

    # Content
    summary = Column(Text, nullable=False)  # Human-readable summary
    metadata_json = Column(JSON, default={})
    """
    Flexible payload depending on interaction_type:
    - call: {"duration_seconds": 180, "outcome": "interested"}
    - email: {"subject": "Welcome", "opened": true, "clicked": false}
    - whatsapp: {"template_name": "onboarding_v1", "delivered": true}
    - form_submit: {"form_name": "contact_us", "page_url": "/landing"}
    - page_view: {"page_url": "/courses/upsc", "time_on_page_seconds": 120}
    - payment: {"amount": 4999, "gateway": "cashfree", "gateway_payment_id": "pay_xxx"}
    """

    # Who performed the interaction
    performed_by_id = Column(
        Integer, ForeignKey("users.id", ondelete="SET NULL"),
        nullable=True, index=True
    )

    # Timestamps
    occurred_at = Column(DateTime(timezone=True), nullable=True)  # When it actually happened
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    # Relationships
    lead = relationship("Lead")
    crm_tenant = relationship("CRMTenant", foreign_keys=[tenant_id])
    performed_by = relationship("User", foreign_keys=[performed_by_id])