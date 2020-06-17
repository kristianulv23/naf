import React from "react";
import classNames from "classnames";

const styleSheet = {
  button: (extendedClassNames) =>
    classNames(
      "w-full",
      "p-4",
      "border-t-4",
      "border-b-4",
      "border-l-4",
      "border-r-4",
      "border-yellow-200",
      "focus:outline-none",
      "focus:shadow-outline",
      "transform",
      "transition",
      "ease-in-expo",
      "duration-300",
      "hover:bg-yellow-200",
      extendedClassNames
    ),
};

const Button = ({ text, extendedClassNames, onClick }) => {
  return (
    <button className={styleSheet.button(extendedClassNames)} onClick={onClick}>
      {text.toUpperCase()}
    </button>
  );
};

export default Button;
