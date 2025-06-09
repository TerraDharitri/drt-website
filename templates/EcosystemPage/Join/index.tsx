import Link from "next/link";

type JoinProps = {};

const Join = ({}: JoinProps) => (
  <div className="py-10">
    <div className="container-md">
      <div className="p-20 bg-secondary-300 lg:px-12 md:px-4 md:py-12">
        <div className="max-w-[50rem] mx-auto text-center xl:max-w-[46rem]">
          <div className="mb-4 text-h1 text-white xl:text-h2 md:text-h4">
            Ready to Support Our Mission?
          </div>
          <div className="mb-10 text-white/70 md:mb-8 md:px-1">
            Join us to support smallholder farmers worldwide. Explore the pREWA token or partnership opportunities with our system.
          </div>
          <div className="flex justify-center space-x-4 md:block md:space-x-0 md:space-y-4">
            <Link
              className="btn-primary min-w-[10.6rem] px-5 md:min-w-full"
              href="/sign-up"
            >
              Start With pREWA
            </Link>
            <Link
              className="btn-secondary min-w-[10.6rem] px-5 md:min-w-full"
              href="/contact-us"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Join;
