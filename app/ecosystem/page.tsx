import type { NextPage } from "next";
import type { Metadata } from "next";
import EcosystemPage from "@/templates/EcosystemPage";

export const metadata: Metadata = {
  title: "Dharitri Ecosystem - Connected Platform for Sustainable Agriculture",
  description:
    "Explore the Dharitri ecosystem connecting farmers, cooperatives, and financial institutions through blockchain technology. Discover our integrated platform for regenerative agriculture and rural finance.",
  keywords: [
    "dharitri ecosystem",
    "agricultural platform",
    "farmer network",
    "blockchain ecosystem",
    "sustainable agriculture platform",
    "rural finance network",
    "agricultural cooperatives",
  ],
  openGraph: {
    title:
      "Dharitri Ecosystem - Connected Platform for Sustainable Agriculture",
    description:
      "Explore the Dharitri ecosystem connecting farmers, cooperatives, and financial institutions through blockchain technology. Discover our integrated platform for regenerative agriculture and rural finance.",
    url: "https://dharitri.org/ecosystem",
    type: "website",
  },
  twitter: {
    title:
      "Dharitri Ecosystem - Connected Platform for Sustainable Agriculture",
    description:
      "Explore the Dharitri ecosystem connecting farmers, cooperatives, and financial institutions through blockchain technology. Discover our integrated platform for regenerative agriculture and rural finance.",
  },
  alternates: {
    canonical: "https://dharitri.org/ecosystem",
  },
};

const Ecosystem: NextPage = () => {
  return <EcosystemPage />;
};

export default Ecosystem;
