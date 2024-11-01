import { useSelector } from "react-redux";
import { useFetchItemsQuery } from "../data/services/CartApi";
import { Outlet } from "react-router-dom";

export default function Init() {
  const cart = useSelector((state) => state.cart);

  useFetchItemsQuery(cart.items, {
    skip: cart.fetched,
  });
  
  return <Outlet />;
}
