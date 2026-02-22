// Token data structure based on the GitHub repository
export interface TokenValue {
  $type: string;
  $value: any;
  $extensions?: {
    'com.figma.variableId'?: string;
    'com.figma.scopes'?: string[];
    'com.figma.hiddenFromPublishing'?: boolean;
    'com.figma.isOverride'?: boolean;
    'com.figma.aliasData'?: {
      targetVariableName?: string;
      targetVariableSetName?: string;
    };
  };
}

export interface TokenCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string; // CSS variable name
}

export interface TokenSet {
  id: string;
  name: string;
  type: 'screen' | 'theme' | 'component' | 'root';
  category: string;
  description: string;
  tokenCount: number;
  downloadUrl: string;
}

export const tokenCategories: TokenCategory[] = [
  {
    id: 'spacing',
    name: 'Spacing',
    description: 'Dimension and spacing tokens for consistent layout spacing',
    icon: '📏',
    color: 'var(--color-accent)',
  },
  {
    id: 'colors',
    name: 'Colors',
    description: 'Semantic color tokens for theming and visual hierarchy',
    icon: '🎨',
    color: 'var(--color-secondary)',
  },
  {
    id: 'typography',
    name: 'Typography',
    description: 'Font size, line height, and tracking tokens for text styling',
    icon: '📝',
    color: 'var(--color-primary)',
  },
  {
    id: 'border',
    name: 'Border Radius',
    description: 'Border radius tokens for consistent rounded corners',
    icon: '◻️',
    color: 'var(--color-accent)',
  },
  {
    id: 'screen',
    name: 'Responsive',
    description: 'Screen-specific tokens for responsive design',
    icon: '📱',
    color: 'var(--color-secondary)',
  },
];

export const tokenSets: TokenSet[] = [
  {
    id: 'default',
    name: 'Default',
    type: 'root',
    category: 'spacing',
    description: 'Default semantic spacing tokens with static and scaled dimensions',
    tokenCount: 28,
    downloadUrl: 'https://raw.githubusercontent.com/dnbl0/token-lib/b093092967f9021aab453e0a676f7d21154f4f72/Default.tokens.json',
  },
  {
    id: 'lexus',
    name: 'Lexus',
    type: 'root',
    category: 'spacing',
    description: 'Primitive dimension and border radius tokens',
    tokenCount: 18,
    downloadUrl: 'https://raw.githubusercontent.com/dnbl0/token-lib/b093092967f9021aab453e0a676f7d21154f4f72/Lexus.tokens.json',
  },
  {
    id: 'desktop',
    name: 'Desktop',
    type: 'screen',
    category: 'screen',
    description: 'Desktop-specific tokens including screen dimensions, typography, and grid layout',
    tokenCount: 150,
    downloadUrl: 'https://raw.githubusercontent.com/dnbl0/token-lib/b093092967f9021aab453e0a676f7d21154f4f72/2 - Screen 🟠🟠🟠🟠🟠🟠🟠🟠🟠/Desktop.tokens.json',
  },
  {
    id: 'mobile',
    name: 'Mobile',
    type: 'screen',
    category: 'screen',
    description: 'Mobile-specific tokens including screen dimensions, typography, and grid layout',
    tokenCount: 150,
    downloadUrl: 'https://raw.githubusercontent.com/dnbl0/token-lib/b093092967f9021aab453e0a676f7d21154f4f72/2 - Screen 🟠🟠🟠🟠🟠🟠🟠🟠🟠/Mobile.tokens.json',
  },
  {
    id: 'theme-default',
    name: 'Theme - Default',
    type: 'theme',
    category: 'colors',
    description: 'Default theme with semantic color tokens for light mode',
    tokenCount: 85,
    downloadUrl: 'https://raw.githubusercontent.com/dnbl0/token-lib/b093092967f9021aab453e0a676f7d21154f4f72/2 - Theme 🟢🟢🟢🟢🟢🟢🟢🟢🟢/Default.tokens.json',
  },
  {
    id: 'theme-alt',
    name: 'Theme - Alt',
    type: 'theme',
    category: 'colors',
    description: 'Alternative theme variant with semantic color tokens',
    tokenCount: 85,
    downloadUrl: 'https://raw.githubusercontent.com/dnbl0/token-lib/b093092967f9021aab453e0a676f7d21154f4f72/2 - Theme 🟢🟢🟢🟢🟢🟢🟢🟢🟢/Alt.tokens.json',
  },
  {
    id: 'component-bold',
    name: 'Component - Bold',
    type: 'component',
    category: 'typography',
    description: 'Bold typography variant tokens for components',
    tokenCount: 500,
    downloadUrl: 'https://raw.githubusercontent.com/dnbl0/token-lib/b093092967f9021aab453e0a676f7d21154f4f72/3 - Components 🔴🔴🔴🔴🔴🔴🔴/Bold.tokens.json',
  },
  {
    id: 'component-book',
    name: 'Component - Book',
    type: 'component',
    category: 'typography',
    description: 'Book (regular) typography variant tokens for components',
    tokenCount: 500,
    downloadUrl: 'https://raw.githubusercontent.com/dnbl0/token-lib/b093092967f9021aab453e0a676f7d21154f4f72/3 - Components 🔴🔴🔴🔴🔴🔴🔴/Book.tokens.json',
  },
  {
    id: 'component-regular',
    name: 'Component - Regular',
    type: 'component',
    category: 'typography',
    description: 'Regular typography variant tokens for components',
    tokenCount: 500,
    downloadUrl: 'https://raw.githubusercontent.com/dnbl0/token-lib/b093092967f9021aab453e0a676f7d21154f4f72/3 - Components 🔴🔴🔴🔴🔴🔴🔴/Regular.tokens.json',
  },
];

// Sample token data for visualization (extracted from fetched files)
export const sampleTokens = {
  spacing: {
    static: [
      { name: 'none', value: 0, description: 'No spacing' },
      { name: '4xs', value: 4, description: 'Extra extra extra small spacing' },
      { name: '3xs', value: 8, description: 'Extra extra small spacing' },
      { name: '2xs', value: 12, description: 'Extra small spacing' },
      { name: 'xs', value: 16, description: 'Small spacing' },
      { name: 's', value: 24, description: 'Small spacing' },
      { name: 'm', value: 32, description: 'Medium spacing' },
      { name: 'l', value: 40, description: 'Large spacing' },
      { name: 'xl', value: 48, description: 'Extra large spacing' },
      { name: '2xl', value: 64, description: 'Extra extra large spacing' },
      { name: '3xl', value: 80, description: '3x large spacing' },
      { name: '4xl', value: 96, description: '4x large spacing' },
      { name: '5xl', value: 120, description: '5x large spacing' },
    ],
    scaled: [
      { name: 'least', value: 16, description: 'Least scaled spacing' },
      { name: 'even-less', value: 24, description: 'Even less scaled spacing' },
      { name: 'less', value: 32, description: 'Less scaled spacing' },
      { name: 'default', value: 40, description: 'Default scaled spacing' },
      { name: 'more', value: 56, description: 'More scaled spacing' },
      { name: 'even-more', value: 64, description: 'Even more scaled spacing' },
      { name: 'most', value: 80, description: 'Most scaled spacing' },
      { name: 'beyond-most', value: 96, description: 'Beyond most scaled spacing' },
    ],
  },
  colors: {
    accent: {
      primary: [
        { name: 'lighter', hex: '#2E3243', rgba: [0.18, 0.196, 0.263, 1] },
        { name: 'default', hex: '#232632', rgba: [0.137, 0.149, 0.196, 1] },
        { name: 'darker', hex: '#1E212B', rgba: [0.118, 0.129, 0.169, 1] },
      ],
      secondary: [
        { name: 'lighter', hex: '#EA7B50', rgba: [0.918, 0.482, 0.314, 1] },
        { name: 'default', hex: '#CC4C19', rgba: [0.8, 0.298, 0.098, 1] },
        { name: 'darker', hex: '#8F3511', rgba: [0.561, 0.208, 0.067, 1] },
      ],
    },
    foreground: [
      { name: 'lighter', hex: '#272A39', rgba: [0.153, 0.165, 0.224, 1] },
      { name: 'default', hex: '#232632', rgba: [0.137, 0.149, 0.196, 1] },
      { name: 'darker', hex: '#1E212B', rgba: [0.118, 0.129, 0.169, 1] },
    ],
    elevation: {
      raised: [
        { name: 'lighter', hex: '#FAFAF9', rgba: [0.98, 0.98, 0.976, 1] },
        { name: 'default', hex: '#F6F5F3', rgba: [0.965, 0.961, 0.953, 1] },
        { name: 'darker', hex: '#F1F0EC', rgba: [0.945, 0.941, 0.925, 1] },
      ],
      inset: [
        { name: 'lighter', hex: '#DFDCD4', rgba: [0.875, 0.863, 0.831, 1] },
        { name: 'default', hex: '#DAD8CE', rgba: [0.855, 0.847, 0.808, 1] },
        { name: 'darker', hex: '#D6D3C8', rgba: [0.839, 0.827, 0.784, 1] },
      ],
    },
    utility: {
      error: [
        { name: 'default', hex: '#A32943', rgba: [0.639, 0.161, 0.263, 1] },
      ],
      success: [
        { name: 'default', hex: '#33A329', rgba: [0.2, 0.639, 0.161, 1] },
      ],
      warning: [
        { name: 'default', hex: '#FFB833', rgba: [1, 0.722, 0.2, 1] },
      ],
      information: [
        { name: 'default', hex: '#198DE6', rgba: [0.098, 0.553, 0.902, 1] },
      ],
    },
  },
  typography: {
    semantic: {
      headings: [
        {
          token: 'font.heading.xxlarge',
          fontWeight: 'Book',
          fontWeightValue: 400,
          fontSize: '2 rem / 32 px',
          fontSizeValue: 32,
          lineHeight: '2.25 rem / 36 px',
          lineHeightValue: 36,
          description: 'Extra extra large heading'
        },
        {
          token: 'font.heading.xlarge',
          fontWeight: 'Book',
          fontWeightValue: 400,
          fontSize: '1.75 rem / 28 px',
          fontSizeValue: 28,
          lineHeight: '2 rem / 32 px',
          lineHeightValue: 32,
          description: 'Extra large heading'
        },
        {
          token: 'font.heading.large',
          fontWeight: 'Book',
          fontWeightValue: 400,
          fontSize: '1.5 rem / 24 px',
          fontSizeValue: 24,
          lineHeight: '1.75 rem / 28 px',
          lineHeightValue: 28,
          description: 'Large heading'
        },
        {
          token: 'font.heading.medium',
          fontWeight: 'Book',
          fontWeightValue: 400,
          fontSize: '1.25 rem / 20 px',
          fontSizeValue: 20,
          lineHeight: '1.5 rem / 24 px',
          lineHeightValue: 24,
          description: 'Medium heading'
        },
        {
          token: 'font.heading.small',
          fontWeight: 'Book',
          fontWeightValue: 400,
          fontSize: '1 rem / 16 px',
          fontSizeValue: 16,
          lineHeight: '1.25 rem / 20 px',
          lineHeightValue: 20,
          description: 'Small heading'
        },
        {
          token: 'font.heading.xsmall',
          fontWeight: 'Book',
          fontWeightValue: 400,
          fontSize: '0.875 rem / 14 px',
          fontSizeValue: 14,
          lineHeight: '1.25 rem / 20 px',
          lineHeightValue: 20,
          description: 'Extra small heading'
        },
        {
          token: 'font.heading.xxsmall',
          fontWeight: 'Book',
          fontWeightValue: 400,
          fontSize: '0.75 rem / 12 px',
          fontSizeValue: 12,
          lineHeight: '1 rem / 16 px',
          lineHeightValue: 16,
          description: 'Extra extra small heading'
        },
      ],
      body: [
        {
          token: 'font.body.large',
          fontWeight: 'Book',
          fontWeightValue: 400,
          fontSize: '1.1875 rem / 19 px',
          fontSizeValue: 19,
          lineHeight: '1.75 rem / 28 px',
          lineHeightValue: 28,
          description: 'Large body text'
        },
        {
          token: 'font.body.medium',
          fontWeight: 'Book',
          fontWeightValue: 400,
          fontSize: '1 rem / 16 px',
          fontSizeValue: 16,
          lineHeight: '1.5 rem / 24 px',
          lineHeightValue: 24,
          description: 'Medium body text'
        },
        {
          token: 'font.body.small',
          fontWeight: 'Book',
          fontWeightValue: 400,
          fontSize: '0.875 rem / 14 px',
          fontSizeValue: 14,
          lineHeight: '1.25 rem / 20 px',
          lineHeightValue: 20,
          description: 'Small body text'
        },
      ],
      subtitle: [
        {
          token: 'font.subtitle.large',
          fontWeight: 'Book',
          fontWeightValue: 400,
          fontSize: '1.375 rem / 22 px',
          fontSizeValue: 22,
          lineHeight: '2 rem / 32 px',
          lineHeightValue: 32,
          description: 'Large subtitle'
        },
        {
          token: 'font.subtitle.medium',
          fontWeight: 'Book',
          fontWeightValue: 400,
          fontSize: '1.125 rem / 18 px',
          fontSizeValue: 18,
          lineHeight: '1.5 rem / 24 px',
          lineHeightValue: 24,
          description: 'Medium subtitle'
        },
      ],
      label: [
        {
          token: 'font.label.large',
          fontWeight: 'Bold',
          fontWeightValue: 700,
          fontSize: '0.875 rem / 14 px',
          fontSizeValue: 14,
          lineHeight: '1.25 rem / 20 px',
          lineHeightValue: 20,
          description: 'Large label'
        },
        {
          token: 'font.label.medium',
          fontWeight: 'Bold',
          fontWeightValue: 700,
          fontSize: '0.75 rem / 12 px',
          fontSizeValue: 12,
          lineHeight: '1 rem / 16 px',
          lineHeightValue: 16,
          description: 'Medium label'
        },
        {
          token: 'font.label.small',
          fontWeight: 'Bold',
          fontWeightValue: 700,
          fontSize: '0.6875 rem / 11 px',
          fontSizeValue: 11,
          lineHeight: '1 rem / 16 px',
          lineHeightValue: 16,
          description: 'Small label'
        },
      ],
    },
    primitive: {
      fontSize: [
        { name: 'font.size.32', value: 32, rem: 2, description: '32px font size' },
        { name: 'font.size.28', value: 28, rem: 1.75, description: '28px font size' },
        { name: 'font.size.24', value: 24, rem: 1.5, description: '24px font size' },
        { name: 'font.size.20', value: 20, rem: 1.25, description: '20px font size' },
        { name: 'font.size.19', value: 19, rem: 1.1875, description: '19px font size' },
        { name: 'font.size.18', value: 18, rem: 1.125, description: '18px font size' },
        { name: 'font.size.16', value: 16, rem: 1, description: '16px font size' },
        { name: 'font.size.14', value: 14, rem: 0.875, description: '14px font size' },
        { name: 'font.size.12', value: 12, rem: 0.75, description: '12px font size' },
        { name: 'font.size.11', value: 11, rem: 0.6875, description: '11px font size' },
      ],
      fontWeight: [
        { name: 'font.weight.bold', value: 700, description: 'Bold font weight' },
        { name: 'font.weight.book', value: 400, description: 'Book (regular) font weight' },
      ],
      lineHeight: [
        { name: 'font.lineHeight.36', value: 36, rem: 2.25, description: '36px line height' },
        { name: 'font.lineHeight.32', value: 32, rem: 2, description: '32px line height' },
        { name: 'font.lineHeight.28', value: 28, rem: 1.75, description: '28px line height' },
        { name: 'font.lineHeight.24', value: 24, rem: 1.5, description: '24px line height' },
        { name: 'font.lineHeight.20', value: 20, rem: 1.25, description: '20px line height' },
        { name: 'font.lineHeight.16', value: 16, rem: 1, description: '16px line height' },
      ],
    },
  },
  borderRadius: [
    { name: 'small', value: 3, description: 'Small border radius' },
    { name: 'medium', value: 5, description: 'Medium border radius' },
    { name: 'large', value: 8, description: 'Large border radius' },
  ],
};

// Token to component mapping
export const tokenComponentMapping = {
  // Spacing tokens used by components
  'sem.dim.static.xs': ['Button', 'Input', 'Card', 'Badge'],
  'sem.dim.static.s': ['Card', 'Modal', 'Accordion', 'Tabs'],
  'sem.dim.static.m': ['Section', 'Container', 'Article'],
  'sem.dim.static.l': ['Hero', 'Banner', 'Feature'],
  
  // Color tokens used by components
  'sem.color.accent.primary.default': ['Button', 'Link', 'Navigation', 'Badge'],
  'sem.color.accent.secondary.default': ['Button', 'Tag', 'Alert', 'Notification'],
  'sem.color.foreground.default': ['Text', 'Heading', 'Paragraph', 'Label'],
  'sem.color.elevation.raised.default': ['Card', 'Modal', 'Dropdown', 'Popover'],
  
  // Typography tokens used by components
  'sem.typography.font-size.h1': ['Hero', 'PageTitle'],
  'sem.typography.font-size.h2': ['SectionHeading', 'CardTitle'],
  'sem.typography.font-size.h3': ['Subsection', 'AccordionTitle'],
  'sem.typography.font-size.b1': ['Paragraph', 'Description', 'Text'],
  'sem.typography.font-size.label': ['Label', 'Input', 'FormField', 'Badge'],
  
  // Border radius tokens used by components
  'sem.border-radius.small': ['Badge', 'Tag', 'Chip'],
  'sem.border-radius.medium': ['Button', 'Input', 'Select', 'Card'],
  'sem.border-radius.large': ['Modal', 'Dialog', 'Panel', 'Image'],
};