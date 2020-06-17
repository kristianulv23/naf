import React from "react";
import classNames from "classnames";

const styleClass = {
  root: (extendedClassNames) =>
    classNames("max-w-screen-xl mx-auto", extendedClassNames),
};

const Container = ({ children, extendedClassNames }) => {
  return <div className={styleClass.root(extendedClassNames)}>{children}</div>;
};

export default Container;
