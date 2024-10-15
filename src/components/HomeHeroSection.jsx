import { css } from "@emotion/react";
import { colors, overline, spacing } from "../styles/CommonStyles";

import NavBar from "./NavBar";
import Button from "./Button";

export default function HomeHeroSection() {
  return (
    <>
      <NavBar />
      <div css={heroStyles.lineContainer}>
        <hr css={heroStyles.line}></hr>
      </div>
      <div css={heroStyles.heroContainer}>
        <div css={heroStyles.text}>
          <p css={heroStyles.tag}>NEW PRODUCT</p>
          <h1>XX99 MARK II HEADPHONES</h1>
          <p css={heroStyles.description}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button css={heroStyles.button}>SEE PRODUCT</Button>
        </div>
        <div css={heroStyles.imgContainer}>
          <img
            alt="headphone"
            src="images/home/desktop/image-hero.jpg"
            css={heroStyles.img}
          />
        </div>
      </div>
    </>
  );
}

const heroStyles = {
  heroContainer: css({
    backgroundColor: "#141414",
    color: colors.white,
    height: "41rem",
    display: "flex",
    padding: `0rem ${spacing.md}`,
    alignItems: "center",
  }),
  description: css({
    opacity: "75%",
  }),
  button: css({
    marginTop: "2rem",
  }),
  tag: css([
    overline,
    {
      opacity: "49.64%",
    },
  ]),
  img: css({
    height: "114.5%",
    width: "110%",
    objectFit: "cover",
    objectPosition: "80% 100%",
    position: "absolute",
    top: "-91px",
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
  text: css({
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
    background: "#141414",
  },
};
