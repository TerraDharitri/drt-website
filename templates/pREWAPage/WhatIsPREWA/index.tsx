import Image from "@/components/Image";

const WhatIsPREWA = () => (
  <div className="section bg-white dark:bg-dark-bg">
    <div className="container">
      <div className="flex items-center gap-20 xl:gap-12 lg:block lg:gap-0">
        <div className="flex-1 lg:mb-10 flex justify-center">
          <Image
            className="w-full h-auto object-contain max-w-[300px] max-h-[300px]"
            src="/images/graphics/pREWA/pREWA/pREWA token.svg"
            width={300}
            height={300}
            alt="pREWA token illustration"
          />
        </div>
        <div className="flex-1">
          <div className="mb-4 text-h2 xl:text-h3 md:text-h4 dark:text-dark-text-primary">
            What is pREWA
          </div>
          <div className="text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base space-y-4">
            <p>
              pREWA, a BSC BEP20 token, is central to Dharitri's fundraising and
              community building. It directly funds our platform development and
              farmer services launch.
            </p>
            <p>
              The token offers immediate crypto staking opportunities for
              rewards and ecosystem support. The token serves as an interim
              step, connecting early supporters to our future Proof-of-Stake
              platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WhatIsPREWA;
