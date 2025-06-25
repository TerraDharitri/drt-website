import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const ContractAddress = () => (
  <div className="section bg-white dark:bg-dark-bg">
    <div className="container">
      <div className="mb-16">
        <div className="mb-4 text-h2 xl:text-h3 md:text-h4 dark:text-dark-text-primary">
          pREWA Contract Address
        </div>
        <div className="text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base">
          This is Dharitri's only official pREWA token contract. Always verify
          before any transaction to protect your investment in farmer solutions.
        </div>
      </div>

      <div className="flex items-center gap-20 xl:gap-12 lg:block lg:gap-0">
        <div className="flex-1 lg:mb-10">
          <div className="mb-8 lg:mb-6">
            {" "}
            <div className="mb-6 text-h3 xl:text-h4 md:text-h5 dark:text-dark-text-primary">
              Token Specifications
            </div>
            <div className="text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base">
              Rewa is our native token for utility, governance, and crypto
              staking. Our L1 blockchain depends on pREWA for three key
              functions:
            </div>
          </div>
          <ul className="mb-8 space-y-3">
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
                Network:Binance Smart Chain BSC
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
                Standard:BEP20 for wallet support
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
                Symbol:pREWA for identification
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
                Supply: 500 million tokens
              </span>
            </li>
          </ul>

          <div className="mb-4 text-h3 xl:text-h4 md:text-h5 dark:text-dark-text-primary">
            Security Warning
          </div>
          <div className="mb-6 text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base">
            Fake addresses exist targeting investors. Use only addresses from
            our official website and verified agritech channels.
          </div>
          <button
            className="btn-primary pr-5 md:w-full cursor-not-allowed opacity-75 relative group"
            disabled
            title="pREWA Contract- Coming Soon"
          >
            <span>Copy pREWA Contract</span>
            <Icon className="w-5 h-5" name="arrow-right" />
            <span className="absolute top-full left-0 mt-2 px-2 py-1 text-xs bg-greyscale-900 dark:bg-dark-card text-greyscale-0 dark:text-dark-text-primary rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Coming Soon
            </span>
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            className="w-full h-auto object-contain max-w-[400px] max-h-[300px]"
            src="images/graphics/pREWA/pREWA/contract address.svg"
            width={400}
            height={300}
            alt="pREWA contract address visualization"
          />
        </div>
      </div>
    </div>
  </div>
);

export default ContractAddress;
