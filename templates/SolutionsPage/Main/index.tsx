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
          <div className="grow pr-10 xl:pr-6 lg:mb-12 lg:pr-0 md:mb-8">
            <div className="label bg-white/[0.08] text-greyscale-100 mb-4">
              Our Solutions
            </div>
            <div className="max-w-[30.625rem] mb-4 text-h1 xl:text-h2 lg:max-w-full md:text-h3">
              Technology Built for Farmers
            </div>
            <div className="mb-10 text-white/70 md:text-lg">
              We build farmer-focused technology using blockchain to create
              secure, transparent, and accessible solutions that empower
              agricultural communities worldwide.
            </div>
            <div className="flex space-x-4 lg:block md:space-x-0 md:space-y-4">
              <Link
                className="btn-primary min-w-[10.6rem] px-5 md:min-w-full"
                href="/sign-up"
              >
                Get Started
              </Link>
              <Link
                className="btn-secondary min-w-[10.6rem] px-5 md:min-w-full"
                href="/contact-us"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative shrink-0 w-[49.48%] xl:w-[52%] lg:w-full md:pr-5">
            <div className="flex justify-center items-center">
              <Image
                className="w-full max-w-[500px] h-auto"
                src="/images/graphics/The Solution/The Solution/solution farmer.svg"
                width={500}
                height={400}
                alt="Technology solutions for farmers"
              />
            </div>
          </div>
        </div>
        <Companies
          title="Trusted by farming communities worldwide"
          images={companiesHero}
          light
        />
      </div>
    </div>
  </Dividers>
);

export default Main;
