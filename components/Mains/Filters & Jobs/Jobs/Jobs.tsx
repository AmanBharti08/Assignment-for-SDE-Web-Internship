import Cards from "./Cards";

type Props = {
    className?: string;
    jobs: any[];
};

export default function Jobs({
    className,
    jobs,
}: Props) {

    return (
        <div className={className}>

            {jobs.map((job: any) => (
                <Cards
                    key={job.id}
                    job={job}
                />
            ))}

        </div>
    );
}