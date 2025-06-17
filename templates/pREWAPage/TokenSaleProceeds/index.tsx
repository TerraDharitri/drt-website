import Image from "@/components/Image";

const topRowItems = [
  {
    title: "Platform Development",
    content: "Core blockchain creation and system tests.",
    icon: "/images/content/icons/docs/building.svg",
    bgColor: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    title: "Team Operations",
    content: "Support for project management and launch.",
    icon: "/images/content/icons/user-circle.svg",
    bgColor: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    title: "Ecosystem Growth",
    content: "Building our community and global presence.",
    icon: "/images/content/icons/zap.svg",
    bgColor: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-600 dark:text-green-400",
  },
];

const bottomRowItems = [
  {
    title: "Solid Foundations",
    content: "Ensuring strong operations and good guidance.",
    icon: "/images/content/icons/wallet.svg",
    bgColor: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    title: "Kenya Initiative",
    content: "Gaining insights through agritech work in Kenya.",
    icon: "/images/content/icons/heart-hand.svg",
    bgColor: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-600 dark:text-green-400",
  },
];

const TokenSaleProceeds = () => (
  <div className="section bg-white dark:bg-dark-bg">
    <div className="container">
      <div className="max-w-6xl mx-auto">
        <div className="p-8 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
          <div className="text-center mb-12">
            <div className="mb-4 text-h2 xl:text-h3 md:text-h4 dark:text-dark-text-primary">
              Token Sale Proceeds Usage
            </div>
            <div className="text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base">
              Token sale funds are allocated strategically to build solutions
              that serve farmers. We focus blockchain project funding across
              five key areas.
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {topRowItems.map((item, index) => (
              <div
                className="flex-1 min-w-[280px] max-w-[320px] p-6 bg-greyscale-25 dark:bg-dark-surface border border-greyscale-100 dark:border-dark-border rounded-xl hover:shadow-lg transition-shadow"
                key={index}
              >
                <div className="flex items-start mb-4">
                  <div
                    className={`flex justify-center items-center w-12 h-12 mr-4 rounded-full ${item.bgColor}`}
                  >
                    <Image
                      src={item.icon}
                      className={`w-6 h-6 ${item.iconColor}`}
                      width={24}
                      height={24}
                      alt=""
                    />
                  </div>
                </div>
                <div className="mb-3 text-h6 dark:text-dark-text-primary font-semibold">
                  {item.title}
                </div>
                <div className="text-greyscale-400 dark:text-dark-text-secondary text-sm">
                  {item.content}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-6 max-w-2xl w-full">
              {bottomRowItems.map((item, index) => (
                <div
                  className="flex-1 min-w-[280px] max-w-[360px] p-6 bg-greyscale-25 dark:bg-dark-surface border border-greyscale-100 dark:border-dark-border rounded-xl hover:shadow-lg transition-shadow"
                  key={index}
                >
                  <div className="flex items-start mb-4">
                    <div
                      className={`flex justify-center items-center w-12 h-12 mr-4 rounded-full ${item.bgColor}`}
                    >
                      <Image
                        src={item.icon}
                        className={`w-6 h-6 ${item.iconColor}`}
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mb-3 text-h6 dark:text-dark-text-primary font-semibold">
                    {item.title}
                  </div>
                  <div className="text-greyscale-400 dark:text-dark-text-secondary text-sm">
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TokenSaleProceeds;
