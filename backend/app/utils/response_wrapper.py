from typing import Any, Optional
from pydantic import BaseModel

class APIResponse(BaseModel):
    success: bool
    data: Optional[Any] = None
    message: str = ""

def wrap_response(data: Any = None, success: bool = True, message: str = "") -> dict:
    return {
        "success": success,
        "data": data,
        "message": message
    }
