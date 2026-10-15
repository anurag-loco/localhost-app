import { FunctionComponent } from 'react';

export type LocalhostLogoProps = {
  className?: string;
};

/**
 * Localhost brand logo component
 * Displays the company logo with proper branding elements
 */
const LocalhostLogo: FunctionComponent<LocalhostLogoProps> = ({ 
  className = "" 
}) => {
  return (
    <div className={`h-10 w-40 relative ${className}`}>
      {/* Host text */}
      <img 
        className="absolute h-4/5 w-1/2 top-[8%] right-0 bottom-[12%] left-1/2 max-w-full max-h-full" 
        loading="lazy" 
        alt="host" 
        src="/host.svg" 
      />
      
      {/* Loc text */}
      <button 
        className="cursor-pointer border-none p-0 bg-transparent absolute h-4/5 w-[31%] top-[10%] right-[69%] bottom-[13%] left-0 max-w-full max-h-full"
        aria-label="Localhost home"
      >
        <img 
          className="w-full h-full" 
          alt="localhost" 
          src="/loc.svg" 
        />
      </button>
      
      {/* Accent dot */}
      <div className="absolute h-[15%] w-[4%] top-[19%] right-[59%] bottom-[66%] left-[37%] rounded-full bg-accent" />
      
      {/* Vertical line */}
      <img 
        className="absolute h-4/5 w-[4%] top-[8%] right-[50%] bottom-[14%] left-[46%] rounded max-w-full max-h-full" 
        alt="separator" 
        src="/l.svg" 
      />
      
      {/* Vector element */}
      <button 
        className="cursor-pointer border-none p-0 bg-transparent absolute h-full w-[15%] top-0 right-[54%] bottom-0 left-[31%] max-w-full max-h-full object-contain z-10"
        aria-label="Navigate to homepage"
      >
        <img 
          className="w-full h-full object-contain" 
          alt="logo element" 
          src="/Vector.svg" 
        />
      </button>
    </div>
  );
};

export default LocalhostLogo;
