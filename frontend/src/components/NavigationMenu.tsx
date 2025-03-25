import React from "react";
import { Link } from "react-router-dom";

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <div
      className={`offcanvas offcanvas-start ${isOpen ? "show" : ""}`}
      style={{ width: "250px", backgroundColor: "#1e293b" }}
    >
      <button
        onClick={onClose}
        className="btn-close btn-close-white position-absolute top-3 end-3 p-3 custom-close-button"
        aria-label="Close menu"
      ></button>

      {/* Navigation Links */}
      <nav className="d-flex flex-column p-4 gap-3">
        <br />
        <Link to="/appointments" className="text-white h5 text-decoration-none">
          My Appointments
        </Link>
        <Link
          to="/add-appointment"
          className="text-white h5 text-decoration-none"
        >
          Add Appointment
        </Link>
        <Link to="/login" className="text-white h5 text-decoration-none">
          Sign Out
        </Link>
      </nav>
    </div>
  );
};
