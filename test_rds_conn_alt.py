
import sqlalchemy
from sqlalchemy import create_engine, text
import os

# Testing the "incorrect" one from logs just in case
DATABASE_URL = "postgresql://postgres:Edueco123!@eduecosystem.cjmue2c06ves.us-east-1.rds.amazonaws.com:5432/eduecosystem"

print(f"Attempting to connect to: {DATABASE_URL.split('@')[1]}")

try:
    engine = create_engine(DATABASE_URL, connect_args={'connect_timeout': 10})
    with engine.connect() as conn:
        result = conn.execute(text("SELECT 1"))
        print(f"Success! Result: {result.fetchone()}")
except Exception as e:
    print(f"Failed! Error: {e}")
