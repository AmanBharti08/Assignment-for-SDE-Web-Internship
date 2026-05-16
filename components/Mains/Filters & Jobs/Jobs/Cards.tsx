import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { TbMoneybag } from "react-icons/tb";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineDescription } from "react-icons/md";
import { FaClockRotateLeft } from "react-icons/fa6";

type Props = {
  job: any;
};

export default function Cards({ job }: Props) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4 text-sm hover:scale-102 transition-transform cursor-pointer">
      <div className="flex justify-between">
        <div className="flex flex-col gap-1.5">
          <h2 className="font-medium">{job.title}</h2>
          <h6 className="text-gray-400 flex items-center gap-2">
            {job.company_name}{" "}
            <span className="border p-1 px-2 rounded-2xl text-[0.6rem] text-blue-400">
              Actively Hiring
            </span>
          </h6>
        </div>
        <div>
          <Image
            src={`https://internshala.com/static/images/company/logo/${job.company_logo}`}
            alt={""}
            width={50}
            height={50}
          />
        </div>
      </div>
      <div className="flex gap-6 text-[13px] text-gray-500">
        <h4 className="flex gap-1 items-center">
          <CiLocationOn /> {job.location_names[0] ? job.location_names[0] : "Work From Home"}
        </h4>
        <h4 className="flex gap-1 items-center">
          {" "}
          <TbMoneybag />{job.stipend.salary}
        </h4>
        <h4 className="flex gap-1 items-center">
          <CiCalendar />
          {job.duration}
        </h4>
      </div>
      <div className="flex gap-1 items-center text-[13px] text-gray-500">
        <MdOutlineDescription />
        <p>{job.description}</p>
      </div>
      <div className="flex gap-6 text-gray-400 font-light text-[13px]">
        <h6>Requirements</h6>
        <h6>Requirements</h6>
        <h6>Requirements</h6>
      </div>
      <div>
        <h6 className=" bg-green-50  p-1 px-2 min-w-1.5 max-w-20 rounded-2xl text-[0.6rem] text-green-600 flex gap-1 items-center"><FaClockRotateLeft />
{job.posted_by_label}</h6>
      </div>
    </div>
  );
}
