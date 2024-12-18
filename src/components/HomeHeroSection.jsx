import { css } from "@emotion/react";
import {
  centerAlign,
  colors,
  line,
  mediaQuery,
  overline,
} from "../styles/CommonStyles";

import NavBar from "./NavBar";
import Button from "./core/Button";
import Divider from "./core/Divider";

export default function HomeHeroSection() {
  return (
    <div css={styles.container}>
      <NavBar customStyles={styles.navbar} />
      <Divider />
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
    height: "100%",
    width: "100%",
    backgroundImage: "url(/images/home/desktop/image-hero.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [mediaQuery["md"]]: {
      backgroundImage: "url(/images/home/tablet/image-hero.jpg)",
    },
  }),
  heroContainer: css({
    color: colors.white,
    height: "41rem",
    display: "flex",
    margin: "0rem var(--side-spacing)",
    alignItems: "center",
    [mediaQuery["md"]]: css({
      justifyContent: "center",
      width: "100%",
      margin: "0",
    }),
    [mediaQuery["sm"]]: css({
      height: "36rem",
    }),
  }),
  description: css({
    opacity: "75%",
    marginBottom: "2rem",
  }),
  tag: css([
    overline,
    {
      opacity: "49.64%",
      marginTop: "0",
    },
  ]),
  text: css({
    width: "38%",
    [mediaQuery["md"]]: css([
      centerAlign,
      {
        width: "48%",
        flexDirection: "column",
        textAlign: "center",
      },
    ]),
  }),
  navbar: css({
    backgroundColor: "transparent",
  }),
};
