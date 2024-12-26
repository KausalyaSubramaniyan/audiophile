import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

import { centerAlign, mediaQuery, overline } from "../styles/CommonStyles";

import Button from "./core/Button";
import Divider from "./core/Divider";

export default function HomeHeroSection() {
  const navigate = useNavigate();

  return (
    <div css={styles.container}>
      <Divider />
      <div css={styles.heroContainer}>
        <div css={styles.backgroundParent}>
          <div css={styles.text}>
            <p css={styles.tag}>NEW PRODUCT</p>
            <h1>XX99 MARK II HEADPHONES</h1>
            <p css={styles.description}>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button onClick={() => navigate("/products/headphones/4")}>
              SEE PRODUCT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: css({
    backgroundColor: "var(--color-black-800)",
    [mediaQuery["md"]]: {
      backgroundColor: "var(--color-black-850)",
    },
  }),
  heroContainer: css({
    margin: "0rem var(--side-spacing)",
    height: "41rem",
  }),
  backgroundParent: css({
    backgroundImage: "url(/images/home/desktop/image-hero.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
    color: "var(--color-white-1000)",
    display: "flex",
    alignItems: "center",
    [mediaQuery["md"]]: {
      backgroundImage: "url(/images/home/tablet/image-hero.jpg)",
      justifyContent: "center",
      margin: "0",
    },
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
