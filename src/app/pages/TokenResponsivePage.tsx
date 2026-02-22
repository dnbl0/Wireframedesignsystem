import { Link } from 'react-router';
import { ArrowLeft, Download } from 'lucide-react';
import { tokenSets } from '../data/tokens';

export default function TokenResponsivePage() {
  const responsiveTokenSets = tokenSets.filter((set) => set.type === 'screen');

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
          <span className="text-5xl">📱</span>
          <h1
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-h2)',
              fontWeight: 'var(--font-weight-book)',
            }}
            className="uppercase tracking-wider text-foreground"
          >
            Responsive
          </h1>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
          }}
          className="text-muted-foreground max-w-3xl"
        >
          Screen-specific tokens for responsive design. Includes desktop and mobile variants
          with optimized spacing, typography, and layout tokens for different viewport sizes.
        </p>
      </div>

      {/* Token Sets */}
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h4)',
            fontWeight: 'var(--font-weight-bold)',
          }}
          className="uppercase tracking-wider text-foreground mb-6"
        >
          Screen Token Sets
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
          }}
          className="text-muted-foreground mb-8"
        >
          Each screen size has its own set of tokens optimized for that viewport.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {responsiveTokenSets.map((set) => (
            <div
              key={set.id}
              style={{ borderRadius: 'var(--radius-card)' }}
              className="bg-card border border-border overflow-hidden hover:border-accent transition-colors"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-family-nobel)',
                        fontSize: 'var(--text-h4)',
                        fontWeight: 'var(--font-weight-bold)',
                      }}
                      className="uppercase tracking-wider text-foreground mb-2"
                    >
                      {set.name}
                    </h3>
                    <span
                      style={{
                        fontFamily: 'var(--font-family-nobel)',
                        fontSize: 'var(--text-label)',
                      }}
                      className="text-muted-foreground"
                    >
                      {set.tokenCount} tokens
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-family-nobel)',
                      fontSize: 'var(--text-label)',
                      borderRadius: 'var(--radius-card)',
                    }}
                    className="px-3 py-1 bg-orange-500/10 text-orange-500 uppercase"
                  >
                    {set.type}
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: 'var(--font-family-nobel)',
                    fontSize: 'var(--text-body)',
                  }}
                  className="text-muted-foreground mb-6"
                >
                  {set.description}
                </p>

                <div className="flex gap-3">
                  <a
                    href={set.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-family-nobel)',
                      fontSize: 'var(--text-body)',
                      borderRadius: 'var(--radius-card)',
                    }}
                    className="flex-1 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download Tokens
                  </a>
                </div>
              </div>

              {/* Visual representation */}
              <div className="border-t border-border bg-background p-8">
                <div className="flex items-center justify-center gap-8">
                  {set.id === 'desktop' ? (
                    // Desktop icon
                    <div className="flex flex-col items-center gap-4">
                      <div
                        style={{
                          width: '160px',
                          height: '100px',
                          backgroundColor: 'var(--color-card)',
                          border: '3px solid var(--color-accent)',
                          borderRadius: 'var(--radius-card)',
                        }}
                        className="relative"
                      >
                        <div
                          style={{
                            position: 'absolute',
                            bottom: '-12px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '80px',
                            height: '8px',
                            backgroundColor: 'var(--color-accent)',
                            borderRadius: 'var(--radius-card)',
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: 'var(--font-family-nobel)',
                          fontSize: 'var(--text-label)',
                        }}
                        className="text-muted-foreground"
                      >
                        Desktop • 1440px+
                      </span>
                    </div>
                  ) : (
                    // Mobile icon
                    <div className="flex flex-col items-center gap-4">
                      <div
                        style={{
                          width: '80px',
                          height: '140px',
                          backgroundColor: 'var(--color-card)',
                          border: '3px solid var(--color-accent)',
                          borderRadius: 'calc(var(--radius-card) * 2)',
                        }}
                        className="relative"
                      >
                        <div
                          style={{
                            position: 'absolute',
                            bottom: '8px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '24px',
                            height: '3px',
                            backgroundColor: 'var(--color-accent)',
                            borderRadius: 'var(--radius-card)',
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: 'var(--font-family-nobel)',
                          fontSize: 'var(--text-label)',
                        }}
                        className="text-muted-foreground"
                      >
                        Mobile • 320px-768px
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Breakpoints Reference */}
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h4)',
            fontWeight: 'var(--font-weight-bold)',
          }}
          className="uppercase tracking-wider text-foreground mb-6"
        >
          Breakpoints Reference
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
          }}
          className="text-muted-foreground mb-8"
        >
          Standard breakpoint values used in the responsive token system.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            style={{ borderRadius: 'var(--radius-card)' }}
            className="p-6 bg-card border border-border hover:border-accent transition-colors"
          >
            <span
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-h3)',
                fontWeight: 'var(--font-weight-bold)',
              }}
              className="text-accent block mb-2"
            >
              320px
            </span>
            <span
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-bold)',
              }}
              className="uppercase tracking-wider text-foreground block mb-2"
            >
              Mobile Small
            </span>
            <span
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-label)',
              }}
              className="text-muted-foreground"
            >
              Minimum mobile width
            </span>
          </div>

          <div
            style={{ borderRadius: 'var(--radius-card)' }}
            className="p-6 bg-card border border-border hover:border-accent transition-colors"
          >
            <span
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-h3)',
                fontWeight: 'var(--font-weight-bold)',
              }}
              className="text-accent block mb-2"
            >
              768px
            </span>
            <span
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-bold)',
              }}
              className="uppercase tracking-wider text-foreground block mb-2"
            >
              Tablet
            </span>
            <span
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-label)',
              }}
              className="text-muted-foreground"
            >
              Tablet and larger
            </span>
          </div>

          <div
            style={{ borderRadius: 'var(--radius-card)' }}
            className="p-6 bg-card border border-border hover:border-accent transition-colors"
          >
            <span
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-h3)',
                fontWeight: 'var(--font-weight-bold)',
              }}
              className="text-accent block mb-2"
            >
              1024px
            </span>
            <span
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-bold)',
              }}
              className="uppercase tracking-wider text-foreground block mb-2"
            >
              Desktop
            </span>
            <span
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-label)',
              }}
              className="text-muted-foreground"
            >
              Small desktop screens
            </span>
          </div>

          <div
            style={{ borderRadius: 'var(--radius-card)' }}
            className="p-6 bg-card border border-border hover:border-accent transition-colors"
          >
            <span
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-h3)',
                fontWeight: 'var(--font-weight-bold)',
              }}
              className="text-accent block mb-2"
            >
              1440px
            </span>
            <span
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-bold)',
              }}
              className="uppercase tracking-wider text-foreground block mb-2"
            >
              Desktop Large
            </span>
            <span
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-label)',
              }}
              className="text-muted-foreground"
            >
              Large desktop screens
            </span>
          </div>
        </div>
      </div>

      {/* Token Categories in Responsive Sets */}
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h4)',
            fontWeight: 'var(--font-weight-bold)',
          }}
          className="uppercase tracking-wider text-foreground mb-6"
        >
          What's Included
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
          }}
          className="text-muted-foreground mb-8"
        >
          Each responsive token set includes tokens for the following categories:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            style={{ borderRadius: 'var(--radius-card)' }}
            className="p-6 bg-card border border-border"
          >
            <div className="text-3xl mb-4">📐</div>
            <h3
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-bold)',
              }}
              className="uppercase tracking-wider text-foreground mb-2"
            >
              Screen Dimensions
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-label)',
              }}
              className="text-muted-foreground"
            >
              Width, height, and viewport specific measurements
            </p>
          </div>

          <div
            style={{ borderRadius: 'var(--radius-card)' }}
            className="p-6 bg-card border border-border"
          >
            <div className="text-3xl mb-4">📝</div>
            <h3
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-bold)',
              }}
              className="uppercase tracking-wider text-foreground mb-2"
            >
              Typography
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-label)',
              }}
              className="text-muted-foreground"
            >
              Screen-optimized font sizes and line heights
            </p>
          </div>

          <div
            style={{ borderRadius: 'var(--radius-card)' }}
            className="p-6 bg-card border border-border"
          >
            <div className="text-3xl mb-4">⚡</div>
            <h3
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-bold)',
              }}
              className="uppercase tracking-wider text-foreground mb-2"
            >
              Grid Layout
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-label)',
              }}
              className="text-muted-foreground"
            >
              Column counts, gutters, and margins
            </p>
          </div>

          <div
            style={{ borderRadius: 'var(--radius-card)' }}
            className="p-6 bg-card border border-border"
          >
            <div className="text-3xl mb-4">📏</div>
            <h3
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-bold)',
              }}
              className="uppercase tracking-wider text-foreground mb-2"
            >
              Spacing
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-label)',
              }}
              className="text-muted-foreground"
            >
              Responsive spacing scales and padding values
            </p>
          </div>

          <div
            style={{ borderRadius: 'var(--radius-card)' }}
            className="p-6 bg-card border border-border"
          >
            <div className="text-3xl mb-4">🎯</div>
            <h3
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-bold)',
              }}
              className="uppercase tracking-wider text-foreground mb-2"
            >
              Component Sizes
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-label)',
              }}
              className="text-muted-foreground"
            >
              Screen-specific component dimensions
            </p>
          </div>

          <div
            style={{ borderRadius: 'var(--radius-card)' }}
            className="p-6 bg-card border border-border"
          >
            <div className="text-3xl mb-4">🖼️</div>
            <h3
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-bold)',
              }}
              className="uppercase tracking-wider text-foreground mb-2"
            >
              Container Widths
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-label)',
              }}
              className="text-muted-foreground"
            >
              Maximum content widths per breakpoint
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
