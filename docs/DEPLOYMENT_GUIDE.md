# 🚀 Production Deployment Guide

Complete step-by-step guide to deploy the Holistic Learning Ecosystem to production.

---

## 📋 Pre-Deployment Checklist

### Required Accounts
- [ ] Cloud hosting account (AWS/Heroku/Vercel)
- [ ] Domain name purchased
- [ ] Email service (SendGrid/AWS SES)
- [ ] Payment gateway accounts (Stripe/Razorpay/Instamojo)
- [ ] Redis hosting (Redis Cloud/AWS ElastiCache)
- [ ] Storage (AWS S3 or similar)
- [ ] Monitoring service (Sentry)

### Code Preparation
- [ ] All tests passing
- [ ] Environment variables documented
- [ ] Database migrations tested
- [ ] Production build tested locally
- [ ] Security audit completed
- [ ] Performance benchmarks met

---

## 🏗️ Infrastructure Setup

### Option 1: AWS (Recommended for Production)

#### 1. EC2 Instance for Backend
```bash
# Launch EC2 instance
# - AMI: Ubuntu 22.04 LTS
# - Instance type: t3.medium (2 vCPU, 4GB RAM)
# - Storage: 50GB SSD
# - Security group: Open ports 22 (SSH), 80 (HTTP), 443 (HTTPS)

# SSH into instance
ssh -i your-key.pem ubuntu@your-ec2-ip

# Update system
sudo apt update && sudo apt upgrade -y

# Install Python 3.11
sudo apt install python3.11 python3.11-venv python3-pip -y

# Install PostgreSQL
sudo apt install postgresql postgresql-contrib -y

# Install Redis
sudo apt install redis-server -y

# Install Nginx
sudo apt install nginx -y

# Install certbot for SSL
sudo apt install certbot python3-certbot-nginx -y
```

#### 2. RDS for Database
```bash
# Create RDS PostgreSQL instance
# - Engine: PostgreSQL 14
# - Instance class: db.t3.micro (staging) or db.t3.medium (production)
# - Storage: 20GB SSD, enable auto-scaling
# - Multi-AZ: Yes (for production)
# - Backups: Automated daily, 7-day retention
```

#### 3. ElastiCache for Redis
```bash
# Create ElastiCache Redis cluster
# - Engine: Redis 7.x
# - Node type: cache.t3.micro (staging) or cache.t3.small (production)
# - Number of nodes: 1 (staging) or 2+ with replication (production)
```

#### 4. S3 for Storage
```bash
# Create S3 bucket
aws s3 mb s3://your-app-name-storage

# Set bucket policy for public read on certain paths
aws s3api put-bucket-cors --bucket your-app-name-storage --cors-configuration file://cors.json

# Enable versioning
aws s3api put-bucket-versioning --bucket your-app-name-storage --versioning-configuration Status=Enabled
```

**cors.json:**
```json
{
  "CORSRules": [
    {
      "AllowedOrigins": ["https://yourdomain.com"],
      "AllowedMethods": ["GET", "PUT", "POST", "DELETE"],
      "AllowedHeaders": ["*"],
      "MaxAgeSeconds": 3000
    }
  ]
}
```

#### 5. CloudFront CDN
```bash
# Create CloudFront distribution
# - Origin: S3 bucket
# - Viewer Protocol Policy: Redirect HTTP to HTTPS
# - Compress Objects Automatically: Yes
# - Price Class: Use All Edge Locations (or customize)
```

---

### Option 2: Heroku (Quick Setup)

#### Backend Deployment
```bash
# Install Heroku CLI
curl https://cli-assets.heroku.com/install.sh | sh

# Login
heroku login

# Create app
heroku create your-app-name-backend

# Add PostgreSQL
heroku addons:create heroku-postgresql:standard-0

# Add Redis
heroku addons:create heroku-redis:premium-0

# Set environment variables
heroku config:set SECRET_KEY="your-secret-key"
heroku config:set SENDGRID_API_KEY="your-sendgrid-key"
# ... set all other env vars

# Deploy
git push heroku main

# Run migrations
heroku run alembic upgrade head

# Scale dynos
heroku ps:scale web=2:standard-1x
```

#### Frontend Deployment (Vercel)
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy from frontend directory
cd frontend
vercel --prod

# Set environment variables in Vercel dashboard
# NEXT_PUBLIC_API_URL=https://your-backend.herokuapp.com
```

---

## 🔧 Backend Deployment (Detailed)

### 1. Clone and Setup
```bash
# Clone repository
git clone https://github.com/your-repo/eduecosystem.git
cd eduecosystem/backend

# Create virtual environment
python3.11 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### 2. Environment Configuration
Create `.env` file:
```env
# Database
DATABASE_URL=postgresql://user:password@your-rds-endpoint:5432/eduecosystem

# Security
SECRET_KEY=generate-secure-256-bit-key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# Redis
REDIS_URL=redis://your-elasticache-endpoint:6379

# Email
SENDGRID_API_KEY=your-sendgrid-api-key
EMAIL_FROM=noreply@yourdomain.com

# AWS S3
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_S3_BUCKET=your-bucket-name
AWS_REGION=us-east-1

# Payment Gateways
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
RAZORPAY_KEY_ID=rzp_live_...
RAZORPAY_KEY_SECRET=your-secret
INSTAMOJO_API_KEY=your-api-key
INSTAMOJO_AUTH_TOKEN=your-auth-token
INSTAMOJO_ENDPOINT=https://www.instamojo.com/api/1.1/

# Frontend URL
FRONTEND_URL=https://yourdomain.com

# Environment
ENVIRONMENT=production
DEBUG=False
```

### 3. Database Migration
```bash
# Run migrations
alembic upgrade head

# Seed initial data (optional)
python -c "from app.api.api_v1.endpoints.achievements import seed_achievements; seed_achievements()"
```

### 4. Nginx Configuration
```nginx
# /etc/nginx/sites-available/eduecosystem

server {
    listen 80;
    server_name api.yourdomain.com;
    
    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name api.yourdomain.com;
    
    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/api.yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.yourdomain.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    
    # Security Headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    
    # Proxy settings
    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
    
    # Rate limiting
    limit_req_zone $binary_remote_addr zone=api_limit:10m rate=100r/m;
    limit_req zone=api_limit burst=20 nodelay;
    
    # File upload size
    client_max_body_size 100M;
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/eduecosystem /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 5. SSL Certificate
```bash
# Get SSL certificate from Let's Encrypt
sudo certbot --nginx -d api.yourdomain.com

# Auto-renewal (already set up by certbot)
sudo certbot renew --dry-run
```

### 6. Systemd Service
Create `/etc/systemd/system/eduecosystem.service`:
```ini
[Unit]
Description=EduEcosystem FastAPI Application
After=network.target

[Service]
Type=notify
User=ubuntu
Group=ubuntu
WorkingDirectory=/home/ubuntu/eduecosystem/backend
Environment="PATH=/home/ubuntu/eduecosystem/backend/venv/bin"
ExecStart=/home/ubuntu/eduecosystem/backend/venv/bin/gunicorn app.main:app \
    --workers 4 \
    --worker-class uvicorn.workers.UvicornWorker \
    --bind 0.0.0.0:8000 \
    --timeout 120 \
    --access-logfile /var/log/eduecosystem/access.log \
    --error-logfile /var/log/eduecosystem/error.log

Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
```

Start service:
```bash
# Create log directory
sudo mkdir -p /var/log/eduecosystem
sudo chown ubuntu:ubuntu /var/log/eduecosystem

# Enable and start service
sudo systemctl daemon-reload
sudo systemctl enable eduecosystem
sudo systemctl start eduecosystem
sudo systemctl status eduecosystem
```

---

## 🎨 Frontend Deployment

### Option 1: Vercel (Recommended)

```bash
cd frontend

# Install dependencies
npm install

# Build to test
npm run build

# Deploy to Vercel
vercel --prod

# Set environment variables in Vercel dashboard:
# - NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

### Option 2: AWS S3 + CloudFront

```bash
cd frontend

# Build for production
npm run build

# Install AWS CLI
pip install awscli

# Configure AWS
aws configure

# Sync build to S3
aws s3 sync out/ s3://your-frontend-bucket/ --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### Option 3: Self-Hosted (Nginx)

```bash
# Build
cd frontend
npm run build

# Copy build to server
scp -r out/ user@server:/var/www/eduecosystem/

# Nginx config
server {
    listen 443 ssl http2;
    server_name yourdomain.com;
    
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    
    root /var/www/eduecosystem;
    index index.html;
    
    location / {
        try_files $uri $uri.html $uri/ /index.html;
    }
    
    # Cache static assets
    location /_next/static {
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
    
    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
}
```

---

## 📱 Mobile App Deployment

### iOS (TestFlight)

```bash
cd mobile

# Install EAS CLI
npm install -g eas-cli

# Login
eas login

# Configure
eas build:configure

# Build for iOS
eas build --platform ios --profile production

# Submit to TestFlight
eas submit --platform ios
```

### Android (Google Play)

```bash
# Build AAB for Play Store
eas build --platform android --profile production

# Submit to Google Play
eas submit --platform android
```

---

## 🔒 Security Hardening

### 1. Firewall Configuration
```bash
# UFW firewall
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

### 2. Fail2Ban
```bash
# Install
sudo apt install fail2ban -y

# Configure
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local

# Edit /etc/fail2ban/jail.local
[sshd]
enabled = true
maxretry = 3
bantime = 3600

[nginx-limit-req]
enabled = true
filter = nginx-limit-req
logpath = /var/log/nginx/error.log

# Restart
sudo systemctl restart fail2ban
```

### 3. Update SECRET_KEY
```bash
# Generate secure key
python -c "import secrets; print(secrets.token_urlsafe(32))"

# Update in .env
SECRET_KEY=generated-key-here
```

### 4. Database Security
```sql
-- Create application user with limited permissions
CREATE USER edueco_app WITH PASSWORD 'strong-password';
GRANT CONNECT ON DATABASE eduecosystem TO edueco_app;
GRANT USAGE ON SCHEMA public TO edueco_app;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO edueco_app;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO edueco_app;
```

---

## 📊 Monitoring Setup

### 1. Sentry for Error Tracking

```python
# backend/app/main.py
import sentry_sdk
from sentry_sdk.integrations.fastapi import FastApiIntegration

sentry_sdk.init(
    dsn="your-sentry-dsn",
    integrations=[FastApiIntegration()],
    traces_sample_rate=0.1,
    environment="production"
)
```

Frontend:
```typescript
// frontend/src/app/layout.tsx
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "your-sentry-dsn",
  environment: "production",
  tracesSampleRate: 0.1,
});
```

### 2. Uptime Monitoring
- Use UptimeRobot or Pingdom
- Monitor: `https://api.yourdomain.com/api/v1/health`
- Alert if down > 5 minutes

### 3. Performance Monitoring
```bash
# New Relic integration
pip install newrelic

# Configure
newrelic-admin generate-config YOUR_LICENSE_KEY newrelic.ini

# Update systemd service
ExecStart=newrelic-admin run-program /path/to/uvicorn ...
```

---

## 🔄 CI/CD Setup (GitHub Actions)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run tests
        run: |
          cd backend
          pip install -r requirements.txt
          pytest tests/
  
  deploy-backend:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to server
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd /home/ubuntu/eduecosystem/backend
            git pull
            source venv/bin/activate
            pip install -r requirements.txt
            alembic upgrade head
            sudo systemctl restart eduecosystem
  
  deploy-frontend:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Vercel
        run: |
          cd frontend
          npm install
          vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
```

---

## 📋 Post-Deployment Checklist

### Immediate (Day 1)
- [ ] SSL certificates working
- [ ] All pages load correctly
- [ ] API endpoints responding
- [ ] Database migrations successful
- [ ] File uploads working (S3)
- [ ] Email sending functional
- [ ] Payment gateways tested
- [ ] User registration works
- [ ] Login/logout functional
- [ ] Mobile app connects to API

### Week 1
- [ ] Monitor error rates (Sentry)
- [ ] Check performance metrics
- [ ] Review server resource usage
- [ ] Test backup restoration
- [ ] Verify automated backups
- [ ] Check email deliverability
- [ ] Monitor API response times
- [ ] Review security logs

### Ongoing
- [ ] Weekly database backups verified
- [ ] Monthly security updates
- [ ] Quarterly penetration testing
- [ ] Performance optimization reviews
- [ ] Cost optimization reviews

---

## 🐛 Troubleshooting

### Common Issues

**1. 502 Bad Gateway**
```bash
# Check if backend is running
sudo systemctl status eduecosystem

# Check nginx config
sudo nginx -t

# Check logs
sudo tail -f /var/log/nginx/error.log
sudo journalctl -u eduecosystem -f
```

**2. Database Connection Errors**
```bash
# Test connection
psql -h your-rds-endpoint -U postgres -d eduecosystem

# Check connection pool
# In app logs, look for "connection pool exhausted"
# Increase pool size in database.py
```

**3. Redis Connection Errors**
```bash
# Test Redis
redis-cli -h your-elasticache-endpoint ping

# Check if Redis is accessible from backend server
telnet your-elasticache-endpoint 6379
```

**4. File Upload Failing**
```bash
# Check S3 permissions
aws s3 ls s3://your-bucket-name

# Verify IAM user has permissions:
# - s3:PutObject
# - s3:GetObject
# - s3:DeleteObject
```

**5. Performance Issues**
```bash
# Check database slow queries
# In PostgreSQL:
SELECT query, calls, total_time, mean_time
FROM pg_stat_statements
ORDER BY mean_time DESC
LIMIT 10;

# Check Redis cache hit rate
redis-cli info stats
# Look for keyspace_hits vs keyspace_misses
```

---

## 📞 Support Contacts

- **Domain Issues:** Your domain registrar
- **AWS Issues:** AWS Support
- **Heroku Issues:** Heroku Support  
- **Payment Issues:** Stripe/Razorpay/Instamojo support
- **Email Issues:** SendGrid/AWS SES support

---

## 🎉 Congratulations!

Your Holistic Learning Ecosystem is now live in production!

**Next Steps:**
1. Announce launch to users
2. Monitor closely for 48 hours
3. Gather user feedback
4. Plan iterative improvements
5. Scale as needed

---

**Deployment Guide Version:** 1.0  
**Last Updated:** November 25, 2024
