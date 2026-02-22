# LexusKit Layout System - Chakra UI Integration

## Overview

This application uses **Chakra UI v3** as the application shell/provider that wraps the entire application, while individual components use **plain HTML with inline styles** that directly reference CSS variables from the **LexusKit design system**.

## Architecture

```
┌─────────────────────────────────────────┐
│    ChakraProvider (App.tsx)             │
│    - Custom system theme                │
│    - Maps Chakra tokens to CSS vars     │
├─────────────────────────────────────────┤
│    RouterProvider                       │
│    - React Router setup                 │
├─────────────────────────────────────────┤
│    Layout Component                     │
│    - Plain HTML with inline styles      │
│    - Direct CSS variable references     │
├─────────────────────────────────────────┤
│    Page Components                      │
│    - Use CSS variables for styling      │
│    - Can optionally use Chakra UI       │
│    - All honor design system tokens     │
└─────────────────────────────────────────┘
```

## Key Files

### 1. `/src/app/theme/chakra-theme.ts`
Custom Chakra UI system that maps all Chakra tokens to LexusKit CSS variables:

```typescript
import { createSystem, defaultConfig } from '@chakra-ui/react';

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        primary: { value: 'var(--primary)' },
        accent: { value: 'var(--accent)' },
        // ... more mappings
      },
      fonts: {
        body: { value: 'var(--font-family-nobel)' },
        heading: { value: 'var(--font-family-nobel)' },
      },
      // ... more token categories
    },
  },
});
```

### 2. `/src/app/App.tsx`
Root component that wraps everything with ChakraProvider:

```typescript
import { ChakraProvider } from '@chakra-ui/react';
import { system } from './theme/chakra-theme';

export default function App() {
  return (
    <ChakraProvider value={system}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}
```

### 3. `/src/app/Layout.tsx`
Layout component using plain HTML with inline styles:

```typescript
<button
  style={{
    fontFamily: 'var(--font-family-nobel)',
    fontSize: 'var(--text-label)',
    background: 'var(--primary)',
    color: 'var(--primary-foreground)',
    borderRadius: 'var(--radius)',
  }}
>
  Button
</button>
```

### 4. `/src/styles/theme.css`
Central location for all LexusKit design tokens:

```css
:root {
  /* Colors */
  --background: rgba(241, 240, 236, 1);
  --foreground: rgba(35, 38, 50, 1);
  --primary: rgba(35, 38, 50, 1);
  --accent: rgba(204, 76, 25, 1);
  
  /* Typography */
  --text-h1: 49px;
  --text-body: 19px;
  --font-family-nobel: 'Nobel', sans-serif;
  
  /* Border Radius */
  --radius: 3px;
  --radius-card: 5px;
  
  /* ... more tokens */
}
```

## Design System Token Categories

### Colors
- `--background`, `--foreground`
- `--card`, `--card-foreground`
- `--primary`, `--primary-foreground`
- `--secondary`, `--secondary-foreground`
- `--accent`, `--accent-foreground`
- `--destructive`, `--destructive-foreground`
- `--border`, `--input`, `--ring`

### Typography
- `--text-h1` through `--text-h5`
- `--text-subtitle`, `--text-body`, `--text-label`
- `--font-family-nobel`
- `--font-weight-book`, `--font-weight-bold`

### Border Radius
- `--radius` (3px)
- `--radius-card` (5px)
- `--radius-modal` (8px)

## Benefits

1. **Design System Fidelity**: All styling references LexusKit design tokens directly
2. **Easy Theme Updates**: Change CSS variables in one place to update entire app
3. **Flexible Usage**: Mix plain HTML and Chakra UI components as needed
4. **No Style Conflicts**: CSS variables ensure consistency across all components
5. **Provider Benefits**: Chakra UI provides theming context and accessibility features

## Component Development Guidelines

### Using Plain HTML with Inline Styles (Recommended)

```typescript
<div
  style={{
    fontFamily: 'var(--font-family-nobel)',
    fontSize: 'var(--text-body)',
    color: 'var(--foreground)',
    background: 'var(--card)',
    borderRadius: 'var(--radius-card)',
    padding: '24px',
  }}
>
  Content
</div>
```

### Using Chakra UI Components (Optional)

```typescript
import { Box, Button } from '@chakra-ui/react';

// Chakra components automatically use mapped design tokens
<Button colorScheme="primary">Click Me</Button>
```

### Typography

Always use the Nobel font family and defined text sizes:

```typescript
<h1
  style={{
    fontFamily: 'var(--font-family-nobel)',
    fontSize: 'var(--text-h2)',
    fontWeight: 'var(--font-weight-book)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  }}
>
  Heading
</h1>
```

## Routing

The application uses React Router with the following structure:

- `/builder` - Layout Builder
- `/layouts` - Layout Examples
- `/compositions` - Composition Examples
- `/pages` - Page Examples
- `/components` - Component Library
- `/tokens` - Design Token Documentation
  - `/tokens/spacing`
  - `/tokens/colors`
  - `/tokens/typography`
  - `/tokens/border-radius`
  - `/tokens/responsive`
- `/chakra-example` - Chakra UI Examples
- `/chakra-integration` - Integration Documentation

## Updating Design Tokens

To update the design system:

1. Edit `/src/styles/theme.css`
2. Modify CSS variable values
3. Changes automatically propagate throughout the application
4. Both plain HTML and Chakra UI components respect the updates

## Dark Mode

Dark mode tokens are defined in `/src/styles/theme.css`:

```css
.dark {
  --background: rgba(35, 38, 50, 1);
  --foreground: rgba(241, 240, 236, 1);
  /* ... more dark mode tokens */
}
```

## Resources

- Visit `/chakra-integration` for detailed integration documentation
- Visit `/chakra-example` for visual examples of the integration
- Visit `/tokens` to browse all available design tokens
- Chakra UI v3 Documentation: https://v3.chakra-ui.com/
