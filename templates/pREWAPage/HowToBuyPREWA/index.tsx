import Image from "@/components/Image";

const HowToBuyPREWA = () => (
  <div className="section bg-greyscale-25 dark:bg-dark-surface">
    <div className="container">
      <div className="mb-16">
        <div className="mb-4 text-h2 xl:text-h3 md:text-h4 dark:text-dark-text-primary">
          How to Buy pREWA
        </div>
        <div className="text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base">
          Buy pREWA with USDT on PancakeSwap to support farmer solutions. Here's
          your step-by-step participation guide.
        </div>
      </div>

      <div className="flex items-center gap-20 xl:gap-12 lg:block lg:gap-0">
        {/* Image on the left */}
        <div className="flex-1 flex justify-center items-center lg:w-full lg:mb-10">
          <Image
            className="w-full h-auto object-contain max-w-[500px] max-h-[400px]"
            src="images/graphics/pREWA/pREWA/pancakeswap.webp"
            width={500}
            height={400}
            alt="PancakeSwap trading interface"
          />
        </div>

        {/* Content on the right */}
        <div className="flex-1 lg:w-full">
          <div className="mb-8">
            <div className="mb-6 text-h3 xl:text-h4 md:text-h5 dark:text-dark-text-primary">
              Purchase Steps
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex justify-center items-center w-6 h-6 rounded-full bg-[#9FE870] shrink-0 mt-1">
                  <Image
                    src={"images/content/icons/check-bold.svg"}
                    className="w-3 h-3"
                    width={12}
                    height={12}
                    alt=""
                  />
                </div>
                <span className="ml-2  dark:text-dark-text-primary">
                  Prepare your BEP20 wallet like MetaMask
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex justify-center items-center w-6 h-6 rounded-full bg-[#9FE870] shrink-0 mt-1">
                  <Image
                    src={"images/content/icons/check-bold.svg"}
                    className="w-3 h-3"
                    width={12}
                    height={12}
                    alt=""
                  />
                </div>
                <span className="ml-2  dark:text-dark-text-primary">
                  Get USDT and BNB tokens for purchase costs
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex justify-center items-center w-6 h-6 rounded-full bg-[#9FE870] shrink-0 mt-1">
                  <Image
                    src={"images/content/icons/check-bold.svg"}
                    className="w-3 h-3"
                    width={12}
                    height={12}
                    alt=""
                  />
                </div>
                <span className="ml-2  dark:text-dark-text-primary">
                  Access PancakeSwap via our official link
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex justify-center items-center w-6 h-6 rounded-full bg-[#9FE870] shrink-0 mt-1">
                  <Image
                    src={"images/content/icons/check-bold.svg"}
                    className="w-3 h-3"
                    width={12}
                    height={12}
                    alt=""
                  />
                </div>
                <span className="ml-2  dark:text-dark-text-primary">
                  Swap your USDT for pREWA tokens safely
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex justify-center items-center w-6 h-6 rounded-full bg-[#9FE870] shrink-0 mt-1">
                  <Image
                    src={"images/content/icons/check-bold.svg"}
                    className="w-3 h-3"
                    width={12}
                    height={12}
                    alt=""
                  />
                </div>
                <span className="ml-2  dark:text-dark-text-primary">
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
                <div className="flex justify-center items-center w-6 h-6 rounded-full bg-[#9FE870] shrink-0 mt-1">
                  <Image
                    src={"images/content/icons/check-bold.svg"}
                    className="w-3 h-3"
                    width={12}
                    height={12}
                    alt=""
                  />
                </div>
                <span className="ml-2  dark:text-dark-text-primary">
                  Use only official Dharitri transaction links
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex justify-center items-center w-6 h-6 rounded-full bg-[#9FE870] shrink-0 mt-1">
                  <Image
                    src={"images/content/icons/check-bold.svg"}
                    className="w-3 h-3"
                    width={12}
                    height={12}
                    alt=""
                  />
                </div>
                <span className="ml-2  dark:text-dark-text-primary">
                  Never share private keys or seed phrases
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex justify-center items-center w-6 h-6 rounded-full bg-[#9FE870] shrink-0 mt-1">
                  <Image
                    src={"images/content/icons/check-bold.svg"}
                    className="w-3 h-3"
                    width={12}
                    height={12}
                    alt=""
                  />
                </div>
                <span className="ml-2  dark:text-dark-text-primary">
                  Verify our contract address before buying
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex justify-center items-center w-6 h-6 rounded-full bg-[#9FE870] shrink-0 mt-1">
                  <Image
                    src={"images/content/icons/check-bold.svg"}
                    className="w-3 h-3"
                    width={12}
                    height={12}
                    alt=""
                  />
                </div>
                <span className="ml-2  dark:text-dark-text-primary">
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
