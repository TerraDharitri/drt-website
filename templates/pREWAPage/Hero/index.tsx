import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Dividers from "@/components/Dividers";

const Hero = () => (
  <Dividers className="bg-secondary-300 text-greyscale-0" hero light>
    <div className="py-22 md:pt-12 md:pb-6">
      <div className="container">
        <div className="flex items-center mb-22 lg:block md:mb-6">
          <div className="grow pr-10 lg:pr-0">
            <div className="mb-4 text-h1 xl:text-h2 md:text-h3">
              pREWA Token:
            
              Fund Farmers,
      
              Earn Staking
  
              Rewards
            </div>
            <div className="mb-10 text-white/70 md:text-lg">
              Fund farmer solutions with pREWA. Earn immediate crypto staking
              rewards.
            </div>
            <Link className="btn-primary mb-6" href="/problemsAndVision#b2b">
              <span>Get pREWA Tokens</span>
              <Icon className="w-5 h-5 ml-2" name="arrow-right" />
            </Link>
          </div>
          <div className="relative shrink-0 w-[49.48%] lg:w-full lg:mt-16 md:mt-8 flex justify-center">
            <Image
              className="w-full h-auto object-contain max-h-[400px]"
              src="/images/graphics/pREWA/pREWA/staking rewards.svg"
              width={400}
              height={300}
              alt="pREWA staking rewards illustration"
            />
          </div>
        </div>
      </div>
    </div>
  </Dividers>
);

export default Hero;
