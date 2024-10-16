import { css } from "@emotion/react";
import { colors, overline, spacing } from "../styles/CommonStyles";

import NavBar from "./NavBar";
import Button from "./Button";

export default function HomeHeroSection() {
  return (
    <div css={styles.container}>
      <NavBar />
      <div css={styles.lineContainer}>
        <hr css={styles.line}></hr>
      </div>
      <div css={styles.heroContainer}>
        <div css={styles.text}>
          <p css={styles.tag}>NEW PRODUCT</p>
          <h1>XX99 MARK II HEADPHONES</h1>
          <p css={styles.description}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button>SEE PRODUCT</Button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: css({
    backgroundImage: "url(/images/home/desktop/image-hero.jpg)",
  }),
  heroContainer: css({
    color: colors.white,
    height: "41rem",
    display: "flex",
    padding: "0rem var(--side-spacing)",
    alignItems: "center",
  }),
  description: css({
    opacity: "75%",
    marginBottom: "2rem",
  }),
  tag: css([
    overline,
    {
      opacity: "49.64%",
    },
  ]),
  text: css({
    width: "45%",
    p: {
      width: "75%",
    },
  }),
  line: {
    margin: "0rem var(--side-spacing)",
    opacity: "25%",
  },
  lineContainer: {
    background: "#141414",
  },
};
