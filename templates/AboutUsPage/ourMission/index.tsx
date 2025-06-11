import Image from "@/components/Image";

const items = [
    {
        title: "Farmer-Centricity",
        content:
            "Smallholder farmers guide all our design choices and daily decisions.",
        icon: "pRewa_website/images/content/icons/wallet.svg",
    },
    {
        title: "Transparency & Trust",
        content:
            "Technology creates verifiable data and trustworthy farmer processes.",
        icon: "pRewa_website/images/content/icons/coins-stacked.svg",
    },
    {
        title: "Sustainability",
        content:
            "Regenerative farming methods that heal ecosystems and address climate.",
        icon: "pRewa_website/images/content/icons/trophy.svg",
    },
    {
        title: "Inclusivity",
        content:
            "Accessible solutions for women, youth, and all farming communities.",
        icon: "pRewa_website/images/content/icons/trophy.svg",
    },
    {
        title: "Collaboration",
        content:
            "Building partnerships with NGOs, cooperatives, and agritech groups.",
        icon: "pRewa_website/images/content/icons/trophy.svg",
    },
    {
        title: "Innovation & Pragmatism",
        content:
            "Agritech solutions delivering real benefits for actual farmer challenges.",
        icon: "pRewa_website/images/content/icons/trophy.svg",
    },
];

type OurMissionProps = {};

const OurMission = ({}: OurMissionProps) => (
    <div className="pt-30 pb-22 xl:pt-24 xl:pb-20 md:py-12">
        <div className="container">
            <div className="mb-15 text-left">
                    <h2 className="text-h2 xl:text-h3 md:text-h4 font-semibold mb-6">
                        Our Core Values & Principles
                    </h2>
                    <p className="mt-4 max-w-3xl mx-0 text-greyscale-400 text-lg md:text-base">
                       These core principles guide every aspect of Dharitri&#39;s work
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

export default OurMission;
