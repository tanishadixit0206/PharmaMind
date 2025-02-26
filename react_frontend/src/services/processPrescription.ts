import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const processPrescription = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const ocrResponse = await axios.post(`${API_BASE_URL}/ocr/upload`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    const extractedText = ocrResponse.data.extracted_text;
    
    if (!extractedText) {
      throw new Error("No text extracted from image.");
    }

    const nerResponse = await axios.post(`${API_BASE_URL}/ner/ner`, { text: extractedText },{
      headers:{
        "Content-Type":"application/json"
      }
    });

    return nerResponse.data.report;

  } catch (error) {
    console.error("Error processing prescription:", error);
    throw error;
  }
};

export default processPrescription;
