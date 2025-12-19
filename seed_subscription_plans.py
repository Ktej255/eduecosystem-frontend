"""
Seed Subscription Plans

Creates default subscription plans for the marketplace.
Run this script to populate the subscription_plans table.
"""

import sys
import os

# Add the backend directory to the path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'backend'))

from sqlalchemy.orm import Session
from app.db.session import SessionLocal
from app.models.subscription import SubscriptionPlan
import json

def create_subscription_plans():
    """Create default subscription plans"""
    db = SessionLocal()
    
    try:
        # Check if plans already exist
        existing_plans = db.query(SubscriptionPlan).count()
        if existing_plans > 0:
            print(f"⚠️  {existing_plans} subscription plans already exist. Skipping creation.")
            return
        
        plans = [
            {
                "name": "Basic",
                "slug": "basic",
                "description": "Perfect for individual learners getting started",
                "short_description": "Access to all free courses and basic features",
                "monthly_price": 9.99,
                "yearly_price": 99.00,
                "currency": "USD",
                "trial_days": 7,
                "access_level": "basic",
                "max_courses": 5,
                "max_live_classes": 2,
                "features": json.dumps([
                    "Access to 5 courses",
                    "2 live classes per month",
                    "Mobile app access",
                    "Email support",
                    "Course certificates"
                ]),
                "is_active": True,
                "is_featured": False,
                "is_popular": False,
                "display_order": 1
            },
            {
                "name": "Pro",
                "slug": "pro",
                "description": "For serious learners who want unlimited access",
                "short_description": "Unlimited courses and priority support",
                "monthly_price": 29.99,
                "yearly_price": 299.00,
                "currency": "USD",
                "trial_days": 14,
                "access_level": "pro",
                "max_courses": None,  # Unlimited
                "max_live_classes": 10,
                "features": json.dumps([
                    "Unlimited course access",
                    "10 live classes per month",
                    "Priority email support",
                    "Downloadable resources",
                    "Course certificates",
                    "AI-powered study assistant",
                    "Peer review access"
                ]),
                "is_active": True,
                "is_featured": False,
                "is_popular": True,
                "display_order": 2
            },
            {
                "name": "Premium",
                "slug": "premium",
                "description": "Enterprise-grade features for professionals",
                "short_description": "Everything in Pro plus exclusive benefits",
                "monthly_price": 49.99,
                "yearly_price": 499.00,
                "currency": "USD",
                "trial_days": 30,
                "access_level": "premium",
                "max_courses": None,  # Unlimited
                "max_live_classes": None,  # Unlimited
                "features": json.dumps([
                    "Everything in Pro",
                    "Unlimited live classes",
                    "1-on-1 instructor sessions (2 per month)",
                    "Priority live chat support",
                    "Custom learning paths",
                    "Advanced analytics",
                    "Career guidance",
                    "Networking events access"
                ]),
                "is_active": True,
                "is_featured": True,
                "is_popular": False,
                "display_order": 3
            }
        ]
        
        print("Creating subscription plans...")
        for plan_data in plans:
            plan = SubscriptionPlan(**plan_data)
            db.add(plan)
            print(f"  ✓ {plan_data['name']}: ${plan_data['monthly_price']}/mo, ${plan_data['yearly_price']}/yr")
        
        db.commit()
        print(f"\n✅ Successfully created {len(plans)} subscription plans!")
        
        # Verify creation
        total_plans = db.query(SubscriptionPlan).count()
        print(f"📊 Total subscription plans in database: {total_plans}")
        
    except Exception as e:
        print(f"❌ Error creating subscription plans: {e}")
        db.rollback()
        raise
    finally:
        db.close()

if __name__ == "__main__":
    print("=" * 60)
    print("SUBSCRIPTION PLANS SEED SCRIPT")
    print("=" * 60)
    print()
    
    create_subscription_plans()
    
    print()
    print("=" * 60)
    print("Next Steps:")
    print("  1. Start the backend server: uvicorn app.main:app --reload")
    print("  2. Test API: curl http://localhost:8000/api/v1/subscriptions/plans")
    print("  3. View pricing page: http://localhost:3000/pricing")
    print("=" * 60)
