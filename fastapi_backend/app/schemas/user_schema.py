from pydantic import BaseModel

class UserSchema(BaseModel):
    email: str
    hashed_password: str
