import React from "react";

export default function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={
        `px-4 py-2 border rounded-md hover:scale-105 duration-200 text-sm font-semibold hover:shadow-sm hover:shadow-white uppercase dark:text-white z-1 ` +
        " " +
        className
      }
    >
      {children}
    </button>
  );
}
