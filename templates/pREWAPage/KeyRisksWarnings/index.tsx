import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const risks = [
  {
    title: "Investment risks",
    content: "Value fluctuates, no guarantees",
    icon: "/images/content/icons/trend-down-bold.svg",
  },
  {
    title: "Development risks",
    content: "Platform under active development",
    icon: "/images/content/icons/wrench-bold.svg",
  },
  {
    title: "Regulatory risks",
    content: "Crypto laws vary by jurisdiction",
    icon: "/images/content/icons/scales-bold.svg",
  },
];

const KeyRisksWarnings = () => (
  <div className="section bg-greyscale-25 dark:bg-dark-surface py-24">
    <div className="container">
      <div className="flex items-center justify-center gap-24 xl:gap-20 lg:flex-col lg:gap-16 mb-20">
        {/* Left side - Shield Icon */}
        <div className=" basis-[60%] flex-shrink-0 w-[500px] xl:w-[450px] lg:w-full lg:max-w-[450px] lg:mx-auto mb-8">
          <Image
            className="object-contain"
            src="/images/graphics/pREWA/pREWA/risk warning.webp"
            width={500}
            height={500}
            alt="Risk warning illustration"
          />
        </div>

        {/* Right side - Content */}
        <div className="basis-[40%] flex-1 min-w-0 max-w-2xl">
        <div className="mb-4 text-h2 text-start xl:text-h3 md:text-h4 dark:text-dark-text-primary">
          Key Risks & Token Warnings
        </div>
        <div className="mb-6 text-greyscale-500 dark:text-dark-text-secondary">
            Crypto investments like pREWA carry high risks, including potential
            total loss. pREWA is an interim utility token with volatile value,
            funding our farmer solutions.
          </div>
          <div className="mb-6 text-greyscale-500 dark:text-dark-text-secondary">
            Consult independent advisors before making any investment decisions.
            Review our full Terms & Conditions for complete risk details.
          </div>
          <div className="mb-8 text-greyscale-500 dark:text-dark-text-secondary">
            By participating, you acknowledge and accept these token sale risks.
          </div>
          <Link className="btn-primary pr-5 md:w-full" href="">
            <span>View Full T&Cs</span>
            <Icon className="w-5 h-5" name="arrow-right" />
          </Link>
        </div>
      </div>

      {/* Risk Cards - Horizontal Layout */}
      <div className="grid grid-cols-3 gap-8 lg:grid-cols-1 lg:gap-6">
        {risks.map((risk, index) => (
          <div
            className="p-8 bg-greyscale-0 dark:bg-dark-card border border-greyscale-100 dark:border-dark-border rounded-lg"
            key={index}
          >
            <div className="text-center">
              <div className="flex justify-center items-center w-12 h-12  mb-6 rounded-full bg-[#9FE870] dark:bg-primary-900/30">
                <Image
                  src={risk.icon}
                  className="w-6 h-6"
                  width={24}
                  height={24}
                  alt=""
                />
              </div>
              <div className="mb-3 text-xl font-bold text-start dark:text-dark-text-primary">
                {risk.title}
              </div>
              <div className="text-greyscale-500 text-start dark:text-dark-text-secondary leading-relaxed">
                {risk.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default KeyRisksWarnings;
