import { css } from "@emotion/react";

export default function Spinner() {
  return <div css={styles.container}></div>;
}

const styles = {
  container: css({
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "5px solid var(--color-grey-200)",
    borderTop: "5px solid var(--color-primary)",
    animation: "spin 1.2s linear infinite",
    "@keyframes spin": {
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
    },
  }),
};
