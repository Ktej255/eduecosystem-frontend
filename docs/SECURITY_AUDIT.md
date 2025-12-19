# Security Audit Checklist

## Overview
This checklist should be completed before each production deployment and quarterly thereafter.

**Last Audit Date:** _________  
**Audited By:** _________  
**Next Audit Due:** _________

---

## 1. Authentication & Authorization

### Password Security
- [ ] Passwords hashed with bcrypt (min 12 rounds)
- [ ] No passwords stored in plaintext anywhere
- [ ] Password minimum length enforced (8+ characters)
- [ ] Password complexity recommended (not enforced to avoid UX issues)

### JWT Tokens
- [ ] Tokens use HS256 algorithm
- [ ] Secret key is 32+ characters and random
- [ ] Secret key stored in environment variable
- [ ] Token expiration configured (7 days max)
- [ ] Tokens validated on every protected endpoint
- [ ] No sensitive data in JWT payload

### User Roles
- [ ] RBAC implemented for sensitive endpoints
- [ ] Admin endpoints require `is_superuser` check
- [ ] Instructor endpoints verify instructor role
- [ ] Default users have limited permissions

### Session Management
- [ ] Logout clears client-side token
- [ ] No server-side session state
- [ ] Token refresh mechanism (if applicable)

**Notes/Issues:**
_____________________________________________
_____________________________________________

---

## 2. Input Validation

### Backend Validation
- [ ] All API endpoints use Pydantic schemas
- [ ] Email format validated
- [ ] String length limits enforced
- [ ] Numeric ranges validated
- [ ] File types validated for uploads
- [ ] SQL injection protected (ORM only)

### Frontend Validation
- [ ] Client-side validation for UX only
- [ ] Never trusted for security
- [ ] Form validation before submission
- [ ] Error messages user-friendly

**Validation Failures Logged:**
- [ ] Authentication errors logged
- [ ] Authorization errors logged
- [ ] Input validation failures logged (with sanitized input)

**Notes/Issues:**
_____________________________________________
_____________________________________________

---

## 3. Database Security

### Connection Security
- [ ] Database URL in environment variable
- [ ] SSL/TLS enabled for production database
- [ ] Database user has minimum necessary privileges
- [ ] No root/admin credentials used by app

### Query Security
- [ ] All queries use SQLAlchemy ORM
- [ ] No raw SQL string concatenation
- [ ] Prepared statements for any raw SQL
- [ ] No user input directly in queries

### Data Protection
- [ ] Passwords hashed before storage
- [ ] Sensitive PII encrypted (if applicable)
- [ ] Database backups encrypted
- [ ] Backup access restricted

**Notes/Issues:**
_____________________________________________
_____________________________________________

---

## 4. API Security

### Endpoint Protection
- [ ] All sensitive endpoints require authentication
- [ ] Resource ownership verified before access
- [ ] Pagination limits enforced (max 100 items)
- [ ] Rate limiting applied to critical endpoints

### Error Handling
- [ ] Error messages don't leak sensitive info
- [ ] Stack traces disabled in production
- [ ] Generic error messages for auth failures
- [ ] Detailed errors logged (not returned to client)

### CORS Configuration
- [ ] Specific origins whitelisted (no wildcards)
- [ ] `allow_credentials=True` only for trusted origins
- [ ] OPTIONS requests handled correctly
- [ ] Preflight cache configured

**Notes/Issues:**
_____________________________________________
_____________________________________________

---

## 5. File Upload Security

### Validation
- [ ] File size limits enforced (10MB max)
- [ ] File type validation (whitelist approach)
- [ ] Content-Type header validated
- [ ] File extension validated

### Storage
- [ ] Files stored outside web root
- [ ] Unique filenames generated (prevent overwrites)
- [ ] Virus scanning enabled (if applicable)
- [ ] Access controls on upload directory

**Notes/Issues:**
_____________________________________________
_____________________________________________

---

## 6. Environment & Secrets

### Environment Variables
- [ ] All secrets in environment variables
- [ ] No secrets in source code
- [ ] No secrets in version control (.gitignore configured)
- [ ] Different secrets for dev/staging/prod

### Secret Management
- [ ] `SECRET_KEY` is random and 32+ characters
- [ ] Database credentials rotated quarterly
- [ ] API keys rotated regularly
- [ ] Secrets stored securely (env files, secret manager)

### `.env` Files
- [ ] `.env` in `.gitignore`
- [ ] `.env.example` documented (no real secrets)
- [ ] Production secrets different from development

**Notes/Issues:**
_____________________________________________
_____________________________________________

---

## 7. HTTPS & Transport Security

### HTTPS Enforcement
- [ ] All production traffic over HTTPS
- [ ] HTTP redirects to HTTPS
- [ ] HSTS header enabled (`Strict-Transport-Security`)
- [ ] TLS 1.2+ only (no SSL, TLS 1.0/1.1)

### Security Headers
- [ ] `X-Content-Type-Options: nosniff`
- [ ] `X-Frame-Options: DENY`
- [ ] `X-XSS-Protection: 1; mode=block`
- [ ] `Strict-Transport-Security: max-age=31536000`
- [ ] `Content-Security-Policy` configured (if applicable)

### Cookies
- [ ] `Secure` flag set on cookies (HTTPS only)
- [ ] `HttpOnly` flag set (prevent XSS access)
- [ ] `SameSite` attribute configured

**Notes/Issues:**
_____________________________________________
_____________________________________________

---

## 8. Dependency Security

### Vulnerability Scanning
- [ ] Dependabot enabled on GitHub
- [ ] `npm audit` run regularly (frontend)
- [ ] `pip-audit` or `safety` run regularly (backend)
- [ ] Docker image scanning with Trivy

### Update Policy
- [ ] Critical vulnerabilities patched within 48 hours
- [ ] High-severity vulnerabilities patched within 1 week
- [ ] Dependencies updated monthly
- [ ] Changelog reviewed before updates

### Current Vulnerabilities
- [ ] No known high/critical vulnerabilities
- [ ] Low-severity vulnerabilities documented
- [ ] Mitigation plan for unfixable vulnerabilities

**Notes/Issues:**
_____________________________________________
_____________________________________________

---

## 9. Rate Limiting & DDoS Protection

### Rate Limiting
- [ ] Login endpoint limited (5/minute per IP)
- [ ] Registration limited (3/minute per IP)
- [ ] Password reset limited (3/minute per IP)
- [ ] API endpoints have reasonable limits

### DDoS Protection
- [ ] CDN with DDoS protection (Cloudflare/etc)
- [ ] Rate limiting at reverse proxy level
- [ ] Connection limits configured
- [ ] Automatic IP blocking for abuse

**Notes/Issues:**
_____________________________________________
_____________________________________________

---

## 10. Logging & Monitoring

### Security Logging
- [ ] Authentication failures logged
- [ ] Authorization failures logged
- [ ] Input validation failures logged
- [ ] File upload attempts logged

### Log Security
- [ ] No passwords in logs
- [ ] No tokens in logs
- [ ] No sensitive PII in logs
- [ ] Logs stored securely

### Monitoring & Alerts
- [ ] Failed login attempts monitored
- [ ] Unusual traffic patterns detected
- [ ] Security logs reviewed regularly
- [ ] Alerts configured for security events

**Notes/Issues:**
_____________________________________________
_____________________________________________

---

## 11. XSS & CSRF Protection

### XSS Prevention
- [ ] React auto-escapes values in JSX
- [ ] `dangerouslySetInnerHTML` not used
- [ ] User input sanitized before display
- [ ] Content-Security-Policy header configured

### CSRF Protection
- [ ] Stateless JWT used (no CSRF tokens needed)
- [ ] SameSite cookie attribute set
- [ ] Origin header validated
- [ ] Critical actions require re-authentication

**Notes/Issues:**
_____________________________________________
_____________________________________________

---

## 12. Third-Party Integrations

### API Keys
- [ ] Third-party API keys in environment variables
- [ ] Keys have minimum necessary permissions
- [ ] Keys rotated regularly
- [ ] Unused keys revoked

### OAuth/SSO
- [ ] OAuth scopes minimal
- [ ] Redirect URIs validated
- [ ] State parameter used (CSRF protection)
- [ ] Token storage secure

**Notes/Issues:**
_____________________________________________
_____________________________________________

---

## 13. Backup & Recovery

### Backups
- [ ] Automated database backups daily
- [ ] Backups encrypted at rest
- [ ] Backup access restricted
- [ ] Backup retention policy defined (30 days)

### Disaster Recovery
- [ ] Backup restore tested quarterly
- [ ] Recovery Time Objective (RTO) defined
- [ ] Recovery Point Objective (RPO) defined
- [ ] Incident response plan documented

**Notes/Issues:**
_____________________________________________
_____________________________________________

---

## 14. Testing & Verification

### Automated Security Tests
- [ ] Authentication tests pass
- [ ] Authorization tests pass
- [ ] Input validation tests pass
- [ ] SQL injection tests pass

### Manual Testing
- [ ] Penetration testing completed
- [ ] OWASP Top 10 verified
- [ ] Security code review completed
- [ ] Vulnerability scan run

### Tools Used
- [ ] OWASP ZAP scan completed
- [ ] Burp Suite scan (if applicable)
- [ ] npm audit / pip-audit run
- [ ] Docker image scan run

**Notes/Issues:**
_____________________________________________
_____________________________________________

---

## Overall Assessment

### Risk Level
- [ ] Low Risk - All checks passed
- [ ] Medium Risk - Minor issues, mitigation documented
- [ ] High Risk - Critical issues, deployment blocked

### Critical Issues (Must Fix Before Production)
1. _____________________________________________
2. _____________________________________________
3. _____________________________________________

### Recommendations
1. _____________________________________________
2. _____________________________________________
3. _____________________________________________

### Sign-Off
- **Security Team:** __________________ Date: __________
- **Lead Developer:** __________________ Date: __________
- **DevOps/Infrastructure:** __________________ Date: __________

---

**Audit Completed:** ☐ Yes ☐ No  
**Approved for Production:** ☐ Yes ☐ No  
**Next Audit Scheduled:** __________
