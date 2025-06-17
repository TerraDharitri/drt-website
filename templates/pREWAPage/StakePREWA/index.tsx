import Image from "@/components/Image";

const StakePREWA = () => (
  <div className="section bg-greyscale-25 dark:bg-dark-surface">
    <div className="container">
      <div className="text-center mb-16">
        <div className="mb-4 text-h2 xl:text-h3 md:text-h4 dark:text-dark-text-primary">
          Stake pREWA: Earn Rewards
        </div>
        <div className="text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base max-w-3xl mx-auto">
          pREWA offers immediate crypto staking utility from launch. This
          provides early value beyond its funding role for our mission.
        </div>
      </div>

      <div className="flex items-center -mx-20 2xl:-mx-10 xl:-mx-5 lg:block lg:mx-0">
        <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0 lg:mb-10 flex justify-center">
          <Image
            className="w-full h-auto object-contain max-w-[400px] max-h-[300px]"
            src="/images/graphics/pREWA/pREWA/staking.svg"
            width={400}
            height={300}
            alt="pREWA staking illustration"
          />
        </div>
        <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0">
          <div className="mb-6 text-h3 xl:text-h4 md:text-h5 dark:text-dark-text-primary">
            What is pREWA Staking?
          </div>
          <div className="mb-6 text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base">
            Lock your pREWA tokens to support Dharitri's early ecosystem. Earn
            additional pREWA as staking rewards while helping farmers.
          </div>

          <div className="mb-4 text-lg font-semibold dark:text-dark-text-primary">
            Key Benefits:
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-3 text-secondary-500">✅</span>
              <span className="text-greyscale-400 dark:text-dark-text-secondary">
                Earn pREWA rewards (APY details shared pre-launch)
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-secondary-500">✅</span>
              <span className="text-greyscale-400 dark:text-dark-text-secondary">
                Support Dharitri's stability and community growth
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-secondary-500">✅</span>
              <span className="text-greyscale-400 dark:text-dark-text-secondary">
                Show commitment to our agricultural mission
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default StakePREWA;
