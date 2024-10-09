import { css } from "@emotion/react";
import { colors, spacing, subTitle } from "../styles/CommonStyles";
import Logo from "../../public/images/shared/desktop/logo.svg";

export default function Footer() {
  return (
    <div css={footerStyles.container}>
      <div css={footerStyles.twoCol}>
        <Logo />
        <ul css={footerStyles.nav}>
          <ol>HOME</ol>
          <ol>HEADPHONES</ol>
          <ol>SPEAKERS</ol>
          <ol>EARPHONES</ol>
        </ul>
      </div>
      <div css={footerStyles.twoCol}>
        <p css={footerStyles.description}>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <ul css={[footerStyles.icons, footerStyles.nav]}>
          <ol>
            <img alt="facebook" src="/images/shared/desktop/icon-facebook.svg" />
          </ol>
          <ol>
            <img alt="twitter" src="/images/shared/desktop/icon-twitter.svg" />
          </ol>
          <ol>
            <img
              alt="instagram"
              src="/images/shared/desktop/icon-instagram.svg"
            />
          </ol>
        </ul>
      </div>
      <div css={footerStyles.twoCol}>
        <p css={subTitle}>
          Copyright 2021. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

const footerStyles = {
  container: css({
    backgroundColor: colors.lightBlack,
    padding: "4rem 0rem 3rem 0rem",
    color: colors.white,
  }),
  nav: css([
    subTitle,
    {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      opacity: "100%",
    },
  ]),
  description: css([subTitle, { width: "55%" }]),
  icons: css({ width: "10%", ol: { padding: "0px" } }),
  twoCol: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    margin: `0rem ${spacing.md}`,
  }),
};
