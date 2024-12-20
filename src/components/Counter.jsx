import { css } from "@emotion/react";

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
    background: "var(--color-grey-200)",
    justifyContent: "space-around",
    alignItems: "center",
  }),
  button: css({
    border: "none",
    color: "var(--color-secondary)",
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
      color: "var(--color-secondary)",
      opacity: "25%",
    },
  }),
};
