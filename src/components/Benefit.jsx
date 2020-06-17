import React from "react";
import classNames from "classnames";
import List from "./List";

const styleSheet = {
  benefit: classNames(),
};

const Benefit = ({ benefits }) => {
  return (
    <div className="section">
      <div className="h-full w-full lg:w-1/2 md:w-1/2 p-4">
        <h1 className="p-4 pt-0 text-center">DINE FORDELER</h1>
        <List>
          {benefits.map((benefit) => {
            return (
              <li key={benefit.id} className="flex items-center my-4">
                <div className="relative w-8 h-8 border-t-4 border-b-4 border-l-4 border-r-4 border-yellow-200 mr-4">
                  <div className="absolute right-0 top-3 transform rotate-45 w-4 h-6 border-b-8 border-r-8 border-green-600"></div>
                </div>
                <p>{benefit.name}</p>
              </li>
            );
          })}
        </List>
      </div>
    </div>
  );
};

export default Benefit;
