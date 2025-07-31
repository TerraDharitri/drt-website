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
  metadataBase: new URL("https://dharitri.org"),
  title: {
    default:
      "Dharitri - Empowering smallholder farmers through blockchain technology",
    template: "%s | Dharitri",
  },
  description:
    "Dharitri is a purpose-built Layer 1 blockchain powering sustainability projects worldwide. We empower communities to protect ecosystems, transition to regenerative agriculture, and access fair financial services.",
  keywords: [
    "blockchain agriculture",
    "regenerative farming",
    "smallholder farmers",
    "sustainable agriculture",
    "pREWA token",
    "climate-smart agriculture",
    "rural finance",
    "carbon credits",
    "agroforestry",
    "agricultural blockchain",
  ],
  authors: [{ name: "Dharitri Team" }],
  creator: "Dharitri",
  publisher: "Dharitri",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dharitri.org",
    siteName: "Dharitri",
    title:
      "Dharitri - Empowering smallholder farmers through blockchain technology",
    description:
      "Dharitri is a purpose-built Layer 1 blockchain powering sustainability projects worldwide. We empower communities to protect ecosystems, transition to regenerative agriculture, and access fair financial services.",
  },
  twitter: {
    card: "summary",
    site: "@Dharitri_Block",
    creator: "@Dharitri_Block",
    title:
      "Dharitri - Empowering smallholder farmers through blockchain technology",
    description:
      "Dharitri is a purpose-built Layer 1 blockchain powering sustainability projects worldwide. We empower communities to protect ecosystems, transition to regenerative agriculture, and access fair financial services.",
  },

  alternates: {
    canonical: "https://dharitri.org",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://dharitri.org" />
        <meta
          name="google-site-verification"
          content="verification_token_here"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Dharitri",
              description:
                "Dharitri is a purpose-built Layer 1 blockchain powering sustainability projects worldwide. We empower communities to protect ecosystems, transition to regenerative agriculture, and access fair financial services.",
              url: "https://dharitri.org",
              logo: "https://dharitri.org/favicon.ico",
              sameAs: [
                "https://x.com/Dharitri_Block",
                "https://www.linkedin.com/company/dharitrix/",
                "https://t.me/DharitriChain",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "hello@dharitri.org",
              },
              founder: {
                "@type": "Organization",
                name: "Dugong Global Services",
              },
              industry: "Blockchain Technology",
              keywords:
                "blockchain agriculture, regenerative farming, smallholder farmers, sustainable agriculture, pREWA token",
            }),
          }}
        />

        {/* Tally Forms Script */}
        <script async src="https://tally.so/widgets/embed.js"></script>
      </head>
      <body
        className={`${inter.variable} bg-white dark:bg-dark-bg font-sans text-xl text-greyscale-900 dark:text-dark-text-primary antialiased transition-colors duration-200`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
