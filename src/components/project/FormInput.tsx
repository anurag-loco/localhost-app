import { FunctionComponent, useState } from 'react';

export type FormInputProps = {
  className?: string;
  label: string;
  placeholder: string;
  required?: boolean;
  type?: 'text' | 'select';
  options?: string[];
  value: string;
  onChange: (value: string) => void;
  helpText?: string;
  showHelpIcon?: boolean;
  disabled?: boolean;
};

/**
 * Reusable form input component with label, validation, and help text
 * Supports both text inputs and select dropdowns
 */
const FormInput: FunctionComponent<FormInputProps> = ({
  className = "",
  label,
  placeholder,
  required = false,
  type = 'text',
  options = [],
  value,
  onChange,
  helpText,
  showHelpIcon = false,
  disabled = false
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {/* Label with required indicator and help icon */}
      <div className="flex items-center gap-1">
        <div className="flex items-center">
          <label className="text-sm text-gray-700 font-medium">
            {label}
          </label>
          {required && (
            <span className="text-red-500 ml-1" aria-label="Required field">*</span>
          )}
        </div>
        
        {showHelpIcon && (
          <button
            type="button"
            className="relative"
            onMouseEnter={() => setShowHelp(true)}
            onMouseLeave={() => setShowHelp(false)}
            aria-label={`Help for ${label}`}
          >
            <img 
              className="w-3 h-3" 
              alt="Help" 
              src="/info-circle.svg"
            />
            {showHelp && helpText && (
              <div className="absolute bottom-full left-0 mb-1 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-10">
                {helpText}
              </div>
            )}
          </button>
        )}
      </div>

      {/* Input field */}
      <div className="relative">
        {type === 'select' ? (
          <select
            value={value}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            required={required}
            className={`
              w-full px-3 py-2 rounded-md border bg-white
              font-helvetica-neue text-base text-gray-700
              placeholder-gray-500 transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed
              ${isFocused ? 'border-blue-500' : 'border-gray-300'}
              ${disabled ? 'border-gray-200' : ''}
            `}
            aria-describedby={helpText ? `${label}-help` : undefined}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            value={value}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            className={`
              w-full px-3 py-2 rounded-md border bg-white
              font-helvetica-neue text-base text-gray-700
              placeholder-gray-500 transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed
              ${isFocused ? 'border-blue-500' : 'border-gray-300'}
              ${disabled ? 'border-gray-200' : ''}
            `}
            aria-describedby={helpText ? `${label}-help` : undefined}
          />
        )}

        {/* Dropdown arrow for select */}
        {type === 'select' && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <img 
              className="w-5 h-5 text-gray-400" 
              alt="Dropdown" 
              src="/Rating.svg"
            />
          </div>
        )}
      </div>

      {/* Help text */}
      {helpText && !showHelpIcon && (
        <div 
          id={`${label}-help`}
          className="text-xs text-gray-500"
        >
          {helpText}
        </div>
      )}
    </div>
  );
};

export default FormInput;
