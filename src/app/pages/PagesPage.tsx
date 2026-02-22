export default function PagesPage() {
  return (
    <section>
      <div className="mb-12">
        <h2 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-h2)', fontWeight: 'var(--font-weight-book)' }} className="uppercase tracking-wider text-foreground mb-4">
          Page Templates
        </h2>
        <p style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-body)' }} className="text-muted-foreground mb-8 max-w-3xl">
          Complete page layouts demonstrating how to combine components, compositions, and the layout system to build real-world interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Hero + Features Page */}
        <div className="bg-card border border-border rounded-lg overflow-hidden" style={{ borderRadius: 'var(--radius-card)' }}>
          <div className="p-6 border-b border-border">
            <h3 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-h5)', fontWeight: 'var(--font-weight-bold)' }} className="uppercase tracking-wider text-foreground">
              Landing Page
            </h3>
            <p style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }} className="text-muted-foreground mt-2">
              Hero section with features grid
            </p>
          </div>
          <div className="p-6 bg-secondary/30 space-y-4">
            <div className="h-32 bg-chart-1/20 border-2 border-dashed border-chart-1/40 rounded flex items-center justify-center" style={{ borderRadius: 'var(--radius)' }}>
              <span style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }} className="text-muted-foreground uppercase">Hero + CTA</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-24 bg-accent/20 border-2 border-dashed border-accent/40 rounded flex items-center justify-center" style={{ borderRadius: 'var(--radius)' }}>
                  <span style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }} className="text-muted-foreground text-xs">Feature</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dashboard Page */}
        <div className="bg-card border border-border rounded-lg overflow-hidden" style={{ borderRadius: 'var(--radius-card)' }}>
          <div className="p-6 border-b border-border">
            <h3 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-h5)', fontWeight: 'var(--font-weight-bold)' }} className="uppercase tracking-wider text-foreground">
              Dashboard
            </h3>
            <p style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }} className="text-muted-foreground mt-2">
              Stats, charts, and data cards
            </p>
          </div>
          <div className="p-6 bg-secondary/30 space-y-4">
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-16 bg-chart-2/20 border-2 border-dashed border-chart-2/40 rounded flex items-center justify-center" style={{ borderRadius: 'var(--radius)' }}>
                  <span style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }} className="text-muted-foreground text-xs">Stat</span>
                </div>
              ))}
            </div>
            <div className="h-32 bg-chart-3/20 border-2 border-dashed border-chart-3/40 rounded flex items-center justify-center" style={{ borderRadius: 'var(--radius)' }}>
              <span style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }} className="text-muted-foreground uppercase">Chart</span>
            </div>
          </div>
        </div>

        {/* Article Page */}
        <div className="bg-card border border-border rounded-lg overflow-hidden" style={{ borderRadius: 'var(--radius-card)' }}>
          <div className="p-6 border-b border-border">
            <h3 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-h5)', fontWeight: 'var(--font-weight-bold)' }} className="uppercase tracking-wider text-foreground">
              Article/Blog
            </h3>
            <p style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }} className="text-muted-foreground mt-2">
              Content-focused layout
            </p>
          </div>
          <div className="p-6 bg-secondary/30 space-y-4">
            <div className="h-24 bg-chart-4/20 border-2 border-dashed border-chart-4/40 rounded flex items-center justify-center" style={{ borderRadius: 'var(--radius)' }}>
              <span style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }} className="text-muted-foreground uppercase">Header Image</span>
            </div>
            <div className="space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-4 bg-muted-foreground/20 rounded" style={{ borderRadius: 'var(--radius)', width: i === 4 ? '60%' : '100%' }}></div>
              ))}
            </div>
          </div>
        </div>

        {/* E-commerce Page */}
        <div className="bg-card border border-border rounded-lg overflow-hidden" style={{ borderRadius: 'var(--radius-card)' }}>
          <div className="p-6 border-b border-border">
            <h3 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-h5)', fontWeight: 'var(--font-weight-bold)' }} className="uppercase tracking-wider text-foreground">
              E-commerce
            </h3>
            <p style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }} className="text-muted-foreground mt-2">
              Product grid with filters
            </p>
          </div>
          <div className="p-6 bg-secondary/30 space-y-4">
            <div className="h-12 bg-chart-5/20 border-2 border-dashed border-chart-5/40 rounded flex items-center justify-center" style={{ borderRadius: 'var(--radius)' }}>
              <span style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }} className="text-muted-foreground text-xs uppercase">Filters</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-24 bg-accent/20 border-2 border-dashed border-accent/40 rounded flex items-center justify-center" style={{ borderRadius: 'var(--radius)' }}>
                  <span style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }} className="text-muted-foreground text-xs">Product</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
