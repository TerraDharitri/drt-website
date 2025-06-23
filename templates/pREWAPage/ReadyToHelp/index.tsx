import Link from "next/link";
import Icon from "@/components/Icon";

const ReadyToHelp = () => (
  <div className="section bg-secondary-300 text-greyscale-0">
    <div className="container">
      <div className="text-center">
        <div className="mb-6 text-h2 xl:text-h2 md:text-h3 text-white">
          Ready to Help Farmers?
        </div>
        <div className="mb-10 text-white/70 text-lg md:text-base mx-auto">
          Your support helps us build real solutions for farming communities
          worldwide.
        </div>
        <div className="flex justify-center space-x-4 md:block md:space-x-0 md:space-y-4 md:max-w-sm md:mx-auto">
          <Link
            className="btn-primary min-w-[10.6rem] px-5 md:min-w-full"
            href="/get-involved"
          >
            Get Involved
          </Link>
          <Link
            className="btn-secondary min-w-[10.6rem] px-5 md:min-w-full"
            href="/ecosystem"
          >
            See Our Platform
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default ReadyToHelp;
