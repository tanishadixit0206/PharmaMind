import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider";  
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Prescriptions from "./pages/Prescriptions";
import OrderDetails from "./pages/OrderDetails";
import PrescriptionUpload from "./pages/PrescriptionUpload";
import MedicalImageUpload from "./pages/MedicalImageUpload";
import AnalysisDetails from "./pages/AnalysisDetails";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/prescription_upload" element={<PrescriptionUpload/>} />
            <Route path="/medical_image_upload" element={<MedicalImageUpload/>} />
            <Route path="/analysis/:id" element={<AnalysisDetails />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
