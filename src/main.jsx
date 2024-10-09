import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import "./index.css";
import Product from "./pages/Product.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/headphones",
    element: <Product key="headphones" name="HEADPHONES" />,
  },
  {
    path: "/speakers",
    element: <Product key="speakers" name="SPEAKERS" />,
  },
  {
    path: "/earphones",
    element: <Product key="earphones" name="EARPHONES" />,
  },
  {
    path: "/product/:productName/:id",
    element: <ProductDetails />,
    exact: false
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
