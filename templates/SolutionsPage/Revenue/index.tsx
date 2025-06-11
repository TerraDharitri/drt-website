import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const items = [
    {
        title: "Scalability",
        content:
            "Grows with community via blockchain sharding.",
        icon: "images/content/icons/wallet.svg",
    },
    {
        title: "Efficiency",
        content:
            "Fast, low fee blockchain transactions.",
        icon: "images/content/icons/coins-stacked.svg",
    },
    {
        title: "Flexibility",
        content:
            "Supports WASM & Rust for agricultural tools.",
        icon: "images/content/icons/trophy.svg",
    },
    {
        title: "Sustainable",
        content:
            "Proof-of-Stake design is energy efficient.",
        icon: "images/content/icons/trophy.svg",
    },
];

type RevenueProps = {};

const Revenue = ({}: RevenueProps) => (
    <div className="pt-30 pb-22 xl:pt-24 xl:pb-20 md:py-12">
        <div className="container">
            <div className="mb-15 text-center">
                    <h2 className="text-h2 xl:text-h3 md:text-h4 font-semibold mb-6">
                        Why We Choose This Blockchain
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-greyscale-400 text-lg md:text-base">
                        Dharitri uses a fork of the MultiversX blockchain, a strategic choice for its powerful features:
                    </p>
                </div>
            <div className="flex space-x-8 lg:block lg:space-x-0 lg:space-y-8 md:space-y-6">
                {items.map((item, index) => (
                    <div
                        className="flex-1 p-6 bg-greyscale-0 border border-greyscale-100 shadow-2"
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
