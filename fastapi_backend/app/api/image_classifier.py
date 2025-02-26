from fastapi import APIRouter, File, UploadFile, HTTPException
import torch
import torchvision.transforms as transforms
from torchvision import models
from torchvision.models import ResNet18_Weights
from PIL import Image

model = models.resnet18(weights=ResNet18_Weights.IMAGENET1K_V1)
model.eval()

transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
])

router = APIRouter()

labels = ["Healthy", "Pneumonia", "Tuberculosis", "Fracture", "Tumour"]

@router.post("/classify")
async def classify_medical_image(file: UploadFile = File(...)):
    try:
        image = Image.open(file.file).convert("RGB")
        image = transform(image).unsqueeze(0)

        with torch.no_grad():
            outputs = model(image)
            predicted_class = torch.argmax(outputs, 1).item()

        label = labels[predicted_class % len(labels)]

        return {"prediction": label, "confidence": float(outputs.max().item())}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing image: {str(e)}")
