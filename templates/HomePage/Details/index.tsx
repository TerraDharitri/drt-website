import Dividers from "@/components/Dividers";
import Image from "@/components/Image";

const details = [
    {
        title: "Growing Farmers",
        content:
            "Secure IDs, knowledge access, fair markets, financial inclusion.",
        image: "/images/content/details-pic-1.jpg",
    },
    {
        title: "Green Agriculture",
        content:
            "Sustainable practices, conservation methods, climate resilience.",
        image: "/images/content/details-pic-2.jpg",
    },
    {
        title: "Smart Financing",
        content:
            "Agricultural microfinance, environmental rewards, transparent aid.",
        image: "/images/content/details-pic-3.jpg",
    },
    {
        title: "Blockchain Trust",
        content:
            " Blockchain verifiable data, immutable records, efficient systems.",
        image: "/images/content/details-pic-3.jpg",
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
            <div className="flex space-x-8 lg:block lg:space-x-0 lg:space-y-10 md:space-y-6">
                {details.map((item, index) => (
                    <div className="flex-1" key={index}>
                        <div className="mb-8 p-2 bg-greyscale-0 border border-greyscale-100 shadow-2 lg:mb-6">
                            <div className="border border-primary-50">
                                <Image
                                    className="w-full"
                                    src={item.image}
                                    width={345}
                                    height={230}
                                    alt={item.title}
                                />
                            </div>
                        </div>
                        <div className="mb-3 text-h5 xl:text-h6 lg:text-h5 md:text-h6">
                            {item.title}
                        </div>
                        <div className="text-greyscale-400">{item.content}</div>
                    </div>
                ))}
            </div>
        </div>
    </Dividers>
);

export default Details;
