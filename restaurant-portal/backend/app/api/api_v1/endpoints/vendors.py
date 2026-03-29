from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import text
from app.api.deps import get_db
from pydantic import BaseModel
from typing import Optional, List
from datetime import date

router = APIRouter()

class PriceEntry(BaseModel):
    vendor_id: int
    item_name: str
    price_per_unit: float
    unit: str
    notes: Optional[str] = None

@router.get("/")
def get_vendors(db: Session = Depends(get_db)):
    result = db.execute(text("SELECT * FROM vendors ORDER BY name")).fetchall()
    return [dict(r._mapping) for r in result]

@router.post("/prices")
def record_price(entry: PriceEntry, db: Session = Depends(get_db)):
    db.execute(text("""
        INSERT INTO vendor_price_history (vendor_id, item_name, price_per_unit, unit, notes)
        VALUES (:vid, :item, :price, :unit, :notes)
    """), {
        "vid": entry.vendor_id, "item": entry.item_name,
        "price": entry.price_per_unit, "unit": entry.unit, "notes": entry.notes
    })
    db.commit()
    return {"status": "recorded"}

@router.get("/prices/{item_name}")
def price_history(item_name: str, db: Session = Depends(get_db)):
    result = db.execute(text("""
        SELECT vph.recorded_date, vph.price_per_unit, vph.unit, v.name as vendor_name
        FROM vendor_price_history vph
        JOIN vendors v ON v.id = vph.vendor_id
        WHERE LOWER(vph.item_name) = LOWER(:item)
        ORDER BY vph.recorded_date ASC
    """), {"item": item_name}).fetchall()
    rows = [dict(r._mapping) for r in result]
    if len(rows) >= 2:
        first = rows[0]["price_per_unit"]
        last = rows[-1]["price_per_unit"]
        change_pct = round((last - first) / first * 100, 1) if first > 0 else 0
    else:
        change_pct = 0
    return {"item": item_name, "history": rows, "price_change_pct": change_pct}

@router.get("/prices/alerts/increases")
def price_increase_alerts(db: Session = Depends(get_db)):
    # Simple alert logic: check if latest price is > 5% higher than any previous price for same item
    result = db.execute(text("""
        WITH stats AS (
            SELECT item_name,
                FIRST_VALUE(price_per_unit) OVER (PARTITION BY item_name ORDER BY recorded_date ASC) as first_price,
                LAST_VALUE(price_per_unit) OVER (PARTITION BY item_name ORDER BY recorded_date ASC
                    ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) as latest_price,
                unit
            FROM vendor_price_history
        )
        SELECT DISTINCT item_name, first_price, latest_price, unit FROM stats
    """)).fetchall()
    
    alerts = []
    for r in result:
        change = round((r.latest_price - r.first_price) / r.first_price * 100, 1) if r.first_price > 0 else 0
        if change > 5:
            alerts.append({
                "item": r.item_name,
                "first_price": r.first_price,
                "latest_price": r.latest_price,
                "increase_pct": change,
                "unit": r.unit
            })
    alerts.sort(key=lambda x: x["increase_pct"], reverse=True)
    return {"alerts": alerts}
