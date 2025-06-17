import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const JoinCommunity = () => (
  <div className="section bg-secondary-300 text-greyscale-0">
    <div className="container">
      <div className="text-center mb-16">
        <div className="mb-4 text-h2 xl:text-h3 md:text-h4 text-white">
          Join Our Community & Learn More
        </div>
        <div className="text-white/70 text-lg md:text-base max-w-3xl mx-auto">
          Connect with other supporters, stay updated on development progress,
          and be part of the agricultural blockchain revolution.
        </div>
      </div>

      <div className="flex items-center -mx-20 2xl:-mx-10 xl:-mx-5 lg:block lg:mx-0">
        <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0 lg:mb-10">
          <div className="mb-6 text-h3 xl:text-h4 md:text-h5 text-white">
            Explore More
          </div>
          <div className="mb-8 text-white/70 text-lg md:text-base">
            Discover our comprehensive documentation, learn about our mission,
            and understand how Dharitri is revolutionizing agriculture through
            blockchain technology.
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 mb-8">
            <Link
              className="flex items-center p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              href="/documentation"
            >
              <Icon className="w-6 h-6 mr-3 text-white" name="file-check" />
              <div>
                <div className="text-white font-semibold">Documentation</div>
                <div className="text-white/70 text-sm">
                  Technical guides & API docs
                </div>
              </div>
            </Link>

            <Link
              className="flex items-center p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              href="/about-us"
            >
              <Icon className="w-6 h-6 mr-3 text-white" name="user-circle" />
              <div>
                <div className="text-white font-semibold">About Us</div>
                <div className="text-white/70 text-sm">Our team & mission</div>
              </div>
            </Link>

            <Link
              className="flex items-center p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              href="/problemsAndVision"
            >
              <Icon className="w-6 h-6 mr-3 text-white" name="lightbulb" />
              <div>
                <div className="text-white font-semibold">Our Vision</div>
                <div className="text-white/70 text-sm">Problems we solve</div>
              </div>
            </Link>

            <Link
              className="flex items-center p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              href="/contact-us"
            >
              <Icon className="w-6 h-6 mr-3 text-white" name="chat" />
              <div>
                <div className="text-white font-semibold">Contact</div>
                <div className="text-white/70 text-sm">Get in touch</div>
              </div>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link className="btn-white flex-1" href="/problemsAndVision#b2b">
              <span>Ready to Help Farmers?</span>
              <Icon className="w-5 h-5 ml-2" name="arrow-right" />
            </Link>
            <Link className="btn-outline-white flex-1" href="/get-involved">
              <span>Join Community</span>
              <Icon className="w-5 h-5 ml-2" name="users" />
            </Link>
          </div>
        </div>
        <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0 flex justify-center items-center">
          <Image
            className="w-full h-auto object-contain max-w-[400px] max-h-[300px]"
            src="/images/graphics/pREWA/pREWA/community.svg"
            width={400}
            height={300}
            alt="Join Dharitri community illustration"
          />
        </div>
      </div>
    </div>
  </div>
);

export default JoinCommunity;
