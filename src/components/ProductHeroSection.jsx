import { css } from "@emotion/react";

import NavBar from "./NavBar";
import { line } from "../styles/CommonStyles";

export default function ProductHeroSection({ product }) {
  return (
    <>
      <NavBar />
      <div css={styles.lineContainer}>
        <div css={line}></div>
      </div>
      <h2 css={styles.title}>{product}</h2>
    </>
  );
}

const styles = {
  title: css({
    padding: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--color-black-900)",
    color: "var(--color-white-1000)",
  }),
  lineContainer: css({
    background: "var(--color-black-900)",
  }),
};
