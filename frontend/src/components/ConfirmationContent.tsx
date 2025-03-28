import React from "react";

export const ConfirmationContent: React.FC = () => {
  return (
    <main className="flex flex-col items-center">
      {/* Static Temple Image */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e3a8b1c6d511599a5abd5cbed0722f7dd5dc2ed"
        alt="Temple"
        className="object-contain h-[159px] w-[168px] mt-24"
      />

      {/* Confirmation Title */}
      <section className="px-5 py-0 mt-10 text-4xl font-bold leading-10 text-center text-black max-sm:text-3xl max-sm:leading-9">
        <h1>
          Appointment
          <br />
          Confirmed!
        </h1>
      </section>

      {/* Confirmation Message */}
      <p className="mx-auto mt-8 mb-0 text-lg font-semibold leading-6 text-center text-black max-w-[227px] max-sm:text-base max-sm:max-w-[90%]">
        Thank you for scheduling a temple appointment! We look forward to seeing
        you!
      </p>
    </main>
  );
};
