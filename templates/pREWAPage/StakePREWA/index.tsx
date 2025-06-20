import Image from "@/components/Image";

const StakePREWA = () => (
  <div className="section bg-greyscale-25 dark:bg-dark-surface">
    <div className="container">
      <div className="mb-20">
        <div className="mb-6 text-h2 xl:text-h3 md:text-h4 dark:text-dark-text-primary">
          Stake pREWA: Earn Rewards
        </div>
        <div className="text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base max-w-3xl">
          pREWA offers immediate crypto staking utility from launch. This
          <br />
          provides early value beyond its funding role for our mission.
        </div>
      </div>

      <div className="flex items-center gap-20 xl:gap-12 lg:flex-col lg:gap-12">
        <div className="flex-1 lg:w-full flex justify-center">
          <Image
            className="w-full h-auto object-contain max-w-[400px] max-h-[300px]"
            src="/images/graphics/pREWA/pREWA/staking.svg"
            width={400}
            height={300}
            alt="pREWA staking illustration"
          />
        </div>
        <div className="flex-1 lg:w-full">
          <div className="mb-8 text-h3 xl:text-h4 md:text-h5 dark:text-dark-text-primary">
            What is pREWA Staking?
          </div>
          <div className="mb-8 text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base">
            Lock your pREWA tokens to support Dharitri's early ecosystem. Earn
            additional pREWA as staking rewards while helping farmers.
          </div>

          <div className="mb-6 text-lg text-greyscale-400 font-semibold dark:text-dark-text-primary">
            Key Benefits:
          </div>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex justify-center items-center w-6 h-6 rounded-full bg-[#9FE870] shrink-0 mt-1">
                <Image
                  src={"/images/content/icons/check-bold.svg"}
                  className="w-3 h-3"
                  width={12}
                  height={12}
                  alt=""
                />
              </div>
              <span className="ml-2  dark:text-dark-text-primary">
                Earn pREWA rewards (APY details shared pre-launch)
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex justify-center items-center w-6 h-6 rounded-full bg-[#9FE870] shrink-0 mt-1">
                <Image
                  src={"/images/content/icons/check-bold.svg"}
                  className="w-3 h-3"
                  width={12}
                  height={12}
                  alt=""
                />
              </div>
              <span className="ml-2  dark:text-dark-text-primary">
                Support Dharitri's stability and community growth
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex justify-center items-center w-6 h-6 rounded-full bg-[#9FE870] shrink-0 mt-1">
                <Image
                  src={"/images/content/icons/check-bold.svg"}
                  className="w-3 h-3"
                  width={12}
                  height={12}
                  alt=""
                />
              </div>
              <span className="ml-2  dark:text-dark-text-primary">
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
