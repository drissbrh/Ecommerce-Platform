import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import { useState } from "react";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <div className="App">
      <Router>
        <Navbar click={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <main className="app">
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/page/:pageNumber" component={HomeScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart" component={CartScreen} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
