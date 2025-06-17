"use client";

import { useTheme } from "@/components/ThemeProvider";

interface ClientThemeToggleProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const ClientThemeToggle = ({
  className = "",
  size = "md",
}: ClientThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        ${sizeClasses[size]}
        ${className}
        relative inline-flex items-center justify-center
        rounded-full border transition-all duration-200
        bg-white dark:bg-dark-surface
        border-greyscale-200 dark:border-dark-border
        hover:bg-greyscale-50 dark:hover:bg-dark-card
        hover:border-greyscale-300 dark:hover:border-greyscale-500
        focus:outline-none focus:ring-2 focus:ring-primary-100 focus:ring-offset-2
        dark:focus:ring-offset-dark-bg
        group
      `}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {/* Sun Icon */}
      <svg
        className={`
          ${iconSizes[size]}
          absolute transition-all duration-300 ease-in-out
          fill-greyscale-600 group-hover:fill-greyscale-800
          ${
            theme === "light"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-90 scale-75"
          }
        `}
        viewBox="0 0 24 24"
      >
        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
      </svg>

      {/* Moon Icon */}
      <svg
        className={`
          ${iconSizes[size]}
          absolute transition-all duration-300 ease-in-out
          fill-greyscale-600 dark:fill-dark-text-secondary 
          group-hover:fill-greyscale-800 dark:group-hover:fill-dark-text-primary
          ${
            theme === "dark"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-75"
          }
        `}
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default ClientThemeToggle;
