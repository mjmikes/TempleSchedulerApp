"use client";
import React from "react";

export const ReminderButton: React.FC = () => {
  const handleReminder = () => {
    // Implement reminder functionality
    console.log("Reminder set");
  };

  return (
    <button
      onClick={handleReminder}
      className="p-3 mx-auto my-8 text-base text-center rounded border border-solid bg-neutral-100 border-[#ccc] text-stone-900 w-[109px] hover:bg-neutral-200 transition-colors"
      aria-label="Set appointment reminder"
    >
      Remind Me
    </button>
  );
};
