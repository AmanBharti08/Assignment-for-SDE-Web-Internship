
import Image from "next/image";
import { MdArrowDropDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../public/images/Internshala-Logo.png";

type props = {
  navbarOpen: boolean;
  setNavbarOpen: any,
}

export default function Navbar({navbarOpen,setNavbarOpen}: props) {

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
      <div className="h-full justify-between items-center  text-black  font-medium  hidden lg:flex">
        <h2 className="h-full p-2 group cursor-pointer flex justify-center items-center border-b-2 border-blue-600 hover:bg-blue-100 hover:text-blue-600 hover:border-0">
          Internships{" "}
          <MdArrowDropDown className="text-3xl transition-transform group-hover:rotate-180" />
        </h2>
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
          <RxHamburgerMenu onClick={()=>{setNavbarOpen(!navbarOpen)}}/>
        </div>
        <button className="bg-blue-400 hover:bg-blue-500 text-white rounded-sm cursor-pointer p-1 px-3">Register</button>
      </div>
    </nav>
  );
}
