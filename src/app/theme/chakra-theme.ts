import { createSystem, defaultConfig } from '@chakra-ui/react';

// Create a custom Chakra UI system that uses LexusKit design tokens
export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        background: { value: 'var(--background)' },
        foreground: { value: 'var(--foreground)' },
        card: { value: 'var(--card)' },
        'card.foreground': { value: 'var(--card-foreground)' },
        popover: { value: 'var(--popover)' },
        'popover.foreground': { value: 'var(--popover-foreground)' },
        primary: { value: 'var(--primary)' },
        'primary.foreground': { value: 'var(--primary-foreground)' },
        secondary: { value: 'var(--secondary)' },
        'secondary.foreground': { value: 'var(--secondary-foreground)' },
        muted: { value: 'var(--muted)' },
        'muted.foreground': { value: 'var(--muted-foreground)' },
        accent: { value: 'var(--accent)' },
        'accent.foreground': { value: 'var(--accent-foreground)' },
        destructive: { value: 'var(--destructive)' },
        'destructive.foreground': { value: 'var(--destructive-foreground)' },
        border: { value: 'var(--border)' },
        input: { value: 'var(--input)' },
        'input.background': { value: 'var(--input-background)' },
        ring: { value: 'var(--ring)' },
        'chart.1': { value: 'var(--chart-1)' },
        'chart.2': { value: 'var(--chart-2)' },
        'chart.3': { value: 'var(--chart-3)' },
        'chart.4': { value: 'var(--chart-4)' },
        'chart.5': { value: 'var(--chart-5)' },
      },
      fonts: {
        body: { value: 'var(--font-family-nobel)' },
        heading: { value: 'var(--font-family-nobel)' },
      },
      fontSizes: {
        h1: { value: 'var(--text-h1)' },
        h2: { value: 'var(--text-h2)' },
        h3: { value: 'var(--text-h3)' },
        h4: { value: 'var(--text-h4)' },
        h5: { value: 'var(--text-h5)' },
        subtitle: { value: 'var(--text-subtitle)' },
        body: { value: 'var(--text-body)' },
        label: { value: 'var(--text-label)' },
      },
      fontWeights: {
        book: { value: 'var(--font-weight-book)' },
        bold: { value: 'var(--font-weight-bold)' },
      },
      radii: {
        sm: { value: 'var(--radius)' },
        md: { value: 'var(--radius-card)' },
        lg: { value: 'var(--radius-modal)' },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          canvas: { value: '{colors.background}' },
          default: { value: '{colors.card}' },
          subtle: { value: '{colors.secondary}' },
          muted: { value: '{colors.muted}' },
          accent: { value: '{colors.accent}' },
          error: { value: '{colors.destructive}' },
        },
        fg: {
          default: { value: '{colors.foreground}' },
          muted: { value: '{colors.muted.foreground}' },
          accent: { value: '{colors.accent}' },
          error: { value: '{colors.destructive}' },
        },
        border: {
          default: { value: '{colors.border}' },
          accent: { value: '{colors.accent}' },
        },
      },
    },
  },
});
