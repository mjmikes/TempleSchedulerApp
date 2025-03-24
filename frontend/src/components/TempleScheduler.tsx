import { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
//to get datepicker to work, run these:
//npm install react-datepicker @types/react-datepicker
//npm install date-fns


import "react-datepicker/dist/react-datepicker.css";
import AvailabilityResults from "./AvailabilityResults";
import TempleSelect from "./TempleSelect";

const TempleScheduler = () => {
  const [temples, setTemples] = useState<string[]>(["Provo Temple", "Orem Temple", "Payson Temple"]); //give these options for right now while it isn't connected to get the temples from the API
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
    if (!selectedTemples || selectedOrdinances.length === 0 || !selectedDate) {
      alert("Please select a temple, ordinance(s), and date.");
      return;
    }
    try {
      const response = await fetch(
        `/api/availability?temple=${selectedTemples}&ordinances=${selectedOrdinances.join(
          ","
        )}&date=${selectedDate.toISOString()}&times=${selectedTimes.join(",")}`
      );
      const data = await response.json();
      setAvailability(data);
    } catch (error) {
      console.error("Error fetching availability:", error);
    }
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
  ];

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Temple Scheduling
      </h2>

      <div className="space-y-4">
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
            className="w-full border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          >
            {[1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <br/>

        {/* Ordinance Checkboxes */}
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

        {/* Time Picker Button */}
        <div className="relative">
          <label className="block text-gray-700 font-medium mb-1">Time: </label>
          <button
            onClick={toggleTimePicker}
            className="w-full text-left border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 bg-white shadow"
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
        className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        View Availability
      </button>

      {/* Availability Results */}
      {availability && (
        <AvailabilityResults
          selectedTemple={selectedTemples.join(", ")} // Convert array to a comma-separated string
          selectedOrdinances={selectedOrdinances}
          selectedDate={selectedDate}
          selectedTimes={selectedTimes}
          data={availability} // Pass availability as a prop
        />
      )}
    </div>
  );
};

export default TempleScheduler;
