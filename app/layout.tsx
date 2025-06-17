import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter_Tight({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "block",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dharitri",
  description: "Finance Website Coded Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Description no longer than 155 characters */}
        <meta
          name="description"
          content="Dharitri - Finance Website Coded Template"
        />
        {/* Product Name */}
        <meta
          name="product-name"
          content="Dharitri - Finance Website Coded Template"
        />

        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ui8" />
        <meta
          name="twitter:title"
          content="Dharitri - Finance Website Coded Template"
        />
        <meta
          name="twitter:description"
          content="Premium Finance Website Template"
        />
        <meta name="twitter:creator" content="@ui8" />
        {/* Twitter Summary card images must be at least 120x120px */}
        <meta name="twitter:image" content="%PUBLIC_URL%/twitter-card.png" />

        {/* Open Graph data for Facebook */}
        <meta
          property="og:title"
          content="Dharitri - Finance Website Coded Template"
        />
        <meta property="og:type" content="Article" />
        <meta
          property="og:url"
          content="https://ui8.net/unpixel/products/finto---finance-website-coded-template"
        />
        <meta property="og:image" content="%PUBLIC_URL%/fb-og-image.png" />
        <meta
          property="og:description"
          content="Premium Finance Website Template"
        />
        <meta
          property="og:site_name"
          content="Dharitri - Finance Website Coded Template"
        />
        <meta property="fb:admins" content="132951670226590" />

        {/* Open Graph data for LinkedIn */}
        <meta
          property="og:title"
          content="Dharitri - Finance Website Coded Template"
        />
        <meta
          property="og:url"
          content="https://ui8.net/unpixel/products/finto---finance-website-coded-template"
        />
        <meta
          property="og:image"
          content="%PUBLIC_URL%/linkedin-og-image.png"
        />
        <meta
          property="og:description"
          content="Premium Finance Website Template"
        />

        {/* Open Graph data for Pinterest */}
        <meta
          property="og:title"
          content="Dharitri - Finance Website Coded Template"
        />
        <meta
          property="og:url"
          content="https://ui8.net/unpixel/products/finto---finance-website-coded-template"
        />
        <meta
          property="og:image"
          content="%PUBLIC_URL%/pinterest-og-image.png"
        />
        <meta
          property="og:description"
          content="Premium Finance Website Template"
        />
      </head>
      <body
        className={`${inter.variable} bg-white dark:bg-dark-bg font-sans text-xl text-greyscale-900 dark:text-dark-text-primary antialiased transition-colors duration-200`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
