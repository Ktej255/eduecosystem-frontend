import time
from decimal import Decimal
from datetime import datetime, timedelta
import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.db.base import Base
from app.models.marketplace import InstructorPaymentInfo, InstructorPayout, RevenueShare
from app.services.payout_service import PayoutService

@pytest.fixture
def db_session():
    engine = create_engine("sqlite:///:memory:")
    Base.metadata.create_all(engine)
    SessionLocal = sessionmaker(bind=engine)
    db = SessionLocal()

    # Populate data: Increase to make the N+1 problem more apparent
    for i in range(500):
        # verified instructors with monthly payouts
        payment_info = InstructorPaymentInfo(
            instructor_id=i,
            verified=True,
            payout_frequency="monthly",
            minimum_payout_amount=Decimal("50.00"),
            stripe_account_id=f"acct_{i}"
        )
        db.add(payment_info)

        # Add 10 revenue shares per instructor
        for j in range(10):
            share = RevenueShare(
                instructor_id=i,
                course_id=j,
                platform_fee_percentage=Decimal("30.00"),
                instructor_percentage=Decimal("70.00"),
                total_revenue=Decimal("20.00"),
                platform_earnings=Decimal("6.00"),
                instructor_earnings=Decimal("14.00"),
                pending_payout=Decimal("10.00"),  # Each has 100.00 total pending
            )
            db.add(share)

        # Add a last payout (older than 30 days so it processes)
        payout = InstructorPayout(
            instructor_id=i,
            amount=Decimal("100.00"),
            status="completed",
            payment_method="stripe",
            completed_at=datetime.utcnow() - timedelta(days=35)
        )
        db.add(payout)

    db.commit()

    yield db
    db.close()

def test_benchmark_process_automatic_payouts(db_session, benchmark):
    def run_process():
        # Using a fresh query context inside the function
        PayoutService.process_automatic_payouts(db_session)

    benchmark(run_process)

if __name__ == "__main__":
    pass
