import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyAppointments from "./components/MyAppointments";
import MobileNavigation from "./components/MobileNavigation";
import "./App.css";
import TempleScheduler from "./components/TempleScheduler";

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
