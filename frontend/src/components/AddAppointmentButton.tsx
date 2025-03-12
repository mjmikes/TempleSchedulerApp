import React from "react";

export const AddAppointmentButton: React.FC = () => {
  return (
    <button
      style={{ position: "fixed", bottom: "20px", right: "20px" }}
      className="overflow-hidden z-50 self-end mt-2.5 max-w-full text-sm font-medium tracking-normal leading-none text-center text-fuchsia-50 rounded-2xl shadow-md bg-zinc-800 min-h-14 min-w-20 w-[183px]"
      aria-label="Add new appointment"
    >
      <div className="flex flex-1 gap-3 justify-center items-center py-4 pr-5 pl-4 size-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/995c4e5fdf4ac2cb6136fab965e20034b72ac6e1bc2dd058910d34775e576a1b?placeholderIfAbsent=true&apiKey=30c280d5425d4f8283bc5b68e1911542"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <span className="self-stretch my-auto">Add Appointment</span>
      </div>
    </button>
  );
};
