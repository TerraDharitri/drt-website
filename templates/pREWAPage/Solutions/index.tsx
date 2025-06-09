import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const solutions = [
    {
        title: "pREWA Token Sale: Fund Farmers, Earn Staking Rewards",
        stage: "",
        content:
            ["Fund farmer solutions with pREWA. Earn immediate crypto staking rewards."],
        image: "/images/content/solutions-pic-1.png",
        url: "/problemsAndVision#b2b",
    },
    {
        title: "What is pREWA: Token Guide",
        stage: "",
        content: [
            "pREWA, a BSC BEP20 token, is central to Dharitri's fundraising and community building. It directly funds our platform development and farmer services launch.\
The token offers immediate crypto staking opportunities for rewards and ecosystem support. The token serves as an interim step, connecting early supporters to our future Proof-of-Stake platform."],
        image: "/images/content/solutions-pic-2.png",
        url: "/solutions#microfinance",
    },
];
const solutions2 = [
    {
        title: "pREWA: Platform Launch Fund",
        stage: "",
        content: [
            "Dharitri is actively building our core blockchain platform. With foundational work validated, our token sale provides vital resources.",
            "This funding helps us transition from development to launching initial services for smallholder farmers.",
            "This blockchain project funding enables three key steps:",
            "Finalizing core blockchain launch infrastructure",
            "Deploying our first suite of farmer services",
            "Establishing operational user onboarding systems",
            "Your participation supports Dharitri's development."],
        image: "/images/content/solutions-pic-2.png",
        url: "/solutions#blockchain",
    },
];

type SolutionsProps = {};

const Solutions = ({ }: SolutionsProps) => (
    <div className="section">
        <div className="container">

            <div className="space-y-20 xl:space-y-24 lg:space-y-20 md:space-y-12 pt-20">
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
                            <div className="mb-12 text-greyscale-400 md:mb-6 md:text-lg">
                                {solution.content}
                            </div>

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
            <div className="space-y-20 xl:space-y-24 lg:space-y-20 md:space-y-12 pt-20">
                {solutions2.map((solution, index) => (
                    <div
                        className="flex items-center -mx-20 even:flex-row-reverse 2xl:-mx-10 xl:-mx-5 lg:block lg:mx-0"
                        key={index}
                    >
                        <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0 lg:mb-10">
                            <div className="stage">{solution.stage}</div>
                            <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
                                {solution.title}
                            </div>
                            <div className="mb-12 text-greyscale-400 md:mb-6 md:text-lg">
                                <ul className="mb-12 list-disc list-inside text-greyscale-400 md:mb-6 md:text-lg space-y-2 list-none">
                                    {(() => {
                                        const items = [];
                                        for (let i = 0; i < solution.content.length; i++) {
                                            let emoji = ""; // default
                                            if (i >= 3) emoji = "✅";
                                            if (i === solution.content.length - 1) emoji = "";

                                            items.push(
                                                <li key={i}>
                                                    <span className="mr-2">{emoji}</span>
                                                    {solution.content[i]}
                                                </li>
                                            );
                                        }
                                        return items;
                                    })()}
                                </ul>
                            </div>
                            <Link
                                className="btn-primary pr-5 md:w-full"
                                href={solution.url}
                            >
                                <span>Learn More</span>
                                <Icon className="w-5 h-5" name="arrow-right" />
                            </Link>

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
