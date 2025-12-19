# Admin Credentials Documentation

## Master Admin Login

**Email:** ktej255@gmail.com  
**Password:** Tej@1106  
**Access Level:** Superuser/Admin (/admin)

---

## Backend Configuration

### Files Updated:
1. **`backend/app/core/config.py`** - Default superuser credentials
   - `FIRST_SUPERUSER` = ktej255@gmail.com
   - `FIRST_SUPERUSER_PASSWORD` = Tej@1106

2. **`backend/create_admin.py`** - Admin creation script
   - Creates/updates master admin user with credentials above

3. **`backend/app/db/init_data.py`** - Database initialization
   - Default admin user created on first database initialization

### How to Create/Update Admin User:

```bash
cd backend
python create_admin.py
```

This script will:
- Check if the admin user exists
- Create a new admin user if not found
- Update password and ensure superuser status if user exists

---

## Frontend Configuration

The frontend does not store any hardcoded credentials. Admin login is handled through the standard login flow:

1. Navigate to the login page
2. Enter email: **ktej255@gmail.com**
3. Enter password: **Tej@1106**
4. Access admin features through `/admin` routes

---

## Security Notes

⚠️ **Important Security Considerations:**

1. These credentials are currently stored in the codebase for development purposes
2. In production, credentials should be:
   - Set via environment variables (`FIRST_SUPERUSER` and `FIRST_SUPERUSER_PASSWORD`)
   - Never committed to version control
   - Rotated regularly
   - Protected with strong password policies

3. Current password meets complexity requirements:
   - Contains uppercase letters (T)
   - Contains lowercase letters (ej)
   - Contains special characters (@)
   - Contains numbers (1106)

---

## Environment Variables (Production)

For production deployment, set these environment variables:

```bash
FIRST_SUPERUSER=ktej255@gmail.com
FIRST_SUPERUSER_PASSWORD=Tej@1106
```

Or use a `.env` file (never commit to git):

```env
FIRST_SUPERUSER=ktej255@gmail.com
FIRST_SUPERUSER_PASSWORD=Tej@1106
```

---

## Test Credentials

Test fixtures in `backend/conftest.py` use separate test credentials:
- Test Admin: `admin@test.com`
- Test User: `test@example.com`
- Normal User: `normal@test.com`

These are only used in automated tests and should not be used in production.

---

**Last Updated:** December 1, 2025
