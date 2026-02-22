import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { getComponentById } from '../data/components';
import { WireframeComponent } from '../components/WireframeComponent';
import { WireframeComponentLibrary } from '../components/WireframeComponents';

export default function ComponentDetailPage() {
  const { componentId } = useParams<{ componentId: string }>();
  const [selectedVariant, setSelectedVariant] = useState('default');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeTab, setActiveTab] = useState<'preview' | 'builder'>('preview');

  const component = componentId ? getComponentById(componentId) : null;

  if (!component) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
        <h2 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-h3)', fontWeight: 'var(--font-weight-book)' }} className="uppercase tracking-wider text-foreground">
          Component Not Found
        </h2>
        <Link to="/components" className="text-accent hover:underline" style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-body)' }}>
          ← Back to Components
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Link 
          to="/components" 
          className="inline-flex items-center gap-2 text-accent hover:underline mb-4"
          style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-body)' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Components
        </Link>
        <h1 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-h2)', fontWeight: 'var(--font-weight-book)' }} className="uppercase tracking-wider text-foreground mb-2">
          {component.name}
        </h1>
        <p style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-body)' }} className="text-muted-foreground">
          {component.description}
        </p>
        <div className="mt-4 flex items-center gap-2">
          <span style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }} className="px-3 py-1 bg-accent/10 text-accent rounded uppercase">
            {component.category}
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-border">
        <button
          onClick={() => setActiveTab('preview')}
          style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }}
          className={`px-4 py-2 uppercase tracking-wider transition-colors ${
            activeTab === 'preview'
              ? 'border-b-2 border-accent text-accent'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Preview & Documentation
        </button>
        <button
          onClick={() => setActiveTab('builder')}
          style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }}
          className={`px-4 py-2 uppercase tracking-wider transition-colors ${
            activeTab === 'builder'
              ? 'border-b-2 border-accent text-accent'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Layout Builder
        </button>
      </div>

      {/* Preview & Documentation Tab */}
      {activeTab === 'preview' && (
        <div className="space-y-8">
          {/* Controls */}
          <div className="bg-card border border-border rounded-lg p-6 space-y-6" style={{ borderRadius: 'var(--radius-card)' }}>
            {/* Variant Selector */}
            <div>
              <label style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', fontWeight: 'var(--font-weight-bold)' }} className="block uppercase tracking-wider text-foreground mb-3">
                Variant
              </label>
              <div className="flex flex-wrap gap-2">
                {component.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }}
                    className={`px-4 py-2 rounded uppercase tracking-wider transition-colors ${
                      selectedVariant === variant.id
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-secondary text-foreground hover:bg-accent/10'
                    }`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Toggle */}
            <div>
              <label style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', fontWeight: 'var(--font-weight-bold)' }} className="block uppercase tracking-wider text-foreground mb-3">
                Theme
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setTheme('light')}
                  style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }}
                  className={`px-4 py-2 rounded uppercase tracking-wider transition-colors ${
                    theme === 'light'
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-secondary text-foreground hover:bg-accent/10'
                  }`}
                >
                  Light
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }}
                  className={`px-4 py-2 rounded uppercase tracking-wider transition-colors ${
                    theme === 'dark'
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-secondary text-foreground hover:bg-accent/10'
                  }`}
                >
                  Dark
                </button>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="bg-card border border-border rounded-lg overflow-hidden" style={{ borderRadius: 'var(--radius-card)' }}>
            <div className="border-b border-border p-4">
              <h3 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-bold)' }} className="uppercase tracking-wider text-foreground">
                Component Preview
              </h3>
            </div>
            <div className={`p-12 flex items-center justify-center ${theme === 'dark' ? 'bg-primary' : 'bg-secondary/30'}`}>
              <div className="max-w-2xl w-full">
                <WireframeComponent 
                  componentId={component.id} 
                  variant={selectedVariant}
                  theme={theme}
                />
              </div>
            </div>
          </div>

          {/* Documentation */}
          <div className="bg-card border border-border rounded-lg p-6 space-y-6" style={{ borderRadius: 'var(--radius-card)' }}>
            <h3 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-bold)' }} className="uppercase tracking-wider text-foreground">
              Documentation
            </h3>

            {/* Usage */}
            <div>
              <h4 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', fontWeight: 'var(--font-weight-bold)' }} className="uppercase tracking-wider text-foreground mb-3">
                Usage
              </h4>
              <div className="bg-secondary/30 p-4 rounded" style={{ borderRadius: 'var(--radius)' }}>
                <code style={{ fontFamily: 'monospace', fontSize: 'var(--text-label)' }} className="text-foreground">
                  {`<${component.name} />`}
                </code>
              </div>
            </div>

            {/* Properties */}
            <div>
              <h4 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', fontWeight: 'var(--font-weight-bold)' }} className="uppercase tracking-wider text-foreground mb-3">
                Available Variants
              </h4>
              <ul className="space-y-2">
                {component.variants.map((variant) => (
                  <li key={variant.id} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></span>
                    <div>
                      <code style={{ fontFamily: 'monospace', fontSize: 'var(--text-label)' }} className="text-accent">
                        {variant.id}
                      </code>
                      <span style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }} className="text-muted-foreground ml-2">
                        - {variant.label}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guidelines */}
            <div>
              <h4 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', fontWeight: 'var(--font-weight-bold)' }} className="uppercase tracking-wider text-foreground mb-3">
                Design Guidelines
              </h4>
              <ul className="space-y-2" style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }}>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-muted-foreground/60 rounded-full mt-2"></span>
                  <span>Use this component consistently across your application</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-muted-foreground/60 rounded-full mt-2"></span>
                  <span>Ensure proper color contrast for accessibility</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-muted-foreground/60 rounded-full mt-2"></span>
                  <span>Test component behavior across different screen sizes</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-muted-foreground/60 rounded-full mt-2"></span>
                  <span>Follow the design system guidelines for spacing and sizing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Layout Builder Tab */}
      {activeTab === 'builder' && (
        <div className="space-y-4">
          <div className="bg-card border border-border rounded-lg p-6" style={{ borderRadius: 'var(--radius-card)' }}>
            <h3 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-bold)' }} className="uppercase tracking-wider text-foreground mb-4">
              Interactive Layout Builder
            </h3>
            <p style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }} className="text-muted-foreground mb-6">
              Use the layout builder below to see how this component works in context with other layout elements. 
              Drag and drop components to create realistic page compositions.
            </p>
          </div>

          <WireframeComponentLibrary highlightedComponent={component.id} />
        </div>
      )}
    </div>
  );
}
