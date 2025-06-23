import Image from "@/components/Image";

const items = [
  {
    title: "Regenerative Finance (ReFi)",
    content:
      "Sustainable finance using blockchain technology to fund projects that restore natural systems and communities.",
    icon: "images/content/icons/coins-stacked.svg",
  },
  {
    title: "Blockchain Sharding",
    content:
      "Scalable blockchain technique dividing network processing into smaller parts. Core MultiversX foundation feature.",
    icon: "images/content/icons/trophy.svg",
  },
  {
    title: "Carbon Credits for Farmers",
    content:
      " Financial payments for farming practices removing greenhouse gases. Regenerative agriculture can generate these valuable credits.",
    icon: "images/content/icons/trophy.svg",
  },
  {
    title: "Climate Smart Agriculture",
    content:
      " Farming methods boosting productivity while building climate resilience and reducing harmful environmental impacts.",
    icon: "images/content/icons/trophy.svg",
  },
  {
    title: "Regenerative Agriculture",
    content:
      "Farming practices healing soil health, increasing biodiversity, and improving ecosystem function for sustainability.",
    icon: "images/content/icons/trophy.svg",
  },
  {
    title: "Smallholder Farmers",
    content:
      "Farmers cultivating small plots under 2 hectares using family labor. Dharitri's core solution focus.",
    icon: "images/content/icons/trophy.svg",
  },
];

type TermsAndConditionsProps = {};

const TermsAndConditions = ({}: TermsAndConditionsProps) => (
  <div className="pt-30 pb-22 xl:pt-24 xl:pb-20 md:py-12 bg-white dark:bg-dark-bg">
    <div className="container">
      <div className="mb-15 text-center border-b-[4px]">
        <h2 className="text-h2 xl:text-h3 md:text-h4 font-semibold mb-6 dark:text-dark-text-primary">
          Dharitri Terms & Key Definitions
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base pb-10">
          Key terms from blockchain, sustainable agriculture, and financial
          inclusion that help explain our agritech solutions.
        </p>
      </div>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
        {items.map((item, index) => (
          <div
            className="p-6 bg-greyscale-0 dark:bg-dark-card border border-greyscale-100 dark:border-dark-border shadow-2"
            key={index}
          >
            {/* <div className="flex justify-center items-center w-12 h-12 mb-6 rounded-full bg-secondary-0">
                <Image
                    src={item.icon}
                    className="w-6"
                    width={24}
                    height={24}
                    alt=""
                />
            </div> */}
            <div className="mb-3 text-h6 dark:text-dark-text-primary">
              {item.title}
            </div>
            <div className="text-greyscale-400 dark:text-dark-text-secondary">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TermsAndConditions;
