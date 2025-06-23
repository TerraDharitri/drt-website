import type { NextPage } from "next";
import {
  stakingTermsDocument,
  riskWarnings,
  contactInformation,
} from "../../../constants/legalContent";
import EnhancedLegalTemplate from "../../../components/LegalDocument/EnhancedLegalTemplate";

const PREWAStakingTerms: NextPage = () => {
  return (
    <EnhancedLegalTemplate
      document={stakingTermsDocument}
      riskWarning={riskWarnings}
      contactInfo={contactInformation}
    />
  );
};

export default PREWAStakingTerms;
