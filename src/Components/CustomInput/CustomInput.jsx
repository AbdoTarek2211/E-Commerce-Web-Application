import React from "react";

function CustomInput(props) {
  const { type, name, placeholder, className } = props;
  return (
    <div className="mt-2">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${className}`}
      />
    </div>
  );
}

export default CustomInput;
