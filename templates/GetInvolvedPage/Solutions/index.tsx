import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Dividers from "@/components/Dividers";

const solutions = [
  {
    title: "Join Dharitri's Mission: Create Real Impact for Farmers",
    stage: "",
    content: "",
    subtitle:
      "Together, we can transform agriculture through blockchain technology and create lasting change for farming communities worldwide.",
    image: "images/graphics/Get Involved/Get Involved/join us.webp",
    url: "/problemsAndVision#b2b",
  },
  {
    title: "Join Our Farmer-Focused Mission",
    stage: "",
    content: [
      "Dharitri builds blockchain solutions that directly help smallholder farmers succeed. We believe in working together to create real change.",
      "Three key ways to contribute exist. Investors can fund our mission, partners can collaborate on solutions, and community members can spread our regenerative farming message.",
      "Join us in building tools that make farming communities stronger worldwide.",
    ],
    image: "images/graphics/Get Involved/Get Involved/tractor.webp",
    url: "/solutions#microfinance",
  },
  {
    title: "For Investors: Support Our Vision",
    stage: "",
    content: [
      "Ready to invest in digital solutions for smallholder farmers? Our pREWA token sale funds platform development and farmer services launch.",
      "We welcome investors of all sizes who want to create real change. Your investment directly supports agricultural innovation technology and financial inclusion for farming communities.",
      "Learn more through our project documentation or connect directly with our team.",
    ],
    image: "images/graphics/Get Involved/Get Involved/balance.svg",
    url: "/solutions#investors",
  },
  {
    title: "For Partners: Collaborate & Impact",
    stage: "",
    content: [
      "Dharitri seeks partners committed to smallholder farmers and sustainable agriculture. Together, we can build technology solutions that create lasting change.",
      "We welcome NGOs, financial institutions, and technology organizations. Each partnership strengthens our agritech platform while expanding your impact with farming communities.",
      "Ready to explore collaboration? Share your organization's goals and discover partnership opportunities.",
    ],
    image: "images/graphics/Get Involved/Get Involved/partner.svg",
    url: "/solutions#partners",
  },
  {
    title: "For Community: Join the Movement",
    stage: "",
    content: [
      "Connect with supporters passionate about sustainable agriculture and digital innovation for farmers. Join advocates building real change.",
      "Follow us on Telegram, Discord, and X for project updates and discussions.",
      "For general questions, feedback, or if you're unsure where to start, reach out directly.",
    ],
    image: "images/graphics/Get Involved/Get Involved/join community.svg",
    url: "/solutions#community",
  },
];

type SolutionsProps = {};

const Solutions = ({}: SolutionsProps) => (
  <div>
    {/* Hero Section */}
    <Dividers className="bg-white text-greyscale-900" hero>
      <div className="py-22 md:pt-12 md:pb-6">
        <div className="container">
          <div className="flex items-center mb-22 lg:block md:mb-6">
            <div className="basis-[70%] pr-10 lg:pr-0">
              <div className="mb-4 text-h1 xl:text-h2 md:text-h3">
                {solutions[0].title}
              </div>
              <div className="mb-10 text-greyscale-600 md:text-lg">
                {solutions[0].subtitle}
              </div>
            </div>
            <div className="basis-[30%] flex justify-center lg:mt-16 md:mt-8">
              <Image
                className="w-full max-w-[400px] h-auto"
                src={solutions[0].image}
                width={400}
                height={400}
                alt="Join Dharitri's mission to help farmers"
              />
            </div>
          </div>
        </div>
      </div>
    </Dividers>

    {/* Regular Sections */}
    <div className="section">
      <div className="container">
        <div className="space-y-20 xl:space-y-24 lg:space-y-20 md:space-y-12 pt-20">
          {solutions.slice(1).map((solution, index) => (
            <div
              className="flex items-center -mx-20 even:flex-row-reverse 2xl:-mx-10 xl:-mx-5 lg:block lg:mx-0"
              key={index + 1}
            >
              <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0 lg:mb-10">
                <div className="stage">{solution.stage}</div>
                <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
                  {solution.title}
                </div>
                <ul className="mb-12 list-disc list-inside text-greyscale-400 md:mb-6 md:text-lg space-y-2">
                  {(() => {
                    const items = [];
                    for (let i = 0; i < solution.content.length; i++) {
                      items.push(
                        <p className="pb-4" key={i}>
                          {solution.content[i]}
                        </p>
                      );
                    }
                    return items;
                  })()}
                </ul>
                {/* Add buttons for the last three sections */}
                {index >= 1 && (
                  <Link
                    className="btn-primary pr-5 md:w-full"
                    href={solution.url}
                  >
                    <span>
                      {index === 1 && "Investor Form"}
                      {index === 2 && "Partnership Form"}
                      {index === 3 && "Contact Form"}
                    </span>
                    <Icon className="w-5 h-5" name="arrow-right" />
                  </Link>
                )}
              </div>
              <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0">
                <Image
                  className="w-[70%] h-[70%]"
                  src={solution.image}
                  width={500}
                  height={450}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Solutions;
