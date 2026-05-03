"""
ConfigService — Single source of truth for all runtime config.
Reads from: Redis (fast-path) → DB AppConfig (source of truth).
Autopilot writes here. All consumers read from here.
"""
import logging
from typing import Any, Dict, Optional

logger = logging.getLogger(__name__)


def get_config(key: str, db=None) -> Any:
    """
    Fetch a config value. Priority:
      1. Redis (sub-millisecond, set by autopilot)
      2. DB AppConfig row
    """
    # ── 1. Redis fast-path ────────────────────────────────────────────────────
    try:
        from app.services.cache_service import cache_service
        import json
        raw = cache_service.client.get(f"config:{key}")
        if raw:
            # Autopilot stores pricing_strategy as plain string, rest as JSON-like str
            try:
                return json.loads(raw)
            except (ValueError, TypeError):
                return raw
    except Exception as e:
        logger.warning(f"ConfigService: Redis read failed for '{key}': {e}")

    # ── 2. DB source of truth ─────────────────────────────────────────────────
    if db is not None:
        try:
            from app.models.app_config import AppConfig
            row = db.query(AppConfig).filter(AppConfig.key == key).first()
            if row:
                logger.debug(f"ConfigService: DB hit for '{key}'")
                return row.value
        except Exception as e:
            logger.warning(f"ConfigService: DB read failed for '{key}': {e}")

    # ── 3. STRICT ENFORCEMENT: No fallbacks allowed ───────────────────────────
    raise RuntimeError(f"ConfigService: CRITICAL ERROR. Missing config '{key}' in DB/Redis. System must be 100% config-driven.")


def get_pricing_mode(db=None) -> str:
    """Returns current pricing mode string. Used by /analyze and offer engine."""
    config = get_config("pricing_config", db)
    if isinstance(config, dict):
        return config.get("pricing_mode", "STANDARD")
    # Redis may store it as bare string under 'config:pricing_strategy'
    if isinstance(config, str):
        return config
    raise RuntimeError("Invalid pricing_config format")


def get_variant_weights(db=None) -> Dict[str, float]:
    """Returns variant weight dict. Used by experiment engine."""
    weights = get_config("variant_weights", db)
    if isinstance(weights, dict):
        return weights
    raise RuntimeError("Invalid variant_weights format")


def is_recovery_active(db=None) -> bool:
    """Returns whether recovery mode is active. Used by offer engine."""
    flags = get_config("recovery_flags", db)
    if isinstance(flags, dict):
        return bool(flags.get("recovery_active", False))
    return False
