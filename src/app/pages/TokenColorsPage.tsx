import { Link } from 'react-router';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { sampleTokens, tokenComponentMapping } from '../data/tokens';
import { TokenName } from '../components/TokenName';

export default function TokenColorsPage() {
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
          <span className="text-5xl">🎨</span>
          <h1
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-h2)',
              fontWeight: 'var(--font-weight-book)',
            }}
            className="uppercase tracking-wider text-foreground"
          >
            Colors
          </h1>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
          }}
          className="text-muted-foreground max-w-3xl"
        >
          Semantic color tokens for theming and visual hierarchy. Includes accent colors,
          foreground colors, elevation colors, and utility colors for states.
        </p>
      </div>

      {/* Accent Colors - Primary */}
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h4)',
            fontWeight: 'var(--font-weight-bold)',
          }}
          className="uppercase tracking-wider text-foreground mb-6"
        >
          Accent - Primary
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
          }}
          className="text-muted-foreground mb-6"
        >
          Primary accent colors used for main interactive elements and brand identity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleTokens.colors.accent.primary.map((color) => (
            <div
              key={color.name}
              style={{ borderRadius: 'var(--radius-card)' }}
              className="bg-card border border-border overflow-hidden hover:border-accent transition-colors"
            >
              <div
                style={{
                  backgroundColor: color.hex,
                  height: '160px',
                }}
              />
              <div className="p-6">
                <span
                  style={{
                    fontFamily: 'var(--font-family-nobel)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 'var(--font-weight-bold)',
                  }}
                  className="uppercase tracking-wider text-foreground block mb-3"
                >
                  {color.name}
                </span>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span
                      style={{
                        fontFamily: 'var(--font-family-nobel)',
                        fontSize: 'var(--text-label)',
                      }}
                      className="text-muted-foreground"
                    >
                      HEX
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-family-nobel)',
                        fontSize: 'var(--text-label)',
                        fontWeight: 'var(--font-weight-bold)',
                      }}
                      className="text-foreground"
                    >
                      {color.hex}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span
                      style={{
                        fontFamily: 'var(--font-family-nobel)',
                        fontSize: 'var(--text-label)',
                      }}
                      className="text-muted-foreground"
                    >
                      RGBA
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-family-nobel)',
                        fontSize: 'var(--text-label)',
                        fontWeight: 'var(--font-weight-bold)',
                      }}
                      className="text-foreground"
                    >
                      {color.rgba.join(', ')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accent Colors - Secondary */}
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h4)',
            fontWeight: 'var(--font-weight-bold)',
          }}
          className="uppercase tracking-wider text-foreground mb-6"
        >
          Accent - Secondary
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
          }}
          className="text-muted-foreground mb-6"
        >
          Secondary accent colors for supporting interactive elements and highlights.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleTokens.colors.accent.secondary.map((color) => (
            <div
              key={color.name}
              style={{ borderRadius: 'var(--radius-card)' }}
              className="bg-card border border-border overflow-hidden hover:border-accent transition-colors"
            >
              <div
                style={{
                  backgroundColor: color.hex,
                  height: '160px',
                }}
              />
              <div className="p-6">
                <span
                  style={{
                    fontFamily: 'var(--font-family-nobel)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 'var(--font-weight-bold)',
                  }}
                  className="uppercase tracking-wider text-foreground block mb-3"
                >
                  {color.name}
                </span>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span
                      style={{
                        fontFamily: 'var(--font-family-nobel)',
                        fontSize: 'var(--text-label)',
                      }}
                      className="text-muted-foreground"
                    >
                      HEX
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-family-nobel)',
                        fontSize: 'var(--text-label)',
                        fontWeight: 'var(--font-weight-bold)',
                      }}
                      className="text-foreground"
                    >
                      {color.hex}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span
                      style={{
                        fontFamily: 'var(--font-family-nobel)',
                        fontSize: 'var(--text-label)',
                      }}
                      className="text-muted-foreground"
                    >
                      RGBA
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-family-nobel)',
                        fontSize: 'var(--text-label)',
                        fontWeight: 'var(--font-weight-bold)',
                      }}
                      className="text-foreground"
                    >
                      {color.rgba.join(', ')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Foreground Colors */}
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h4)',
            fontWeight: 'var(--font-weight-bold)',
          }}
          className="uppercase tracking-wider text-foreground mb-6"
        >
          Foreground Colors
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
          }}
          className="text-muted-foreground mb-6"
        >
          Text and icon colors for primary content.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleTokens.colors.foreground.map((color) => (
            <div
              key={color.name}
              style={{ borderRadius: 'var(--radius-card)' }}
              className="bg-card border border-border overflow-hidden hover:border-accent transition-colors"
            >
              <div
                style={{
                  backgroundColor: color.hex,
                  height: '160px',
                }}
              />
              <div className="p-6">
                <span
                  style={{
                    fontFamily: 'var(--font-family-nobel)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 'var(--font-weight-bold)',
                  }}
                  className="uppercase tracking-wider text-foreground block mb-3"
                >
                  {color.name}
                </span>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span
                      style={{
                        fontFamily: 'var(--font-family-nobel)',
                        fontSize: 'var(--text-label)',
                      }}
                      className="text-muted-foreground"
                    >
                      HEX
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-family-nobel)',
                        fontSize: 'var(--text-label)',
                        fontWeight: 'var(--font-weight-bold)',
                      }}
                      className="text-foreground"
                    >
                      {color.hex}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span
                      style={{
                        fontFamily: 'var(--font-family-nobel)',
                        fontSize: 'var(--text-label)',
                      }}
                      className="text-muted-foreground"
                    >
                      RGBA
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-family-nobel)',
                        fontSize: 'var(--text-label)',
                        fontWeight: 'var(--font-weight-bold)',
                      }}
                      className="text-foreground"
                    >
                      {color.rgba.join(', ')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Elevation Colors */}
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h4)',
            fontWeight: 'var(--font-weight-bold)',
          }}
          className="uppercase tracking-wider text-foreground mb-6"
        >
          Elevation Colors
        </h2>
        
        {/* Raised */}
        <div className="mb-8">
          <h3
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-body)',
              fontWeight: 'var(--font-weight-bold)',
            }}
            className="uppercase tracking-wider text-foreground mb-4"
          >
            Raised
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-body)',
            }}
            className="text-muted-foreground mb-6"
          >
            Colors for elevated surfaces like cards and modals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleTokens.colors.elevation.raised.map((color) => (
              <div
                key={color.name}
                style={{ borderRadius: 'var(--radius-card)' }}
                className="bg-card border border-border overflow-hidden hover:border-accent transition-colors"
              >
                <div
                  style={{
                    backgroundColor: color.hex,
                    height: '120px',
                    border: '1px solid var(--color-border)',
                  }}
                />
                <div className="p-6">
                  <span
                    style={{
                      fontFamily: 'var(--font-family-nobel)',
                      fontSize: 'var(--text-body)',
                      fontWeight: 'var(--font-weight-bold)',
                    }}
                    className="uppercase tracking-wider text-foreground block mb-3"
                  >
                    {color.name}
                  </span>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span
                        style={{
                          fontFamily: 'var(--font-family-nobel)',
                          fontSize: 'var(--text-label)',
                        }}
                        className="text-muted-foreground"
                      >
                        HEX
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-family-nobel)',
                          fontSize: 'var(--text-label)',
                          fontWeight: 'var(--font-weight-bold)',
                        }}
                        className="text-foreground"
                      >
                        {color.hex}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inset */}
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-body)',
              fontWeight: 'var(--font-weight-bold)',
            }}
            className="uppercase tracking-wider text-foreground mb-4"
          >
            Inset
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-body)',
            }}
            className="text-muted-foreground mb-6"
          >
            Colors for inset or recessed surfaces like input fields.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleTokens.colors.elevation.inset.map((color) => (
              <div
                key={color.name}
                style={{ borderRadius: 'var(--radius-card)' }}
                className="bg-card border border-border overflow-hidden hover:border-accent transition-colors"
              >
                <div
                  style={{
                    backgroundColor: color.hex,
                    height: '120px',
                    border: '1px solid var(--color-border)',
                  }}
                />
                <div className="p-6">
                  <span
                    style={{
                      fontFamily: 'var(--font-family-nobel)',
                      fontSize: 'var(--text-body)',
                      fontWeight: 'var(--font-weight-bold)',
                    }}
                    className="uppercase tracking-wider text-foreground block mb-3"
                  >
                    {color.name}
                  </span>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span
                        style={{
                          fontFamily: 'var(--font-family-nobel)',
                          fontSize: 'var(--text-label)',
                        }}
                        className="text-muted-foreground"
                      >
                        HEX
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-family-nobel)',
                          fontSize: 'var(--text-label)',
                          fontWeight: 'var(--font-weight-bold)',
                        }}
                        className="text-foreground"
                      >
                        {color.hex}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Utility Colors */}
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h4)',
            fontWeight: 'var(--font-weight-bold)',
          }}
          className="uppercase tracking-wider text-foreground mb-6"
        >
          Utility Colors
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
          }}
          className="text-muted-foreground mb-6"
        >
          Semantic colors for communicating status, feedback, and state to users.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Object.entries(sampleTokens.colors.utility).map(([key, colors]) => (
            <div key={key}>
              {colors.map((color) => (
                <div
                  key={color.name}
                  style={{ borderRadius: 'var(--radius-card)' }}
                  className="bg-card border border-border overflow-hidden hover:border-accent transition-colors"
                >
                  <div
                    style={{
                      backgroundColor: color.hex,
                      height: '120px',
                    }}
                  />
                  <div className="p-4">
                    <span
                      style={{
                        fontFamily: 'var(--font-family-nobel)',
                        fontSize: 'var(--text-body)',
                        fontWeight: 'var(--font-weight-bold)',
                      }}
                      className="uppercase tracking-wider text-foreground block mb-2"
                    >
                      {key}
                    </span>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span
                          style={{
                            fontFamily: 'var(--font-family-nobel)',
                            fontSize: 'var(--text-label)',
                          }}
                          className="text-muted-foreground text-xs"
                        >
                          {color.hex}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
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
          Components that use these color tokens in the design system.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {Object.entries(tokenComponentMapping)
            .filter(([token]) => token.includes('color'))
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