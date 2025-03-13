import React from "react";
import { Link } from "react-router-dom";

export const NavigationMenu: React.FC = () => {
  return (
    <div className="relative">
      {/* Dropdown Menu */}
      <div className="absolute top-12 left-0 w-48 bg-gray-900 text-white shadow-lg rounded-lg">
        <nav className="flex flex-col p-4 gap-3">
          <div className="nav-links flex flex-col">
            <Link to="/appointments" className="text-xl">
              My Appointments
            </Link>
            <Link to="/add-appointment" className="text-xl">
              Add Appointment
            </Link>
            <Link to="/login" className="text-xl">
              Sign Out
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};
