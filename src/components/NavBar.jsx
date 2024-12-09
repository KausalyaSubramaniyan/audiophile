import { css } from "@emotion/react";
import { useState } from "react";

import { colors, mediaQuery } from "../styles/CommonStyles";

import Logo from "../../public/images/shared/desktop/logo.svg";
import CartIcon from "../../public/images/shared/desktop/icon-cart.svg";
import Cart from "./Cart";
import Overlay from "./Overlay";
import Nav from "./Nav";
import ProductCards from "./ProductCards";
import { useSelector } from "react-redux";

// TODO - Implement icon button
export default function NavBar({ customStyles = css({}) }) {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isCategoryVisible, setIsCategoryVisible] = useState(false);
  const itemsCount = useSelector((state) => state.cart.items).length;

  return (
    <div css={[styles.container, customStyles]}>
      <div
        css={styles.hamburgerMenu}
        onClick={() => {
          setIsCategoryVisible(!isCartVisible);
        }}
      >
        <div
          css={isCategoryVisible ? [styles.line, styles.line1] : styles.line}
        ></div>
        <div
          css={isCategoryVisible ? [styles.line, styles.line2] : styles.line}
        ></div>
        <div
          css={isCategoryVisible ? [styles.line, styles.line3] : styles.line}
        ></div>
      </div>
      <Overlay
        open={isCategoryVisible}
        onClick={() => setIsCategoryVisible(!isCategoryVisible)}
        placement="top-left"
        customCss={styles.categoryMenuContainer}
      >
        <ProductCards />
      </Overlay>
      <Logo />
      <div css={styles.nav}>
        <Nav />
      </div>
      <button
        onClick={() => setIsCartVisible(!isCartVisible)}
        css={styles.cartButton}
      >
        {itemsCount > 0 && <div css={styles.badge}>{itemsCount}</div>}
        <CartIcon />
      </button>
      <Overlay
        open={isCartVisible}
        onClick={() => setIsCartVisible(!isCartVisible)}
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
  line1: css({
    transform: "rotate(45deg)",
    transformOrigin: "top left",
    width: "22px",
    transition: "all 125ms ease-in-out",
  }),
  line2: css({
    width: "0",
  }),
  line3: css({
    transform: "rotate(-45deg)",
    transformOrigin: "bottom left",
    width: "22px",
    transition: "all 125ms ease-in-out",
  }),
  nav: css({
    width: "40%",
    [mediaQuery["lg"]]: {
      width: "50%",
    },
    [mediaQuery["md"]]: {
      display: "none",
    },
  }),
  categoryMenuContainer: css({
    left: "0",
    right: "0",
    borderRadius: "0",
    padding: "3rem 2rem 5rem 2rem",
    color: "var(--color-secondary)",
    [mediaQuery["sm"]]: {
      padding: "1rem 2rem 2rem 2rem",
      left: "0",
    },
  }),
};
