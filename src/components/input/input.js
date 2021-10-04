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
  min,
  max
}) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      required={required}
      className={className}
      onChange={onChange}
      min={min}
      max={max}
      name={name}
      id={id}
      data-testid={`input-${id}`}
    />
  );
}
