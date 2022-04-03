import React, { useState, useEffect } from "react";
import "./ProductScreen.css";
import { useDispatch, useSelector } from "react-redux";

//Actions
import { getProductDetails as productDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const getProductDetails = useSelector((state) => state.getProductDetails);
  const { product, loading, error } = getProductDetails;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(`/cart`);
  };
  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(productDetails(match.params.id));
    }
  }, [dispatch, product, match]);

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
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.media} alt={product.name} />
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p>Price: ${product.retailPrice}</p>
              <p>{product.colorway}</p>
            </div>
            <div className="productscreen__right">
              <div className="right__info">
                <p>
                  Price:<span> ${product.retailPrice}</span>
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
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
