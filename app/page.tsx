"use client";
import Navbar from "../components/Navbar/Navbar";
import Mains from "../components/Mains/Mains";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

export default function Home() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="flex flex-col relative">
      {navbarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setNavbarOpen(false)}
        >
          <div
            className="z-50 absolute top-0 left-0 bg-white p-5 py-10 w-[85%] h-screen transition flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b border-b-gray-200 text-gray-800 flex flex-col gap-5 pb-5">
              <h2>Home</h2>
              <h2>Internships</h2>
              <h2>jobs</h2>
              <h2>
                Courses{" "}
                <span className="bg-amber-600 text-white rounded-md text-xs p-1 font-bold">
                  OFFER
                </span>
              </h2>
              <h2>
                Career Launchpads{" "}
                <span className="bg-amber-600 text-white rounded-md text-xs p-1 font-bold">
                  GET HIRED FASTER
                </span>
              </h2>
              <h2>Online Degrees</h2>
              <h2>Study Abroad</h2>
              <h2>Contact Us</h2>
            </div>
            <div className="flex flex-col gap-5 pt-5 text-gray-800">
              <h2>Register - As a Student</h2>
              <h2>Register - As an Employer</h2>
              <h2>Logiin</h2>
            </div>
          </div>
        </div>
      )}
      <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <Mains />
      <Footer/>
    </div>
  );
}
