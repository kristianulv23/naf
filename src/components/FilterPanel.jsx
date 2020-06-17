import React, { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import { brands, driveGears, seats } from "../data/utils";
import classNames from "classnames";
import FilterPanelSection from "./FilterPanelSection";
import Button from "./Button";

const styleSheet = {
  aside: (searchTerm) =>
    classNames(
      "fixed",
      "md:static",
      "lg:static",
      "left-0",
      "right-0",
      "bottom-0",
      "overflow-hidden",
      "rounded-tl-lg",
      "rounded-tr-lg",
      "z-30",
      "lg:z-0",
      "transform",
      "lg:transform-none",
      "md:transform-none",
      "transition",
      "ease-in-expo",
      "duration-300",
      searchTerm ? "translate-y-full" : "translate-y-0"
    ),
  filter: {
    root: classNames(
      "px-4",
      "lg:px-0",
      "md:px-0",
      "max-h-half",
      "lg:max-h-full",
      "md:max-h-full",
      "lg:sticky",
      "md:sticky",
      "overflow-y-scroll",
      "bg-gray-100"
    ),
    heading: classNames(
      "lg:hidden",
      "md:hidden",
      "rounded-tl-lg",
      "rounded-tr-lg",
      "text-center",
      "bg-gray-100",
      "z-10",
      "sticky",
      "top-0",
      "left-0",
      "right-0",
      "-mx-4",
      "p-4",
      "w-full"
    ),
  },
};

const FilterPanel = () => {
  const filterContext = useContext(FilterContext);

  return (
    <>
      <aside className={styleSheet.aside(filterContext.searchTerm)}>
        <div className={styleSheet.filter.root}>
          <h1 className={styleSheet.filter.heading}>Filtrer søket</h1>
          <FilterPanelSection
            title="Merke"
            property="brand"
            data={brands}
            type="checkbox"
          />
          <FilterPanelSection
            title="Hjuldrift"
            property="drivegear"
            data={driveGears}
            type="checkbox"
          />
          <FilterPanelSection
            title="Seter (Antall)"
            property="seats"
            data={seats}
            type="checkbox"
          />
          <FilterPanelSection title="Pris" data={seats} type="number" />
          <div className="sticky bottom-0 left-0 right-0 -mx-4 bg-gray-100 p-4 lg:hidden md:hidden w-full">
            <Button
              text={`Vis ${filterContext.getCarData().length} treff`}
              onClick={() =>
                filterContext.updateSearchTerm(!filterContext.searchTerm)
              }
            />
          </div>
        </div>
      </aside>
      <div
        className={`lg:hidden md:hidden ${!filterContext.searchTerm ? "filter-overlay z-20" : ""}`}
        onClick={filterContext.updateSearchTerm}
      ></div>
    </>
  );
};

export default FilterPanel;
