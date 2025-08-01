import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const solutions = [
  {
    title: "The Impact on People & Planet",
    stage: "",
    content:
      "When farming becomes difficult, families work hard but still experience low yields, poor income, and food insecurity. This limits their potential and slows economic growth in communities. Without sustainable agriculture methods, our environment suffers. Solutions are vital for stronger economies, communities, and a healthier planet.",
    image: "/images/graphics/the problem/impact-planet.svg",
    url: "/problemsAndVision#b2b",
  },
  {
    title: "Our Goal: Better Farmers & Earth",
    stage: "",
    content:
      "Our goal is clear: small farmers achieving economic stability and climate strength while restoring a healthier Earth. We build this with transparent regenerative agriculture and accessible technology. This farming change for sustainability and fairness is essential worldwide.",
    image: "/images/graphics/the problem/our-goal.svg",
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
  <div className="section bg-white dark:bg-dark-bg">
    <div className="container">
      {/* <div className="mb-30 xl:mb-24 lg:mb-18 md:mb-12">
                <div className="stage">Solutions</div>
                <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
                    Supporting Farmers through Decentralized Finance
                </div>
                <div className="max-w-[48rem] text-greyscale-400 md:text-lg">
                    Dharitri's mission is to empower smallholder farmers with the tools, rewards, and financial access they need to succeed sustainably. Our blockchain-powered solutions bridge the gap between agriculture, microfinance, and climate action.
                </div>
            </div> */}
      <div className="space-y-30 xl:space-y-24 lg:space-y-20 md:space-y-12">
        {solutions.map((solution, index) => (
          <div
            className="flex items-center -mx-20 odd:flex-row-reverse 2xl:-mx-10 xl:-mx-5 lg:block lg:mx-0"
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
);

export default Solutions;
