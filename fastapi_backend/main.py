from fastapi import FastAPI
from app.api import auth, prescriptions,ner,image_classifier

app = FastAPI()

app.include_router(auth.router, prefix="/auth", tags=["Authentication"])
app.include_router(prescriptions.router, prefix="/ocr", tags=["Prescriptions"])
app.include_router(ner.router,prefix="/ner",tags=['Medical Named Entity Recognition'])
app.include_router(image_classifier.router,prefix="/image",tags=["Medical Image Classification"])

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def home():
    return {"message": "Welcome to PharmaMind"}
