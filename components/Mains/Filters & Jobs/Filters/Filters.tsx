"use client";

import { useEffect, useState } from "react";

import { CiFilter } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

type FiltersProps = {
  className?: string;
  filters: any;
  setFilters: any;
  filtersOpen: boolean;
  setFiltersOpen: any;
  profileOptions: string[];
  locationOptions: string[];
  durationOptions: string[];
};

export default function Filters({
  className,
  filters,
  setFilters,
  filtersOpen,
  setFiltersOpen,
  profileOptions,
  locationOptions,
  durationOptions,
}: FiltersProps) {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showDurationDropdown, setShowDurationDropdown] = useState(false);

  return (
    <div className={`${className} lg:flex lg:flex-col overflow-visible relative`}>
      
      {/* Cross to close */}
      <RxCross1 className="absolute top-6 right-6 lg:hidden" onClick={()=>{setFiltersOpen(!filtersOpen)}}/>

      {/* heading with icon */}
      <h2 className="flex items-center gap-2 font-medium">
        <CiFilter className="text-blue-600" />
        Filters
      </h2>

      {/* PROFILE */}
      <div className="w-full relative">
        <h4 className="font-light mb-0.5 text-gray-600">Profile</h4>

        <input
          type="text"
          placeholder="e.g. Marketing"
          value={filters.profile}
          onFocus={() => setShowProfileDropdown(true)}
          onBlur={() => {
            setTimeout(() => {
              setShowProfileDropdown(false);
            }, 100);
          }}
          onChange={(e) =>
            setFilters((prev: any) => ({
              ...prev,
              profile: e.target.value,
            }))
          }
          className="border-2 border-gray-200 p-2 w-full rounded-md hover:border-blue-400 focus:border-blue-400 transition-colors"
        />

        {showProfileDropdown && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md shadow-lg mt-1 max-h-48 overflow-y-auto z-50">
            {profileOptions

              .filter((profile) =>
                profile.toLowerCase().includes(filters.profile.toLowerCase()),
              )
              .map((profile) => (
                <div
                  key={profile}
                  onMouseDown={() => {
                    setFilters((prev: any) => ({
                      ...prev,
                      profile,
                    }));

                    setShowProfileDropdown(false);
                  }}
                  className="p-2 hover:bg-blue-50 hover:text-blue-400 cursor-pointer transition-colors"
                >
                  {profile}
                </div>
              ))}
          </div>
        )}
      </div>

      {/* LOCATION */}
      <div className="w-full relative">
        <h4 className="font-light mb-0.5 text-gray-600">Location</h4>

        <input
          type="text"
          placeholder="e.g. Delhi"
          value={filters.location}
          onFocus={() => setShowLocationDropdown(true)}
          onBlur={() => {
            setTimeout(() => {
              setShowLocationDropdown(false);
            }, 100);
          }}
          onChange={(e) =>
            setFilters((prev: any) => ({
              ...prev,
              location: e.target.value,
            }))
          }
          className="border-2 border-gray-200 p-2 w-full rounded-md hover:border-blue-400 focus:border-blue-400 transition-colors"
        />

        {showLocationDropdown && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md shadow-lg mt-1 max-h-48 overflow-y-auto z-50">
            {locationOptions

              .filter((location) =>
                location.toLowerCase().includes(filters.location.toLowerCase()),
              )
              .map((location) => (
                <div
                  key={location}
                  onMouseDown={() => {
                    setFilters((prev: any) => ({
                      ...prev,
                      location,
                    }));

                    setShowLocationDropdown(false);
                  }}
                  className="p-2 hover:bg-blue-50 hover:text-blue-400 cursor-pointer transition-colors"
                >
                  {location}
                </div>
              ))}
          </div>
        )}
      </div>

      {/* DURATION */}
      <div className="w-full relative">
        <h4 className="font-light mb-0.5 text-gray-600">Max Duration</h4>

        <input
          type="number"
          placeholder="e.g. 6"
          value={filters.duration}
          onFocus={() => setShowDurationDropdown(true)}
          onBlur={() => {
            setTimeout(() => {
              setShowDurationDropdown(false);
            }, 100);
          }}
          onChange={(e) =>
            setFilters((prev: any) => ({
              ...prev,
              duration: e.target.value,
            }))
          }
          className="border-2 border-gray-200 p-2 w-full rounded-md hover:border-blue-400 focus:border-blue-400 transition-colors "
        />

        {showDurationDropdown && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md shadow-lg mt-1 max-h-48 overflow-y-auto z-50">
            {durationOptions

              .filter((duration) =>
                duration.toLowerCase().includes(filters.duration.toLowerCase()),
              )
              .map((duration) => (
                <div
                  key={duration}
                  onMouseDown={() => {
                    setFilters((prev: any) => ({
                      ...prev,
                      duration,
                    }));

                    setShowDurationDropdown(false);
                  }}
                  className="p-2 hover:bg-blue-50 hover:text-blue-400 cursor-pointer transition-colors"
                >
                  {duration}
                </div>
              ))}
          </div>
        )}
      </div>
      {/* STIPEND */}
      <div className="w-full">
        <h4 className="font-light mb-2 text-gray-600">Minimum Stipend</h4>

        <input
          type="range"
          min={0}
          max={10000}
          step={2000}
          value={filters.stipend}
          onChange={(e) =>
            setFilters((prev: any) => ({
              ...prev,
              stipend: Number(e.target.value),
            }))
          }
          className="w-full accent-blue-600 cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0</span>
          <span>2k</span>
          <span>4k</span>
          <span>6k</span>
          <span>8k</span>
          <span>10k</span>
        </div>
      </div>
      <div className="flex w-full justify-end items-center gap-6  ">
        <p className="text-blue-600 cursor-pointer">Clear All</p>
        <button className="text-white bg-blue-400 rounded-md p-2 px-4 cursor-pointer lg:hidden" onClick={()=>{setFiltersOpen(!filtersOpen)}}>Apply</button>
      </div>
    </div>
  );
}
