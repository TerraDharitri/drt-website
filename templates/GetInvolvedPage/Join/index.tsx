import Link from "next/link";

type JoinProps = {};

const Join = ({}: JoinProps) => (
  <div className="py-10">
    <div className="container-md">
      <div className="p-20 bg-secondary-300 lg:px-12 md:px-4 md:py-12">
        <div className="max-w-[50rem] mx-auto text-center xl:max-w-[46rem]">
          <div className="mb-4 text-h2 text-white xl:text-h2 md:text-h4">
            Choose Your Path to Impact
          </div>
          <div className="mb-10 text-white/70 md:mb-8 md:px-1">
            Fund farmer solutions or explore patnership <br /> oppurtunities -
            both paths create real change.
          </div>
          <div className="flex justify-center space-x-4 md:block md:space-x-0 md:space-y-4">
            <Link
              className="btn-primary min-w-[10.6rem] px-5 md:min-w-full"
              href="/pREWA"
            >
              Start With pREWA
            </Link>
            <Link
              className="btn-secondary min-w-[10.6rem] px-5 md:min-w-full"
              href="/ecosystem"
            >
              Partnership Form
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Join;
