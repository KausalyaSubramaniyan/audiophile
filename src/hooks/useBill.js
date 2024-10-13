import { useEffect, useState } from "react";

export default function useBill(products) {
  const [total, setTotal] = useState(0);
  const [vat, setVat] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    if (products) {
      const jsonProducts = JSON.parse(products);
      const amt = Object.keys(jsonProducts).reduce((total, productName) => {
        return (
          jsonProducts[productName]["amount"] *
            jsonProducts[productName]["quantity"] +
          total
        );
      }, 0);
      setTotal(amt);
      setVat(amt * 0.2);
      setShipping(50);
      setGrandTotal(amt + shipping);
    }
  }, [products]);

  return { total, vat, shipping, grandTotal };
}
