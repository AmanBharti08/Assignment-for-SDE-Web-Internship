import FilterAndJobs from "./Filters & Jobs/Filter&Jobs";


export default function Mains() {
return(
    <div className="bg-gray-100 px-64 p-8 text-black">
        <h4 className="font-extralight"><span className="cursor-pointer">Home</span>  &gt; <span className="cursor-pointer">Internships</span></h4>
        <FilterAndJobs/>
    </div>
)
}