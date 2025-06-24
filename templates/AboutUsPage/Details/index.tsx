import Dividers from "@/components/Dividers";
import Image from "@/components/Image";

const items = [
  {
    title: "Mission Statement",
    content:
      "We provide smallholder farmers with transparent digital solutions. This ecosystem supports regenerative farming and sustainable finance access.",
    image: "images/content/icons/compass-bold.svg",
  },
  {
    title: "Vision Statement",
    content:
      "Every farmer gains tools for economic growth, climate resilience, and planet health. We build a future where farming communities succeed.",
    image: "images/content/icons/sun-horizon-bold.svg",
  },
];

type DetailsProps = {};

const Details = ({}: DetailsProps) => (
  <Dividers className="section">
    <div className="container">
      <div className="stage"></div>
      <div className="mb-20 text-h3 xl:mb-16 xl:text-h4 lg:mb-12 md:mb-8">
        Our Mission & Vision Statement
      </div>
      <div className="flex space-x-10 lg:block lg:space-x-0">
        <div className="flex items-end flex-1">
          <Image
            src="images/graphics/About/About/vision.webp"
            width={500}
            height={500}
            alt=""
          />
        </div>
        <div className="flex-1 lg:mb-6">
          {items.map((item, index) => (
            <div className="group p-8 xl:p-6 lg:p-8" key={index}>
              <div className="flex justify-center items-center w-12 h-12 mb-6  rounded-full bg-[#9FE870]">
                <Image
                  className="w-6 h-6"
                  src={item.image}
                  width={24}
                  height={24}
                  alt=""
                />
              </div>
              <div className="mb-3 text-h6 dark:text-dark-text-primary">
                {item.title}
              </div>
              <div className="text-greyscale-400 dark:text-dark-text-secondary xl:text-lg lg:text-xl">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Dividers>
);

export default Details;
