import React from "react";

const Button = ({
  children,
  type = "button",
  bgcolor = "bg-blue-600",
  textcolor = "text-white",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-2 py-2 rounded-lg ${className} ${bgcolor} ${textcolor} `}
      {...props}
      type={`${type}`}
    >
      {children}
    </button>
  );
};

export default Button;
