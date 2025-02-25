import pytesseract
from fastapi import APIRouter, File, UploadFile
from PIL import Image
from app.db.session import prescriptions_collection

router = APIRouter()

@router.post("/upload")
async def upload_prescription(file: UploadFile = File(...)):
    image = Image.open(file.file)
    text = pytesseract.image_to_string(image)
    await prescriptions_collection.insert_one({"text": text})
    return {"extracted_text": text}
