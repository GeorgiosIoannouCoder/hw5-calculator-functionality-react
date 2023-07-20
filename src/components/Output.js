import React from "react";

const Output = ({ children, value }) => {
  return (
    <div className="calculator">
      <div className="output">
        <div className="deg-rad" data-deg>
          Rad
        </div>
        <div className="current">{value}</div>
      </div>
      {children}
    </div>
  );
};

export default Output;
