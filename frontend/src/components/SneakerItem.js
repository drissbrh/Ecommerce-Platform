import React from "react";
import { Link } from "react-router-dom";
import "./SneakerItem.css";

const SneakerItem = ({
  productId,
  brand,
  colorway,
  gender,
  name,
  releaseDate,
  retailPrice,
  shoe,
  title,
  year,
  media,
}) => {
  return (
    <div className="sneaker">
      <img src={media} alt="sneak" />
      <div className="sneaker__info">
        <p className="info__name">{name}</p>
        <p className="info__brand">Brand: {brand}</p>
        <p className="info__color">{colorway}</p>
        <p className="info__year">Year: {year}</p>

        <p className="info__price">${retailPrice}</p>

        <Link to={`/sneaker/${productId}`} className="info__button">
          More
        </Link>
      </div>
    </div>
  );
};

export default SneakerItem;
