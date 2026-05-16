"use client";
import Image from "next/image";
import { MdArrowDropDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../public/images/Internshala-Logo.png";
import { useState } from "react";

type props = {
  navbarOpen: boolean;
  setNavbarOpen: any;
};

export default function Navbar({ navbarOpen, setNavbarOpen }: props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState("");

  return (
    <nav className="flex justify-between items-center lg:px-32 md:px-8 sm:px-10 px-5 h-16 w-full ">
      <div className=" text-black items-center h-full flex">
        <Image
          className="cursor-pointer "
          src={logo}
          alt="Internshala"
          width={120}
          height={40}
        />
      </div>
      <div className="relative h-full justify-between items-center  text-black  font-medium  hidden lg:flex">
        {/* Internships */}
        <div
          className="relative h-full group flex items-center"
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => {
            setMenuOpen(false);
            setActiveSubMenu("");
          }}
        >
          <h2 className="h-full p-2 group cursor-pointer flex justify-center items-center border-b-2 border-blue-600 hover:bg-blue-100 hover:text-blue-600 hover:border-0">
            Internships{" "}
            <MdArrowDropDown className="text-3xl transition-transform group-hover:rotate-180" />
          </h2>

          {menuOpen && (
            <div className="absolute top-16 left-0 w-72 bg-white shadow-lg rounded-b-2xl z-50 py-3">
              {/* WEB DEVELOPMENT */}
              <div
                className="relative px-4 py-3 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                onMouseEnter={() => setActiveSubMenu("web")}
              >
                Top Location
                {activeSubMenu === "web" && (
                  <div className="absolute top-0 left-full w-64 bg-white shadow-lg rounded-xl flex flex-col gap-3">
                    <p className="hover:text-blue-600 cursor-pointer text-black hover:bg-blue-50 px-4 py-3">
                      Internship in Bangalore
                    </p>

                    <p className="hover:text-blue-600 cursor-pointer text-black hover:bg-blue-50 px-4 py-3">
                      Internship in Delhi
                    </p>

                    <p className="hover:text-blue-600 cursor-pointer text-black hover:bg-blue-50 px-4 py-3">
                      Internships in Hyderabad
                    </p>
                    <p className="hover:text-blue-600 cursor-pointer text-black hover:bg-blue-50 px-4 py-3">
                      Internship in Mumbai
                    </p>
                    <p className="hover:text-blue-600 cursor-pointer text-black hover:bg-blue-50 px-4 py-3">
                      Work From Home
                    </p>
                  </div>
                )}
              </div>

              {/* APP DEVELOPMENT */}
              <div
                className="relative px-4 py-3 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                onMouseEnter={() => setActiveSubMenu("explore")}
              >
                Explore More Internships
                {activeSubMenu === "explore" && (
                  <div className="absolute top-0 left-full w-64 bg-white shadow-lg rounded-xl flex flex-col gap-3">
                    <p className="hover:text-blue-600 cursor-pointer text-black hover:bg-blue-50 px-4 py-3">
                      Internship by Location
                    </p>

                    <p className="hover:text-blue-600 cursor-pointer text-black hover:bg-blue-50 px-4 py-3">
                      Internship by Category
                    </p>

                    <p className="hover:text-blue-600 cursor-pointer text-black hover:bg-blue-50 px-4 py-3">
                      Internships by Company
                    </p>
                  </div>
                )}
              </div>

              {/* MACHINE LEARNING */}
              <div
                className="relative px-4 py-3 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                onMouseEnter={() => setActiveSubMenu("ml")}
              >
                Career Launchpads{" "}
                <span className="text-xs bg-amber-500 p-1 px-2 rounded-2xl text-white">
                  Get Hired Faster
                </span>
                {activeSubMenu === "ml" && (
                  <div className="absolute top-0 left-full w-72 bg-white shadow-lg rounded-xl flex flex-col gap-3">
                    <p className="hover:text-blue-600 cursor-pointer text-black hover:bg-blue-50 px-4 py-3">
                      Web Developer LauchPad Course
                    </p>
                    <p className="hover:text-blue-600 cursor-pointer text-black hover:bg-blue-50 px-4 py-3">
                      Data Science LaunchPad Course
                    </p>
                    <p className="hover:text-blue-600 cursor-pointer text-black hover:bg-blue-50 px-4 py-3">
                      Digital Marketing LauchPad Course
                    </p>
                    <p className="hover:text-blue-600 cursor-pointer text-black hover:bg-blue-50 px-4 py-3">
                      HR Management LauchPad Course
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Courses */}
        <h2 className="h-full p-2 group cursor-pointer flex justify-center items-center gap-1 hover:bg-blue-100 hover:text-blue-600 ">
          Courses
          <span className="bg-amber-600 text-white rounded-md text-xs p-1 font-bold">
            OFFER
          </span>
          <MdArrowDropDown className="text-3xl transition-transform group-hover:rotate-180" />
        </h2>





        
        <h2 className="h-full p-2 group cursor-pointer flex justify-center items-center  hover:bg-blue-100 hover:text-blue-600 ">
          Jobs{" "}
          <MdArrowDropDown className="text-3xl transition-transform group-hover:rotate-180" />
        </h2>
        <h2 className="h-full p-2 group cursor-pointer  flex justify-center items-center  hover:bg-blue-100 hover:text-blue-600 ">
          Login / Register
          <MdArrowDropDown className="text-3xl transition-transform group-hover:rotate-180" />
        </h2>
      </div>
      <div className="lg:hidden flex items-center gap-5">
        <div className="lg:hidden">
          <RxHamburgerMenu
            onClick={() => {
              setNavbarOpen(!navbarOpen);
            }}
          />
        </div>
        <button className="bg-blue-400 hover:bg-blue-500 text-white rounded-sm cursor-pointer p-1 px-3">
          Register
        </button>
      </div>
    </nav>
  );
}
