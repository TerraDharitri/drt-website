import Image from "@/components/Image";

const BridgeToNativeREWA = () => (
  <div className="section bg-white dark:bg-dark-bg">
    <div className="container">
      <div className="text-center mb-16">
        <div className="mb-4 text-h2 xl:text-h3 md:text-h4 dark:text-dark-text-primary">
          Bridge to Native REWA Token
        </div>
        <div className="text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base max-w-3xl mx-auto">
          We plan a seamless token bridge crypto from pREWA to native REWA. This
          transition happens after our Proof-of-Stake L1 network launches
          successfully.
        </div>
      </div>

      <div className="flex items-center -mx-20 flex-row-reverse 2xl:-mx-10 xl:-mx-5 lg:block lg:mx-0">
        <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0 lg:mb-10">
          <div className="mb-6 text-h3 xl:text-h4 md:text-h5 dark:text-dark-text-primary">
            REWA: Native PoS Token
          </div>
          <div className="mb-6 text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base">
            REWA is our native token for utility, governance, and crypto
            staking. Our L1 blockchain depends on REWA for three key functions:
          </div>
          <ul className="mb-8 space-y-3">
            <li className="flex items-start">
              <span className="mr-3 text-secondary-500">✅</span>
              <span className="text-greyscale-400 dark:text-dark-text-secondary">
                Network security and transaction validation
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-secondary-500">✅</span>
              <span className="text-greyscale-400 dark:text-dark-text-secondary">
                Ledger integrity and immutable records
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-secondary-500">✅</span>
              <span className="text-greyscale-400 dark:text-dark-text-secondary">
                Ongoing staking rewards for participants
              </span>
            </li>
          </ul>

          <div className="mb-4 text-h3 xl:text-h4 md:text-h5 dark:text-dark-text-primary">
            Smooth Staking Transition
          </div>
          <div className="text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base">
            pREWA holders can easily transition to REWA PoS staking. Early
            supporters become key participants in securing our agricultural
            blockchain system.
          </div>
        </div>
        <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0 flex justify-center items-center">
          <Image
            className="w-full h-auto object-contain max-w-[400px] max-h-[300px]"
            src="/images/graphics/pREWA/pREWA/bridge.svg"
            width={400}
            height={300}
            alt="Bridge to REWA token illustration"
          />
        </div>
      </div>
    </div>
  </div>
);

export default BridgeToNativeREWA;
