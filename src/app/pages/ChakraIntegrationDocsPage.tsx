export default function ChakraIntegrationDocsPage() {
  return (
    <div style={{ fontFamily: 'var(--font-family-nobel)' }}>
      {/* Header */}
      <div style={{ marginBottom: '48px' }}>
        <h1
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h2)',
            fontWeight: 'var(--font-weight-book)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'var(--foreground)',
            marginBottom: '16px',
          }}
        >
          Chakra UI Integration Guide
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
            color: 'var(--muted-foreground)',
            maxWidth: '768px',
          }}
        >
          Learn how Chakra UI is integrated as the application shell that consumes and respects
          your LexusKit design tokens through CSS variables.
        </p>
      </div>

      {/* Architecture Overview */}
      <div
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-card)',
          padding: '32px',
          marginBottom: '32px',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h4)',
            fontWeight: 'var(--font-weight-bold)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'var(--foreground)',
            marginBottom: '24px',
          }}
        >
          Architecture Overview
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
            color: 'var(--foreground)',
            marginBottom: '16px',
          }}
        >
          The application uses a layered architecture where Chakra UI serves as the provider that
          wraps the entire application, while individual components use plain HTML and inline
          styles that directly reference CSS variables from the LexusKit design system.
        </p>
        <div
          style={{
            background: 'var(--background)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '24px',
            marginTop: '24px',
          }}
        >
          <pre
            style={{
              fontFamily: 'monospace',
              fontSize: 'var(--text-label)',
              color: 'var(--foreground)',
              margin: 0,
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
            }}
          >
{`┌─────────────────────────────────────────┐
│    ChakraProvider (App.tsx)             │
│    - Uses custom system theme           │
│    - Maps to CSS variables              │
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
│    - Can use Chakra UI components       │
│    - All honor design system tokens     │
└─────────────────────────────────────────┘`}
          </pre>
        </div>
      </div>

      {/* Setup Instructions */}
      <div
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-card)',
          padding: '32px',
          marginBottom: '32px',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h4)',
            fontWeight: 'var(--font-weight-bold)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'var(--foreground)',
            marginBottom: '24px',
          }}
        >
          Setup &amp; Configuration
        </h2>

        {/* Step 1 */}
        <div style={{ marginBottom: '32px' }}>
          <h3
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-body)',
              fontWeight: 'var(--font-weight-bold)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--accent)',
              marginBottom: '12px',
            }}
          >
            1. Custom Chakra System Theme
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-body)',
              color: 'var(--foreground)',
              marginBottom: '16px',
            }}
          >
            The custom Chakra system is defined in <code style={{ background: 'var(--muted)', padding: '2px 6px', borderRadius: 'var(--radius)' }}>/src/app/theme/chakra-theme.ts</code> and maps all Chakra UI tokens to LexusKit CSS variables:
          </p>
          <div
            style={{
              background: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '16px',
            }}
          >
            <pre
              style={{
                fontFamily: 'monospace',
                fontSize: '12px',
                color: 'var(--foreground)',
                margin: 0,
                overflow: 'auto',
              }}
            >
{`import { createSystem, defaultConfig } from '@chakra-ui/react';

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        primary: { value: 'var(--primary)' },
        accent: { value: 'var(--accent)' },
        // ... more color mappings
      },
      fonts: {
        body: { value: 'var(--font-family-nobel)' },
        heading: { value: 'var(--font-family-nobel)' },
      },
      // ... more token mappings
    },
  },
});`}
            </pre>
          </div>
        </div>

        {/* Step 2 */}
        <div style={{ marginBottom: '32px' }}>
          <h3
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-body)',
              fontWeight: 'var(--font-weight-bold)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--accent)',
              marginBottom: '12px',
            }}
          >
            2. ChakraProvider Setup
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-body)',
              color: 'var(--foreground)',
              marginBottom: '16px',
            }}
          >
            In <code style={{ background: 'var(--muted)', padding: '2px 6px', borderRadius: 'var(--radius)' }}>/src/app/App.tsx</code>, the custom system is used to wrap the entire application:
          </p>
          <div
            style={{
              background: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '16px',
            }}
          >
            <pre
              style={{
                fontFamily: 'monospace',
                fontSize: '12px',
                color: 'var(--foreground)',
                margin: 0,
              }}
            >
{`import { ChakraProvider } from '@chakra-ui/react';
import { system } from './theme/chakra-theme';

export default function App() {
  return (
    <ChakraProvider value={system}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}`}
            </pre>
          </div>
        </div>

        {/* Step 3 */}
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-body)',
              fontWeight: 'var(--font-weight-bold)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--accent)',
              marginBottom: '12px',
            }}
          >
            3. Using CSS Variables in Components
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-body)',
              color: 'var(--foreground)',
              marginBottom: '16px',
            }}
          >
            Components use plain HTML with inline styles that directly reference CSS variables:
          </p>
          <div
            style={{
              background: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '16px',
            }}
          >
            <pre
              style={{
                fontFamily: 'monospace',
                fontSize: '12px',
                color: 'var(--foreground)',
                margin: 0,
                overflow: 'auto',
              }}
            >
{`<button
  style={{
    fontFamily: 'var(--font-family-nobel)',
    fontSize: 'var(--text-label)',
    padding: '12px 24px',
    background: 'var(--primary)',
    color: 'var(--primary-foreground)',
    border: 'none',
    borderRadius: 'var(--radius)',
  }}
>
  Primary Button
</button>`}
            </pre>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-card)',
          padding: '32px',
          marginBottom: '32px',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h4)',
            fontWeight: 'var(--font-weight-bold)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'var(--foreground)',
            marginBottom: '24px',
          }}
        >
          Key Benefits
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {[
            {
              title: 'Design System Fidelity',
              description: 'All styling references your LexusKit design tokens directly through CSS variables, ensuring 100% design system compliance.',
            },
            {
              title: 'Easy Theme Updates',
              description: 'Update the entire application theme by modifying CSS variables in one place (/src/styles/theme.css).',
            },
            {
              title: 'Flexible Component Usage',
              description: 'Use plain HTML with inline styles or Chakra UI components - both respect your design tokens.',
            },
            {
              title: 'Provider Benefits',
              description: 'Chakra UI provides theming context, accessibility features, and component composition while respecting your custom tokens.',
            },
            {
              title: 'No Style Conflicts',
              description: 'CSS variables ensure that Chakra UI components and plain HTML elements use the same styling values.',
            },
          ].map((benefit, index) => (
            <div key={index}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '8px',
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    background: 'var(--accent)',
                    borderRadius: '50%',
                  }}
                />
                <h4
                  style={{
                    fontFamily: 'var(--font-family-nobel)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--foreground)',
                    margin: 0,
                  }}
                >
                  {benefit.title}
                </h4>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-body)',
                  color: 'var(--muted-foreground)',
                  marginLeft: '20px',
                  margin: 0,
                }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Available Tokens Reference */}
      <div
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-card)',
          padding: '32px',
          marginBottom: '32px',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h4)',
            fontWeight: 'var(--font-weight-bold)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'var(--foreground)',
            marginBottom: '24px',
          }}
        >
          Available CSS Variables
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          {/* Colors */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-bold)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--accent)',
                marginBottom: '12px',
              }}
            >
              Colors
            </h3>
            <ul
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-label)',
                listStyleType: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
            >
              {['--background', '--foreground', '--card', '--primary', '--secondary', '--accent', '--destructive', '--border'].map(token => (
                <li key={token} style={{ color: 'var(--foreground)', fontFamily: 'monospace' }}>
                  {token}
                </li>
              ))}
            </ul>
          </div>

          {/* Typography */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-bold)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--accent)',
                marginBottom: '12px',
              }}
            >
              Typography
            </h3>
            <ul
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-label)',
                listStyleType: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
            >
              {['--text-h1', '--text-h2', '--text-body', '--text-label', '--font-family-nobel', '--font-weight-book', '--font-weight-bold'].map(token => (
                <li key={token} style={{ color: 'var(--foreground)', fontFamily: 'monospace' }}>
                  {token}
                </li>
              ))}
            </ul>
          </div>

          {/* Border Radius */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-bold)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--accent)',
                marginBottom: '12px',
              }}
            >
              Border Radius
            </h3>
            <ul
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-label)',
                listStyleType: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
            >
              {['--radius', '--radius-card', '--radius-modal'].map(token => (
                <li key={token} style={{ color: 'var(--foreground)', fontFamily: 'monospace' }}>
                  {token}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            marginTop: '24px',
            padding: '16px',
            background: 'var(--accent)',
            color: 'var(--accent-foreground)',
            borderRadius: 'var(--radius)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-body)',
              margin: 0,
            }}
          >
            💡 <strong>Tip:</strong> Visit the <a href="/tokens" style={{ color: 'inherit', textDecoration: 'underline' }}>Tokens</a> page to see all available design tokens with their values and usage examples.
          </p>
        </div>
      </div>

      {/* Best Practices */}
      <div
        style={{
          background: 'var(--primary)',
          color: 'var(--primary-foreground)',
          borderRadius: 'var(--radius-card)',
          padding: '32px',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h4)',
            fontWeight: 'var(--font-weight-bold)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '24px',
          }}
        >
          Best Practices
        </h2>
        <ol
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
            paddingLeft: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            margin: 0,
          }}
        >
          <li>Always use CSS variables for colors, typography, spacing, and border radius to ensure design system compliance.</li>
          <li>Prefer inline styles with CSS variables over Tailwind classes for custom components to maintain direct design token references.</li>
          <li>When using Chakra UI components, they will automatically consume the mapped design tokens from the custom system.</li>
          <li>Update design tokens in <code style={{ background: 'rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: 'var(--radius)' }}>/src/styles/theme.css</code> to propagate changes throughout the application.</li>
          <li>Test both light and dark modes when adding new components to ensure proper token usage.</li>
        </ol>
      </div>
    </div>
  );
}
