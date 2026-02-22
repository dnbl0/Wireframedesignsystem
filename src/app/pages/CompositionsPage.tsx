import RowDoc from '../../imports/Row';
import CellDoc from '../../imports/Cell';
import ContainerDoc from '../../imports/Container';
import GridCompositionExample from '../../imports/GridCompositionExample';
import { WireframeCard } from '../components/WireframeCard';

export default function CompositionsPage() {
  return (
    <>
      {/* Introduction Section */}
      <div className="mb-16">
        <div className="max-w-4xl">
          <h2 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-h2)', fontWeight: 'var(--font-weight-book)' }} className="uppercase tracking-wider text-foreground mb-6">
            Compositions
          </h2>
          <p style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-body)' }} className="text-foreground leading-relaxed mb-8">
            Pre-built layout compositions combining Row, Cell, and Container components into reusable patterns. 
            These are like organisms in atomic design - complete UI sections ready to use.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6" style={{ borderRadius: 'var(--radius-card)' }}>
              <div className="w-12 h-12 bg-chart-1/20 rounded-lg mb-4 flex items-center justify-center" style={{ borderRadius: 'var(--radius-card)' }}>
                <div className="w-8 h-1 bg-chart-1"></div>
              </div>
              <h3 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-bold)' }} className="uppercase tracking-wider mb-2 text-foreground">Row</h3>
              <p style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }} className="text-muted-foreground">
                Layout component that contains and positions Cell components with flexible gap and wrapping options.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6" style={{ borderRadius: 'var(--radius-card)' }}>
              <div className="w-12 h-12 bg-accent/20 rounded-lg mb-4 flex items-center justify-center" style={{ borderRadius: 'var(--radius-card)' }}>
                <div className="w-6 h-6 border-2 border-accent border-dashed rounded" style={{ borderRadius: 'var(--radius)' }}></div>
              </div>
              <h3 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-bold)' }} className="uppercase tracking-wider mb-2 text-foreground">Cell</h3>
              <p style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }} className="text-muted-foreground">
                Flexible slot element used within Row containers to hold content like text, images, and components.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6" style={{ borderRadius: 'var(--radius-card)' }}>
              <div className="w-12 h-12 bg-chart-2/20 rounded-lg mb-4 flex items-center justify-center" style={{ borderRadius: 'var(--radius-card)' }}>
                <div className="space-y-1">
                  <div className="h-1 w-8 bg-chart-2"></div>
                  <div className="h-1 w-6 bg-chart-2"></div>
                  <div className="h-1 w-7 bg-chart-2"></div>
                </div>
              </div>
              <h3 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-bold)' }} className="uppercase tracking-wider mb-2 text-foreground">Container</h3>
              <p style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }} className="text-muted-foreground">
                Restricts component size with max-width options (12col, 10col, 8col, 6col, 4col).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Component Documentation Sections */}
      <div className="space-y-16">
        <section id="row-section" className="scroll-mt-20">
          <div className="bg-card rounded-2xl border border-border overflow-hidden" style={{ borderRadius: 'var(--radius-card)' }}>
            <RowDoc />
          </div>
        </section>

        <section id="cell-section" className="scroll-mt-20">
          <div className="bg-card rounded-2xl border border-border overflow-hidden" style={{ borderRadius: 'var(--radius-card)' }}>
            <CellDoc />
          </div>
        </section>

        <section id="container-section" className="scroll-mt-20">
          <div className="bg-card rounded-2xl border border-border overflow-hidden" style={{ borderRadius: 'var(--radius-card)' }}>
            <ContainerDoc />
          </div>
        </section>

        <section id="examples-section" className="scroll-mt-20">
          <div className="bg-card rounded-2xl border border-border overflow-hidden" style={{ borderRadius: 'var(--radius-card)' }}>
            <GridCompositionExample />
          </div>
        </section>
      </div>

      <section className="mt-16">
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground" style={{ borderRadius: 'var(--radius-card)' }}>
          <h2 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-h3)', fontWeight: 'var(--font-weight-book)' }} className="uppercase tracking-wider mb-4">
            Quick Layout Patterns
          </h2>
          <p style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-body)' }} className="text-primary-foreground/80 mb-8 max-w-2xl">
            Common patterns for building responsive layouts with the grid system.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <WireframeCard
              title="1 Column"
              description="Full-width single cell layout"
              cells={1}
            />
            <WireframeCard
              title="2 Columns"
              description="Split layout with gap options"
              cells={2}
            />
            <WireframeCard
              title="3 Columns"
              description="Multi-column grid pattern"
              cells={3}
            />
            <WireframeCard
              title="4 Columns"
              description="Complex grid with wrapping"
              cells={4}
            />
          </div>
        </div>
      </section>
    </>
  );
}
