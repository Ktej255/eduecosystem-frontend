with open("backend/app/services/order_service.py", "r") as f:
    content = f.read()

# Make sure indentation is correct for methods in class
print("build_order_response" in content)
