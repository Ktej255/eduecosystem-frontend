import re

file_path = r"d:\MasterSoftware\sarit-graphotherapy\backend\app\api\api_v1\endpoints\graphotherapy.py"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace class
old_class = """class SectionPurchaseRequest(_BaseModel):
    section_id: str
    section_name: str"""

new_class = """from typing import Optional

class SectionPurchaseRequest(_BaseModel):
    section_id: str
    section_name: str
    amount: Optional[int] = None"""

content = content.replace(old_class, new_class)

# Replace price logic
old_logic = """    import httpx
    import time

    section_price = 1 if TEST_MODE else 29"""

new_logic = """    import httpx
    import time

    TEST_MODE = True
    if TEST_MODE:
        section_price = 1
    else:
        section_price = request.amount or 59"""

content = content.replace(old_logic, new_logic)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Backend Edit Done")
