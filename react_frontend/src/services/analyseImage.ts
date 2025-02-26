import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const analyzeImage = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
  
      const response = await axios.post(`${API_BASE_URL}/image/classify`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      return response.data;
    } catch (error) {
      console.error("Error analyzing image:", error);
      throw error;
    }
};
export default analyzeImage;