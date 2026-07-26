import { FunctionComponent } from 'react';

// Checkbox component
export type CheckboxProps = {
  className?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
};

export const Checkbox: FunctionComponent<CheckboxProps> = ({
  className = "",
  checked,
  onChange,
  label,
  disabled = false
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange(event.target.checked);
    }
  };

  return (
    <label className={`flex items-center gap-1.5 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className="w-5 h-5 rounded border-2 border-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed"
          aria-describedby={label ? undefined : "checkbox-description"}
        />
      </div>
      {label && (
        <span className="text-sm font-semibold text-gray-900 tracking-tight">
          {label}
        </span>
      )}
    </label>
  );
};

// Radio button component
export type RadioButtonProps = {
  className?: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  label?: string;
  disabled?: boolean;
};

export const RadioButton: FunctionComponent<RadioButtonProps> = ({
  className = "",
  name,
  value,
  checked,
  onChange,
  label,
  disabled = false
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && event.target.checked) {
      onChange(value);
    }
  };

  return (
    <label className={`flex items-center gap-2 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
      <div className="relative">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className="w-5 h-5 rounded-full border-2 border-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed"
        />
      </div>
      {label && (
        <span className="text-xs text-gray-900">
          {label}
        </span>
      )}
    </label>
  );
};

// Radio group component for better organization
export type RadioGroupProps = {
  className?: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{
    value: string;
    label: string;
    disabled?: boolean;
  }>;
  disabled?: boolean;
};

export const RadioGroup: FunctionComponent<RadioGroupProps> = ({
  className = "",
  name,
  value,
  onChange,
  options,
  disabled = false
}) => {
  return (
    <div 
      className={`rounded-lg py-0 px-4 flex flex-col ${className}`}
      role="radiogroup"
      aria-label={`${name} options`}
    >
      {options.map((option) => (
        <div key={option.value} className="rounded py-1.5 px-2 flex items-center gap-2">
          <RadioButton
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
            label={option.label}
            disabled={disabled || option.disabled}
          />
        </div>
      ))}
    </div>
  );
};

// Form section component for organizing related controls
export type FormSectionProps = {
  className?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  hasBorder?: boolean;
};

export const FormSection: FunctionComponent<FormSectionProps> = ({
  className = "",
  title,
  description,
  children,
  hasBorder = true
}) => {
  return (
    <section 
      className={`
        flex flex-col gap-2 pt-0 px-0 pb-3.5
        ${hasBorder ? 'border-b border-gray-300' : ''}
        ${className}
      `}
    >
      <div className="flex-1 overflow-hidden flex flex-col gap-2">
        {/* Section Header */}
        <div className="flex items-center gap-1.5">
          <h3 className="text-sm font-semibold text-gray-900 tracking-tight">
            {title}
          </h3>
        </div>
        
        {/* Section Description */}
        {description && (
          <p className="text-xs text-gray-600 leading-4">
            {description}
          </p>
        )}
        
        {/* Section Content */}
        <div className="flex flex-col gap-2">
          {children}
        </div>
      </div>
    </section>
  );
};
