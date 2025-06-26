import Dividers from "@/components/Dividers";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const details = [
  {
    title: "Growing Farmers",
    content: "Secure IDs, knowledge access, fair markets, financial inclusion.",
    icon: "/images/content/icons/users-bold.svg",
  },
  {
    title: "Green Agriculture",
    content: "Sustainable practices, conservation methods, climate resilience.",
    icon: "/images/content/icons/leaf-bold.svg",
  },
  {
    title: "Smart Financing",
    content:
      "Agricultural microfinance, environmental rewards, transparent aid.",
    icon: "/images/content/icons/credit-card-bold.svg",
  },
  {
    title: "Blockchain Trust",
    content:
      " Blockchain verifiable data, immutable records, efficient systems.",
    icon: "/images/content/icons/shield-check-bold.svg",
  },
];

type DetailsProps = {};

const Details = ({}: DetailsProps) => (
  <Dividers className="pt-24 pb-28 bg-greyscale-25 dark:bg-dark-surface xl:pb-24 md:py-12">
    <div className="container">
      {/* Title Section */}
      <div className="mb-20 text-center xl:mb-16 lg:mb-12 md:mb-8">
        <div className="mb-4 text-h2 xl:text-h3 md:text-h4 dark:text-dark-text-primary">
          Main Farmer Support Areas
        </div>
      </div>

      {/* Support Areas Grid */}
      <div className="grid gap-8 grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
        {details.map((item, index) => (
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
            <div className="mb-3 text-left text-h6 dark:text-dark-text-primary">
              {item.title}
            </div>
            <div className=" text-left text-greyscale-400 dark:text-dark-text-secondary">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  </Dividers>
);

export default Details;
