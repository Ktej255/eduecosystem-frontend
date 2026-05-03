import logging
import requests
from typing import Any, Dict
from app.core.config import settings
from app.services.cache_service import cache_service

logger = logging.getLogger(__name__)

class AlertService:
    """
    Unified Alerting Service for Infrastructure & Security.
    Supports Slack/Discord webhooks with Redis-based rate limiting.
    """

    def send_critical_alert(self, domain: str, message: str, metadata: Dict[str, Any] = None):
        """
        Send a CRITICAL alert to the external webhook.
        Rate-limited to 1 alert per 5 minutes per domain to prevent spam.
        """
        webhook_url = getattr(settings, "ALERT_WEBHOOK_URL", None)
        if not webhook_url or webhook_url == "placeholder":
            logger.warning(f"ALERT_SERVICE: No webhook configured. Suppressing alert: [{domain}] {message}")
            return

        # Rate limiting: 1 alert per 300s per domain
        lock_key = f"alert_limit:{domain}"
        if cache_service.client.get(lock_key):
            logger.info(f"ALERT_SERVICE: Rate limit active for {domain}. Skipping alert.")
            return

        payload = {
            "text": f"🚨 *CRITICAL SYSTEM ALERT* 🚨\n*Domain:* {domain}\n*Message:* {message}\n*Metadata:* {metadata or {}}"
        }

        try:
            response = requests.post(webhook_url, json=payload, timeout=5)
            response.raise_for_status()
            
            # Set rate limit lock
            cache_service.client.set(lock_key, "1", ex=300)
            logger.info(f"ALERT_SERVICE: Successfully sent critical alert for {domain}")
        except Exception as e:
            logger.error(f"ALERT_SERVICE: Failed to send alert: {e}")

alert_service = AlertService()
