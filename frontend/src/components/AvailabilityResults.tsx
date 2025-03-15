import React from "react";

type AvailabilityResultsProps = {
  selectedTemple: string;
  selectedOrdinances: string[];
  selectedTimes: string[];
  selectedDate: Date | null; // Added selectedDate prop
  data: any;
};

const AvailabilityResults: React.FC<AvailabilityResultsProps> = ({
  selectedTemple,
  selectedOrdinances,
  selectedTimes,
  selectedDate,
  data,
}) => {
  return (
    <div className="mt-6 p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold text-center">
        Availability Results
      </h3>
      <p className="text-center text-gray-700">
        Temple: <strong>{selectedTemple}</strong>
      </p>
      <p className="text-center text-gray-700">
        Ordinances: <strong>{selectedOrdinances.join(", ")}</strong>
      </p>
      <p className="text-center text-gray-700">
        Selected Times: <strong>{selectedTimes.join(", ")}</strong>
      </p>
      {selectedDate && (
        <p className="text-center text-gray-700">
          Selected Date: <strong>{selectedDate.toLocaleDateString()}</strong>
        </p>
      )}
      <div className="mt-4">
        {data.slots && data.slots.length > 0 ? (
          <ul className="list-disc list-inside">
            {data.slots.map(
              (slot: { time: string; available: boolean }, index: number) => (
                <li
                  key={index}
                  className={slot.available ? "text-green-600" : "text-red-600"}
                >
                  {slot.time} - {slot.available ? "Available" : "Unavailable"}
                </li>
              )
            )}
          </ul>
        ) : (
          <p className="text-center text-gray-500">
            No availability data found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AvailabilityResults;
