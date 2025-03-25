import React from "react";
import { useNavigate } from "react-router-dom";

export const AddAppointmentButton: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <button
      onClick={() => navigate("/add-appointment")}
      className="btn btn-dark position-fixed bottom-0 end-0 m-3 rounded-pill shadow-lg d-flex align-items-center gap-2 px-3 py-2 add-appointment-button"
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
