import { Link } from 'react-router';
import { components } from '../data/components';
import { WireframeComponent } from '../components/WireframeComponent';

export default function ComponentsPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-h2)', fontWeight: 'var(--font-weight-book)' }} className="uppercase tracking-wider text-foreground mb-4">
          Components
        </h1>
        <p style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-body)' }} className="text-muted-foreground max-w-3xl">
          Browse our comprehensive component library. Each component includes documentation, usage examples, and an interactive layout builder.
        </p>
      </div>

      {/* Component Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {components.map((component) => (
          <Link
            key={component.id}
            to={`/components/${component.id}`}
            className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-colors"
            style={{ borderRadius: 'var(--radius-card)' }}
          >
            {/* Preview */}
            <div className="aspect-video bg-background flex items-center justify-center p-6 border-b border-border">
              <div className="w-full h-full flex items-center justify-center scale-75">
                <WireframeComponent componentId={component.id} theme="light" compact />
              </div>
            </div>

            {/* Info */}
            <div className="p-4 border-t border-border">
              <h3 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-bold)' }} className="uppercase tracking-wider text-foreground mb-2 group-hover:text-accent transition-colors">
                {component.name}
              </h3>
              <p style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }} className="text-muted-foreground line-clamp-2">
                {component.description}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }} className="px-2 py-1 bg-accent/10 text-accent rounded text-xs uppercase">
                  {component.category}
                </span>
                <span style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }} className="text-muted-foreground text-xs">
                  {component.variants.length} variant{component.variants.length !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}