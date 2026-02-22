import { Link } from 'react-router';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { sampleTokens, tokenComponentMapping } from '../data/tokens';
import { TokenName } from '../components/TokenName';
import { TypographyTable } from '../components/TypographyTable';
import { PrimitiveFontSizeTable, PrimitiveFontWeightTable, PrimitiveLineHeightTable } from '../components/PrimitiveTypographyTables';

export default function TokenTypographyPage() {
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
          <span className="text-5xl">📝</span>
          <h1
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-h2)',
              fontWeight: 'var(--font-weight-book)',
            }}
            className="uppercase tracking-wider text-foreground"
          >
            Typography
          </h1>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
          }}
          className="text-muted-foreground max-w-3xl"
        >
          Typography tokens define font sizes, weights, and line heights for consistent text styling
          across the design system. Includes both semantic tokens (font.heading.large) and primitive
          tokens (font.size.24).
        </p>
      </div>

      {/* Semantic Typography */}
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h3)',
            fontWeight: 'var(--font-weight-bold)',
          }}
          className="uppercase tracking-wider text-foreground mb-6"
        >
          Semantic Typography
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
          }}
          className="text-muted-foreground mb-8"
        >
          Semantic tokens provide meaningful names for specific use cases, making it easier to maintain
          consistency and update typography across the system.
        </p>

        {/* Headings */}
        <div className="mb-12">
          <h3
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-h4)',
              fontWeight: 'var(--font-weight-bold)',
            }}
            className="uppercase tracking-wider text-foreground mb-4"
          >
            Headings
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-body)',
            }}
            className="text-muted-foreground mb-6"
          >
            Heading tokens for titles, section headers, and hierarchical content.
          </p>
          <TypographyTable tokens={sampleTokens.typography.semantic.headings} />
        </div>

        {/* Body */}
        <div className="mb-12">
          <h3
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-h4)',
              fontWeight: 'var(--font-weight-bold)',
            }}
            className="uppercase tracking-wider text-foreground mb-4"
          >
            Body
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-body)',
            }}
            className="text-muted-foreground mb-6"
          >
            Body text tokens for paragraphs, descriptions, and general content.
          </p>
          <TypographyTable tokens={sampleTokens.typography.semantic.body} />
        </div>

        {/* Subtitle */}
        <div className="mb-12">
          <h3
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-h4)',
              fontWeight: 'var(--font-weight-bold)',
            }}
            className="uppercase tracking-wider text-foreground mb-4"
          >
            Subtitle
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-body)',
            }}
            className="text-muted-foreground mb-6"
          >
            Subtitle tokens for supporting text, taglines, and secondary headings.
          </p>
          <TypographyTable tokens={sampleTokens.typography.semantic.subtitle} />
        </div>

        {/* Label */}
        <div className="mb-12">
          <h3
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-h4)',
              fontWeight: 'var(--font-weight-bold)',
            }}
            className="uppercase tracking-wider text-foreground mb-4"
          >
            Label
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-body)',
            }}
            className="text-muted-foreground mb-6"
          >
            Label tokens for form labels, buttons, captions, and small text.
          </p>
          <TypographyTable tokens={sampleTokens.typography.semantic.label} />
        </div>
      </div>

      {/* Primitive Typography */}
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h3)',
            fontWeight: 'var(--font-weight-bold)',
          }}
          className="uppercase tracking-wider text-foreground mb-6"
        >
          Primitive Typography
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
          }}
          className="text-muted-foreground mb-8"
        >
          Primitive tokens are the raw values that semantic tokens reference. Use these when you need
          precise control over typography outside of the semantic system.
        </p>

        {/* Font Size */}
        <div className="mb-12">
          <h3
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-h4)',
              fontWeight: 'var(--font-weight-bold)',
            }}
            className="uppercase tracking-wider text-foreground mb-4"
          >
            Font Size
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-body)',
            }}
            className="text-muted-foreground mb-6"
          >
            Raw font size values in pixels and rem units.
          </p>
          <PrimitiveFontSizeTable tokens={sampleTokens.typography.primitive.fontSize} />
        </div>

        {/* Font Weight */}
        <div className="mb-12">
          <h3
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-h4)',
              fontWeight: 'var(--font-weight-bold)',
            }}
            className="uppercase tracking-wider text-foreground mb-4"
          >
            Font Weight
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-body)',
            }}
            className="text-muted-foreground mb-6"
          >
            Available font weight values for the Nobel typeface.
          </p>
          <PrimitiveFontWeightTable tokens={sampleTokens.typography.primitive.fontWeight} />
        </div>

        {/* Line Height */}
        <div className="mb-12">
          <h3
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-h4)',
              fontWeight: 'var(--font-weight-bold)',
            }}
            className="uppercase tracking-wider text-foreground mb-4"
          >
            Line Height
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-body)',
            }}
            className="text-muted-foreground mb-6"
          >
            Line height values for consistent vertical rhythm and readability.
          </p>
          <PrimitiveLineHeightTable tokens={sampleTokens.typography.primitive.lineHeight} />
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
          Components that use these typography tokens in the design system.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {Object.entries(tokenComponentMapping)
            .filter(([token]) => token.includes('typography'))
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