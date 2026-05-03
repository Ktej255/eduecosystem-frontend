import json
import logging
import asyncio
from datetime import datetime
from typing import Dict, Any
from app.core.celery_app import celery_app
from app.db.session import SessionLocal
from app.models.graphotherapy import HandwritingSnapshot
from app.services.gemini_service import gemini_service
from app.services.progress_engine import progress_engine
from app.core.redis_client import redis_client

logger = logging.getLogger(__name__)

@celery_app.task(name="analyze_handwriting_snapshot")
def analyze_snapshot_task(snapshot_id: int):
    """
    Background worker to process handwriting snapshots with AI.
    Implements Task 1 & 2: 5s timeout, non-blocking, and retry logic.
    """
    db = SessionLocal()
    try:
        snapshot = db.query(HandwritingSnapshot).filter(HandwritingSnapshot.id == snapshot_id).first()
        if not snapshot:
            logger.error(f"Snapshot {snapshot_id} not found")
            return

        # Update status to processing
        snapshot.status = "processing"
        snapshot.analysis_started_at = datetime.utcnow()
        db.commit()
        
        # Redis real-time signal (Task 2)
        redis_client.set(f"snapshot:{snapshot_id}:status", "processing", ex=3600)

        # AI Extraction with timeout (Task 1)
        prompt = f"""
        Perform high-precision feature extraction on this handwriting image: {snapshot.image_url}
        
        Extract:
        1. Slant (Degrees: -45 to 45)
        2. Pressure (Scale 1-10)
        3. Word Spacing (Scale 1-10)
        4. Baseline Stability (Scale 1-10)
        
        Map to Traits:
        1. Emotional Stability
        2. Focus
        3. Confidence
        
        Return JSON ONLY:
        {{
            "features": {{"slant": 0, "pressure": 0, "spacing": 0, "baseline": 0}},
            "traits": {{"stability": 0, "focus": 0, "confidence": 0}}
        }}
        """

        # Using a helper with timeout
        async def run_with_timeout():
            return await gemini_service.generate_text_async(prompt, is_complex=False)

        try:
            # Task 1: 5s timeout, non-blocking via asyncio
            # Helper to run the async task
            def execute_ai():
                try:
                    loop = asyncio.get_event_loop()
                    if loop.is_running():
                        # Use a separate thread to run the async task if loop is already running
                        import concurrent.futures
                        with concurrent.futures.ThreadPoolExecutor() as executor:
                            return executor.submit(lambda: asyncio.run(asyncio.wait_for(run_with_timeout(), timeout=5.0))).result()
                    else:
                        return loop.run_until_complete(asyncio.wait_for(run_with_timeout(), timeout=5.0))
                except RuntimeError:
                    # No loop in this thread, use asyncio.run
                    return asyncio.run(asyncio.wait_for(run_with_timeout(), timeout=5.0))

            response = execute_ai()
            
            import re
            json_match = re.search(r"\{.*\}", response, re.DOTALL)
            if json_match:
                data = json.loads(json_match.group())
                snapshot.extracted_features = data.get("features", {})
                snapshot.trait_scores = data.get("traits", {})
                snapshot.status = "complete"
                snapshot.analysis_completed_at = datetime.utcnow()
                
                # Redis update
                redis_client.set(f"snapshot:{snapshot_id}:status", "complete", ex=3600)
            else:
                raise ValueError("Incomplete AI response")

        except asyncio.TimeoutError:
            logger.warning(f"Timeout analyzing snapshot {snapshot_id}")
            snapshot.status = "pending_analysis" # Will retry via queue
            snapshot.error_message = "Analysis timeout"
            snapshot.retry_count += 1
            if snapshot.retry_count < 3:
                # Re-queue
                analyze_snapshot_task.apply_async((snapshot_id,), countdown=60)
                
        except Exception as e:
            logger.error(f"Analysis failed for {snapshot_id}: {e}")
            snapshot.status = "failed"
            snapshot.error_message = str(e)

        db.commit()

    except Exception as e:
        logger.error(f"Snapshot worker crash: {e}")
        db.rollback()
    finally:
        db.close()
