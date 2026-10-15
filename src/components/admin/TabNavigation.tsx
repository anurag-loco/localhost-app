import { FunctionComponent } from 'react';

export type TabItem = {
  id: string;
  label: string;
  isSelected: boolean;
  isEnabled: boolean;
  counter?: number;
};

export type TabNavigationProps = {
  className?: string;
  tabs: TabItem[];
  onTabChange: (tabId: string) => void;
};

/**
 * Tab navigation component for switching between different admin sections
 * Supports active states, counters, and keyboard navigation
 */
const TabNavigation: FunctionComponent<TabNavigationProps> = ({
  className = "",
  tabs,
  onTabChange
}) => {
  const handleTabClick = (tabId: string, isEnabled: boolean) => {
    if (isEnabled) {
      onTabChange(tabId);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, tabId: string, isEnabled: boolean) => {
    if ((event.key === 'Enter' || event.key === ' ') && isEnabled) {
      event.preventDefault();
      onTabChange(tabId);
    }
  };

  return (
    <div 
      className={`flex items-center gap-2 py-1.5 px-0 ${className}`}
      role="tablist"
      aria-label="Admin settings navigation"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={tab.isSelected}
          aria-disabled={!tab.isEnabled}
          tabIndex={tab.isEnabled ? 0 : -1}
          className={`
            h-9 rounded-lg px-4 py-0 flex items-center justify-center gap-2 
            text-sm font-semibold tracking-tight transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            ${tab.isSelected 
              ? 'bg-blue-100 text-blue-800' 
              : 'text-gray-700 hover:bg-gray-50'
            }
            ${!tab.isEnabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          `}
          onClick={() => handleTabClick(tab.id, tab.isEnabled)}
          onKeyDown={(e) => handleKeyDown(e, tab.id, tab.isEnabled)}
        >
          <span>{tab.label}</span>
          
          {/* Counter badge */}
          {tab.counter && tab.counter > 0 && (
            <div 
              className={`
                h-4 px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide
                flex items-center justify-center min-w-4
                ${tab.isSelected 
                  ? 'bg-blue-700 text-white' 
                  : 'bg-gray-300 text-gray-800'
                }
              `}
              aria-label={`${tab.counter} items`}
            >
              {tab.counter}
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
