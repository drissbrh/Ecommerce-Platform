import React, { useEffect } from "react";
import "./CartScreen.css";
import { useDispatch, useSelector } from "react-redux";

//actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

//components
import CartItem from "../components/CartItem";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { USER_DETAILS_RESET } from "../redux/constants/userConstants";
import { ORDER_CREATE_RESET } from "../redux/constants/orderConstants";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productId = useParams().id;
  const search = useLocation().search;
  const qty = search ? Number(search.split("=")[1]) : 1;

  const quantityHandlerchange = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };
  const checkoutHandler = () => {
    navigate("/shipping");
  };

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;
  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`);
      dispatch({ type: USER_DETAILS_RESET });
      dispatch({ type: ORDER_CREATE_RESET });
    }
    // eslint-disable-next-line
  }, [navigate, dispatch, success]);
  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <>
            <h2>Shopping Cart</h2>
          </>
          {cartItems.length > 0 ? (
            cartItems.map((x) => (
              <CartItem
                product={x.product}
                name={x.name}
                qty={x.qty}
                image={x.image}
                price={x.price}
                quantity={x.qty}
                removeHandler={() => dispatch(removeFromCart(x.product))}
                quantityHandler={quantityHandlerchange}
              />
            ))
          ) : (
            <h1>
              Nothing is in the cart 🥺
              <Link to="/" className="shop__link">
                Visit Shop
              </Link>
            </h1>
          )}
        </div>
        <motion.div
          className="cartscreen__right"
          initial={{ opacity: 0, x: 100, y: 0, scale: 1 }}
          animate={{
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 260,
          }}
        >
          <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </div>
          <div>
            <button
              type="button"
              onClick={checkoutHandler}
              className="primary block"
              disabled={cartItems.length === 0}
            >
              Proceed To Checkout
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default CartScreen;
