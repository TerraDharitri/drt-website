import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const items = [
    {
        title: "Dharitri Farmer ID",
        content:
            "Create secure digital identity for agriculture to easily access platform services and build trusted reputation.",
        icon: "images/content/icons/wallet.svg",
    },
    {
        title: "Dharitri Knowledge",
        content:
            "Access practical, local farming advice and helpful agricultural knowledge for better farm management decisions.",
        icon: "images/content/icons/coins-stacked.svg",
    },
    {
        title: "Dharitri Reward Hub",
        content:
            "Earn REWA tokens when completing sustainable farming activities and adopting improved agricultural practices.",
        icon: "images/content/icons/trophy.svg",
    },
    {
        title: "Dharitri Green Badge",
        content:
            "Get trusted digital recognition for adopting sustainable farming methods and environmental practices.",
        icon: "images/content/icons/trophy.svg",
    },
    {
        title: "Conservation Records",
        content:
            "Track clear, verified records of environmental care work and conservation efforts for future benefits.",
        icon: "images/content/icons/trophy.svg",
    },
];

const items2 = [
    {
        title: "Dharitri Farm Records",
        content:
            "Build trusted reputation by creating reliable digital logs of farm activities, enhancing farm data management.",
        icon: "images/content/icons/wallet.svg",
    },
    {
        title: "Sustainable Logger",
        content:
            "Document detailed sustainable practices, preparing for future benefits and carbon farming initiatives.",
        icon: "images/content/icons/coins-stacked.svg",
    },
    {
        title: "Dharitri Origin Track",
        content:
            "Provide simple, reliable information showing farm produce origins, supporting traceability in agriculture.",
        icon: "images/content/icons/trophy.svg",
    },
    {
        title: "Dharitri Marketplace",
        content:
            "Connect farmers directly with buyers, improving market access and creating new sales channels for producers.",
        icon: "images/content/icons/trophy.svg",
    },
    {
        title: "Farm Data for Loans",
        content:
            "Share farm records securely with full consent for agricultural microfinance and lender assessments.",
        icon: "images/content/icons/trophy.svg",
    },
];

const items3 = [
    {
        title: "Dharitri Land Records",
        content:
            "Facilitate community-validated digital land records, offering stronger tenure security for farmers.",
        icon: "images/content/icons/wallet.svg",
    },
    {
        title: "Dharitri Aid Platform",
        content:
            "Ensure efficient aid distribution using secure, blockchain-verified digital vouchers reaching farmers.",
        icon: "images/content/icons/coins-stacked.svg",
    },
    {
        title: "Dharitri Green Payments",
        content:
            "Enable organizations to send direct digital payments to farmers for verified green actions and conservation work.",
        icon: "images/content/icons/trophy.svg",
    },
    {
        title: "Dharitri Finance Access",
        content:
            "Connect farmers with broader environmental finance, like carbon credits, using blockchain-verified data.",
        icon: "images/content/icons/trophy.svg",
    },
   
];
type BuildSolutionsProps = {};

const BuildSolutions = ({ }: BuildSolutionsProps) => (
    <div className="pt-30 pb-22 xl:pt-24 xl:pb-20 md:py-12">
        <div className="container">
            <div className="flex items-center -mx-20 mb-14 xl:-mx-10 lg:flex-col-reverse lg:items-stretch lg:mx-0 md:mb-8 pt-20 pb-20">
                {/* TEXT block moved to the left */}
                <div className="w-[calc(50%-5rem)] mx-20 xl:w-[calc(50%-2.5rem)] xl:mx-10 lg:w-full lg:mx-0 lg:mb-10 md:mb-8">
                    <div className="stage"></div>
                    <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
                        Building Solutions in Steps
                    </div>
                    <div className="mb-4 text-h4 xl:text-h5 md:text-h6">
                        Why We Build This Way
                    </div>
                    <div className="mb-12 text-greyscale-400 lg:mb-8 md:mb-6">
                        Our solutions are built methodically, step by step. This lets us adapt from real-world feedback and introduce useful services progressively.
                        We earn trust with measurable outcomes and build partnerships responsibly. Each step improves the Dharitri system for the long term.

                    </div>
                    <Link
                        className="btn-primary pr-5.5 md:w-full"
                        href="/pricing"
                    >
                        <span>Learn More</span>
                        <Icon className="w-5 h-5" name="arrow-right" />
                    </Link>
                </div>

                {/* IMAGE block now to the right */}
                <div className="w-[calc(50%-5rem)] mx-20 bg-greyscale-25 border border-greyscale-100 xl:w-[calc(50%-2.5rem)] xl:mx-10 lg:w-full lg:mx-0">
                    <Image
                        className="w-full"
                        src="images/content/revenue-pic.png"
                        width={500}
                        height={450}
                        alt=""
                    />
                </div>
            </div>
            <div className="mb-15 text-center">
                <h2 className="text-h2 xl:text-h3 md:text-h4 font-semibold mb-4">
                    Phase One: Launch Tools
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-greyscale-400 text-lg md:text-base">
                    We begin by offering these core tools to build a strong start:
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
            <div className="mb-15 text-center pt-20">
                <h2 className="text-h2 xl:text-h3 md:text-h4 font-semibold mb-4">
                    Phase Two: More Features
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-greyscale-400 text-lg md:text-base">
                    As our ecosystem develops, we focus on these farmer-centered opportunities:
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
            <div className="mb-15 text-center pt-20">
                <h2 className="text-h2 xl:text-h3 md:text-h4 font-semibold mb-4">
                    Phase Three: Full Vision
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-greyscale-400 text-lg md:text-base">
                    Looking further ahead, Dharitri aims to deliver these systemic impacts for lasting agricultural transformation:
                </p>
            </div>
            <div className="grid grid-cols-3 gap-8 lg:grid-cols-2 md:grid-cols-1">
                {items3.map((item, index) => (
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

export default BuildSolutions;
