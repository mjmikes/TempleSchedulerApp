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
    <article className="flex gap-6 items-start w-full min-w-60">
  <img src={imageUrl} alt={templeName} className="object-contain shrink-0 w-40 aspect-square min-h-40 min-w-40" />
  <div className="flex-1 shrink basis-0 min-w-40">
    <h2 className="text-xl font-semibold tracking-tight leading-tight text-stone-900">{templeName}</h2>
    <p className="mt-2 text-base leading-6 text-neutral-500">{date} <br />@{time} <br />{type}</p>
    <div className="flex gap-4 items-center mt-4">
      <button className="p-3 rounded-lg border bg-neutral-200 border-neutral-500">Edit</button>
      <button className="p-3 rounded-lg border bg-neutral-200 border-neutral-500">Cancel</button>
    </div>
  </div>
</article>
  );
};
