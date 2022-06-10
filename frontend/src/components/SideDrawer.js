import React from "react";
import "./SideDrawer.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/userActions";

const SideDrawer = ({ show, click }) => {
  const dispatch = useDispatch();
  const sideDrawerClass = ["sidedrawer"];

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  if (show) {
    sideDrawerClass.push("show");
  }

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error, loading } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/">Shop</Link>
        </li>
        {userInfo ? (
          <>
            <li>
              <Link to="/profile">{userInfo.name.split(" ")[0]}</Link>
            </li>
            <li className="logoutItem" onClick={logoutHandler}>
              logout
            </li>
            <li>
              <Link to="/cart">
                <i className="fas fa-shopping-cart"></i>
                <span>
                  Cart
                  <span className="sidedrawer__cartbadge">
                    {getCartCount()}
                  </span>
                </span>
              </Link>
            </li>
            <li className="logout__sidedrawer" onClick={logoutHandler}>
              logout
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Sign In</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SideDrawer;
