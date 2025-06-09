import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Link from "next/link";

const items = [
    {
        title: "Dharitri Blockchain",
        content:
            "Our secure, scalable Proof-of-Stake foundation enabling farmer identities and REWA tokens.",
        icon: "/images/content/icons/wallet.svg",
    },
    {
        title: "Blockchain Explorer",
        content:
            "Public web tool providing transparent visibility into blockchain transactions and activity.",
        icon: "/images/content/icons/coins-stacked.svg",
    },
    {
        title: "Dharitri Wallet App",
        content:
            "ntegrated mobile wallet for agricultural producers to securely manage REWA tokens and digital assets.",
        icon: "/images/content/icons/trophy.svg",
    },
    {
        title: "Backend API System",
        content:
            "Central engine connecting platform applications and managing essential farm information flows.",
        icon: "/images/content/icons/trophy.svg",
    },
    {
        title: "Mobile Applications",
        content:
            "Intuitive Farmer and Agent apps for easy interactions and farm record management tools.",
        icon: "/images/content/icons/trophy.svg",
    },
    {
        title: "Web Access Portals",
        content:
            "Secure interfaces for MFI partners, NGOs, system administration, and marketplace buyers.",
        icon: "/images/content/icons/trophy.svg",
    },
    {
        title: "Smart Contract Core",
        content:
            "Rust smart contracts built for advanced automation and agricultural platform capabilities.",
        icon: "/images/content/icons/trophy.svg",
    },
    {
        title: "Dharitri DEX Platform",
        content:
            "Native decentralized exchange providing important liquidity for our ecosystem tokens.",
        icon: "/images/content/icons/trophy.svg",
    },

];
const items2 = [
    {
        title: "REWA Network",
        content:
            "REWA will be the native token powering our Proof-of-Stake blockchain. Its main roles: secure the network via staking and cover transaction fees. REWA also rewards agricultural producers for engagement.",
        icon: "/images/content/icons/wallet.svg",
    },
    {
        title: "COME Currency",
        content:
            "Our future vision includes the COME stablecoin, planned as a reliable store of value. It will be pegged to gold and a currency basket. This provides stable value for aid and environmental payments.",
        icon: "/images/content/icons/coins-stacked.svg",
    },

];

type ConnectedFarmersProps = {};

const ConnectedFarmerPlatform = ({ }: ConnectedFarmersProps) => (
    <div className="pt-30 pb-22 xl:pt-24 xl:pb-20 md:py-12">
        <div className="container">
            <div className="flex items-center -mx-20 mb-14 xl:-mx-10 lg:flex-col-reverse lg:items-stretch lg:mx-0 md:mb-8">
                {/* TEXT block moved to the left */}
                <div className="w-[calc(50%-5rem)] mx-20 xl:w-[calc(50%-2.5rem)] xl:mx-10 lg:w-full lg:mx-0 lg:mb-10 md:mb-8">
                    <div className="stage"></div>
                    <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
                        Our Connected Farmer Platform
                    </div>
                    <div className="mb-12 text-greyscale-400 lg:mb-8 md:mb-6">
                        Dharitri: A connected blockchain platform for smallholder farmers, sustainable agriculture, and fair finance. Digital IDs assist financial access, verified information ensures trust, and clear records support green actions.
                        The system creates value for farmers, partners, and investors. These capabilities are enabled by our comprehensive technology infrastructure.

                    </div>

                </div>

                {/* IMAGE block now to the right */}
                <div className="w-[calc(50%-5rem)] mx-20 bg-greyscale-25 border border-greyscale-100 xl:w-[calc(50%-2.5rem)] xl:mx-10 lg:w-full lg:mx-0">
                    <Image
                        className="w-full"
                        src="/images/content/revenue-pic.png"
                        width={500}
                        height={450}
                        alt=""
                    />
                </div>
            </div>

            <div className="mb-14 md:mb-10 pt-20">
                <div className="mb-15 text-center pt-20">
                    <h2 className="text-h2 xl:text-h3 md:text-h4 font-semibold mb-4">
                        Technology & Infrastructure
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-greyscale-400 text-lg md:text-base">
                        Dharitri`s ecosystem: Secure, usable core components designed for growth. Our mobile-first approach balances on-chain and off-chain efficiency.
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-8 lg:grid-cols-2 md:grid-cols-1">
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
            <div className="mb-14 md:mb-10 pt-20">
                <div className="mb-15 text-left pt-20">
                    <h2 className="text-h2 xl:text-h3 md:text-h4 font-semibold mb-4">
                        Three Tokens Working Together
                    </h2>
                    <h4 className="text-h4 xl:text-h5 md:text-h6 font-semibold mb-4">
                        pREWA Funding
                    </h4>
                    <p className="mt-4 max-w-3xl mx-0 text-greyscale-400 text-lg md:text-base">
                        pREWA supports our initial growth by providing project funding for system development and launch of farmer services. Holders benefit from immediate staking rewards from day one.
                    </p>
                    
                    <Link
        className="btn-primary inline-flex items-center mt-6 px-6 py-3 pr-5 md:w-full"
                        href="/problemsAndVision#b2b"
                    >
                        <span>Learn More</span>
                        <Icon className="w-5 h-5" name="arrow-right" />
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 lg:grid-cols-2 md:grid-cols-1">
                    {items2.map((item, index) => (
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
    </div>
);

export default ConnectedFarmerPlatform;
