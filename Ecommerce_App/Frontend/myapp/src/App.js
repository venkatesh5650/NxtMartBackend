import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Checkout from "./components/CheckOut";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/Checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
