import { css } from "@emotion/react";
import { colors, mediaQuery } from "../styles/CommonStyles";
import Item from "./Item";
import Button from "./Button";
import Counter from "./Counter";
import Spacer from "./Spacer";
import useCounter from "../hooks/useCounter";
// import CartIcon from "../../public/images/shared/desktop/icon-cart.svg";
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

  if (items.length === 0) {
    return (
      <div css={styles.container}>
        <h3>Your cart is empty!</h3>
        {/* <CartIcon css={styles.icon} /> */}
      </div>
    );
  }

  // TODO - Should this button be converted
  return (
    <div css={styles.container}>
      <div css={styles.top}>
        <h6>CART({items.length})</h6>
        <button onClick={() => removeAll()}>Remove all</button>
      </div>
      <Spacer value="1rem" />
      <div css={styles.items}>{items}</div>
      <Button size="stretch">CHECKOUT</Button>
    </div>
  );
}

const styles = {
  container: css({
    width: "22rem",
    padding: "2rem",
    height: "29rem",
    color: colors.black,
    [mediaQuery[0]]: {
      width: "inherit",
    },
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
  items: css({
    overflowY: "auto",
    height: "80%",
  }),
  // icon: css({
  //   stroke: "var(--color-secondary)",
  //   transform: "scale(8)",
  //   marginTop: "30%",
  // }),
  // emptyCart: css({
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   flexDirection: "column",
  // }),
};
