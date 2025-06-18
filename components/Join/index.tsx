import Link from "next/link";

type JoinProps = {};

const Join = ({}: JoinProps) => (
  <div className="py-10">
    <div className="container-md">
      <div className="p-20 bg-secondary-300 rounded-lg lg:px-12 md:px-4 md:py-12">
        <div className="max-w-[50rem] mx-auto text-center xl:max-w-[46rem]">
          <div className="mb-4 text-h2  text-white xl:text-h2 md:text-h4">
            pREWA:
            Supporting
            Farmers
          </div>
          <div className="mb-10 mx-auto max-w-[40rem] text-start text-white/70 md:mb-8 md:px-1">
            The pREWA token funds farmer support. It offers staking rewards to
            early investors.<br/> Your investment helps farmers get better tools.
            <br />
            <br />
            This early token opportunity bridges to our REWA token on our
            Proof-of-Stake <br/>L1 blockchain.
          </div>
          <div className="flex justify-center space-x-4 md:block md:space-x-0 md:space-y-4">
            <Link
              className="btn-primary min-w-[10.6rem] px-5 md:min-w-full"
              href="/sign-up"
            >
              Get pREWA Tokens
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Join;
