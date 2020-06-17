import React from "react";
import classNames from "classnames";

const styleClass = {
  root: (extendedClassNames) => classNames("list-reset", extendedClassNames),
};

const List = ({ children, extendedClassNames }) => {
  return <ul className={styleClass.root(extendedClassNames)}>{children}</ul>;
};

export default List;
