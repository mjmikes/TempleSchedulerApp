import React from "react";
// import {useNavigate, useNavigation } from "react-router-dom"

interface AppointmentCardProps {
  templeName: string;
  date: string;
  time: string;
  type: string;
  imageUrl: string;
}

// function AppointmentCancellation() {
//   const navigate = useNavigate();

//   const handleCancel = () => {
//     navigate("appointment-cancellation");
//   }
// }

export const AppointmentCard: React.FC<AppointmentCardProps> = ({
  templeName,
  date,
  time,
  type,
  imageUrl,
}) => {
  return (
    <div className="d-flex gap-3 align-items-start w-100 min-w-60 p-3 rounded mb-3">
      <img
        src={imageUrl}
        alt={templeName}
        className="img-fluid rounded" 
        style={{ width: '160px', height: '160px', objectFit: 'cover' }}
      />
        <div className="flex-grow-1 text-start">
        <h2 className="h5 fw-semibold text-dark">{templeName}</h2>
        <p className="mt-2 text-muted">
          {date} <br /> @{time} <br /> {type}
        </p>
        <div className="d-flex gap-2 mt-3">
          <button className="btn btn-outline-secondary">Edit</button>
          <button className="btn btn-outline-secondary">Cancel</button>
          </div>
          </div>
    </div>
  );
};
