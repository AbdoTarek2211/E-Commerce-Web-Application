import React from "react";

function CustomInput(props) {
  const { type, name, placeholder, className, value, onChange, onBlur } = props;
  return (
    <div className="mt-1">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${className}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}

export default CustomInput;
