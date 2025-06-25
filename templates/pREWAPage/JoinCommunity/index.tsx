import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const JoinCommunity = () => (
  <div className="section bg-white dark:bg-dark-bg">
    <div className="container">
      <div className="mb-6 text-h2 xl:text-h3 md:text-h4 dark:text-dark-text-primary">
        Join Our Community & Learn More
      </div>
      <div className="mb-8 text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base">
        Keep up with pREWA news on our Telegram. Want to know more about
        Dharitri? Check out the links below.
      </div>
      <div className="flex items-center gap-20 xl:gap-12 lg:block lg:gap-0">
        {/* Left Content */}
        <div className="flex-1 lg:w-full lg:mb-10">
          <div className="mb-8">
            <div className="mb-6 text-h5 xl:text-h5 md:text-h6 dark:text-dark-text-primary">
              Explore More
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex justify-center items-center w-6 h-6 rounded-full bg-[#9FE870] shrink-0 mt-1 mr-2">
                  <Image
                    src={"images/content/icons/check-bold.svg"}
                    className="w-3 h-3"
                    width={12}
                    height={12}
                    alt=""
                  />
                </div>
                <div>
                  <span className="text-greyscale-400 dark:text-dark-text-secondary">
                    Read Our White Paper:
                  </span>
                  <span className=" dark:text-dark-text-secondary ml-1">
                    See our tech details and project plan
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex justify-center items-center w-6 h-6 rounded-full bg-[#9FE870] shrink-0 mt-1 mr-2">
                  <Image
                    src={"images/content/icons/check-bold.svg"}
                    className="w-3 h-3"
                    width={12}
                    height={12}
                    alt=""
                  />
                </div>
                <div>
                  <span className="text-greyscale-400 dark:text-dark-text-primary">
                    Our Mission for Farmers:
                  </span>
                  <span className=" dark:text-dark-text-secondary ml-1">
                    Learn how we help and our main goals
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex justify-center items-center w-6 h-6 rounded-full bg-[#9FE870] shrink-0 mt-1 mr-2">
                  <Image
                    src={"images/content/icons/check-bold.svg"}
                    className="w-3 h-3"
                    width={12}
                    height={12}
                    alt=""
                  />
                </div>
                <div>
                  <span className="text-greyscale-400 dark:text-dark-text-primary">
                    Meet the Dharitri Team:
                  </span>
                  <span className=" dark:text-dark-text-secondary ml-1">
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
          <div className="flex">
            <Link
              href="https://t.me/DharitriCommunity"
              target="_blank"
              className="w-10 h-10 rounded-full flex items-center justify-center "
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_6023_10375)">
                  <path
                    d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                    fill="url(#paint0_linear_6023_10375)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.43189 11.8734C8.93014 10.3493 11.2628 9.34452 12.43 8.85905C15.7626 7.47294 16.455 7.23216 16.9064 7.22421C17.0056 7.22246 17.2276 7.24706 17.3714 7.36372C17.4928 7.46223 17.5262 7.5953 17.5422 7.6887C17.5581 7.78209 17.578 7.99485 17.5622 8.1611C17.3816 10.0586 16.6002 14.6633 16.2027 16.7885C16.0345 17.6877 15.7032 17.9892 15.3826 18.0188C14.6857 18.0829 14.1566 17.5582 13.4816 17.1158C12.4255 16.4235 11.8288 15.9925 10.8036 15.3169C9.61884 14.5362 10.3869 14.107 11.0621 13.4058C11.2388 13.2222 14.3092 10.4295 14.3686 10.1761C14.376 10.1444 14.3829 10.0263 14.3128 9.96397C14.2426 9.9016 14.139 9.92293 14.0643 9.93989C13.9584 9.96393 12.2712 11.0791 9.00264 13.2855C8.52373 13.6143 8.08994 13.7745 7.70129 13.7662C7.27283 13.7569 6.44864 13.5239 5.83594 13.3247C5.08444 13.0804 4.48716 12.9513 4.53917 12.5364C4.56626 12.3203 4.86383 12.0993 5.43189 11.8734Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_6023_10375"
                    x1="12"
                    y1="0"
                    x2="12"
                    y2="23.822"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2AABEE" />
                    <stop offset="1" stopColor="#229ED9" />
                  </linearGradient>
                  <clipPath id="clip0_6023_10375">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>

            <Link
              href="https://x.com/Dharitri_Block"
              className="w-10 h-10 rounded-full flex items-center justify-center"
              target="_blank"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3263 1.90381H21.6998L14.3297 10.3273L23 21.7898H16.2112L10.894 14.8378L4.80995 21.7898H1.43443L9.31743 12.7799L1 1.90381H7.96111L12.7674 8.25814L18.3263 1.90381ZM17.1423 19.7706H19.0116L6.94539 3.81694H4.93946L17.1423 19.7706Z"
                  fill="black"
                />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/company/dharitrix"
              className="w-10 h-10  rounded-full flex items-center justify-center "
              target="_blank"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_6023_10378)">
                  <path
                    d="M22.2283 0H1.77167C1.30179 0 0.851161 0.186657 0.518909 0.518909C0.186657 0.851161 0 1.30179 0 1.77167V22.2283C0 22.6982 0.186657 23.1488 0.518909 23.4811C0.851161 23.8133 1.30179 24 1.77167 24H22.2283C22.6982 24 23.1488 23.8133 23.4811 23.4811C23.8133 23.1488 24 22.6982 24 22.2283V1.77167C24 1.30179 23.8133 0.851161 23.4811 0.518909C23.1488 0.186657 22.6982 0 22.2283 0ZM7.15333 20.445H3.545V8.98333H7.15333V20.445ZM5.34667 7.395C4.93736 7.3927 4.53792 7.2692 4.19873 7.04009C3.85955 6.81098 3.59584 6.48653 3.44088 6.10769C3.28591 5.72885 3.24665 5.31259 3.32803 4.91145C3.40941 4.51032 3.6078 4.14228 3.89816 3.85378C4.18851 3.56529 4.55782 3.36927 4.95947 3.29046C5.36112 3.21165 5.77711 3.25359 6.15495 3.41099C6.53279 3.56838 6.85554 3.83417 7.08247 4.17481C7.30939 4.51546 7.43032 4.91569 7.43 5.325C7.43386 5.59903 7.38251 5.87104 7.27901 6.1248C7.17551 6.37857 7.02198 6.6089 6.82757 6.80207C6.63316 6.99523 6.40185 7.14728 6.14742 7.24915C5.893 7.35102 5.62067 7.40062 5.34667 7.395ZM20.4533 20.455H16.8467V14.1933C16.8467 12.3467 16.0617 11.7767 15.0483 11.7767C13.9783 11.7767 12.9283 12.5833 12.9283 14.24V20.455H9.32V8.99167H12.79V10.58H12.8367C13.185 9.875 14.405 8.67 16.2667 8.67C18.28 8.67 20.455 9.865 20.455 13.365L20.4533 20.455Z"
                    fill="#0A66C2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6023_10378">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 lg:w-full flex justify-center items-center">
          <Image
            className="w-full h-auto object-contain max-w-[500px] max-h-[400px]"
            src="images/graphics/pREWA/pREWA/community.svg"
            width={500}
            height={400}
            alt="Community illustration"
          />
        </div>
      </div>
    </div>
  </div>
);

export default JoinCommunity;
