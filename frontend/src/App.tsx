import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyAppointments from "./components/MyAppointments"; 
import MobileNavigation from "./components/MobileNavigation";
import AddAppointment from "./components/Schedule"; // Import Add Appointment Page
import AppointmentConfirmation from "./components/AppointmentConfirmation"; 
import "./App.css";
import AppointmentCancellation from "./components/AppointmentCancellation";

function App() {
  
 return (
   <Router>
     <MobileNavigation />
     <Routes>
       <Route path="/" element={<MyAppointments />} />
       <Route path="/appointments" element={<MyAppointments />} />
       <Route path="/add-appointment" element={<AddAppointment />} />
       <Route path="/appointment-confirmation" element={<AppointmentConfirmation />} />
       <Route path="/appointment-cancellation" element={<AppointmentCancellation />} />
     </Routes>
   </Router>
 );
}

export default App;

