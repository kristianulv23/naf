import mockData from "./carData.json";

const getValuesByProperty = (property) => {
  const propertyValues = mockData.cars.map((cars) => cars[property]);
  return propertyValues.filter(
    (value, i) => propertyValues.indexOf(value) === i
  );
};

export const brands = getValuesByProperty("brand");
export const driveGears = getValuesByProperty("drivegear");
export const seats = getValuesByProperty("seats");
