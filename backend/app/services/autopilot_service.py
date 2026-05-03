import logging
from datetime import datetime
from typing import Any, Dict
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.core.config import settings
from app.services.cache_service import cache_service
from app.core.system_guard import system_guard
from app.models.decision_memory import DecisionMemory
from app.models.app_config import AppConfig
from app.models.analytics import AnalyticsEvent
from app.models.course_payment import CoursePayment
from app.models.student_report import StudentReport

logger = logging.getLogger(__name__)

class AutopilotService:
    """
    Autonomous Scaling & Strategy Service.
    Handles decision making, state updates, and persistence.
    """

    def _upsert_config(self, db: Session, key: str, value: Any, description: str = ""):
        record = db.query(AppConfig).filter(AppConfig.key == key).first()
        if record:
            record.value = value
        else:
            record = AppConfig(key=key, value=value, description=description)
            db.add(record)
        db.flush()
        return record

    def run_autopilot_cycle(self, db: Session) -> Dict[str, Any]:
        """
        Executes one full autopilot iteration: Telemetry -> Decision -> Action -> Audit.
        """
        # 1. SystemGuard Check
        current_mode = system_guard.get_mode()
        if current_mode != "NORMAL":
            logger.warning(f"AUTOPILOT: Cycle blocked by system mode: {current_mode}")
            return {"status": "blocked", "mode": current_mode}

        # 2. Redis Lock
        lock_key = "lock:autopilot"
        acquired = cache_service.client.set(lock_key, "locked", ex=60, nx=True)
        if not acquired:
            logger.info("AUTOPILOT: Cycle skipped - lock held")
            return {"status": "skipped", "reason": "lock_held"}

        try:
            # 3. Read Telemetry
            total_sessions = db.query(func.count(AnalyticsEvent.id)).filter(AnalyticsEvent.event_type == "session_start").scalar() or 0
            total_purchases = db.query(func.count(CoursePayment.id)).filter(CoursePayment.status == "succeeded").scalar() or 0
            total_revenue = float(db.query(func.sum(CoursePayment.amount)).filter(CoursePayment.status == "succeeded").scalar() or 0.0)
            total_students = db.query(func.count(StudentReport.id)).scalar() or 0

            cr = round((total_purchases / total_sessions * 100), 4) if total_sessions > 0 else 0.0

            # Current State
            existing_config = db.query(AppConfig).filter(AppConfig.key == "pricing_config").first()
            current_pricing_mode = existing_config.value.get("pricing_mode", "STANDARD") if existing_config and isinstance(existing_config.value, dict) else "STANDARD"

            before_state = {
                "pricing_mode": current_pricing_mode,
                "cr": cr,
                "total_sessions": total_sessions,
                "total_purchases": total_purchases,
                "revenue": total_revenue,
                "students": total_students,
                "timestamp": datetime.utcnow().isoformat()
            }

            # 4. Decision Logic
            if cr < 1.5:
                new_pricing_mode = "AGGRESSIVE_RECOVERY"
                new_variant_weights = {"basic": 0.6, "recovery": 0.3, "premium": 0.1}
                recovery_active = True
                reason = f"CR={cr:.2f}% < 1.5%. Activating Aggressive Recovery."
            elif cr > 5.0:
                new_pricing_mode = "PREMIUM_MAX"
                new_variant_weights = {"basic": 0.1, "recovery": 0.1, "premium": 0.8}
                recovery_active = False
                reason = f"CR={cr:.2f}% > 5.0%. Maximizing Premium."
            else:
                new_pricing_mode = "STANDARD"
                new_variant_weights = {"basic": 0.4, "recovery": 0.2, "premium": 0.4}
                recovery_active = False
                reason = f"CR={cr:.2f}% (Normal). Maintaining Standard."

            # 5. Execute Actions (DB & Redis)
            self._upsert_config(db, "pricing_config", {
                "pricing_mode": new_pricing_mode,
                "updated_at": datetime.utcnow().isoformat(),
                "cr_at_update": cr
            }, "Autopilot-managed pricing strategy")

            self._upsert_config(db, "variant_weights", new_variant_weights, "Autopilot-managed A/B weights")
            self._upsert_config(db, "recovery_flags", {"recovery_active": recovery_active, "updated_at": datetime.utcnow().isoformat()}, "Autopilot-managed recovery flags")

            cache_service.client.set("config:pricing_strategy", new_pricing_mode)
            cache_service.client.set("config:variant_weights", str(new_variant_weights))
            cache_service.client.set("config:recovery_active", str(recovery_active).lower())

            after_state = {
                "pricing_mode": new_pricing_mode,
                "variant_weights": new_variant_weights,
                "recovery_active": recovery_active,
                "timestamp": datetime.utcnow().isoformat()
            }

            # 6. Audit Trail
            decision = DecisionMemory(
                action_type="STRATEGY_ADAPTATION",
                before_state=before_state,
                after_state=after_state,
                reason=reason,
                target_entity="REVENUE_AUTOPILOT"
            )
            db.add(decision)

            # Update Execution History in Redis
            run_ts = datetime.utcnow().isoformat()
            cache_service.client.lpush("scheduler:autopilot:history", f"SUCCESS|{run_ts}|{new_pricing_mode}")
            cache_service.client.ltrim("scheduler:autopilot:history", 0, 9)
            cache_service.client.set("autopilot:last_run", run_ts)
            cache_service.client.incr("autopilot:execution_count")

            db.commit()
            logger.info(f"AUTOPILOT SUCCESS: {new_pricing_mode} | CR: {cr:.2f}%")
            
            return {"status": "success", "strategy": new_pricing_mode, "reason": reason}

        except Exception as e:
            db.rollback()
            fail_ts = datetime.utcnow().isoformat()
            cache_service.client.lpush("scheduler:autopilot:history", f"FAILURE|{fail_ts}|{str(e)[:100]}")
            cache_service.client.ltrim("scheduler:autopilot:history", 0, 9)
            logger.error(f"AUTOPILOT CRITICAL FAILURE: {e}")
            raise e
        finally:
            cache_service.client.delete(lock_key)

autopilot_service = AutopilotService()
