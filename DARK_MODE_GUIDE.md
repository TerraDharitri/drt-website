# 🌙 Dark Mode Implementation Guide

## Overview

This guide explains how to use the dark mode system implemented for the pREWA website. The system provides seamless switching between light and dark themes with automatic persistence and system preference detection.

## 🏗️ Architecture

### Core Components

1. **ThemeProvider** (`components/ThemeProvider/index.tsx`)

   - Global theme state management
   - Automatic system preference detection
   - Local storage persistence
   - Hydration-safe implementation

2. **ThemeToggle** (`components/ThemeToggle/index.tsx`)

   - Interactive theme switching button
   - Animated sun/moon icons
   - Multiple size variants
   - Accessible design

3. **Tailwind Configuration** (`tailwind.config.ts`)
   - Class-based dark mode enabled
   - Extended color palette for dark themes
   - Updated component styles

## 🎨 Color System

### Dark Mode Colors

```typescript
dark: {
  bg: "#0F0F0F",        // Main background
  surface: "#1A1A1A",   // Card/surface backgrounds
  card: "#262626",      // Elevated card backgrounds
  border: "#404040",    // Border colors
  text: {
    primary: "#FFFFFF",   // Primary text
    secondary: "#A3A3A3", // Secondary text
    muted: "#737373",     // Muted text
  }
}
```

### Usage Examples

```html
<!-- Background colors -->
<div className="bg-white dark:bg-dark-bg">
  <div className="bg-greyscale-25 dark:bg-dark-surface">
    <div className="bg-greyscale-0 dark:bg-dark-card">
      <!-- Text colors -->
      <h1 className="text-greyscale-900 dark:text-dark-text-primary">
        <p className="text-greyscale-400 dark:text-dark-text-secondary">
          <!-- Borders -->
        </p>

        <div className="border-greyscale-100 dark:border-dark-border"></div>
      </h1>
    </div>
  </div>
</div>
```

## 🔧 Implementation

### 1. Setup (Already Done)

The system is already integrated into the project:

- ✅ ThemeProvider wraps the entire app in `app/layout.tsx`
- ✅ Tailwind config updated with dark mode support
- ✅ Global CSS includes smooth transitions
- ✅ Header includes theme toggle button

### 2. Using the Theme Hook

```typescript
import { useTheme } from "@/components/ThemeProvider";

function MyComponent() {
  const { theme, toggleTheme, setTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={() => setTheme("dark")}>Force Dark</button>
      <button onClick={() => setTheme("light")}>Force Light</button>
    </div>
  );
}
```

### 3. Adding Dark Mode to Components

#### Basic Pattern

```html
<div
  className="bg-white dark:bg-dark-bg text-greyscale-900 dark:text-dark-text-primary"
>
  Content that adapts to theme
</div>
```

#### Card Components

```html
<div
  className="p-6 bg-greyscale-0 dark:bg-dark-card border border-greyscale-100 dark:border-dark-border"
>
  <h3 className="text-h6 dark:text-dark-text-primary">Title</h3>
  <p className="text-greyscale-400 dark:text-dark-text-secondary">
    Description
  </p>
</div>
```

#### Buttons (Already Updated)

The button classes automatically support dark mode:

```html
<button className="btn-primary">Primary Button</button>
<button className="btn-secondary">Secondary Button</button>
```

## 🎯 Best Practices

### 1. Consistent Color Usage

- Use semantic color names instead of specific hex values
- Always provide dark mode alternatives for custom colors
- Test contrast ratios for accessibility

### 2. Component Updates

When updating existing components:

```html
<!-- Before -->
<div className="bg-white text-greyscale-900">
  <!-- After -->
  <div
    className="bg-white dark:bg-dark-bg text-greyscale-900 dark:text-dark-text-primary"
  ></div>
</div>
```

### 3. Transitions

All color transitions are handled globally via CSS. Components automatically get smooth theme transitions.

### 4. Images and Icons

Consider providing dark mode variants for images:

```typescript
<Image
  src={theme === "dark" ? "/logo-light.svg" : "/logo-dark.svg"}
  alt="Logo"
/>
```

## 🔄 Theme Toggle Placement

The theme toggle is currently placed in the header. You can add it anywhere:

```typescript
import ThemeToggle from '@/components/ThemeToggle';

// Different sizes available
<ThemeToggle size="sm" />   // Small (32px)
<ThemeToggle size="md" />   // Medium (40px) - default
<ThemeToggle size="lg" />   // Large (48px)
```

## 📱 System Integration

### Automatic Detection

- Detects user's system preference on first visit
- Respects `prefers-color-scheme` media query
- Falls back to light mode if no preference

### Persistence

- Saves user choice to localStorage
- Persists across browser sessions
- Overrides system preference when manually set

### Hydration Safety

- Prevents flash of incorrect theme
- Handles server-side rendering correctly
- Smooth client-side hydration

## 🎨 Customization

### Adding New Dark Colors

Update `tailwind.config.ts`:

```typescript
colors: {
  // Add new color with dark variant
  brand: {
    light: "#your-light-color",
    dark: "#your-dark-color"
  }
}
```

### Custom Component Styles

```html
<div className="bg-brand-light dark:bg-brand-dark">Custom themed content</div>
```

## 🧪 Testing

### Manual Testing

1. Toggle theme using the button
2. Check localStorage persistence
3. Test system preference detection
4. Verify smooth transitions
5. Test on different screen sizes

### Accessibility Testing

- Ensure sufficient contrast ratios
- Test with screen readers
- Verify keyboard navigation
- Check focus indicators

## 🚀 Next Steps

### Recommended Component Updates

1. **High Priority** (User-facing):

   - All page templates (`templates/*/`)
   - Join/CTA components
   - Form components

2. **Medium Priority**:

   - Modal/popup components
   - Navigation components
   - Card components

3. **Low Priority**:
   - Admin/internal components
   - Error pages
   - Utility components

### Example Update Pattern

```typescript
// Before
const MyComponent = () => (
  <div className="bg-white p-6">
    <h2 className="text-greyscale-900">Title</h2>
    <p className="text-greyscale-400">Description</p>
  </div>
);

// After
const MyComponent = () => (
  <div className="bg-white dark:bg-dark-card p-6">
    <h2 className="text-greyscale-900 dark:text-dark-text-primary">Title</h2>
    <p className="text-greyscale-400 dark:text-dark-text-secondary">
      Description
    </p>
  </div>
);
```

## 🎉 Benefits

- ✅ **User Experience**: Modern dark mode expectation
- ✅ **Accessibility**: Better for low-light environments
- ✅ **Battery Life**: OLED screen power savings
- ✅ **Professional**: Industry-standard feature
- ✅ **Customizable**: Easy to extend and modify
- ✅ **Performance**: Minimal overhead, smooth transitions

The dark mode system is now ready to use! Start by updating high-priority components and gradually expand coverage across the entire application.
