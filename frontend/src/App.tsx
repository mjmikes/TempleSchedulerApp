import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyAppointments from "./components/MyAppointments";
import MobileNavigation from "./components/MobileNavigation";
import "./App.css";
import AppointmentCancellation from "./components/AppointmentCancellation";
import AppointmentConfirmation from "./components/AppointmentConfirmation";
import TempleScheduler from "./components/TempleScheduler";
import LoginPage from "./components/LoginPage";
import AvailabilityResults from "./components/AvailabilityResults";
import ForgotPassword from "./components/ForgotPassword"; // Import ForgotPassword component
import CreateUser from "./components/CreateUser"; // Import CreateUser component

function App() {
  
 return (
   <Router>
     <MobileNavigation />
     <Routes>
       <Route path="/" element={<MyAppointments />} />
       <Route path="/appointments" element={<MyAppointments />} />
       <Route path="/add" element={<TempleScheduler />} />
       <Route path="/login" element={<LoginPage />} />
       <Route path="/cancel" element={<AppointmentCancellation />} />
       <Route path="/confirm" element={<AppointmentConfirmation />} />
       <Route path="/schedule" element={<TempleScheduler />} />
       <Route path="/forgot-password" element={<ForgotPassword />} />{" "}
       <Route path="/create-user" element={<CreateUser />} />{" "}
       <Route
         path="/availability"
         element={
           <AvailabilityResults
             selectedTemple="Example Temple"
             selectedOrdinances={["Ordinance 1", "Ordinance 2"]}
             selectedTimes={["9:00 AM", "11:00 AM"]}
             selectedDate={new Date()}
             data={{ slots: [] }}
           />
         }
       />
     </Routes>
   </Router>
 );
}

export default App;
