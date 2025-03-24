import Select from "react-select";
//for this package: npm install react-select

interface TempleSelectProps {
  temples: string[];
  selectedTemples: string[];
  setSelectedTemples: (temples: string[]) => void;
}

const TempleSelect: React.FC<TempleSelectProps> = ({
  temples,
  selectedTemples,
  setSelectedTemples,
}) => {
  const options = temples.map((temple) => ({ value: temple, label: temple }));

  return (
    <div>
      <label className="block text-gray-700 font-medium mb-1">Temple(s):</label>
      <Select
        options={options}
        value={options.filter((option) =>
          selectedTemples.includes(option.value)
        )}
        onChange={(selectedOptions) =>
          setSelectedTemples(
            selectedOptions ? selectedOptions.map((option) => option.value) : []
          )
        }
        isMulti
        isSearchable
        className="w-full"
      />
    </div>
  );
};

export default TempleSelect;
