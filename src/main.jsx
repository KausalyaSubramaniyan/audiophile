import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import "./index.css";
import Product from "./pages/Product.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Checkout from "./pages/Checkout.jsx";
import { Provider } from "react-redux";
import { store } from "./data/store.js";
import Init from "./components/Init.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Init />}>
            <Route index element={<Home />} />
            <Route
              path="headphones"
              element={<Product key="headphones" name="HEADPHONES" />}
            />
            <Route
              path="speakers"
              element={<Product key="speakers" name="SPEAKERS" />}
            />
            <Route
              path="earphones"
              element={<Product key="earphones" name="EARPHONES" />}
            />
            <Route
              path="/product/:productName/:id"
              element={<ProductDetails />}
            />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
