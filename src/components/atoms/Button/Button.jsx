import React from 'react';
import propTypes from 'prop-types';
import clsx from 'clsx';

function Button({
  children,
  onClick,
  disabled,
  size = 'sm',
  type = 'button',
  variant = 'primary',
  className = '',
}) {
  const baseStyles =
    'rounded-xl font-Roboto font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
  };

  const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  children: propTypes.node.isRequired,
  onClick: propTypes.func,
  disabled: propTypes.bool,
  size: propTypes.oneOf(['sm', 'md', 'lg']),
  type: propTypes.string,
  variant: propTypes.oneOf(['primary', 'secondary', 'danger']),
  className: propTypes.string,
};
