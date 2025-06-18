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
          your step-by-step participation guide.
        </div>
      </div>

      <div className="flex items-center gap-20 2xl:gap-10 xl:gap-8 lg:block lg:gap-0">
        {/* Image on the left */}
        <div className="w-[calc(50%-2.5rem)] flex justify-center items-center lg:w-full lg:mb-10">
          <Image
            className="w-full h-auto object-contain max-w-[500px] max-h-[400px]"
            src="/images/graphics/pREWA/pREWA/pancakeswap.webp"
            width={500}
            height={400}
            alt="PancakeSwap trading interface"
          />
        </div>

        {/* Content on the right */}
        <div className="w-[calc(50%-2.5rem)] lg:w-full">
          <div className="mb-8">
            <div className="mb-6 text-h3 xl:text-h4 md:text-h5 dark:text-dark-text-primary">
              Purchase Steps
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-4 mt-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-greyscale-400 dark:text-dark-text-secondary">
                  Prepare your BEP20 wallet like MetaMask
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-greyscale-400 dark:text-dark-text-secondary">
                  Get USDT and BNB tokens for purchase costs
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-greyscale-400 dark:text-dark-text-secondary">
                  Access PancakeSwap via our official link
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-greyscale-400 dark:text-dark-text-secondary">
                  Swap your USDT for pREWA tokens safely
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-greyscale-400 dark:text-dark-text-secondary">
                  Add contract address to view your balance
                </span>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-6 text-h3 xl:text-h4 md:text-h5 dark:text-dark-text-primary">
              Security Guidelines
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-4 mt-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-greyscale-400 dark:text-dark-text-secondary">
                  Use only official Dharitri transaction links
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-greyscale-400 dark:text-dark-text-secondary">
                  Never share private keys or seed phrases
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-greyscale-400 dark:text-dark-text-secondary">
                  Verify our contract address before buying
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-greyscale-400 dark:text-dark-text-secondary">
                  Ignore unsolicited contact requesting funds
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HowToBuyPREWA;
