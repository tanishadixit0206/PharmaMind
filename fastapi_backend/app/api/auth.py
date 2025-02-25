from fastapi import APIRouter, HTTPException
from app.services.auth_service import register_user, login_user
from app.models.user import User

router = APIRouter()

@router.post("/register")
async def register(user: User):
    result = await register_user(user)
    if "error" in result:
        raise HTTPException(status_code=400, detail=result["error"])
    return result

@router.post("/login")
async def login(user: User):
    result = await login_user(user.email, user.password)
    if "error" in result:
        raise HTTPException(status_code=401, detail=result["error"])
    return result
