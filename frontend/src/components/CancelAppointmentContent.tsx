import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

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
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle back navigation
  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <main className="flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold text-center mt-5 mb-3">
        Cancel Appointment?
      </h1>
      <img
        src={templeImage}
        alt={templeName}
        className="mt-3 mb-4 object-contain h-[200px] w-[200px] rounded-full shadow-lg"
      />

      <section className="text-center mt-4">
        <h2 className="text-2xl font-semibold">{templeName}</h2>
        <p className="text-lg text-neutral-600">
          {date} at {time}
        </p>
        <p className="text-lg text-neutral-600">{type}</p>
        <p className="text-sm text-neutral-500 mt-2">
          Are you sure you want to cancel this appointment?
        </p>
      </section>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
        <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition-colors">
          Confirm Cancellation
        </button>
        </div>

        <button
          onClick={handleBack}
          className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition-colors"
        >
          Go Back
        </button>
      
    </main>
  );
};
