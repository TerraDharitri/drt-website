import Image from "@/components/Image";

const HowToBuyPREWA = () => (
  <div className="section bg-greyscale-25 dark:bg-dark-surface">
    <div className="container">
      <div className="text-center mb-16">
        <div className="mb-4 text-h2 xl:text-h3 md:text-h4 dark:text-dark-text-primary">
          How to Buy pREWA
        </div>
        <div className="text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base max-w-3xl mx-auto">
          Buy pREWA with USDT on PancakeSwap to support farmer solutions. Here's
          your step-by-step participation guide:
        </div>
      </div>

      <div className="flex items-center -mx-20 2xl:-mx-10 xl:-mx-5 lg:block lg:mx-0">
        <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0 lg:mb-10">
          <div className="mb-6 text-h3 xl:text-h4 md:text-h5 dark:text-dark-text-primary">
            Purchase Steps
          </div>
          <ul className="mb-8 space-y-3">
            <li className="flex items-start">
              <span className="mr-3 text-secondary-500 font-bold">1.</span>
              <span className="text-greyscale-400 dark:text-dark-text-secondary">
                Prepare your BEP20 wallet like MetaMask
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-secondary-500 font-bold">2.</span>
              <span className="text-greyscale-400 dark:text-dark-text-secondary">
                Get USDT and BNB tokens for purchase costs
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-secondary-500 font-bold">3.</span>
              <span className="text-greyscale-400 dark:text-dark-text-secondary">
                Access PancakeSwap via our official link
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-secondary-500 font-bold">4.</span>
              <span className="text-greyscale-400 dark:text-dark-text-secondary">
                Swap your USDT for pREWA tokens safely
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-secondary-500 font-bold">5.</span>
              <span className="text-greyscale-400 dark:text-dark-text-secondary">
                Add contract address to view your balance
              </span>
            </li>
          </ul>

          <div className="mb-4 text-h3 xl:text-h4 md:text-h5 dark:text-dark-text-primary">
            Security Guidelines
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-3 text-red-500">⚠️</span>
              <span className="text-greyscale-400 dark:text-dark-text-secondary">
                Use only official Dharitri transaction links
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-red-500">⚠️</span>
              <span className="text-greyscale-400 dark:text-dark-text-secondary">
                Never share private keys or seed phrases
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-red-500">⚠️</span>
              <span className="text-greyscale-400 dark:text-dark-text-secondary">
                Verify our contract address before buying
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-red-500">⚠️</span>
              <span className="text-greyscale-400 dark:text-dark-text-secondary">
                Ignore unsolicited contact requesting funds
              </span>
            </li>
          </ul>
        </div>
        <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0 flex justify-center items-center">
          <Image
            className="w-full h-auto object-contain max-w-[400px] max-h-[300px]"
            src="/images/graphics/pREWA/pREWA/pancakeswap.webp"
            width={400}
            height={300}
            alt="PancakeSwap trading interface"
          />
        </div>
      </div>
    </div>
  </div>
);

export default HowToBuyPREWA;
