import { css } from "@emotion/react";
import { useState } from "react";
import { colors } from "../styles/CommonStyles";
import useCounter from "../hooks/useCounter";

// TODO - Implement logic from removing from cart on count of zero
export default function Counter({ count, increment, decrement }) {
  return (
    <div css={styles.counter}>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}

const styles = {
  counter: css({
    display: "flex",
    width: "120px",
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
