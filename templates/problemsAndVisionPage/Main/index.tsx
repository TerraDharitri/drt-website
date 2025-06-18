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
        <div className="flex items-center mb-22 lg:block md:mb-6">
          <div className="basis-[70%] pr-10 lg:pr-0">
            <div className="mb-4 text-h1 xl:text-h2 md:text-h3">
              Why Farmers Struggle
              & How We Plan to 
              Help
            </div>
            <div className="mb-10 text-white/70 md:text-lg">
              Understanding the barriers keeping farming families in poverty.
            </div>
          </div>
          <div className="basis-[30%] flex justify-center lg:mt-16 md:mt-8">
            <Image
              className="w-full max-w-[400px] h-auto"
              src="/images/graphics/the problem/problem-farmer.webp"
              width={400}
              height={400}
              alt="Hands protecting a growing plant - supporting farmers"
            />
          </div>
        </div>
      </div>
    </div>
  </Dividers>
);

export default Main;
