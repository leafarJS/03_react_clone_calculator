import React from "react";
import "./Button.css";

const Button = (props) => {
  const isOperator = (value) => {
    return isNaN(value) && value !== "." && value !== "=";
  };
  return (
    <div
      className={`btn-container ${
        isOperator(props.children) ? "operator" : ""
      }`.trimEnd()}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Button;
