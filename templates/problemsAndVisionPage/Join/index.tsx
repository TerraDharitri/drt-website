import Link from "next/link";

type JoinProps = {};

const Join = ({}: JoinProps) => (
  <div className="py-10">
    <div className="container-md">
      <div className="p-20 bg-secondary-300 rounded-lg lg:px-12 md:px-4 md:py-12">
        <div className="max-w-[50rem] mx-auto text-center xl:max-w-[46rem]">
          <div className="mb-4 text-h1 text-white xl:text-h2 md:text-h4">
            From Our Vision to Real
            <br />
            Action
          </div>
          <div className="mb-10 text-white/70 md:mb-8 md:px-1">
            Our vision for strong smallholder farmers and a healthier Earth
            needs real action starting now. We're developing practical
            blockchain solutions to make this vision reality for farming
            communities worldwide.
            <br />
            <br />
            These tools will support sustainable agriculture and help farmers
            build much better lives. Your early support through pREWA helps us
            reach more farmers faster.
          </div>
          <div className="flex justify-center space-x-4 md:block md:space-x-0 md:space-y-4">
            <Link
              className="btn-primary min-w-[10.6rem] px-5 md:min-w-full"
              href="/sign-up"
            >
              Get pREWA Tokens
            </Link>
            <Link
              className="btn-secondary min-w-[10.6rem] px-5 md:min-w-full"
              href="/contact-us"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Join;
