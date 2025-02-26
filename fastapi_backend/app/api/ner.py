from fastapi import APIRouter, HTTPException
import spacy
from pydantic import BaseModel

router = APIRouter()

class TextRequest(BaseModel):
    text: str

try:
    nlp = spacy.load("en_core_web_sm")
except Exception as e:
    raise RuntimeError(f"Failed to load spaCy model: {str(e)}")

def generate_prescription_report(text):
    """Extract entities and generate a structured prescription report"""
    doc = nlp(text)

    report = {
        "doctor_name": None,
        "patient_name": None,
        "medicines": [],
        "diagnosis": [],
        "date": None,
        "address": None,
        "contact": None,
        "others": []
    }

    for entity in doc.ents:
        if entity.label_ == "PERSON":
            if "Dr" in entity.text or "Dr." in entity.text:  
                report["doctor_name"] = entity.text
            else:  
                report["patient_name"] = entity.text
        elif entity.label_ == "ORG":
            report["address"] = entity.text  
        elif entity.label_ == "DATE":
            report["date"] = entity.text
        elif entity.label_ in ["GPE", "LOC"]:
            report["address"] = entity.text 
        elif entity.label_ == "PRODUCT":
            report["medicines"].append(entity.text)
        elif entity.label_ in ["DISEASE", "CONDITION"]: 
            report["diagnosis"].append(entity.text)
        elif entity.label_ in ["CARDINAL", "MONEY", "QUANTITY"]:
            report["others"].append(entity.text)
        else:
            report["others"].append(entity.text)

    return report

@router.post("/ner")
async def ner_analysis(request: TextRequest):
    """Extract named entities and generate a prescription report."""
    text = request.text.strip()
    if not text:
        raise HTTPException(status_code=400, detail="Text cannot be empty.")

    try:
        report = generate_prescription_report(text)

        if not any(report.values()):
            return {"message": "No relevant entities found.", "report": report}

        return {"report": report}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing NER: {str(e)}")
