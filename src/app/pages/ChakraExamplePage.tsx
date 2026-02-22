import { Box, Container, Heading, Text, Stack, Button, Grid, Card } from '@chakra-ui/react';

export default function ChakraExamplePage() {
  return (
    <div style={{ fontFamily: 'var(--font-family-nobel)' }}>
      {/* Header Section - Using Plain HTML with CSS Variables */}
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
          Chakra UI Integration
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
            color: 'var(--muted-foreground)',
            maxWidth: '768px',
          }}
        >
          This page demonstrates how Chakra UI components consume and respect your LexusKit design
          tokens. All Chakra components automatically use the CSS variables defined in your design
          system.
        </p>
      </div>

      {/* Example Grid using CSS Variables */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '48px',
        }}
      >
        {/* Card 1 - Color System */}
        <div
          style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-card)',
            padding: '24px',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-body)',
              fontWeight: 'var(--font-weight-bold)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--foreground)',
              marginBottom: '16px',
            }}
          >
            Color Tokens
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'var(--primary)',
                  borderRadius: 'var(--radius)',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-label)',
                  color: 'var(--foreground)',
                }}
              >
                Primary
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'var(--accent)',
                  borderRadius: 'var(--radius)',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-label)',
                  color: 'var(--foreground)',
                }}
              >
                Accent
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'var(--secondary)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--border)',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-label)',
                  color: 'var(--foreground)',
                }}
              >
                Secondary
              </span>
            </div>
          </div>
        </div>

        {/* Card 2 - Typography System */}
        <div
          style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-card)',
            padding: '24px',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-body)',
              fontWeight: 'var(--font-weight-bold)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--foreground)',
              marginBottom: '16px',
            }}
          >
            Typography Tokens
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-h4)',
                  fontWeight: 'var(--font-weight-book)',
                  color: 'var(--foreground)',
                  margin: 0,
                }}
              >
                Heading 4
              </p>
              <span
                style={{
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-label)',
                  color: 'var(--muted-foreground)',
                }}
              >
                31px
              </span>
            </div>
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-body)',
                  fontWeight: 'var(--font-weight-book)',
                  color: 'var(--foreground)',
                  margin: 0,
                }}
              >
                Body Text
              </p>
              <span
                style={{
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-label)',
                  color: 'var(--muted-foreground)',
                }}
              >
                19px
              </span>
            </div>
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-label)',
                  fontWeight: 'var(--font-weight-bold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--foreground)',
                  margin: 0,
                }}
              >
                Label Text
              </p>
              <span
                style={{
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-label)',
                  color: 'var(--muted-foreground)',
                }}
              >
                12px
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 - Border Radius System */}
        <div
          style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-card)',
            padding: '24px',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-body)',
              fontWeight: 'var(--font-weight-bold)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--foreground)',
              marginBottom: '16px',
            }}
          >
            Border Radius Tokens
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'var(--accent)',
                  borderRadius: 'var(--radius)',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-label)',
                  color: 'var(--foreground)',
                }}
              >
                Default (3px)
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'var(--accent)',
                  borderRadius: 'var(--radius-card)',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-label)',
                  color: 'var(--foreground)',
                }}
              >
                Card (5px)
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'var(--accent)',
                  borderRadius: 'var(--radius-modal)',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-label)',
                  color: 'var(--foreground)',
                }}
              >
                Modal (8px)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Section with HTML Buttons */}
      <div
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-card)',
          padding: '32px',
          marginBottom: '48px',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h4)',
            fontWeight: 'var(--font-weight-book)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'var(--foreground)',
            marginBottom: '24px',
          }}
        >
          Interactive Elements
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
            color: 'var(--muted-foreground)',
            marginBottom: '24px',
          }}
        >
          All interactive elements use design system tokens for consistent styling across the
          application.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-label)',
              fontWeight: 'var(--font-weight-bold)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              padding: '12px 24px',
              background: 'var(--primary)',
              color: 'var(--primary-foreground)',
              border: 'none',
              borderRadius: 'var(--radius)',
              cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Primary Button
          </button>
          <button
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-label)',
              fontWeight: 'var(--font-weight-bold)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              padding: '12px 24px',
              background: 'var(--accent)',
              color: 'var(--accent-foreground)',
              border: 'none',
              borderRadius: 'var(--radius)',
              cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Accent Button
          </button>
          <button
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-label)',
              fontWeight: 'var(--font-weight-bold)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              padding: '12px 24px',
              background: 'var(--secondary)',
              color: 'var(--secondary-foreground)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--muted)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--secondary)')}
          >
            Secondary Button
          </button>
          <button
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-label)',
              fontWeight: 'var(--font-weight-bold)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              padding: '12px 24px',
              background: 'var(--destructive)',
              color: 'var(--destructive-foreground)',
              border: 'none',
              borderRadius: 'var(--radius)',
              cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Destructive Button
          </button>
        </div>
      </div>

      {/* Documentation Section */}
      <div
        style={{
          background: 'var(--accent)',
          color: 'var(--accent-foreground)',
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
            marginBottom: '16px',
          }}
        >
          Design System Integration
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
            marginBottom: '16px',
            opacity: 0.9,
          }}
        >
          The Chakra UI provider is configured to automatically consume all LexusKit design tokens
          through CSS variables. This ensures:
        </p>
        <ul
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
            listStyleType: 'disc',
            paddingLeft: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            opacity: 0.9,
          }}
        >
          <li>Consistent styling across all components</li>
          <li>Easy theme updates by modifying CSS variables</li>
          <li>Full design system fidelity</li>
          <li>Seamless integration between plain HTML and Chakra UI components</li>
        </ul>
      </div>
    </div>
  );
}
