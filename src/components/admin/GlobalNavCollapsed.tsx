import { FunctionComponent, useState } from 'react';

// Navigation icon component for the collapsed sidebar
const NavIcon: FunctionComponent<{
  icon: string;
  vector: string;
  isActive?: boolean;
}> = ({ icon, vector, isActive = false }) => {
  return (
    <div className={`w-14 h-12 relative flex items-center justify-center ${isActive ? 'bg-gray-100' : ''}`}>
      <div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center">
        <img 
          className="w-5 h-5" 
          alt={icon} 
          src={vector}
          loading="lazy"
        />
      </div>
    </div>
  );
};

// Company/Product avatar component
const CompanyAvatar: FunctionComponent<{
  name: string;
  initials: string;
}> = ({ name, initials }) => {
  return (
    <div className="w-14 h-12 relative text-center text-white font-medium">
      <div className="absolute top-2 left-3 w-8 h-8">
        <div className="bg-gray-600 rounded-lg w-8 h-8 flex items-center justify-center">
          <span className="text-sm font-medium tracking-tight">{initials}</span>
        </div>
      </div>
    </div>
  );
};

export type GlobalNavCollapsedType = {
  className?: string;
  product?: string;
  state?: string;
  bkgrd?: string;
  icon?: string;
};

/**
 * Collapsed navigation sidebar component
 * Displays company branding, navigation icons, and product switcher
 */
const GlobalNavCollapsed: FunctionComponent<GlobalNavCollapsedType> = ({ 
  className = "", 
  product = "OMS", 
  state = "Enabled", 
  bkgrd = "Light", 
  icon = "Finance" 
}) => {
  // Navigation items configuration
  const [navigationItems] = useState([
    { icon: "Home", vector: "/Vector.svg", isActive: false },
    { icon: "Dashboard", vector: "/Vector1.svg", isActive: false },
    { icon: "Purchasing", vector: "/Vector2.svg", isActive: false },
    { icon: "Selling", vector: "/Vertical-container1.svg", isActive: false },
    { icon: "Planning", vector: "/Vector3.svg", isActive: false },
    { icon: "Freight", vector: "/Vector4.svg", isActive: false },
    { icon: "Logistics", vector: "/Vector5.svg", isActive: false },
    { icon: "Receiving", vector: "/Vector6.svg", isActive: false },
    { icon: "Accounting", vector: "/Vector7.svg", isActive: false },
    { icon: "Reports", vector: "/Vector8.svg", isActive: false },
    { icon: "Integration", vector: "/Vector9.svg", isActive: false },
    { icon: "Support", vector: "/Vector10.svg", isActive: false }
  ]);

  return (
    <nav 
      className={`h-full w-14 bg-white flex flex-col items-center border-r border-gray-300 ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Company Logo */}
      <div className="w-14 h-12 rounded-xl overflow-hidden">
        <img 
          className="w-full h-full object-cover" 
          alt="Company Logo" 
          src="/Vertical-container.svg"
          loading="lazy"
        />
      </div>

      {/* Company Avatar */}
      <CompanyAvatar name={product} initials={product.substring(0, 1)} />

      {/* Product Mode Indicator */}
      <div className="w-14 h-12 relative">
        <div className="absolute top-2 left-3 w-8 h-8 bg-white border border-gray-100 rounded-lg flex items-center justify-center">
          <img 
            className="w-6 h-6" 
            alt="Product Mode" 
            src="/Image@2x.png"
            loading="lazy"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="w-10 h-4 flex items-center justify-center py-1">
        <div className="w-full h-px bg-gray-300"></div>
      </div>

      {/* Navigation Icons */}
      <div className="flex-1 flex flex-col">
        {navigationItems.slice(0, 3).map((item, index) => (
          <button
            key={index}
            className="hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
            aria-label={`Navigate to ${item.icon}`}
          >
            <NavIcon 
              icon={item.icon} 
              vector={item.vector} 
              isActive={item.isActive}
            />
          </button>
        ))}

        {/* Security/Shield Icon */}
        <div className="w-14 h-12 relative bg-white flex items-center justify-center">
          <img 
            className="w-5 h-5" 
            alt="Security" 
            src="/ShieldCheck.svg"
            loading="lazy"
          />
        </div>

        {/* Additional Navigation Items */}
        {navigationItems.slice(3).map((item, index) => (
          <button
            key={index + 3}
            className="hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
            aria-label={`Navigate to ${item.icon}`}
          >
            <NavIcon 
              icon={item.icon} 
              vector={item.vector} 
              isActive={item.isActive}
            />
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="w-14 h-24">
        <img 
          className="w-full h-full" 
          alt="Navigation Footer" 
          src="/Condensed-Nav-Footer.svg"
          loading="lazy"
        />
      </div>
    </nav>
  );
};

export default GlobalNavCollapsed;
