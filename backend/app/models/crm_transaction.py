"""
CRM Transaction Model — Multi-Tenant Revenue Tracking

Tracks all financial transactions across sub-brands (Sarit Classes, Sarit Wisdom).
Every row is scoped to tenant_id for absolute data isolation.
Links leads to revenue for the CEO Dashboard.
"""

from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey, Numeric, Enum
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import enum
from app.db.session import Base


class TransactionType(str, enum.Enum):
    COURSE_PURCHASE = "course_purchase"
    SUBSCRIPTION = "subscription"
    BUNDLE = "bundle"
    GRAPOTHERAPY_SESSION = "graphotherapy_session"
    EVENT_TICKET = "event_ticket"
    MEMBERSHIP = "membership"
    REFUND = "refund"
    MANUAL = "manual"


class TransactionStatus(str, enum.Enum):
    PENDING = "pending"
    SUCCEEDED = "succeeded"
    FAILED = "failed"
    REFUNDED = "refunded"


class ProductType(str, enum.Enum):
    COURSE = "course"
    BUNDLE = "bundle"
    MEMBERSHIP = "membership"
    GRAPOTHERAPY_PACK = "graphotherapy_pack"
    EVENT = "event"


class CRMTransaction(Base):
    """
    Financial transaction linked to a lead — the revenue backbone of the CEO Dashboard.
    tenant_id ensures multi-tenant data isolation.
    """
    __tablename__ = "crm_transactions"

    id = Column(Integer, primary_key=True, index=True)

    # ── Multi-Tenant Isolation ──
    tenant_id = Column(
        Integer, ForeignKey("crm_tenants.id", ondelete="CASCADE"),
        nullable=True, index=True
    )

    # Lead reference (the lead that generated this transaction)
    lead_id = Column(
        Integer, ForeignKey("leads.id", ondelete="CASCADE"),
        nullable=False, index=True
    )

    # User reference (if the lead converted to a registered user)
    user_id = Column(
        Integer, ForeignKey("users.id", ondelete="SET NULL"),
        nullable=True, index=True
    )

    # Transaction classification
    transaction_type = Column(
        Enum(TransactionType), nullable=False, index=True
    )
    status = Column(
        Enum(TransactionStatus), default=TransactionStatus.PENDING, nullable=False, index=True
    )

    # Financial
    amount = Column(Numeric(12, 2), nullable=False, default=0.00)
    currency = Column(String(3), default="INR")

    # Payment gateway reconciliation
    payment_gateway = Column(String(50), nullable=True)  # 'cashfree', 'instamojo', 'razorpay', 'manual'
    gateway_payment_id = Column(String(255), nullable=True, index=True)

    # Product details (denormalized for dashboard query speed)
    product_title = Column(String(500), nullable=True)
    product_id = Column(Integer, nullable=True)
    product_type = Column(Enum(ProductType), nullable=True)

    # Invoice
    invoice_url = Column(String(1000), nullable=True)

    # Notes
    notes = Column(Text, nullable=True)

    # Timestamps
    created_at = Column(DateTime(timezone=True), server_default=func.now(), index=True)
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # Relationships
    lead = relationship("Lead")
    crm_tenant = relationship("CRMTenant", foreign_keys=[tenant_id])
    user = relationship("User", foreign_keys=[user_id])