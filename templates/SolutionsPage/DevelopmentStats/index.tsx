import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

type DevelopmentStatsProps = {};

const DevelopmentStats = ({}: DevelopmentStatsProps) => (
  <div className="pt-30 pb-22 xl:pt-24 xl:pb-20 md:py-12 bg-greyscale-25 dark:bg-dark-surface">
    <div className="container">
      <div className="flex items-center -mx-20 mb-14 xl:-mx-10 lg:flex-col lg:items-stretch lg:mx-0 md:mb-8 pt-20 pb-20">
        <div className="w-[calc(50%-5rem)] mx-20 xl:w-[calc(50%-2.5rem)] xl:mx-10 lg:w-full lg:mx-0 lg:mb-10 md:mb-8 flex justify-center">
          <Image
            className="w-full max-w-[400px] h-auto"
            src="/images/graphics/The Solution/The Solution/code.svg"
            width={400}
            height={300}
            alt="Development approach illustration"
          />
        </div>
        <div className="w-[calc(50%-5rem)] mx-20 xl:w-[calc(50%-2.5rem)] xl:mx-10 lg:w-full lg:mx-0">
          <div className="stage"></div>
          <div className="mb-4 text-h2 xl:text-h3 md:text-h4 dark:text-dark-text-primary">
            Our Current Development Status
          </div>

          <div className="mb-12 text-greyscale-400 dark:text-dark-text-secondary lg:mb-8 md:mb-6">
            Our platform development focuses on creating robust, farmer-centered
            solutions. We prioritize security, scalability, and real-world
            testing to ensure our technology genuinely serves smallholder
            farmers. Each feature is built with careful attention to local
            contexts and validated through community feedback.
          </div>
          <Link className="btn-primary pr-5.5 md:w-full" href="/pricing">
            <span>Learn More</span>
            <Icon className="w-5 h-5" name="arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default DevelopmentStats;
