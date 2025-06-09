import Link from "next/link";
import Dividers from "@/components/Dividers";
import Image from "@/components/Image";
import Companies from "@/components/Companies";

import { companiesHero } from "@/mocks/companies";

type MainProps = {};

const Main = ({}: MainProps) => (
    <Dividers className="bg-secondary-300 text-greyscale-0" hero light>
        <div className="py-22 md:pt-12 md:pb-6">
            <div className="container">
                <div className="flex flex-col items-left justify-left text-left ml-20 mb-22 md:mb-6">
                    <div className="max-w-[40rem]">

                        <div className="mb-4 text-h1 xl:text-h1 md:text-h3">
                            Why Farmers Struggle & How We Plan to Help
                        </div>
                        <div className="mb-10 text-white/70 md:text-lg">
                            Understanding the barriers keeping farming families in poverty.
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    </Dividers>
);


export default Main;
