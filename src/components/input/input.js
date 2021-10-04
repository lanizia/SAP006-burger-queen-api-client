import React from 'react';

export function Input({
  type,
  value,
  placeholder,
  required,
  className,
  onChange,
  name,
  id,
}) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      required={required}
      className={className}
      onChange={onChange}
      name={name}
      id={id}
      data-testid={`input-${id}`}
    />
  );
}
