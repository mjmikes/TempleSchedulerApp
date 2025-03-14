"use client";

import React from "react";
import { AppointmentCard } from "./AppointmentCard";
import { AddAppointmentButton } from "./AddAppointmentButton";

const MyAppointments: React.FC = () => {
  const appointments = [
    {
      templeName: "Orem Temple",
      date: "Monday Feb 3, 2025",
      time: "3pm",
      type: "Endowment",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/27e87d8e70bc5b0807becafec6d11dea57dfe92f08829169cf5e54659ab4fcac?placeholderIfAbsent=true&apiKey=30c280d5425d4f8283bc5b68e1911542",
    },
    {
      templeName: "Provo City Center Temple",
      date: "Friday Feb 29, 2025",
      time: "12pm",
      type: "Initiatory",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/15e05faeacd88edc11b226f2edce5a9854de455cd998bbb29b5a1ed0971d044f?placeholderIfAbsent=true&apiKey=30c280d5425d4f8283bc5b68e1911542",
    },
    {
      templeName: "Orem Temple",
      date: "Thursday March 9, 2025",
      time: "6pm",
      type: "Sealing",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/40dfa4d2e1eeb8d144e0471ca9194c99924ea7fd31494fcd72c4946dc8954168?placeholderIfAbsent=true&apiKey=30c280d5425d4f8283bc5b68e1911542",
    },
    {
      templeName: "Draper Temple",
      date: "Tuesday March 20, 2025",
      time: "8am",
      type: "Endowment",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/43d6edde48cf7fc1091dd32e39ea1cb98327d5decb60bb358c123cba110009bd?placeholderIfAbsent=true&apiKey=30c280d5425d4f8283bc5b68e1911542",
    },
    {
      templeName: "Provo City Center Temple",
      date: "Saturday March 29, 2025",
      time: "9am",
      type: "Initiatory",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/15e05faeacd88edc11b226f2edce5a9854de455cd998bbb29b5a1ed0971d044f?placeholderIfAbsent=true&apiKey=30c280d5425d4f8283bc5b68e1911542",
    },
    {
      templeName: "Orem Temple",
      date: "Friday April 7, 2025",
      time: "11am",
      type: "Sealing",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/40dfa4d2e1eeb8d144e0471ca9194c99924ea7fd31494fcd72c4946dc8954168?placeholderIfAbsent=true&apiKey=30c280d5425d4f8283bc5b68e1911542",
    },
  ];

  return (
    <main className="flex flex-col mx-auto w-full bg-white max-w-[480px]">
      <div className="fixed top-0 left-0 right-0 z-20 bg-white">
        <div className="flex justify-between items-center p-6 w-full">
          <h1 className="text-2xl font-semibold tracking-tight leading-tight text-stone-900 flex-grow text-center">
            My Temple Appointments
          </h1>
          <div style={{ width: 48 }}> {/* Invisible spacer for symmetry */} </div>
        </div>
      </div>

      <section className="pt-24 p-6 w-full bg-white min-h-screen">
        {appointments.map((appointment, index) => (
          <div key={index} className={index > 0 ? "mt-12" : ""}>
            <AppointmentCard {...appointment} />
          </div>
        ))}
      </section>
      <AddAppointmentButton />
    </main>
  );
};

export default MyAppointments;