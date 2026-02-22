import { useState } from 'react';

export function WireframeExamples() {
  return (
    <div className="space-y-16 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light uppercase tracking-wider text-[#232632] mb-4">
          Wireframe Examples
        </h1>
        <p className="text-lg text-[#232632]/70 mb-12">
          Comprehensive visual guide to all layout options and configurations
        </p>

        {/* Row Configurations */}
        <RowConfigurations />

        {/* Cell Configurations */}
        <CellConfigurations />

        {/* Container Widths */}
        <ContainerWidths />

        {/* Complex Compositions */}
        <ComplexCompositions />
      </div>
    </div>
  );
}

function RowConfigurations() {
  const [cellCount, setCellCount] = useState(2);
  const [gap, setGap] = useState<'default' | 'none' | 'no-vertical'>('default');
  const [borderRadius, setBorderRadius] = useState(false);
  const [reverseWrap, setReverseWrap] = useState(false);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-light uppercase tracking-wider text-[#232632] mb-6">
        Row Configurations
      </h2>

      {/* Controls */}
      <div className="bg-[#f6f5f3] rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-[#232632] mb-2">
              Cell Count
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((count) => (
                <button
                  key={count}
                  onClick={() => setCellCount(count)}
                  className={`px-4 py-2 rounded ${
                    cellCount === count
                      ? 'bg-[#232632] text-white'
                      : 'bg-white text-[#232632] border border-[#dad8ce]'
                  }`}
                >
                  {count}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-[#232632] mb-2">
              Gap
            </label>
            <select
              value={gap}
              onChange={(e) => setGap(e.target.value as any)}
              className="w-full px-4 py-2 rounded border border-[#dad8ce] bg-white"
            >
              <option value="default">Default</option>
              <option value="none">None</option>
              <option value="no-vertical">No Vertical</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-[#232632] mb-2">
              Border Radius
            </label>
            <button
              onClick={() => setBorderRadius(!borderRadius)}
              className={`w-full px-4 py-2 rounded ${
                borderRadius
                  ? 'bg-[#33a329] text-white'
                  : 'bg-white text-[#232632] border border-[#dad8ce]'
              }`}
            >
              {borderRadius ? 'Yes' : 'No'}
            </button>
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-[#232632] mb-2">
              Reverse Wrap
            </label>
            <button
              onClick={() => setReverseWrap(!reverseWrap)}
              className={`w-full px-4 py-2 rounded ${
                reverseWrap
                  ? 'bg-[#33a329] text-white'
                  : 'bg-white text-[#232632] border border-[#dad8ce]'
              }`}
            >
              {reverseWrap ? 'Yes' : 'No'}
            </button>
          </div>
        </div>
      </div>

      {/* Wireframe Preview */}
      <div className="bg-white border-2 border-[#dad8ce] rounded-lg p-8">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm font-bold uppercase tracking-wider text-[#232632]">
            Row Preview
          </div>
          <div className="text-xs text-[#232632]/50 uppercase tracking-wider">
            {cellCount} {cellCount === 1 ? 'Cell' : 'Cells'} • Gap: {gap} • Radius: {borderRadius ? 'Yes' : 'No'}
          </div>
        </div>

        {/* Row Container */}
        <div 
          className="bg-[#b2b3f0] border-2 border-dashed border-[#9747ff] p-4"
          style={{ 
            borderRadius: borderRadius && gap === 'none' ? '8px' : '0',
            overflow: borderRadius && gap === 'none' ? 'hidden' : 'visible'
          }}
        >
          <div 
            className={`flex flex-wrap ${reverseWrap ? 'flex-wrap-reverse' : ''} ${
              gap === 'default' ? 'gap-4' : gap === 'no-vertical' ? 'gap-x-4' : 'gap-0'
            }`}
          >
            {Array.from({ length: cellCount }).map((_, i) => (
              <div
                key={i}
                className="bg-[#ffd1ef] border-2 border-dashed border-[#ff47c0] flex items-center justify-center min-h-[120px] flex-1 min-w-[200px]"
                style={{ borderRadius: borderRadius && gap !== 'none' ? '4px' : '0' }}
              >
                <span className="text-sm font-bold uppercase tracking-wider text-[#232632]">
                  Cell {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All Row Patterns */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RowPattern
          title="1 Cell - Full Width"
          cells={1}
          gap="none"
          description="Single cell taking full row width"
        />
        <RowPattern
          title="2 Cells - Equal Split"
          cells={2}
          gap="default"
          description="Two cells with default gap"
        />
        <RowPattern
          title="3 Cells - Wraps All"
          cells={3}
          gap="default"
          description="Three cells wrap together"
        />
        <RowPattern
          title="4 Cells - 2x2 Wrap"
          cells={4}
          gap="default"
          description="Four cells wrap in 2x2 pattern"
        />
        <RowPattern
          title="2 Cells - No Gap"
          cells={2}
          gap="none"
          borderRadius={true}
          description="Seamless cells with border radius"
        />
        <RowPattern
          title="3 Cells - No Vertical Gap"
          cells={3}
          gap="no-vertical"
          description="Horizontal gaps only"
        />
      </div>
    </section>
  );
}

function RowPattern({ 
  title, 
  cells, 
  gap, 
  borderRadius = false,
  description 
}: { 
  title: string; 
  cells: number; 
  gap: 'default' | 'none' | 'no-vertical';
  borderRadius?: boolean;
  description: string;
}) {
  return (
    <div className="bg-[#f6f5f3] rounded-lg p-6 border border-[#dad8ce]">
      <h3 className="text-sm font-bold uppercase tracking-wider text-[#232632] mb-1">
        {title}
      </h3>
      <p className="text-xs text-[#232632]/60 mb-4">{description}</p>
      <div 
        className="bg-[#b2b3f0] border-2 border-dashed border-[#9747ff] p-3"
        style={{ 
          borderRadius: borderRadius && gap === 'none' ? '8px' : '0',
          overflow: borderRadius && gap === 'none' ? 'hidden' : 'visible'
        }}
      >
        <div 
          className={`flex flex-wrap ${
            gap === 'default' ? 'gap-2' : gap === 'no-vertical' ? 'gap-x-2' : 'gap-0'
          }`}
        >
          {Array.from({ length: cells }).map((_, i) => (
            <div
              key={i}
              className="bg-[#ffd1ef] border border-dashed border-[#ff47c0] flex items-center justify-center h-16 flex-1 min-w-[80px]"
            >
              <span className="text-xs">{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CellConfigurations() {
  const [elevation, setElevation] = useState<'no' | 'raised' | 'inset'>('no');
  const [cellRadius, setCellRadius] = useState(false);
  const [verticalAlign, setVerticalAlign] = useState<'top' | 'center' | 'bottom'>('center');
  const [padding, setPadding] = useState(true);
  const [cellGap, setCellGap] = useState(true);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-light uppercase tracking-wider text-[#232632] mb-6">
        Cell Configurations
      </h2>

      {/* Controls */}
      <div className="bg-[#f6f5f3] rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-[#232632] mb-2">
              Elevation
            </label>
            <select
              value={elevation}
              onChange={(e) => setElevation(e.target.value as any)}
              className="w-full px-4 py-2 rounded border border-[#dad8ce] bg-white"
            >
              <option value="no">No</option>
              <option value="raised">Raised</option>
              <option value="inset">Inset</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-[#232632] mb-2">
              Radius
            </label>
            <button
              onClick={() => setCellRadius(!cellRadius)}
              className={`w-full px-4 py-2 rounded ${
                cellRadius
                  ? 'bg-[#33a329] text-white'
                  : 'bg-white text-[#232632] border border-[#dad8ce]'
              }`}
            >
              {cellRadius ? 'Yes' : 'No'}
            </button>
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-[#232632] mb-2">
              V-Align
            </label>
            <select
              value={verticalAlign}
              onChange={(e) => setVerticalAlign(e.target.value as any)}
              className="w-full px-4 py-2 rounded border border-[#dad8ce] bg-white"
            >
              <option value="top">Top</option>
              <option value="center">Center</option>
              <option value="bottom">Bottom</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-[#232632] mb-2">
              Padding
            </label>
            <button
              onClick={() => setPadding(!padding)}
              className={`w-full px-4 py-2 rounded ${
                padding
                  ? 'bg-[#33a329] text-white'
                  : 'bg-white text-[#232632] border border-[#dad8ce]'
              }`}
            >
              {padding ? 'Yes' : 'None'}
            </button>
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-[#232632] mb-2">
              Gap
            </label>
            <button
              onClick={() => setCellGap(!cellGap)}
              className={`w-full px-4 py-2 rounded ${
                cellGap
                  ? 'bg-[#33a329] text-white'
                  : 'bg-white text-[#232632] border border-[#dad8ce]'
              }`}
            >
              {cellGap ? 'Yes' : 'No'}
            </button>
          </div>
        </div>
      </div>

      {/* Wireframe Preview */}
      <div className="bg-white border-2 border-[#dad8ce] rounded-lg p-8">
        <div className="text-sm font-bold uppercase tracking-wider text-[#232632] mb-4">
          Cell Preview
        </div>

        <div className="bg-[#b2b3f0] border-2 border-dashed border-[#9747ff] p-4 flex gap-4">
          <div
            className={`bg-[#ffd1ef] border-2 border-dashed border-[#ff47c0] flex-1 min-h-[200px] flex ${
              verticalAlign === 'top' ? 'items-start' :
              verticalAlign === 'bottom' ? 'items-end' : 'items-center'
            } justify-center ${padding ? 'p-8' : 'p-0'}`}
            style={{
              borderRadius: cellRadius ? '8px' : '0',
              boxShadow: 
                elevation === 'raised' ? '0 4px 12px rgba(0,0,0,0.15)' :
                elevation === 'inset' ? 'inset 0 2px 8px rgba(0,0,0,0.1)' : 'none'
            }}
          >
            <div className={`bg-[#bbd7eb] rounded p-4 ${cellGap ? 'space-y-3' : 'space-y-0'}`}>
              <div className="h-4 bg-[#232632]/20 rounded w-32"></div>
              <div className="h-4 bg-[#232632]/20 rounded w-24"></div>
              <div className="h-4 bg-[#232632]/20 rounded w-28"></div>
            </div>
          </div>
        </div>
      </div>

      {/* All Cell Patterns */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CellPattern
          title="No Elevation"
          elevation="no"
          description="Flat cell with no shadow"
        />
        <CellPattern
          title="Raised Elevation"
          elevation="raised"
          description="Cell with drop shadow"
        />
        <CellPattern
          title="Inset Elevation"
          elevation="inset"
          description="Cell with inner shadow"
        />
        <CellPattern
          title="Top Aligned"
          verticalAlign="top"
          description="Content aligned to top"
        />
        <CellPattern
          title="Center Aligned"
          verticalAlign="center"
          description="Content vertically centered"
        />
        <CellPattern
          title="Bottom Aligned"
          verticalAlign="bottom"
          description="Content aligned to bottom"
        />
      </div>
    </section>
  );
}

function CellPattern({
  title,
  elevation = 'no',
  verticalAlign = 'center',
  description
}: {
  title: string;
  elevation?: 'no' | 'raised' | 'inset';
  verticalAlign?: 'top' | 'center' | 'bottom';
  description: string;
}) {
  return (
    <div className="bg-[#f6f5f3] rounded-lg p-4 border border-[#dad8ce]">
      <h3 className="text-sm font-bold uppercase tracking-wider text-[#232632] mb-1">
        {title}
      </h3>
      <p className="text-xs text-[#232632]/60 mb-4">{description}</p>
      <div
        className={`bg-[#ffd1ef] border border-dashed border-[#ff47c0] h-32 flex ${
          verticalAlign === 'top' ? 'items-start' :
          verticalAlign === 'bottom' ? 'items-end' : 'items-center'
        } justify-center p-4`}
        style={{
          boxShadow:
            elevation === 'raised' ? '0 2px 8px rgba(0,0,0,0.1)' :
            elevation === 'inset' ? 'inset 0 2px 4px rgba(0,0,0,0.1)' : 'none'
        }}
      >
        <div className="bg-[#bbd7eb] rounded px-3 py-2 text-xs">Content</div>
      </div>
    </div>
  );
}

function ContainerWidths() {
  const [selectedWidth, setSelectedWidth] = useState<string>('1280');

  const widths = [
    { label: '12 col', value: '1280', pixels: '1280px' },
    { label: '10 col', value: '1060', pixels: '1060px' },
    { label: '8 col', value: '840', pixels: '840px' },
    { label: '6 col', value: '620', pixels: '620px' },
    { label: '4 col', value: '400', pixels: '400px' },
    { label: 'None', value: 'full', pixels: '100%' },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-light uppercase tracking-wider text-[#232632] mb-6">
        Container Max-Widths
      </h2>

      {/* Width Selector */}
      <div className="bg-[#f6f5f3] rounded-lg p-6 mb-8">
        <label className="block text-sm font-bold uppercase tracking-wider text-[#232632] mb-4">
          Select Container Width
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {widths.map((width) => (
            <button
              key={width.value}
              onClick={() => setSelectedWidth(width.value)}
              className={`px-4 py-3 rounded text-sm ${
                selectedWidth === width.value
                  ? 'bg-[#232632] text-white'
                  : 'bg-white text-[#232632] border border-[#dad8ce]'
              }`}
            >
              <div className="font-bold">{width.label}</div>
              <div className="text-xs opacity-70">{width.pixels}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Container Preview */}
      <div className="bg-white border-2 border-[#dad8ce] rounded-lg p-8">
        <div className="text-sm font-bold uppercase tracking-wider text-[#232632] mb-4">
          Container Preview
        </div>
        
        {/* Full viewport reference */}
        <div className="bg-[#e3e1da] border-2 border-dashed border-[#232632]/30 p-4">
          <div className="text-xs text-[#232632]/50 uppercase tracking-wider mb-2">
            Full Viewport Reference (scaled to fit)
          </div>
          
          {/* Container - using percentage of 1280px as reference */}
          <div className="flex justify-center">
            <div
              className="bg-[#bbd7eb] border-2 border-dashed border-[#ff47c0] p-4 transition-all duration-300"
              style={{ 
                width: selectedWidth === 'full' ? '100%' : 
                       selectedWidth === '1280' ? '100%' :
                       selectedWidth === '1060' ? '82.8%' :
                       selectedWidth === '840' ? '65.6%' :
                       selectedWidth === '620' ? '48.4%' :
                       '31.25%'
              }}
            >
              <div className="text-xs text-[#232632] uppercase tracking-wider mb-2 text-center">
                {widths.find(w => w.value === selectedWidth)?.label} - {widths.find(w => w.value === selectedWidth)?.pixels}
              </div>
              <div className="bg-white/50 h-32 rounded flex items-center justify-center">
                <span className="text-sm text-[#232632]">Content Area</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Container Sizes Comparison */}
      <div className="mt-12">
        <h3 className="text-xl font-bold uppercase tracking-wider text-[#232632] mb-6">
          All Container Sizes (Proportional Comparison)
        </h3>
        <div className="bg-white border-2 border-[#dad8ce] rounded-lg p-8">
          <div className="space-y-6">
            {widths.map((width) => (
              <div key={width.value} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-bold uppercase tracking-wider text-[#232632]">
                    {width.label}
                  </div>
                  <div className="text-xs text-[#232632]/60">
                    {width.pixels}
                  </div>
                </div>
                <div className="bg-[#f6f5f3] p-2 rounded">
                  <div
                    className="bg-[#bbd7eb] border-2 border-dashed border-[#ff47c0] h-12 transition-all duration-300 flex items-center justify-center"
                    style={{
                      width: width.value === 'full' ? '100%' :
                             width.value === '1280' ? '100%' :
                             width.value === '1060' ? '82.8%' :
                             width.value === '840' ? '65.6%' :
                             width.value === '620' ? '48.4%' :
                             '31.25%'
                    }}
                  >
                    <span className="text-xs text-[#232632] font-mono">
                      {width.value === 'full' ? '100%' : 
                       width.value === '1280' ? '1280px (100%)' :
                       width.value === '1060' ? '1060px (82.8%)' :
                       width.value === '840' ? '840px (65.6%)' :
                       width.value === '620' ? '620px (48.4%)' :
                       '400px (31.25%)'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ComplexCompositions() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-light uppercase tracking-wider text-[#232632] mb-6">
        Complex Compositions
      </h2>
      <p className="text-[#232632]/70 mb-8">
        Real-world examples combining Row, Cell, and Container components
      </p>

      <div className="space-y-8">
        {/* Hero Section */}
        <CompositionExample
          title="Hero Section"
          description="Full-width row with 2 cells (50/50 split)"
        >
          <div className="bg-[#e3e1da] border-2 border-dashed border-[#232632]/30 p-4">
            <div className="bg-[#b2b3f0] border-2 border-dashed border-[#9747ff] p-3">
              <div className="flex gap-3">
                <div className="bg-[#ffd1ef] border border-dashed border-[#ff47c0] flex-1 h-40 flex items-center justify-center">
                  <span className="text-xs text-[#232632]">Text Content</span>
                </div>
                <div className="bg-[#ffd1ef] border border-dashed border-[#ff47c0] flex-1 h-40 flex items-center justify-center">
                  <span className="text-xs text-[#232632]">Image</span>
                </div>
              </div>
            </div>
          </div>
        </CompositionExample>

        {/* Feature Grid */}
        <CompositionExample
          title="Feature Grid"
          description="10-column container with 3 cells (wraps on mobile)"
        >
          <div className="bg-[#e3e1da] border-2 border-dashed border-[#232632]/30 p-4">
            <div className="max-w-[1060px] mx-auto">
              <div className="bg-[#b2b3f0] border-2 border-dashed border-[#9747ff] p-3 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="bg-[#ffd1ef] border border-dashed border-[#ff47c0] h-32 flex items-center justify-center rounded"
                      style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                    >
                      <span className="text-xs text-[#232632]">Feature {i}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CompositionExample>

        {/* Card Layout */}
        <CompositionExample
          title="Card Layout"
          description="12-column container with 4 cells, 2x2 wrap pattern"
        >
          <div className="bg-[#e3e1da] border-2 border-dashed border-[#232632]/30 p-4">
            <div className="max-w-[1280px] mx-auto">
              <div className="bg-[#b2b3f0] border-2 border-dashed border-[#9747ff] p-3">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="bg-[#ffd1ef] border border-dashed border-[#ff47c0] h-32 flex items-center justify-center"
                    >
                      <span className="text-xs text-[#232632]">Card {i}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CompositionExample>

        {/* Narrow Content */}
        <CompositionExample
          title="Narrow Content Block"
          description="6-column container with single cell (centered content)"
        >
          <div className="bg-[#e3e1da] border-2 border-dashed border-[#232632]/30 p-4">
            <div className="max-w-[620px] mx-auto">
              <div className="bg-[#b2b3f0] border-2 border-dashed border-[#9747ff] p-3 rounded-lg">
                <div className="bg-[#ffd1ef] border border-dashed border-[#ff47c0] p-6 rounded">
                  <div className="space-y-2">
                    <div className="h-3 bg-[#232632]/20 rounded w-full"></div>
                    <div className="h-3 bg-[#232632]/20 rounded w-5/6"></div>
                    <div className="h-3 bg-[#232632]/20 rounded w-4/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CompositionExample>

        {/* Asymmetric Layout */}
        <CompositionExample
          title="Asymmetric Layout"
          description="10-column container with 2 cells (40/60 split)"
        >
          <div className="bg-[#e3e1da] border-2 border-dashed border-[#232632]/30 p-4">
            <div className="max-w-[1060px] mx-auto">
              <div className="bg-[#b2b3f0] border-2 border-dashed border-[#9747ff] p-3 rounded-lg">
                <div className="flex gap-3">
                  <div className="bg-[#ffd1ef] border border-dashed border-[#ff47c0] h-40 flex items-center justify-center rounded"
                       style={{ flex: '0 0 40%' }}>
                    <span className="text-xs text-[#232632]">Sidebar</span>
                  </div>
                  <div className="bg-[#ffd1ef] border border-dashed border-[#ff47c0] h-40 flex items-center justify-center rounded"
                       style={{ flex: '0 0 60%' }}>
                    <span className="text-xs text-[#232632]">Main Content</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CompositionExample>

        {/* Full Bleed Section */}
        <CompositionExample
          title="Full Bleed Section"
          description="Full-width row with single cell (no gaps)"
        >
          <div className="bg-[#e3e1da] border-2 border-dashed border-[#232632]/30 p-4">
            <div className="bg-[#b2b3f0] border-2 border-dashed border-[#9747ff] p-0 rounded-lg overflow-hidden">
              <div className="bg-[#ffd1ef] border-none h-32 flex items-center justify-center">
                <span className="text-xs text-[#232632]">Full Bleed Image/Content</span>
              </div>
            </div>
          </div>
        </CompositionExample>
      </div>
    </section>
  );
}

function CompositionExample({ 
  title, 
  description, 
  children 
}: { 
  title: string; 
  description: string; 
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#f6f5f3] rounded-lg p-6 border border-[#dad8ce]">
      <div className="mb-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-[#232632] mb-1">
          {title}
        </h3>
        <p className="text-xs text-[#232632]/60">{description}</p>
      </div>
      {children}
    </div>
  );
}