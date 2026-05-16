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
];

export default function Extras({ className }: props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className={className}>
      <div>
        
      </div>
    </div>
  );
}
