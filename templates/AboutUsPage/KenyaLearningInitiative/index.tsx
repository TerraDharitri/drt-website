import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const solutions = [
  {
    title: "Kenya Learning Initiative",
    stage: "",
    content: [
      "We're starting our journey in Kenya, working directly with farming communities. This hands-on approach helps us test agritech solutions and gather real smallholder farmers feedback.",
      "Local partnerships guide our sustainable farming development. We ensure every tool works for actual farming challenges before expanding our agritech platform.",
    ],
    image: "/images/graphics/About/About/kenya.webp",
    url: "/problemsAndVision#b2b",
  },
  {
    title: "Our Authentic & Grounded Focus",
    stage: "",
    content: [
      "We build real solutions for smallholder farmers, not just technology for technology's sake. This approach prioritizes practical value and honest farming communication.",
      "Every decision reflects our commitment to sustainable farming and ethical producer support. This authentic foundation builds trust with farming communities worldwide.",
    ],
    image: "/images/graphics/About/About/authentic.webp",
    url: "/solutions#microfinance",
  },
];

type KenyaLearningInitiativeProps = {};

const KenyaLearningInitiative = ({}: KenyaLearningInitiativeProps) => (
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
              <ul className="mb-12 list-disc list-inside text-greyscale-400 md:mb-6 md:text-lg space-y-2">
                {(() => {
                  const items = [];
                  for (let i = 0; i < solution.content.length; i++) {
                    items.push(<p key={i}>{solution.content[i]}</p>);
                  }
                  return items;
                })()}
              </ul>
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

export default KenyaLearningInitiative;
