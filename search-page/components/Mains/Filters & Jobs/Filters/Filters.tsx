import { CiFilter } from "react-icons/ci";

type FiltersProps = {
  className?: string;
};

export default function Filters({ className }: FiltersProps) {
  return (
    <div className={className}>
      <h2 className="flex items-center gap-2 font-medium">
        <CiFilter className="text-blue-600" />
        Filters
      </h2>
      <div className="w-full">
        <h4 className="font-light mb-0.5 text-gray-600">Profile</h4>
        <input
          type="text"
          className="border-2 border-gray-200 p-2 w-full hover:border-blue-300 focus:outline-none"
          placeholder="e.g. Marketing"
        />
      </div>
      <div className="w-full">
        <h4 className="font-light mb-0.5 text-gray-600">Location</h4>
        <input
          type="text"
          className="border-2 border-gray-200 p-2 w-full hover:border-blue-300  focus:outline-none"
          placeholder="e.g. Delhi"
        />
      </div>
      <div className="w-full">
        <h4 className="font-light mb-0.5 text-gray-600">Max. Duration (Months)</h4>
        <input
          type="text"
          className="border-2 border-gray-200 p-2 w-full hover:border-blue-300 focus:outline-none "
          placeholder="e.g. 6"
        />
      </div>
<div className="w-full">
      
      <h4 className="font-light mb-2 text-gray-600">
        Desired minimum monthly stipend (₹)
      </h4>

      {/* Slider */}
      <input
        type="range"
        min={0}
        max={10000}
        step={2000}
        className="w-full accent-blue-600 cursor-pointer"
      />

      {/* Labels */}
      <div className="flex justify-between text-sm text-gray-600 mt-1">
        <span>0</span>
        <span>2k</span>
        <span>4k</span>
        <span>6k</span>
        <span>8k</span>
        <span>10k</span>
      </div>

    </div>
    </div>
  );
}
