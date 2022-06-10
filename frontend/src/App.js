import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";

// Screens
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import { useState } from "react";
import SneakerScreen from "./screens/SneakerScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main className="app">
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/page/:pageNumber" element={<HomeScreen />} />
          <Route path="/sneaker/:id" element={<SneakerScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
