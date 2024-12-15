import { useSelector } from "react-redux";
import { useGetCartQuery } from "../data/services/CartApi";
import { Outlet, ScrollRestoration } from "react-router-dom";

export default function Init() {
  const cart = useSelector((state) => state.cart);

  useGetCartQuery(cart.items, {
    skip: cart.fetched,
  });

  return <>
    <Outlet />
    <ScrollRestoration />
  </>;
}
