import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import "./index.css";
import Product from "./pages/Product.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/headphones",
    element: <Product id="headphones" name="HEADPHONES" />,
  },
  {
    path: "/speakers",
    element: <Product id="speakers" name="SPEAKERS" />,
  },
  {
    path: "/earphones",
    element: <Product id="earphones" name="EARPHONES" />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
