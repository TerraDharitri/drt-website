import Image from "@/components/Image";

const risks = [
  {
    title: "Investment risks",
    content: "Value fluctuates, no guarantees",
    icon: "/images/content/icons/wallet.svg",
  },
  {
    title: "Development risks",
    content: "Platform under active development",
    icon: "/images/content/icons/coins-stacked.svg",
  },
  {
    title: "Regulatory risks",
    content: "Crypto laws vary by jurisdiction",
    icon: "/images/content/icons/trophy.svg",
  },
];

const KeyRisksWarnings = () => (
  <div className="section bg-greyscale-25 dark:bg-dark-surface py-24">
    <div className="container">
      <div className="text-center mb-20">
        <div className="mb-4 text-h2 xl:text-h3 md:text-h4 dark:text-dark-text-primary">
          Key Risks & Token Warnings
        </div>
        <div className="text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base max-w-3xl mx-auto leading-relaxed">
          Please understand these important risks before participating in our
          token sale. Cryptocurrency investments carry inherent uncertainties.
        </div>
      </div>

      <div className="flex items-center justify-center gap-24 xl:gap-20 lg:flex-col lg:gap-16 mb-20">
        {/* Left side - Shield Icon */}
        <div className="flex-shrink-0 w-[500px] xl:w-[450px] lg:w-full lg:max-w-[450px] lg:mx-auto">
          <Image
            className="w-full h-auto object-contain"
            src="/images/graphics/pREWA/pREWA/risk warning.webp"
            width={500}
            height={500}
            alt="Risk warning illustration"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex-1 min-w-0 max-w-2xl">
          <div className="mb-8 text-h4 xl:text-h5 dark:text-dark-text-primary font-semibold">
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
          <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors">
            View Full T&Cs
          </button>
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
              <div className="flex justify-center items-center w-20 h-20 mx-auto mb-6 rounded-full bg-primary-100 dark:bg-primary-900/30">
                <Image
                  src={risk.icon}
                  className="w-10 h-10"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
              <div className="mb-3 text-xl font-bold dark:text-dark-text-primary">
                {risk.title}
              </div>
              <div className="text-greyscale-500 dark:text-dark-text-secondary leading-relaxed">
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
