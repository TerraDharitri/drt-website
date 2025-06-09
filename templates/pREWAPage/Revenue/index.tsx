import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const items = [
    {
        title: "Platform & Service Systems",
        content:
            "Core blockchain development and testing.",
        icon: "/images/content/icons/wallet.svg",
    },
    {
        title: "Operations & Team Support",
        content:
            "Team support for development and launch.",
        icon: "/images/content/icons/coins-stacked.svg",
    },
    {
        title: "Ecosystem & Community Growth",
        content:
            " Community building and global outreach.",
        icon: "/images/content/icons/trophy.svg",
    },
    {
        title: "Building Strong Foundations",
        content:
            "Operational foundations and governance.",
        icon: "/images/content/icons/trophy.svg",
    },
    {
        title: "Kenya Learning & Partnerships",
        content:
            "Kenya agritech partnerships and learning.",
        icon: "/images/content/icons/trophy.svg",
    },
];

type RevenueProps = {};

const Revenue = ({}: RevenueProps) => (
    <div className="pt-30 pb-22 xl:pt-24 xl:pb-20 md:py-12">
        <div className="container">
            <div className="mb-15 text-center">
                    <h2 className="text-h2 xl:text-h3 md:text-h4 font-semibold mb-6">
                        Token Sale Proceeds Usage
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-greyscale-400 text-lg md:text-base">
                       Token sale funds are allocated strategically to build solutions that serve farmers. We focus blockchain project funding across five key areas.
                    </p>
                </div>
            <div className="grid gap-8 grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
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
            <div className="mb-3 text-h6">{item.title}</div>
            <div className="text-greyscale-400">{item.content}</div>
        </div>
    ))}
</div>

           
        </div>
    </div>
);

export default Revenue;
