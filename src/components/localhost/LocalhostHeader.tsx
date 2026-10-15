import { FunctionComponent, useState } from 'react';
import LocalhostLogo from './LocalhostLogo';

export type LocalhostHeaderProps = {
  className?: string;
  onNavigationClick?: (section: string) => void;
};

/**
 * Main header component for Localhost application
 * Includes logo, navigation menu, and responsive mobile menu
 */
const LocalhostHeader: FunctionComponent<LocalhostHeaderProps> = ({
  className = "",
  onNavigationClick
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', href: '/', isActive: true },
    { label: 'Stays', href: '/stays', isActive: false },
    { label: 'Become a host', href: '/host', isActive: false }
  ];

  const handleNavigationClick = (item: typeof navigationItems[0]) => {
    if (onNavigationClick) {
      onNavigationClick(item.label);
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`relative w-full bg-white border-b border-light-grey-border sticky top-0 z-50 ${className}`}
      role="banner"
    >
      <div className="relative z-50 flex items-center justify-between pt-3 px-12 pb-3 gap-5 mq800:px-6">
        {/* Logo */}
        <LocalhostLogo />
        
        {/* Desktop Navigation */}
        <div className="w-57 flex flex-col items-start pt-3 px-0 pb-0 mq800:hidden">
          <nav 
            className="w-full h-4 relative"
            role="navigation"
            aria-label="Main navigation"
          >
            {navigationItems.map((item, index) => (
              <button
                key={index}
                type="button"
                className={`
                  absolute top-0 text-sm font-archivo transition-colors duration-200
                  hover:text-accent focus:outline-none focus:text-accent
                  ${item.isActive ? 'text-black font-medium' : 'text-black'}
                  ${index === 0 ? 'left-0' : index === 1 ? 'left-17' : 'left-34'}
                `}
                onClick={() => handleNavigationClick(item)}
                aria-current={item.isActive ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="hidden mq800:flex items-center justify-center p-2 rounded hover:bg-gray-100 transition-colors"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isMobileMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-25 hidden mq800:block"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="absolute top-full left-0 right-0 z-50 bg-white border-b border-light-grey-border shadow-lg hidden mq800:block"
        >
          <nav className="flex flex-col py-4 px-6" role="navigation" aria-label="Mobile navigation">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                type="button"
                className={`
                  py-3 text-left text-sm font-archivo transition-colors duration-200
                  hover:text-accent focus:outline-none focus:text-accent
                  ${item.isActive ? 'text-accent font-medium' : 'text-black'}
                `}
                onClick={() => handleNavigationClick(item)}
                aria-current={item.isActive ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default LocalhostHeader;
