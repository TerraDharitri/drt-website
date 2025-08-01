import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const solutions = [
  {
    title: "Why Farmers Need Support",
    stage: "",
    content:
      "Millions of smallholder farmers feed our world yet face rural poverty and poor harvests.\
       The problems are urgent: a $150 billion gap blocks credit access. Climate change makes farming harder. Buyers pay very little.\
         Without help, they can't afford sustainable agriculture methods.",
    image: "/images/graphics/homepage/farmer-support.svg",
    url: "/problemsAndVision#b2b",
  },
  {
    title: "Our Solutions for Farmers",
    stage: "",
    content:
      "That's exactly why we built Dharitri.\
   Dharitri uses scalable blockchain technology to support regenerative agriculture and sustainable finance for farmers.\
     Farmers get digital IDs and proven agricultural knowledge. They earn real rewards for adopting better sustainable farming practices. Our platform tracks their conservation agriculture work too.\
",
    image: "/images/graphics/homepage/farmer-solution.webp",
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
            className={`flex items-center -mx-20 2xl:-mx-10 xl:-mx-5 lg:block lg:mx-0 ${
              index === 0 ? "flex-row-reverse" : "flex-row"
            }`}
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
              <Link className="btn-primary pr-5 md:w-full" href={solution.url}>
                <span>Learn More</span>
                <Icon className="w-5 h-5" name="arrow-right" />
              </Link>
            </div>
            <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0">
              <Image
                className="w-full h-auto object-cover"
                src={solution.image}
                width={500}
                height={350}
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
