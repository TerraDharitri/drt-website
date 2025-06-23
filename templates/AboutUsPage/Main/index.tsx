import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const solutions = [
  {
    title: "Meet Dharitri: Our Mission & Vision for Farmers",
    stage: "",
    content:
      "Our farming backgrounds, technical expertise, and farmer-first mission.",
    image: "images/graphics/About/About/dharitri mission.webp",
    url: "/problemsAndVision#b2b",
  },
];

type MainProps = {};

const Main = ({}: MainProps) => (
  <div className="section">
    <div className="container">
      <div className="space-y-20 xl:space-y-24 lg:space-y-20 md:space-y-12 pt-20">
        {solutions.map((solution, index) => (
          <div
            className="flex items-center -mx-20 even:flex-row-reverse 2xl:-mx-10 xl:-mx-5 lg:block lg:mx-0"
            key={index}
          >
            <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0 lg:mb-10">
              <div className="stage">{solution.stage}</div>
              <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
                {solution.title}
              </div>
              <div className="mb-12 text-greyscale-400 md:mb-6 md:text-lg">
                {solution.content}
              </div>
            </div>
            <div className="w-[calc(50%-5rem)] mx-20 2xl:w-[calc(50%-2.5rem)] 2xl:mx-10 xl:w-[calc(50%-1.25rem)] xl:mx-5 lg:w-full lg:mx-0">
              <Image
                className="w-full"
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
);

export default Main;
