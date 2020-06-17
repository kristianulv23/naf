import React, { useState } from "react";
import carData from "../data/carData.json";

export const FilterContext = React.createContext({});

const FilterContextProvider = ({ children }) => {
  const [filter, setFilter] = useState({
    brand: [],
    price: {
      min: 0,
      max: 1050000,
    },
    drivegear: [],
    seats: []
  });
  const [searchTerm, setSearchTerm] = useState(true);

  const handleCheckBox = (e, property) => {
    e.persist();
    if (!e.target.checked) {
      setFilter((prevState) => ({
        ...prevState,
        [property]: filter[property].filter((brand) => brand !== e.target.value),
      }));
      return;
    }

    setFilter((prevState) => ({
      ...prevState,
      [property]: [...prevState[property], e.target.value],
    }));
  };

  const handlePrice = (e, min, max) => {
    e.persist();
    setFilter((prevState) => ({
      ...prevState,
      price: {
        min: Number(min.current.value),
        max: Number(max.current.value),
      },
    }));
  };

  const getCarData = () => {
    let filteredCars = carData.cars.filter(
      (car) => car.price >= filter.price.min && car.price <= filter.price.max
    );

    if (filter.brand.length > 0) {
      filteredCars = filteredCars.filter((car) =>
        filter.brand.includes(car.brand)
      );
    }

    if (filter.drivegear.length > 0) {
      filteredCars = filteredCars.filter((car) =>
        filter.drivegear.includes(car.drivegear)
      );
    }

    if (filter.seats.length > 0) {
      filteredCars = filteredCars.filter((car) =>
        filter.seats.includes(car.seats)
      );
    }
    return filteredCars;
  };

  const updateSearchTerm = () => {
    setSearchTerm(!searchTerm);
  }

  const props = {
    filter,
    searchTerm,
    handleCheckBox,
    handlePrice,
    getCarData,
    updateSearchTerm
  };

  return (
    <FilterContext.Provider value={props}>{children}</FilterContext.Provider>
  );
};

export default FilterContextProvider;
