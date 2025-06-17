import Image from "@/components/Image";

import { companies } from "@/mocks/companies";

type CompaniesProps = {};

const Companies = ({}: CompaniesProps) => (
  <div className="section bg-white dark:bg-dark-bg">
    <div className="container">
      <div className="flex flex-wrap -mt-8 -mx-4 xl:-mt-6 xl:-mx-3 md:mx-0">
        {companies.map((item) => (
          <div
            className="w-[calc(33.333%-2rem)] mt-8 mx-4 p-6 bg-greyscale-0 dark:bg-dark-card border border-greyscale-100 dark:border-dark-border shadow-2 xl:w-[calc(33.333%-1.5rem)] xl:mt-6 xl:mx-3 lg:w-[calc(50%-1.5rem)] md:w-full md:mx-0"
            key={item.id}
          >
            <div className="w-12 h-12 mb-6 rounded-full shadow-[0_0.125rem_0.25rem_0_rgba(13,13,18,0.12)]">
              <Image
                className="w-full h-full rounded-full object-cover opacity-100"
                src={item.image}
                width={48}
                height={48}
                alt=""
              />
            </div>
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

export default Companies;
