import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyAppointments from "./components/MyAppointments";
import MobileNavigation from "./components/MobileNavigation";
import LoginForm from "./components/LoginForm"; // Import Login Page
import TempleScheduler from "./components/TempleScheduler"; // Import Add Appointment Page
import "./App.css";
import AppointmentConfirmation from "./components/AppointmentConfirmation";
import AppointmentCancellation from "./components/AppointmentCancellation";

function App() {
  return (
    <Router>
      <MobileNavigation />
      <Routes>
        <Route path="/" element={<MyAppointments />} />
        <Route path="/login-page" element={<LoginForm />} />
        <Route path="/appointments" element={<MyAppointments />} />
        <Route path="/add-appointment" element={<TempleScheduler />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/confirm-appointment" element={<AppointmentConfirmation />} />
        <Route path="/cancel-appointment" element={<AppointmentCancellation />} />
      </Routes>
    </Router>
  );
}

export default App;
