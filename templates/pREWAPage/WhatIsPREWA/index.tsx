import Image from "@/components/Image";

const WhatIsPREWA = () => (
  <div className="section bg-white dark:bg-dark-bg">
    <div className="container">
      <div className="flex items-center justify-center -mx-20 2xl:-mx-10 xl:-mx-5 lg:block lg:mx-0">
        <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0 lg:mb-10 flex justify-center">
          <Image
            className="w-full h-auto object-contain max-w-[300px] max-h-[300px]"
            src="/images/graphics/pREWA/pREWA/pREWA token.svg"
            width={300}
            height={300}
            alt="pREWA token illustration"
          />
        </div>
        <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0">
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
