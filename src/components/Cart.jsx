import { css } from "@emotion/react";
import { buttonStyles, colors, spacer, subTitle } from "../styles/CommonStyles";
import Item from "./Item";

export default function Cart() {
  const getItems = () => {
    const products = localStorage.getItem("products");
    if (!products) return <></>;

    const jsonProducts = JSON.parse(products);

    // TODO - Implement logic for + and -
    return Object.keys(jsonProducts).map((name) => (
      <Item
        key={name}
        name={name}
        amount={jsonProducts[name]["amount"]}
        currSymbol={jsonProducts[name]["currSymbol"]}
        child={
          <div css={cartStyles.counter}>
            <button onClick={() => {}}>-</button>
            <p>{jsonProducts[name]["quantity"]}</p>
            <button onClick={() => {}}>+</button>
          </div>
        }
      />
    ));
  };
  // TODO - Remove hardcoded count
  return (
    <div css={cartStyles.container}>
      <div css={cartStyles.top}>
        <h6>CART(2)</h6>
        <button>Remove all</button>
      </div>
      <div css={spacer("1rem")}></div>
      <div>{getItems()}</div>
      <button css={buttonStyles(colors.white, colors.orange)}>CHECKOUT</button>
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
    },
  }),
  counter: css({
    display: "flex",
    width: "110px",
    height: "35px",
    background: colors.grey,
    justifyContent: "space-around",
    alignItems: "center",
    button: {
      border: "none",
      color: colors.black,
      opacity: "25%",
      "&:hover": {
        cursor: "pointer",
      },
    },
  }),
};
