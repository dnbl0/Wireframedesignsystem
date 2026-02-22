import { Accordion } from '../components/Accordion';

export default function AccordionDemo() {
  const faqItems = [
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
        'Lease terms and conditions apply. Monthly payments are based on approved credit and may vary by dealer. Contact your local Lexus dealer for complete details and current offers.',
    },
    {
      id: 'finance',
      title: 'FINANCE',
      content:
        'Competitive finance rates available on approved credit. Our finance specialists will work with you to find the best financing solution tailored to your budget and needs.',
    },
    {
      id: 'warranty',
      title: 'WARRANTY',
      content:
        'All new Lexus vehicles come with a comprehensive warranty package including 4 years/80,000 km basic warranty and roadside assistance. Extended warranty options are also available.',
    },
    {
      id: 'service',
      title: 'SERVICE',
      content:
        'Complimentary scheduled maintenance for the first 2 years or 32,000 km. Our certified technicians use genuine Lexus parts to keep your vehicle running at peak performance.',
    },
  ];

  const singleOpenItems = [
    {
      id: 'about',
      title: 'ABOUT US',
      content:
        'We are a leading provider of premium automotive solutions, dedicated to delivering exceptional quality and customer service across all our operations.',
    },
    {
      id: 'contact',
      title: 'CONTACT',
      content:
        'Visit our showroom or contact us by phone, email, or through our website. Our team is ready to assist you Monday through Saturday, 9 AM to 6 PM.',
    },
    {
      id: 'locations',
      title: 'LOCATIONS',
      content:
        'We have multiple locations across the region to serve you better. Find your nearest dealership using our location finder tool on our website.',
    },
  ];

  return (
    <div className="space-y-16">
      {/* Header */}
      <div>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl">🎵</span>
          <h1
            style={{
              fontFamily: 'var(--font-family-nobel)',
              fontSize: 'var(--text-h2)',
              fontWeight: 'var(--font-weight-book)',
            }}
            className="uppercase tracking-wider text-foreground"
          >
            Accordion Component
          </h1>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
          }}
          className="text-muted-foreground max-w-3xl"
        >
          A fully functional accordion component built from your Figma import. Features smooth
          animations, expand/collapse behavior, and integration with your design system.
        </p>
      </div>

      {/* Allow Multiple Example */}
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h3)',
            fontWeight: 'var(--font-weight-bold)',
          }}
          className="uppercase tracking-wider text-foreground mb-4"
        >
          FAQ - Multiple Open
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
          }}
          className="text-muted-foreground mb-6"
        >
          This accordion allows multiple items to be open at the same time. Click any item to
          expand or collapse it.
        </p>
        <Accordion items={faqItems} allowMultiple={true} defaultOpenIds={['buy']} />
      </div>

      {/* Single Open Example */}
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h3)',
            fontWeight: 'var(--font-weight-bold)',
          }}
          className="uppercase tracking-wider text-foreground mb-4"
        >
          Information - Single Open
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-body)',
          }}
          className="text-muted-foreground mb-6"
        >
          This accordion only allows one item to be open at a time. Opening a new item automatically
          closes the previously open item.
        </p>
        <Accordion items={singleOpenItems} allowMultiple={false} />
      </div>

      {/* Features */}
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h3)',
            fontWeight: 'var(--font-weight-bold)',
          }}
          className="uppercase tracking-wider text-foreground mb-6"
        >
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            style={{
              borderRadius: 'var(--radius-card)',
              backgroundColor: 'var(--card)',
            }}
            className="p-6 border border-border"
          >
            <h3
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-h5)',
                fontWeight: 'var(--font-weight-bold)',
              }}
              className="uppercase tracking-wider text-foreground mb-3"
            >
              Smooth Animations
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-body)',
              }}
              className="text-muted-foreground"
            >
              Built with Motion for smooth expand/collapse animations and icon rotations
            </p>
          </div>

          <div
            style={{
              borderRadius: 'var(--radius-card)',
              backgroundColor: 'var(--card)',
            }}
            className="p-6 border border-border"
          >
            <h3
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-h5)',
                fontWeight: 'var(--font-weight-bold)',
              }}
              className="uppercase tracking-wider text-foreground mb-3"
            >
              Design System Integration
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-body)',
              }}
              className="text-muted-foreground"
            >
              Uses CSS variables from your design system for colors, typography, and spacing
            </p>
          </div>

          <div
            style={{
              borderRadius: 'var(--radius-card)',
              backgroundColor: 'var(--card)',
            }}
            className="p-6 border border-border"
          >
            <h3
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-h5)',
                fontWeight: 'var(--font-weight-bold)',
              }}
              className="uppercase tracking-wider text-foreground mb-3"
            >
              Flexible Behavior
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-body)',
              }}
              className="text-muted-foreground"
            >
              Support for single or multiple open items, with configurable defaults
            </p>
          </div>

          <div
            style={{
              borderRadius: 'var(--radius-card)',
              backgroundColor: 'var(--card)',
            }}
            className="p-6 border border-border"
          >
            <h3
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-h5)',
                fontWeight: 'var(--font-weight-bold)',
              }}
              className="uppercase tracking-wider text-foreground mb-3"
            >
              Fully Accessible
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-body)',
              }}
              className="text-muted-foreground"
            >
              Keyboard navigable with proper button semantics and ARIA attributes
            </p>
          </div>
        </div>
      </div>

      {/* Code Example */}
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-family-nobel)',
            fontSize: 'var(--text-h3)',
            fontWeight: 'var(--font-weight-bold)',
          }}
          className="uppercase tracking-wider text-foreground mb-6"
        >
          Usage
        </h2>
        <div
          style={{
            borderRadius: 'var(--radius-card)',
            backgroundColor: 'var(--card)',
          }}
          className="p-6 border border-border"
        >
          <pre
            style={{
              fontFamily: 'monospace',
              fontSize: '14px',
            }}
            className="text-foreground overflow-x-auto"
          >
            {`<Accordion
  items={[
    {
      id: 'item1',
      title: 'ACCORDION TITLE',
      content: 'Accordion content goes here...'
    }
  ]}
  allowMultiple={true}
  defaultOpenIds={['item1']}
/>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
