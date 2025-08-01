import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const items = [
  {
    title: "Financial Access Issues",
    content:
      "Small farmers worldwide lack funds due to a $150 billion financing gap. Banks charge high fees for small loans, and most farmers lack land titles or collateral. Lenders see agricultural finance as risky because credit for farmers is hard to assess without formal records. Women deal with greater barriers, limiting financial inclusion in agriculture.",
    icon: "/images/content/icons/currency-dollar-bold.svg",
  },
  {
    title: "Market Connection Problems",
    content:
      "Selling crops is a major challenge that limits market access for farmers. Buyers have strict standards that are hard to meet, and cheap imports drive down local prices. High transport costs eat into profits, while individual farmers have little power to negotiate better deals. Poor storage and lack of cold transport cause them to lose crops and money.",
    icon: "/images/content/icons/trend-down-bold.svg",
  },
  {
    title: "Climate Change Threats",
    content:
      "Agricultural producers face many threats like pests and water shortages. Livestock losses also hurt farms. Climate change worsens this with droughts, floods, and erratic weather. These mounting problems create income uncertainty and food shortages, making climate resilient agriculture essential for survival.",
    icon: "/images/content/icons/cloud-lightning-bold.svg",
  },
  {
    title: "Infrastructure Gaps",
    content:
      "Farmers often lack business skills and access to agricultural knowledge about available resources. Poor roads, storage, and irrigation make farming much harder than necessary. Bad internet and limited technology access create a digital divide, while unclear policies and weak support systems add more barriers.",
    icon: "/images/content/icons/wifi-slash-bold.svg",
  },
];

type RevenueProps = {};

const Revenue = ({}: RevenueProps) => (
  <div className="pt-30 pb-22 xl:pt-24 xl:pb-20 md:py-12 bg-white dark:bg-dark-bg">
    <div className="container">
      <div className="flex items-center -mx-20 mb-14 xl:-mx-10 lg:flex-col lg:items-stretch lg:mx-0 md:mb-8">
        {/* TEXT block on the left */}
        <div className="w-[calc(50%-5rem)] mx-20 xl:w-[calc(50%-2.5rem)] xl:mx-10 lg:w-full lg:mx-0 lg:mb-10 md:mb-8">
          <div className="stage"></div>
          <div className="mb-4 text-h2 xl:text-h3 md:text-h4 dark:text-dark-text-primary">
            Why Small Farmers
            <br />
            Are Essential
          </div>
          <div className="mb-12 text-greyscale-400 dark:text-dark-text-secondary lg:mb-8 md:mb-6">
            There are over 475M smallholder farmers who own less than 2 hectares
            but feed much of the world. They're the backbone of our food system.
          </div>
        </div>

        {/* IMAGE block on the right */}
        <div className="w-[calc(50%-5rem)] mx-20 xl:w-[calc(50%-2.5rem)] xl:mx-10 lg:w-full lg:mx-0 flex justify-center">
          <Image
            className="w-full max-w-[400px] h-auto"
            src="/images/graphics/the problem/farmer-essential.svg"
            width={400}
            height={300}
            alt="Farmer with animals silhouette on globe background"
          />
        </div>
      </div>

      <div className="mb-14 md:mb-10 pt-20">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-h2 xl:text-h3 md:text-h4 font-semibold dark:text-dark-text-primary">
            The Core Obstacles Farmers Face
          </h2>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-1">
          {items.map((item, index) => (
            <div
              className="p-6 bg-greyscale-0 dark:bg-dark-card border border-greyscale-100 dark:border-dark-border shadow-2 rounded-lg"
              key={index}
            >
              <div className="flex justify-center items-center w-12 h-12 mb-6 rounded-full bg-[#9FE870]">
                <Image
                  src={item.icon}
                  className="w-6"
                  width={24}
                  height={24}
                  alt=""
                />
              </div>
              <div className="mb-3 text-h6 font-semibold dark:text-dark-text-primary">
                {item.title}
              </div>
              <div className="text-greyscale-400 dark:text-dark-text-secondary">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Revenue;
