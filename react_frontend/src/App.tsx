import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider";  
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Prescriptions from "./pages/Prescriptions";
import Processing from "./pages/Processing";
import OrderDetails from "./pages/OrderDetails";
import Upload from "./pages/Upload";

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
            <Route path="/upload" element={<Upload/>} />
            <Route path="/prescriptions" element={<Prescriptions />} />
            <Route path="/processing" element={<Processing />} />
            <Route path="/order/:id" element={<OrderDetails />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
