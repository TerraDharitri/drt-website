import { useState } from "react";
import AnimateHeight from "react-animate-height";
import Icon from "@/components/Icon";

type ItemType = {
  id: string;
  title: string;
  content: string;
  defaultOpen?: boolean;
};

type FaqItemProps = {
  item: ItemType;
};

const FaqItem = ({ item }: FaqItemProps) => {
  const [height, setHeight] = useState<any>(item.defaultOpen ? "auto" : 0);

  return (
    <div className="p-4 border border-greyscale-100 dark:border-dark-border bg-greyscale-0 dark:bg-dark-card">
      <div
        className="flex justify-between font-semibold cursor-pointer tap-highlight-color transition-colors hover:text-primary-100 dark:hover:text-primary-300 lg:hover:text-greyscale-900 dark:lg:hover:text-dark-text-primary md:text-lg dark:text-dark-text-primary"
        onClick={() => setHeight(height === 0 ? "auto" : 0)}
      >
        {item.title}
        <Icon
          className={`shrink-0 w-5 h-5 mt-1 ml-4 transition-all md:mt-0.75 ${
            height === 0 ? "rotate-0" : "rotate-180"
          }`}
          name="arrow-down"
        />
      </div>
      <AnimateHeight duration={500} height={height}>
        <div className="pt-3 text-lg text-greyscale-400 dark:text-dark-text-secondary">
          {item.content}
        </div>
      </AnimateHeight>
    </div>
  );
};

export default FaqItem;
