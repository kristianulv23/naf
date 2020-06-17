import React, { useContext, useRef } from "react";
import Checkbox from "./Checkbox";
import { FilterContext } from "../context/FilterContext";
import Input from "./Input";

const FilterPanelSection = ({ title, property = "", data = [], type }) => {
  const filterContext = useContext(FilterContext);
  const min = useRef(null);
  const max = useRef(null);

  if (type === "checkbox") {
    return (
      <section className="mb-8">
        <h1 className="text-sm mb-2 font-medium">{title.toUpperCase()}</h1>
        {data.map((value) => {
          return (
            <Checkbox
              key={value}
              onChange={(e) => filterContext.handleCheckBox(e, property)}
              value={value}
              label={value}
            />
          );
        })}
      </section>
    );
  }

  if (type === "number") {
    return (
      <section className="mb-8">
        <h1 className="text-sm mb-2 font-medium">{title.toUpperCase()}</h1>
        <label>
          <div className="text-xs mt-4">Min</div>
          <Input
            inputRef={min}
            defaultValue={filterContext.filter.price.min}
            onChange={(e) => filterContext.handlePrice(e, min, max)}
          />
        </label>
        <label>
          <div className="text-xs mt-4">Maks</div>
          <Input
            inputRef={max}
            defaultValue={filterContext.filter.price.max}
            onChange={(e) => filterContext.handlePrice(e, min, max)}
          />
        </label>
      </section>
    );
  }

  return null;
};

export default FilterPanelSection;
