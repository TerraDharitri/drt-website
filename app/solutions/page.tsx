import type { NextPage } from "next";
import type { Metadata } from "next";
import SolutionsPage from "@/templates/SolutionsPage";

export const metadata: Metadata = {
  title: "Dharitri Solutions - Blockchain Technology for Agriculture",
  description:
    "Explore Dharitri's comprehensive blockchain solutions for agriculture: smart contracts for fair loans, transparent supply chains, carbon credit tracking, and regenerative farming incentives for smallholder farmers.",
  keywords: [
    "agricultural blockchain solutions",
    "smart contracts farming",
    "agricultural supply chain",
    "carbon credit blockchain",
    "farming loans",
    "regenerative agriculture technology",
    "agricultural finance solutions",
  ],
  openGraph: {
    title: "Dharitri Solutions - Blockchain Technology for Agriculture",
    description:
      "Explore Dharitri's comprehensive blockchain solutions for agriculture: smart contracts for fair loans, transparent supply chains, carbon credit tracking, and regenerative farming incentives for smallholder farmers.",
    url: "https://dharitri.org/solutions",
    type: "website",
  },
  twitter: {
    title: "Dharitri Solutions - Blockchain Technology for Agriculture",
    description:
      "Explore Dharitri's comprehensive blockchain solutions for agriculture: smart contracts for fair loans, transparent supply chains, carbon credit tracking, and regenerative farming incentives for smallholder farmers.",
  },
  alternates: {
    canonical: "https://dharitri.org/solutions",
  },
};

const Solutions: NextPage = () => {
  return <SolutionsPage />;
};

export default Solutions;
