import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const items = [
    {
        title: "Farmer-Centricity",
        content:
            "We put farmer needs and progress at the heart of all our decisions.",
        icon: "images/content/icons/wallet.svg",
    },
    {
        title: "Clear & Trusted",
        content:
            "Blockchain technology creates verifiable data and clear processes.",
        icon: "images/content/icons/coins-stacked.svg",
    },
    {
        title: "Sustainable Focus",
        content:
            "Promoting farming methods that help climate change and communities.",
        icon: "images/content/icons/trophy.svg",
    },
    {
        title: "Inclusive Systems",
        content:
            "Solutions accessible to all, especially women and youth farmers.",
        icon: "images/content/icons/trophy.svg",
    },
    {
        title: "Partnership Focus",
        content:
            "Building partnerships with NGOs, cooperatives, and institutions.",
        icon: "images/content/icons/trophy.svg",
    },
    {
        title: "Smart Innovation",
        content:
            "Using new technology for practical, real-world farming solutions.",
        icon: "images/content/icons/trophy.svg",
    },
];

type RevenueProps = {};

const OurMission = ({ }: RevenueProps) => (
    <div className="pt-10 pb-22 xl:pt-20 xl:pb-20 md:py-12">
        <div className="container">

            <div className="mb-14 md:mb-10 pt-15">
                {/* Heading */}
                <div className="mb-15 text-left">
                    <h2 className="text-h2 xl:text-h3 md:text-h4 font-semibold mb-6">
                        Our Mission & What We Value Most
                    </h2>
                    <h3 className="text-h4 xl:text-h5 md:text-h6 font-semibold">
                        Mission Statement
                    </h3>
                    <p className="mt-4 max-w-3xl mx-0 text-greyscale-400 text-lg md:text-base">
                        Our mission: provide smallholder farmers with transparent, accessible blockchain systems.
                        These support regenerative agriculture and enable sustainable finance.
                        We put farmers first in all we design and build.
                    </p>
                </div>


                {/* 2x2 Grid Layout */}
                <div className="grid grid-cols-3 gap-10 lg:grid-cols-1">
                    {items.map((item, index) => (
                        <div
                            className="p-6 bg-greyscale-0 border border-greyscale-100 shadow-2"
                            key={index}
                        >
                            <div className="flex justify-center items-center w-12 h-12 mb-6 rounded-full bg-secondary-0">
                                <Image
                                    src={item.icon}
                                    className="w-6"
                                    width={24}
                                    height={24}
                                    alt=""
                                />
                            </div>
                            <div className="mb-3 text-h6 font-semibold">{item.title}</div>
                            <div className="text-greyscale-400">{item.content}</div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </div>
);

export default OurMission;
