import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Accordion } from '../components/Accordion';
import svgPaths from '../../imports/svg-iko0xihcpl';

type TabType = 'design' | 'develop' | 'accessibility';

export default function AccordionDocumentation() {
  const [activeTab, setActiveTab] = useState<TabType>('accessibility');
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  const basicExample = [
    {
      id: 'buy',
      title: 'BUY',
      content:
        'Encore Platinum Benefits apply on new and demonstrator L-Series & F model vehicles sold on or after 03/08/2020 for a 3 year period from the date Encore is first activated by the Dealership.',
    },
    {
      id: 'lease',
      title: 'LEASE',
      content:
        'Lease terms and conditions apply. Monthly payments are based on approved credit and may vary by dealer.',
    },
  ];

  const longLabelExample = [
    {
      id: 'mobile-reception',
      title:
        'IF MY VEHICLE IS IN AN AREA WITH POOR MOBILE RECEPTION, SUCH AS A REMOTE AREA OR AN UNDERGROUND CARPARK, WILL THE LEXUS CONNECTED SERVICES SYSTEM WORK?',
      content:
        'Encore Platinum Benefits apply on new and demonstrator L-Series & F model vehicles sold on or after 03/08/2020 for a 3 year period from the date Encore is first activated by the Dealership.',
    },
  ];

  return (
    <div className="flex flex-col items-start w-full">
      {/* Header */}
      <div
        className="bg-card w-full border-b border-border"
        style={{
          borderTopLeftRadius: 'var(--radius-section)',
          borderTopRightRadius: 'var(--radius-section)',
        }}
      >
        <div className="flex flex-col gap-16 items-start pb-12 pt-24 px-24">
          {/* Logo and Tags */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              <span
                style={{
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-h3)',
                  fontWeight: 'var(--font-weight-book)',
                }}
                className="text-foreground"
              >
                LexusKit
              </span>
            </div>
            <div className="flex gap-2">
              <div
                className="flex items-center justify-center px-3 py-2"
                style={{
                  backgroundColor: 'var(--accent)',
                  borderRadius: 'var(--radius-pill)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-family-nobel)',
                    fontSize: 'var(--text-label)',
                    fontWeight: 'var(--font-weight-book)',
                  }}
                  className="text-accent-foreground uppercase tracking-wider"
                >
                  Developer Doc
                </span>
              </div>
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 border border-primary hover:bg-primary/10 transition-colors"
                style={{
                  borderRadius: 'var(--radius-pill)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-family-nobel)',
                    fontSize: 'var(--text-label)',
                    fontWeight: 'var(--font-weight-bold)',
                  }}
                  className="text-primary uppercase tracking-wider"
                >
                  🔗 Storybook Link
                </span>
                <ExternalLink className="w-3 h-3 text-primary" />
              </a>
            </div>
          </div>

          {/* Title */}
          <div className="flex gap-4 items-center">
            <h1
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-display)',
                fontWeight: 'var(--font-weight-book)',
              }}
              className="text-foreground"
            >
              Component
            </h1>
            <h1
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-display)',
                fontWeight: 'var(--font-weight-book)',
              }}
              className="text-foreground opacity-70"
            >
              Accordion
            </h1>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-card w-full border-b border-border">
        <div className="flex flex-col items-start pt-14 px-24">
          <div className="flex gap-2 w-full border-b border-border">
            {(['design', 'develop', 'accessibility'] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative flex flex-col gap-3 items-start max-w-[290px] p-4 hover:bg-muted/50 transition-colors"
              >
                <span
                  style={{
                    fontFamily: 'var(--font-family-nobel)',
                    fontSize: 'var(--text-label)',
                    fontWeight: 'var(--font-weight-bold)',
                  }}
                  className={`uppercase tracking-wider ${
                    activeTab === tab ? 'text-foreground' : 'text-foreground/75'
                  }`}
                >
                  {tab}
                </span>
                {activeTab === tab && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ backgroundColor: 'var(--destructive)' }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Behaviour Section */}
      <div className="bg-card w-full border-b border-border">
        <div className="flex flex-col gap-10 items-start px-24 py-14">
          <h2
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-h2)',
              fontWeight: 'var(--font-weight-book)',
            }}
            className="text-foreground uppercase tracking-wider"
          >
            Behaviour
          </h2>

          {/* Clickable Area Example */}
          <div className="flex gap-4 items-start w-full max-w-[888px]">
            <div className="flex-1 flex flex-col gap-2">
              <h3
                style={{
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-subtitle)',
                  fontWeight: 'var(--font-weight-book)',
                }}
                className="text-foreground uppercase tracking-wider"
              >
                Clickable Area
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-subtitle)',
                  fontWeight: 'var(--font-weight-book)',
                }}
                className="text-foreground"
              >
                The blue highlighted area demonstrates the clickable/hoverable area of this
                component.
              </p>
            </div>
            <div
              className="flex-1 bg-background p-10 border border-border"
              style={{ borderRadius: 'var(--radius-card)' }}
            >
              <div className="flex flex-col gap-10">
                {/* Closed state with hover highlight */}
                <div
                  className="relative w-full border-t border-b border-muted-foreground"
                  onMouseEnter={() => setHoveredRow('closed')}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <div
                    className={`flex items-center px-4 py-6 transition-colors cursor-pointer ${
                      hoveredRow === 'closed' ? 'bg-primary/20' : ''
                    }`}
                  >
                    <div className="flex-1 flex gap-4 items-center">
                      <span
                        style={{
                          fontFamily: 'var(--font-family-nobel)',
                          fontSize: 'var(--text-subtitle)',
                          fontWeight: 'var(--font-weight-book)',
                        }}
                        className="text-foreground/70"
                      >
                        BUY
                      </span>
                      <div className="ml-auto">
                        <svg
                          className="w-6 h-4"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 11.8284 7.32843"
                        >
                          <path d={svgPaths.p36934071} fill="currentColor" className="text-foreground" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Open state with hover highlight */}
                <div
                  className="relative w-full border-t border-b border-muted-foreground"
                  onMouseEnter={() => setHoveredRow('open')}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <div
                    className={`flex items-center px-4 py-6 transition-colors cursor-pointer ${
                      hoveredRow === 'open' ? 'bg-primary/20' : ''
                    }`}
                  >
                    <div className="flex-1 flex gap-4 items-center">
                      <span
                        style={{
                          fontFamily: 'var(--font-family-nobel)',
                          fontSize: 'var(--text-subtitle)',
                          fontWeight: 'var(--font-weight-book)',
                        }}
                        className="text-foreground/70"
                      >
                        BUY
                      </span>
                      <div className="ml-auto rotate-180">
                        <svg
                          className="w-6 h-4"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 11.8284 7.32843"
                        >
                          <path d={svgPaths.p36934071} fill="currentColor" className="text-foreground" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 pb-6">
                    <p
                      style={{
                        fontFamily: 'var(--font-family-nobel)',
                        fontSize: 'var(--text-body)',
                        fontWeight: 'var(--font-weight-book)',
                      }}
                      className="text-foreground"
                    >
                      Encore Platinum Benefits apply on new and demonstrator L-Series & F model
                      vehicles sold on or after 03/08/2020 for a 3 year period from the date Encore
                      is first activated by the Dealership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Long Label Example */}
          <div className="flex gap-4 items-start w-full max-w-[888px]">
            <div className="flex-1 flex flex-col gap-2">
              <h3
                style={{
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-subtitle)',
                  fontWeight: 'var(--font-weight-book)',
                }}
                className="text-foreground uppercase tracking-wider"
              >
                Long Label Example
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-subtitle)',
                  fontWeight: 'var(--font-weight-book)',
                }}
                className="text-foreground"
              >
                Accordion rows with long labels will just overflow onto as many lines as needed.
                There is a gap value between the icon and the label which prevents overcrowding. The
                icon will remain centred vertically with the full height of the label.
              </p>
            </div>
            <div
              className="w-[436px] bg-background p-10 border border-border"
              style={{ borderRadius: 'var(--radius-card)' }}
            >
              <Accordion items={longLabelExample} allowMultiple={false} />
            </div>
          </div>

          {/* Keyboard Interactions */}
          <div className="flex gap-4 items-start w-full max-w-[888px]">
            <div className="flex-1 flex flex-col gap-2">
              <h3
                style={{
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-subtitle)',
                  fontWeight: 'var(--font-weight-book)',
                }}
                className="text-foreground uppercase tracking-wider"
              >
                Keyboard Interactions
              </h3>
              <div
                style={{
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-subtitle)',
                  fontWeight: 'var(--font-weight-book)',
                }}
                className="text-foreground space-y-4"
              >
                <p>
                  On <kbd className="px-2 py-1 bg-muted border border-border rounded">Tab</kbd> will
                  focus on the container holding the icon and the label. Pressing{' '}
                  <kbd className="px-2 py-1 bg-muted border border-border rounded">Enter</kbd> or{' '}
                  <kbd className="px-2 py-1 bg-muted border border-border rounded">Space</kbd> will
                  open or close the accordion row.
                </p>
                <p className="mt-4">Tab sequence for accordion groups:</p>
                <ul className="list-none space-y-2 mt-2">
                  <li>Tab 1: Focus on the first/top accordion row</li>
                  <li>Tab 2: Focus on the next accordion</li>
                  <li>Tab 3: Focus on the next accordion</li>
                  <li>Etc.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Changelog Section */}
      <div
        className="bg-card w-full"
        style={{
          borderBottomLeftRadius: 'var(--radius-section)',
          borderBottomRightRadius: 'var(--radius-section)',
        }}
      >
        <div className="flex flex-col gap-10 items-start pb-24 pt-14 px-24">
          <h2
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-h2)',
              fontWeight: 'var(--font-weight-book)',
            }}
            className="text-foreground uppercase tracking-wider"
          >
            Changelog
          </h2>

          {/* Simple Table */}
          <div className="flex gap-4 w-full">
            {/* Date Column */}
            <div className="flex flex-col">
              <div className="p-4">
                <p
                  style={{
                    fontFamily: 'var(--font-family-nobel)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 'var(--font-weight-bold)',
                  }}
                  className="text-foreground"
                >
                  Date
                </p>
              </div>
              <div className="p-4 border-t border-border">
                <p
                  style={{
                    fontFamily: 'var(--font-family-nobel)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 'var(--font-weight-book)',
                  }}
                  className="text-foreground"
                >
                  April, 2025
                </p>
              </div>
            </div>

            {/* Notes Column */}
            <div className="flex-1 flex flex-col">
              <div className="p-4">
                <p
                  style={{
                    fontFamily: 'var(--font-family-nobel)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 'var(--font-weight-bold)',
                  }}
                  className="text-foreground"
                >
                  Notes
                </p>
              </div>
              <div className="p-4 border-t border-border">
                <p
                  style={{
                    fontFamily: 'var(--font-family-nobel)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 'var(--font-weight-book)',
                  }}
                  className="text-foreground"
                >
                  Published <span className="italic">accordion-row</span> and{' '}
                  <span className="italic">accordion-group</span> via Lexuskit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
