import { css } from "@emotion/react";

import { colors, mediaQuery, subTitle } from "../styles/CommonStyles";
import Item from "./Item";
import Button from "./Button";
import Counter from "./Counter";
import Spacer from "./Spacer";
import {
  useFetchItemsQuery,
  useRemoveAllItemsMutation,
  useRemoveItemMutation,
  useUpdateQuantityMutation,
} from "../data/services/CartApi";
import { useSelector } from "react-redux";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const [updateQuantity] = useUpdateQuantityMutation();
  const [removeAllItems] = useRemoveAllItemsMutation();
  const [removeItem] = useRemoveItemMutation();

  const { refetch } = useFetchItemsQuery();

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
          height="300px"
          width="300px"
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

  // TODO - Should this button be converted
  return (
    <div css={styles.container}>
      <div css={styles.top}>
        <h6>CART({items.length})</h6>
        <button onClick={() => removeAll()}>Remove all</button>
      </div>
      <Spacer value="2rem" />
      <div css={styles.items}>{getItems()}</div>
      <Button size="stretch">CHECKOUT</Button>
    </div>
  );
}

const styles = {
  container: css({
    width: "22rem",
    padding: "2rem",
    height: "29rem",
    color: "var(--color-secondary)",
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
    height: "60%",
  }),
  counter: css({
    width: "6.5rem",
    height: "2.5rem",
    background: "red",
  }),
  emptyCart: css({
    textAlign: "center",
  }),
};
