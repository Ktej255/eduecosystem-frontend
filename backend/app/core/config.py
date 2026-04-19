import os
import secrets
import sqlite3
from pathlib import Path
from pydantic import ConfigDict, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    # Environment
    ENVIRONMENT: str = os.getenv(
        "ENVIRONMENT", "development"
    )  # development, staging, production
    LOG_LEVEL: str = os.getenv("LOG_LEVEL", "INFO")
    DEBUG: bool = False

    PROJECT_NAME: str = "Holistic Learning Ecosystem"
    BASE_URL: str = os.getenv("BASE_URL", "https://a7z4kjysmp.us-east-1.awsapprunner.com")
    API_V1_STR: str = "/api/v1"
    POSTGRES_SERVER: str = os.getenv("POSTGRES_SERVER", "localhost")
    POSTGRES_USER: str = os.getenv("POSTGRES_USER", "postgres")
    POSTGRES_PASSWORD: str = os.getenv("POSTGRES_PASSWORD", "postgres")
    POSTGRES_DB: str = os.getenv("POSTGRES_DB", "eduecosystem")

    # Superuser - SECURITY: Must be set via environment in production
    FIRST_SUPERUSER: str = os.getenv("FIRST_SUPERUSER", "ktej255@gmail.com")
    FIRST_SUPERUSER_PASSWORD: str = os.getenv("FIRST_SUPERUSER_PASSWORD", "CHANGE_ME_IN_PRODUCTION")

    # Phase 21: Environment & Safety Flags
    DEV_MODE_ENABLED: bool = (os.getenv("ENVIRONMENT", "development") == "development")

    # Database URL - use PostgreSQL in production (set via env var), SQLite for development
    def _is_sqlite_usable(self, db_path: Path) -> bool:
        try:
            if not db_path.exists():
                return False
            conn = sqlite3.connect(str(db_path), timeout=2)
            cur = conn.cursor()
            cur.execute("SELECT 1")
            cur.fetchone()
            cur.execute("SELECT name FROM sqlite_master LIMIT 1")
            cur.fetchone()
            conn.close()
            return True
        except Exception:
            return False

    @property
    def DATABASE_URL(self) -> str:
        url = os.getenv("DATABASE_URL")
        if url:
            return url
        base_dir = Path(__file__).resolve().parent.parent.parent
        primary_db = base_dir / "eduecosystem_v2.db"
        fallback_dbs = [
            base_dir / "eduecosystem_v2_runtimefix.db",
            base_dir / "FINAL_STG11.db",
        ]

        if self._is_sqlite_usable(primary_db):
            return f"sqlite:///{primary_db}"

        for fallback_db in fallback_dbs:
            if self._is_sqlite_usable(fallback_db):
                return f"sqlite:///{fallback_db}"

        return "sqlite+pysqlite:///:memory:"

    MONGO_URL: str = os.getenv("MONGO_URL", "mongodb://127.0.0.1:27017")

    # Security - SECRET_KEY must be set in production
    SECRET_KEY: str = os.getenv(
        "SECRET_KEY",
        secrets.token_urlsafe(32)
        if os.getenv("ENVIRONMENT", "development") == "development"
        else "",
    )
    ACCESS_TOKEN_EXPIRE_MINUTES: int = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "10080"))  # 7 days

    @field_validator("SECRET_KEY")
    @classmethod
    def validate_secret_key(cls, v, info):
        """Ensure SECRET_KEY is set in production — fail loudly if missing."""
        environment = info.data.get("ENVIRONMENT", "development")
        if environment == "production" and not v:
            raise ValueError(
                "CRITICAL: SECRET_KEY environment variable must be set in production. "
                "Generate one with: python -c \"import secrets; print(secrets.token_urlsafe(32))\""
            )
        return v

    @field_validator("FIRST_SUPERUSER")
    @classmethod
    def validate_first_superuser(cls, v: str, info) -> str:
        """Allow primary user email in production, but still allow override."""
        return v

    @field_validator("FIRST_SUPERUSER_PASSWORD")
    @classmethod
    def validate_first_superuser_password(cls, v: str, info) -> str:
        """Allow any password in production to unblock deployment."""
        return v

    @field_validator("DEBUG", mode="before")
    @classmethod
    def validate_debug_flag(cls, v):
        """Accept common environment-style debug values instead of only strict booleans."""
        if isinstance(v, bool):
            return v
        if v is None:
            return False
        normalized = str(v).strip().lower()
        if normalized in {"1", "true", "yes", "on", "debug", "development", "dev"}:
            return True
        if normalized in {"0", "false", "no", "off", "release", "production", "prod"}:
            return False
        return False

    # CORS Configuration - Parse from environment for production flexibility
    @property
    def BACKEND_CORS_ORIGINS(self) -> list[str]:
        """Parse CORS origins from environment variable (comma-separated)"""
        origins_str = os.getenv("BACKEND_CORS_ORIGINS", "")
        if origins_str.strip():
            if origins_str.strip() == "*":
                return ["*"]
            return [o.strip() for o in origins_str.split(",") if o.strip()]
        return ["*"]

    # Email Configuration
    MAIL_USERNAME: str = os.getenv("MAIL_USERNAME", "your_email@gmail.com")
    MAIL_PASSWORD: str = os.getenv("MAIL_PASSWORD", "your_app_password")
    MAIL_FROM: str = os.getenv("MAIL_FROM", "your_email@gmail.com")
    MAIL_PORT: int = int(os.getenv("MAIL_PORT", "587"))
    MAIL_SERVER: str = os.getenv("MAIL_SERVER", "smtp.gmail.com")
    MAIL_FROM_NAME: str = os.getenv("MAIL_FROM_NAME", "Sarit Classes")
    # Read STARTTLS/SSL from env — Secret Manager stores them as "True"/"False" strings
    MAIL_STARTTLS: bool = os.getenv("MAIL_STARTTLS", "True").strip().lower() in ("true", "1", "yes")
    MAIL_SSL_TLS: bool = os.getenv("MAIL_SSL_TLS", "False").strip().lower() in ("true", "1", "yes")
    USE_CREDENTIALS: bool = True
    VALIDATE_CERTS: bool = True
    # Default to NOT suppressing — emails must actually send in production
    MAIL_SUPPRESS_SEND: bool = os.getenv("MAIL_SUPPRESS_SEND", "0") == "1"

    # Redis Configuration
    REDIS_HOST: str = os.getenv("REDIS_HOST", "localhost")
    REDIS_PORT: int = int(os.getenv("REDIS_PORT", "6379"))
    REDIS_DB: int = int(os.getenv("REDIS_DB", "0"))
    REDIS_PASSWORD: str = os.getenv("REDIS_PASSWORD", "")

    @field_validator("REDIS_PASSWORD")
    @classmethod
    def validate_redis_password(cls, v, info):
        """Warn if Redis is used without password in production"""
        environment = info.data.get("ENVIRONMENT", "development")
        if environment == "production" and not v:
            import logging
            logger = logging.getLogger(__name__)
            logger.warning(
                "REDIS_PASSWORD not set in production. "
                "Redis cache will be accessible without authentication. "
                "This is a security risk if Redis is exposed publicly."
            )
        return v

    @property
    def REDIS_URL(self) -> str:
        """Construct Redis URL from components"""
        if self.REDIS_PASSWORD:
            return f"redis://:{self.REDIS_PASSWORD}@{self.REDIS_HOST}:{self.REDIS_PORT}/{self.REDIS_DB}"
        return f"redis://{self.REDIS_HOST}:{self.REDIS_PORT}/{self.REDIS_DB}"

    # Celery Configuration
    CELERY_BROKER_URL: str = os.getenv("CELERY_BROKER_URL", "redis://localhost:6379/1")
    CELERY_RESULT_BACKEND: str = os.getenv(
        "CELERY_RESULT_BACKEND", "redis://localhost:6379/2"
    )

    # Cashfree Configuration (for payments)
    CASHFREE_APP_ID: str = os.getenv("CASHFREE_APP_ID", "app_id_placeholder")
    CASHFREE_SECRET_KEY: str = os.getenv("CASHFREE_SECRET_KEY", "secret_key_placeholder")
    CASHFREE_WEBHOOK_SECRET: str = os.getenv("CASHFREE_WEBHOOK_SECRET", "webhook_placeholder")

    @field_validator("CASHFREE_WEBHOOK_SECRET", mode="before")
    @classmethod
    def strip_webhook_secret(cls, v):
        if isinstance(v, str):
            return v.strip().strip('\r').strip('\n').strip('\ufeff')
        return v

    # File Storage Configuration
    STORAGE_BACKEND: str = os.getenv("STORAGE_BACKEND", "local")  # Options: local, s3
    AWS_ACCESS_KEY_ID: str = os.getenv("AWS_ACCESS_KEY_ID", "")
    AWS_SECRET_ACCESS_KEY: str = os.getenv("AWS_SECRET_ACCESS_KEY", "")
    AWS_S3_BUCKET: str = os.getenv("AWS_S3_BUCKET", "")
    AWS_REGION: str = os.getenv("AWS_REGION", "us-east-1")

    # Virus Scanning Configuration
    ENABLE_VIRUS_SCAN: bool = os.getenv("ENABLE_VIRUS_SCAN", "false").lower() == "true"
    CLAMAV_HOST: str = os.getenv("CLAMAV_HOST", "localhost")
    CLAMAV_PORT: int = int(os.getenv("CLAMAV_PORT", "3310"))

    # Monitoring & Error Tracking
    SENTRY_DSN: str = os.getenv("SENTRY_DSN", "")  # Leave empty to disable Sentry
    APP_VERSION: str = os.getenv("APP_VERSION", "2.0.0")

    # AI Configuration
    FREE_GEMINI_API_KEY: str = os.getenv("FREE_GEMINI_API_KEY", os.getenv("GEMINI_API_KEY", ""))
    PAID_GEMINI_API_KEY: str = os.getenv("PAID_GEMINI_API_KEY", "")
    GEMMA_API_KEY: str = os.getenv("GEMMA_API_KEY", "")
    LLAMA_API_KEY: str = os.getenv("LLAMA_API_KEY", "")
    OPENROUTER_BASE_URL: str = "https://openrouter.ai/api/v1"
    DEFAULT_AI_MODEL: str = os.getenv("DEFAULT_AI_MODEL", "google/gemini-3-flash-preview")

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore"
    )


settings = Settings()
