import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({
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
    <div className="product">
      <img src={media} alt="sneak" />
      <div className="product__info">
        <p className="info__name">{name}</p>
        <p className="info__brand">Brand: {brand}</p>
        <p className="info__color">{colorway}</p>
        <p className="info__year">Year: {year}</p>

        <p className="info__price">${retailPrice}</p>

        <Link to={`/product/${productId}`} className="info__button">
          More
        </Link>
      </div>
    </div>
  );
};

export default Product;
