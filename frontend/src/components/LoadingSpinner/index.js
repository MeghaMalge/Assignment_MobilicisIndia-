import React from "react";

import "./LoadingSpinner.css";

const LoadingSpinner = (props) => {
  return (
    <div className={`${props.asOverlay && "loading-spinner-overlay"}`}>
      <div className="dual-ring"></div>
    </div>
  );
};

export default LoadingSpinner;
