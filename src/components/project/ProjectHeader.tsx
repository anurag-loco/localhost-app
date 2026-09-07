import { FunctionComponent, useState } from 'react';

export type ProjectHeaderProps = {
  className?: string;
  companyName?: string;
  userInitials?: string;
  userAvatar?: string;
  onMenuClick?: () => void;
};

const navigationItems = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Parámetros', href: '/parameters' },
  { label: 'Proyectos', href: '/projects', isActive: true },
];

const ProjectHeader: FunctionComponent<ProjectHeaderProps> = ({
  className = '',
  companyName = 'Innovatech Solutions',
  userInitials = 'JS',
  userAvatar,
  onMenuClick,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((isOpen) => !isOpen);
    onMenuClick?.();
  };

  return (
    <header
      className={className}
      role="banner"
      style={{
        background: '#ffffff',
        borderBottom: '1px solid #acacac',
        color: '#111111',
        fontFamily: 'sans-serif',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          alignItems: 'center',
          display: 'grid',
          gap: 20,
          gridTemplateColumns: 'minmax(180px, 1fr) auto minmax(180px, 1fr)',
          minHeight: 76,
          padding: '0 clamp(18px, 4vw, 52px)',
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              color: '#7c7c7c',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '.16em',
              marginBottom: 4,
              textTransform: 'uppercase',
            }}
          >
            Workspace
          </div>
          <h1
            style={{
              fontSize: 17,
              lineHeight: 1.1,
              margin: 0,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {companyName}
          </h1>
        </div>

        <nav
          aria-label="Main navigation"
          className="project-header-navigation"
          style={{ alignItems: 'stretch', display: 'flex', height: '100%' }}
        >
          {navigationItems.map((item) => (
            <a
              aria-current={item.isActive ? 'page' : undefined}
              href={item.href}
              key={item.href}
              style={{
                alignItems: 'center',
                borderBottom: item.isActive
                  ? '3px solid #111111'
                  : '3px solid transparent',
                color: item.isActive ? '#111111' : '#7c7c7c',
                display: 'flex',
                fontSize: 13,
                fontWeight: item.isActive ? 750 : 500,
                padding: '0 18px',
                textDecoration: 'none',
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            gap: 10,
            justifyContent: 'flex-end',
          }}
        >
          <button
            aria-label="Notifications"
            style={{
              background: '#ffffff',
              border: 0,
              color: '#111111',
              fontFamily: 'sans-serif',
              fontSize: 22,
              height: 38,
              width: 38,
            }}
            type="button"
          >
            •
          </button>
          <button
            aria-label="User menu"
            style={{
              background: '#ffffff',
              border: '1px solid #acacac',
              borderRadius: 8,
              color: '#111111',
              fontFamily: 'sans-serif',
              fontWeight: 750,
              height: 42,
              overflow: 'hidden',
              padding: 0,
              width: 42,
            }}
            type="button"
          >
            {userAvatar ? (
              <img
                alt="User avatar"
                src={userAvatar}
                style={{ height: '100%', objectFit: 'cover', width: '100%' }}
              />
            ) : (
              userInitials
            )}
          </button>
          <button
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
            className="project-header-menu-button"
            onClick={toggleMobileMenu}
            style={{
              background: '#ffffff',
              border: '1px solid #acacac',
              borderRadius: 8,
              color: '#111111',
              display: 'none',
              fontFamily: 'sans-serif',
              height: 40,
              width: 40,
            }}
            type="button"
          >
            ☰
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="project-header-mobile-navigation"
          style={{ display: 'none', padding: '8px 18px 18px' }}
        >
          {navigationItems.map((item) => (
            <a
              aria-current={item.isActive ? 'page' : undefined}
              href={item.href}
              key={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                borderTop: '1px solid #acacac',
                color: '#111111',
                display: 'block',
                fontWeight: item.isActive ? 750 : 500,
                padding: '12px 0',
                textDecoration: 'none',
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}

      <style>{`
        @media (max-width: 760px) {
          .project-header-navigation {
            display: none !important;
          }

          .project-header-menu-button,
          .project-header-mobile-navigation {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};

export default ProjectHeader;
