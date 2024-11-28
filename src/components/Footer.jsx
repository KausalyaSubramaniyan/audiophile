import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { colors, mediaQuery, spacing, subTitle } from "../styles/CommonStyles";
import Logo from "../../public/images/shared/desktop/logo.svg";
import Spacer from "./Spacer";
import Nav from "./Nav";

function Icons({ styles }) {
  return (
    <ul css={styles}>
      <ol>
        <img alt="facebook" src="/images/shared/desktop/icon-facebook.svg" />
      </ol>
      <ol>
        <img alt="twitter" src="/images/shared/desktop/icon-twitter.svg" />
      </ol>
      <ol>
        <img alt="instagram" src="/images/shared/desktop/icon-instagram.svg" />
      </ol>
    </ul>
  );
}

export default function Footer() {
  return (
    <div css={styles.container}>
      <div css={styles.line} />
      <div css={styles.row1}>
        <Logo />
        <div css={styles.navContainer}>
          <Nav />
        </div>
      </div>
      <Spacer value="1rem" />
      <div css={styles.row2}>
        <p css={styles.text}>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <Icons styles={styles.iconsTop} />
      </div>
      <Spacer value="3rem" />
      <div css={styles.row3}>
        <p css={styles.text}>Copyright 2021. All Rights Reserved</p>
        <Icons styles={styles.iconsBottom} />
      </div>
    </div>
  );
}

const styles = {
  container: css({
    backgroundColor: colors.lightBlack,
    padding: "3rem 0rem 2.5rem 0rem",
    color: colors.white,
    position: "relative",
  }),
  iconsTop: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    margin: "0",
    width: "10%",
    ol: { padding: "0px" },
    [mediaQuery["lg"]]: {
      display: "none",
    },
  }),
  iconsBottom: css({
    justifyContent: "space-between",
    alignItems: "flex-end",
    margin: "0",
    width: "10%",
    ol: { padding: "0px" },
    display: "none",
    [mediaQuery["lg"]]: {
      display: "flex",
      padding: "0",
      width: "15%",
    },
    [mediaQuery["md"]]: {
      display: "flex",
      width: "15%",
    },
    [mediaQuery["md"]]: {
      display: "flex",
      width: "25%",
    },
  }),
  text: css({ width: "50%", opacity: "50%", marginBottom: "0" }),
  row1: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    margin: "0rem var(--side-spacing)",
    [mediaQuery["lg"]]: {
      flexDirection: "column",
      alignItems: "flex-start",
      rowGap: "var(--spacing-1-5)",
      ul: {
        width: "50%",
      },
    },
    [mediaQuery["md"]]: {
      flexDirection: "column",
      alignItems: "center",
      rowGap: "var(--spacing-1-5)",
      ul: {
        flexDirection: "column",
        alignItems: "center",
        rowGap: "var(--spacing-1-5)",
      },
    },
  }),
  row2: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    margin: "0rem var(--side-spacing)",
    [mediaQuery["lg"]]: {
      p: { width: "80%" },
    },
    [mediaQuery["md"]]: {
      p: { width: "100%", textAlign: "center" },
    },
  }),
  row3: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    margin: "0rem var(--side-spacing)",
    rowGap: "var(--spacing-2)",
    [mediaQuery["md"]]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      width: "100%",
      p: {
        width: "100%",
      },
    },
  }),
  line: css({
    position: "absolute",
    top: "0",
    left: "var(--side-spacing)",
    background: "var(--color-primary)",
    height: "4px",
    width: "96px",
  }),
  navContainer: css({
    width: "40%",
  }),
};
