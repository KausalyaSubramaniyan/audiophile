import { css } from "@emotion/react";
import { colors } from "../styles/CommonStyles";

export default function Counter({ count, increment, decrement }) {
  return (
    <div css={styles.counter}>
      <button
        onClick={decrement}
        disabled={count <= 0}
        css={
          count <= 0 ? [styles.button, styles.buttonOnCountZero] : styles.button
        }
      >
        -
      </button>
      <p>{count}</p>
      <button onClick={increment} css={styles.button}>
        +
      </button>
    </div>
  );
}

const styles = {
  counter: css({
    display: "flex",
    width: "100%",
    height: "100%",
    background: colors.grey,
    justifyContent: "space-around",
    alignItems: "center",
  }),
  button: css({
    border: "none",
    color: colors.black,
    opacity: "25%",
    "&:hover": {
      cursor: "pointer",
      color: "var(--color-primary)",
      opacity: "100%",
    },
  }),
  buttonOnCountZero: css({
    "&:hover": {
      cursor: "auto",
      color: colors.black,
      opacity: "25%",
    },
  }),
};
