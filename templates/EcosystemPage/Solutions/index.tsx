import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const solutions = [
    {
        title: "Shared Ecosystem Value",
        stage: "",
        content: [
            "Farmers: Gain REWA rewards, service access, secure digital identity, and use verified farm records for new opportunities.",
            "Partners: Expand operational reach and access reliable agricultural information to improve financial inclusion programs for farming communities.",
            "Investors: Support impactful sustainable projects, earning staking rewards while funding vital agricultural solutions.",
            "Platform: Our system ensures deep trust and secure digital interactions using reliable blockchain verification methods."
        ],
        image: "images/content/solutions-pic-1.png",
        url: "/problemsAndVision#b2b",
    },
    {
        title: "Core Ecosystem Impacts",
        stage: "",
        content: [
            "Better Finance: Improves agricultural finance access and credit options for farmers through new insights.",
            "Fairer Markets: Creates improved market access for farmers and better value capture with supply chain transparency tools.",
            "Greener Farms: Advances climate resilient agriculture by supporting conservation farming practices adoption.",
            "Secure Land: Aims for greater land tenure security through community-validated digital land records for agricultural producers.",
            "Enhanced Knowledge: Supports better farm management decisions through shared information and verified learning resources."
        ],
        image: "images/content/solutions-pic-2.png",
        url: "/solutions#microfinance",
    },

];

type SolutionsProps = {};

const Solutions = ({ }: SolutionsProps) => (
    <div className="section">
        <div className="container">
            <div className="mb-30 xl:mb-24 lg:mb-18 md:mb-12">
                <div className="stage"></div>
                <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
                    Ecosystem Value for Everyone
                </div>
            </div>
            <div className="space-y-20 xl:space-y-24 lg:space-y-20 md:space-y-12">
                {solutions.map((solution, index) => (
                    <div
                        className="flex items-center -mx-20 even:flex-row-reverse 2xl:-mx-10 xl:-mx-5 lg:block lg:mx-0"
                        key={index}
                    >
                        <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0 lg:mb-10">
                            <div className="stage">{solution.stage}</div>
                            <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
                                {solution.title}
                            </div>
                            <ul className="mb-12 list-disc list-inside text-greyscale-400 md:mb-6 md:text-lg space-y-2">
                                {(() => {
                                    const items = [];
                                    for (let i = 0; i < solution.content.length; i++) {
                                        items.push(<li key={i}>{solution.content[i]}</li>);
                                    }
                                    return items;
                                })()}
                            </ul>


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
