# 🚀 Deployment Guide

## Quick Deploy Checklist

### Pre-Deployment

- [ ] All tests passing (backend)
- [ ] Environment variables configured
- [ ] Database migrations ready
- [ ] SSL certificates obtained
- [ ] Domain name configured
- [ ] CDN setup (optional)

---

## Backend Deployment (FastAPI)

### Option 1: Traditional Server (VPS/EC2)

```bash
# 1. Clone repository
git clone <repo-url>
cd eduecosystem/backend

# 2. Install dependencies
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# 3. Set environment variables
cp .env.example .env
nano .env  # Edit with production values

# 4. Run migrations
alembic upgrade head

# 5. Start with Gunicorn
gunicorn app.main:app -w 4 -k uvicorn.workers.UvicornWorker -b 0.0.0.0:8000
```

### Option 2: Docker

```dockerfile
# Dockerfile
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["gunicorn", "app.main:app", "-w", "4", "-k", "uvicorn.workers.UvicornWorker", "-b", "0.0.0.0:8000"]
```

```bash
# Build and run
docker build -t eduecosystem-backend .
docker run -p 8000:8000 --env-file .env eduecosystem-backend
```

### Option 3: Cloud Platforms

**Heroku**
```bash
# Install Heroku CLI
heroku create eduecosystem-api
heroku addons:create heroku-postgresql:hobby-dev
heroku addons:create heroku-redis:hobby-dev
git push heroku main
```

**Railway**
- Connect GitHub repo
- Add PostgreSQL database
- Set environment variables
- Deploy automatically

**Render**
- Connect repo
- Set build command: `pip install -r requirements.txt`
- Set start command: `gunicorn app.main:app -w 4 -k uvicorn.workers.UvicornWorker`

---

## Frontend Deployment (Next.js)

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend
vercel

# Production deploy
vercel --prod
```

### Option 2: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=.next
```

### Option 3: Self-Hosted

```bash
# Build for production
npm run build

# Start production server
npm start
```

With Nginx reverse proxy:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Mobile Deployment

### iOS App Store

```bash
# 1. Build for iOS
eas build --platform ios

# 2. Submit to App Store
eas submit --platform ios
```

### Google Play Store

```bash
# 1. Build for Android
eas build --platform android

# 2. Submit to Play Store
eas submit --platform android
```

### Expo Updates (OTA)

```bash
# Publish updates without app store review
eas update --branch production
```

---

## Database Migration

### Production Database Setup

```bash
# PostgreSQL setup
sudo apt install postgresql

# Create database
sudo -u postgres psql
CREATE DATABASE eduecosystem;
CREATE USER eduuser WITH PASSWORD 'securepassword';
GRANT ALL PRIVILEGES ON DATABASE eduecosystem TO eduuser;
\q

# Update DATABASE_URL in .env
DATABASE_URL=postgresql://eduuser:securepassword@localhost/eduecosystem
```

### Run Migrations

```bash
cd backend
alembic upgrade head
```

---

## Environment Variables

### Backend Production (.env)

```env
# Database
DATABASE_URL=postgresql://user:pass@host:5432/eduecosystem

# Security
SECRET_KEY=<generate-strong-secret-key>
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=1440

# Redis
REDIS_URL=redis://user:pass@host:6379

# AWS S3
AWS_ACCESS_KEY_ID=<your-access-key>
AWS_SECRET_ACCESS_KEY=<your-secret-key>
AWS_S3_BUCKET=eduecosystem-production
AWS_REGION=us-east-1

# Email (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=<your-email>
SMTP_PASSWORD=<app-password>

# Virus Scanning
ENABLE_VIRUS_SCAN=true
CLAMAV_HOST=localhost
CLAMAV_PORT=3310
```

### Frontend Production (.env.local)

```env
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

### Mobile Production

```env
EXPO_PUBLIC_API_URL=https://api.yourdomain.com
```

---

## SSL/HTTPS Setup

### Using Let's Encrypt (Free)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal (runs automatically)
sudo certbot renew --dry-run
```

---

## Performance Optimization

### Backend

```python
# Add to main.py
from fastapi.middleware.gzip import GZipMiddleware

app.add_middleware(GZipMiddleware, minimum_size=1000)
```

### Frontend

```javascript
// next.config.js
module.exports = {
  compress: true,
  images: {
    domains: ['your-cdn.com'],
  },
  swcMinify: true,
}
```

### CDN Setup (Cloudflare)

1. Add site to Cloudflare
2. Update nameservers
3. Enable caching rules
4. Enable auto-minify
5. Enable Brotli compression

---

## Monitoring & Logging

### Application Monitoring

**Sentry Setup**
```bash
pip install sentry-sdk[fastapi]
npm install @sentry/nextjs
```

```python
# Backend
import sentry_sdk
sentry_sdk.init(dsn="your-dsn")
```

```javascript
// Frontend
import * as Sentry from "@sentry/nextjs";
Sentry.init({ dsn: "your-dsn" });
```

### Server Monitoring

**Uptime Monitoring**
- UptimeRobot (free)
- Pingdom
- Better Uptime

**Performance Monitoring**
- New Relic
- Datadog
- Prometheus + Grafana

---

## Backup Strategy

### Database Backups

```bash
# Daily backup script
#!/bin/bash
pg_dump eduecosystem > backup_$(date +%Y%m%d).sql
aws s3 cp backup_$(date +%Y%m%d).sql s3://backups/
```

### Automated Backups

```bash
# Add to crontab
0 2 * * * /path/to/backup.sh
```

---

## CI/CD Pipeline

### GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run tests
        run: |
          cd backend
          pip install -r requirements.txt
          pytest

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to production
        run: |
          # Your deployment commands
```

---

## Security Checklist

- [ ] HTTPS enabled
- [ ] Environment variables secured
- [ ] SQL injection prevention (SQLAlchemy ORM)
- [ ] XSS prevention (React escaping)
- [ ] CSRF tokens implemented
- [ ] Rate limiting enabled
- [ ] File upload scanning
- [ ] Strong password policy
- [ ] JWT token expiration
- [ ] CORS properly configured

---

## Post-Deployment

### 1. Verify Deployment

```bash
# Test API
curl https://api.yourdomain.com/health

# Test Frontend
curl https://yourdomain.com
```

### 2. Monitor Logs

```bash
# Backend logs
tail -f /var/log/app/backend.log

# Frontend logs (Vercel)
vercel logs
```

### 3. Performance Testing

```bash
# Load testing with k6
k6 run loadtest.js
```

---

## Rollback Procedure

### Quick Rollback

```bash
# Vercel
vercel rollback

# Heroku
heroku releases:rollback

# Docker
docker pull eduecosystem:previous-tag
docker-compose up -d
```

---

## Scaling Strategy

### Horizontal Scaling

**Backend**
- Multiple Gunicorn workers
- Load balancer (Nginx/HAProxy)
- Multiple server instances

**Frontend**
- CDN (Cloudflare/CloudFront)
- Edge caching
- Multiple regions (Vercel)

### Database Scaling

- Read replicas
- Connection pooling
- Query optimization
- Caching layer (Redis)

---

## Cost Estimation

### Small Scale (< 1,000 users)

| Service | Provider | Cost/Month |
|---------|----------|------------|
| Backend | Railway | $5-20 |
| Frontend | Vercel | Free |
| Database | Railway | $10 |
| Storage | AWS S3 | $5 |
| **Total** | | **$20-35/mo** |

### Medium Scale (1,000-10,000 users)

| Service | Provider | Cost/Month |
|---------|----------|------------|
| Backend | AWS EC2 | $50 |
| Frontend | Vercel Pro | $20 |
| Database | AWS RDS | $50 |
| Storage | AWS S3 | $20 |
| CDN | Cloudflare | $20 |
| **Total** | | **$160/mo** |

---

## Support Resources

- **Documentation:** `/docs`
- **Status Page:** status.yourdomain.com
- **Support Email:** support@yourdomain.com
- **Community:** Discord/Slack

---

## Maintenance Schedule

- **Daily:** Automated backups
- **Weekly:** Security updates
- **Monthly:** Performance review
- **Quarterly:** Feature updates

---

**Deployment Status:** Ready ✅

Last Updated: November 2025
