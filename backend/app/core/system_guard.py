import logging
from typing import Dict, Literal

logger = logging.getLogger(__name__)

SystemMode = Literal["NORMAL", "SAFE_MODE", "CRITICAL"]

class SystemGuard:
    """
    Global System Guard for Autonomous Operations.
    Manages platform states based on real-time telemetry.
    STRICT DEPENDENCY ON REDIS. No in-memory fallback.
    """
    
    def __init__(self):
        pass

    def get_mode(self) -> SystemMode:
        from app.services.cache_service import cache_service
        # NO try-except. Let it crash if Redis is unavailable.
        mode = cache_service.client.get("system:mode")
        if mode:
            # Decode if it's bytes
            mode_str = mode.decode('utf-8') if isinstance(mode, bytes) else str(mode)
            if mode_str in ["NORMAL", "SAFE_MODE", "CRITICAL"]:
                return mode_str
        return "NORMAL"

    def update_state(self, error_rate: float, latency_ms: float, rps: int):
        from app.services.cache_service import cache_service
        
        current_mode = self.get_mode()
        new_mode: SystemMode = "NORMAL"
        
        if error_rate > 0.05 or rps > 500:
            new_mode = "CRITICAL"
        elif error_rate > 0.02 or latency_ms > 500:
            new_mode = "SAFE_MODE"
            
        if new_mode != current_mode:
            logger.warning(f"SYSTEM_GUARD: Transitioning from {current_mode} to {new_mode} (Error: {error_rate:.2%}, Latency: {latency_ms}ms, RPS: {rps})")
            # Set to redis without fallback
            cache_service.client.set("system:mode", new_mode)
            
            # PHASE 22: Alerting Integration
            if new_mode in ["SAFE_MODE", "CRITICAL"]:
                from app.services.alert_service import alert_service
                alert_service.send_critical_alert(
                    domain="INFRASTRUCTURE",
                    message=f"System Mode Changed: {current_mode} -> {new_mode}",
                    metadata={
                        "error_rate": f"{error_rate:.2%}",
                        "latency_ms": latency_ms,
                        "rps": rps
                    }
                )

    def is_autopilot_allowed(self) -> bool:
        return self.get_mode() == "NORMAL"

    def is_analyze_allowed(self) -> bool:
        return self.get_mode() != "CRITICAL"

    def should_throttle_analyze(self) -> bool:
        return self.get_mode() == "SAFE_MODE"

system_guard = SystemGuard()
