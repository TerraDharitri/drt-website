import Image from "@/components/Image";

const items = [
  {
    title: "Farmer-Centricity",
    content:
      "Smallholder farmers guide all our design choices and daily decisions.",
    icon: "images/content/icons/heart-bold.svg",
  },
  {
    title: "Transparency & Trust",
    content:
      "Technology creates verifiable data and trustworthy farmer processes.",
    icon: "images/content/icons/eye-bold.svg",
  },
  {
    title: "Sustainability",
    content:
      "Regenerative farming methods that heal ecosystems and address climate.",
    icon: "images/content/icons/leaf-bold.svg",
  },
  {
    title: "Inclusivity",
    content:
      "Accessible solutions for women, youth, and all farming communities.",
    icon: "images/content/icons/users-bold.svg",
  },
  {
    title: "Collaboration",
    content:
      "Building partnerships with NGOs, cooperatives, and agritech groups.",
    icon: "images/content/icons/link-simple-horizontal-bold.svg",
  },
  {
    title: "Innovation & Pragmatism",
    content:
      "Agritech solutions delivering real benefits for actual farmer challenges.",
    icon: "images/content/icons/lightning-bold.svg",
  },
];

type OurMissionProps = {};

const OurMission = ({}: OurMissionProps) => (
  <div className="pt-30 pb-22 xl:pt-24 xl:pb-20 md:py-12 bg-white dark:bg-dark-bg">
    <div className="container">
      <div className="mb-15 text-left">
        <h2 className="text-h2 xl:text-h3 md:text-h4 font-semibold mb-6 dark:text-dark-text-primary">
          Our Core Values & Principles
        </h2>
        <p className="mt-4 max-w-3xl mx-0 text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base">
          These core principles guide every aspect of Dharitri&#39;s work
        </p>
      </div>
      <div className="grid gap-8 grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
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
            <div className="mb-3 text-h6 dark:text-dark-text-primary">
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

export default OurMission;
