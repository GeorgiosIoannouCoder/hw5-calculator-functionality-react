import React from "react";

const Button = ({ onClick, className, value }) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
