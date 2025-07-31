import type { NextPage } from "next";
import type { Metadata } from "next";
import AboutUsPage from "@/templates/AboutUsPage";

export const metadata: Metadata = {
  title: "About Dharitri - Our Mission to Transform Agriculture",
  description:
    "Learn about Dharitri's mission to empower smallholder farmers through blockchain technology. Discover our regenerative agriculture initiatives, carbon credit programs, and commitment to sustainable farming in Kenya and beyond.",
  keywords: [
    "about dharitri",
    "regenerative agriculture",
    "smallholder farmers",
    "blockchain mission",
    "sustainable agriculture",
    "carbon credits",
    "Kenya agriculture",
    "agricultural innovation",
  ],
  openGraph: {
    title: "About Dharitri - Our Mission to Transform Agriculture",
    description:
      "Learn about Dharitri's mission to empower smallholder farmers through blockchain technology. Discover our regenerative agriculture initiatives, carbon credit programs, and commitment to sustainable farming in Kenya and beyond.",
    url: "https://dharitri.org/about-us",
    type: "website",
  },
  twitter: {
    title: "About Dharitri - Our Mission to Transform Agriculture",
    description:
      "Learn about Dharitri's mission to empower smallholder farmers through blockchain technology. Discover our regenerative agriculture initiatives, carbon credit programs, and commitment to sustainable farming in Kenya and beyond.",
  },
  alternates: {
    canonical: "https://dharitri.org/about-us",
  },
};

const AboutUs: NextPage = () => {
  return <AboutUsPage />;
};

export default AboutUs;
