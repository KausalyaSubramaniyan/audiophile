import { css } from "@emotion/react";

import NavBar from "./NavBar";
import { colors, spacing } from "../styles/CommonStyles";

export default function ProductHeroSection({ product }) {
  return (
    <>
      <NavBar />
      <div css={styles.lineContainer}>
        <hr css={styles.line}></hr>
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
    backgroundColor: colors.lightBlack,
    color: colors.white,
  }),
  line: {
    margin: "0rem var(--side-spacing)",
    opacity: "25%",
  },
  lineContainer: {
    background: colors.lightBlack,
  },
};
