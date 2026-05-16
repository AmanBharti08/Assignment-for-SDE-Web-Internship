import Extras from "./Extras/Extras";
import FAQ from "./FAQ/FAQ";
import FilterAndJobs from "./Filters & Jobs/Filter&Jobs";
import Review from "./Review/Review";


export default function Mains() {
return(
    <div className="bg-gray-100 text-black">
        <h4 className="font-extralight lg:px-30 md:px-20 sm:px-10 p-5"><span className="cursor-pointer">Home</span>  &gt; <span className="cursor-pointer">Internships</span></h4>
        <FilterAndJobs className="lg:px-30 md:px-20 sm:px-10 p-5 flex flex-col gap-10 mt-12"/>
        <FAQ className="lg:px-64 md:px-36 sm:px-10 p-5 flex flex-col gap-10 mt-12"/>
        <Review/>
        <Extras className="lg:px-30 md:px-20 sm:px-10 p-5 flex flex-col gap-10 mt-12"/>
    </div>
)
}