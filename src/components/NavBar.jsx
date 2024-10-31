import { css } from "@emotion/react";
import { useState } from "react";

import { colors } from "../styles/CommonStyles";

import Logo from "../../public/images/shared/desktop/logo.svg";
import CartIcon from "../../public/images/shared/desktop/icon-cart.svg";
import Cart from "./Cart";
import Overlay from "./Overlay";
import Nav from "./Nav";
import { useSelector } from "react-redux";

// TODO - Implement icon button
export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);
  const items = useSelector((state) => state.cart.items);
  const itemsCount = items ? items.length : 0;
  return (
    <div css={styles.container}>
      <Logo />
      <Nav />
      <button onClick={() => setIsVisible(!isVisible)} css={styles.cartButton}>
        {itemsCount && <div css={styles.badge}>{itemsCount}</div>}
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
};
