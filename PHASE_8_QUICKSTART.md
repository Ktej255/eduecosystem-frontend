# Phase 8 Quick Start Guide

## What's Ready

✅ **All Phase 8 database tables are present and configured**
- 20 tables verified
- 12 languages pre-loaded
- Database schema matches specification

## Subscription Plans Created

Three tiers available:

| Plan | Monthly | Yearly | Trial | Features |
|------|---------|--------|-------|----------|
| **Basic** | $9.99 | $99 | 7 days | 5 courses, 2 live classes/month |
| **Pro** | $29.99 | $299 | 14 days | Unlimited courses, 10 live classes/month |
| **Premium** | $49.99 | $499 | 30 days | Everything + 1-on-1 sessions |

## API Endpoints

### i18n (Internationalization)
```bash
# Get all languages
GET /api/v1/languages

# Get translations for a language
GET /api/v1/translations?language_code=en

# Get user language preferences
GET /api/v1/language-preferences
```

### Marketplace
```bash
# Get subscription plans
GET /api/v1/subscriptions/plans

# Subscribe to a plan
POST /api/v1/subscriptions/subscribe
Body: { "plan_id": 1, "billing_cycle": "monthly" }

# Get user subscription
GET /api/v1/subscriptions/my-subscription
```

### Affiliates
```bash
# Get affiliate dashboard (requires auth)
GET /api/v1/affiliates/dashboard

# Create affiliate partner
POST /api/v1/affiliates/partners

# Track affiliate click
POST /api/v1/affiliates/clicks
```

## Testing Locally

### 1. Start Backend
```bash
cd backend
uvicorn app.main:app --reload
# Server: http://localhost:8000
# API Docs: http://localhost:8000/docs
```

### 2. Start Frontend
```bash
cd frontend
npm run dev
# Frontend: http://localhost:3000
# Pricing: http://localhost:3000/pricing
```

### 3. Test Pricing Page
1. Navigate to `http://localhost:3000/pricing`
2. Should display 3 subscription plans
3. Toggle between monthly/yearly billing
4. Click "Subscribe Now" to test flow

## Stripe Integration

To enable payments:

1. Get Stripe API keys from [https://dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)

2. Add to `backend/.env`:
```env
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

3. Restart backend server

## Language Support

Pre-loaded languages (12):
- 🇺🇸 English (en)
- 🇪🇸 Spanish (es)
- 🇫🇷 French (fr)
- 🇩🇪 German (de)
- 🇸🇦 Arabic (ar) - RTL
- 🇮🇳 Hindi (hi)
- 🇨🇳 Chinese (zh)
- 🇯🇵 Japanese (ja)
- 🇰🇷 Korean (ko)
- 🇵🇹 Portuguese (pt)
- 🇷🇺 Russian (ru)
- 🇮🇹 Italian (it)

## Revenue Projections

Based on [PHASE_8_FINAL_STATUS.md](./PHASE_8_FINAL_STATUS.md):

- **Conservative** (100 instructors): $175K/year
- **Moderate** (500 instructors): $1.7M/year
- **Optimistic** (1,000 instructors): $7M/year

Platform takes 30%, instructors keep 70%.

## Troubleshooting

### Subscription plans not showing
```bash
# Run seed script
python seed_subscription_plans.py
```

### Import errors
```bash
# Ensure virtual environment is activated
cd backend
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
```

### Database issues
```bash
# Check database tables
python verify_phase8.py
```

## Next Steps

1. ✅ Database ready (all tables exist)
2. ✅ Subscription plans created
3. ⏳ Configure Stripe (get API keys)
4. ⏳ Test payment flow
5. ⏳ Add UI translations
6. ⏳ Launch affiliate program

## Documentation

- [Walkthrough](./walkthrough.md) - Full integration details
- [Phase 8 Final Status](./PHASE_8_FINAL_STATUS.md) - Complete feature overview
- [Marketplace Walkthrough](./PHASE_8.3_MARKETPLACE_WALKTHROUGH.md) - Marketplace details
