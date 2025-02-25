import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
    return response.data; 
  } catch (error) {
    throw error.response?.data?.message || "Login failed";
  }
};

export const registerUser = async (name: string, email: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, { name, email, password });
    return response.data; // { token, user }
  } catch (error) {
    throw error.response?.data?.message || "Registration failed";
  }
};
