# Deployment Guide
## Holistic Learning Ecosystem

This guide covers deploying the application to production environments.

---

## Prerequisites

- Docker & Docker Compose installed
- PostgreSQL database (managed or self-hosted)
- Domain name with SSL certificate
- Server with at least:
  - 2 CPU cores
  - 4GB RAM
  - 20GB storage

---

## Environment Setup

### 1. Backend Environment Variables

Create `backend/.env` file:

```env
# Database
DATABASE_URL=postgresql://username:password@db-host:5432/eduecosystem

# Security
SECRET_KEY=generate-a-strong-random-secret-key-here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# Environment
ENVIRONMENT=production

# CORS
ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com

# API
API_V1_PREFIX=/api/v1
PROJECT_NAME=Holistic Learning Ecosystem

# File Upload
MAX_UPLOAD_SIZE=10485760
UPLOAD_DIR=/app/uploads

# Logging
LOG_LEVEL=WARNING

# Optional Services
SENTRY_DSN=your-sentry-dsn-if-using
REDIS_URL=redis://redis:6379/0
```

### 2. Frontend Environment Variables

Create `frontend/.env.production`:

```env
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
NEXT_PUBLIC_ENVIRONMENT=production
```

---

## Database Setup

### PostgreSQL Installation

#### Option 1: Managed Database (Recommended)
- AWS RDS
- Google Cloud SQL
- DigitalOcean Managed Databases
- Heroku Postgres

#### Option 2: Self-Hosted

```bash
# Install PostgreSQL
sudo apt update
sudo apt install postgresql postgresql-contrib

# Create database and user
sudo -u postgres psql
CREATE DATABASE eduecosystem;
CREATE USER eduuser WITH PASSWORD 'secure_password';
GRANT ALL PRIVILEGES ON DATABASE eduecosystem TO eduuser;
\q
```

### Run Migrations

```bash
cd backend
source venv/bin/activate  # Activate virtual environment

# Install Alembic if not installed
pip install alembic

# Run migrations
alembic upgrade head
```

---

## Docker Deployment

### 1. Build Images

```bash
# Backend
cd backend
docker build -t eduecosystem-backend:latest .

# Frontend
cd ../frontend  
docker build -t eduecosystem-frontend:latest .
```

### 2. Docker Compose Production

Use `docker-compose.prod.yml`:

```bash
# Start all services
docker-compose -f docker-compose.prod.yml up -d

# View logs
docker-compose -f docker-compose.prod.yml logs -f

# Stop services
docker-compose -f docker-compose.prod.yml down
```

### 3. Verify Deployment

```bash
# Check running containers
docker ps

# Test backend
curl https://api.yourdomain.com/health

# Test frontend
curl https://yourdomain.com
```

---

## Nginx Configuration

### Setup Reverse Proxy

Create `/etc/nginx/sites-available/eduecosystem`:

```nginx
# API Backend
server {
    listen 80;
    server_name api.yourdomain.com;

    location / {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# Frontend
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/eduecosystem /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## SSL/HTTPS Setup

### Using Let's Encrypt (Certbot)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Obtain certificates
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com -d api.yourdomain.com

# Auto-renewal
sudo certbot renew --dry-run
```

Certbot will automatically update Nginx config for HTTPS.

---

## Monitoring & Logging

### Application Logs

```bash
# View Docker logs
docker-compose -f docker-compose.prod.yml logs -f backend
docker-compose -f docker-compose.prod.yml logs -f frontend

# View Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Optional: Sentry Integration

1. Create a Sentry project at sentry.io
2. Add `SENTRY_DSN` to backend `.env`
3. Errors will be automatically tracked

---

## Backup Strategy

### Database Backups

Automated daily backup script:

```bash
#!/bin/bash
# backup-db.sh

BACKUP_DIR="/backups/postgres"
DATE=$(date +%Y%m%d_%H%M%S)
mkdir -p $BACKUP_DIR

pg_dump -h localhost -U eduuser eduecosystem > $BACKUP_DIR/backup_$DATE.sql

# Keep only last 7 days
find $BACKUP_DIR -name "backup_*.sql" -mtime +7 -delete
```

Add to crontab:
```bash
crontab -e
```

Add line:
```
0 2 * * * /path/to/backup-db.sh
```

### File Backups

Backup uploaded files:
```bash
# Sync to S3 (example)
aws s3 sync /app/uploads s3://your-bucket/uploads --delete
```

---

## Scaling Considerations

### Horizontal Scaling

1. **Load Balancer:** Use Nginx or cloud load balancer
2. **Multiple Backend Instances:** Scale FastAPI with Gunicorn workers
3. **Database:** Use read replicas for heavy read workloads
4. **CDN:** Serve static assets via CloudFlare/AWS CloudFront

### Caching

1. **Redis:** Cache API responses
2. **Database Query Caching:** Use SQLAlchemy query cache
3. **Frontend:** Next.js automatic caching

---

## Platform-Specific Guides

### AWS Deployment

#### Using EC2 + RDS

1. Launch EC2 instance (t2.medium or larger)
2. Create RDS PostgreSQL instance
3. Configure security groups
4. Install Docker on EC2
5. Follow Docker deployment steps above

#### Using ECS (Elastic Container Service)

1. Create ECR repositories for images
2. Push images to ECR
3. Create ECS task definitions
4. Set up ECS service with load balancer
5. Configure auto-scaling

### DigitalOcean Deployment

#### Using Droplets

1. Create Droplet (Ubuntu 22.04, 4GB RAM)
2. Follow standard Docker deployment
3. Use DigitalOcean Managed Database for PostgreSQL
4. Set up DigitalOcean Spaces for file storage

#### Using App Platform

1. Connect GitHub repository
2. Configure build settings
3. Set environment variables
4. Deploy with one click

### Heroku Deployment

#### Backend

```bash
# Create app
heroku create eduecosystem-api

# Add PostgreSQL
heroku addons:create heroku-postgresql:hobby-dev

# Set environment variables
heroku config:set SECRET_KEY=your-secret-key

# Deploy
git push heroku main
```

#### Frontend

```bash
# Create app
heroku create eduecosystem-frontend

# Set environment variables
heroku config:set NEXT_PUBLIC_API_URL=https://eduecosystem-api.herokuapp.com

# Deploy
git push heroku main
```

---

## Troubleshooting

### Common Issues

#### Database Connection Fails
```bash
# Check database is running
docker ps | grep postgres

# Check connection string
echo $DATABASE_URL

# Test connection
psql $DATABASE_URL
```

#### CORS Errors
```python
# Verify ALLOWED_ORIGINS in backend/.env
# Must include frontend domain without trailing slash
```

#### File Upload Fails
```bash
# Check upload directory permissions
chmod 755 /app/uploads

# Check max upload size
# Nginx: client_max_body_size 10M;
# Backend: MAX_UPLOAD_SIZE=10485760
```

#### Frontend Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

---

## Security Checklist

- [ ] Strong `SECRET_KEY` set
- [ ] PostgreSQL with strong password
- [ ] HTTPS/SSL configured
- [ ] CORS properly configured
- [ ] File upload limits set
- [ ] Rate limiting enabled
- [ ] Security headers configured
- [ ] Database backups automated
- [ ] Error tracking (Sentry) configured
- [ ] Logs monitored
- [ ] Dependencies updated regularly

---

## Maintenance

### Regular Tasks

**Daily:**
- Monitor error logs
- Check disk space
- Review Sentry errors

**Weekly:**
- Update dependencies
- Review performance metrics
- Check backup integrity

**Monthly:**
- Security patches
- Database optimization
- Clean up old logs

### Update Strategy

```bash
# Pull latest code
git pull origin main

# Rebuild images
docker-compose -f docker-compose.prod.yml build

# Run migrations (if any)
docker-compose exec backend alembic upgrade head

# Restart services (zero downtime)
docker-compose -f docker-compose.prod.yml up -d

# Verify
curl https://api.yourdomain.com/health
```

---

## Support

For deployment issues:
1. Check logs first
2. Review this documentation
3. Contact support@eduecosystem.com

---

**Last Updated:** November 21, 2025
