import Link from "next/link";
import Dividers from "@/components/Dividers";
import Image from "@/components/Image";
import Companies from "@/components/Companies";

import { companiesHero } from "@/mocks/companies";

type MainProps = {};


const Main = ({ }: MainProps) => (
    <Dividers className="bg-secondary-300 text-greyscale-0" hero light>
        <div className="py-22 md:pt-12 md:pb-6">
            <div className="container">
                <div className="flex items-center mb-22 lg:block md:mb-6">
                    <div className="grow pr-10 lg:pr-0">

                        <div className="mb-4 text-h1 xl:text-h2 md:text-h3">

                            Why Farmers Struggle & How We Plan to Help
                        </div>
                        <div className="mb-10 text-white/70 md:text-lg">
                            Understanding the barriers keeping farming families in poverty.
                        </div>
                        
                    </div>
                    <div className="relative shrink-0 w-[49.48%] lg:w-full lg:mt-16 md:mt-8">
                        <Image
                            className="w-full border border-white/[.15] shadow-1"
                            src="images/content/treeImg.png"
                            width={574}
                            height={520}
                            alt=""
                        />
                        {/* <div className="absolute top-[5%] -right-[24.5%] w-[80%] 2xl:top-[15%] 2xl:-right-[16%] 2xl:w-[70%] lg:top-[5%] lg:-right-[15%] lg:w-[80%]">
                            <Image
                                className="w-full"
                                src="images/"
                                width={459}
                                height={690}
                                alt=""
                            />
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    </Dividers>
);


export default Main;
