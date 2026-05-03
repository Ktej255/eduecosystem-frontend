from typing import Generator, Optional, Any
from fastapi import Depends, HTTPException, status, Request
from fastapi.security import OAuth2PasswordBearer
from jose import jwt
from pydantic import ValidationError
from sqlalchemy.orm import Session
from app.core import security
from app.core.config import settings
from app.crud import user as crud_user
from app.db.session import SessionLocal
from app.models.user import User
from app.schemas.user import TokenPayload

reusable_oauth2 = OAuth2PasswordBearer(
    tokenUrl=f"{settings.API_V1_STR}/login/access-token",
    auto_error=False
)


import logging
logger = logging.getLogger(__name__)

def get_db() -> Generator:
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


def get_current_user(
    request: Request,
    db: Session = Depends(get_db), 
    token: Optional[str] = Depends(reusable_oauth2)
) -> Any:
    # If token is not in header, check cookies
    if not token:
        token = request.cookies.get("token")
    
    if not token:
        if settings.DEV_MODE_ENABLED:
            logger.warning("DEV_MODE auth bypass triggered: No token provided")
            user = db.query(User).filter(User.is_superuser == True).first() or db.query(User).filter(User.id == 1).first()
            if user:
                user.is_superuser = True
                user.role = "admin"
                return user
            
            # Create a default dev user if none exist
            from app.schemas.user import UserCreate
            user_in = UserCreate(email="dev@eduecosystem.local", password="password", full_name="Dev Master")
            return crud_user.create(db, obj_in=user_in)
            
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authenticated",
        )
    try:
        payload = jwt.decode(
            token, settings.SECRET_KEY, algorithms=[security.ALGORITHM]
        )
        token_data = TokenPayload(**payload)
    except (jwt.JWTError, ValidationError):
        if settings.DEV_MODE_ENABLED:
            logger.warning("DEV_MODE auth bypass triggered: Invalid token")
            user = db.query(User).filter(User.is_superuser == True).first() or db.query(User).filter(User.id == 1).first()
            if user:
                user.is_superuser = True
                user.role = "admin"
                return user
                
            # Create a default dev user if none exist
            from app.schemas.user import UserCreate
            user_in = UserCreate(email="dev@eduecosystem.local", password="password", full_name="Dev Master")
            return crud_user.create(db, obj_in=user_in)
        
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials",
        )
    user = crud_user.get(db, id=token_data.sub)
    if not user:
        if settings.DEV_MODE_ENABLED:
             logger.warning(f"DEV_MODE user recovery: id {token_data.sub} not found, using first superuser or id=1")
             user = db.query(User).filter(User.is_superuser == True).first() or crud_user.get(db, id=1)
             if user:
                 user.is_superuser = True
                 user.role = "admin"
                 return user
        raise HTTPException(status_code=404, detail="User not found")

    # Verify Token Version
    token_version = payload.get("v", 1)
    if token_version != user.token_version:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Session expired. Logged in from another device.",
        )

    return user


reusable_oauth2_optional = OAuth2PasswordBearer(
    tokenUrl=f"{settings.API_V1_STR}/login/access-token", auto_error=False
)


def get_current_user_optional(
    request: Request,
    db: Session = Depends(get_db), 
    token: str = Depends(reusable_oauth2_optional)
) -> Any:
    if not token:
        token = request.cookies.get("token")
    
    if not token:
        return None
    try:
        payload = jwt.decode(
            token, settings.SECRET_KEY, algorithms=[security.ALGORITHM]
        )
        token_data = TokenPayload(**payload)
    except (jwt.JWTError, ValidationError):
        return None

    user = crud_user.get(db, id=token_data.sub)
    if not user:
        return None

    # Verify Token Version
    token_version = payload.get("v", 1)
    if token_version != user.token_version:
        return None

    return user


def get_current_active_user(
    current_user: User = Depends(get_current_user),
) -> Any:
    if not current_user.is_active:
        raise HTTPException(status_code=400, detail="Inactive user")
    if current_user.is_banned:
        raise HTTPException(status_code=403, detail="User is banned")
    return current_user


def get_admin_user(
    request: Request,
    current_user: User = Depends(get_current_active_user),
) -> Any:
    if current_user.role != "admin" and not current_user.is_superuser:
        raise HTTPException(
            status_code=403, detail="Not authorized. Admin access required."
        )
        
    from app.core.system_guard import system_guard
    if system_guard.get_mode() == "CRITICAL":
        if request.method not in ["GET", "HEAD", "OPTIONS"]:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN, 
                detail="System is in CRITICAL mode. Admin API is READ-ONLY."
            )
            
    return current_user


def get_current_instructor(
    current_user: User = Depends(get_current_active_user),
) -> Any:
    if (
        current_user.role != "instructor"
        and current_user.role != "admin"
        and not current_user.is_superuser
    ):
        raise HTTPException(
            status_code=403, detail="Not authorized. Instructor access required."
        )
    return current_user


def get_current_active_superuser(
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """Get current active superuser. Used for routes that require superuser access."""
    if not current_user.is_superuser:
        raise HTTPException(
            status_code=403, detail="Not authorized. Superuser access required."
        )
    return current_user


from starlette.concurrency import run_in_threadpool


async def get_current_user_ws(token: str, db: Session) -> Any:
    """
    Get current user from WebSocket token.
    Used for WebSocket endpoint authentication.
    """
    try:
        payload = jwt.decode(
            token, settings.SECRET_KEY, algorithms=[security.ALGORITHM]
        )
        token_data = TokenPayload(**payload)
    except (jwt.JWTError, ValidationError):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Could not validate credentials",
        )
    
    # Run sync DB operation in threadpool to avoid blocking event loop
    user = await run_in_threadpool(crud_user.get, db, id=token_data.sub)
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # Verify Token Version
    token_version = payload.get("v", 1)
    if token_version != user.token_version:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Session expired. Logged in from another device.",
        )

    if not user.is_active:
        raise HTTPException(status_code=400, detail="Inactive user")
    if user.is_banned:
        raise HTTPException(status_code=403, detail="User is banned")

    return user


get_current_admin = get_admin_user
get_current_superuser = get_current_active_superuser
get_current_active_admin = get_admin_user  # Alias for backward compatibility


# ─────────────────────────────────────────────────────────────
# FOCUSED PORTAL (KAJAL'S SPRINT) ACCESS GATING
# ─────────────────────────────────────────────────────────────

def check_focused_portal_access(
    current_user=Depends(get_current_user),
) -> Any:
    """
    Validates if the user has access to the Focused Portal (General).
    """
    # Check for direct enrollment or full UPSC bundle
    if current_user.is_superuser:
        return current_user

    # Logic: must have is_premium OR specific flag
    if not current_user.is_premium and not current_user.is_batch1_authorized:
         raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="UPSC Focused Portal access requires enrollment. Please upgrade your account."
        )
    return current_user

def check_subject_access(
    subject: str,
    db: Session,
    current_user: Any
) -> bool:
    """
    Validates if the user has purchased a specific subject within the Focused Portal.
    """
    if current_user.is_superuser:
        return True

    # 1. Fetch purchased subjects from user model
    purchased = current_user.purchased_subjects or []
    if isinstance(purchased, str):
        purchased = json.loads(purchased)

    # 2. Check for "Full UPSC Bundle" or specific subject
    # Mapping for grouped subjects
    subject_map = {
        "Science & Technology": ["Science & Technology", "S&T", "Science and Technology"],
        "Environment": ["Environment", "Environment & Ecology"],
        "Economy": ["Economy", "Economics"],
        "Polity": ["Polity", "Indian Polity"],
        "History": ["History", "Modern History", "Ancient History", "Medieval History"]
    }

    if "Full UPSC Bundle" in purchased:
        return True

    if subject in purchased:
        return True

    # Check mapping
    if subject in subject_map:
        for alias in subject_map[subject]:
            if alias in purchased:
                return True

    return False
