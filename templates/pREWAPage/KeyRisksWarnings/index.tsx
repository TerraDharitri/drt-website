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
  {
    title: "Research responsibility",
    content: "Not financial or legal advice",
    icon: "/images/content/icons/award.svg",
  },
];

const KeyRisksWarnings = () => (
  <div className="section bg-greyscale-25 dark:bg-dark-surface">
    <div className="container">
      <div className="text-center mb-16">
        <div className="mb-4 text-h2 xl:text-h3 md:text-h4 dark:text-dark-text-primary">
          Key Risks & Token Warnings
        </div>
        <div className="text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base max-w-3xl mx-auto">
          Please understand these important risks before participating in our
          token sale. Cryptocurrency investments carry inherent uncertainties.
        </div>
      </div>

      <div className="flex items-center -mx-20 2xl:-mx-10 xl:-mx-5 lg:block lg:mx-0">
        <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0 lg:mb-10 flex justify-center">
          <Image
            className="w-full h-auto object-contain max-w-[400px] max-h-[300px]"
            src="/images/graphics/pREWA/pREWA/risk warning.webp"
            width={400}
            height={300}
            alt="Risk warning illustration"
          />
        </div>
        <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0">
          <div className="grid gap-6 grid-cols-1">
            {risks.map((risk, index) => (
              <div
                className="p-6 bg-greyscale-0 dark:bg-dark-card border border-greyscale-100 dark:border-dark-border shadow-2 rounded-lg"
                key={index}
              >
                <div className="flex items-center">
                  <div className="flex justify-center items-center w-12 h-12 mr-4 rounded-full bg-red-100 dark:bg-red-900">
                    <Image
                      src={risk.icon}
                      className="w-6"
                      width={24}
                      height={24}
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="mb-2 text-h6 dark:text-dark-text-primary font-semibold">
                      {risk.title}
                    </div>
                    <div className="text-greyscale-400 dark:text-dark-text-secondary">
                      {risk.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
            <div className="flex items-start">
              <span className="mr-3 text-amber-600 text-2xl">⚠️</span>
              <div>
                <div className="mb-2 text-h6 text-amber-800 dark:text-amber-200 font-semibold">
                  Important Disclaimer
                </div>
                <div className="text-amber-700 dark:text-amber-300 text-sm">
                  pREWA tokens are utility tokens, not securities or investment
                  contracts. Past performance does not guarantee future results.
                  Please conduct your own research and consult with financial
                  advisors before making any investment decisions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default KeyRisksWarnings;
