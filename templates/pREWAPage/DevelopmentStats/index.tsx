import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

type DevelopmentStatsProps = {};

const DevelopmentStats = ({ }: DevelopmentStatsProps) => (
    <div className="pt-30 pb-22 xl:pt-24 xl:pb-20 md:py-12">
        <div className="container">
            <div className="flex items-center -mx-20 mb-14 xl:-mx-10 lg:flex-col-reverse lg:items-stretch lg:mx-0 md:mb-8 pt-20 pb-20">
                <div className="w-[calc(50%-5rem)] mx-20 bg-greyscale-25 border border-greyscale-100 xl:w-[calc(50%-2.5rem)] xl:mx-10 lg:w-full lg:mx-0">
                    <Image
                        className="w-full"
                        src="images/content/revenue-pic.png"
                        width={500}
                        height={450}
                        alt=""
                    />
                </div>
                <div className="w-[calc(50%-5rem)] mx-20 xl:w-[calc(50%-2.5rem)] xl:mx-10 lg:w-full lg:mx-0 lg:mb-10 md:mb-8">
                    <div className="stage"></div>
                    <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
                        Our Current Development Status
                    </div>

                    <div className="mb-12 text-greyscale-400 lg:mb-8 md:mb-6">
                        Our platform development phase is actively underway. The team is constructing key network infrastructure and readying our initial services for launch, with our core approach already validated.
                        We prioritize thorough testing and security. Supporting this ongoing work through the pREWA token sale will help bring these first offerings to smallholder farmers.

                    </div>
                    <Link
                        className="btn-primary pr-5.5 md:w-full"
                        href="/pricing"
                    >
                        <span>Learn More</span>
                        <Icon className="w-5 h-5" name="arrow-right" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default DevelopmentStats;
