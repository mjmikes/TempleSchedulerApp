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
    <article className="flex gap-6 items-start w-full min-w-60 bg-white p-4 rounded-lg shadow-md">
      <div className="flex-shrink-0 w-40 h-40 relative">
        <img
          src={imageUrl}
          alt={templeName}
          className="object-contain w-full h-full rounded-lg mx-auto"
        />{" "}
      </div>
      <p>_________________________________________</p>
      <div className="flex-1 shrink basis-0 min-w-40">
        <h2 className="text-xl font-semibold tracking-tight leading-tight text-stone-900">
          {templeName}
        </h2>
        <p className="mt-2 text-base leading-6 text-neutral-500">
          {date} <br />@{time} <br />
          {type}
        </p>
        <div className="flex gap-4 items-center mt-4">
          {/* Edit Button */}
          <button className="py-2 px-4 rounded-lg text-black bg-fuchsia-500 hover:bg-fuchsia-600 border border-transparent transition-all duration-200 ease-in-out">
            Edit
          </button>
          {/* Cancel Button */}
          <button className="py-2 px-4 rounded-lg text-black bg-neutral-500 hover:bg-neutral-600 border border-transparent transition-all duration-200 ease-in-out">
            Cancel
          </button>
        </div>
      </div>
    </article>
  );
};
