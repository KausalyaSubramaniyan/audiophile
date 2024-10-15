import { css } from "@emotion/react";
import { colors, spacer } from "../styles/CommonStyles";
import Item from "./Item";
import Button from "./Button";
import Counter from "./Counter";
import useCounter from "../hooks/useCounter";
import { useEffect, useState } from "react";

function CartCounter({ quantity }) {
  const { count, increment, decrement } = useCounter(quantity);
  return <Counter count={count} increment={increment} decrement={decrement} />;
}

export default function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    let products = localStorage.getItem("products");
    if (!products) {
      setItems([]);
      return;
    }

    products = JSON.parse(products);
    setItems(
      Object.keys(products).map((name) => {
        return (
          <Item
            key={name}
            name={name}
            amount={products[name]["amount"]}
            currSymbol={products[name]["currSymbol"]}
            child={<CartCounter quantity={products[name]["quantity"]} />}
          />
        );
      })
    );
  };

  const removeAll = () => {
    localStorage.removeItem("products");
    setItems([]);
  };

  // TODO - Should this button be converted
  return (
    <div css={cartStyles.container}>
      <div css={cartStyles.top}>
        <h6>CART({items.length})</h6>
        <button onClick={() => removeAll()}>Remove all</button>
      </div>
      <div css={spacer("1rem")}></div>
      <div>{items}</div>
      <Button size="stretch">CHECKOUT</Button>
    </div>
  );
}

const cartStyles = {
  container: css({
    width: "22rem",
    padding: "2rem",
    maxHeight: "15rem",
    color: colors.black,
  }),
  top: css({
    display: "flex",
    justifyContent: "space-between",
    button: {
      border: "none",
      backgroundColor: colors.white,
      opacity: "65%",
      textDecoration: "underline",
      "&:hover": {
        cursor: "pointer",
      },
    },
  }),
};
