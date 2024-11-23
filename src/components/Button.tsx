import React from 'react';

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, variant = 'primary', className = '' }) => {
  const baseStyles =
    'px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 hover:shadow-lg';
  const variantStyles =
    variant === 'primary'
      ? 'bg-black text-white hover:bg-gray-800'
      : 'bg-white text-black border-2 border-gray-200 hover:border-gray-300';

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`}>
      {text}
    </button>
  );
};

export default Button;
