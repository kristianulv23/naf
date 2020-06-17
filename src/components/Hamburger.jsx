import React from "react";

const Hamburger = ({ handleToggleMenu }) => {
  return (
    <div
      className="relative flex flex-col justify-around w-6 h-6 md:hidden lg:hidden"
      onClick={handleToggleMenu}
    >
      <span className="inline-block h-1 w-full bg-black"></span>
      <span className="inline-block h-1 w-full bg-black"></span>
      <span className="inline-block h-1 w-full bg-black"></span>
    </div>
  );
};

export default Hamburger;
