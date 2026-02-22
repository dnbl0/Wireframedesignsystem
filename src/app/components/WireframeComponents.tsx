import { useState } from 'react';
import { 
  AlignLeft, 
  Image as ImageIcon, 
  Square, 
  Type, 
  Video, 
  List, 
  Menu,
  Grid3x3,
  ChevronRight,
  Play,
  Plus,
  Trash2,
  Copy,
  Quote,
  MessageSquare,
  Calendar,
  BarChart3,
  Star,
  FileText,
  ShoppingCart,
  UserCircle,
  MapPin,
  Mail,
  Phone,
  Check,
  Package,
  CreditCard,
  Bell,
  Heart
} from 'lucide-react';

// Toggle Switch Component
function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (checked: boolean) => void; label?: string }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-lg transition-colors ${
        checked ? 'bg-chart-2' : 'bg-border/20'
      }`}
      role="switch"
      aria-checked={checked}
      aria-label={label}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-md bg-primary-foreground transition-transform shadow-elevation-sm ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );
}

type CellConfig = {
  id: number;
  width: string;
  component: string | null;
  componentSize: 'small' | 'medium' | 'large';
  elevation: 'no' | 'raised' | 'inset';
  cellRadius: boolean;
  verticalAlign: 'top' | 'center' | 'bottom';
  padding: boolean;
};

type RowConfig = {
  id: number;
  gap: 'default' | 'none' | 'no-vertical';
  padding: 'none' | 'small' | 'medium' | 'large';
  borderRadius: boolean;
  reverseWrap: boolean;
  cells: CellConfig[];
};

export function WireframeComponentLibrary({ highlightedComponent }: { highlightedComponent?: string } = {}) {
  return (
    <div className="space-y-16 p-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h1 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-h1)', fontWeight: 'var(--font-weight-book)', lineHeight: '1.5' }} className="text-foreground uppercase mb-4">
          Wireframe Components
        </h1>
        <p style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-book)', lineHeight: '1.5' }} className="text-muted-foreground mb-12">
          Build complete layouts with multiple rows, variable cell widths, and realistic components
        </p>

        {/* Component Builder */}
        <ComponentBuilder />

        {/* Component Library */}
        <ComponentShowcase />

        {/* Pre-built Patterns */}
        <PrebuiltPatterns />
      </div>
    </div>
  );
}

function ComponentBuilder() {
  const [containerWidth, setContainerWidth] = useState<string>('1280');
  const [rows, setRows] = useState<RowConfig[]>([
    {
      id: 1,
      gap: 'default',
      padding: 'medium',
      borderRadius: false,
      reverseWrap: false,
      cells: [
        { id: 1, width: '50', component: null, componentSize: 'medium', elevation: 'no', cellRadius: false, verticalAlign: 'center', padding: true },
        { id: 2, width: '50', component: null, componentSize: 'medium', elevation: 'no', cellRadius: false, verticalAlign: 'center', padding: true },
      ],
    },
  ]);
  const [selectedRowId, setSelectedRowId] = useState<number>(1);

  const components = [
    { id: 'heading', name: 'Heading', icon: Type },
    { id: 'text', name: 'Text Block', icon: AlignLeft },
    { id: 'image', name: 'Image', icon: ImageIcon },
    { id: 'button', name: 'Button', icon: Square },
    { id: 'form', name: 'Form', icon: List },
    { id: 'card', name: 'Card', icon: Grid3x3 },
    { id: 'video', name: 'Video', icon: Video },
    { id: 'navigation', name: 'Navigation', icon: Menu },
    { id: 'quote', name: 'Quote', icon: Quote },
    { id: 'testimonial', name: 'Testimonial', icon: MessageSquare },
    { id: 'calendar', name: 'Calendar', icon: Calendar },
    { id: 'chart', name: 'Chart', icon: BarChart3 },
    { id: 'rating', name: 'Rating', icon: Star },
    { id: 'article', name: 'Article', icon: FileText },
    { id: 'product', name: 'Product', icon: ShoppingCart },
    { id: 'profile', name: 'Profile', icon: UserCircle },
    { id: 'location', name: 'Location', icon: MapPin },
    { id: 'contact', name: 'Contact Form', icon: Mail },
    { id: 'stats', name: 'Stats', icon: BarChart3 },
    { id: 'pricing', name: 'Pricing Card', icon: CreditCard },
    { id: 'notification', name: 'Notification', icon: Bell },
    { id: 'checklist', name: 'Checklist', icon: Check },
    { id: 'feature', name: 'Feature Box', icon: Package },
    { id: 'cta', name: 'Call to Action', icon: Heart }
  ];

  const containerWidths = [
    { label: '12 col', value: '1280' },
    { label: '10 col', value: '1060' },
    { label: '8 col', value: '840' },
    { label: '6 col', value: '620' },
    { label: '4 col', value: '400' },
    { label: 'None', value: 'full' },
  ];

  const cellWidths = [
    { label: '25%', value: '25' },
    { label: '33%', value: '33' },
    { label: '50%', value: '50' },
    { label: '66%', value: '66' },
    { label: '75%', value: '75' },
    { label: '100%', value: '100' },
    { label: 'Auto', value: 'auto' },
  ];

  const selectedRow = rows.find(r => r.id === selectedRowId);

  const addRow = () => {
    const newRow: RowConfig = {
      id: Math.max(...rows.map(r => r.id)) + 1,
      gap: 'default',
      padding: 'medium',
      borderRadius: false,
      reverseWrap: false,
      cells: [
        { id: 1, width: '100', component: null, componentSize: 'medium', elevation: 'no', cellRadius: false, verticalAlign: 'center', padding: true },
      ],
    };
    setRows([...rows, newRow]);
    setSelectedRowId(newRow.id);
  };

  const duplicateRow = (rowId: number) => {
    const rowToDuplicate = rows.find(r => r.id === rowId);
    if (!rowToDuplicate) return;

    const newRow: RowConfig = {
      ...rowToDuplicate,
      id: Math.max(...rows.map(r => r.id)) + 1,
      cells: rowToDuplicate.cells.map(cell => ({ ...cell, id: cell.id })),
    };
    setRows([...rows, newRow]);
    setSelectedRowId(newRow.id);
  };

  const deleteRow = (rowId: number) => {
    if (rows.length === 1) return;
    const newRows = rows.filter(r => r.id !== rowId);
    setRows(newRows);
    if (selectedRowId === rowId) {
      setSelectedRowId(newRows[0].id);
    }
  };

  const updateRow = (rowId: number, updates: Partial<RowConfig>) => {
    setRows(rows.map(row => (row.id === rowId ? { ...row, ...updates } : row)));
  };

  const addCell = (rowId: number) => {
    setRows(rows.map(row => {
      if (row.id === rowId) {
        const newCell: CellConfig = {
          id: Math.max(...row.cells.map(c => c.id), 0) + 1,
          width: 'auto',
          component: null,
          componentSize: 'medium',
          elevation: 'no',
          cellRadius: false,
          verticalAlign: 'center',
          padding: true,
        };
        return { ...row, cells: [...row.cells, newCell] };
      }
      return row;
    }));
  };

  const deleteCell = (rowId: number, cellId: number) => {
    setRows(rows.map(row => {
      if (row.id === rowId && row.cells.length > 1) {
        return { ...row, cells: row.cells.filter(c => c.id !== cellId) };
      }
      return row;
    }));
  };

  const updateCell = (rowId: number, cellId: number, updates: Partial<CellConfig>) => {
    setRows(rows.map(row => {
      if (row.id === rowId) {
        return {
          ...row,
          cells: row.cells.map(cell => (cell.id === cellId ? { ...cell, ...updates } : cell)),
        };
      }
      return row;
    }));
  };

  return (
    <section className="mb-16">
      <h2 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-h3)', fontWeight: 'var(--font-weight-book)', lineHeight: '1.5' }} className="text-foreground uppercase tracking-wider mb-6">
        Layout Builder
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Configuration Panel */}
        <div className="lg:col-span-1 space-y-6">
          {/* Section Configuration */}
          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-bold)' }} className="text-card-foreground uppercase tracking-wider mb-4">
              Section
            </h3>
            <div>
              <label style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', fontWeight: 'var(--font-weight-bold)' }} className="block text-card-foreground uppercase tracking-wider mb-2">
                Container Width
              </label>
              <select
                value={containerWidth}
                onChange={(e) => setContainerWidth(e.target.value)}
                className="w-full px-3 py-2 rounded-md border border-border bg-input-background text-foreground"
                style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', borderRadius: 'var(--radius)' }}
              >
                {containerWidths.map((width) => (
                  <option key={width.value} value={width.value}>{width.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Row Management */}
          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-bold)' }} className="text-card-foreground uppercase tracking-wider">
                Rows
              </h3>
              <button
                onClick={addRow}
                className="flex items-center gap-1 px-3 py-1.5 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity uppercase tracking-wider"
                style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', borderRadius: 'var(--radius)' }}
              >
                <Plus className="w-3 h-3" />
                Add Row
              </button>
            </div>

            <div className="space-y-2">
              {rows.map((row, index) => (
                <div
                  key={row.id}
                  className={`flex items-center gap-2 p-3 rounded-md border-2 cursor-pointer transition-colors ${
                    selectedRowId === row.id
                      ? 'border-primary bg-primary-foreground'
                      : 'border-border bg-card/50 hover:border-primary/30'
                  }`}
                  onClick={() => setSelectedRowId(row.id)}
                  style={{ borderRadius: 'var(--radius)' }}
                >
                  <div className="flex-1">
                    <div style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', fontWeight: 'var(--font-weight-bold)' }} className="text-foreground">Row {index + 1}</div>
                    <div style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }} className="text-muted-foreground">{row.cells.length} {row.cells.length === 1 ? 'cell' : 'cells'}</div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      duplicateRow(row.id);
                    }}
                    className="p-1.5 hover:bg-card rounded"
                    title="Duplicate row"
                  >
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  </button>
                  {rows.length > 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteRow(row.id);
                      }}
                      className="p-1.5 hover:bg-destructive/10 rounded"
                      title="Delete row"
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Selected Row Configuration */}
          {selectedRow && (
            <>
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-bold)' }} className="text-card-foreground uppercase tracking-wider mb-4">
                  Row {rows.findIndex(r => r.id === selectedRowId) + 1} Options
                </h3>

                <div className="space-y-4">
                  <div>
                    <label style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', fontWeight: 'var(--font-weight-bold)' }} className="block text-card-foreground uppercase tracking-wider mb-2">
                      Gap
                    </label>
                    <select
                      value={selectedRow.gap}
                      onChange={(e) => updateRow(selectedRowId, { gap: e.target.value as any })}
                      className="w-full px-3 py-2 rounded-md border border-border bg-input-background text-foreground"
                      style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', borderRadius: 'var(--radius)' }}
                    >
                      <option value="default">Default</option>
                      <option value="none">None</option>
                      <option value="no-vertical">No Vertical</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', fontWeight: 'var(--font-weight-bold)' }} className="block text-card-foreground uppercase tracking-wider mb-2">
                      Padding
                    </label>
                    <select
                      value={selectedRow.padding}
                      onChange={(e) => updateRow(selectedRowId, { padding: e.target.value as any })}
                      className="w-full px-3 py-2 rounded-md border border-border bg-input-background text-foreground"
                      style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', borderRadius: 'var(--radius)' }}
                    >
                      <option value="none">None</option>
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </select>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', fontWeight: 'var(--font-weight-bold)' }} className="text-card-foreground uppercase tracking-wider">
                        Border Radius
                      </label>
                      <Toggle
                        checked={selectedRow.borderRadius}
                        onChange={(checked) => updateRow(selectedRowId, { borderRadius: checked })}
                        label="Border Radius"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', fontWeight: 'var(--font-weight-bold)' }} className="text-card-foreground uppercase tracking-wider">
                        Reverse Wrap
                      </label>
                      <Toggle
                        checked={selectedRow.reverseWrap}
                        onChange={(checked) => updateRow(selectedRowId, { reverseWrap: checked })}
                        label="Reverse Wrap"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Cell Management */}
              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-bold)' }} className="text-card-foreground uppercase tracking-wider">
                    Cells
                  </h3>
                  <button
                    onClick={() => addCell(selectedRowId)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity uppercase tracking-wider"
                    style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', borderRadius: 'var(--radius)' }}
                  >
                    <Plus className="w-3 h-3" />
                    Add Cell
                  </button>
                </div>

                <div className="space-y-4 max-h-[600px] overflow-y-auto">
                  {selectedRow.cells.map((cell, cellIndex) => (
                    <div key={cell.id} className="bg-primary-foreground rounded-lg p-4 border border-border">
                      <div className="flex items-center justify-between mb-3">
                        <h4 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', fontWeight: 'var(--font-weight-bold)' }} className="text-foreground uppercase tracking-wider">
                          Cell {cellIndex + 1}
                        </h4>
                        {selectedRow.cells.length > 1 && (
                          <button
                            onClick={() => deleteCell(selectedRowId, cell.id)}
                            className="p-1 hover:bg-destructive/10 rounded"
                            title="Delete cell"
                          >
                            <Trash2 className="w-3 h-3 text-destructive" />
                          </button>
                        )}
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', fontWeight: 'var(--font-weight-bold)' }} className="block text-foreground uppercase tracking-wider mb-2">
                            Width
                          </label>
                          <div className="grid grid-cols-4 gap-1">
                            {cellWidths.map((width) => (
                              <button
                                key={width.value}
                                onClick={() => updateCell(selectedRowId, cell.id, { width: width.value })}
                                className={`px-2 py-1 rounded ${ cell.width === width.value
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-card text-foreground border border-border'
                                }`}
                                style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', borderRadius: 'var(--radius)' }}
                              >
                                {width.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', fontWeight: 'var(--font-weight-bold)' }} className="block text-foreground uppercase tracking-wider mb-2">
                            Component
                          </label>
                          <select
                            value={cell.component || ''}
                            onChange={(e) => updateCell(selectedRowId, cell.id, { component: e.target.value || null })}
                            className="w-full px-2 py-1.5 rounded border border-border bg-input-background text-foreground"
                            style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', borderRadius: 'var(--radius)' }}
                          >
                            <option value="">None</option>
                            {components.map((comp) => (
                              <option key={comp.id} value={comp.id}>{comp.name}</option>
                            ))}
                          </select>
                        </div>

                        {cell.component && (
                          <>
                            <div>
                              <label style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', fontWeight: 'var(--font-weight-bold)' }} className="block text-foreground uppercase tracking-wider mb-2">
                                Size
                              </label>
                              <div className="grid grid-cols-3 gap-1">
                                {(['small', 'medium', 'large'] as const).map((size) => (
                                  <button
                                    key={size}
                                    onClick={() => updateCell(selectedRowId, cell.id, { componentSize: size })}
                                    className={`px-2 py-1 rounded ${
                                      cell.componentSize === size
                                        ? 'bg-primary text-primary-foreground'
                                        : 'bg-card text-foreground border border-border'
                                    }`}
                                    style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', borderRadius: 'var(--radius)' }}
                                  >
                                    {size[0].toUpperCase()}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div>
                              <label style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', fontWeight: 'var(--font-weight-bold)' }} className="block text-foreground uppercase tracking-wider mb-2">
                                Elevation
                              </label>
                              <select
                                value={cell.elevation}
                                onChange={(e) => updateCell(selectedRowId, cell.id, { elevation: e.target.value as any })}
                                className="w-full px-2 py-1.5 rounded border border-border bg-input-background text-foreground"
                                style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', borderRadius: 'var(--radius)' }}
                              >
                                <option value="no">No</option>
                                <option value="raised">Raised</option>
                                <option value="inset">Inset</option>
                              </select>
                            </div>

                            <div>
                              <label style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', fontWeight: 'var(--font-weight-bold)' }} className="block text-foreground uppercase tracking-wider mb-2">
                                Vertical Align
                              </label>
                              <select
                                value={cell.verticalAlign}
                                onChange={(e) => updateCell(selectedRowId, cell.id, { verticalAlign: e.target.value as any })}
                                className="w-full px-2 py-1.5 rounded border border-border bg-input-background text-foreground"
                                style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', borderRadius: 'var(--radius)' }}
                              >
                                <option value="top">Top</option>
                                <option value="center">Center</option>
                                <option value="bottom">Bottom</option>
                              </select>
                            </div>

                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <label style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', fontWeight: 'var(--font-weight-bold)' }} className="text-foreground uppercase tracking-wider">
                                  Cell Radius
                                </label>
                                <Toggle
                                  checked={cell.cellRadius}
                                  onChange={(checked) => updateCell(selectedRowId, cell.id, { cellRadius: checked })}
                                  label="Cell Radius"
                                />
                              </div>
                            </div>

                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <label style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', fontWeight: 'var(--font-weight-bold)' }} className="text-foreground uppercase tracking-wider">
                                  Padding
                                </label>
                                <Toggle
                                  checked={cell.padding}
                                  onChange={(checked) => updateCell(selectedRowId, cell.id, { padding: checked })}
                                  label="Padding"
                                />
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Preview Panel */}
        <div className="lg:col-span-2">
          <div className="bg-primary-foreground border-2 border-border rounded-lg p-8 sticky top-24 overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <h3 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-body)', fontWeight: 'var(--font-weight-bold)' }} className="text-foreground uppercase tracking-wider">
                Live Preview
              </h3>
              <div style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }} className="text-muted-foreground uppercase tracking-wider">
                {rows.length} {rows.length === 1 ? 'Row' : 'Rows'} • {containerWidths.find(w => w.value === containerWidth)?.label}
              </div>
            </div>

            {/* Section Container */}
            <div className="bg-secondary/30 border-2 border-dashed border-muted-foreground/30 p-4 rounded-md overflow-x-auto">
              <div style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }} className="text-muted-foreground uppercase tracking-wider mb-2 text-center">
                Section Container
              </div>

              {/* Container */}
              <div className="flex justify-center">
                <div
                  className="w-full transition-all duration-300 space-y-4"
                  style={{
                    maxWidth: containerWidth === 'full' ? '100%' :
                      containerWidth === '1280' ? '100%' :
                      containerWidth === '1060' ? '82.8%' :
                      containerWidth === '840' ? '65.6%' :
                      containerWidth === '620' ? '48.4%' :
                      '31.25%'
                  }}
                >
                  {/* Rows */}
                  {rows.map((row, rowIndex) => (
                    <div
                      key={row.id}
                      className={`bg-chart-1/20 border-2 border-dashed transition-all duration-300 overflow-hidden ${
                        selectedRowId === row.id ? 'border-chart-1 border-solid' : 'border-chart-1/50'
                      } ${
                        row.padding === 'none' ? 'p-0' :
                        row.padding === 'small' ? 'p-2' :
                        row.padding === 'large' ? 'p-8' : 'p-4'
                      }`}
                      style={{
                        borderRadius: row.borderRadius && row.gap === 'none' ? 'var(--radius-card)' : '0'
                      }}
                      onClick={() => setSelectedRowId(row.id)}
                    >
                      <div style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }} className="text-muted-foreground uppercase tracking-wider mb-2">
                        Row {rowIndex + 1}
                      </div>
                      <div
                        className={`flex flex-wrap ${row.reverseWrap ? 'flex-wrap-reverse' : ''} ${
                          row.gap === 'default' ? 'gap-4' : row.gap === 'no-vertical' ? 'gap-x-4' : 'gap-0'
                        }`}
                      >
                        {row.cells.map((cell, cellIndex) => (
                          <div
                            key={cell.id}
                            className={`bg-accent/20 border-2 border-dashed border-accent/60 min-h-[180px] flex overflow-hidden ${
                              cell.verticalAlign === 'top' ? 'items-start' :
                              cell.verticalAlign === 'bottom' ? 'items-end' : 'items-center'
                            } justify-center ${cell.padding ? 'p-6' : 'p-0'} transition-all duration-300`}
                            style={{
                              flexBasis: cell.width === 'auto' ? 'auto' : `calc(${cell.width}% - ${row.gap === 'default' || row.gap === 'no-vertical' ? '1rem' : '0px'})`,
                              flexGrow: cell.width === 'auto' ? 1 : 0,
                              flexShrink: cell.width === 'auto' ? 1 : 0,
                              minWidth: cell.width === 'auto' ? '150px' : '0',
                              maxWidth: cell.width !== 'auto' ? `${cell.width}%` : undefined,
                              borderRadius: cell.cellRadius ? 'var(--radius-card)' : '0',
                              boxShadow:
                                cell.elevation === 'raised' ? 'var(--elevation-sm)' :
                                cell.elevation === 'inset' ? 'inset 0 2px 8px rgba(0,0,0,0.1)' : 'none'
                            }}
                          >
                            {cell.component ? (
                              <div className="w-full overflow-hidden">
                                <WireframeComponent type={cell.component} size={cell.componentSize} />
                              </div>
                            ) : (
                              <div className="text-muted-foreground text-center" style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }}>
                                <div className="mb-1">Cell {cellIndex + 1}</div>
                                <div>{cell.width === 'auto' ? 'Auto' : `${cell.width}%`}</div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap gap-4" style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }}>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-secondary/30 border border-muted-foreground/30"></div>
                <span className="text-muted-foreground">Section</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-chart-1/20 border-2 border-dashed border-chart-1/50"></div>
                <span className="text-muted-foreground">Row</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-accent/20 border-2 border-dashed border-accent/60"></div>
                <span className="text-muted-foreground">Cell</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WireframeComponent({ type, size = 'medium' }: { type: string; size?: 'small' | 'medium' | 'large' }) {
  switch (type) {
    case 'heading':
      return <WireframeHeading size={size} />;
    case 'text':
      return <WireframeText size={size} />;
    case 'image':
      return <WireframeImage size={size} />;
    case 'button':
      return <WireframeButton size={size} />;
    case 'form':
      return <WireframeForm size={size} />;
    case 'card':
      return <WireframeCard size={size} />;
    case 'video':
      return <WireframeVideo size={size} />;
    case 'navigation':
      return <WireframeNavigation size={size} />;
    case 'quote':
      return <WireframeQuote size={size} />;
    case 'testimonial':
      return <WireframeTestimonial size={size} />;
    case 'calendar':
      return <WireframeCalendar size={size} />;
    case 'chart':
      return <WireframeChart size={size} />;
    case 'rating':
      return <WireframeRating size={size} />;
    case 'article':
      return <WireframeArticle size={size} />;
    case 'product':
      return <WireframeProduct size={size} />;
    case 'profile':
      return <WireframeProfile size={size} />;
    case 'location':
      return <WireframeLocation size={size} />;
    case 'contact':
      return <WireframeContact size={size} />;
    case 'stats':
      return <WireframeStats size={size} />;
    case 'pricing':
      return <WireframePricing size={size} />;
    case 'notification':
      return <WireframeNotification size={size} />;
    case 'checklist':
      return <WireframeChecklist size={size} />;
    case 'feature':
      return <WireframeFeature size={size} />;
    case 'cta':
      return <WireframeCTA size={size} />;
    default:
      return null;
  }
}

// Original Components
function WireframeHeading({ size }: { size: string }) {
  return (
    <div className="w-full space-y-2 overflow-hidden">
      <div className={`bg-foreground rounded max-w-full ${
        size === 'small' ? 'h-6 w-2/3' :
        size === 'large' ? 'h-12 w-full' : 'h-8 w-3/4'
      }`} style={{ borderRadius: 'var(--radius)' }}></div>
      <div className="h-3 bg-muted-foreground rounded w-1/2 max-w-full" style={{ borderRadius: 'var(--radius)' }}></div>
    </div>
  );
}

function WireframeText({ size }: { size: string }) {
  const lines = size === 'small' ? 3 : size === 'large' ? 8 : 5;
  return (
    <div className="w-full space-y-2 overflow-hidden">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-3 bg-muted-foreground/40 rounded max-w-full"
          style={{ width: i === lines - 1 ? '60%' : '100%', borderRadius: 'var(--radius)' }}
        ></div>
      ))}
    </div>
  );
}

function WireframeImage({ size }: { size: string }) {
  const height = size === 'small' ? 'h-32' : size === 'large' ? 'h-64' : 'h-48';
  return (
    <div className={`w-full ${height} bg-muted/20 rounded border-2 border-dashed border-border flex items-center justify-center`} style={{ borderRadius: 'var(--radius-card)' }}>
      <ImageIcon className="w-12 h-12 text-muted-foreground/50" />
    </div>
  );
}

function WireframeButton({ size }: { size: string }) {
  return (
    <div className="flex gap-3">
      <div className={`bg-primary rounded flex items-center justify-center gap-2 ${
        size === 'small' ? 'px-4 py-2' :
        size === 'large' ? 'px-8 py-4' : 'px-6 py-3'
      }`} style={{ borderRadius: 'var(--radius)' }}>
        <div className={`bg-primary-foreground/80 rounded ${
          size === 'small' ? 'h-2 w-16' :
          size === 'large' ? 'h-4 w-24' : 'h-3 w-20'
        }`} style={{ borderRadius: 'var(--radius)' }}></div>
        <ChevronRight className={`${
          size === 'small' ? 'w-3 h-3' :
          size === 'large' ? 'w-5 h-5' : 'w-4 h-4'
        } text-primary-foreground`} />
      </div>
    </div>
  );
}

function WireframeForm({ size }: { size: string }) {
  const fields = size === 'small' ? 2 : size === 'large' ? 4 : 3;
  return (
    <div className="w-full space-y-4">
      {Array.from({ length: fields }).map((_, i) => (
        <div key={i}>
          <div className="h-3 bg-muted-foreground rounded w-24 mb-2" style={{ borderRadius: 'var(--radius)' }}></div>
          <div className="h-10 bg-input-background border-2 border-border rounded" style={{ borderRadius: 'var(--radius)' }}></div>
        </div>
      ))}
      <div className="bg-primary h-10 rounded flex items-center justify-center" style={{ borderRadius: 'var(--radius)' }}>
        <div className="h-3 bg-primary-foreground/80 rounded w-20" style={{ borderRadius: 'var(--radius)' }}></div>
      </div>
    </div>
  );
}

function WireframeCard({ size }: { size: string }) {
  return (
    <div className="w-full bg-card rounded-lg border-2 border-border overflow-hidden shadow-elevation-sm">
      <div className={`bg-muted/20 ${
        size === 'small' ? 'h-24' :
        size === 'large' ? 'h-48' : 'h-32'
      } flex items-center justify-center`}>
        <ImageIcon className="w-8 h-8 text-muted-foreground/50" />
      </div>
      <div className="p-4 space-y-2">
        <div className="h-4 bg-foreground rounded w-3/4" style={{ borderRadius: 'var(--radius)' }}></div>
        <div className="h-3 bg-muted-foreground/40 rounded w-full" style={{ borderRadius: 'var(--radius)' }}></div>
        <div className="h-3 bg-muted-foreground/40 rounded w-5/6" style={{ borderRadius: 'var(--radius)' }}></div>
      </div>
    </div>
  );
}

function WireframeVideo({ size }: { size: string }) {
  const height = size === 'small' ? 'h-32' : size === 'large' ? 'h-64' : 'h-48';
  return (
    <div className={`w-full ${height} bg-foreground/90 rounded flex items-center justify-center`} style={{ borderRadius: 'var(--radius-card)' }}>
      <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
        <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
      </div>
    </div>
  );
}

function WireframeNavigation({ size }: { size: string }) {
  const items = size === 'small' ? 3 : size === 'large' ? 6 : 4;
  return (
    <div className="w-full bg-card rounded border-2 border-border p-4 overflow-hidden" style={{ borderRadius: 'var(--radius)' }}>
      <div className="flex items-center justify-between gap-4 min-w-0">
        <div className="h-6 bg-foreground rounded flex-shrink-0 w-24" style={{ borderRadius: 'var(--radius)' }}></div>
        <div className="flex gap-3 overflow-x-auto flex-shrink min-w-0">
          {Array.from({ length: items }).map((_, i) => (
            <div key={i} className="h-4 bg-muted-foreground/50 rounded flex-shrink-0 w-16" style={{ borderRadius: 'var(--radius)' }}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WireframeQuote({ size }: { size: string }) {
  const lines = size === 'small' ? 2 : size === 'large' ? 6 : 4;
  return (
    <div className="w-full bg-card border-l-4 border-accent p-4 rounded-r overflow-hidden" style={{ borderRadius: 'var(--radius)' }}>
      <Quote className="w-8 h-8 text-accent/50 mb-2" />
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="h-3 bg-muted-foreground/40 rounded"
            style={{ width: i === lines - 1 ? '60%' : '100%', borderRadius: 'var(--radius)', maxWidth: '100%' }}
          ></div>
        ))}
      </div>
      <div className="mt-4 h-3 bg-foreground rounded w-32 max-w-full" style={{ borderRadius: 'var(--radius)' }}></div>
    </div>
  );
}

function WireframeTestimonial({ size }: { size: string }) {
  const lines = size === 'small' ? 2 : size === 'large' ? 5 : 3;
  return (
    <div className="w-full bg-card border-2 border-border p-6 rounded-lg overflow-hidden" style={{ borderRadius: 'var(--radius-card)' }}>
      <div className="flex items-center gap-3 mb-4 min-w-0">
        <div className="w-12 h-12 rounded-full bg-muted/40 flex-shrink-0"></div>
        <div className="flex-1 space-y-2 min-w-0 overflow-hidden">
          <div className="h-3 bg-foreground rounded w-24 max-w-full" style={{ borderRadius: 'var(--radius)' }}></div>
          <div className="h-2 bg-muted-foreground/40 rounded w-32 max-w-full" style={{ borderRadius: 'var(--radius)' }}></div>
        </div>
      </div>
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="h-3 bg-muted-foreground/40 rounded max-w-full"
            style={{ width: i === lines - 1 ? '70%' : '100%', borderRadius: 'var(--radius)' }}
          ></div>
        ))}
      </div>
    </div>
  );
}

function WireframeCalendar({ size }: { size: string }) {
  const height = size === 'small' ? 'h-40' : size === 'large' ? 'h-72' : 'h-56';
  return (
    <div className={`w-full ${height} bg-card border-2 border-border rounded-lg p-4`} style={{ borderRadius: 'var(--radius-card)' }}>
      <div className="flex items-center justify-between mb-4">
        <div className="h-4 bg-foreground rounded w-32" style={{ borderRadius: 'var(--radius)' }}></div>
        <Calendar className="w-5 h-5 text-muted-foreground" />
      </div>
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 14 }).map((_, i) => (
          <div key={i} className={`h-8 rounded ${i < 7 ? 'bg-muted/20' : 'bg-muted/40'}`} style={{ borderRadius: 'var(--radius)' }}></div>
        ))}
      </div>
    </div>
  );
}

function WireframeChart({ size }: { size: string }) {
  const height = size === 'small' ? 'h-32' : size === 'large' ? 'h-64' : 'h-48';
  return (
    <div className={`w-full ${height} bg-card border-2 border-border rounded-lg p-4 flex items-end gap-2`} style={{ borderRadius: 'var(--radius-card)' }}>
      <div className="flex-1 bg-chart-1 rounded h-3/4" style={{ borderRadius: 'var(--radius)' }}></div>
      <div className="flex-1 bg-chart-2 rounded h-full" style={{ borderRadius: 'var(--radius)' }}></div>
      <div className="flex-1 bg-chart-3 rounded h-1/2" style={{ borderRadius: 'var(--radius)' }}></div>
      <div className="flex-1 bg-chart-4 rounded h-2/3" style={{ borderRadius: 'var(--radius)' }}></div>
    </div>
  );
}

function WireframeRating({ size }: { size: string }) {
  const stars = size === 'small' ? 3 : 5;
  return (
    <div className="w-full bg-card border-2 border-border p-4 rounded-lg" style={{ borderRadius: 'var(--radius-card)' }}>
      <div className="flex gap-1 mb-3">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} className="w-5 h-5 text-chart-3 fill-chart-3" />
        ))}
      </div>
      <div className="h-3 bg-foreground rounded w-24 mb-2" style={{ borderRadius: 'var(--radius)' }}></div>
      <div className="space-y-2">
        <div className="h-2 bg-muted-foreground/40 rounded w-full" style={{ borderRadius: 'var(--radius)' }}></div>
        <div className="h-2 bg-muted-foreground/40 rounded w-4/5" style={{ borderRadius: 'var(--radius)' }}></div>
      </div>
    </div>
  );
}

function WireframeArticle({ size }: { size: string }) {
  const lines = size === 'small' ? 4 : size === 'large' ? 12 : 8;
  return (
    <div className="w-full space-y-4">
      <div className="h-6 bg-foreground rounded w-3/4" style={{ borderRadius: 'var(--radius)' }}></div>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-full bg-muted/40"></div>
        <div className="h-2 bg-muted-foreground/40 rounded w-24" style={{ borderRadius: 'var(--radius)' }}></div>
      </div>
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="h-3 bg-muted-foreground/40 rounded"
            style={{ width: i === lines - 1 ? '60%' : '100%', borderRadius: 'var(--radius)' }}
          ></div>
        ))}
      </div>
    </div>
  );
}

function WireframeProduct({ size }: { size: string }) {
  const height = size === 'small' ? 'h-32' : size === 'large' ? 'h-56' : 'h-40';
  return (
    <div className="w-full bg-card border-2 border-border rounded-lg overflow-hidden shadow-elevation-sm">
      <div className={`${height} bg-muted/20 flex items-center justify-center`}>
        <ShoppingCart className="w-10 h-10 text-muted-foreground/50" />
      </div>
      <div className="p-4 space-y-2">
        <div className="h-4 bg-foreground rounded w-3/4" style={{ borderRadius: 'var(--radius)' }}></div>
        <div className="h-5 bg-chart-2 rounded w-20" style={{ borderRadius: 'var(--radius)' }}></div>
        <div className="h-3 bg-muted-foreground/40 rounded w-full" style={{ borderRadius: 'var(--radius)' }}></div>
        <div className="h-8 bg-primary rounded flex items-center justify-center mt-3" style={{ borderRadius: 'var(--radius)' }}>
          <div className="h-2 bg-primary-foreground rounded w-16" style={{ borderRadius: 'var(--radius)' }}></div>
        </div>
      </div>
    </div>
  );
}

function WireframeProfile({ size }: { size: string }) {
  const avatarSize = size === 'small' ? 'w-16 h-16' : size === 'large' ? 'w-32 h-32' : 'w-24 h-24';
  return (
    <div className="w-full bg-card border-2 border-border p-6 rounded-lg flex flex-col items-center text-center" style={{ borderRadius: 'var(--radius-card)' }}>
      <div className={`${avatarSize} rounded-full bg-muted/40 mb-4`}></div>
      <div className="h-4 bg-foreground rounded w-32 mb-2" style={{ borderRadius: 'var(--radius)' }}></div>
      <div className="h-3 bg-muted-foreground/40 rounded w-40 mb-4" style={{ borderRadius: 'var(--radius)' }}></div>
      <div className="flex gap-2">
        <div className="h-8 bg-primary rounded px-4" style={{ borderRadius: 'var(--radius)' }}></div>
        <div className="h-8 bg-secondary rounded px-4" style={{ borderRadius: 'var(--radius)' }}></div>
      </div>
    </div>
  );
}

function WireframeLocation({ size }: { size: string }) {
  const height = size === 'small' ? 'h-32' : size === 'large' ? 'h-64' : 'h-48';
  return (
    <div className={`w-full ${height} bg-chart-2/10 border-2 border-dashed border-chart-2/40 rounded flex items-center justify-center`} style={{ borderRadius: 'var(--radius-card)' }}>
      <MapPin className="w-12 h-12 text-chart-2/60" />
    </div>
  );
}

function WireframeContact({ size }: { size: string }) {
  const fields = size === 'small' ? 3 : size === 'large' ? 6 : 4;
  return (
    <div className="w-full space-y-3">
      {Array.from({ length: fields }).map((_, i) => (
        <div key={i}>
          <div className="h-3 bg-muted-foreground rounded w-20 mb-2" style={{ borderRadius: 'var(--radius)' }}></div>
          <div className="h-10 bg-input-background border-2 border-border rounded" style={{ borderRadius: 'var(--radius)' }}></div>
        </div>
      ))}
      <div className="h-24 bg-input-background border-2 border-border rounded" style={{ borderRadius: 'var(--radius)' }}></div>
      <div className="bg-primary h-10 rounded flex items-center justify-center" style={{ borderRadius: 'var(--radius)' }}>
        <Mail className="w-4 h-4 text-primary-foreground mr-2" />
        <div className="h-3 bg-primary-foreground/80 rounded w-16" style={{ borderRadius: 'var(--radius)' }}></div>
      </div>
    </div>
  );
}

function WireframeStats({ size }: { size: string }) {
  const count = size === 'small' ? 2 : size === 'large' ? 4 : 3;
  return (
    <div className={`w-full grid gap-4 overflow-hidden ${count === 2 ? 'grid-cols-2' : count === 4 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-3'}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-card border-2 border-border p-4 rounded-lg text-center min-w-0 overflow-hidden" style={{ borderRadius: 'var(--radius-card)' }}>
          <div className="h-8 bg-chart-2 rounded w-16 max-w-full mx-auto mb-2" style={{ borderRadius: 'var(--radius)' }}></div>
          <div className="h-3 bg-muted-foreground/40 rounded w-20 max-w-full mx-auto" style={{ borderRadius: 'var(--radius)' }}></div>
        </div>
      ))}
    </div>
  );
}

function WireframePricing({ size }: { size: string }) {
  return (
    <div className="w-full bg-card border-2 border-border p-6 rounded-lg" style={{ borderRadius: 'var(--radius-card)' }}>
      <div className="text-center mb-4">
        <div className="h-4 bg-foreground rounded w-24 mx-auto mb-2" style={{ borderRadius: 'var(--radius)' }}></div>
        <div className="h-8 bg-chart-2 rounded w-32 mx-auto" style={{ borderRadius: 'var(--radius)' }}></div>
      </div>
      <div className="space-y-2 mb-4">
        {Array.from({ length: size === 'small' ? 3 : size === 'large' ? 6 : 4 }).map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <Check className="w-4 h-4 text-chart-2" />
            <div className="h-3 bg-muted-foreground/40 rounded flex-1" style={{ borderRadius: 'var(--radius)' }}></div>
          </div>
        ))}
      </div>
      <div className="bg-primary h-10 rounded flex items-center justify-center" style={{ borderRadius: 'var(--radius)' }}>
        <div className="h-3 bg-primary-foreground/80 rounded w-24" style={{ borderRadius: 'var(--radius)' }}></div>
      </div>
    </div>
  );
}

function WireframeNotification({ size }: { size: string }) {
  const lines = size === 'small' ? 1 : size === 'large' ? 3 : 2;
  return (
    <div className="w-full bg-card border-2 border-chart-1 p-4 rounded-lg flex gap-3" style={{ borderRadius: 'var(--radius-card)' }}>
      <Bell className="w-5 h-5 text-chart-1 flex-shrink-0 mt-0.5" />
      <div className="flex-1 space-y-2">
        <div className="h-3 bg-foreground rounded w-3/4" style={{ borderRadius: 'var(--radius)' }}></div>
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className="h-2 bg-muted-foreground/40 rounded w-full" style={{ borderRadius: 'var(--radius)' }}></div>
        ))}
      </div>
    </div>
  );
}

function WireframeChecklist({ size }: { size: string }) {
  const items = size === 'small' ? 3 : size === 'large' ? 7 : 5;
  return (
    <div className="w-full bg-card border-2 border-border p-4 rounded-lg space-y-3" style={{ borderRadius: 'var(--radius-card)' }}>
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-5 h-5 rounded border-2 border-chart-2 flex items-center justify-center" style={{ borderRadius: 'var(--radius-sm)' }}>
            {i % 3 === 0 && <Check className="w-3 h-3 text-chart-2" />}
          </div>
          <div className="h-3 bg-muted-foreground/40 rounded flex-1" style={{ borderRadius: 'var(--radius)' }}></div>
        </div>
      ))}
    </div>
  );
}

function WireframeFeature({ size }: { size: string }) {
  const lines = size === 'small' ? 2 : size === 'large' ? 5 : 3;
  return (
    <div className="w-full text-center overflow-hidden">
      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ borderRadius: 'var(--radius-card)' }}>
        <Package className="w-6 h-6 text-accent" />
      </div>
      <div className="h-4 bg-foreground rounded max-w-full w-32 mx-auto mb-2" style={{ borderRadius: 'var(--radius)' }}></div>
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="h-2 bg-muted-foreground/40 rounded mx-auto max-w-full"
            style={{ width: '90%', borderRadius: 'var(--radius)' }}
          ></div>
        ))}
      </div>
    </div>
  );
}

function WireframeCTA({ size }: { size: string }) {
  const lines = size === 'small' ? 1 : size === 'large' ? 3 : 2;
  return (
    <div className="w-full bg-accent/10 border-2 border-accent/30 p-6 rounded-lg text-center overflow-hidden" style={{ borderRadius: 'var(--radius-card)' }}>
      <Heart className="w-10 h-10 text-accent mx-auto mb-3" />
      <div className="h-5 bg-foreground rounded max-w-full w-48 mx-auto mb-2" style={{ borderRadius: 'var(--radius)' }}></div>
      <div className="space-y-2 mb-4">
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className="h-3 bg-muted-foreground/40 rounded max-w-full w-64 mx-auto" style={{ borderRadius: 'var(--radius)' }}></div>
        ))}
      </div>
      <div className="bg-accent h-12 rounded flex items-center justify-center max-w-full mx-auto" style={{ borderRadius: 'var(--radius)', maxWidth: '300px' }}>
        <div className="h-3 bg-accent-foreground rounded w-32 max-w-full" style={{ borderRadius: 'var(--radius)' }}></div>
      </div>
    </div>
  );
}

function ComponentShowcase() {
  const components = [
    { title: 'Heading', component: 'heading' },
    { title: 'Text Block', component: 'text' },
    { title: 'Image', component: 'image' },
    { title: 'Button', component: 'button' },
    { title: 'Form', component: 'form' },
    { title: 'Card', component: 'card' },
    { title: 'Video', component: 'video' },
    { title: 'Navigation', component: 'navigation' },
    { title: 'Quote', component: 'quote' },
    { title: 'Testimonial', component: 'testimonial' },
    { title: 'Calendar', component: 'calendar' },
    { title: 'Chart', component: 'chart' },
    { title: 'Rating', component: 'rating' },
    { title: 'Article', component: 'article' },
    { title: 'Product', component: 'product' },
    { title: 'Profile', component: 'profile' },
    { title: 'Location', component: 'location' },
    { title: 'Contact Form', component: 'contact' },
    { title: 'Stats', component: 'stats' },
    { title: 'Pricing Card', component: 'pricing' },
    { title: 'Notification', component: 'notification' },
    { title: 'Checklist', component: 'checklist' },
    { title: 'Feature Box', component: 'feature' },
    { title: 'Call to Action', component: 'cta' },
  ];

  return (
    <section className="mb-16">
      <h2 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-h3)', fontWeight: 'var(--font-weight-book)' }} className="text-foreground uppercase tracking-wider mb-6">
        Component Library
      </h2>
      <p style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-body)' }} className="text-muted-foreground mb-8">
        All {components.length} available wireframe components
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((item) => (
          <div key={item.component} className="bg-card rounded-lg p-6 border border-border">
            <h3 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', fontWeight: 'var(--font-weight-bold)' }} className="text-card-foreground uppercase tracking-wider mb-4">
              {item.title}
            </h3>
            <div className="bg-primary-foreground rounded p-6 border border-border" style={{ borderRadius: 'var(--radius)' }}>
              <WireframeComponent type={item.component} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PrebuiltPatterns() {
  return (
    <section className="mb-16">
      <h2 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-h3)', fontWeight: 'var(--font-weight-book)' }} className="text-foreground uppercase tracking-wider mb-6">
        Pre-built Content Patterns
      </h2>
      <p style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-body)' }} className="text-muted-foreground mb-8">
        Common layout patterns with components already placed in cells
      </p>

      <div className="space-y-8">
        {/* Hero Pattern */}
        <PatternExample
          title="Hero Section"
          description="Heading + Text + CTA in one cell, Image in another"
        >
          <div className="bg-secondary/30 border-2 border-dashed border-muted-foreground/30 p-4 rounded-md">
            <div className="bg-chart-1/20 border-2 border-dashed border-chart-1/50 p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-accent/20 border border-dashed border-accent/60 p-8 flex flex-col justify-center">
                  <WireframeHeading size="large" />
                  <div className="mt-6">
                    <WireframeText size="medium" />
                  </div>
                  <div className="mt-6">
                    <WireframeButton size="large" />
                  </div>
                </div>
                <div className="bg-accent/20 border border-dashed border-accent/60 p-8">
                  <WireframeImage size="large" />
                </div>
              </div>
            </div>
          </div>
        </PatternExample>

        {/* Multi-row Pattern */}
        <PatternExample
          title="Multi-Row Layout"
          description="Navigation + Hero + Features in separate rows"
        >
          <div className="bg-secondary/30 border-2 border-dashed border-muted-foreground/30 p-4 rounded-md">
            <div className="space-y-4">
              {/* Nav Row */}
              <div className="bg-chart-1/20 border-2 border-dashed border-chart-1/50 p-4">
                <div className="bg-accent/20 border border-dashed border-accent/60 p-4">
                  <WireframeNavigation size="medium" />
                </div>
              </div>
              {/* Hero Row */}
              <div className="bg-chart-1/20 border-2 border-dashed border-chart-1/50 p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-accent/20 border border-dashed border-accent/60 p-6">
                    <WireframeHeading size="large" />
                  </div>
                  <div className="bg-accent/20 border border-dashed border-accent/60 p-6">
                    <WireframeImage size="medium" />
                  </div>
                </div>
              </div>
              {/* Features Row */}
              <div className="bg-chart-1/20 border-2 border-dashed border-chart-1/50 p-4">
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-accent/20 border border-dashed border-accent/60 p-4">
                      <WireframeFeature size="small" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </PatternExample>

        {/* E-commerce Pattern */}
        <PatternExample
          title="E-commerce Layout"
          description="Product grid with navigation and pricing"
        >
          <div className="bg-secondary/30 border-2 border-dashed border-muted-foreground/30 p-4 rounded-md">
            <div className="space-y-4">
              <div className="bg-chart-1/20 border-2 border-dashed border-chart-1/50 p-4">
                <div className="bg-accent/20 border border-dashed border-accent/60 p-4">
                  <WireframeNavigation size="medium" />
                </div>
              </div>
              <div className="bg-chart-1/20 border-2 border-dashed border-chart-1/50 p-4">
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-accent/20 border border-dashed border-accent/60 p-4">
                      <WireframeProduct size="medium" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </PatternExample>
      </div>
    </section>
  );
}

function PatternExample({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-card rounded-lg p-6 border border-border">
      <div className="mb-4">
        <h3 style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)', fontWeight: 'var(--font-weight-bold)' }} className="text-card-foreground uppercase tracking-wider mb-1">
          {title}
        </h3>
        <p style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }} className="text-muted-foreground">{description}</p>
      </div>
      {children}
    </div>
  );
}
