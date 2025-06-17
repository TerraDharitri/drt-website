import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const ContractAddress = () => (
  <div className="section bg-white dark:bg-dark-bg">
    <div className="container">
      <div className="text-center mb-16">
        <div className="mb-4 text-h2 xl:text-h3 md:text-h4 dark:text-dark-text-primary">
          pREWA Contract Address
        </div>
        <div className="text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base max-w-3xl mx-auto">
          This is Dharitri's only official pREWA token contract. Always verify
          before any transaction to protect your investment in farmer solutions.
        </div>
      </div>

      <div className="flex items-center -mx-20 flex-row-reverse 2xl:-mx-10 xl:-mx-5 lg:block lg:mx-0">
        <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0 lg:mb-10">
          <div className="mb-6 text-h3 xl:text-h4 md:text-h5 dark:text-dark-text-primary">
            Token Specifications
          </div>
          <ul className="mb-8 space-y-3">
            <li className="flex items-start">
              <span className="mr-3 text-secondary-500">•</span>
              <span className="text-greyscale-400 dark:text-dark-text-secondary">
                <span className="font-semibold">Network:</span> Binance Smart
                Chain BSC
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-secondary-500">•</span>
              <span className="text-greyscale-400 dark:text-dark-text-secondary">
                <span className="font-semibold">Standard:</span> BEP20 for
                wallet support
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-secondary-500">•</span>
              <span className="text-greyscale-400 dark:text-dark-text-secondary">
                <span className="font-semibold">Symbol:</span> pREWA for
                identification
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-secondary-500">•</span>
              <span className="text-greyscale-400 dark:text-dark-text-secondary">
                <span className="font-semibold">Supply:</span> Approximately
                500M tokens
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-secondary-500">•</span>
              <span className="text-greyscale-400 dark:text-dark-text-secondary">
                <span className="font-semibold">Decimals:</span> 18 standard
                crypto format
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
          <Link className="btn-primary pr-5 md:w-full" href="/solution">
            <span>Copy pREWA Contract</span>
            <Icon className="w-5 h-5" name="arrow-right" />
          </Link>
        </div>
        <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0 flex justify-center items-center">
          <Image
            className="w-full h-auto object-contain max-w-[400px] max-h-[300px]"
            src="/images/graphics/pREWA/pREWA/contract address.svg"
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
