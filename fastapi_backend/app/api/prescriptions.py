import pytesseract
from fastapi import APIRouter, File, UploadFile, HTTPException
from PIL import Image, UnidentifiedImageError
from io import BytesIO
from app.db.session import prescriptions_collection

router = APIRouter()

@router.post("/upload")
async def ocr_prescription(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        
        print(f"Received file: {file.filename}, Size: {len(contents)} bytes")

        image = Image.open(BytesIO(contents))

        print(f"Image format: {image.format}")

        text = pytesseract.image_to_string(image)
        print(f"Extracted Text: {text[:50]}...") 

        await prescriptions_collection.insert_one({"text": text})

        return {"extracted_text": text}
    
    except UnidentifiedImageError:
        raise HTTPException(status_code=400, detail="Invalid image format")
    except Exception as e:
        print("Error:", e)
        raise HTTPException(status_code=500, detail=str(e))
