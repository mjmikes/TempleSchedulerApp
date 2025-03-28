"use client";
import React from "react";
import { NavigationButton } from "./NavigationButton";
import { CancelAppointmentContent } from "./CancelAppointmentContent";

const AppointmentCancellation: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="relative w-full min-h-screen bg-white font-['Inter']">
        <CancelAppointmentContent
          templeImage="https://cdn.builder.io/api/v1/image/assets/TEMP/5e3a8b1c6d511599a5abd5cbed0722f7dd5dc2ed"
          templeName="Orem Temple"
          date="Friday April 17, 2025"
          time="10am"
          type="Endowment"
        />
      </div>
    </>
  );
};

export default AppointmentCancellation;
