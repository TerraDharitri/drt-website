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
                       
                        <div className="mb-4 text-h1 xl:text-h2 md:text-h3 text-center">
                           Project Resources: <br></br> Documentation & Support Hub
                        </div>
                        
                    </div>
                   
                </div>
            </div>
        </div>
    </Dividers>
);

export default Main;
