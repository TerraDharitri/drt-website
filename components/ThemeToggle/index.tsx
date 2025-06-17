import dynamic from "next/dynamic";

// Dynamically import the client component to avoid SSR issues
const ClientThemeToggle = dynamic(() => import("./ClientThemeToggle"), {
  ssr: false,
  loading: () => (
    <div className="w-8 h-8 rounded-full border border-greyscale-200 bg-white animate-pulse" />
  ),
});

interface ThemeToggleProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const ThemeToggle = (props: ThemeToggleProps) => {
  return <ClientThemeToggle {...props} />;
};

export default ThemeToggle;
