import logging
import json
from typing import Dict, Any, List, Optional

logger = logging.getLogger(__name__)

class ValidationEngine:
    def validate_response(self, response: Dict[str, Any], purchase_type: str) -> Dict[str, Any]:
        """
        Final gateway validation before sending to frontend.
        Returns a safe, validated response.
        """
        try:
            # PHASE 2: Top-level key validation
            required_keys = ["report", "pdf_blueprint", "monetization", "adaptive_layer", "system_meta"]
            for key in required_keys:
                if key not in response or response[key] is None:
                    logger.error(f"[VALIDATION FAILED] Missing or null key: {key}")
                    return self._generate_safe_fallback("Structural integrity failure.")

            # PHASE 3 & 4: Report & Lock Integrity
            validated_report = self._validate_report(response["report"], purchase_type)
            response["report"] = validated_report

            # PHASE 6: Monetization Validation
            validated_monetization = self._validate_monetization(response["monetization"])
            response["monetization"] = validated_monetization

            # PHASE 7: PDF Blueprint Validation
            validated_pdf = self._validate_pdf_blueprint(response["pdf_blueprint"])
            response["pdf_blueprint"] = validated_pdf

            # PHASE 8: Adaptive Layer Validation
            validated_adaptive = self._validate_adaptive_layer(response["adaptive_layer"])
            response["adaptive_layer"] = validated_adaptive

            return response

        except Exception as e:
            logger.error(f"[VALIDATION CRITICAL ERROR] {e}")
            return self._generate_safe_fallback(f"Internal validation error: {str(e)}")

    def _validate_report(self, report: Dict[str, Any], purchase_type: str) -> Dict[str, Any]:
        """
        Validate dimensions and ensure no leakage.
        """
        dimensions = report.get("dimensions", [])
        locked_sections = report.get("locked_sections", [])

        # Validate unlocked dimensions
        valid_dims = []
        for dim in dimensions:
            if not all(k in dim for k in ["name", "score", "content"]):
                continue
            
            # PHASE 4: Leakage Prevention
            # If not full, ensure 'impact' and 'suggestion' are empty strings if they slipped through
            name = dim.get("name", "unknown")
            if purchase_type != "full_1299" and isinstance(dim["content"], dict):
                content = dim["content"]
                if content.get("impact"): content["impact"] = ""
                if content.get("suggestion") and purchase_type == "free": 
                    content["suggestion"] = ""
            
            # PHASE 5: Template Validation & AI-Text Detection
            self._audit_content_authenticity(dim, name)
            
            valid_dims.append(dim)
        
        report["dimensions"] = valid_dims

        # Validate locked sections
        valid_locked = []
        for l in locked_sections:
            if all(k in l for k in ["name", "is_locked", "blur_level", "preview"]):
                valid_locked.append(l)
        
        report["locked_sections"] = valid_locked
        return report

    def _validate_monetization(self, mon: Dict[str, Any]) -> Dict[str, Any]:
        """
        Ensure offer sanity.
        """
        offer = mon.get("current_offer")
        if not offer:
            return mon

        required_offer_keys = ["offer_id", "price", "base_price", "validity_timer"]
        if not all(k in offer for k in required_offer_keys):
            logger.warning("[VALIDATION] Malformed offer detected. Disabling offer.")
            mon["current_offer"] = None
            return mon

        # Timer sanity (Phase 6)
        if not (0 <= offer.get("validity_timer", 0) <= 600):
            offer["validity_timer"] = 300

        return mon

    def _validate_pdf_blueprint(self, pdf: Dict[str, Any]) -> Dict[str, Any]:
        """
        Validate PDF structure.
        """
        if "pages" not in pdf or not isinstance(pdf["pages"], list):
            return {"pages": []}
        
        valid_pages = []
        for page in pdf["pages"]:
            if page.get("type") in ["cover", "content"]:
                valid_pages.append(page)
        
        pdf["pages"] = valid_pages
        return pdf

    def _validate_adaptive_layer(self, adaptive: Dict[str, Any]) -> Dict[str, Any]:
        """
        Validate adaptive metadata.
        """
        if "personalized_order" not in adaptive:
            adaptive["personalized_order"] = []
        
        if "behavior_signals" not in adaptive:
            adaptive["behavior_signals"] = {"engagement_level": "new"}
            
        return adaptive

    def _generate_safe_fallback(self, error_msg: str) -> Dict[str, Any]:
        """
        PHASE 9: Minimal Safe Response.
        """
        return {
            "report": {
                "summary_hook": "Analysis is being processed.",
                "summary": "We are currently validating your report for accuracy. Please refresh in a moment.",
                "dimensions": [],
                "locked_sections": []
            },
            "pdf_blueprint": {"pages": []},
            "monetization": {"current_offer": None, "offer_triggers": {"primary": 0, "secondary": 0}},
            "adaptive_layer": {"personalized_order": [], "behavior_signals": {"engagement_level": "new"}},
            "system_meta": {
                "version": "v1.0",
                "status": "validation_failure",
                "error": error_msg
            }
        }

    def _audit_content_authenticity(self, dim: Dict[str, Any], dim_name: str):
        """
        Ensure content is derived from templates and not raw AI output.
        """
        forbidden_patterns = ["As an AI", "In my analysis", "However, it is important to note", "```json"]
        content = dim.get("content", {})
        
        if isinstance(content, dict):
            for key, text in content.items():
                if not isinstance(text, str): continue
                
                # Check for generic AI signatures
                if any(p in text for p in forbidden_patterns):
                    logger.warning(f"[VALIDATION] Potential AI signature detected in {dim_name}:{key}")
                    content[key] = f"Insights for {dim_name} are currently being verified."

                # Check for extreme length (templates are usually concise)
                if len(text) > 800:
                    logger.warning(f"[VALIDATION] Content for {dim_name} exceeds safety length. Truncating.")
                    content[key] = text[:500] + "..."

validation_engine = ValidationEngine()
