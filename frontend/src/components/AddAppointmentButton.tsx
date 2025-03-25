import React from "react";
import { useNavigate } from "react-router-dom";

export const AddAppointmentButton: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <button
      onClick={() => navigate("/add-appointment")}
      style={{ 
        position: "fixed", 
        bottom: "20px", 
        right: "20px", 
        height: "55px", 
        width: "55px", 
        borderRadius: "15px", 
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" 
      }}
      className="btn btn-secondary d-flex align-items-center justify-content-center"
      aria-label="Add new appointment"
    >
      <i className="fa-solid fa-plus fs-4"></i>
    </button>
  );
};
