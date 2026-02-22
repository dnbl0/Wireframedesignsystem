import { useState } from 'react';
import { Outlet, Link as RouterLink, useLocation } from 'react-router';

export default function Layout() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    'getting-started': true,
    'layout-system': true,
    'components': true,
    'tokens': true,
    'examples': true,
  });

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  // Sidebar navigation structure
  const navigationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      items: [
        { id: 'builder', label: 'Layout Builder', path: '/builder' },
      ],
    },
    {
      id: 'layout-system',
      title: 'Layout System',
      items: [
        { id: 'layouts', label: 'Layouts', path: '/layouts' },
        { id: 'compositions', label: 'Compositions', path: '/compositions' },
        { id: 'pages', label: 'Pages', path: '/pages' },
      ],
    },
    {
      id: 'components',
      title: 'Components',
      items: [
        { id: 'components', label: 'Overview', path: '/components' },
      ],
    },
    {
      id: 'tokens',
      title: 'Design Tokens',
      items: [
        { id: 'tokens', label: 'Overview', path: '/tokens' },
        { id: 'tokens/spacing', label: 'Spacing', path: '/tokens/spacing' },
        { id: 'tokens/colors', label: 'Colors', path: '/tokens/colors' },
        { id: 'tokens/typography', label: 'Typography', path: '/tokens/typography' },
        { id: 'tokens/border-radius', label: 'Border Radius', path: '/tokens/border-radius' },
        { id: 'tokens/responsive', label: 'Responsive', path: '/tokens/responsive' },
      ],
    },
    {
      id: 'examples',
      title: 'Examples',
      items: [
        { id: 'accordion-demo', label: 'Accordion Demo', path: '/accordion-demo' },
        { id: 'accordion-documentation', label: 'Accordion Docs', path: '/accordion-documentation' },
        { id: 'chakra-example', label: 'Chakra UI', path: '/chakra-example' },
        { id: 'chakra-integration', label: 'Integration', path: '/chakra-integration' },
      ],
    },
  ];

  const isItemActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', display: 'flex', flexDirection: 'column' }}>
      {/* Fixed Top Navbar */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'var(--card)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 32px',
            height: '64px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Desktop Sidebar Toggle */}
            <button
              style={{
                display: window.innerWidth >= 996 ? 'flex' : 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--foreground)',
              }}
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label="Toggle sidebar"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 4h16M2 10h16M2 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            {/* Mobile Sidebar Toggle */}
            <button
              style={{
                display: window.innerWidth < 996 ? 'flex' : 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--foreground)',
              }}
              onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
              aria-label="Toggle mobile sidebar"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 4h16M2 10h16M2 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <RouterLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <h1
                style={{
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-h5)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--foreground)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  margin: 0,
                }}
              >
                Layout System
              </h1>
              <span
                style={{
                  display: window.innerWidth < 640 ? 'none' : 'inline-block',
                  padding: '4px 12px',
                  background: 'var(--accent)',
                  color: 'var(--accent-foreground)',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-label)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                LexusKit
              </span>
            </RouterLink>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1, position: 'relative' }}>
        {/* Desktop Sidebar */}
        <aside
          style={{
            display: window.innerWidth >= 996 ? 'block' : 'none',
            width: isSidebarOpen ? '280px' : '0',
            transition: 'width 0.2s ease',
            overflow: 'hidden',
            background: 'var(--sidebar)',
            borderRight: isSidebarOpen ? '1px solid var(--sidebar-border)' : 'none',
            height: 'calc(100vh - 64px)',
            position: 'sticky',
            top: '64px',
            overflowY: 'auto',
          }}
        >
          {isSidebarOpen && (
            <nav style={{ padding: '24px 16px' }}>
              {navigationSections.map((section) => (
                <div key={section.id} style={{ marginBottom: '24px' }}>
                  <button
                    onClick={() => toggleSection(section.id)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 12px',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-family-nobel)',
                      fontSize: 'var(--text-label)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--sidebar-foreground)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      textAlign: 'left',
                    }}
                  >
                    {section.title}
                    <span
                      style={{
                        transform: expandedSections[section.id] ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s',
                        display: 'inline-block',
                        fontSize: '10px',
                      }}
                    >
                      ▼
                    </span>
                  </button>

                  {expandedSections[section.id] && (
                    <div style={{ marginTop: '8px' }}>
                      {section.items.map((item) => (
                        <RouterLink
                          key={item.id}
                          to={item.path}
                          style={{ textDecoration: 'none', display: 'block' }}
                        >
                          <div
                            style={{
                              padding: '8px 12px 8px 24px',
                              fontFamily: 'var(--font-family-nobel)',
                              fontSize: 'var(--text-label)',
                              color: isItemActive(item.path)
                                ? 'var(--sidebar-accent)'
                                : 'var(--sidebar-foreground)',
                              background: isItemActive(item.path)
                                ? 'var(--secondary)'
                                : 'transparent',
                              borderRadius: 'var(--radius)',
                              cursor: 'pointer',
                              transition: 'all 0.2s',
                              borderLeft: isItemActive(item.path)
                                ? '3px solid var(--sidebar-accent)'
                                : '3px solid transparent',
                            }}
                            onMouseEnter={(e) => {
                              if (!isItemActive(item.path)) {
                                e.currentTarget.style.background = 'var(--secondary)';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!isItemActive(item.path)) {
                                e.currentTarget.style.background = 'transparent';
                              }
                            }}
                          >
                            {item.label}
                          </div>
                        </RouterLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          )}
        </aside>

        {/* Mobile Sidebar Overlay */}
        {isMobileSidebarOpen && (
          <>
            <div
              style={{
                display: window.innerWidth < 996 ? 'block' : 'none',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.5)',
                zIndex: 90,
              }}
              onClick={() => setIsMobileSidebarOpen(false)}
            />
            <aside
              style={{
                display: window.innerWidth < 996 ? 'block' : 'none',
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                width: '280px',
                background: 'var(--sidebar)',
                zIndex: 95,
                overflowY: 'auto',
                boxShadow: '2px 0 8px rgba(0, 0, 0, 0.15)',
              }}
            >
              <div style={{ padding: '16px', borderBottom: '1px solid var(--sidebar-border)' }}>
                <button
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-family-nobel)',
                    fontSize: 'var(--text-h5)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--sidebar-foreground)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                  onClick={() => setIsMobileSidebarOpen(false)}
                >
                  Layout System
                  <span style={{ fontSize: 'var(--text-h5)' }}>×</span>
                </button>
              </div>

              <nav style={{ padding: '24px 16px' }}>
                {navigationSections.map((section) => (
                  <div key={section.id} style={{ marginBottom: '24px' }}>
                    <button
                      onClick={() => toggleSection(section.id)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '8px 12px',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-family-nobel)',
                        fontSize: 'var(--text-label)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--sidebar-foreground)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        textAlign: 'left',
                      }}
                    >
                      {section.title}
                      <span
                        style={{
                          transform: expandedSections[section.id] ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s',
                          display: 'inline-block',
                          fontSize: '10px',
                        }}
                      >
                        ▼
                      </span>
                    </button>

                    {expandedSections[section.id] && (
                      <div style={{ marginTop: '8px' }}>
                        {section.items.map((item) => (
                          <RouterLink
                            key={item.id}
                            to={item.path}
                            style={{ textDecoration: 'none', display: 'block' }}
                            onClick={() => setIsMobileSidebarOpen(false)}
                          >
                            <div
                              style={{
                                padding: '8px 12px 8px 24px',
                                fontFamily: 'var(--font-family-nobel)',
                                fontSize: 'var(--text-label)',
                                color: isItemActive(item.path)
                                  ? 'var(--sidebar-accent)'
                                  : 'var(--sidebar-foreground)',
                                background: isItemActive(item.path)
                                  ? 'var(--secondary)'
                                  : 'transparent',
                                borderRadius: 'var(--radius)',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                borderLeft: isItemActive(item.path)
                                  ? '3px solid var(--sidebar-accent)'
                                  : '3px solid transparent',
                              }}
                            >
                              {item.label}
                            </div>
                          </RouterLink>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </aside>
          </>
        )}

        {/* Main Content */}
        <main style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              maxWidth: '1440px',
              margin: '0 auto',
              padding: '48px 32px',
            }}
          >
            <Outlet />
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer
        style={{
          background: 'var(--primary)',
          color: 'var(--primary-foreground)',
          marginTop: 'auto',
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '48px 32px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(3, 1fr)',
              gap: '32px',
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-label)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '16px',
                }}
              >
                About
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-label)',
                  opacity: 0.7,
                  margin: 0,
                }}
              >
                LexusKit Layout System provides a comprehensive set of components for building
                responsive, accessible layouts.
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-label)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '16px',
                }}
              >
                Components
              </h3>
              <ul
                style={{
                  listStyleType: 'none',
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-label)',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <li style={{ opacity: 0.7 }}>Row - Layout container</li>
                <li style={{ opacity: 0.7 }}>Cell - Content holder</li>
                <li style={{ opacity: 0.7 }}>Container - Max-width wrapper</li>
              </ul>
            </div>
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-label)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '16px',
                }}
              >
                Resources
              </h3>
              <ul
                style={{
                  listStyleType: 'none',
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-label)',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <li style={{ opacity: 0.7 }}>Documentation</li>
                <li style={{ opacity: 0.7 }}>Examples</li>
                <li style={{ opacity: 0.7 }}>Storybook</li>
              </ul>
            </div>
          </div>
          <div
            style={{
              marginTop: '32px',
              paddingTop: '32px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-family-nobel)',
                fontSize: 'var(--text-label)',
                opacity: 0.5,
                margin: 0,
              }}
            >
              © 2026 LexusKit Layout System
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}