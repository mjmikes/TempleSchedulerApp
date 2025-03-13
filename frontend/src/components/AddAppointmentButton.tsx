import React from "react";

export const AddAppointmentButton: React.FC = () => {
  return (
    <button
      style={{ position: "fixed", bottom: "20px", right: "20px" }}
      className="overflow-hidden z-50 self-end mt-2.5 max-w-full text-sm font-medium tracking-normal leading-none text-center text-fuchsia-50 rounded-2xl shadow-md bg-zinc-800 min-h-14 min-w-20 w-[183px]"
      aria-label="Add new appointment"
    >
      <div
        className="flex flex-1 items-center justify-center py-4 px-4"
        style={{ alignItems: "flex-start" }}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/995c4e5fdf4ac2cb6136fab965e20034b72ac6e1bc2dd058910d34775e576a1b"
          alt=""
          className="object-contain w-6 h-6" // Simplified class
        />
        <span style={{ transform: "translateY(-50%)" }}>Add Appointment</span>
      </div>
    </button>
  );
};
