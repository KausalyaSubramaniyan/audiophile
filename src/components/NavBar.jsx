import { css } from "@emotion/react";
import { colors, spacing, subTitle } from "../styles/CommonStyles";

import Logo from "../../public/images/shared/desktop/logo.svg";
import CartIcon from "../../public/images/shared/desktop/icon-cart.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart";
import Overlay from "./Overlay";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div css={navBarStyles.container}>
      <Logo />
      <ul css={navBarStyles.nav}>
        <ol>
          <Link to={`/`}>HOME</Link>
        </ol>
        <ol>
          <Link to={`/headphones`}>HEADPHONES</Link>
        </ol>
        <ol>
          <Link to={`/speakers`}>SPEAKERS</Link>
        </ol>
        <ol>
          <Link to={`/earphones`}>EARPHONES</Link>
        </ol>
      </ul>
      <button
        onClick={() => setIsVisible(!isVisible)}
        css={navBarStyles.cartButton}
      >
        <CartIcon />
      </button>
      <Overlay open={isVisible} onClick={() => setIsVisible(!isVisible)} placement="top-right">
        <Cart />
      </Overlay>
    </div>
  );
}

const navBarStyles = {
  container: css({
    background: colors.lightBlack,
    color: colors.white,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `1rem ${spacing.md}`,
    zIndex: "4",
  }),
  nav: css([
    subTitle,
    {
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
      opacity: "100%",
      zIndex: "2",
      a: {
        color: colors.white,
        textDecoration: "none",
      },
    },
  ]),
  cartButton: css({
    background: "none",
    border: "none",
    zIndex: "2",
    "&:hover": {
      cursor: "pointer",
    },
  }),
};
