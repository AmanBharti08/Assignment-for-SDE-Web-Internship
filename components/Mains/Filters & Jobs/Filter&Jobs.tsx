"use client";

import { useEffect, useState } from "react";
import Filters from "./Filters/Filters";
import Jobs from "./Jobs/Jobs";

import { CiFilter } from "react-icons/ci";

type Props = {
  className?: string;
};

export default function FilterAndJobs({ className }: Props) {
  const [jobs, setJobs] = useState<any[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<any[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const [filters, setFilters] = useState({
    profile: "",
    location: "",
    duration: "",
    stipend: 0,
  });

  // API CALL
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("https://internshala.com/hiring/search");

        const data = await response.json();

        console.log(data);

        // convert object -> array
        const jobsArray = Object.values(data.internships_meta);

        setJobs(jobsArray as any[]);
        setFilteredJobs(jobsArray as any[]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobs();
  }, []);

  // FILTERING
  useEffect(() => {
    let updatedJobs = [...jobs];

    // PROFILE
    if (filters.profile) {
      updatedJobs = updatedJobs.filter((job: any) =>
        job.profile_name?.toLowerCase().includes(filters.profile.toLowerCase()),
      );
    }

    // LOCATION
    if (filters.location) {
      updatedJobs = updatedJobs.filter((job: any) =>
        job.location_names?.some((location: string) =>
          location.toLowerCase().includes(filters.location.toLowerCase()),
        ),
      );
    }

    // DURATION
    if (filters.duration) {
      updatedJobs = updatedJobs.filter(
        (job: any) => job.duration === filters.duration,
      );
    }

    // STIPEND
    if (filters.stipend > 0) {
      updatedJobs = updatedJobs.filter((job: any) => {
        const stipend = Number(job?.stipend?.salaryValue1) || 0;

        return stipend >= filters.stipend;
      });
    }

    setFilteredJobs(updatedJobs);
  }, [filters, jobs]);

  // UNIQUE OPTIONS

  const profileOptions = [...new Set(jobs.map((job: any) => job.profile_name))];

  const locationOptions = [
    ...new Set(jobs.flatMap((job: any) => job.location_names)),
  ];

  const durationOptions = [...new Set(jobs.map((job: any) => job.duration))];

  return (
    <div className={className}>
      <div className="flex justify-between lg:justify-center">
        <div className="lg:hidden">
          <button
            className="rounded-4xl bg-white shadow-md flex justify-between items-center gap-2 p-2 px-4"
            onClick={() => setFiltersOpen(!filtersOpen)}
          >
            Filters
            <CiFilter className="text-blue-600" />
          </button>
        </div>
        <div className="flex flex-col lg:items-center items-end">
          <h2 className="  font-medium text-lg  text-gray-800">
            {filteredJobs.length} Total Internships
          </h2>
          <p className="text-xs text-gray-700">
            Latest Summer Internships in India
          </p>
        </div>
      </div>
      {filtersOpen && (
        <div className="fixed inset-0 z-40 bg-white">
          <Filters
            className="w-full h-screen z-50 p-6 px-10 flex flex-col items-center gap-4"
            filtersOpen={filtersOpen}
            setFiltersOpen={setFiltersOpen}
            filters={filters}
            setFilters={setFilters}
            profileOptions={profileOptions}
            locationOptions={locationOptions}
            durationOptions={durationOptions}
          />
        </div>
      )}

      <div className="flex gap-10">
        <Filters
          className="w-[35%] bg-white p-6 lg:flex flex-col items-center rounded-md shadow-sm gap-4 h-min sticky top-4 hidden"
          filtersOpen={filtersOpen}
          setFiltersOpen={setFiltersOpen}
          filters={filters}
          setFilters={setFilters}
          profileOptions={profileOptions}
          locationOptions={locationOptions}
          durationOptions={durationOptions}
        />

        <Jobs className="lg:w-[65%] flex flex-col gap-4" jobs={filteredJobs} />
      </div>
    </div>
  );
}
