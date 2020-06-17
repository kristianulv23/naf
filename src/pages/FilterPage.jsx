import React from "react";
import FilterPanel from "../components/FilterPanel";
import FilterContent from "../components/FilterContent";

const FilterPage = () => {
  return (
    <section className="min-h-screen p-4 pt-32 -mt-28 lg:mt-0 md:mt-0">
      <div className="grid grid-cols-3 gap-20">
        <FilterPanel />
        <FilterContent />
      </div>
    </section>
  );
};

export default FilterPage;
