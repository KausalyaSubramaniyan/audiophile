import { css } from "@emotion/react";
import { colors, overline, spacing } from "../styles/CommonStyles";
import headphone from "../assets/images/home/desktop/image-hero.jpg";

export default function HeroSection() {
  return (
    <div css={heroStyles.container}>
      <div css={heroStyles.description}>
        <p css={overline}>NEW PRODUCT</p>
        <h1>XX99 MARK II HEADPHONES</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
      </div>
      <div>
        <img alt="headphone" src={headphone} css={heroStyles.img} />
      </div>
    </div>
  );
}

const heroStyles = {
  container: css({
    backgroundColor: colors.black,
    color: colors.white,
    height: "30rem",
    display: "flex",
    padding: `0rem ${spacing.md}`,
    alignItems: "center",
  }),
  img: css({
    height: "80%",
    width: "80%",
    objectFit: "cover",
    objectPosition: "90% 100%",
  }),
  description: css({
    width: "45%",
    p: {
      width: "95%",
    },
  }),
};
