import React from "react";
import { LegalDocument, RiskWarning, ContactInfo } from "../../types/legal";
import LegalRenderer from "./LegalRenderer";

interface EnhancedLegalTemplateProps {
  document: LegalDocument;
  riskWarning?: RiskWarning;
  contactInfo?: ContactInfo;
  children?: React.ReactNode; // For any additional custom content
}

export const EnhancedLegalTemplate: React.FC<EnhancedLegalTemplateProps> = ({
  document,
  riskWarning,
  contactInfo,
  children,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{document.title}</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Last Updated: {document.lastUpdated}
        </p>
      </div>

      {/* Main Content */}
      <div className="prose dark:prose-invert max-w-none">
        <LegalRenderer document={document} riskWarning={riskWarning} />

        {/* Custom children content */}
        {children}

        {/* Contact Information */}
        {contactInfo && (
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h5 className="mb-4">Contact Information</h5>
            <p className="mb-2">
              <strong>Email:</strong> {contactInfo.email}
            </p>
            {contactInfo.emergencyEmail && (
              <p className="mb-2">
                <strong>For urgent smart contract issues:</strong>{" "}
                {contactInfo.emergencyEmail}
              </p>
            )}
            {contactInfo.additionalMethods && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {contactInfo.additionalMethods}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedLegalTemplate;
