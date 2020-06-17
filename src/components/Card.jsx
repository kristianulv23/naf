import React from "react";
import classNames from "classnames";

const styleSheet = {
  card: classNames("relative", "cursor-pointer"),
  image: classNames(
    "w-full",
    "h-48",
    "object-contain",
    "transform",
    "hover:scale-110",
    "transition",
    "ease-in-expo",
    "duration-200"
  ),
  brand: classNames("my-6"),
  price: classNames(
    "text-2xl",
    "absolute",
    "top-0",
    "left-0",
    "bg-blue-200",
    "p-2",
    "opacity-75",
    "font-medium"
  ),
};

const Card = ({ image, brand, price, drivegear, seats }) => {
  return (
    <div className={styleSheet.card}>
      <img src={image} alt="car" className={styleSheet.image} />
      <h1 className={styleSheet.price}>{price} kr</h1>
      <div>
        <p className={styleSheet.brand}><span className="bg-yellow-300 p-2 mr-2">MERKE:</span> {brand}</p>
        <p className={styleSheet.brand}><span className="bg-yellow-300 p-2 mr-2">SETER:</span> {seats}</p>
        <p className={styleSheet.brand}><span className="bg-yellow-300 p-2 mr-2">DRIVHJUL:</span> {drivegear}</p>
      </div>
    </div>
  );
};

export default Card;
