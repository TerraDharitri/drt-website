import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const items = [
  {
    title: "Platform Development",
    content: "Core blockchain creation and system tests.",
    icon: "/images/content/icons/cpu-bold.svg",
  },
  {
    title: "Team Operations",
    content: "Support for project management and launch.",
    icon: "/images/content/icons/users-bold.svg",
  },
  {
    title: "Ecosystem Growth",
    content: "Building our community and global presence.",
    icon: "/images/content/icons/trend-up-bold.svg",
  },
  {
    title: "Solid Foundations",
    content: "Ensuring strong operations and good guidance.",
    icon: "/images/content/icons/stack-bold.svg",
  },
  {
    title: "Kenya Initiative",
    content: "Gaining insights through agritech work in Kenya.",
    icon: "/images/content/icons/globe-hemisphere-east-bold.svg",
  },
];

const TokenSaleProceeds = () => (
  <div className="section bg-white dark:bg-dark-bg">
    <div className="container">
      <div className="mb-12">
        <h2 className="text-h2 xl:text-h3 md:text-h4 font-semibold mb-4 dark:text-dark-text-primary">
          Token Sale Proceeds Usage
        </h2>
        <p className="text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base">
          Token sale funds are allocated strategically to build solutions that
          serve farmers. We focus blockchain project funding across five key
          areas.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8 lg:grid-cols-2 md:grid-cols-1">
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
);

export default TokenSaleProceeds;
