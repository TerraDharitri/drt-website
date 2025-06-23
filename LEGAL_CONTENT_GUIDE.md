# Legal Content Management System

## Overview

This project uses a modern, maintainable approach to manage legal content (Terms of Service, Privacy Policy, etc.) that eliminates ESLint `react/no-unescaped-entities` errors while providing better content management capabilities.

## Architecture

### 1. Type Safety

- **Location**: `types/legal.ts`
- **Purpose**: TypeScript interfaces ensure consistent content structure
- **Key Interfaces**:
  - `LegalDocument`: Main document structure
  - `LegalSection`: Individual sections with hierarchical support
  - `RiskWarning`: Standardized risk warning components
  - `ContactInfo`: Contact information structure

### 2. Content Storage

- **Location**: `constants/legalContent.ts`
- **Purpose**: Centralized content storage with type safety
- **Benefits**:
  - No unescaped quote issues (content stored as JS strings)
  - Easy to update and version control
  - Reusable across components
  - Supports internationalization

### 3. Rendering Components

- **Location**: `components/LegalDocument/`
- **Components**:
  - `LegalRenderer.tsx`: Core rendering logic
  - `EnhancedLegalTemplate.tsx`: Full-featured template

### 4. Utilities

- **Location**: `utils/contentManager.ts`
- **Features**:
  - Content validation
  - Word counting
  - Text export
  - Content search

## Usage

### Adding New Legal Content

1. **Define the content structure**:

```typescript
// In constants/legalContent.ts
export const newLegalDocument: LegalDocument = {
  title: "New Legal Document",
  lastUpdated: "2025-01-01",
  sections: [
    {
      title: "Section 1",
      content:
        "Your content here with 'quotes' and \"double quotes\" - no escaping needed!",
    },
  ],
};
```

2. **Create the page**:

```typescript
// In app/legal-compliance/new-document/page.tsx
import {
  newLegalDocument,
  riskWarnings,
  contactInformation,
} from "../../../constants/legalContent";
import EnhancedLegalTemplate from "../../../components/LegalDocument/EnhancedLegalTemplate";

const NewDocument: NextPage = () => {
  return (
    <EnhancedLegalTemplate
      document={newLegalDocument}
      riskWarning={riskWarnings}
      contactInfo={contactInformation}
    />
  );
};
```

### Content Structure

#### Basic Section

```typescript
{
  title: "Section Title",
  content: "Paragraph content"
}
```

#### List Section

```typescript
{
  title: "Section Title",
  items: [
    "First item",
    "Second item"
  ]
}
```

#### Hierarchical Section

```typescript
{
  title: "Main Section",
  subsections: [
    {
      title: "Subsection",
      content: "Subsection content"
    }
  ]
}
```

### Best Practices

1. **Content Organization**:

   - Keep sections logically grouped
   - Use subsections for hierarchical content
   - Maintain consistent naming conventions

2. **Updating Content**:

   - Always update the `lastUpdated` field
   - Test content with `validateLegalDocument()` utility
   - Use meaningful section titles

3. **Quotes and Special Characters**:
   - No need to escape quotes in content strings
   - Use template literals for multi-line content
   - Maintain readability in source code

## Migration from Old System

### Before (Problems)

```tsx
// ❌ Hard to maintain, ESLint errors
<p>Welcome to the "Project" with 'quotes' everywhere causing errors.</p>
```

### After (Solution)

```tsx
// ✅ Maintainable, no ESLint errors
<LegalRenderer document={document} />
```

## Configuration

### ESLint Configuration

The project uses selective ESLint rule application:

```json
{
  "rules": {
    "react/no-unescaped-entities": "error"
  },
  "overrides": [
    {
      "files": ["app/legal-compliance/**/*.tsx"],
      "rules": {
        "react/no-unescaped-entities": "off"
      }
    }
  ]
}
```

This keeps the rule active for regular components while allowing natural quotes in legal documents.

## Benefits

### 1. Maintainability

- ✅ Centralized content management
- ✅ Type-safe content structure
- ✅ Reusable components
- ✅ Easy to update and version

### 2. Developer Experience

- ✅ No ESLint errors
- ✅ IntelliSense support
- ✅ Consistent formatting
- ✅ Build-time validation

### 3. Content Management

- ✅ Search functionality
- ✅ Export capabilities
- ✅ Word counting
- ✅ Structure validation

### 4. Scalability

- ✅ Easy to add new documents
- ✅ Supports internationalization
- ✅ Component reusability
- ✅ Future CMS integration ready

## Future Enhancements

1. **Internationalization**: Add multi-language support
2. **CMS Integration**: Connect to headless CMS
3. **Version Control**: Add content versioning
4. **Analytics**: Track content engagement
5. **A/B Testing**: Test different content versions

## Troubleshooting

### Build Errors

- Ensure all imports are correct
- Validate content structure with utilities
- Check TypeScript errors

### Content Issues

- Use `validateLegalDocument()` to check structure
- Ensure all required fields are present
- Check for circular references in subsections

### Performance

- Content is static and tree-shakable
- Components are optimized for SSG
- No runtime content parsing needed
