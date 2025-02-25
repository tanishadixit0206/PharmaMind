from fastapi import FastAPI
from app.api import auth, prescriptions

app = FastAPI()

app.include_router(auth.router, prefix="/auth", tags=["Authentication"])
app.include_router(prescriptions.router, prefix="/prescriptions", tags=["Prescriptions"])

@app.get("/")
async def home():
    return {"message": "Welcome to PharmaMind"}
