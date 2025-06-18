"use client";

import Layout from "@/components/Layout";
import Hero from "./Hero";
import WhatIsPREWA from "./WhatIsPREWA";
import PlatformLaunchFund from "./PlatformLaunchFund";
import TokenSaleProceeds from "./TokenSaleProceeds";
import StakePREWA from "./StakePREWA";
import BridgeToNativeREWA from "./BridgeToNativeREWA";
import HowToBuyPREWA from "./HowToBuyPREWA";
import ContractAddress from "./ContractAddress";
import KeyRisksWarnings from "./KeyRisksWarnings";
import JoinCommunity from "./JoinCommunity";
import ReadyToHelp from "./ReadyToHelp";

const pREWAPage = () => {
  return (
    <Layout darkHeader>
      <Hero />
      <WhatIsPREWA />
      <PlatformLaunchFund />
      <TokenSaleProceeds />
      <StakePREWA />
      <BridgeToNativeREWA />
      <HowToBuyPREWA />
      <ContractAddress />
      <KeyRisksWarnings />
      <JoinCommunity />
      <ReadyToHelp />
    </Layout>
  );
};

export default pREWAPage;
