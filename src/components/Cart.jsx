import { css } from "@emotion/react";
import { buttonStyles, colors, spacer, subTitle } from "../styles/CommonStyles";

function Item({ name, amount, currSymbol, quantity }) {
  return (
    <div css={cartStyles.itemContainer}>
      <div css={cartStyles.itemLeft}>
        <img src="/images/cart/image-xx99-mark-two-headphones.jpg" />
        <div>
          <p css={cartStyles.name}>{name}</p>
          <p css={cartStyles.currency}>
            {currSymbol} {amount}
          </p>
        </div>
      </div>
      <div css={cartStyles.counter}>
        <button onClick={() => setQuantity(quantity - 1)}>-</button>
        <p>{quantity}</p>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
    </div>
  );
}

export default function Cart() {
  const getItems = () => {
    const products = localStorage.getItem("products");
    if (!products) return;

    const jsonProducts = JSON.parse(products);

    return Object.keys(jsonProducts).map((name) => (
      <Item
        key={name}
        name={name}
        amount={jsonProducts[name]["amount"]}
        currSymbol={jsonProducts[name]["currSymbol"]}
        quantity={jsonProducts[name]["quantity"]}
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
    borderRadius: "7px",
    maxHeight: "15rem",
    position: "absolute",
    top: "4%",
    left: "58%",
    backgroundColor: colors.white,
    color: colors.black,
    zIndex: "4"
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
  name: css([
    subTitle,
    {
      fontSize: "15px",
      opacity: "100%",
      margin: "0",
    },
  ]),
  currency: css([
    subTitle,
    {
      padding: "2px 0px",
      margin: "0",
    },
  ]),
  itemContainer: css({
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",
  }),
  itemLeft: css({
    display: "flex",
    alignItems: "center",
    img: {
      height: "80px",
      width: "80px",
      borderRadius: "10px",
      marginRight: "1rem",
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
