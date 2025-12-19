# Security Best Practices & Guidelines

## Overview
This document outlines security best practices, authentication/authorization patterns, and security measures implemented in the Holistic Learning Ecosystem.

---

## Authentication & Authorization

### JWT Token-Based Authentication

The application uses JWT (JSON Web Tokens) for stateless authentication.

**Token Flow:**
1. User logs in with email/password
2. Backend validates credentials and generates JWT access token
3. Token includes user ID, email, and expiration (7 days)
4. Client stores token and includes in `Authorization: Bearer <token>` header
5. Backend validates token on protected endpoints

**Token Configuration:**
- Algorithm: HS256
- Expiration: 10,080 minutes (7 days)
- Secret key: Environment variable `SECRET_KEY` (min 32 chars)

**Security Measures:**
- ✅ Passwords hashed with bcrypt (salt rounds: 12)
- ✅ Tokens expire after 7 days
- ✅ Token validation on every protected endpoint
- ✅ No sensitive data in JWT payload

### Role-Based Access Control (RBAC)

**User Roles:**
- `user` - Default role for students
- `instructor` - Can create/manage courses
- `admin` - Full system access

**Permission Checks:**
```python
# Backend dependency for role checking
def get_current_active_superuser(
    current_user: User = Depends(get_current_active_user)
) -> User:
    if not current_user.is_superuser:
        raise HTTPException(status_code=403, detail="Not authorized")
    return current_user
```

---

## Input Validation

### Backend Validation (Pydantic)

All API inputs validated using Pydantic schemas:

```python
class UserCreate(BaseModel):
    email: EmailStr  # Validates email format
    password: str = Field(..., min_length=8)  # Min 8 chars
    full_name: Optional[str] = None
```

**Validation Rules:**
- Email format validation
- Password minimum length (8 characters)
- String length limits on all text fields
- Type checking for all inputs

### Frontend Validation

Client-side validation for UX, but **never trusted**:
- Email format validation
- Required field checks
- Password strength indicators
- Form validation before submission

---

## SQL Injection Prevention

**Protection Measures:**
- ✅ SQLAlchemy ORM used for all database queries
- ✅ Parameterized queries (no string concatenation)
- ✅ Input validation via Pydantic schemas

**Example Safe Query:**
```python
# Safe - uses ORM
user = db.query(User).filter(User.email == email).first()

# NEVER do this (vulnerable):
# db.execute(f"SELECT * FROM users WHERE email = '{email}'")
```

---

## Cross-Site Scripting (XSS) Prevention

**Backend:**
- API returns JSON only (not HTML)
- No user-generated HTML rendering
- Content-Type headers properly set

**Frontend (Next.js/React):**
- React automatically escapes values in JSX
- `dangerouslySetInnerHTML` NOT used
- User input sanitized before display

---

## Cross-Origin Resource Sharing (CORS)

**Configuration:**
```python
# backend/main.py
BACKEND_CORS_ORIGINS = [
    "http://localhost:3000",  # Development
    "https://your-app.vercel.app"  # Production
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=BACKEND_CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

**Security Measures:**
- ✅ Whitelist specific origins (no wildcards in production)
- ✅ Credentials allowed only for trusted origins
- ✅ Preflight requests handled correctly

---

## Rate Limiting

**Configuration:**
```python
# Applied to authentication endpoints
from slowapi import Limiter

limiter = Limiter(key_func=get_remote_address)

@router.post("/login/access-token")
@limiter.limit("5/minute")  # Max 5 login attempts per minute
def login(...)
```

**Protected Endpoints:**
- Login: 5 requests/minute
- Registration: 3 requests/minute
- Password reset: 3 requests/minute

---

## File Upload Security

**Security Measures:**
- ✅ File size limits (10MB max)
- ✅ File type validation (images only)
- ✅ Unique filename generation (prevents overwriting)
- ✅ Files stored outside web root
- ✅ Content-Type validation

**Configuration:**
```python
ALLOWED_EXTENSIONS = {'.jpg', '.jpeg', '.png', '.gif'}
MAX_FILE_SIZE = 10 * 1024 * 1024  # 10MB
```

---

## Environment Variables & Secrets

### Never Commit Secrets

**Protected in `.gitignore`:**
- `.env`
- `.env.local`
- `.env.production`
- `*.db` (local databases)

### Required Environment Variables

**Backend:**
```bash
SECRET_KEY=<generate-with-openssl-rand-hex-32>
DATABASE_URL=<database-connection-string>
ALLOWED_ORIGINS=<frontend-url>
```

**Frontend:**
```bash
NEXT_PUBLIC_API_URL=<backend-api-url>
```

**Key Management:**
- ✅ Secrets stored in environment variables
- ✅ Different secrets for dev/staging/production
- ✅ Secrets rotated regularly
- ✅ No secrets in source code

---

## HTTPS Enforcement

**Production Requirements:**
- ✅ All traffic over HTTPS
- ✅ HSTS headers enabled
- ✅ Secure cookies (`Secure` flag)
- ✅ TLS 1.2+ only

**Security Headers:**
```python
# backend/middleware/security.py
class SecurityHeadersMiddleware:
    async def __call__(self, request, call_next):
        response = await call_next(request)
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["X-Frame-Options"] = "DENY"
        response.headers["X-XSS-Protection"] = "1; mode=block"
        response.headers["Strict-Transport-Security"] = "max-age=31536000"
        return response
```

---

## Database Security

**Connection Security:**
- ✅ Database credentials in environment variables
- ✅ SSL/TLS for database connections (production)
- ✅ Least privilege principle for database users

**Data Protection:**
- ✅ Passwords hashed (never stored plaintext)
- ✅ Sensitive data encrypted at rest
- ✅ Database backups encrypted

---

## Dependency Security

**Automated Scanning:**
- GitHub Dependabot enabled
- npm audit run on CI/CD
- Trivy security scanning for Docker images

**Update Policy:**
- Security updates applied within 48 hours
- Regular dependency updates monthly
- Critical vulnerabilities patched immediately

---

## Session Management

**Best Practices:**
- ✅ Stateless JWT tokens (no server-side sessions)
- ✅ Token expiration enforced
- ✅ Logout invalidates client-side token
- ✅ No sensitive data in local storage

---

## API Security

**General Practices:**
- ✅ All endpoints require authentication (except public routes)
- ✅ Resource ownership verified before access
- ✅ Pagination limits enforced (prevent data dumps)
- ✅ Error messages don't leak sensitive info

**Example Authorization Check:**
```python
def get_course(course_id: int, current_user: User):
    course = crud.course.get(db, course_id)
    if course.instructor_id != current_user.id:
        raise HTTPException(403, "Not authorized")
    return course
```

---

## Security Monitoring

**Logging:**
- Authentication failures logged
- Authorization failures logged
- Unusual activity logged
- No sensitive data in logs (passwords, tokens)

**Alerts:**
- Failed login attempts (>5 in 5 minutes)
- Privilege escalation attempts
- SQL injection attempts
- File upload anomalies

---

## Incident Response

**Process:**
1. Detect & log security incident
2. Contain the threat (revoke tokens, block IPs)
3. Investigate root cause
4. Patch vulnerability
5. Notify affected users (if data breach)
6. Document lessons learned

---

## Security Checklist

### Pre-Deployment
- [ ] All secrets in environment variables
- [ ] HTTPS enforced in production
- [ ] CORS configured with specific origins
- [ ] Rate limiting enabled
- [ ] Security headers configured
- [ ] Database backups automated
- [ ] Dependency vulnerabilities resolved
- [ ] Security audit completed

### Post-Deployment
- [ ] Monitor auth failure rates
- [ ] Review security logs daily
- [ ] Test backup/restore procedures
- [ ] Rotate secrets quarterly
- [ ] Update dependencies monthly
- [ ] Penetration testing annually

---

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [FastAPI Security Documentation](https://fastapi.tiangolo.com/tutorial/security/)
- [Next.js Security Best Practices](https://nextjs.org/docs/pages/building-your-application/configuring/security)
- [SQLAlchemy Security](https://docs.sqlalchemy.org/en/20/faq/security.html)

---

**Last Updated:** 2025-11-22  
**Version:** 1.0
