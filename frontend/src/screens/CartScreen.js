import React from "react";
import "./CartScreen.css";
import { useDispatch, useSelector } from "react-redux";

//actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

//components
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

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
        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </div>
          <div>
            <button>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
