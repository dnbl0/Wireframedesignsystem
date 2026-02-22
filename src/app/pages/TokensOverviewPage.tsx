import { Link } from 'react-router';
import { tokenCategories } from '../data/tokens';

export default function TokensPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h2)',
            fontWeight: 'var(--font-weight-book)',
          }}
          className="uppercase tracking-wider text-foreground mb-4"
        >
          Design Tokens
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
          }}
          className="text-muted-foreground max-w-3xl"
        >
          Browse and visualize all design tokens from the token library. Each token category includes
          documentation, values, and component usage mapping.
        </p>
      </div>

      {/* Token Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {tokenCategories.map((category) => {
          const categoryUrls: Record<string, string> = {
            spacing: '/tokens/spacing',
            colors: '/tokens/colors',
            typography: '/tokens/typography',
            border: '/tokens/border-radius',
            screen: '/tokens/responsive',
          };

          return (
            <Link
              key={category.id}
              to={categoryUrls[category.id]}
              className="group bg-card border border-border overflow-hidden hover:border-accent transition-colors"
              style={{ borderRadius: 'var(--radius-card)' }}
            >
              {/* Icon Preview */}
              <div className="aspect-video bg-background flex items-center justify-center border-b border-border">
                <div className="text-7xl group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
              </div>

              {/* Info */}
              <div className="p-6 border-t border-border">
                <h3
                  style={{
                    fontFamily: 'var(--font-family-nobel)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 'var(--font-weight-bold)',
                  }}
                  className="uppercase tracking-wider text-foreground mb-2 group-hover:text-accent transition-colors"
                >
                  {category.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-family-nobel)',
                    fontSize: 'var(--text-label)',
                  }}
                  className="text-muted-foreground line-clamp-3"
                >
                  {category.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Additional Info */}
      <div
        style={{ borderRadius: 'var(--radius-card)' }}
        className="bg-card border border-border p-8"
      >
        <h2
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h4)',
            fontWeight: 'var(--font-weight-bold)',
          }}
          className="uppercase tracking-wider text-foreground mb-4"
        >
          About Design Tokens
        </h2>
        <div className="space-y-4">
          <p
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-body)',
            }}
            className="text-muted-foreground"
          >
            Design tokens are the visual design atoms of the design system — specifically, they are named
            entities that store visual design attributes. We use them in place of hard-coded values
            in order to maintain a scalable and consistent visual system.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-body)',
            }}
            className="text-muted-foreground"
          >
            Each token category contains specific types of design decisions. Click on any category above
            to explore the tokens, see interactive examples, and learn which components use them.
          </p>
        </div>
      </div>
    </div>
  );
}
