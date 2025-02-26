from motor.motor_asyncio import AsyncIOMotorClient
from app.core.config import MONGO_URI

client = AsyncIOMotorClient(MONGO_URI)
db = client["PharmaMindDatabase"]
users_collection = db["users"]
prescriptions_collection = db["prescriptions"]
