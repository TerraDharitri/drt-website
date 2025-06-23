import { LegalDocument, RiskWarning, ContactInfo } from "../types/legal";

export const stakingTermsDocument: LegalDocument = {
  title: "pREWA Staking Terms and Conditions",
  lastUpdated: "June 19, 2025",
  sections: [
    {
      title: "Preamble/Introduction",
      content: `Welcome to the Dharitri pREWA Staking Program (the "Staking Program") offered by Dugong Global Services Pvt Ltd, a company registered in India (hereinafter referred to as "Dugong," "the Company," "we," "us," or "our"), via the website stake.dharitri.org (the "Staking Platform"). The Staking Program is associated with the project known as "Dharitri."`,
    },
    {
      title: "Terms Agreement",
      content: `These Staking Terms and Conditions ("Staking Terms") govern your participation in the Staking Program. By connecting your wallet, depositing pREWA tokens into the designated staking smart contract, or otherwise participating in the Staking Program, you ("User," "you," "your") acknowledge that you have read, understood, and agree to be bound by these Staking Terms, as well as the main Dharitri Website Terms of Service [Link to Main Terms of Service] ("Main ToS") and Privacy Policy [Link to Privacy Policy] ("Privacy Policy"), which are incorporated herein by reference where applicable.`,
    },
    {
      title: "Important Notice on Staking Parameters",
      content: `Specific operational parameters of the Staking Program, including but not limited to, current estimated Annual Percentage Yield (APY), minimum staking amounts, any applicable lock-up periods, rules and amounts for early unstaking penalties, and reward distribution frequencies ("Operational Parameters") will be displayed on the Staking Platform interface. Rates may change between wallet confirmation and transaction settlement. By initiating a staking transaction, you acknowledge and agree to the Operational Parameters that are in effect and clearly displayed on the Staking Platform at the time of your staking transaction.`,
    },
    {
      title: "1. Eligibility",
      items: [
        "You must meet the eligibility requirements set forth in the Main ToS (e.g., be at least 18 years of age or the age of legal majority in your jurisdiction).",
        "You are solely responsible for ensuring that your participation in the Staking Program is lawful in your jurisdiction. Dugong makes no representation or warranty regarding the legality of the Staking Program in any specific jurisdiction.",
        "Kenya Regulatory Notice: The Capital Markets Authority Kenya has not approved pREWA staking programs and warns that crypto assets are high-risk products. Kenyan residents should exercise extreme caution and verify legal compliance before participating.",
        "You must possess a compatible BEP20 wallet (e.g., MetaMask, Trust Wallet) and have a sufficient balance of pREWA tokens for staking and BNB tokens to cover any applicable Binance Smart Chain transaction fees (gas fees).",
      ],
    },
    {
      title: "2. The Staking Program",
      subsections: [
        {
          title: "Nature of Staking",
          content:
            "Staking involves you voluntarily locking your pREWA tokens in the official pREWA staking smart contract on the Binance Smart Chain to support the Dharitri ecosystem. In return for successfully staking your tokens according to the displayed Operational Parameters and these Staking Terms, you may be eligible to earn pREWA rewards.",
        },
        {
          title: "No Guarantee of Rewards",
          content:
            "Rewards are not guaranteed. APY is an estimate and can fluctuate significantly based on various factors (e.g., total tokens staked, reward pool dynamics, network conditions, or other mechanisms determined by Dugong). Historical or estimated parameters (e.g., past APY) displayed for reference do not guarantee future results and are for informational purposes only.",
        },
        {
          title: "Rewards Token",
          content: "Rewards are paid in pREWA tokens.",
        },
        {
          title: "Staking Parameters",
          content:
            "You acknowledge that Operational Parameters such as minimum stake amounts, applicable lock-up periods, any penalties for early unstaking, and reward distribution schedules are subject to what is displayed on the Staking Platform at the time you initiate your staking transaction.",
        },
      ],
    },
    {
      title: "3. User Responsibilities",
      subsections: [
        {
          title: "Wallet Security",
          content:
            "Users are solely responsible for the security and control of their own BEP20 compatible wallets, private keys, seed phrases, and passwords. Dugong will never ask for your private keys or seed phrases.",
        },
        {
          title: "Transaction Verification",
          content:
            "Users are responsible for verifying all transaction details, including the official staking smart contract address (which will be published on stake.dharitri.org), before confirming any staking or unstaking transaction.",
        },
        {
          title: "Gas Fees",
          content:
            "Users are responsible for paying all transaction fees (gas fees in BNB) required to interact with the staking smart contract on the Binance Smart Chain.",
        },
      ],
    },
  ],
};

export const termsOfServiceDocument: LegalDocument = {
  title: "Terms of Service",
  lastUpdated: "June 19, 2025",
  sections: [
    {
      title: "1. Acceptance of Terms",
      content: `Welcome to the Dharitri project (the "Project"). These Terms of Service ("Terms") govern your access to and use of the website located at [YourWebsiteAddress.com] (the "Website"), including any content, functionality, and information offered on or through the Website. The Website is owned and operated by Dugong Global Services Pvt Ltd, a company registered in India (hereinafter referred to as "Dugong," "the Company," "we," "us," or "our").`,
    },
    {
      title: "2. Description of Services",
      content: `The Website provides information about the Dharitri Project, our mission to empower smallholder farmers through sustainable agriculture and finance, our phased Project Roadmap, our team, and the pREWA token. The pREWA token is a BEP20 utility token on the Binance Smart Chain intended to fund the development and growth of the Dharitri platform and ecosystem.`,
    },
    {
      title: "3. Eligibility",
      content: `To access or use the Website, you must be at least 18 years of age or the age of legal majority in your jurisdiction, whichever is greater. By using this Website, you represent and warrant that you meet this age requirement.`,
    },
  ],
};

export const riskWarnings: RiskWarning = {
  title: "⚠️ IMPORTANT RISK WARNING",
  description:
    "BEFORE PROCEEDING, YOU MUST UNDERSTAND THE FOLLOWING CRITICAL RISKS:",
  risks: [
    "High-Risk Investment: pREWA tokens and staking involve extreme financial risks including potential total loss of funds",
    "Smart Contract Risks: Technical failures, bugs, or vulnerabilities in smart contracts may result in permanent loss of tokens",
    "No Guarantees: APY rates, staking rewards, and platform features are estimates only and subject to change without notice",
    "Regulatory Uncertainty: Cryptocurrency regulations may change, potentially affecting token legality or functionality",
    "Irreversible Transactions: All blockchain transactions are permanent and cannot be undone",
    "Unregulated Platforms: Third-party exchanges like PancakeSwap are unregulated and carry risks of fraud, slippage, and technical failures",
  ],
};

export const contactInformation: ContactInfo = {
  email: "legal@dharitri.org",
  emergencyEmail: "emergency@dharitri.org",
  additionalMethods:
    "Additional contact methods are available on the stake.dharitri.org Staking Platform and the main Dharitri Project Website ([YourWebsiteAddress.com]).",
};

// Utility function to render content safely
export const renderLegalText = (text: string) => {
  return text; // Content is already safely stored as JavaScript strings
};
