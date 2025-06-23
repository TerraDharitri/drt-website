import React from "react";
import { LegalDocument, LegalSection, RiskWarning } from "../../types/legal";

interface LegalRendererProps {
  document: LegalDocument;
  riskWarning?: RiskWarning;
}

const LegalSectionRenderer: React.FC<{
  section: LegalSection;
  level?: number;
}> = ({ section, level = 0 }) => {
  const HeadingTag = level === 0 ? "h5" : level === 1 ? "h6" : "h6";

  return (
    <div className="mb-6">
      <HeadingTag className="mb-3">{section.title}</HeadingTag>

      {section.content && <p className="mb-4">{section.content}</p>}

      {section.items && (
        <ul className="mb-4 space-y-2">
          {section.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      {section.subsections && (
        <div className="ml-4">
          {section.subsections.map((subsection, index) => (
            <LegalSectionRenderer
              key={index}
              section={subsection}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const RiskWarningRenderer: React.FC<{ warning: RiskWarning }> = ({
  warning,
}) => (
  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 my-6">
    <h5 className="text-red-800 dark:text-red-200 mb-3">{warning.title}</h5>
    <p className="text-red-700 dark:text-red-300 font-medium mb-2">
      {warning.description}
    </p>
    <ul className="text-red-700 dark:text-red-300 space-y-1">
      {warning.risks.map((risk, index) => (
        <li key={index}>
          <strong>{risk.split(":")[0]}:</strong>{" "}
          {risk.split(":").slice(1).join(":").trim()}
        </li>
      ))}
    </ul>
  </div>
);

export const LegalRenderer: React.FC<LegalRendererProps> = ({
  document,
  riskWarning,
}) => {
  return (
    <div className="legal-document">
      {riskWarning && <RiskWarningRenderer warning={riskWarning} />}

      {document.sections.map((section, index) => (
        <LegalSectionRenderer key={index} section={section} />
      ))}
    </div>
  );
};

export default LegalRenderer;
