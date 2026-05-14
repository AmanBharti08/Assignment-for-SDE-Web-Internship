import Filters from "./Filters/Filters";
import Jobs from "./Jobs/Jobs";

export default function FilterAndJobs() {
    return (
        <div className="flex gap-10 w-full">
            <Filters className="w-[35%] bg-white p-6 flex flex-col items-center rounded-md shadow-sm gap-4"/>
            <Jobs class/>
        </div>
    )
}