import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { team } from "@/mocks/team";

type TeamProps = {};

const Team = ({}: TeamProps) => (
  <div id="team" className="section bg-white dark:bg-dark-bg">
    <div className="container">
      <div className="mb-20 xl:mb-16 md:mb-8">
        <div className="stage">Team</div>
        <div className="mb-4 text-h2 dark:text-dark-text-primary">
          Our Dedicated Team & Expertise
        </div>
        <div className="max-w-[46.63rem] text-greyscale-400 dark:text-dark-text-secondary">
          The technology and farming team combines technical expertise with
          authentic farming experience. We understand farming challenges because
          we`ve lived them.
        </div>
      </div>
      <div className="flex flex-wrap -mt-8 -mx-4 md:-mt-6 md:mx-0">
        {team.map((person) => (
          <div
            className="w-[calc(50%-2rem)] mt-8 mx-4 p-16 border border-greyscale-100 dark:border-dark-border bg-greyscale-25 dark:bg-dark-card xl:p-8 lg:p-6 md:w-full md:mt-6 md:mx-0"
            key={person.id}
          >
            <div className="w-18 h-18 mb-8 md:w-14 md:h-14 md:mb-6">
              <Image
                className="w-full h-full object-cover rounded-full opacity-100"
                src={person.avatar}
                width={72}
                height={72}
                alt=""
              />
            </div>
            <div className="mb-4 text-h5 dark:text-dark-text-primary xl:text-h6 md:text-h5">
              {person.name}
            </div>
            <div className="mb-8 text-greyscale-400 dark:text-dark-text-secondary md:mb-6">
              {person.position}
            </div>
            <div className="mb-8 text-greyscale-400 dark:text-dark-text-secondary md:mb-6">
              {person.description}
            </div>
            <a
              className="group inline-flex items-center h-10 pl-5 pr-3 rounded-full bg-greyscale-0 dark:bg-dark-surface shadow-2 text-base font-semibold text-secondary-300 dark:text-dark-text-primary transition-colors hover:text-primary-100 dark:hover:text-primary-100"
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{person.social}
              <Icon
                className="w-5 h-5 ml-1 fill-secondary-300 dark:fill-dark-text-primary transition-colors group-hover:fill-primary-100 dark:group-hover:fill-primary-100"
                name="arrow-right"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Team;
