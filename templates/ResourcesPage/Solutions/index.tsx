import Icon from "@/components/Icon";
import Image from "@/components/Image";
import Link from "next/link";

const items = [
  {
    title: "Dharitri Project Roadmap",
    content:
      "Complete regenerative farming vision with development phases, blockchain technology foundation, and smallholder farmers support goals.",
    icon: "/images/content/icons/wallet.svg",
    spanText: "View Our Roadmap",
  },
  {
    title: "Transparency & Trust",
    content:
      "Technical agricultural blockchain architecture, pREWA and REWA tokenomics, ecosystem model, and financial inclusion approach details.",
    icon: "/images/content/icons/coins-stacked.svg",
    spanText: "Download White Paper",
  },
];

type SolutionsProps = {};

const Solutions = ({}: SolutionsProps) => (
  <div className="pt-30 pb-22 xl:pt-24 xl:pb-20 md:py-12 bg-white dark:bg-dark-bg">
    <div className="container">
      <div className="mb-15 text-left">
        <h2 className="text-h2 xl:text-h3 md:text-h4 font-semibold mb-6 dark:text-dark-text-primary">
          Essential Platform Documentation
        </h2>
        <p className="mt-4 max-w-3xl mx-0 text-greyscale-400 dark:text-dark-text-secondary text-lg md:text-base">
          Access key platform documentation for complete understanding of our
          blockchain vision and agritech development strategy.
        </p>
      </div>
      <div className="grid gap-8 grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
        {items.map((item, index) => (
          <div
            className="p-6 bg-greyscale-0 dark:bg-dark-card border border-greyscale-100 dark:border-dark-border shadow-2"
            key={index}
          >
            <div className="mb-3 text-h5 dark:text-dark-text-primary">
              {item.title}
            </div>
            <div className="text-greyscale-400 dark:text-dark-text-secondary">
              {item.content}
            </div>
            <Link
              className="btn-primary inline-flex items-center mt-6 px-6 py-3 pr-5 md:w-full"
              href="/problemsAndVision#b2b"
            >
              <span>{item.spanText}</span>
              <Icon className="w-5 h-5" name="arrow-right" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Solutions;
