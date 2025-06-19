import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Dividers from "@/components/Dividers";

const solutions = [
  {
    title: "Technology Built for Farmers",
    stage: "",
    content:
      "Dharitri's approach is farmer-focused. Blockchain provides trust and transparency where needed, supported by effective off-chain processing. Our mobile apps are designed for easy access to a useful and sustainable ecosystem.",
    image: "/images/graphics/The Solution/The Solution/technology farmer.svg",
    url: "/solutions#microfinance",
  },
  // {
  //     title: "Blockchain Verifiable Trust",
  //     stage: "Blockchain Trust",
  //     content:
  //         "Use blockchain to build verifiable trust. Farmers earn digital IDs, get transparent records, and unlock access to fair markets and sustainable finance.",
  //     image: "/images/content/solutions-pic-3.png",
  //     url: "/solutions#blockchain",
  // },
];

type SolutionsProps = {};

const Solutions = ({}: SolutionsProps) => (
  <div>
    {/* Hero Section */}
    <Dividers className="bg-white text-greyscale-900" hero>
      <div className="py-22 md:pt-12 md:pb-6">
        <div className="container">
          <div className="flex items-center mb-22 lg:block md:mb-6">
            <div className="basis-[70%] grow pr-10 lg:pr-0">
              <div className="mb-4 text-h1 xl:text-h2 md:text-h3">
                How We Help
                Farmers Build
                Better Lives
              </div>
              <div className="mb-10 text-greyscale-600 md:text-lg">
                Three-phase development bringing blockchain benefits to farmers.
              </div>
            </div>
            <div className="basis-[30%] lg:mt-16 md:mt-8 flex justify-center">
              <Image
                className="w-full max-w-[400px] h-auto"
                src="/images/graphics/The Solution/The Solution/solution farmer.svg"
                width={400}
                height={400}
                alt="Hexagonal blockchain network structure"
              />
            </div>
          </div>
        </div>
      </div>
    </Dividers>

    {/* Technology Section */}
    <div className="section bg-white dark:bg-dark-bg">
      <div className="container">
        <div className="space-y-20 xl:space-y-24 lg:space-y-20 md:space-y-12">
          {solutions.map((solution, index) => (
            <div
              className="flex items-center -mx-20 2xl:-mx-10 xl:-mx-5 lg:block lg:mx-0"
              key={index}
            >
              <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0 lg:mb-10">
                <div className="stage">{solution.stage}</div>
                <div className="mb-4 text-h2 xl:text-h3 md:text-h4 dark:text-dark-text-primary">
                  {solution.title}
                </div>
                <div className="mb-12 text-greyscale-400 dark:text-dark-text-secondary md:mb-6 md:text-lg">
                  {solution.content}
                </div>
              </div>
              <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0 flex justify-center">
                <Image
                  className="w-full max-w-[400px] h-auto"
                  src={solution.image}
                  width={400}
                  height={300}
                  alt={solution.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Solutions;
