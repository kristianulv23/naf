import React from "react";
import classNames from "classnames";

const styleSheet = {
  input: classNames(
    "border-t-0",
    "border-l-0",
    "border-r-0",
    "border-4",
    "bg-gray-100",
    "border-yellow-200",
    "w-full",
    "py-2",
    "outline-none"
  ),
};

const Input = ({ inputRef, defaultValue, onChange }) => {
  return (
    <input
      type="number"
      className={styleSheet.input}
      ref={inputRef}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};

export default Input;
