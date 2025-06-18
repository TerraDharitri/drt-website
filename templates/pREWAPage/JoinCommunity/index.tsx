import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const JoinCommunity = () => (
  <div className="section bg-white dark:bg-dark-bg">
    <div className="container">
      <div className="flex items-center gap-20 2xl:gap-10 xl:gap-8 lg:block lg:gap-0">
        {/* Left Content */}
        <div className="w-[calc(50%-2.5rem)] lg:w-full lg:mb-10">
          <div className="mb-6 text-h2 xl:text-h3 md:text-h4 dark:text-dark-text-primary">
            Join Our Community & Learn More
          </div>
          <div className="mb-8 text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base">
            Keep up with pREWA news on our Telegram. Want to know more about
            Dharitri? Check out the links below.
          </div>

          <div className="mb-8">
            <div className="mb-6 text-h4 xl:text-h5 md:text-h6 dark:text-dark-text-primary">
              Explore More
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="mr-4 text-secondary-500 text-xl">✅</span>
                <div>
                  <span className="font-semibold dark:text-dark-text-primary">
                    Read Our White Paper:
                  </span>
                  <span className="text-greyscale-400 dark:text-dark-text-secondary ml-1">
                    See our tech details and project plan
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="mr-4 text-secondary-500 text-xl">✅</span>
                <div>
                  <span className="font-semibold dark:text-dark-text-primary">
                    Our Mission for Farmers:
                  </span>
                  <span className="text-greyscale-400 dark:text-dark-text-secondary ml-1">
                    Learn how we help and our main goals
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="mr-4 text-secondary-500 text-xl">✅</span>
                <div>
                  <span className="font-semibold dark:text-dark-text-primary">
                    Meet the Dharitri Team:
                  </span>
                  <span className="text-greyscale-400 dark:text-dark-text-secondary ml-1">
                    Get to know the people behind Dharitri
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8 text-greyscale-400 dark:text-dark-text-secondary">
            Follow us on social media to see our progress and join the
            conversation.
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link
              href="https://t.me/dharitricommunity"
              className="w-10 h-10 bg-secondary-300 hover:bg-secondary-400 rounded-full flex items-center justify-center transition-colors"
              target="_blank"
            >
              <Icon className="w-5 h-5 text-white" name="telegram" />
            </Link>
            <Link
              href="https://discord.gg/dharitri"
              className="w-10 h-10 bg-secondary-300 hover:bg-secondary-400 rounded-full flex items-center justify-center transition-colors"
              target="_blank"
            >
              <Icon className="w-5 h-5 text-white" name="discord" />
            </Link>
            <Link
              href="https://twitter.com/dharitri"
              className="w-10 h-10 bg-secondary-300 hover:bg-secondary-400 rounded-full flex items-center justify-center transition-colors"
              target="_blank"
            >
              <Icon className="w-5 h-5 text-white" name="twitter" />
            </Link>
            <Link
              href="https://linkedin.com/company/dharitri"
              className="w-10 h-10 bg-secondary-300 hover:bg-secondary-400 rounded-full flex items-center justify-center transition-colors"
              target="_blank"
            >
              <Icon className="w-5 h-5 text-white" name="linkedin" />
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-[calc(50%-2.5rem)] lg:w-full flex justify-center items-center">
          <Image
            className="w-full h-auto object-contain max-w-[500px] max-h-[400px]"
            src="/images/graphics/pREWA/pREWA/community.svg"
            width={500}
            height={400}
            alt="Join Dharitri community network illustration"
          />
        </div>
      </div>
    </div>
  </div>
);

export default JoinCommunity;
