import React from "react";
import { Link } from "react-router-dom";
import "./SneakerItemNew.css";
import { motion } from "framer-motion";

const SneakerItemNew = ({
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
    <motion.div
      className="sneakerNew"
      initial={{ opacity: 0, x: -100, y: 0, scale: 1 }}
      animate={{
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
    >
      <img src={media} alt="sneak" />
      <div className="sneaker__infoNew">
        <p className="info__nameNew">{name}</p>
        <p className="info__brandNew">Brand: {brand}</p>
        <p className="info__colorNew">{colorway}</p>
        <p className="info__yearNew">Year: {year}</p>

        <p className="info__priceNew">${retailPrice}</p>

        <Link to={`/sneaker/${productId}`} className="info__buttonNew">
          More
        </Link>
      </div>
    </motion.div>
  );
};

export default SneakerItemNew;
