import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = ''
}: ButtonProps) => {
  const baseStyles = "rounded-full border border-solid transition-colors flex items-center justify-center font-medium";

  const variantStyles = {
    primary: "bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] border-transparent",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 border-transparent",
    outline: "bg-transparent border-gray-300 hover:bg-gray-50 text-gray-800"
  };

  const sizeStyles = {
    sm: "text-sm h-8 px-3",
    md: "text-base h-10 px-4",
    lg: "text-base h-12 px-5"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
