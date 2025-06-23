"use client";

import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { navigationFooter } from "@/constants/navigation";
import { socials } from "@/constants/socials";

type FooterProps = {};

const Footer = ({}: FooterProps) => (
  <div className="mt-auto py-16 md:pt-12 md:pb-6 bg-white dark:bg-dark-bg">
    <div className="container">
      <div className="flex mb-18 lg:block lg:mb-14 md:mb-8">
        <Link
          className="shrink-0 flex items-center mr-auto lg:mb-12 md:mb-8"
          href="/"
        >
          <Image
            className="w-7 opacity-100"
            src="images/graphics/Logo/Logo/Dharitri Logo dark.svg"
            width={38}
            height={38}
            alt="Dharitri"
          />
          <span className="ml-2 text-2xl font-bold transition-colors text-greyscale-900 dark:text-dark-text-primary">
            Dharitri
          </span>
        </Link>
        <div className="flex w-full max-w-[50rem] 3xl:max-w-[45.625rem] lg:max-w-full md:flex-wrap md:-mt-5">
          {navigationFooter.map((group) => (
            <div
              className="grow pr-8 text-lg font-medium last:pr-0 md:w-1/2 md:mt-5 md:pr-5"
              key={group.id}
            >
              <Link
                className="inline-block mb-4 text-[#666D80] dark:text-dark-text-secondary transition-colors hover:text-primary-100 dark:hover:text-primary-300 md:mb-2 md:text-base"
                href={group.url}
              >
                {group.title}
              </Link>
              <div className="flex flex-col items-start space-y-3">
                {group.links.map((link) => (
                  <Link
                    className="transition-colors hover:text-primary-100 dark:hover:text-primary-300 dark:text-dark-text-primary md:text-base"
                    href={link.url}
                    key={link.id}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center md:block md:pt-8 md:border-t md:border-greyscale-200 dark:md:border-dark-border">
        <div className="flex items-center text-lg text-[#666D80] dark:text-dark-text-secondary md:justify-center md:mb-4">
          <Icon className="w-5 h-5 mr-1 fill-[#666D80]" name="copyright" />
          2025 Dharitri. All right reserved
        </div>
        <div className="flex space-x-4 md:justify-center">
          {socials.map((social) => (
            <a
              className="group text-0"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              key={social.id}
            >
              <Icon
                className="fill-[#666D80] transition-colors group-hover:fill-primary-100 md:w-5 md:h-5"
                name={social.icon}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
