import React from "react";

const Button = ({ content, onClick, style }) => {
  return (
    <button
      className={
        `px-4 py-2 rounded-md hover:scale-105 duration-200 text-sm` +
        " " +
        style
      }
    >
      {content}
    </button>
  );
};

export default Button;
