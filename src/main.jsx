import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import "./index.css";
import Product from "./pages/Product.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Checkout from "./pages/Checkout.jsx";
import { Provider } from "react-redux";
import { store } from "./data/store.js";
import Init from "./components/Init.jsx";

const router = createBrowserRouter([
  {
    element: <Init />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/products/headphones",
        element: <Product key="headphones" name="headphones" />
      },
      {
        path: "/products/speakers",
        element: <Product key="speakers" name="speakers" />
      },
      {
        path: "/products/earphones",
        element: <Product key="earphones" name="earphones" />
      },
      {
        path: "/products/:productCategory/:id",
        element: <ProductDetails />
      },
      {
        path: "/checkout", element: <Checkout />
      }
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} >
      </RouterProvider>
    </Provider>
  </StrictMode>
);
