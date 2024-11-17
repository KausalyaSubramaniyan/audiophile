import { css } from "@emotion/react";
import Item from "./Item";

export default function ItemWithQuantity({ item }) {
  return (
    <Item
      name={item.name}
      amount={item.amount}
      currSymbol={item.currSymbol}
      imgUrl={item.imgUrl}
      child={<p css={styles.quantity}>x{item.quantity}</p>}
    ></Item>
  );
}

const styles = {
  quantity: css({
    opacity: "50%",
    fontWeight: "700",
    margin: "0",
  }),
};
