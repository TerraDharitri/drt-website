import type { NextPage } from "next";
import {
  termsOfServiceDocument,
  riskWarnings,
  contactInformation,
} from "../../../constants/legalContent";
import EnhancedLegalTemplate from "../../../components/LegalDocument/EnhancedLegalTemplate";

const TermsOfService: NextPage = () => {
  return (
    <EnhancedLegalTemplate
      document={termsOfServiceDocument}
      riskWarning={riskWarnings}
      contactInfo={contactInformation}
    />
  );
};

export default TermsOfService;
