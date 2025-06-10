import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const solutions = [
    {
        title: "Join Dharitri's Mission: Create Real Impact for Farmers",
        stage: "",
        content: "",
        image: "/images/content/solutions-pic-1.png",
        url: "/problemsAndVision#b2b",
    },
    {
        title: "Join Our Farmer-Focused Mission",
        stage: "",
        content: [
            "Dharitri builds blockchain solutions that directly help smallholder farmers succeed. We believe in working together to create real change.",
            "Three key ways to contribute exist. Investors can fund our mission, partners can collaborate on solutions, and community members can spread our regenerative farming message.",
            "Join us in building tools that make farming communities stronger worldwide.",
        ],
        image: "/images/content/solutions-pic-2.png",
        url: "/solutions#microfinance",
    },
    {
        title: "For Investors: Support Our Vision",
        stage: "",
        content: [
            "Ready to invest in digital solutions for smallholder farmers? Our pREWA token sale funds platform development and farmer services launch.",
            "We welcome investors of all sizes who want to create real change. Your investment directly supports agricultural innovation technology and financial inclusion for farming communities.",
            "Learn more through our project documentation or connect directly with our team.",
        ],
        image: "/images/content/solutions-pic-1.png",
        url: "/solutions#investors",
    },
    {
        title: "For Partners: Collaborate & Impact",
        stage: "",
        content: [
            "Dharitri seeks partners committed to smallholder farmers and sustainable agriculture. Together, we can build technology solutions that create lasting change.",
            "We welcome NGOs, financial institutions, and technology organizations. Each partnership strengthens our agritech platform while expanding your impact with farming communities.",
            "Ready to explore collaboration? Share your organization's goals and discover partnership opportunities.",
        ],
        image: "/images/content/solutions-pic-2.png",
        url: "/solutions#partners",
    },
    {
        title: "For Community: Join the Movement",
        stage: "",
        content: [
            "Connect with supporters passionate about sustainable agriculture and digital innovation for farmers. Join advocates building real change.",
            "Follow us on Telegram, Discord, and X for project updates and discussions.",
            "For general questions, feedback, or if you're unsure where to start, reach out directly.",
        ],
        image: "/images/content/solutions-pic-1.png",
        url: "/solutions#community",
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
                            <ul className="mb-12 list-disc list-inside text-greyscale-400 md:mb-6 md:text-lg space-y-2">
                                {(() => {
                                    const items = [];
                                    for (let i = 0; i < solution.content.length; i++) {
                                        items.push(<p className="pb-4" key={i}>{solution.content[i]}</p>);
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
