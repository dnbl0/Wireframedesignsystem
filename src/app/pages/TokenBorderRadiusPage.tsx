import { Link } from 'react-router';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { sampleTokens, tokenComponentMapping } from '../data/tokens';
import { TokenName } from '../components/TokenName';

export default function TokenBorderRadiusPage() {
  return (
    <div className="space-y-12">
      {/* Back Navigation */}
      <Link
        to="/tokens"
        style={{
          fontFamily: 'var(--font-family-nobel)',
          fontSize: 'var(--text-body)',
        }}
        className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Tokens
      </Link>

      {/* Header */}
      <div>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl">◻️</span>
          <h1
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-h2)',
              fontWeight: 'var(--font-weight-book)',
            }}
            className="uppercase tracking-wider text-foreground"
          >
            Border Radius
          </h1>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
          }}
          className="text-muted-foreground max-w-3xl"
        >
          Border radius tokens for consistent rounded corners across all UI elements.
          Includes small, medium, and large radius values for different component scales.
        </p>
      </div>

      {/* Border Radius Scale */}
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h4)',
            fontWeight: 'var(--font-weight-bold)',
          }}
          className="uppercase tracking-wider text-foreground mb-6"
        >
          Radius Scale
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
          }}
          className="text-muted-foreground mb-6"
        >
          Three primary border radius values used throughout the design system for different component sizes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleTokens.borderRadius.map((token) => (
            <div
              key={token.name}
              style={{ borderRadius: 'var(--radius-card)' }}
              className="bg-card border border-border p-8 hover:border-accent transition-colors"
            >
              <div className="flex flex-col items-center gap-6">
                <div
                  style={{
                    width: '180px',
                    height: '180px',
                    backgroundColor: 'var(--color-accent)',
                    borderRadius: `${token.value}px`,
                  }}
                />
                <div className="text-center">
                  <TokenName name={token.name} />
                  <span
                    style={{
                      fontFamily: 'var(--font-family-nobel)',
                      fontSize: 'var(--text-h4)',
                      fontWeight: 'var(--font-weight-bold)',
                    }}
                    className="text-accent block mb-2"
                  >
                    {token.value}px
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-family-nobel)',
                      fontSize: 'var(--text-label)',
                    }}
                    className="text-muted-foreground"
                  >
                    {token.description}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Examples */}
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h4)',
            fontWeight: 'var(--font-weight-bold)',
          }}
          className="uppercase tracking-wider text-foreground mb-6"
        >
          Interactive Examples
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
          }}
          className="text-muted-foreground mb-6"
        >
          See how different border radius values affect various component shapes and sizes.
        </p>
        
        <div className="space-y-8">
          {sampleTokens.borderRadius.map((token) => (
            <div
              key={token.name}
              style={{ borderRadius: 'var(--radius-card)' }}
              className="bg-card border border-border p-8"
            >
              <div className="mb-6">
                <span
                  style={{
                    fontFamily: 'var(--font-family-nobel)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 'var(--font-weight-bold)',
                  }}
                  className="uppercase tracking-wider text-foreground"
                >
                  {token.name} - {token.value}px
                </span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Square */}
                <div className="flex flex-col items-center gap-3">
                  <div
                    style={{
                      width: '100px',
                      height: '100px',
                      backgroundColor: 'var(--color-accent)',
                      borderRadius: `${token.value}px`,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-family-nobel)',
                      fontSize: 'var(--text-label)',
                    }}
                    className="text-muted-foreground"
                  >
                    Square
                  </span>
                </div>
                
                {/* Wide Rectangle */}
                <div className="flex flex-col items-center gap-3">
                  <div
                    style={{
                      width: '140px',
                      height: '60px',
                      backgroundColor: 'var(--color-accent)',
                      borderRadius: `${token.value}px`,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-family-nobel)',
                      fontSize: 'var(--text-label)',
                    }}
                    className="text-muted-foreground"
                  >
                    Rectangle
                  </span>
                </div>
                
                {/* Small Button */}
                <div className="flex flex-col items-center gap-3">
                  <div
                    style={{
                      width: '80px',
                      height: '40px',
                      backgroundColor: 'var(--color-accent)',
                      borderRadius: `${token.value}px`,
                    }}
                    className="flex items-center justify-center"
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-family-nobel)',
                        fontSize: 'var(--text-label)',
                        fontWeight: 'var(--font-weight-bold)',
                      }}
                      className="text-white uppercase"
                    >
                      Button
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-family-nobel)',
                      fontSize: 'var(--text-label)',
                    }}
                    className="text-muted-foreground"
                  >
                    Button
                  </span>
                </div>
                
                {/* Badge */}
                <div className="flex flex-col items-center gap-3">
                  <div
                    style={{
                      width: '60px',
                      height: '24px',
                      backgroundColor: 'var(--color-accent)',
                      borderRadius: `${token.value}px`,
                    }}
                    className="flex items-center justify-center"
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-family-nobel)',
                        fontSize: '10px',
                        fontWeight: 'var(--font-weight-bold)',
                      }}
                      className="text-white uppercase"
                    >
                      Badge
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-family-nobel)',
                      fontSize: 'var(--text-label)',
                    }}
                    className="text-muted-foreground"
                  >
                    Badge
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison View */}
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h4)',
            fontWeight: 'var(--font-weight-bold)',
          }}
          className="uppercase tracking-wider text-foreground mb-6"
        >
          Side-by-Side Comparison
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
          }}
          className="text-muted-foreground mb-6"
        >
          Compare all border radius values at the same size to understand the differences.
        </p>
        
        <div
          style={{ borderRadius: 'var(--radius-card)' }}
          className="bg-card border border-border p-12"
        >
          <div className="flex flex-wrap justify-center items-end gap-12">
            {sampleTokens.borderRadius.map((token) => (
              <div key={token.name} className="flex flex-col items-center gap-4">
                <div
                  style={{
                    width: '160px',
                    height: '160px',
                    backgroundColor: 'var(--color-accent)',
                    borderRadius: `${token.value}px`,
                  }}
                />
                <div className="text-center">
                  <TokenName name={token.name} />
                  <span
                    style={{
                      fontFamily: 'var(--font-family-nobel)',
                      fontSize: 'var(--text-label)',
                      fontWeight: 'var(--font-weight-bold)',
                    }}
                    className="text-accent"
                  >
                    {token.value}px
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Component Mapping */}
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h4)',
            fontWeight: 'var(--font-weight-bold)',
          }}
          className="uppercase tracking-wider text-foreground mb-6"
        >
          Component Usage
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
          }}
          className="text-muted-foreground mb-6"
        >
          Components that use these border radius tokens in the design system.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {Object.entries(tokenComponentMapping)
            .filter(([token]) => token.includes('border-radius'))
            .map(([token, components]) => (
              <div
                key={token}
                style={{ borderRadius: 'var(--radius-card)' }}
                className="p-4 bg-card border border-border hover:border-accent transition-colors"
              >
                <div className="mb-3">
                  <TokenName name={token} size="sm" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {components.map((component) => (
                    <Link
                      key={component}
                      to={`/components/${component.toLowerCase()}`}
                      style={{
                        fontFamily: 'var(--font-family-nobel)',
                        fontSize: 'var(--text-label)',
                        borderRadius: 'var(--radius-card)',
                      }}
                      className="px-2 py-1 bg-secondary text-foreground hover:bg-secondary/80 transition-colors inline-flex items-center gap-1"
                    >
                      {component}
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}