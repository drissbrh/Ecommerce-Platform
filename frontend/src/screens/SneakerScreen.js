import React, { useState, useEffect } from "react";
import "./SneakerScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

//Actions
import { addToCart } from "../redux/actions/cartActions";
import { getSneakerDetails } from "../redux/actions/sneakerActions";

const SneakerScreen = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const sneakerDetails = useSelector((state) => state.sneakerDetails);
  const { sneaker, loading, error } = sneakerDetails;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(sneaker._id, qty));
    navigate(`/cart`);
  };
  useEffect(() => {
    if (sneaker && id !== sneaker._id) {
      dispatch(getSneakerDetails(id));
    }
  }, [dispatch, sneaker, id]);

  return (
    <div className="productscreen">
      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__inside">
            <motion.div
              className="left__image"
              initial={{ opacity: 0, x: -100, y: 0, scale: 1 }}
              animate={{
                x: 0,
                y: 0,
                scale: 1,
                rotate: 0,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 360,
              }}
            >
              <img src={sneaker.media} alt={sneaker.name} />
            </motion.div>

            <motion.div
              className="left__info"
              initial={{ opacity: 0, x: 100, y: 0, scale: 1 }}
              animate={{
                x: 0,
                y: 0,
                scale: 1,
                rotate: 0,
                opacity: 1,
              }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="left__name">{sneaker.name}</h3>
              <p>
                <span>Title:</span> {sneaker.title}
              </p>
              <p>{sneaker.colorway}</p>
            </motion.div>
            <motion.div
              className="productscreen__right"
              initial={{ opacity: 0, x: 100, y: 0, scale: 1 }}
              animate={{
                x: 0,
                y: 0,
                scale: 1,
                rotate: 0,
                opacity: 1,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="right__info">
                <p>
                  Price:<span> ${sneaker.retailPrice}</span>
                </p>
                <p>
                  Status:<span> In Stock</span>
                </p>
                <p>
                  QTY
                  <select value={qty} onChange={(e) => setQty(e.target.value)}>
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
                </p>
                <p>
                  <button type="button" onClick={addToCartHandler}>
                    Add To Cart
                  </button>
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
};

export default SneakerScreen;
