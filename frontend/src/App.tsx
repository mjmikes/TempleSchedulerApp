import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyAppointments from "./components/MyAppointments";
import MobileNavigation from "./components/MobileNavigation";
import LoginForm from "./components/LoginForm"; // Import Login Page
import ForgotPassword from "./components/ForgotPassword"; // Import Forgot Password Page
import AddAppointment from "./components/Schedule"; // Import Add Appointment Page
import "./App.css";

function App() {
  return (
    <Router>
      <MobileNavigation />
      <Routes>
        <Route path="/" element={<MyAppointments />} />
        <Route path="/login-page" element={<LoginForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/appointments" element={<MyAppointments />} />
        <Route path="/add-appointment" element={<AddAppointment />} />
      </Routes>
    </Router>
  );
}

export default App;
