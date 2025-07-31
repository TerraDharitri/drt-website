import type { NextPage } from "next";
import type { Metadata } from "next";
import PREWAPage from "@/templates/pREWAPage";

export const metadata: Metadata = {
  title: "pREWA Token - Funding Sustainable Agriculture on Dharitri",
  description:
    "Discover pREWA token - Dharitri's utility token powering regenerative agriculture projects. Learn how to buy, stake, and participate in funding sustainable farming initiatives. Available on PancakeSwap.",
  keywords: [
    "pREWA token",
    "agricultural token",
    "blockchain farming",
    "sustainable agriculture token",
    "PancakeSwap",
    "stake pREWA",
    "regenerative farming investment",
    "agricultural finance",
  ],
  openGraph: {
    title: "pREWA Token - Funding Sustainable Agriculture on Dharitri",
    description:
      "Discover pREWA token - Dharitri's utility token powering regenerative agriculture projects. Learn how to buy, stake, and participate in funding sustainable farming initiatives. Available on PancakeSwap.",
    url: "https://dharitri.org/pREWA",
    type: "website",
  },
  twitter: {
    title: "pREWA Token - Funding Sustainable Agriculture on Dharitri",
    description:
      "Discover pREWA token - Dharitri's utility token powering regenerative agriculture projects. Learn how to buy, stake, and participate in funding sustainable farming initiatives. Available on PancakeSwap.",
  },
  alternates: {
    canonical: "https://dharitri.org/pREWA",
  },
};

const pREWA: NextPage = () => {
  return <PREWAPage />;
};

export default pREWA;
