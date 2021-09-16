import React from "react";

export function Input ({
    inputType,
    inputValue,
    inputPlaceholder,
    inputRequired,
    inputClass,
    inputOnChange,
    inputName,
    id
}) {
    return (
        <input 
            type={inputType}
            value={inputValue}
            placeholder={inputPlaceholder}
            required={inputRequired}
            className={inputClass}
            onChange={inputOnChange}
            name={inputName}
            id={id}
            data-testid={`input-${id}`} />
    )
    
}