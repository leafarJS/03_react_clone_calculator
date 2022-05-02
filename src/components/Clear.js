import React from "react";
import "./Clear.css";
const Clear = (props) => {
  return (
    <div className="clear" onClick={() => props.handleClear()}>
      {props.children}
    </div>
  );
};

export default Clear;
