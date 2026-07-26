import { FunctionComponent, useState } from 'react';

export type ProjectHeaderProps = {
  className?: string;
  companyName?: string;
  userInitials?: string;
  userAvatar?: string;
  onMenuClick?: () => void;
};

/**
 * Project management header with company branding and user navigation
 * Includes responsive navigation menu and user profile
 */
const ProjectHeader: FunctionComponent<ProjectHeaderProps> = ({
  className = "",
  companyName = "Innovatech Solutions",
  userInitials = "JS",
  userAvatar,
  onMenuClick
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Dashboard', href: '/dashboard', isActive: false },
    { label: 'Parámetros', href: '/parameters', isActive: false },
    { label: 'Proyectos', href: '/projects', isActive: true }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`
        w-full border-b border-gray-200 bg-white sticky top-0 z-50
        flex items-center justify-between py-3 px-10 gap-5
        ${className}
      `}
      role="banner"
    >
      {/* Left side - Company branding */}
      <div className="flex items-center gap-4">
        <img 
          className="w-4 h-4" 
          alt="Company logo" 
          src="/InputSubindustryName.svg"
          loading="lazy"
        />
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-gray-800 leading-tight">
            {companyName}
          </h1>
        </div>
      </div>

      {/* Right side - Navigation and user */}
      <div className="flex-1 flex items-center justify-end gap-8">
        {/* Desktop Navigation */}
        <nav 
          className="hidden lg:flex items-center gap-9"
          role="navigation"
          aria-label="Main navigation"
        >
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`
                text-sm font-medium transition-colors duration-200
                hover:text-blue-600 focus:outline-none focus:text-blue-600
                ${item.isActive 
                  ? 'text-gray-800 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-600'
                }
              `}
              aria-current={item.isActive ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <img 
            className="w-6 h-6" 
            alt="Menu" 
            src="/Depth-4-Frame-1.svg"
          />
        </button>

        {/* Notification button */}
        <button
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Notifications"
        >
          <img 
            className="w-10 h-10 rounded-lg" 
            alt="Notifications" 
            src="/Depth-4-Frame-1.svg"
          />
        </button>

        {/* User profile */}
        <div className="relative">
          <button
            className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
            aria-label="User menu"
          >
            {userAvatar ? (
              <img 
                className="w-10 h-10 rounded-full object-cover" 
                alt="User avatar" 
                src={userAvatar}
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white font-medium text-sm">
                  {userInitials}
                </span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg lg:hidden">
          <nav className="flex flex-col py-4 px-6" role="navigation">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`
                  py-3 text-sm font-medium transition-colors duration-200
                  hover:text-blue-600 focus:outline-none focus:text-blue-600
                  ${item.isActive ? 'text-blue-600' : 'text-gray-600'}
                `}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-current={item.isActive ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default ProjectHeader;
