import React from "react";

interface ConfirmationContentProps {
  templeImage: string;
  templeName: string;
  date: string;
  time: string;
  type: string;
}

export const CancelAppointmentContent: React.FC<ConfirmationContentProps> = ({
  templeImage,
  templeName,
  date,
  time,
  type,
}) => {
  return (
    <main className="flex flex-col items-center">
      <img
        src={templeImage}
        alt="Temple"
        className="object-contain h-[159px] w-[168px] mt-24"
      />

      <section className="px-5 py-0 mt-10 text-4xl font-bold leading-10 text-center text-black max-sm:text-3xl max-sm:leading-9">
        <h1>
          Cancel Appointment?
        </h1>
      </section>

      <p className="mx-auto mt-8 mb-0 text-lg font-semibold leading-6 text-center text-black max-w-[227px] max-sm:text-base max-sm:max-w-[90%]">
         We hope to see you soon!
      </p>

      <section className="mt-5 text-base leading-6 text-center text-neutral-500 max-sm:text-sm">
        <p>{templeName}</p>
        <p>{date}</p>
        <p>@{time}</p>
        <p>{type}</p>
      </section>
    </main>
  );
};
