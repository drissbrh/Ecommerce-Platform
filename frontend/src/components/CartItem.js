import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CartItem.css";

const CartItem = (props) => {
  const { product, name, image, price, removeHandler, quantityHandler, qty } =
    props;

  return (
    <motion.div
      className="cartitem"
      initial={{ opacity: 0, x: 0, y: 100, scale: 1 }}
      animate={{
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="cartitem__image">
        <img src={image} alt={name} />
      </div>
      <Link to={`/sneaker/${product}`} className="cartitem__name">
        <p>{name}</p>
      </Link>

      <p className="cartitem__price">${price}</p>
      <select
        value={qty}
        className="cartitem__select"
        onChange={(e) => quantityHandler(product, e.target.value)}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
      </select>
      <button className="cartitem__deleteBtn" onClick={removeHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </motion.div>
  );
};

export default CartItem;
