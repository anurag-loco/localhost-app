import { FunctionComponent, useState } from 'react';

// Product logo component
const ProductLogo: FunctionComponent<{ product: string }> = ({ product }) => {
  return (
    <div className="absolute top-1/2 left-4 -translate-y-1/2 flex items-center gap-2">
      <img 
        className="h-7 w-5 object-contain" 
        alt="Product Logo" 
        src="/Vector11.svg"
        loading="lazy"
      />
      <div className="h-5 w-12 relative">
        <img className="absolute top-0 right-0 w-3 h-5" alt="" src="/Vector12.svg" loading="lazy" />
        <img className="absolute top-0 left-4 w-4 h-4" alt="" src="/Vector13.svg" loading="lazy" />
        <img className="absolute top-0 left-0 w-4 h-5" alt="" src="/Vector14.svg" loading="lazy" />
      </div>
    </div>
  );
};

// Notification component
const NotificationBell: FunctionComponent<{ hasNotifications?: boolean }> = ({ 
  hasNotifications = false 
}) => {
  return (
    <button 
      className="h-8 w-8 relative overflow-hidden rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label={hasNotifications ? "You have new notifications" : "Notifications"}
    >
      <div className="absolute inset-0 bg-white rounded-lg"></div>
      <img 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5" 
        alt="Notifications" 
        src="/Vertical-container2.svg"
        loading="lazy"
      />
      {hasNotifications && (
        <div className="absolute top-1 right-1 w-3 h-3 bg-red-600 rounded-full border border-white"></div>
      )}
    </button>
  );
};

// User profile component
const UserProfile: FunctionComponent<{
  initials: string;
  isOnline?: boolean;
}> = ({ initials, isOnline = true }) => {
  return (
    <div className="h-8 w-8 relative">
      <div className="absolute inset-0 bg-gray-600 rounded-lg flex items-center justify-center">
        <span className="text-xs font-semibold text-white">{initials}</span>
      </div>
      {isOnline && (
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
      )}
    </div>
  );
};

// User menu dropdown
const UserMenu: FunctionComponent<{ isOpen: boolean; onClose: () => void }> = ({ 
  isOpen, 
  onClose 
}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full right-4 mt-2 w-42 bg-white rounded-lg border border-gray-300 shadow-lg z-50">
      <div className="p-2">
        {/* User Info */}
        <div className="px-2 py-3 border-b border-gray-200">
          <div className="text-sm font-semibold text-gray-900">Parker Annis</div>
        </div>
        
        {/* Menu Items */}
        <button className="w-full text-left px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
          My Account
        </button>
        
        <div className="border-t border-gray-200 my-1"></div>
        
        {/* OMS Modern Toggle */}
        <div className="px-2 py-2 flex items-center justify-between">
          <span className="text-sm text-gray-700">OMS Modern</span>
          <div className="relative">
            <div className="w-8 h-4 bg-blue-600 rounded-full"></div>
            <div className="absolute top-0.5 right-0.5 w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 my-1"></div>
        
        <button className="w-full text-left px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export type GlobalHeaderType = {
  className?: string;
  product?: string;
  showMenu?: boolean;
};

/**
 * Global header component with product branding, notifications, and user menu
 * Provides consistent header across all admin pages
 */
const GlobalHeader: FunctionComponent<GlobalHeaderType> = ({ 
  className = "", 
  product = "OMS", 
  showMenu = false 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(showMenu);

  const handleProfileClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`w-full h-14 bg-white border-b border-gray-300 relative ${className}`}
      role="banner"
    >
      {/* Product Logo */}
      <ProductLogo product={product} />
      
      {/* Right side toolbar */}
      <div className="absolute top-0 right-0 h-14 flex items-center gap-4 px-4">
        {/* Search (hidden by default) */}
        <div className="hidden w-40 rounded border border-gray-400 bg-white">
          <div className="flex items-center px-2 py-1 gap-2">
            <img className="w-4 h-4" alt="Search" src="/Trailing.svg" />
            <input 
              type="text" 
              placeholder="Search" 
              className="flex-1 text-sm text-gray-600 bg-transparent border-none outline-none"
            />
          </div>
        </div>

        {/* Budget Display (hidden by default) */}
        <div className="hidden h-8 rounded-lg bg-gray-100 px-2 py-1 max-w-30">
          <div className="text-right">
            <div className="text-xs font-medium text-gray-800">$20,000.00</div>
            <div className="text-xs text-gray-600">Budget Name</div>
          </div>
        </div>

        {/* Notifications */}
        <NotificationBell hasNotifications={true} />
        
        {/* User Profile */}
        <button 
          onClick={handleProfileClick}
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          aria-label="User menu"
        >
          <UserProfile initials="MO" isOnline={true} />
        </button>
      </div>

      {/* User Menu Dropdown */}
      <UserMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
      
      {/* Click outside to close menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={handleMenuClose}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
};

export default GlobalHeader;
