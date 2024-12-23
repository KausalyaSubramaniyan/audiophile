import { css } from "@emotion/react";
import { mediaQuery } from "../styles/CommonStyles";
import Logo from "../../public/images/shared/desktop/logo.svg";
import FacebookLogo from "../../public/images/shared/desktop/icon-facebook.svg";
import TwitterLogo from "../../public/images/shared/desktop/icon-twitter.svg";
import InstagramLogo from "../../public/images/shared/desktop/icon-instagram.svg";
import Spacer from "./core/Spacer";
import Nav from "./Nav";

function Icons({ styles }) {
  return (
    <ul css={styles}>
      <li>
        <FacebookLogo aria-label="Facebook" />
      </li>
      <li>
        <TwitterLogo aria-label="Instagram" />
      </li>
      <li>
        <InstagramLogo aria-label="Instagram" />
      </li>
    </ul>
  );
}

export default function Footer() {
  return (
    <footer css={styles.container}>
      <div css={styles.line} />
      <div css={styles.row1}>
        <Logo aria-label="logo" />
        <div css={styles.navContainer}>
          <Nav label="Main Navigation in Footer" />
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
        <Icons styles={[styles.icons, styles.iconsTop]} />
      </div>
      <Spacer value="3rem" />
      <div css={styles.row3}>
        <p css={styles.text}>Copyright 2021. All Rights Reserved</p>
        <Icons styles={[styles.icons, styles.iconsBottom]} />
      </div>
    </footer>
  );
}

const styles = {
  container: css({
    backgroundColor: "var(--color-black-900)",
    padding: "3rem 0rem 2.5rem 0rem",
    color: "var(--color-white-1000)",
    position: "relative",
  }),
  icons: css({
    margin: "0",
    width: "10%",
    listStyleType: "none",
    li: {
      padding: "0px",
      "&:hover": {
        svg: {
          cursor: "pointer",
          path: {
            fill: "var(--color-primary)",
          },
        },
      },
    },
  }),
  iconsTop: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    [mediaQuery["lg"]]: {
      display: "none",
    },
  }),
  iconsBottom: css({
    display: "none",
    justifyContent: "space-between",
    alignItems: "flex-end",
    [mediaQuery["lg"]]: {
      display: "flex",
      padding: "0",
      width: "15%",
    },
    [mediaQuery["md"]]: {
      display: "flex",
      width: "15%",
    },
    [mediaQuery["sm"]]: {
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
        width: "100%",
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
      margin: "0",
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
    [mediaQuery["md"]]: {
      left: "calc(50% - 96px/2)",
    },
  }),
  navContainer: css({
    width: "40%",
    [mediaQuery["lg"]]: {
      width: "60%",
    },
  }),
};
