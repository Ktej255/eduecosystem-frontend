from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.api.deps import get_db
from app.models.domain import MenuItem
from pydantic import BaseModel
from typing import List, Optional

router = APIRouter()

class MenuItemSchema(BaseModel):
    id: Optional[int] = None
    name: str
    category: str
    selling_price: float
    cost_price: float
    is_available: bool = True

    class Config:
        from_attributes = True

@router.get("/menu", response_model=List[MenuItemSchema])
def get_menu(db: Session = Depends(get_db)):
    return db.query(MenuItem).all()

@router.post("/menu", response_model=MenuItemSchema)
def update_or_create_menu(item: MenuItemSchema, db: Session = Depends(get_db)):
    if item.id:
        db_item = db.query(MenuItem).filter(MenuItem.id == item.id).first()
        if not db_item:
            raise HTTPException(status_code=404, detail="Item not found")
        db_item.name = item.name
        db_item.category = item.category
        db_item.selling_price = item.selling_price
        db_item.cost_price = item.cost_price
        db_item.is_available = item.is_available
    else:
        db_item = MenuItem(
            name=item.name,
            category=item.category,
            selling_price=item.selling_price,
            cost_price=item.cost_price,
            is_available=item.is_available
        )
        db.add(db_item)
    
    db.commit()
    db.refresh(db_item)
    return db_item

@router.delete("/menu/{item_id}")
def delete_menu_item(item_id: int, db: Session = Depends(get_db)):
    db_item = db.query(MenuItem).filter(MenuItem.id == item_id).first()
    if not db_item:
        raise HTTPException(status_code=404, detail="Item not found")
    db.delete(db_item)
    db.commit()
    return {"status": "success"}
