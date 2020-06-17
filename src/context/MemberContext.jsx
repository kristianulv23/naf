import React, { useState } from "react";

export const MemberContext = React.createContext({});

const MemberContextProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState(0);

  const next = (prevState) => {
    if (prevState === 2) {
      return 0;
    }
    return prevState + 1;
  };

  const prev = (prevState) => {
    if (prevState === 0) {
      return 2;
    }
    return prevState - 1;
  };

  const handlePrev = () => {
    setActiveSection((prevState) => prev(prevState));
  };

  const handleNext = () => {
    setActiveSection((prevState) => next(prevState));
  };

  const props = {
    handleNext,
    handlePrev,
    activeSection,
  };

  return (
    <MemberContext.Provider value={props}>{children}</MemberContext.Provider>
  );
};

export default MemberContextProvider;
