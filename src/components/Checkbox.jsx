import React from "react";

const Checkbox = ({ onChange, value, label, name }) => {
  return (
    <label className="checkbox__label">
      <input type="checkbox" onChange={onChange} value={value} name={name}/>
      <span className="checkbox__input"></span>
      <span className="checkbox__text">{label}</span>
    </label>
  );
};

export default Checkbox;
