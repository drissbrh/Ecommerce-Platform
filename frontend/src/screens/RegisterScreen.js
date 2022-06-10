import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./RegisterScreen.css";
import { registerUser } from "../redux/actions/userActions";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== newPassword) {
      setMessage("Password does not match");
    } else {
      setMessage(null);
      dispatch(registerUser(name, email, password));
    }
  };

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, error, loading } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  return (
    <div className="registerscreen">
      <h1 className="register__header">Register A New Account</h1>
      {error && <div className="signIn__error">{error}</div>}
      {loading && <div className="spinner2"></div>}
      {message && <div className="signIn__error">{message}</div>}
      <form onSubmit={handleSubmit} className="form__elements">
        <div className="username__section">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="username__section">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="username__section">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="username__section">
          <label>Confirm password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
        </div>

        <p className="login__link">
          Already have an account ? <Link to="/login">Login</Link>
        </p>
        <button type="submit" className="register__btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RegisterScreen;
