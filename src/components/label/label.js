import React from 'react';

export function Label({ labelInfo, children, htmlFor }) {
  return (
    <label className={labelInfo} htmlFor={htmlFor}>
      {children}
    </label>
  );
}
