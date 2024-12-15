import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { mediaQuery, subTitle } from "../styles/CommonStyles";
import Item from "./Item";
import Button from "./Button";
import Counter from "./Counter";
import Spacer from "./Spacer";
import {
  useGetCartQuery,
  useRemoveAllItemsMutation,
  useRemoveItemMutation,
  useUpdateQuantityMutation,
} from "../data/services/CartApi";

export default function Cart() {
  const navigate = useNavigate();
  const { items, bill } = useSelector((state) => state.cart);
  const [updateQuantity] = useUpdateQuantityMutation();
  const [removeAllItems] = useRemoveAllItemsMutation();
  const [removeItem] = useRemoveItemMutation();

  const { refetch } = useGetCartQuery();

  const updateItemQuantity = async (item, targetQuantity) => {
    if (targetQuantity === 0) {
      await removeItem(item);
    } else {
      await updateQuantity({ ...item, quantity: targetQuantity });
    }
    refetch();
  };

  if (items.length === 0) {
    return (
      <div css={[styles.container, styles.emptyCart]}>
        <img
          alt="Empty Cart"
          src="/images/cart/empty-cart.png"
          css={styles.emptyCartImg}
        />
        <h6>Your cart is empty</h6>
        <p css={subTitle}>
          Looks like you have not added anything to your cart. Go ahead &
          explore top categories.
        </p>
      </div>
    );
  }

  const getItems = () => {
    return items.map((item) => {
      return (
        <Item
          key={item.id}
          name={item.name}
          amount={item.amount}
          currSymbol={item.currSymbol}
          imgUrl={item.imgUrl}
          child={
            <div css={styles.counter}>
              <Counter
                count={item.quantity}
                increment={() => updateItemQuantity(item, item.quantity + 1)}
                decrement={() => updateItemQuantity(item, item.quantity - 1)}
              />
            </div>
          }
        />
      );
    });
  };

  const removeAll = async () => {
    await removeAllItems();
    refetch();
  };

  const checkout = () => {
    navigate("/checkout");
  };

  return (
    <div css={styles.container}>
      <div css={styles.top}>
        <h6>CART({items.length})</h6>
        <Button
          variant="ghost"
          css={styles.removeAllBtn}
          onClick={() => removeAll()}
        >
          Remove all
        </Button>
      </div>
      <Spacer value="2rem" />
      <div css={styles.items}>{getItems()}</div>
      <div css={styles.total}>
        <p css={styles.totalText}>TOTAL</p>
        <p css={styles.totalAmt}>
          {bill.currSymbol} {bill.total.toLocaleString()}
        </p>
      </div>
      <Button size="stretch" onClick={() => checkout()}>
        CHECKOUT
      </Button>
    </div>
  );
}

const styles = {
  container: css({
    width: "20rem",
    padding: "2rem",
    maxHeight: "29rem",
    color: "var(--color-secondary)",
    [mediaQuery["sm"]]: {
      width: "inherit",
    },
  }),
  top: css({
    display: "flex",
    justifyContent: "space-between",
  }),
  removeAllBtn: css({
    opacity: "65%",
    textDecoration: "underline"
  }),
  items: css({
    maxHeight: "17.4rem",
    overflowY: "auto",
  }),
  counter: css({
    width: "6.5rem",
    height: "2.5rem",
  }),
  emptyCart: css({
    textAlign: "center",
  }),
  emptyCartImg: css({
    height: "300px",
    width: "300px",
    [mediaQuery["md"]]: {
      height: "270px",
      width: "270px",
    },
    [mediaQuery["sm"]]: {
      height: "200px",
      width: "200px",
    },
  }),
  total: css({
    display: "flex",
    justifyContent: "space-between",
  }),
  totalText: css({
    fontSize: "15px",
    opacity: "50%",
  }),
  totalAmt: css({
    fontSize: "18px",
    fontWeight: "700",
  }),
};
