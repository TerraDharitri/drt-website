import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const PlatformLaunchFund = () => (
  <div className="section bg-greyscale-25 dark:bg-dark-surface">
    <div className="container">
      <div className="flex items-center gap-20 xl:gap-12 lg:block lg:gap-0">
        <div className="flex-[3] lg:mb-10">
          <div className="mb-4 text-h2 xl:text-h3 md:text-h4 dark:text-dark-text-primary">
            pREWA: Platform Launch Fund
          </div>
          <div className="mb-6 text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base">
            Dharitri is actively building our core blockchain platform. With
            foundational work validated, our token sale provides vital
            resources.
          </div>
          <div className="mb-6 text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base">
            This funding helps us transition from development to launching
            initial services for smallholder farmers.
          </div>
          <div className="mb-6 text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base">
            This blockchain project funding enables three key steps:
          </div>
          <ul className="mb-8 list-none space-y-2">
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
                Finalizing core blockchain launch infrastructure
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
                Deploying our first suite of farmer services
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
                Establishing operational user onboarding systems
              </span>
            </li>
          </ul>
          <div className="mb-8 text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base">
            Your participation supports Dharitri's development.
          </div>
          <Link
            className="btn-primary pr-5 md:w-full"
            href="/solutions#blockchain"
          >
            <span>Read White Paper</span>
            <Icon className="w-5 h-5" name="arrow-right" />
          </Link>
        </div>
        <div className="flex-[2] flex justify-center items-center">
          <Image
            className="w-full h-auto object-contain max-w-[400px] max-h-[300px]"
            src="images/graphics/pREWA/pREWA/platform fund.svg"
            width={400}
            height={300}
            alt="Platform funding allocation"
          />
        </div>
      </div>
    </div>
  </div>
);

export default PlatformLaunchFund;
