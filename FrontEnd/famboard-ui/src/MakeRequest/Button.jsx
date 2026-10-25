import React from 'react';
import './Button.css';

export function Button({ children, type = 'button', size = 'default', className = '', onClick, ...props }) {
  return (
    <button
      type={type}
      className={`request-button request-button--${size} ${className}`.trim()}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
