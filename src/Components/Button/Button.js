import React from "react";

const Button = ({ content, onClick, style }) => {
  return (
    <button
      className={
        `px-6 py-3 rounded-lg hover:scale-105 duration-200` + " " + style
      }
      onClick={() => {
        onClick;
      }}
    >
      {content}
    </button>
  );
};

export default Button;
