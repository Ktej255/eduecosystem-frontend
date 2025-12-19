# Production Deployment Guide

## Prerequisites

- Docker & Docker Compose
- Domain name with DNS configured
- SSL certificate (Let's Encrypt recommended)
- PostgreSQL database (managed or self-hosted)
- Redis instance (managed or self-hosted)

## Pre-Deployment Checklist

### 1. Environment Configuration

Copy and configure environment variables:

```bash
cp .env.production.example .env.production
```

**Critical Variables to Set:**

- `SECRET_KEY`: Generate with `python -c 'import secrets; print(secrets.token_urlsafe(32))'`
- `DATABASE_URL`: Your PostgreSQL connection string
- `REDIS_PASSWORD`: Secure Redis password
- `STRIPE_SECRET_KEY`: Your Stripe keys
- `ALLOWED_ORIGINS`: Your frontend domain(s)

### 2. Database Migration

```bash
cd backend

# Run migrations
alembic upgrade head

# Apply performance indexes
python -m alembic upgrade performance_indexes_001
```

###3. SSL/TLS Setup

Place your SSL certificates in `nginx/ssl/`:

```
nginx/ssl/
├── certificate.crt
└── private.key
```

Or use Let's Encrypt with Certbot.

## Deployment Steps

### Option 1: Docker Compose (Recommended for Small/Medium Scale)

```bash
# Build and start services
docker-compose -f docker-compose.prod.yml up -d

# Check logs
docker-compose -f docker-compose.prod.yml logs -f

# Verify health
curl https://api.yourdomain.com/api/v1/health
```

### Option 2: Kubernetes (For Large Scale)

See `k8s/` directory for Kubernetes manifests (to be created).

## Post-Deployment Verification

### Health Checks

```bash
# Backend health
curl https://api.yourdomain.com/api/v1/health

# Expected response:
{
  "status": "healthy",
  "timestamp": "2025-11-24T...",
  "checks": {
    "database": {"status": "up", "latency_ms": 15.2},
    "redis": {"status": "up", "latency_ms": 2.1},
    "websocket": {"status": "up", "active_connections": 0}
  }
}
```

### Performance Tests

```bash
# Basic load test
ab -n 1000 -c 10 https://api.yourdomain.com/api/v1/health
```

## Monitoring

### Logs

View structured JSON logs:

```bash
# Backend logs
docker-compose -f docker-compose.prod.yml logs backend | jq

# Filter errors only
docker-compose -f docker-compose.prod.yml logs backend | grep ERROR
```

### Metrics

Access health endpoint for real-time metrics:

```
GET /api/v1/health
```

## Backup & Recovery

### Database Backup

```bash
# Automated daily backup (add to crontab)
docker exec postgres pg_dump -U $POSTGRES_USER $POSTGRES_DB > backup_$(date +%Y%m%d).sql
```

### Redis Backup

Redis automatically creates snapshots in `/data` volume.

## Rollback Procedure

If deployment fails:

```bash
# Stop current containers
docker-compose -f docker-compose.prod.yml down

# Restore previous image version
docker-compose -f docker-compose.prod.yml pull
docker-compose -f docker-compose.prod.yml up -d

# Verify
curl https://api.yourdomain.com/api/v1/health
```

## Security Checklist

- [ ] SECRET_KEY is strong and unique
- [ ] All passwords changed from defaults
- [ ] HTTPS enforced (HTTP redirects to HTTPS)
- [ ] Firewall configured (only 80, 443 open)
- [ ] Database not publicly accessible
- [ ] Redis password protected
- [ ] CORS configured for production domains only
- [ ] Rate limiting enabled
- [ ] Security headers configured

## Troubleshooting

### Database Connection Issues

```bash
# Test connection
docker exec backend python -c "from app.db.session import SessionLocal; db = SessionLocal(); print('Connected')"
```

### Redis Connection Issues

```bash
# Test Redis
docker exec backend python -c "from app.core.redis_cache import get_cache; c = get_cache(); print(c.enabled)"
```

### High Memory Usage

Monitor with:

```bash
docker stats
```

Consider increasing resources in `docker-compose.prod.yml`.

## Scaling

### Horizontal Scaling

Increase backend replicas:

```yaml
backend:
  deploy:
    replicas: 4
```

### Load Balancing

Configure Nginx upstream:

```nginx
upstream backend {
    server backend1:8000;
    server backend2:8000;
    server backend3:8000;
}
```

## Support

For issues, check:
- Application logs
- Health endpoint status
- Database connectivity
- Redis connectivity

Contact: ops@yourdomain.com
