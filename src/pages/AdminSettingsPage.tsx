import React, { useState } from 'react';
import GlobalNavCollapsed from '../components/admin/GlobalNavCollapsed';
import GlobalHeader from '../components/admin/GlobalHeader';
import TabNavigation, { TabItem } from '../components/admin/TabNavigation';
import { Checkbox, RadioGroup, FormSection } from '../components/admin/FormControls';

/**
 * Admin Settings Page - RFQ Configuration
 * 
 * This page allows administrators to configure RFQ (Request for Quote) settings
 * including shipping options, TI/HI information requirements, and country of origin settings.
 */
const AdminSettingsPage: React.FC = () => {
  // Tab navigation state
  const [activeTab, setActiveTab] = useState('shipping-options');
  
  // Form state for shipping options
  const [includeThiInfo, setIncludeThiInfo] = useState(true);
  const [thiInfoRequirement, setThiInfoRequirement] = useState('optional');
  
  const [includeShipFrom, setIncludeShipFrom] = useState(true);
  const [shipFromRequirement, setShipFromRequirement] = useState('required');
  
  const [includeCountryOrigin, setIncludeCountryOrigin] = useState(false);
  const [countryOriginRequirement, setCountryOriginRequirement] = useState('optional');

  // Tab configuration
  const tabs: TabItem[] = [
    {
      id: 'rfq-defaults',
      label: 'RFQ Settings Defaults',
      isSelected: activeTab === 'rfq-defaults',
      isEnabled: true
    },
    {
      id: 'shipping-options',
      label: 'Shipping Options',
      isSelected: activeTab === 'shipping-options',
      isEnabled: true
    },
    {
      id: 'email-templates',
      label: 'Email Templates',
      isSelected: activeTab === 'email-templates',
      isEnabled: true
    }
  ];

  // Radio button options
  const requirementOptions = [
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' }
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const renderShippingOptionsContent = () => (
    <div className="flex flex-col gap-6">
      {/* Page Description */}
      <div className="flex flex-col gap-2">
        <h2 className="text-base font-semibold text-gray-900 tracking-tight">
          Shipping Options
        </h2>
        <p className="text-xs text-gray-600 leading-4">
          Make it easier for users to calculate shipping costs by enabling these settings in supplier responses.
        </p>
      </div>

      {/* TI/HI Information Section */}
      <FormSection
        title="Include TI/HI Information"
        hasBorder={true}
      >
        <Checkbox
          checked={includeThiInfo}
          onChange={setIncludeThiInfo}
          label="Include TI/HI Information"
        />
        
        {includeThiInfo && (
          <RadioGroup
            name="thi-requirement"
            value={thiInfoRequirement}
            onChange={setThiInfoRequirement}
            options={requirementOptions}
          />
        )}
      </FormSection>

      {/* Ship-From Location Section */}
      <FormSection
        title="Include Ship-From Location"
        hasBorder={true}
      >
        <Checkbox
          checked={includeShipFrom}
          onChange={setIncludeShipFrom}
          label="Include Ship-From Location"
        />
        
        {includeShipFrom && (
          <RadioGroup
            name="ship-from-requirement"
            value={shipFromRequirement}
            onChange={setShipFromRequirement}
            options={requirementOptions}
          />
        )}
      </FormSection>

      {/* Country of Origin Section */}
      <FormSection
        title="Include Country of Origin (CO)"
        hasBorder={false}
      >
        <Checkbox
          checked={includeCountryOrigin}
          onChange={setIncludeCountryOrigin}
          label="Include Country of Origin (CO)"
        />
        
        {includeCountryOrigin && (
          <RadioGroup
            name="country-origin-requirement"
            value={countryOriginRequirement}
            onChange={setCountryOriginRequirement}
            options={requirementOptions}
          />
        )}
      </FormSection>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'rfq-defaults':
        return (
          <div className="p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">RFQ Settings Defaults</h2>
            <p className="text-gray-600">Configure default settings for RFQ requests.</p>
          </div>
        );
      
      case 'shipping-options':
        return renderShippingOptionsContent();
      
      case 'email-templates':
        return (
          <div className="p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Email Templates</h2>
            <p className="text-gray-600">Manage email templates for RFQ communications.</p>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-screen bg-white flex" role="main">
      {/* Sidebar Navigation */}
      <GlobalNavCollapsed 
        product="OMS" 
        state="Enabled" 
        bkgrd="Light" 
        icon="Finance" 
      />
      
      {/* Main Content Area */}
      <main className="flex-1 border-l border-gray-300 overflow-hidden flex flex-col">
        {/* Global Header */}
        <GlobalHeader product="OMS" showMenu={false} />
        
        {/* Page Header */}
        <section className="bg-white border-b border-gray-300 py-2 px-4">
          <div className="flex-1 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* Navigation Buttons (hidden by default) */}
              <div className="hidden items-center gap-4">
                <button 
                  className="w-5 h-5 rounded bg-transparent hover:bg-gray-100 p-1 transition-colors"
                  aria-label="Go back"
                >
                  <img className="w-4 h-4" alt="" src="/ArrowLeft.svg" />
                </button>
              </div>
              
              {/* Page Title */}
              <div className="flex flex-col justify-center">
                <h1 className="text-xl font-semibold text-gray-900 tracking-tight">
                  RFQ Admin Settings
                </h1>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button 
                className="px-4 py-1.5 rounded-md bg-gray-300 text-gray-500 text-xs font-semibold uppercase tracking-wide hover:bg-gray-400 transition-colors disabled:opacity-50"
                disabled
              >
                Save
              </button>
            </div>
          </div>
        </section>
        
        {/* Content Area */}
        <section className="flex-1 flex flex-col p-4">
          <div className="h-full flex flex-col">
            {/* Tab Navigation */}
            <TabNavigation
              tabs={tabs}
              onTabChange={handleTabChange}
              className="py-1.5 px-0 gap-2"
            />
            
            {/* Tab Content */}
            <div className="flex-1 rounded-lg border border-gray-300 overflow-y-auto">
              <div className="p-8">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminSettingsPage;
