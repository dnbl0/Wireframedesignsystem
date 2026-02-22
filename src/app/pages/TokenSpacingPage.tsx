import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { sampleTokens } from '../data/tokens';
import { TokenName } from '../components/TokenName';

export default function TokenSpacingPage() {
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
          <span className="text-5xl">📏</span>
          <h1
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-h2)',
              fontWeight: 'var(--font-weight-book)',
            }}
            className="uppercase tracking-wider text-foreground"
          >
            Spacing
          </h1>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
          }}
          className="text-muted-foreground max-w-3xl"
        >
          Dimension and spacing tokens for consistent layout spacing. Includes both static
          spacing values and scaled spacing for responsive layouts.
        </p>
      </div>

      {/* Static Spacing */}
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h4)',
            fontWeight: 'var(--font-weight-bold)',
          }}
          className="uppercase tracking-wider text-foreground mb-6"
        >
          Static Spacing
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
          }}
          className="text-muted-foreground mb-6"
        >
          Fixed spacing values that remain constant across all screen sizes.
        </p>
        <div className="space-y-3">
          {sampleTokens.spacing.static.map((token) => (
            <div
              key={token.name}
              style={{ borderRadius: 'var(--radius-card)' }}
              className="flex items-center gap-4 p-6 bg-card border border-border hover:border-accent transition-colors"
            >
              <div className="w-24">
                <TokenName name={token.name} />
              </div>
              <div className="flex-1 flex items-center gap-6">
                <div
                  style={{
                    width: `${token.value}px`,
                    height: '48px',
                    backgroundColor: 'var(--color-accent)',
                    borderRadius: 'var(--radius-card)',
                  }}
                />
                <div className="flex flex-col">
                  <span
                    style={{
                      fontFamily: 'var(--font-family-nobel)',
                      fontSize: 'var(--text-body)',
                      fontWeight: 'var(--font-weight-bold)',
                    }}
                    className="text-foreground"
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

      {/* Scaled Spacing */}
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h4)',
            fontWeight: 'var(--font-weight-bold)',
          }}
          className="uppercase tracking-wider text-foreground mb-6"
        >
          Scaled Spacing
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
          }}
          className="text-muted-foreground mb-6"
        >
          Responsive spacing values that scale based on screen size and viewport dimensions.
        </p>
        <div className="space-y-3">
          {sampleTokens.spacing.scaled.map((token) => (
            <div
              key={token.name}
              style={{ borderRadius: 'var(--radius-card)' }}
              className="flex items-center gap-4 p-6 bg-card border border-border hover:border-accent transition-colors"
            >
              <div className="w-40">
                <TokenName name={token.name} />
              </div>
              <div className="flex-1 flex items-center gap-6">
                <div
                  style={{
                    width: `${token.value}px`,
                    height: '48px',
                    backgroundColor: 'var(--color-secondary)',
                    borderRadius: 'var(--radius-card)',
                    border: '2px solid var(--color-border)',
                  }}
                />
                <div className="flex flex-col">
                  <span
                    style={{
                      fontFamily: 'var(--font-family-nobel)',
                      fontSize: 'var(--text-body)',
                      fontWeight: 'var(--font-weight-bold)',
                    }}
                    className="text-foreground"
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
    </div>
  );
}