import React from 'react';

export function Button({ children, type, value, className, onClick, id }) {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      value={value}
      id={id}
    >
      {children}
    </button>
  );
}
