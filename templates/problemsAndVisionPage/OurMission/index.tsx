import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const items = [
  {
    title: "Farmer-Centricity",
    content:
      "We put farmer needs and progress at the heart of all our decisions.",
    icon: "/images/content/icons/heart-bold.svg",
  },
  {
    title: "Clear & Trusted",
    content:
      "Blockchain technology creates verifiable data and clear processes.",
    icon: "/images/content/icons/shield-check-bold.svg",
  },
  {
    title: "Sustainable Focus",
    content:
      "Promoting farming methods that help climate change and communities.",
    icon: "/images/content/icons/leaf-bold.svg",
  },
  {
    title: "Inclusive Systems",
    content: "Solutions accessible to all, especially women and youth farmers.",
    icon: "/images/content/icons/users-bold.svg",
  },
  {
    title: "Partnership Focus",
    content: "Building partnerships with NGOs, cooperatives, and institutions.",
    icon: "/images/content/icons/handshake-bold.svg",
  },
  {
    title: "Smart Innovation",
    content:
      "Using new technology for practical, real-world farming solutions.",
    icon: "/images/content/icons/cpu-bold.svg",
  },
];

type RevenueProps = {};

const OurMission = ({}: RevenueProps) => (
  <div className="pt-10 pb-22 xl:pt-20 xl:pb-20 md:py-12 bg-white dark:bg-dark-bg">
    <div className="container">
      <div className="mb-14 md:mb-10 pt-15">
        {/* Heading */}
        <div className="mb-15 text-left">
          <h2 className="text-h2 xl:text-h3 md:text-h4 font-semibold mb-6 dark:text-dark-text-primary">
            Our Mission & What We Value Most
          </h2>
          <h3 className="text-h4 xl:text-h5 md:text-h6 font-semibold dark:text-dark-text-primary">
            Mission Statement
          </h3>
          <p className="mt-4 max-w-3xl mx-0 text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base">
            Our mission: provide smallholder farmers with transparent,
            accessible blockchain systems. These support regenerative
            agriculture and enable sustainable finance. We put farmers first in
            all we design and build.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-3 gap-10 lg:grid-cols-1">
          {items.map((item, index) => (
            <div
              className="p-6 bg-greyscale-0 dark:bg-dark-card border border-greyscale-100 dark:border-dark-border shadow-2"
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

export default OurMission;
