import { useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import { IoIosStarHalf } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";
import { FaArrowCircleLeft ,FaArrowCircleRight } from "react-icons/fa";


const reviews = [
  {
    heading: "Must-have app for students",
    description:
      "I got my first internship from here. Internshala is must for career oriented students.",
    name: "Yogesh Singh",
  },
  {
    heading: "Amazing opportunities",
    description:
      "This app helped me discover internships that matched my interests.",
    name: "Ankit Verma",
  },
  {
    heading: "Best platform",
    description:
      "Very easy to use and extremely useful for students and freshers.",
    name: "Priya Sharma",
  },
  {
    heading: "Career growth",
    description:
      "I learned practical skills and improved my confidence.",
    name: "Sneha Gupta",
  },
  {
    heading: "Simple UI",
    description:
      "The interface is clean and applications are easy to track.",
    name: "Rohit Kumar",
  },
];

export default function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < reviews.length - 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full flex flex-col lg:flex-row bg-blue-100 gap-10 px-5 lg:px-20 py-10 overflow-hidden">
      
      {/* LEFT SECTION */}
      <div className="flex flex-col gap-5 lg:w-[40%]">
        <h2 className="text-3xl font-bold">
          Join the pool of 21Mn+ students and get started with your career
        </h2>

        <div className="flex flex-col gap-3">
          <p>PLAY STORE RATINGS</p>

          <div className="flex items-center gap-5">
            <div className="flex gap-2 items-center">
              <h6 className="text-blue-500 text-3xl font-extrabold">
                4.4
              </h6>

              <div>
                <div className="flex text-orange-400">
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoIosStarHalf />
                </div>

                <p className="text-xs">(42k Reviews)</p>
              </div>
            </div>

            <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl cursor-pointer hover:scale-101 transition">
              <IoLogoGooglePlaystore />
              <span>Google Play</span>
              <FaLocationArrow className="text-xs" />
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="relative lg:w-[60%] overflow-hidden">

        {/* Buttons */}
        <button
          onClick={prevSlide}
          className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
        >
          <FaArrowCircleLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
        >
          <FaArrowCircleRight />
        </button>

        {/* SLIDER */}
        <div
          className="flex gap-5 transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 320}px)`,
          }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-[300px] bg-white p-5 rounded-xl shadow-md flex flex-col justify-between"
            >
              <div>
                <h3 className="font-bold text-lg mb-3">
                  {review.heading}
                </h3>

                <p className="text-gray-600">
                  {review.description}
                </p>
              </div>

              <p className="mt-5 font-medium">
                - {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}