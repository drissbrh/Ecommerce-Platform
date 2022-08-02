import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveShippingAddress } from "../redux/actions/cartActions";
import "./ShippingScreen.css";

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullName: "5", address, city, postalCode, country })
    );
    navigate("/payment");
  };
  return (
    <div className="shippingaddress">
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <form onSubmit={submitHandler}>
        <div controlId="address">
          <label>Address</label>
          <input
            type="text"
            placeholder="Enter address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div controlId="city">
          <label>City</label>
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div controlId="postalCode">
          <label>Postal Code</label>
          <input
            type="text"
            placeholder="Enter postal code"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>

        <div controlId="country">
          <label>Country</label>
          <input
            type="text"
            placeholder="Enter country"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default ShippingScreen;
