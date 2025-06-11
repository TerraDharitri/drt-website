import Link from "next/link";
import Dividers from "@/components/Dividers";
import Icon from "@/components/Icon";
import Image from "@/components/Image";
import Companies from "@/components/Companies";

import { companiesHero } from "@/mocks/companies";

type MainProps = {};

const Main = ({}: MainProps) => (
    <Dividers className="bg-secondary-300 text-greyscale-0" hero light>
        <div className="py-22 md:pt-12 md:pb-6">
            <div className="container">
                <div className="flex items-center mb-22 lg:block md:mb-6">
                    <div className="grow pr-10 lg:pr-0">
                        {/* <div className="label mb-4 bg-white/[.04] border border-[#FFC091]/50 text-sm text-[#FFC091]">
                            🎉 Announcing Dharitri Beta 2.0
                            <Icon
                                className="w-4 h-4 ml-2 fill-[#FFC091]"
                                name="arrow-right"
                            />
                        </div> */}
                        <div className="mb-4 text-h1 xl:text-h2 md:text-h3">
                           The Complete Dharitri Ecosystem for Farmers
                        </div>
                        <div className="mb-10 text-white/70 md:text-lg">
                            Blockchain, tokens, and tools working together for farmer success.
                        </div>
                        
                    </div>
                    <div className="relative shrink-0 w-[49.48%] lg:w-full lg:mt-16 md:mt-8">
                        <Image
                            className="w-full border border-white/[.15] shadow-1"
                            src="pRewa_website/images/content/contact-pic.jpg"
                            width={574}
                            height={520}
                            alt=""
                        />

                    </div>
                </div>
            </div>
        </div>
    </Dividers>
);

export default Main;
