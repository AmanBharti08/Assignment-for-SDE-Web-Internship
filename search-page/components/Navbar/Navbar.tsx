import Image from "next/image";
import { MdArrowDropDown } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-white h-16 px-32 w-full">
      <div className="w-[50%] ">
        <Image
          className="cursor-pointer"
          src="/images/internshala-logo.png"
          alt="Internshala"
          width={120}
          height={40}
        />
      </div>
      <div className="flex justify-between items-center w-[50%] text-black font-medium h-full">
        <h2 className="group cursor-pointer h-full w-full flex justify-center items-center border-b-2 border-blue-600 hover:bg-blue-100 hover:text-blue-600 hover:border-0">
          Internships{" "}
          <MdArrowDropDown className="text-3xl transition-transform group-hover:rotate-180" />
        </h2>
        <h2 className="group cursor-pointer h-full w-full flex justify-center items-center gap-1 hover:bg-blue-100 hover:text-blue-600 ">
          Courses
          <span className="bg-amber-600 text-white rounded-md text-xs p-1 font-bold">OFFER</span>
          <MdArrowDropDown className="text-3xl transition-transform group-hover:rotate-180" />
        </h2>
        <h2 className=" group cursor-pointer h-full w-full flex justify-center items-center  hover:bg-blue-100 hover:text-blue-600 ">
          Jobs{" "}
          <MdArrowDropDown className="text-3xl transition-transform group-hover:rotate-180" />
        </h2>
        <h2 className="group cursor-pointer h-full w-full flex justify-center items-center  hover:bg-blue-100 hover:text-blue-600 ">
          Login / Register{" "}
          <MdArrowDropDown className="text-3xl transition-transform group-hover:rotate-180" />
        </h2>
      </div>
    </nav>
  );
}
