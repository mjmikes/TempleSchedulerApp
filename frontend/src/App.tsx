import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyAppointments from "./components/MyAppointments"; 
import MobileNavigation from "./components/MobileNavigation";
//import AddAppointment from "./components/Schedule"; // Import Add Appointment Page
import TempleScheduler from "./components/TempleScheduler"; // Import Add Appointment Page
import "./App.css";

function App() {
  
 return (
   <Router>
     <MobileNavigation />
      <Routes>
       <Route path="/" element={<MyAppointments />} />
       <Route path="/appointments" element={<MyAppointments />} />
       <Route path="/add-appointment" element={<TempleScheduler />} />
      </Routes>
    </Router>
 );
}

export default App;

