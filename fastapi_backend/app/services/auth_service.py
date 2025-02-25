from app.db.session import users_collection
from app.core.security import hash_password, verify_password, create_jwt_token
from app.models.user import User

async def register_user(user_data: User):
    existing_user = await users_collection.find_one({"email": user_data.email})
    if existing_user:
        return {"error": "User already exists"}
    
    hashed_pw = hash_password(user_data.password)
    await users_collection.insert_one({"email": user_data.email, "password": hashed_pw})
    return {"message": "User registered successfully"}

async def login_user(email: str, password: str):
    user = await users_collection.find_one({"email": email})
    if not user or not verify_password(password, user["password"]):
        return {"error": "Invalid credentials"}
    
    token = create_jwt_token({"email": email})
    return {"access_token": token}
