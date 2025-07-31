import type { NextPage } from "next";
import type { Metadata } from "next";
import HomePage from "@/templates/HomePage";

export const metadata: Metadata = {
  title: "Dharitri - Blockchain for Sustainable Agriculture & Rural Finance",
  description:
    "Join Dharitri's mission to empower smallholder farmers worldwide through blockchain technology. Access fair loans, transparent markets, and regenerative farming solutions with pREWA token.",
  keywords: [
    "blockchain agriculture",
    "sustainable farming",
    "pREWA token",
    "smallholder farmers",
    "regenerative agriculture",
    "rural finance",
    "agricultural blockchain",
    "climate-smart farming",
  ],
  openGraph: {
    title: "Dharitri - Blockchain for Sustainable Agriculture & Rural Finance",
    description:
      "Join Dharitri's mission to empower smallholder farmers worldwide through blockchain technology. Access fair loans, transparent markets, and regenerative farming solutions with pREWA token.",
    url: "https://dharitri.org",
    type: "website",
  },
  twitter: {
    title: "Dharitri - Blockchain for Sustainable Agriculture & Rural Finance",
    description:
      "Join Dharitri's mission to empower smallholder farmers worldwide through blockchain technology. Access fair loans, transparent markets, and regenerative farming solutions with pREWA token.",
  },
  alternates: {
    canonical: "https://dharitri.org",
  },
};

const Home: NextPage = () => {
  return <HomePage />;
};

export default Home;
