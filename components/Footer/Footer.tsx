import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full bg-gray-900 text-white lg:px-30 md:px-20 sm:px-10 p-5 flex flex-col gap-10 py-10">
      <div className="lg:flex lg:flex-row w-full justify-between flex-col">
        <div className="flex flex-col gap-0.5">
          <h6 className="cursor-pointer">About Us</h6>
          <h6 className="cursor-pointer">We're hiring</h6>
          <h6 className="cursor-pointer">Hire interns for your company</h6>
          <h6 className="cursor-pointer">Post a Job</h6>
          <h6 className="cursor-pointer">Competitions</h6>
        </div>
        <div className="flex flex-col gap-0.5">
          <h6 className="cursor-pointer">Team Diary</h6>
          <h6 className="cursor-pointer">Blog</h6>
          <h6 className="cursor-pointer">Our Services</h6>
          <h6 className="cursor-pointer">Free Job Alerts</h6>
        </div>
        <div className="flex flex-col gap-0.5">
          <h6 className="cursor-pointer">Terms & Conditions</h6>
          <h6 className="cursor-pointer">Privacy</h6>
          <h6 className="cursor-pointer">Contact us</h6>
          <h6 className="cursor-pointer">Annual Returns</h6>
          <h6 className="cursor-pointer">Grievance Redressal</h6>
          <h6 className="cursor-pointer">Resume Maker</h6>
        </div>
        <div className="flex flex-col gap-0.5">
          <h6 className="cursor-pointer">Sitemap</h6>
          <h6 className="cursor-pointer">College TPO registration</h6>
          <h6 className="cursor-pointer">List of Companies</h6>
          <h6 className="cursor-pointer">Jobs for Women</h6>
        </div>
      </div>
      <div className="lg:flex lg:flex-row flex-col justify-between items-center">
        <div className="lg:flex lg:flex-row flex-col lg:gap-5 ">
          <div className="flex gap-5 ">
            <div className="bg-black border border-white flex items-center rounded-md p-1 px-4 gap-2 cursor-pointer">
              <FaGooglePlay className="text-2xl" />
              <div>
                <p className="text-xs text-gray-400">GET IT ON</p>
                <h6 className="text-sm font-bold">Google Play</h6>
              </div>
            </div>
            <div className="bg-black border border-white flex items-center rounded-md p-1 px-4 gap-2 cursor-pointer">
              <FaApple  className="text-2xl" />
              <div>
                <p className="text-xs text-gray-400">Download on the</p>
                <h6 className="text-sm font-bold">App Store</h6>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 text-2xl lg:mt-0 mt-5">
            <FaInstagram className="cursor-pointer"/>
            <CiTwitter className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
            <SlSocialLinkedin className="cursor-pointer" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
