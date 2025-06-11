import Dividers from "@/components/Dividers";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
const details = [
    {
        title: "Growing Farmers",
        content:
            "Secure IDs, knowledge access, fair markets, financial inclusion.",
        icon: "images/content/icons/wallet.svg",
    },
    {
        title: "Green Agriculture",
        content:
            "Sustainable practices, conservation methods, climate resilience.",
        icon: "images/content/icons/coins-stacked.svg",
    },
    {
        title: "Smart Financing",
        content:
            "Agricultural microfinance, environmental rewards, transparent aid.",
        icon: "images/content/icons/trophy.svg",
    },
    {
        title: "Blockchain Trust",
        content:
            " Blockchain verifiable data, immutable records, efficient systems.",
        icon: "images/content/icons/trophy.svg",
    },
];

type DetailsProps = {};

const Details = ({}: DetailsProps) => (
    <Dividers className="pt-24 pb-28 bg-greyscale-25 xl:pb-24 md:py-12">
        <div className="container">
            <div className="mb-18 lg:mb-14 md:mb-10">
                <div className="stage"></div>
                <div className="mb-4 text-h3 md:text-h4 text-center">
                    Main Farmer Support Areas 
                </div>

            </div>
             <div className="grid gap-8 grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                    {details.map((item, index) => (
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
    </Dividers>
);

export default Details;
