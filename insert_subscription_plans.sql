-- Insert Subscription Plans (Phase 8 Marketplace)
-- Run this SQL script to populate subscription_plans table

-- Basic Plan
INSERT INTO subscription_plans (
    name, slug, description, short_description,
    monthly_price, yearly_price, currency, trial_days,
    access_level, max_courses, max_live_classes,
    features, is_active, is_featured, is_popular, display_order,
    created_at
) VALUES (
    'Basic',
    'basic',
    'Perfect for individual learners getting started',
    'Access to all free courses and basic features',
    9.99, 99.00, 'USD', 7,
    'basic', 5, 2,
    '["Access to 5 courses", "2 live classes per month", "Mobile app access", "Email support", "Course certificates"]',
    1, 0, 0, 1,
    CURRENT_TIMESTAMP
);

-- Pro Plan
INSERT INTO subscription_plans (
    name, slug, description, short_description,
    monthly_price, yearly_price, currency, trial_days,
    access_level, max_courses, max_live_classes,
    features, is_active, is_featured, is_popular, display_order,
    created_at
) VALUES (
    'Pro',
    'pro',
    'For serious learners who want unlimited access',
    'Unlimited courses and priority support',
    29.99, 299.00, 'USD', 14,
    'pro', NULL, 10,
    '["Unlimited course access", "10 live classes per month", "Priority email support", "Downloadable resources", "Course certificates", "AI-powered study assistant", "Peer review access"]',
    1, 0, 1, 2,
    CURRENT_TIMESTAMP
);

-- Premium Plan
INSERT INTO subscription_plans (
    name, slug, description, short_description,
    monthly_price, yearly_price, currency, trial_days,
    access_level, max_courses, max_live_classes,
    features, is_active, is_featured, is_popular, display_order,
    created_at
) VALUES (
    'Premium',
    'premium',
    'Enterprise-grade features for professionals',
    'Everything in Pro plus exclusive benefits',
    49.99, 499.00, 'USD', 30,
    'premium', NULL, NULL,
    '["Everything in Pro", "Unlimited live classes", "1-on-1 instructor sessions (2 per month)", "Priority live chat support", "Custom learning paths", "Advanced analytics", "Career guidance", "Networking events access"]',
    1, 1, 0, 3,
    CURRENT_TIMESTAMP
);

-- Verify insertion
SELECT 
    name, 
    monthly_price, 
    yearly_price, 
    trial_days,
    is_active,
    is_popular,
    is_featured
FROM subscription_plans
ORDER BY display_order;
