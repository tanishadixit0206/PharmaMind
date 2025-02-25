from passlib.context import CryptContext
from datetime import datetime, timedelta
import jwt
from app.core.config import JWT_SECRET

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

def create_jwt_token(data: dict, expires_delta: int = 60) -> str:
    expire = datetime.utcnow() + timedelta(minutes=expires_delta)
    to_encode = {**data, "exp": expire}
    return jwt.encode(to_encode, JWT_SECRET, algorithm="HS256")
