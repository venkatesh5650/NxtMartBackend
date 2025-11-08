import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Checkout from "./components/CheckOut";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/" element={<ProtectedRoute Component={Home} />} />
        <Route
          exact
          path="/cart"
          element={<ProtectedRoute Component={Cart} />}
        />
        <Route
          exact
          path="/Checkout"
          element={<ProtectedRoute Component={Checkout} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
