import React from 'react';

interface WireframeComponentProps {
  componentId: string;
  variant?: string;
  theme?: 'light' | 'dark';
  compact?: boolean; // New prop for grid view
}

export const WireframeComponent: React.FC<WireframeComponentProps> = ({
  componentId,
  variant = 'default',
  theme = 'light',
  compact = false,
}) => {
  const isDark = theme === 'dark';
  const bgColor = isDark ? 'bg-primary' : 'bg-card';
  const textColor = isDark ? 'text-primary-foreground' : 'text-foreground';
  const borderColor = isDark ? 'border-primary-foreground/20' : 'border-border';

  // Render different wireframe representations based on component type
  const renderWireframe = () => {
    switch (componentId) {
      case 'accordion':
        return (
          <div className="space-y-2 w-full">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`border ${borderColor} rounded p-4 ${bgColor}`} style={{ borderRadius: 'var(--radius)' }}>
                <div className="flex items-center justify-between">
                  <div className={`h-4 ${isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/40'} rounded w-2/3`} style={{ borderRadius: 'var(--radius)' }}></div>
                  <div className={`h-4 w-4 ${isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/40'} rounded`}></div>
                </div>
                {i === 1 && (
                  <div className={`mt-3 space-y-2`}>
                    <div className={`h-2 ${isDark ? 'bg-primary-foreground/40' : 'bg-muted-foreground/20'} rounded w-full`} style={{ borderRadius: 'var(--radius)' }}></div>
                    <div className={`h-2 ${isDark ? 'bg-primary-foreground/40' : 'bg-muted-foreground/20'} rounded w-4/5`} style={{ borderRadius: 'var(--radius)' }}></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        );

      case 'alert':
        return (
          <div className={`border-l-4 border-accent ${bgColor} p-4 ${textColor}`}>
            <div className={`h-4 ${isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/60'} rounded w-1/4 mb-2`} style={{ borderRadius: 'var(--radius)' }}></div>
            <div className={`h-3 ${isDark ? 'bg-primary-foreground/40' : 'bg-muted-foreground/40'} rounded w-full`} style={{ borderRadius: 'var(--radius)' }}></div>
          </div>
        );

      case 'autocomplete':
      case 'text-field':
      case 'text-field-popover':
        return (
          <div className="w-full space-y-2">
            <div className={`h-3 ${isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/60'} rounded w-1/4`} style={{ borderRadius: 'var(--radius)' }}></div>
            <div className={`border ${borderColor} ${bgColor} p-3 rounded`} style={{ borderRadius: 'var(--radius)' }}>
              <div className={`h-4 ${isDark ? 'bg-primary-foreground/40' : 'bg-muted-foreground/40'} rounded w-3/4`} style={{ borderRadius: 'var(--radius)' }}></div>
            </div>
          </div>
        );

      case 'button':
      case 'icon-button':
        return (
          <div className="flex gap-2">
            <div className={`${isDark ? 'bg-primary-foreground text-primary' : 'bg-primary text-primary-foreground'} px-6 py-3 rounded`} style={{ borderRadius: 'var(--radius)' }}>
              <div className={`h-4 ${isDark ? 'bg-primary/60' : 'bg-primary-foreground/80'} rounded w-16`} style={{ borderRadius: 'var(--radius)' }}></div>
            </div>
            <div className={`border ${borderColor} ${bgColor} px-6 py-3 rounded`} style={{ borderRadius: 'var(--radius)' }}>
              <div className={`h-4 ${isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/60'} rounded w-16`} style={{ borderRadius: 'var(--radius)' }}></div>
            </div>
          </div>
        );

      case 'checkbox':
      case 'checkbox-group':
        return (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-5 h-5 border-2 ${borderColor} ${bgColor} rounded flex items-center justify-center`} style={{ borderRadius: 'var(--radius)' }}>
                  {i === 1 && <div className="w-3 h-3 bg-accent rounded"></div>}
                </div>
                <div className={`h-4 ${isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/60'} rounded w-24`} style={{ borderRadius: 'var(--radius)' }}></div>
              </div>
            ))}
          </div>
        );

      case 'radio':
      case 'radio-group':
        return (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-5 h-5 border-2 ${borderColor} ${bgColor} rounded-full flex items-center justify-center`}>
                  {i === 1 && <div className="w-3 h-3 bg-accent rounded-full"></div>}
                </div>
                <div className={`h-4 ${isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/60'} rounded w-24`} style={{ borderRadius: 'var(--radius)' }}></div>
              </div>
            ))}
          </div>
        );

      case 'select':
        return (
          <div className="w-full space-y-2">
            <div className={`h-3 ${isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/60'} rounded w-1/4`} style={{ borderRadius: 'var(--radius)' }}></div>
            <div className={`border ${borderColor} ${bgColor} p-3 rounded flex items-center justify-between`} style={{ borderRadius: 'var(--radius)' }}>
              <div className={`h-4 ${isDark ? 'bg-primary-foreground/40' : 'bg-muted-foreground/40'} rounded w-1/2`} style={{ borderRadius: 'var(--radius)' }}></div>
              <div className={`h-4 w-4 ${isDark ? 'bg-primary-foreground/40' : 'bg-muted-foreground/40'}`}></div>
            </div>
          </div>
        );

      case 'chip':
        return (
          <div className="flex gap-2 flex-wrap">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`${i === 1 ? 'bg-accent text-accent-foreground' : `border ${borderColor} ${bgColor}`} px-4 py-2 rounded-full`}>
                <div className={`h-3 ${i === 1 ? 'bg-accent-foreground/80' : isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/60'} rounded w-12`} style={{ borderRadius: 'var(--radius)' }}></div>
              </div>
            ))}
          </div>
        );

      case 'date-picker':
        return (
          <div className="w-full space-y-2">
            <div className={`h-3 ${isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/60'} rounded w-1/4`} style={{ borderRadius: 'var(--radius)' }}></div>
            <div className={`border ${borderColor} ${bgColor} rounded p-4`} style={{ borderRadius: 'var(--radius)' }}>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 35 }).map((_, i) => (
                  <div key={i} className={`h-8 ${i === 10 ? 'bg-accent' : isDark ? 'bg-primary-foreground/20' : 'bg-muted-foreground/20'} rounded`} style={{ borderRadius: 'var(--radius)' }}></div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'breadcrumbs':
        return (
          <div className="flex items-center gap-2">
            {['Home', 'Category', 'Page'].map((label, i) => (
              <div key={i} className="flex items-center gap-2">
                {i > 0 && <span className={textColor}>/</span>}
                <div className={`h-3 ${i === 2 ? isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/60' : 'bg-accent/60'} rounded w-16`} style={{ borderRadius: 'var(--radius)' }}></div>
              </div>
            ))}
          </div>
        );

      case 'divider':
        return (
          <div className="w-full space-y-4">
            <div className={`h-3 ${isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/60'} rounded w-3/4`} style={{ borderRadius: 'var(--radius)' }}></div>
            <div className={`h-px ${isDark ? 'bg-primary-foreground/20' : 'bg-border'} w-full`}></div>
            <div className={`h-3 ${isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/60'} rounded w-2/3`} style={{ borderRadius: 'var(--radius)' }}></div>
          </div>
        );

      case 'link':
      case 'icon-link':
        return (
          <div className="space-y-2">
            <div className={`h-4 bg-accent/80 rounded w-32 underline`} style={{ borderRadius: 'var(--radius)' }}></div>
            <div className={`h-4 ${isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/60'} rounded w-40`} style={{ borderRadius: 'var(--radius)' }}></div>
          </div>
        );

      case 'list':
        return (
          <div className="space-y-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`h-2 w-2 ${isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/60'} rounded-full mt-1.5`}></div>
                <div className={`h-4 ${isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/60'} rounded flex-1`} style={{ borderRadius: 'var(--radius)' }}></div>
              </div>
            ))}
          </div>
        );

      case 'loading-spinner':
        return (
          <div className="flex justify-center">
            <div className={`w-12 h-12 border-4 ${borderColor} border-t-accent rounded-full animate-spin`}></div>
          </div>
        );

      case 'progress-bar':
        return (
          <div className="w-full space-y-2">
            <div className={`h-3 ${isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/60'} rounded w-1/4`} style={{ borderRadius: 'var(--radius)' }}></div>
            <div className={`h-2 ${isDark ? 'bg-primary-foreground/20' : 'bg-muted-foreground/20'} rounded w-full overflow-hidden`} style={{ borderRadius: 'var(--radius)' }}>
              <div className="h-full bg-accent w-2/3"></div>
            </div>
          </div>
        );

      case 'progress-stepper':
        return (
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="contents">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${i <= 2 ? 'bg-accent text-accent-foreground' : `border-2 ${borderColor} ${bgColor}`}`}>
                  <span style={{ fontFamily: 'var(--font-family-nobel)', fontSize: 'var(--text-label)' }} className={i <= 2 ? 'text-accent-foreground' : textColor}>{i}</span>
                </div>
                {i < 4 && <div className={`h-px flex-1 ${i < 2 ? 'bg-accent' : isDark ? 'bg-primary-foreground/20' : 'bg-border'}`}></div>}
              </div>
            ))}
          </div>
        );

      case 'typography':
        return (
          <div className="space-y-4">
            <div className={`h-8 ${isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/60'} rounded w-3/4`} style={{ borderRadius: 'var(--radius)' }}></div>
            <div className={`h-4 ${isDark ? 'bg-primary-foreground/40' : 'bg-muted-foreground/40'} rounded w-full`} style={{ borderRadius: 'var(--radius)' }}></div>
            <div className={`h-4 ${isDark ? 'bg-primary-foreground/40' : 'bg-muted-foreground/40'} rounded w-5/6`} style={{ borderRadius: 'var(--radius)' }}></div>
          </div>
        );

      case 'video':
        return (
          <div className={`aspect-video ${isDark ? 'bg-primary-foreground/20' : 'bg-muted-foreground/20'} rounded flex items-center justify-center`} style={{ borderRadius: 'var(--radius)' }}>
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-8 border-l-accent-foreground border-y-6 border-y-transparent ml-1"></div>
            </div>
          </div>
        );

      case 'bar-graph':
        return (
          <div className="space-y-2 w-full">
            {[80, 60, 90, 40].map((width, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`h-3 ${isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/60'} rounded w-16`} style={{ borderRadius: 'var(--radius)' }}></div>
                <div className={`h-6 bg-chart-${(i % 5) + 1}/60 rounded`} style={{ width: `${width}%`, borderRadius: 'var(--radius)' }}></div>
              </div>
            ))}
          </div>
        );

      case 'tooltip-popup':
      case 'tooltip-icon':
        return (
          <div className="relative inline-block">
            <div className={`h-4 w-4 ${isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/60'} rounded-full`}></div>
            <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 ${bgColor} border ${borderColor} rounded px-3 py-2 whitespace-nowrap`} style={{ borderRadius: 'var(--radius)' }}>
              <div className={`h-3 ${isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/60'} rounded w-24`} style={{ borderRadius: 'var(--radius)' }}></div>
            </div>
          </div>
        );

      case 'dealer-map':
      case 'lexus-map':
        return (
          <div className={`aspect-video ${isDark ? 'bg-primary-foreground/20' : 'bg-muted-foreground/20'} rounded relative`} style={{ borderRadius: 'var(--radius)' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-accent rounded-full border-4 border-accent-foreground/20"></div>
          </div>
        );

      case 'decorative-car-card':
      case 'vehicle-placeholder':
        return (
          <div className={`border ${borderColor} ${bgColor} rounded p-4 space-y-3`} style={{ borderRadius: 'var(--radius-card)' }}>
            <div className={`aspect-video ${isDark ? 'bg-primary-foreground/20' : 'bg-muted-foreground/20'} rounded`} style={{ borderRadius: 'var(--radius)' }}></div>
            <div className={`h-4 ${isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/60'} rounded w-2/3`} style={{ borderRadius: 'var(--radius)' }}></div>
            <div className={`h-3 ${isDark ? 'bg-primary-foreground/40' : 'bg-muted-foreground/40'} rounded w-full`} style={{ borderRadius: 'var(--radius)' }}></div>
          </div>
        );

      case 'footer':
      case 'global-footer':
        return (
          <div className={`${isDark ? 'bg-primary-foreground/10' : 'bg-muted-foreground/10'} p-6 rounded space-y-4`} style={{ borderRadius: 'var(--radius)' }}>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-2">
                  <div className={`h-3 ${isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/60'} rounded w-20`} style={{ borderRadius: 'var(--radius)' }}></div>
                  <div className={`h-2 ${isDark ? 'bg-primary-foreground/40' : 'bg-muted-foreground/40'} rounded w-16`} style={{ borderRadius: 'var(--radius)' }}></div>
                  <div className={`h-2 ${isDark ? 'bg-primary-foreground/40' : 'bg-muted-foreground/40'} rounded w-16`} style={{ borderRadius: 'var(--radius)' }}></div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'primary-nav':
      case 'secondary-nav':
      case 'sticky-nav':
        return (
          <div className={`border ${borderColor} ${bgColor} p-4 rounded flex items-center justify-between`} style={{ borderRadius: 'var(--radius)' }}>
            <div className={`h-6 ${isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/60'} rounded w-24`} style={{ borderRadius: 'var(--radius)' }}></div>
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`h-4 ${isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/60'} rounded w-16`} style={{ borderRadius: 'var(--radius)' }}></div>
              ))}
            </div>
          </div>
        );

      case 'dot-stack':
        return (
          <div className="flex gap-2 justify-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-accent' : isDark ? 'bg-primary-foreground/40' : 'bg-muted-foreground/40'}`}></div>
            ))}
          </div>
        );

      case 'item-switcher':
        return (
          <div className="flex items-center justify-between w-full">
            <div className={`h-8 w-8 border ${borderColor} ${bgColor} rounded flex items-center justify-center`} style={{ borderRadius: 'var(--radius)' }}>
              <div className={`h-4 w-4 ${isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/60'}`}></div>
            </div>
            <div className={`h-4 ${isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/60'} rounded w-32`} style={{ borderRadius: 'var(--radius)' }}></div>
            <div className={`h-8 w-8 border ${borderColor} ${bgColor} rounded flex items-center justify-center`} style={{ borderRadius: 'var(--radius)' }}>
              <div className={`h-4 w-4 ${isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/60'}`}></div>
            </div>
          </div>
        );

      case 'back-to-top':
      case 'scroll-indicator':
        return (
          <div className="flex justify-center">
            <div className={`w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center`}>
              <div className="w-0 h-0 border-b-8 border-b-accent-foreground border-x-6 border-x-transparent"></div>
            </div>
          </div>
        );

      // Default wireframe for unlisted components
      default:
        return (
          <div className={`border ${borderColor} ${bgColor} rounded p-6 space-y-3`} style={{ borderRadius: 'var(--radius)' }}>
            <div className={`h-4 ${isDark ? 'bg-primary-foreground/60' : 'bg-muted-foreground/60'} rounded w-3/4`} style={{ borderRadius: 'var(--radius)' }}></div>
            <div className={`h-3 ${isDark ? 'bg-primary-foreground/40' : 'bg-muted-foreground/40'} rounded w-full`} style={{ borderRadius: 'var(--radius)' }}></div>
            <div className={`h-3 ${isDark ? 'bg-primary-foreground/40' : 'bg-muted-foreground/40'} rounded w-5/6`} style={{ borderRadius: 'var(--radius)' }}></div>
          </div>
        );
    }
  };

  // In compact mode (grid view), render without extra padding/border
  if (compact) {
    return <div className="w-full h-full">{renderWireframe()}</div>;
  }

  // In full mode (detail page), render with container
  return (
    <div className={`${bgColor} ${textColor} p-6 rounded-lg border ${borderColor}`} style={{ borderRadius: 'var(--radius-card)' }}>
      {renderWireframe()}
    </div>
  );
};