import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { colors, spacing, subTitle } from "../styles/CommonStyles";
import Logo from "../../public/images/shared/desktop/logo.svg";
import Spacer from "./Spacer";

export default function Footer() {
  return (
    <div css={styles.container}>
      <div css={styles.twoCol}>
        <Logo />
        <ul css={styles.nav}>
          <ol>
            <Link to={`/`} css={styles.link}>
              HOME
            </Link>
          </ol>
          <ol>
            <Link to={`/headphones`} css={styles.link}>
              HEADPHONES
            </Link>
          </ol>
          <ol>
            <Link to={`/speakers`} css={styles.link}>
              SPEAKERS
            </Link>
          </ol>
          <ol>
            <Link to={`/earphones`} css={styles.link}>
              EARPHONES
            </Link>
          </ol>
        </ul>
      </div>
      <Spacer value="1rem" />
      <div css={styles.twoCol}>
        <p css={styles.description}>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <ul css={[styles.icons, styles.nav]}>
          <ol>
            <img
              alt="facebook"
              src="/images/shared/desktop/icon-facebook.svg"
            />
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
      <div css={styles.twoCol}>
        <p css={subTitle}>Copyright 2021. All Rights Reserved</p>
      </div>
    </div>
  );
}

const styles = {
  container: css({
    backgroundColor: colors.lightBlack,
    padding: "4rem 0rem 3rem 0rem",
    color: colors.white,
  }),
  nav: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    margin: "0",
  }),
  link: css([
    subTitle,
    {
      opacity: "100%",
      color: colors.white,
      textDecoration: "none",
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
