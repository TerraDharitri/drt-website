"use client";

import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Link from "next/link";
import Image from "@/components/Image";
import ThemeToggle from "@/components/ThemeToggle";

import { navigationHeader } from "@/constants/navigation";

type HeaderProps = {
  className?: string;
  dark?: boolean;
};

const Header = ({ className, dark }: HeaderProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleMenu = () => {
    setVisible(!visible);
    if (visible) {
      enablePageScroll();
    } else {
      disablePageScroll();
    }
  };

  const closeMenu = () => {
    setVisible(false);
    enablePageScroll();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-20 border-b transition-colors duration-200 ${
        className || ""
      } ${
        dark
          ? "bg-secondary-300 border-white/[.09]"
          : "bg-white dark:bg-dark-surface border-greyscale-200/60 dark:border-dark-border"
      }`}
    >
      <div className="container-md flex items-center h-22 md:h-18">
        <Link className="shrink-0 flex items-center mr-12 lg:mr-auto" href="/">
          <Image
            className="w-7 opacity-100"
            src={
              dark
                ? "/images/graphics/Logo/Logo/Dharitri Logo Light.svg"
                : "/images/graphics/Logo/Logo/Dharitri Logo dark.svg"
            }
            width={38}
            height={38}
            alt="Dharitri"
          />
          <span
            className={`ml-2 text-2xl font-bold transition-colors ${
              dark
                ? "text-greyscale-0"
                : "text-greyscale-900 dark:text-dark-text-primary"
            }`}
          >
            Dharitri
          </span>
        </Link>
        <div
          className={`flex items-center grow lg:fixed lg:top-0 lg:right-0 lg:bottom-0 lg:z-10 lg:w-80 lg:flex-col lg:items-stretch lg:py-20 lg:px-8 lg:pb-8 lg:transition-transform lg:translate-x-full ${
            visible ? "!translate-x-0" : ""
          } ${
            dark
              ? "lg:bg-secondary-300"
              : "lg:bg-greyscale-0 dark:lg:bg-dark-surface"
          }`}
        >
          <nav className="flex items-center space-x-4 lg:flex-col lg:items-stretch lg:space-x-0 lg:space-y-8">
            {navigationHeader.map((link) => (
              <Link
                className={`px-2.5 py-1 text-base font-medium transition-colors lg:text-xl ${
                  dark
                    ? "text-greyscale-0 hover:text-primary-300"
                    : "text-greyscale-900 dark:text-dark-text-primary hover:text-primary-100 dark:hover:text-primary-300"
                }`}
                href={link.url}
                key={link.id}
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <div className="flex items-center ml-auto space-x-3 lg:mt-auto lg:ml-0">
            <ThemeToggle size="sm" />
            {/* <Link
                            className={`btn-secondary bg-transparent btn-sm ${
                                dark
                                    ? "text-greyscale-0 hover:border-primary-300 hover:bg-primary-300 hover:text-greyscale-900"
                                    : ""
                            }`}
                            href="/sign-in"
                        >
                            Sign In
                        </Link> */}
            <Link 
              href="https://prewa.dharitri.org/?ref=dharitri.org&utm_source=site&utm_medium=cta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get pREWA Tokens (opens in a new tab)"
              className="btn-primary btn-sm"
              >
              Get pREWA Tokens
            </Link>
          </div>
        </div>
        <button
          className={`hidden relative z-20 flex-col justify-center items-start w-6 h-6 tap-highlight-color before:w-5 before:h-0.5 before:rounded-full before:transition-all after:w-5 after:h-0.5 after:rounded-full after:transition-all lg:flex ${
            visible
              ? "before:rotate-45 before:translate-y-[0.37rem] after:-rotate-45 after:-translate-y-[0.37rem]"
              : ""
          } ${
            dark
              ? "before:bg-greyscale-0 after:bg-greyscale-0"
              : "before:bg-greyscale-900 after:bg-greyscale-900 dark:before:bg-greyscale-0 dark:after:bg-greyscale-0"
          }`}
          onClick={toggleMenu}
        >
          <span
            className={`w-5 h-0.5 my-1 rounded-full transition-all ${
              visible ? "w-0 opacity-0" : ""
            } ${
              dark ? "bg-greyscale-0" : "bg-greyscale-900 dark:bg-greyscale-0"
            }`}
          ></span>
        </button>
      </div>
      <div
        className={`hidden fixed inset-0 z-5 bg-greyscale-900/90 lg:block lg:invisible lg:opacity-0 lg:transition-all ${
          visible ? "lg:!visible lg:!opacity-100" : ""
        }`}
        onClick={closeMenu}
      ></div>
    </header>
  );
};

export default Header;
