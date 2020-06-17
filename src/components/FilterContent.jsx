import React, { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import Card from "./Card";
import Button from "./Button";

const FilterContent = () => {
  const filterContext = useContext(FilterContext);
  return (
    <div className="col-span-3 md:col-span-2 lg:col-span-2">
      <div className="md:hidden lg:hidden my-4">
        <Button
          text="Endre søk"
          onClick={() =>
            filterContext.updateSearchTerm(!filterContext.searchTerm)
          }
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filterContext.getCarData().map((car) => {
          return <Card key={car.id} {...car} />;
        })}
      </div>
    </div>
  );
};

export default FilterContent;
