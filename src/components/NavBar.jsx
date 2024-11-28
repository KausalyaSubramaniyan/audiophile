import { css } from "@emotion/react";
import { useState } from "react";

import { colors, mediaQuery } from "../styles/CommonStyles";

import Logo from "../../public/images/shared/desktop/logo.svg";
import CartIcon from "../../public/images/shared/desktop/icon-cart.svg";
import Cart from "./Cart";
import Overlay from "./Overlay";
import Nav from "./Nav";
import { useSelector } from "react-redux";

// TODO - Implement icon button
export default function NavBar({ customStyles = css({}) }) {
  const [isVisible, setIsVisible] = useState(false);
  const itemsCount = useSelector((state) => state.cart.items).length;

  return (
    <div css={[styles.container, customStyles]}>
      <div css={styles.hamburgerMenu}>
        <div css={styles.line}></div>
        <div css={styles.line}></div>
        <div css={styles.line}></div>
      </div>
      <Logo />
      <div css={styles.nav}>
        <Nav />
      </div>
      <button onClick={() => setIsVisible(!isVisible)} css={styles.cartButton}>
        {itemsCount > 0 && <div css={styles.badge}>{itemsCount}</div>}
        <CartIcon />
      </button>
      <Overlay
        open={isVisible}
        onClick={() => setIsVisible(!isVisible)}
        placement="top-right"
      >
        <Cart />
      </Overlay>
    </div>
  );
}

const styles = {
  container: css({
    color: colors.white,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0rem var(--side-spacing)",
    backgroundColor: "var(--color-black-900)",
    height: "var(--nav-bar-height)",
  }),
  cartButton: css({
    background: "none",
    border: "none",
    "&:hover": {
      cursor: "pointer",
    },
    position: "relative",
  }),
  badge: css({
    height: "20px",
    width: "20px",
    borderRadius: "50%",
    backgroundColor: "var(--color-primary)",
    position: "absolute",
    left: "45%",
    bottom: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    color: "var(--color-white-1000)",
  }),
  hamburgerMenu: css({
    height: "20%",
    flexDirection: "column",
    justifyContent: "space-between",
    display: "none",
    [mediaQuery["md"]]: {
      display: "flex",
    },
  }),
  line: css({
    height: "4px",
    width: "20px",
    backgroundColor: "var(--color-white-1000)",
  }),
  nav: css({
    width: "40%",
    [mediaQuery["md"]]: {
      display: "none",
    },
  }),
};
