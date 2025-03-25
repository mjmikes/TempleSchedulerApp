import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyAppointments from "./components/MyAppointments"; 
import MobileNavigation from "./components/MobileNavigation";
import "./App.css";
import AppointmentCancellation from "./components/AppointmentCancellation";

function App() {
  
 return (
   <Router>
     <MobileNavigation />
     <Routes>
       <Route path="/" element={<MyAppointments />} />
       <Route path="/appointments" element={<MyAppointments />} />
    </Routes>
  </Router>
 );
}

export default App;

