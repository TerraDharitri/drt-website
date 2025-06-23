export interface LegalSection {
  title: string;
  content?: string;
  items?: string[];
  subsections?: LegalSection[];
}

export interface LegalDocument {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export interface RiskWarning {
  title: string;
  description: string;
  risks: string[];
}

export interface ContactInfo {
  email: string;
  emergencyEmail?: string;
  additionalMethods?: string;
}
