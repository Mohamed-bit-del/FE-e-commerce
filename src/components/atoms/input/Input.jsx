import React from 'react';
import clsx from 'clsx';

function Input({ type, name, onChange, onClick, placeholder, className = '' }) {
  const baseStyles = 'border border-gray-300 rounded-xl px-4 py-2 outline-none';

  return (
    <input
      type={type}
      name={name}
      onClick={onClick}
      onChange={onChange}
      placeholder={placeholder}
      className={clsx(baseStyles, className)}
    />
  );
}

export default Input;
