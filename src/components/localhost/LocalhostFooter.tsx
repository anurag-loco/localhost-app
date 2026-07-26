import { FunctionComponent } from 'react';

export type LocalhostFooterProps = {
  className?: string;
};

/**
 * Footer component for Localhost application
 * Includes support links, hosting information, and company details
 */
const LocalhostFooter: FunctionComponent<LocalhostFooterProps> = ({
  className = ""
}) => {
  const footerSections = [
    {
      title: 'Support',
      links: [
        'Help Centre',
        'AirCover',
        'Combating discrimination',
        'Supporting people with disabilities',
        'Cancellation options'
      ]
    },
    {
      title: 'Hosting',
      links: [
        'Local home',
        'Cover for hosts',
        'Hosting resources',
        'Community forum',
        'Hosting responsibly'
      ]
    },
    {
      title: 'Localhost',
      links: [
        'Newsroom',
        'New Features',
        'Careers',
        'Investors',
        'Gift cards'
      ]
    }
  ];

  const legalLinks = [
    'Privacy Policy',
    'Terms & Conditions',
    'Contact us'
  ];

  return (
    <footer 
      className={`w-full flex items-end ${className}`}
      role="contentinfo"
    >
      <div className="flex-1 flex flex-col items-start pt-0 px-0 pb-10 min-h-82">
        {/* Main Footer Content */}
        <div className="w-full bg-light-bg border-t border-light-grey-border flex flex-col items-start pt-10 px-20 pb-10 gap-5">
          {/* Section Titles */}
          <div className="w-full flex items-start flex-wrap gap-2.5 text-xl text-dark font-archivo">
            {footerSections.map((section, index) => (
              <h3 
                key={index}
                className="flex-1 font-semibold min-w-18"
              >
                {section.title}
              </h3>
            ))}
          </div>

          {/* Section Links */}
          {[0, 1, 2, 3, 4].map((rowIndex) => (
            <div 
              key={rowIndex}
              className="w-full flex items-start flex-wrap gap-2.5 text-base text-dark font-archivo"
            >
              {footerSections.map((section, sectionIndex) => (
                <div 
                  key={sectionIndex}
                  className="flex-1 min-w-16"
                >
                  {section.links[rowIndex] && (
                    <button
                      className="text-left hover:text-accent transition-colors duration-200 focus:outline-none focus:text-accent"
                      onClick={() => {
                        // Handle link click
                        console.log(`Clicked: ${section.links[rowIndex]}`);
                      }}
                    >
                      {section.links[rowIndex]}
                    </button>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="h-10 flex-1 border-t border-light-grey-border flex items-center justify-between flex-wrap pt-2.5 px-20 pb-3 gap-5 relative z-10 -ml-full text-sm text-black font-archivo">
          {/* Copyright */}
          <div className="leading-tight font-light">
            © 2023 Localhost, Inc. All Rights Reserved
          </div>
          
          {/* Legal Links */}
          <div className="flex items-center gap-5">
            {legalLinks.map((link, index) => (
              <button
                key={index}
                className="leading-tight font-light hover:text-accent transition-colors duration-200 focus:outline-none focus:text-accent"
                onClick={() => {
                  // Handle legal link click
                  console.log(`Clicked: ${link}`);
                }}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LocalhostFooter;
