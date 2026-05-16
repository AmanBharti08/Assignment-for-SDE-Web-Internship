"use client";

import { useState } from "react";

type props = {
  className?: string;
};

const ExtrasData = [
  {
    title: "Internship by Places",
    data: [
      "Internship in Bangalore",
      "Internship in Delhi",
      "Internships in Hyderabad",
      "Internship in Mumbai",
      "Internship in Chennai",
      "Internship in Pune",
      "Internship in Kolkata",
      "Internship in Gurgaon",
      "Work From Home Internships",
    ],
  },
  {
    title: "Internship by Stream",
    data: [
      "Computer Science Internship",
      "Electronics Internship",
      "Mechanical Internship",
      "Civil Internship",
      "Marketing Internship",
      "Chemical Internship",
      "Finance Internship",
    ],
  },
  {
    title: "Jobs by Places",
    data: [
      "Jobs in Bangalore",
      "Jobs in Delhi",
      "Jobs in Hyderabad",
      "Jobs in Gurgaon",
      "Jobs in Kolkata",
      "Jobs in Mumbai",
      "Jobs in Pune",
      "Jobs in Chennai",
      "Jobs in Noida",
    ],
  },
];

export default function Extras({ className }: props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className={className}>
      {ExtrasData.map((item, index) => {
        return (
          <div key={index} className="w-full flex flex-col gap-5">
            <h5 className="text-md font-bold">{item.title}</h5>
            <div className="flex flex-wrap gap-5">
              {item.data.map((data, index) => {
                return (
                  <p
                    className="text-sm border-r border-gray-300 pr-5 inline-block cursor-pointer text-gray-500 hover:text-black"
                    key={index}
                  >
                    {data}
                  </p>
                );
              })}
              <p className="text-sm cursor-pointer text-gray-500 hover:text-black underline">
                View All &gt;
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
