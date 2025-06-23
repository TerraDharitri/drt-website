import { LegalDocument, LegalSection } from "../types/legal";

/**
 * Validates a legal document structure
 */
export const validateLegalDocument = (document: LegalDocument): boolean => {
  if (!document.title || !document.lastUpdated || !document.sections) {
    return false;
  }

  return document.sections.every((section) => validateSection(section));
};

/**
 * Validates a legal section structure
 */
export const validateSection = (section: LegalSection): boolean => {
  if (!section.title) return false;

  // Must have either content, items, or subsections
  const hasContent = Boolean(section.content);
  const hasItems = Boolean(section.items && section.items.length > 0);
  const hasSubsections = Boolean(
    section.subsections && section.subsections.length > 0
  );

  return hasContent || hasItems || hasSubsections;
};

/**
 * Counts words in a legal document
 */
export const countWords = (document: LegalDocument): number => {
  let wordCount = 0;

  const countInSection = (section: LegalSection) => {
    if (section.content) {
      wordCount += section.content.split(/\s+/).length;
    }

    if (section.items) {
      section.items.forEach((item) => {
        wordCount += item.split(/\s+/).length;
      });
    }

    if (section.subsections) {
      section.subsections.forEach(countInSection);
    }
  };

  document.sections.forEach(countInSection);
  return wordCount;
};

/**
 * Exports legal document to plain text format
 */
export const exportToText = (document: LegalDocument): string => {
  let text = `${document.title}\n`;
  text += `Last Updated: ${document.lastUpdated}\n\n`;

  const processSection = (section: LegalSection, level: number = 0) => {
    const indent = "  ".repeat(level);
    text += `${indent}${section.title}\n`;

    if (section.content) {
      text += `${indent}${section.content}\n\n`;
    }

    if (section.items) {
      section.items.forEach((item) => {
        text += `${indent}- ${item}\n`;
      });
      text += "\n";
    }

    if (section.subsections) {
      section.subsections.forEach((subsection) => {
        processSection(subsection, level + 1);
      });
    }
  };

  document.sections.forEach((section) => processSection(section));
  return text;
};

/**
 * Searches for content within a legal document
 */
export const searchContent = (
  document: LegalDocument,
  query: string
): LegalSection[] => {
  const results: LegalSection[] = [];
  const searchTerm = query.toLowerCase();

  const searchInSection = (section: LegalSection) => {
    const matches =
      section.title.toLowerCase().includes(searchTerm) ||
      (section.content && section.content.toLowerCase().includes(searchTerm)) ||
      (section.items &&
        section.items.some((item) => item.toLowerCase().includes(searchTerm)));

    if (matches) {
      results.push(section);
    }

    if (section.subsections) {
      section.subsections.forEach(searchInSection);
    }
  };

  document.sections.forEach(searchInSection);
  return results;
};
