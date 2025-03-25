import React from "react";
import { useNavigate } from "react-router-dom";

export const AddAppointmentButton: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <button
      onClick={() => navigate("/add")}
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
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/995c4e5fdf4ac2cb6136fab965e20034b72ac6e1bc2dd058910d34775e576a1b"
        alt=""
        className="img-fluid"
        style={{ width: "24px", height: "24px" }}
      />
      <span>Add Appointment</span>
    </button>
  );
};
