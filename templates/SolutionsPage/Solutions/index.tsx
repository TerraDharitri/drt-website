import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const solutions = [
    {
        title: "How We Help Farmers Build Better Lives",
        stage: "",
        content:
            "Three-phase development bringing blockchain benefits to farmers.",
        image: "images/content/solutions-pic-1.png",
        url: "/problemsAndVision#b2b",
    },
    {
        title: "Technology Built for Farmers",
        stage: "",
        content:
            "Dharitri's approach is farmer-focused. Blockchain provides trust and transparency where needed, supported by effective off-chain processing. Our mobile apps are designed for easy access to a useful and sustainable ecosystem.",
        image: "images/content/solutions-pic-2.png",
        url: "/solutions#microfinance",
    },
    // {
    //     title: "Blockchain Verifiable Trust",
    //     stage: "Blockchain Trust",
    //     content:
    //         "Use blockchain to build verifiable trust. Farmers earn digital IDs, get transparent records, and unlock access to fair markets and sustainable finance.",
    //     image: "images/content/solutions-pic-3.png",
    //     url: "/solutions#blockchain",
    // },
];

type SolutionsProps = {};

const Solutions = ({}: SolutionsProps) => (
    <div className="section">
        <div className="container">

            <div className="space-y-20 xl:space-y-24 lg:space-y-20 md:space-y-12 pt-20">
                {solutions.map((solution, index) => (
                    <div
                        className="flex items-center -mx-20 odd:flex-row-reverse 2xl:-mx-10 xl:-mx-5 lg:block lg:mx-0"
                        key={index}
                    >
                        <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0 lg:mb-10">
                            <div className="stage">{solution.stage}</div>
                            <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
                                {solution.title}
                            </div>
                            <div className="mb-12 text-greyscale-400 md:mb-6 md:text-lg">
                                {solution.content}
                            </div>
                            {/* <Link
                                className="btn-primary pr-5 md:w-full"
                                href={solution.url}
                            >
                                <span>Learn More</span>
                                <Icon className="w-5 h-5" name="arrow-right" />
                            </Link> */}
                        </div>
                        <div className="w-[calc(50%-5rem)] mx-20 bg-greyscale-25 border border-greyscale-100 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0">
                            <Image
                                className="w-full"
                                src={solution.image}
                                width={500}
                                height={450}
                                alt=""
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Solutions;
