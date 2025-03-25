import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyAppointments from "./components/MyAppointments";
import MobileNavigation from "./components/MobileNavigation";
import "./App.css";
import AppointmentCancellation from "./components/AppointmentCancellation";
import TempleScheduler from "./components/TempleScheduler";
import LoginPage from "./components/LoginPage";

function App() {
  
 return (
   <Router>
     <MobileNavigation />
      <Routes>
       <Route path="/" element={<MyAppointments />} />
       <Route path="/appointments" element={<MyAppointments />} />
       <Route path="/add" element={<TempleScheduler />} />
       <Route path="/login" element={<LoginPage />} />
    </Routes>
  </Router>
 );
}

export default App;
