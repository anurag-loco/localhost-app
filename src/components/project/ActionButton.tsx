import { FunctionComponent } from 'react';

export type ActionButtonProps = {
  className?: string;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

/**
 * Reusable action button component with multiple variants and states
 * Supports icons, loading states, and accessibility features
 */
const ActionButton: FunctionComponent<ActionButtonProps> = ({
  className = "",
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  children,
  onClick,
  type = 'button'
}) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed";
  
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-base"
  };

  const variantClasses = {
    primary: disabled || loading
      ? "bg-blue-300 text-white cursor-not-allowed"
      : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 active:bg-blue-800",
    secondary: disabled || loading
      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
      : "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500 active:bg-gray-700",
    danger: disabled || loading
      ? "bg-red-300 text-white cursor-not-allowed"
      : "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 active:bg-red-800"
  };

  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if ((event.key === 'Enter' || event.key === ' ') && !disabled && !loading) {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      type={type}
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      disabled={disabled || loading}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-disabled={disabled || loading}
    >
      {/* Left Icon */}
      {leftIcon && !loading && (
        <img 
          className="w-5 h-5" 
          alt="" 
          src={leftIcon}
        />
      )}

      {/* Loading Spinner */}
      {loading && (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
      )}

      {/* Button Text */}
      <span className="font-helvetica-neue">
        {children}
      </span>

      {/* Right Icon */}
      {rightIcon && !loading && (
        <img 
          className="w-5 h-5" 
          alt="" 
          src={rightIcon}
        />
      )}
    </button>
  );
};

export default ActionButton;
