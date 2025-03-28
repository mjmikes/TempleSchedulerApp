import React from "react";
import "./AvailabilityResults.css";
import { useNavigate } from "react-router-dom";

interface AvailabilityResultsProps {
  availability: { slots: any[] } | null;
}

const AvailabilityResults: React.FC<AvailabilityResultsProps> = ({
  availability,
}) => {
  const navigate = useNavigate();

  const handleButtonClick = (slot: any) => {
    // Navigate to the confirmation page and pass the selected slot data
    navigate("/confirm", { state: { slot } });
  };

  if (!availability || !availability.slots.length) {
    return <p>No available sessions found.</p>;
  }

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Available Sessions:</h3>
      <div className="button-container">
        {availability.slots.map((slot, index) => (
          <div key={index}>
            <button className="button" onClick={() => handleButtonClick(slot)}>
              <strong>{slot.temple}</strong> <br /> <i>{slot.ordinance}</i>{" "}
              <br /> {slot.date} at {slot.time}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailabilityResults;

// import React from "react";

// type AvailabilityResultsProps = {
//   selectedTemple: string;
//   selectedOrdinances: string[];
//   selectedTimes: string[];
//   selectedDate: Date | null; // Added selectedDate prop
//   data: any;
// };

// const AvailabilityResults: React.FC<AvailabilityResultsProps> = ({
//   selectedTemple,
//   selectedOrdinances,
//   selectedTimes,
//   selectedDate,
//   data,
// }) => {
//   return (
//     <div className="mt-6 p-4 bg-gray-100 rounded-lg">
//       <h3 className="text-lg font-semibold text-center">
//         Availability Results
//       </h3>
//       <p className="text-center text-gray-700">
//         Temple: <strong>{selectedTemple}</strong>
//       </p>
//       <p className="text-center text-gray-700">
//         Ordinances: <strong>{selectedOrdinances.join(", ")}</strong>
//       </p>
//       <p className="text-center text-gray-700">
//         Selected Times: <strong>{selectedTimes.join(", ")}</strong>
//       </p>
//       {selectedDate && (
//         <p className="text-center text-gray-700">
//           Selected Date: <strong>{selectedDate.toLocaleDateString()}</strong>
//         </p>
//       )}
//       <div className="mt-4">
//         {data.slots && data.slots.length > 0 ? (
//           <ul className="list-disc list-inside">
//             {data.slots.map(
//               (slot: { time: string; available: boolean }, index: number) => (
//                 <li
//                   key={index}
//                   className={slot.available ? "text-green-600" : "text-red-600"}
//                 >
//                   {slot.time} - {slot.available ? "Available" : "Unavailable"}
//                 </li>
//               )
//             )}
//           </ul>
//         ) : (
//           <p className="text-center text-gray-500">
//             No availability data found.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AvailabilityResults;

// import React from "react";
// import { useNavigate } from "react-router-dom";

// // Define types for props
// type TimeSlot = {
//   time: string;
//   available: boolean;
// };

// type OrdinanceData = {
//   ordinance: string;
//   times: TimeSlot[];
// };

// type TempleData = {
//   temple: string;
//   ordinances: OrdinanceData[];
// };

// type AvailabilityResultsProps = {
//   selectedDate: Date | null; // Assuming it's a string; adjust if it's a Date object
//   data: TempleData[];
// };

// const AvailabilityResults: React.FC<AvailabilityResultsProps> = ({
//   selectedDate,
//   data,
// }) => {
//   const navigate = useNavigate();

//   const handleTimeClick = (temple: string, ordinance: string, time: string) => {
//     navigate("/appointment-confirmation", {
//       state: { temple, ordinance, selectedDate, time },
//     });
//   };

//   return (
//     <div className="mt-6 p-4 bg-gray-100 rounded-lg">
//       <h3 className="text-lg font-semibold text-center">Results:</h3>
//       {data.length > 0 ? (
//         data.map((templeData, index) => (
//           <div key={index} className="mt-4 p-4 bg-white rounded-lg shadow">
//             <h4 className="text-xl font-bold text-center">
//               {templeData.temple}
//             </h4>
//             {templeData.ordinances.map((ordinanceData, ordIndex) => (
//               <div key={ordIndex} className="mt-3">
//                 <p className="text-md font-semibold text-gray-700 text-center">
//                   {ordinanceData.ordinance}: {" "}
//                   {selectedDate &&
//                     new Date(selectedDate).toLocaleDateString("en-US", {
//                       weekday: "long",
//                       year: "numeric",
//                       month: "long",
//                       day: "numeric",
//                     })}
//                 </p>
//                 <div className="flex flex-wrap justify-center gap-2 mt-2">
//                   {ordinanceData.times.map(
//                     (slot, timeIndex) =>
//                       slot.available && (
//                         <button
//                           key={timeIndex}
//                           onClick={() =>
//                             handleTimeClick(
//                               templeData.temple,
//                               ordinanceData.ordinance,
//                               slot.time
//                             )
//                           }
//                           className="px-4 py-2 bg-gray-200 rounded-lg text-gray-800 hover:bg-gray-300"
//                         >
//                           {slot.time}
//                         </button>
//                       )
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))
//       ) : (
//         <p className="text-center text-gray-500">No availability found.</p>
//       )}
//     </div>
//   );
// };

// export default AvailabilityResults;

// Define types for data structure
// type AvailabilityResultsProps = {
//   selectedDate: Date | null;
//   data: {
//     temple: string;
//     ordinances: {
//       ordinance: string;
//       times: { time: string; available: boolean }[];
//     }[];
//   }[];
// };

// const AvailabilityResults: React.FC<AvailabilityResultsProps> = ({ selectedDate, data }) => {
//   const navigate = useNavigate();

//   const handleTimeClick = (temple: string, ordinance: string, time: string) => {
//     navigate("/appointment-confirmation", {
//       state: { temple, ordinance, selectedDate, time },
//     });
//   };

//   return (
//     <div className="mt-6 p-4 bg-gray-100 rounded-lg">
//       <h3 className="text-lg font-semibold text-center">Results:</h3>
//       {data.length > 0 ? (
//         data.map((templeData, index) => (
//           <div key={index} className="mt-4 p-4 bg-white rounded-lg shadow">
//             <h4 className="text-xl font-bold text-center">{templeData.temple}</h4>
//             {templeData.ordinances.map((ordinanceData, ordIndex) => (
//               <div key={ordIndex} className="mt-3">
//                 <p className="text-md font-semibold text-gray-700 text-center">
//                   {ordinanceData.ordinance}: {" "}
//                   {selectedDate &&
//                     new Date(selectedDate).toLocaleDateString("en-US", {
//                       weekday: "long",
//                       year: "numeric",
//                       month: "long",
//                       day: "numeric",
//                     })}
//                 </p>
//                 <div className="flex flex-wrap justify-center gap-2 mt-2">
//                   {ordinanceData.times.map(
//                     (slot, timeIndex) =>
//                       slot.available && (
//                         <button
//                           key={timeIndex}
//                           onClick={() =>
//                             handleTimeClick(
//                               templeData.temple,
//                               ordinanceData.ordinance,
//                               slot.time
//                             )
//                           }
//                           className="px-4 py-2 bg-gray-200 rounded-lg text-gray-800 hover:bg-gray-300"
//                         >
//                           {slot.time}
//                         </button>
//                       )
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))
//       ) : (
//         <p className="text-center text-gray-500">No availability found.</p>
//       )}
//     </div>
//   );
// };

// export default AvailabilityResults;
