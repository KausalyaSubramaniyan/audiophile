import { css } from "@emotion/react";
import { colors, overline, spacing } from "../styles/CommonStyles";

import NavBar from "./NavBar";

export default function HomeHeroSection() {
  return (
    <>
      <NavBar />
      <div css={heroStyles.lineContainer}>
        <hr css={heroStyles.line}></hr>
      </div>
      <div css={heroStyles.heroContainer}>
        <div css={heroStyles.description}>
          <p css={overline}>NEW PRODUCT</p>
          <h1>XX99 MARK II HEADPHONES</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
        </div>
        <div css={heroStyles.imgContainer}>
          <img alt="headphone" src="images/home/desktop/image-hero.jpg" css={heroStyles.img} />
        </div>
      </div>
    </>
  );
}

const heroStyles = {
  heroContainer: css({
    backgroundColor: colors.lightBlack,
    color: colors.white,
    height: "30rem",
    display: "flex",
    padding: `0rem ${spacing.md}`,
    alignItems: "center",
  }),
  img: css({
    height: "118%",
    width: "110%",
    objectFit: "cover",
    objectPosition: "90% 100%",
    position: "absolute",
    top: "-5.5rem",
    left: "0",
    zIndex: "0",
    mixBlendMode: "lighten",
  }),
  imgContainer: css({
    position: "relative",
    width: "55%",
    height: "inherit",
    margin: "4rem 1rem",
  }),
  description: css({
    width: "45%",
    p: {
      width: "75%",
    },
  }),
  line: {
    margin: `0rem ${spacing.md}`,
    opacity: "25%",
  },
  lineContainer: {
    background: colors.lightBlack,
  },
};
