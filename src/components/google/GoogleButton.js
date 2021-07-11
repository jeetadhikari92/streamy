import React from "react";

const GoogleButton = ({ onClick, label }) => {
  return (
    <button onClick={() => onClick()} className="ui red google button">
      <i className="google icon" />
      {label}
    </button>
  );
};

export default GoogleButton;
