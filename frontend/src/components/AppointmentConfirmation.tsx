"use client";
import React from "react";
import { ConfirmationContent } from "./ConfirmationContent";
import { ReminderButton } from "./ReminderButton";
import { useNavigate } from "react-router-dom";

const AppointmentConfirmation: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="relative w-full min-h-screen bg-white font-['Inter']">
        <br />
        <br />

        {/* Generic Confirmation Content */}
        <ConfirmationContent />

        <ReminderButton />
        <button
          onClick={() => navigate("/appointments")}
          className="p-3 mx-auto my-8 text-base text-center rounded border border-solid bg-neutral-100 border-[#ccc] text-stone-900 w-[109px] hover:bg-neutral-200 transition-colors"
        >
          Back to Appointments
        </button>
      </div>
    </>
  );
};

export default AppointmentConfirmation;
