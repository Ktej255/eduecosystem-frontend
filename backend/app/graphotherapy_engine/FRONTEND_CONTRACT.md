# Graphotherapy Frontend UI Contract (v1.0)

This document defines the strict communication and rendering protocol between the **Graphotherapy Analysis Orchestrator** and the **React Frontend**.

## 1. Global Response Schema
The backend will ALWAYS return this root structure. Frontend must not expect optional top-level keys.

```json
{
    "report": {
        "summary_hook": "String (Dynamic opening)",
        "summary": "String (Core overview)",
        "dimensions": "Array[Object] (Unlocked items)",
        "locked_sections": "Array[Object] (Gated items)",
        "micro_cta": "Array[Object] (Inline buttons)",
        "scroll_triggers": {
            "primary_popup": 65,
            "secondary_popup": 85
        }
    },
    "pdf_blueprint": { "pages": "Array[Object]" },
    "monetization": {
        "current_offer": "Object | null",
        "offer_triggers": { "primary": 65, "secondary": 85 }
    },
    "adaptive_layer": {
        "personalized_order": "Array[String]",
        "behavior_signals": {
            "engagement_level": "new | returning",
            "interest_focus": "String"
        }
    },
    "system_meta": {
        "version": "v1.0",
        "processing_time_ms": "Number"
    }
}
```

## 2. Rendering Rules: Dimension Cards

### Sequence Order
1. Render `report.summary_hook` first (Large typography).
2. Map through `report.dimensions` in the order provided by the array.
3. Append `report.locked_sections` at the end.

### Dimension Block Structure
Each dimension must follow the "Progressive Disclosure" layout:
- **Title**: `dimension.name`
- **Body**: Render blocks `what`, `why`, `impact`, `pattern`, `suggestion`.
- **Constraint**: DO NOT combine into one paragraph. Use separate `<p>` or `<div>` blocks.

## 3. Gated Content (Locks & Blurs)

If a section is in `locked_sections`:
- `blur_level`:
    - `high`: Apply `backdrop-filter: blur(12px)`. Text is unreadable.
    - `medium`: Apply `backdrop-filter: blur(6px)`. Shapes are visible, text is unreadable.
    - `low`: Apply `backdrop-filter: blur(3px)`. Hints are almost legible.
- `preview`: Display this text overlaying or above the blurred block.
- `CTA`: Show an "Unlock Full Blueprint" button leading to the current offer.

## 4. Conversion Triggers (Scroll & Popups)

### Scroll Thresholds
- **Threshold A (65%)**: Trigger `monetization.current_offer` as a central modal.
- **Threshold B (85%)**: If Modal A was dismissed, trigger a sticky bottom-bar urgency offer.
- **Rule**: Never show more than one modal per session.

## 5. Offer Logic
If `monetization.current_offer` exists:
- `message`: Use this as the main heading (it is personalized).
- `timer`: Start a JS countdown from `validity_timer` (seconds).
- `pricing`: Show `base_price` with strike-through and `price` in highlight.

## 6. Adaptive Signals
- `engagement_level == "returning"`: Auto-expand the summary. Highlight `interest_focus` with a subtle border/glow.
- `micro_cta`: Place these inline immediately after the dimension matching `cta.after_dimension`.

## 7. Error Fallback
If `system_meta.status == "partial_failure"`:
- Show a "Rescan Required" layout.
- Use `report.summary` as the error explanation.
- Priority UI: A large "Retake Photo" button.
