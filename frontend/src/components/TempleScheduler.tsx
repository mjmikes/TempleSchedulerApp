import { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
//to get datepicker to work, run these:
//npm install react-datepicker @types/react-datepicker
//npm install date-fns

import "react-datepicker/dist/react-datepicker.css";
import AvailabilityResults from "./AvailabilityResults";
import TempleSelect from "./TempleSelect";
import "./TempleScheduler.css";

//fake data for testing:
const fakeAvailabilityData = [
  // Provo City Center Temple
  {
    temple: "Provo City Center Temple",
    ordinance: "Baptism",
    date: "2025-03-31",
    time: "6:00 AM",
    available: true,
    maxParticipants: 8,
  },
  {
    temple: "Provo City Center Temple",
    ordinance: "Initiatory",
    date: "2025-04-01",
    time: "12:00 PM",
    available: true,
    maxParticipants: 5,
  },
  {
    temple: "Provo City Center Temple",
    ordinance: "Baptism",
    date: "2025-04-02",
    time: "6:00 PM",
    available: true,
    maxParticipants: 14,
  },
  {
    temple: "Provo City Center Temple",
    ordinance: "Initiatory",
    date: "2025-04-03",
    time: "7:00 AM",
    available: true,
    maxParticipants: 18,
  },
  {
    temple: "Provo City Center Temple",
    ordinance: "Baptism",
    date: "2025-04-04",
    time: "1:00 PM",
    available: true,
    maxParticipants: 11,
  },
  {
    temple: "Provo City Center Temple",
    ordinance: "Initiatory",
    date: "2025-04-05",
    time: "7:00 PM",
    available: true,
    maxParticipants: 21,
  },
  {
    temple: "Provo City Center Temple",
    ordinance: "Baptism",
    date: "2025-04-05",
    time: "8:00 AM",
    available: true,
    maxParticipants: 9,
  },
  {
    temple: "Provo City Center Temple",
    ordinance: "Baptism",
    date: "2025-03-31",
    time: "6:00 AM",
    available: true,
    maxParticipants: 8,
  },
  {
    temple: "Provo City Center Temple",
    ordinance: "Endowment",
    date: "2025-03-31",
    time: "7:00 PM",
    available: false,
    maxParticipants: 6,
  },
  {
    temple: "Provo City Center Temple",
    ordinance: "Initiatory",
    date: "2025-04-01",
    time: "12:00 PM",
    available: true,
    maxParticipants: 5,
  },
  {
    temple: "Provo City Center Temple",
    ordinance: "Sealing",
    date: "2025-04-02",
    time: "9:00 AM",
    available: false,
    maxParticipants: 3,
  },
  {
    temple: "Provo City Center Temple",
    ordinance: "Baptism",
    date: "2025-04-02",
    time: "6:00 PM",
    available: true,
    maxParticipants: 14,
  },
  {
    temple: "Provo City Center Temple",
    ordinance: "Initiatory",
    date: "2025-04-03",
    time: "7:00 AM",
    available: true,
    maxParticipants: 18,
  },
  {
    temple: "Provo City Center Temple",
    ordinance: "Sealing",
    date: "2025-04-04",
    time: "8:00 PM",
    available: true,
    maxParticipants: 7,
  },
  {
    temple: "Provo City Center Temple",
    ordinance: "Baptism",
    date: "2025-04-05",
    time: "8:00 AM",
    available: true,
    maxParticipants: 9,
  },

  // Orem Temple
  {
    temple: "Orem Temple",
    ordinance: "Endowment",
    date: "2025-03-31",
    time: "7:00 AM",
    available: false,
    maxParticipants: 2,
  },
  {
    temple: "Orem Temple",
    ordinance: "Sealing",
    date: "2025-04-01",
    time: "1:00 PM",
    available: false,
    maxParticipants: 3,
  },
  {
    temple: "Orem Temple",
    ordinance: "Endowment",
    date: "2025-04-02",
    time: "7:00 PM",
    available: false,
    maxParticipants: 5,
  },
  {
    temple: "Orem Temple",
    ordinance: "Sealing",
    date: "2025-04-03",
    time: "8:00 AM",
    available: false,
    maxParticipants: 3,
  },
  {
    temple: "Orem Temple",
    ordinance: "Endowment",
    date: "2025-04-04",
    time: "2:00 PM",
    available: false,
    maxParticipants: 4,
  },
  {
    temple: "Orem Temple",
    ordinance: "Sealing",
    date: "2025-04-05",
    time: "8:00 PM",
    available: false,
    maxParticipants: 3,
  },
  {
    temple: "Orem Temple",
    ordinance: "Endowment",
    date: "2025-04-05",
    time: "9:00 AM",
    available: true,
    maxParticipants: 7,
  },
  {
    temple: "Orem Temple",
    ordinance: "Endowment",
    date: "2025-03-31",
    time: "7:00 AM",
    available: false,
    maxParticipants: 2,
  },
  {
    temple: "Orem Temple",
    ordinance: "Baptism",
    date: "2025-03-31",
    time: "8:00 PM",
    available: true,
    maxParticipants: 15,
  },
  {
    temple: "Orem Temple",
    ordinance: "Sealing",
    date: "2025-04-01",
    time: "1:00 PM",
    available: false,
    maxParticipants: 3,
  },
  {
    temple: "Orem Temple",
    ordinance: "Initiatory",
    date: "2025-04-01",
    time: "6:00 PM",
    available: true,
    maxParticipants: 8,
  },
  {
    temple: "Orem Temple",
    ordinance: "Endowment",
    date: "2025-04-02",
    time: "7:00 PM",
    available: false,
    maxParticipants: 5,
  },
  {
    temple: "Orem Temple",
    ordinance: "Sealing",
    date: "2025-04-03",
    time: "8:00 AM",
    available: false,
    maxParticipants: 3,
  },
  {
    temple: "Orem Temple",
    ordinance: "Endowment",
    date: "2025-04-04",
    time: "2:00 PM",
    available: true,
    maxParticipants: 4,
  },
  {
    temple: "Orem Temple",
    ordinance: "Sealing",
    date: "2025-04-05",
    time: "8:00 PM",
    available: true,
    maxParticipants: 6,
  },

  // Payson Temple
  {
    temple: "Payson Temple",
    ordinance: "Initiatory",
    date: "2025-03-31",
    time: "8:00 AM",
    available: true,
    maxParticipants: 10,
  },
  {
    temple: "Payson Temple",
    ordinance: "Baptism",
    date: "2025-04-01",
    time: "2:00 PM",
    available: true,
    maxParticipants: 9,
  },
  {
    temple: "Payson Temple",
    ordinance: "Initiatory",
    date: "2025-04-02",
    time: "8:00 PM",
    available: true,
    maxParticipants: 6,
  },
  {
    temple: "Payson Temple",
    ordinance: "Baptism",
    date: "2025-04-03",
    time: "9:00 AM",
    available: true,
    maxParticipants: 12,
  },
  {
    temple: "Payson Temple",
    ordinance: "Initiatory",
    date: "2025-04-04",
    time: "3:00 PM",
    available: true,
    maxParticipants: 9,
  },
  {
    temple: "Payson Temple",
    ordinance: "Baptism",
    date: "2025-04-05",
    time: "9:00 PM",
    available: true,
    maxParticipants: 13,
  },
  {
    temple: "Payson Temple",
    ordinance: "Initiatory",
    date: "2025-04-05",
    time: "10:00 AM",
    available: false,
    maxParticipants: 3,
  },
  {
    temple: "Payson Temple",
    ordinance: "Baptism",
    date: "2025-03-31",
    time: "9:00 AM",
    available: true,
    maxParticipants: 10,
  },
  {
    temple: "Payson Temple",
    ordinance: "Endowment",
    date: "2025-04-01",
    time: "10:00 AM",
    available: false,
    maxParticipants: 5,
  },
  {
    temple: "Payson Temple",
    ordinance: "Initiatory",
    date: "2025-04-02",
    time: "7:00 AM",
    available: true,
    maxParticipants: 20,
  },
  {
    temple: "Payson Temple",
    ordinance: "Sealing",
    date: "2025-04-03",
    time: "6:00 PM",
    available: true,
    maxParticipants: 8,
  },
  {
    temple: "Payson Temple",
    ordinance: "Endowment",
    date: "2025-04-04",
    time: "2:00 PM",
    available: true,
    maxParticipants: 12,
  },
  {
    temple: "Payson Temple",
    ordinance: "Baptism",
    date: "2025-04-05",
    time: "3:00 PM",
    available: false,
    maxParticipants: 7,
  },

  // Saratoga Springs Temple
  {
    temple: "Saratoga Springs Temple",
    ordinance: "Sealing",
    date: "2025-03-31",
    time: "9:00 AM",
    available: true,
    maxParticipants: 6,
  },
  {
    temple: "Saratoga Springs Temple",
    ordinance: "Endowment",
    date: "2025-04-01",
    time: "3:00 PM",
    available: true,
    maxParticipants: 7,
  },
  {
    temple: "Saratoga Springs Temple",
    ordinance: "Sealing",
    date: "2025-04-02",
    time: "9:00 PM",
    available: true,
    maxParticipants: 4,
  },
  {
    temple: "Saratoga Springs Temple",
    ordinance: "Endowment",
    date: "2025-04-03",
    time: "10:00 AM",
    available: true,
    maxParticipants: 7,
  },
  {
    temple: "Saratoga Springs Temple",
    ordinance: "Sealing",
    date: "2025-04-04",
    time: "4:00 PM",
    available: true,
    maxParticipants: 6,
  },
  {
    temple: "Saratoga Springs Temple",
    ordinance: "Endowment",
    date: "2025-04-05",
    time: "10:00 PM",
    available: true,
    maxParticipants: 5,
  },
  {
    temple: "Saratoga Springs Temple",
    ordinance: "Sealing",
    date: "2025-04-05",
    time: "11:00 AM",
    available: true,
    maxParticipants: 20,
  },
  {
    temple: "Saratoga Springs Temple",
    ordinance: "Baptism",
    date: "2025-03-31",
    time: "8:00 AM",
    available: true,
    maxParticipants: 14,
  },
  {
    temple: "Saratoga Springs Temple",
    ordinance: "Sealing",
    date: "2025-04-01",
    time: "5:00 PM",
    available: false,
    maxParticipants: 4,
  },
  {
    temple: "Saratoga Springs Temple",
    ordinance: "Initiatory",
    date: "2025-04-02",
    time: "9:00 AM",
    available: true,
    maxParticipants: 9,
  },
  {
    temple: "Saratoga Springs Temple",
    ordinance: "Endowment",
    date: "2025-04-03",
    time: "11:00 AM",
    available: true,
    maxParticipants: 10,
  },
  {
    temple: "Saratoga Springs Temple",
    ordinance: "Baptism",
    date: "2025-04-04",
    time: "7:00 AM",
    available: false,
    maxParticipants: 6,
  },
  {
    temple: "Saratoga Springs Temple",
    ordinance: "Sealing",
    date: "2025-04-05",
    time: "3:00 PM",
    available: true,
    maxParticipants: 15,
  },

  // Mt Timpanogos Temple
  {
    temple: "Mt Timpanogos Temple",
    ordinance: "Baptism",
    date: "2025-03-31",
    time: "10:00 AM",
    available: false,
    maxParticipants: 4,
  },
  {
    temple: "Mt Timpanogos Temple",
    ordinance: "Initiatory",
    date: "2025-04-01",
    time: "4:00 PM",
    available: false,
    maxParticipants: 2,
  },
  {
    temple: "Mt Timpanogos Temple",
    ordinance: "Baptism",
    date: "2025-04-02",
    time: "10:00 PM",
    available: false,
    maxParticipants: 3,
  },
  {
    temple: "Mt Timpanogos Temple",
    ordinance: "Initiatory",
    date: "2025-04-03",
    time: "11:00 AM",
    available: false,
    maxParticipants: 5,
  },
  {
    temple: "Mt Timpanogos Temple",
    ordinance: "Baptism",
    date: "2025-04-04",
    time: "5:00 PM",
    available: false,
    maxParticipants: 3,
  },
  {
    temple: "Mt Timpanogos Temple",
    ordinance: "Initiatory",
    date: "2025-04-05",
    time: "6:00 AM",
    available: true,
    maxParticipants: 24,
  },
  {
    temple: "Mt Timpanogos Temple",
    ordinance: "Endowment",
    date: "2025-03-31",
    time: "6:00 AM",
    available: false,
    maxParticipants: 9,
  },
  {
    temple: "Mt Timpanogos Temple",
    ordinance: "Initiatory",
    date: "2025-04-01",
    time: "8:00 AM",
    available: true,
    maxParticipants: 10,
  },
  {
    temple: "Mt Timpanogos Temple",
    ordinance: "Sealing",
    date: "2025-04-02",
    time: "4:00 PM",
    available: true,
    maxParticipants: 5,
  },
  {
    temple: "Mt Timpanogos Temple",
    ordinance: "Baptism",
    date: "2025-04-03",
    time: "10:00 AM",
    available: true,
    maxParticipants: 18,
  },
  {
    temple: "Mt Timpanogos Temple",
    ordinance: "Endowment",
    date: "2025-04-04",
    time: "6:00 PM",
    available: false,
    maxParticipants: 7,
  },
  {
    temple: "Mt Timpanogos Temple",
    ordinance: "Initiatory",
    date: "2025-04-05",
    time: "12:00 PM",
    available: true,
    maxParticipants: 13,
  },

  // Draper Temple
  {
    temple: "Draper Temple",
    ordinance: "Endowment",
    date: "2025-03-31",
    time: "11:00 AM",
    available: true,
    maxParticipants: 15,
  },
  {
    temple: "Draper Temple",
    ordinance: "Sealing",
    date: "2025-04-01",
    time: "5:00 PM",
    available: true,
    maxParticipants: 12,
  },
  {
    temple: "Draper Temple",
    ordinance: "Endowment",
    date: "2025-04-03",
    time: "6:00 AM",
    available: true,
    maxParticipants: 20,
  },
  {
    temple: "Draper Temple",
    ordinance: "Sealing",
    date: "2025-04-03",
    time: "12:00 PM",
    available: true,
    maxParticipants: 22,
  },
  {
    temple: "Draper Temple",
    ordinance: "Endowment",
    date: "2025-04-04",
    time: "6:00 PM",
    available: true,
    maxParticipants: 19,
  },
  {
    temple: "Draper Temple",
    ordinance: "Sealing",
    date: "2025-04-05",
    time: "7:00 AM",
    available: false,
    maxParticipants: 6,
  },
  {
    temple: "Draper Temple",
    ordinance: "Endowment",
    date: "2025-03-31",
    time: "11:00 AM",
    available: true,
    maxParticipants: 15,
  },
  {
    temple: "Draper Temple",
    ordinance: "Sealing",
    date: "2025-04-01",
    time: "5:00 PM",
    available: true,
    maxParticipants: 12,
  },
  {
    temple: "Draper Temple",
    ordinance: "Endowment",
    date: "2025-04-02",
    time: "8:00 AM",
    available: false,
    maxParticipants: 10,
  },
  {
    temple: "Draper Temple",
    ordinance: "Sealing",
    date: "2025-04-03",
    time: "12:00 PM",
    available: true,
    maxParticipants: 22,
  },
  {
    temple: "Draper Temple",
    ordinance: "Endowment",
    date: "2025-04-04",
    time: "6:00 PM",
    available: true,
    maxParticipants: 19,
  },
  {
    temple: "Draper Temple",
    ordinance: "Sealing",
    date: "2025-04-05",
    time: "7:00 AM",
    available: false,
    maxParticipants: 6,
  },
  {
    temple: "Draper Temple",
    ordinance: "Baptism",
    date: "2025-04-05",
    time: "2:00 PM",
    available: true,
    maxParticipants: 25,
  },
];

const TempleScheduler = () => {
  const [temples, setTemples] = useState<string[]>([
    "Provo City Center Temple",
    "Orem Temple",
    "Payson Temple",
    "Saratoga Springs Temple",
    "Mt Timpanogos Temple",
    "Draper Temple",
  ]); //give these options for right now while it isn't connected to get the temples from the API
  const [participants, setParticipants] = useState<number>(1);
  const [selectedTemples, setSelectedTemples] = useState<string[]>([]);
  const [selectedOrdinances, setSelectedOrdinances] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimes, setSelectedTimes] = useState<string[]>(["Any Time"]);
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
  const [availability, setAvailability] = useState<any>(null);
  const timePickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchTemples = async () => {
      try {
        const response = await fetch("/api/temples");
        const data = await response.json();
        setTemples(data.map((t: { Name: string }) => t.Name));
      } catch (error) {
        console.error("Error fetching temples:", error);
      }
    };
    fetchTemples();
  }, []);

  const handleOrdinanceSelection = (ordinance: string) => {
    setSelectedOrdinances((prev) =>
      prev.includes(ordinance)
        ? prev.filter((o) => o !== ordinance)
        : [...prev, ordinance]
    );
  };

  const handleTimeSelection = (time: string) => {
    if (time === "Any Time") {
      setSelectedTimes(["Any Time"]);
    } else {
      setSelectedTimes((prev) =>
        prev.includes(time)
          ? prev.filter((t) => t !== time)
          : [...prev.filter((t) => t !== "Any Time"), time]
      );
    }
  };

  const toggleTimePicker = () => setIsTimePickerOpen(!isTimePickerOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        timePickerRef.current &&
        !timePickerRef.current.contains(event.target as Node)
      ) {
        setIsTimePickerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async () => {
    if (
      !selectedTemples.length ||
      selectedOrdinances.length === 0 ||
      !selectedDate
    ) {
      alert("Please select a temple, ordinance(s), and date.");
      return;
    }

    // Format the selected date for comparison
    const formattedDate = selectedDate.toISOString().split("T")[0];

    // Filter fake data
    const filteredData = fakeAvailabilityData.filter(
      (slot) =>
        selectedTemples.includes(slot.temple) &&
        selectedOrdinances.includes(slot.ordinance) &&
        slot.date === formattedDate &&
        slot.maxParticipants >= participants &&
        (selectedTimes.includes("Any Time") ||
          selectedTimes.includes(slot.time))
    );

    setAvailability({ slots: filteredData });
  };

  const availableOrdinances = ["Baptism", "Initiatory", "Endowment", "Sealing"];
  const availableTimes = [
    "Any Time",
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
  ];

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg pt-4">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Temple Scheduling
      </h2>

      <div className="m-4">
        {/* Temple Dropdown */}
        <TempleSelect
          temples={temples}
          selectedTemples={selectedTemples}
          setSelectedTemples={setSelectedTemples}
        />
        <br />

        {/* Participants Dropdown */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Number of Participants:
          </label>
          <select
            value={participants}
            onChange={(e) => setParticipants(Number(e.target.value))}
            className="my-2 form-select w-full border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          >
            {[1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <br />

        {/* Ordinance Checkboxes
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Ordinance(s):{" "}
          </label>
          <div className="grid grid-cols-2 gap-2">
            {availableOrdinances.map((ordinance) => (
              <label key={ordinance} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={ordinance}
                  checked={selectedOrdinances.includes(ordinance)}
                  onChange={() => handleOrdinanceSelection(ordinance)}
                  className="form-checkbox text-blue-600"
                />
                <span>{ordinance}</span>
              </label>
            ))}
          </div>
        </div> */}

        {/* Ordinance Checkboxes */}
        {/* Ordinance Checkboxes */}
<div>
  <label className="block text-gray-700 font-medium mb-1">
    Ordinance(s):{" "}
  </label>
  <div className="grid grid-cols-2 gap-2">
    {availableOrdinances.map((ordinance) => (
      <label key={ordinance} className="checkbox-button">
        <input
          type="checkbox"
          value={ordinance}
          checked={selectedOrdinances.includes(ordinance)}
          onChange={() => handleOrdinanceSelection(ordinance)}
        />
        <span className="button-label">{ordinance}</span>
      </label>
    ))}
  </div>
</div>


        <br />
        {/* Date Picker */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Date: </label>
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            dateFormat="MMMM d, yyyy"
            minDate={new Date()}
            placeholderText="Select a Date"
            className="w-full border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <br />

        {/* Time Picker Button */}
        <div className="relative">
          <label className="block text-gray-700 font-medium mb-1">Time: </label>
          <button
            onClick={toggleTimePicker}
            className="btn btn-outline-secondary"
          >
            {selectedTimes.length > 1
              ? selectedTimes.join(", ")
              : selectedTimes[0]}
          </button>

          {/* Time Picker Pop-up */}
          {isTimePickerOpen && (
            <div
              ref={timePickerRef}
              className="absolute left-0 mt-2 w-full bg-white border shadow-lg rounded-lg p-2 z-10"
            >
              <div className="grid grid-cols-3 gap-2">
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelection(time)}
                    className={`p-2 text-sm rounded-lg border ${
                      selectedTimes.includes(time)
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <br />
      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="btn btn-outline-success mb-3"
      >
        View Availability
      </button>

      {/* Availability Results */}
      {/* {availability && (
        <AvailabilityResults
          selectedTemple={selectedTemples.join(", ")} // Convert array to a comma-separated string
          selectedOrdinances={selectedOrdinances}
          selectedDate={selectedDate}
          selectedTimes={selectedTimes}
          data={availability} // Pass availability as a prop
      )} */}
      <AvailabilityResults availability={availability} />
    </div>
  );
};

export default TempleScheduler;
