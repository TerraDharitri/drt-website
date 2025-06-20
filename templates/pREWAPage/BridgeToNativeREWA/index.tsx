import Image from "@/components/Image";

const BridgeToNativeREWA = () => (
  <div className="section bg-white dark:bg-dark-bg">
    <div className="container">
      <div className="mb-20 lg:mb-16 md:mb-12">
        <div className="mb-6 text-h2 xl:text-h3 md:text-h4 dark:text-dark-text-primary font-semibold">
          Bridge to Native REWA Token
        </div>
        <div className="text-greyscale-400 dark:text-dark-text-secondary text-xl lg:text-lg md:text-base max-w-4xl leading-relaxed">
          We plan a seamless token bridge crypto from pREWA to native REWA. This
          transition happens after our Proof-of-Stake L1 network launches
          successfully.
        </div>
      </div>

      <div className="flex items-center gap-20 xl:gap-12 lg:flex-col lg:gap-12">
        <div className="flex-1 lg:w-full">
          <div className="mb-8 lg:mb-6">
            <div className="mb-6 text-h4 xl:text-h4 md:text-h5 dark:text-dark-text-primary font-semibold">
              REWA: Native PoS Token
            </div>
            <div className="text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base leading-relaxed">
              REWA is our native token for utility, governance, and crypto
              staking. Our L1 blockchain depends on REWA for three key
              functions:
            </div>
          </div>

          <ul className="mb-12 lg:mb-8 space-y-4">
            <li className="flex items-start gap-3">
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
                Network security and transaction validation
              </span>
            </li>
            <li className="flex items-start gap-3">
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
                Ledger integrity and immutable records
              </span>
            </li>
            <li className="flex items-start gap-3">
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
                Ongoing staking rewards for participants
              </span>
            </li>
          </ul>

          <div className="mb-6">
            <div className="mb-4 text-h4 xl:text-h4 md:text-h5 dark:text-dark-text-primary font-semibold">
              Smooth Staking Transition
            </div>
            <div className="text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base leading-relaxed">
              pREWA holders can easily transition to REWA PoS staking. Early
              <br />
              supporters become key participants in securing our agricultural
              <br />
              blockchain system.
            </div>
          </div>
        </div>

        <div className="flex-1 lg:w-full flex justify-center items-center">
          <Image
            className="w-full h-auto object-contain max-w-[500px] xl:max-w-[450px] lg:max-w-[400px] md:max-w-[350px]"
            src="/images/graphics/pREWA/pREWA/bridge.svg"
            width={500}
            height={400}
            alt="Bridge to REWA token illustration"
          />
        </div>
      </div>
    </div>
  </div>
);

export default BridgeToNativeREWA;
