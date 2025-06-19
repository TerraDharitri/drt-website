import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const items = [
  {
    title: "Scalability",
    content: "Grows with community via blockchain sharding.",
    icon: "/images/content/icons/trend-up-bold.svg",
  },
  {
    title: "Efficiency",
    content: "Fast, low fee blockchain transactions.",
    icon: "/images/content/icons/lightning-bold.svg",
  },
  {
    title: "Flexibility",
    content: "Supports WASM & Rust for agricultural tools.",
    icon: "/images/content/icons/gear-bold.svg",
  },
  {
    title: "Sustainable",
    content: "Proof-of-Stake design is energy efficient.",
    icon: "/images/content/icons/leaf-bold.svg",
  },
];

type RevenueProps = {};

const Revenue = ({}: RevenueProps) => (
  <div className="pt-30 pb-22 xl:pt-24 xl:pb-20 md:py-12 bg-greyscale-25 dark:bg-dark-surface">
    <div className="container">
      <div className="mb-15 text-center">
        <h2 className="text-h2 xl:text-h3 md:text-h4 font-semibold mb-6 dark:text-dark-text-primary">
          Why We Choose This Blockchain
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base">
          Dharitri uses a fork of the MultiversX blockchain, a strategic choice
          for its powerful features:
        </p>
      </div>
      <div className="grid grid-cols-4 gap-8 lg:grid-cols-2 md:grid-cols-1">
        {items.map((item, index) => (
          <div
            className="p-6 bg-greyscale-0 dark:bg-dark-card border border-greyscale-100 dark:border-dark-border shadow-2 rounded-lg text-center"
            key={index}
          >
            <div className="flex justify-center items-center w-12 h-12 mb-6  rounded-full bg-[#9FE870]">
              <Image
                src={item.icon}
                className="w-6"
                width={24}
                height={24}
                alt=""
              />
            </div>
            <div className="mb-3 text-h6 font-semibold text-start dark:text-dark-text-primary">
              {item.title}
            </div>
            <div className="text-greyscale-400 text-start dark:text-dark-text-secondary">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Revenue;
