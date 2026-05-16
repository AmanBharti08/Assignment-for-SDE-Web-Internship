"use client";

import { MdArrowDropDown } from "react-icons/md";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

type Props = {
  className?: string;
};

export default function FAQ({ className }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question:
        "Q. How do I search for internships in my preferred category/profile?",
      answer:
        "Click here if you are looking for internships. Next, update your preferred profile or location on the web page and use relevant filters to find internships as per your preference.",
    },
    {
      question: "Q. How can I apply for an internship on Internshala?",
      answer:
        "You can apply for an internship on Internshala using the following steps.",
    },
    {
      question:
        "Q. Do I need to pay to apply for an internship on Internshala?",
      answer:
        "Absolutely not! Internshala is a free platform. You don't have to pay anything to apply for internships on Internshala.",
    },
    {
      question: "Q. What all internships are available on Internshala?",
      answer:
        "You can find 45,000+ internships, work from home internships, and part-time internships in your preferred location or profile on Internshala.",
    },
    {
      question: "Q. Are there any courses that offer placement?",
      answer:
        "You can check out the available placement-oriented courses on the platform.",
    },
    {
      question: "Q. How do I get certified online?",
      answer:
        "Internshala offers a number of certified courses to improve your skill set.",
    },
  ];

  return (
    <div className={className}>
      {/* TOGGLE BUTTON */}
      <button
        className="flex items-center justify-center gap-1 rounded-md border border-blue-500 px-4 py-2 text-sm font-semibold text-blue-500 shadow-sm cursor-pointer transition hover:scale-101"
        onClick={() => setIsOpen(!isOpen)}
      >
        Frequently Asked Questions
        <MdArrowDropDown
          className={`text-3xl transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* FAQ CONTAINER */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-250 opacity-100 mt-6" : "max-h-0 opacity-0"
        }`}
      >
        {faqData.map((faq, index) => {
          const isAnswerOpen = openIndex === index;

          return (
            <div key={index} className="border-b border-gray-200 py-4 ">
              {/* QUESTION */}
              <button
                onClick={() => setOpenIndex(isAnswerOpen ? null : index)}
                className="flex w-full items-center justify-between text-left font-medium cursor-pointer"
              >
                <span>{faq.question}</span>

                <span className="text-blue-500">
                  {isAnswerOpen ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isAnswerOpen
                    ? "max-h-96 opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm leading-relaxed text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
