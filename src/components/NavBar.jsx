import { css } from "@emotion/react";
import { useState } from "react";

import { colors } from "../styles/CommonStyles";

import Logo from "../../public/images/shared/desktop/logo.svg";
import CartIcon from "../../public/images/shared/desktop/icon-cart.svg";
import Cart from "./Cart";
import Overlay from "./Overlay";
import Nav from "./Nav";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div css={navBarStyles.container}>
      <Logo />
      <Nav />
      <button
        onClick={() => setIsVisible(!isVisible)}
        css={navBarStyles.cartButton}
      >
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

const navBarStyles = {
  container: css({
    color: colors.white,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.2rem var(--side-spacing)",
    backgroundColor: "var(--color-black-900)"
  }),
  cartButton: css({
    background: "none",
    border: "none",
    "&:hover": {
      cursor: "pointer",
    },
  }),
};
