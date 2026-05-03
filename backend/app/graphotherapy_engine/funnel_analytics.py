"""
FunnelAnalytics — 100% DB + Redis backed.
Writes events to AnalyticsEvent (PostgreSQL).
Aggregation served from Redis cache (60s TTL) backed by live DB query.
No flat files. No hardcoded data.
"""
import json
import logging
from datetime import datetime
from typing import Dict, Optional

logger = logging.getLogger(__name__)

# Funnel stages in waterfall order
FUNNEL_STAGES = [
    "ad_entry",
    "upload_started",
    "report_generated",
    "scroll_65",
    "offer_seen",
    "offer_clicked",
    "payment_initiated",
    "payment_success",
    "upsell_taken",
    "downsell_taken",
]

METRICS_CACHE_KEY = "funnel:aggregated_metrics"
METRICS_CACHE_TTL = 60  # seconds


class FunnelAnalytics:
    def track_event(
        self,
        stage: str,
        user_id: str,
        db,
        metadata: Optional[Dict] = None,
    ) -> bool:
        """
        Persist a funnel event to PostgreSQL via AnalyticsEvent.
        Invalidates the Redis metrics cache so next read is fresh.

        Args:
            stage: Funnel stage name (must be in FUNNEL_STAGES).
            user_id: String identifier for the user (stored in session_id).
            db: SQLAlchemy Session — required.
            metadata: Optional dict of extra context.
        """
        if stage not in FUNNEL_STAGES:
            logger.warning(f"[FUNNEL] Unknown stage '{stage}' — rejecting track_event")
            return False

        if db is None:
            raise RuntimeError(
                "FunnelAnalytics.track_event requires a live DB session. "
                "No flat-file fallback allowed."
            )

        try:
            from app.models.analytics import AnalyticsEvent

            event = AnalyticsEvent(
                event_type=f"funnel:{stage}",
                session_id=str(user_id),
                event_data=json.dumps(
                    {
                        "stage": stage,
                        "user_id": user_id,
                        "metadata": metadata or {},
                        "tracked_at": datetime.utcnow().isoformat(),
                    }
                ),
            )
            db.add(event)
            db.commit()

            # Invalidate cached aggregate so next call is fresh
            try:
                from app.services.cache_service import cache_service
                cache_service.client.delete(METRICS_CACHE_KEY)
            except Exception as cache_err:
                logger.warning(f"[FUNNEL] Cache invalidation failed (non-fatal): {cache_err}")

            logger.info(f"[FUNNEL] Tracked stage='{stage}' for user='{user_id}'")
            return True

        except Exception as e:
            db.rollback()
            logger.error(f"[FUNNEL] DB write failed for stage='{stage}': {e}")
            return False

    def get_aggregated_metrics(self, db) -> Dict:
        """
        Returns funnel waterfall metrics.
        Served from Redis cache (60s TTL).
        On cache miss: queries DB directly and repopulates cache.

        Args:
            db: SQLAlchemy Session — required for cache-miss DB fallback.
        """
        if db is None:
            raise RuntimeError(
                "FunnelAnalytics.get_aggregated_metrics requires a live DB session."
            )

        # ── 1. Redis cache fast-path ───────────────────────────────────────────
        try:
            from app.services.cache_service import cache_service
            cached = cache_service.client.get(METRICS_CACHE_KEY)
            if cached:
                logger.debug("[FUNNEL] Serving aggregated metrics from Redis cache")
                return json.loads(cached)
        except Exception as cache_err:
            logger.warning(f"[FUNNEL] Redis cache read failed (falling through to DB): {cache_err}")

        # ── 2. Live DB query ───────────────────────────────────────────────────
        try:
            from app.models.analytics import AnalyticsEvent
            from sqlalchemy import func

            stage_counts: Dict[str, int] = {stage: 0 for stage in FUNNEL_STAGES}

            # Count distinct users per funnel stage using session_id as proxy for user
            rows = (
                db.query(
                    AnalyticsEvent.event_type,
                    func.count(func.distinct(AnalyticsEvent.session_id)),
                )
                .filter(
                    AnalyticsEvent.event_type.in_(
                        [f"funnel:{s}" for s in FUNNEL_STAGES]
                    )
                )
                .group_by(AnalyticsEvent.event_type)
                .all()
            )

            for event_type, count in rows:
                stage = event_type.replace("funnel:", "", 1)
                if stage in stage_counts:
                    stage_counts[stage] = count

            total_users = stage_counts.get("ad_entry", 0)

            metrics = {
                "total_users": total_users,
                "stages": stage_counts,
                "drop_off": {
                    "before_report": (
                        stage_counts["upload_started"] - stage_counts["report_generated"]
                    ),
                    "after_report": (
                        stage_counts["report_generated"] - stage_counts["offer_seen"]
                    ),
                    "checkout": (
                        stage_counts["payment_initiated"] - stage_counts["payment_success"]
                    ),
                },
                "data_source": "DB:analytics_events",
                "computed_at": datetime.utcnow().isoformat(),
            }

            # ── 3. Repopulate Redis cache ──────────────────────────────────────
            try:
                cache_service.client.set(
                    METRICS_CACHE_KEY,
                    json.dumps(metrics),
                    ex=METRICS_CACHE_TTL,
                )
                logger.debug(f"[FUNNEL] Metrics cached in Redis for {METRICS_CACHE_TTL}s")
            except Exception as cache_err:
                logger.warning(f"[FUNNEL] Redis cache write failed (non-fatal): {cache_err}")

            return metrics

        except Exception as e:
            logger.error(f"[FUNNEL] DB aggregation query failed: {e}")
            raise RuntimeError(f"FunnelAnalytics: DB query failed — {e}")


funnel_analytics = FunnelAnalytics()
