# Operations Runbook

## Daily Operations

### Morning Health Check

```bash
# Check all services
curl https://api.yourdomain.com/api/v1/health | jq

# Verify key metrics
docker stats --no-stream

# Check logs for errors
docker-compose logs --tail=100 backend | grep -i error
```

### Backup Verification

```bash
# Check last backup timestamp
ls -lh backups/ | tail -1

# Test restore on staging
pg_restore -d staging_db backups/latest.sql
```

## Monitoring Dashboards

### Application Health

- **Health Endpoint**: `https://api.yourdomain.com/api/v1/health`
- **Metrics**: Database latency, Redis status, active connections

### Key Metrics to Watch

1. **API Response Time** (Target: p95 < 200ms)
2. **Error Rate** (Target: < 1%)
3. **Active Users** (Track via WebSocket connections)
4. **Database Query Time** (Target: p95 < 50ms)
5. **Memory Usage** (Alert if > 80%)
6. **Disk Space** (Alert if > 85%)

## Incident Response

### System Down

1. **Verify**: Check health endpoint
2. **Diagnose**: Review logs for errors
   ```bash
   docker-compose logs --tail=500 backend
   ```
3. **Restart Services**:
   ```bash
   docker-compose restart backend
   ```
4. **Escalate**: If not resolved in 5min, page on-call engineer

### Slow Response Times

1. **Check Database**: Monitor query performance
   ```sql
   SELECT query, mean_exec_time, calls
   FROM pg_stat_statements
   ORDER BY mean_exec_time DESC LIMIT 10;
   ```

2. **Check Redis**: Verify cache hit rate
3. **Check Logs**: Look for slow request warnings
4. **Scale**: Add replicas if needed

### High Error Rate

1. **Filter Errors**:
   ```bash
   docker-compose logs backend | jq 'select(.level=="ERROR")'
   ```

2. **Identify Pattern**: Common error types, endpoints
3. **Quick Fix**: Rollback if recent deployment
4. **Root Cause**: Debug and patch

## Maintenance Windows

### Database Migrations

**Schedule**: Off-peak hours (2-4 AM)

```bash
# 1. Notify users (maintenance mode)
# 2. Backup database
pg_dump eduecosystem > pre_migration_backup.sql

# 3. Run migration
docker exec backend alembic upgrade head

# 4. Verify
curl https://api.yourdomain.com/api/v1/health

# 5. Re-enable
```

### Security Updates

**Frequency**: Monthly or as needed

```bash
# Pull latest images
docker-compose pull

# Recreate containers
docker-compose up -d --force-recreate

# Verify
docker-compose ps
```

## Performance Tuning

### Database Optimization

```sql
-- Analyze tables
ANALYZE;

-- Reindex if needed
REINDEX DATABASE eduecosystem;

-- Check index usage
SELECT schemaname, tablename, indexname, idx_scan
FROM pg_stat_user_indexes
ORDER BY idx_scan ASC;
```

### Redis Tuning

```bash
# Check memory usage
redis-cli INFO memory

# Set maxmemory policy
redis-cli CONFIG SET maxmemory-policy allkeys-lru
```

### Application Tuning

Adjust workers in `docker-compose.prod.yml`:

```yaml
command: uvicorn app.main:app --host 0.0.0.0 --port 8000 --workers 8
```

## Scaling Guidelines

### Vertical Scaling (Increase Resources)

```yaml
backend:
  deploy:
    resources:
      limits:
        cpus: '2'
        memory: 4G
```

### Horizontal Scaling (Add Instances)

```yaml
backend:
  deploy:
    replicas: 5
```

### Database Scaling

- **Read Replicas**: For read-heavy workloads
- **Connection Pooling**: Increase pool size in config
- **Sharding**: For very large datasets (future consideration)

## Backup Procedures

### Automated Backups

Cron job (runs daily at 2 AM):

```bash
0 2 * * * /usr/local/bin/backup-database.sh
```

### Manual Backup

```bash
# Full backup
docker exec postgres pg_dump -U $POSTGRES_USER -Fc $POSTGRES_DB > backup_$(date +\%Y\%m\%d_\%H\%M).dump

# Upload to S3 (if configured)
aws s3 cp backup_*.dump s3://your-backup-bucket/
```

### Restore Procedure

```bash
# Stop application
docker-compose stop backend

# Restore database
docker exec postgres pg_restore -U $POSTGRES_USER -d $POSTGRES_DB -c backup.dump

# Restart
docker-compose start backend

# Verify
curl https://api.yourdomain.com/api/v1/health
```

## Security Procedures

### Rotate Secrets

1. **Generate New Secret**:
   ```bash
   python -c 'import secrets; print(secrets.token_urlsafe(32))'
   ```

2. **Update .env.production**
3. **Restart Services**:
   ```bash
   docker-compose up -d --force-recreate backend
   ```

### SSL Certificate Renewal

If using Let's Encrypt:

```bash
certbot renew --nginx
```

### Security Audit

Monthly checklist:
- [ ] Review access logs for suspicious activity
- [ ] Update dependencies
- [ ] Run security scanner
- [ ] Rotate database passwords
- [ ] Review user permissions

## Contact Information

- **On-Call Engineer**: [phone/email]
- **Database Admin**: [contact]
- **Security Team**: security@yourdomain.com
- **Status Page**: https://status.yourdomain.com

## Useful Commands

```bash
# View all containers
docker-compose ps

# Follow logs
docker-compose logs -f backend

# Restart specific service
docker-compose restart backend

# Scale service
docker-compose up -d --scale backend=3

# Execute command in container
docker-compose exec backend python manage.py shell

# Database shell
docker-compose exec postgres psql -U $POSTGRES_USER -d $POSTGRES_DB
```
