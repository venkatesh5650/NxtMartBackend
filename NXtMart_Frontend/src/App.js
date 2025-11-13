import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import SignUp from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Checkout from "./components/CheckOut";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./components/NotFound";
import ProductDetails from "./components/ProductDetails";

import "./App.css";

function App() {
  const token = localStorage.getItem("jwt_token");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/" element={<ProtectedRoute Component={Home} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
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

        {/*  Catch-all route for undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
