import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/userActions";

const Navbar = ({ click }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error, loading } = userLogin;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">MySneakers</Link>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/home">
            <i className="fa-solid fa-shop"></i>
          </Link>
        </li>

        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        {userInfo ? (
          <>
            <li>
              <Link to="/profile">
                <i className="fa-solid fa-user"></i>
              </Link>
            </li>
            <li className="logoutItem" onClick={logoutHandler}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </Link>
          </li>
        )}
      </ul>
      <div className="threeLines" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
