import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/NavBar";
import Carts from "./pages/Carts";

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <BrowserRouter>
        <Navbar cart={cart} setCart={setCart} />
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
          <Route
            path="about"
            element={<About cart={cart} setCart={setCart} />}
          />
          <Route
            path="card"
            element={<Carts cart={cart} setCart={setCart} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
